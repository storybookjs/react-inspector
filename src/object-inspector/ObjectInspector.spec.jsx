import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ObjectInspector } from './ObjectInspector';
import { defaultDataAccessor } from '../DataAccessor';
import { describe, it, expect, vi } from 'vitest';

describe('ObjectInspector', () => {
  it('should render', () => {
    const { container } = render(<ObjectInspector />);
    expect(container).toMatchSnapshot();
  });

  it('passes `nodeRenderer` prop to <TreeView/>', () => {
    const nodeRenderer = () => <span>unit test</span>;

    const { container } = render(<ObjectInspector nodeRenderer={nodeRenderer} />);
    expect(container).toMatchSnapshot();
  });
});

describe('ObjectInspector Content', () => {
  it('should render with Maps with Regex and Maps keys', async () => {
    const user = userEvent.setup();
    const data = new Map([[/\S/g, 'Regular Expression key']]);

    const { container } = render(<ObjectInspector data={data} />);

    await new Promise((resolve) => setTimeout(resolve, 0));

    const button = container.querySelector('div');
    await user.click(button);

    expect(container).toMatchSnapshot();
  });
});

describe('lazy getter rendering (getOwnPropertyDescriptor)', () => {
  const makeData = (getterSpy) => {
    const data = { plain: 'data value' };
    Object.defineProperty(data, 'computed', {
      get: getterSpy,
      enumerable: true,
      configurable: true,
    });
    return data;
  };

  it('renders accessor properties as "(...)" WITHOUT invoking the getter', async () => {
    const user = userEvent.setup();
    const getterSpy = vi.fn(() => 'computed value');
    const data = makeData(getterSpy);

    const { container } = render(<ObjectInspector data={data} />);
    // Expand the root node
    await user.click(container.querySelector('div'));

    expect(screen.getByTitle('Invoke property getter').textContent).toBe('(...)');
    expect(screen.queryByText(/computed value/)).toBeNull();
    expect(getterSpy).not.toHaveBeenCalled();
  });

  it('invokes the getter exactly once when "(...)" is clicked and renders the value', async () => {
    const user = userEvent.setup();
    const getterSpy = vi.fn(() => 'computed value');
    const data = makeData(getterSpy);

    const { container } = render(<ObjectInspector data={data} />);
    await user.click(container.querySelector('div'));

    await user.click(screen.getByTitle('Invoke property getter'));

    expect(getterSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/computed value/)).toBeDefined();
    expect(screen.queryByTitle('Invoke property getter')).toBeNull();
  });

  it('evaluated getter values are expandable like regular nodes', async () => {
    const user = userEvent.setup();
    const data = {};
    Object.defineProperty(data, 'nested', {
      get: () => ({ inner: 42 }),
      enumerable: true,
      configurable: true,
    });

    const { container } = render(<ObjectInspector data={data} />);
    await user.click(container.querySelector('div'));
    await user.click(screen.getByTitle('Invoke property getter'));

    // The evaluated object node should now be expandable
    const nodes = container.querySelectorAll('[role="treeitem"] [role="treeitem"]');
    expect(nodes.length).toBeGreaterThan(0);
    await user.click(nodes[0].querySelector('div'));
    expect(screen.getByText(/inner/)).toBeDefined();
    expect(screen.getByText(/42/)).toBeDefined();
  });

  it('renders "(...)" in object previews without invoking getters', () => {
    const getterSpy = vi.fn(() => 'computed value');
    const data = makeData(getterSpy);

    // The root label renders an ObjectPreview of the (collapsed) object
    const { container } = render(<ObjectInspector data={data} />);

    expect(container.textContent).toContain('(...)');
    expect(container.textContent).not.toContain('computed value');
    expect(getterSpy).not.toHaveBeenCalled();
  });

  it('falls back to eager getProperty when the accessor lacks getOwnPropertyDescriptor', async () => {
    const user = userEvent.setup();
    const getterSpy = vi.fn(() => 'eager value');
    const data = makeData(getterSpy);

    // Same as the default accessor but without descriptor support
    const legacyAccessor = { ...defaultDataAccessor };
    delete legacyAccessor.getOwnPropertyDescriptor;

    const { container } = render(<ObjectInspector data={data} dataAccessor={legacyAccessor} />);
    await user.click(container.querySelector('div'));

    // Pre-descriptor behavior: getter invoked during render, value shown
    expect(getterSpy).toHaveBeenCalled();
    expect(screen.getAllByText(/eager value/).length).toBeGreaterThan(0);
    expect(screen.queryByTitle('Invoke property getter')).toBeNull();
  });

  it('non-enumerable accessor properties render lazily with showNonenumerable', async () => {
    const user = userEvent.setup();
    const getterSpy = vi.fn(() => 'hidden computed');
    const data = {};
    Object.defineProperty(data, 'hiddenComputed', {
      get: getterSpy,
      enumerable: false,
      configurable: true,
    });

    const { container } = render(<ObjectInspector data={data} showNonenumerable />);
    await user.click(container.querySelector('div'));

    expect(screen.getByTitle('Invoke property getter')).toBeDefined();
    expect(getterSpy).not.toHaveBeenCalled();
  });
});
