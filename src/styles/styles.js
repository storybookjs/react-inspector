import PropTypes from 'prop-types';
import React, { createContext, useContext, useMemo } from 'react';

import * as themes from './themes';
import base from './base';

const DEFAULT_THEME_NAME = 'chromeLight';

const ThemeContext = createContext(base(themes[DEFAULT_THEME_NAME]));

/**
 * Hook to get the component styles for the current theme.
 * @param {string} baseStylesKey - Name of the component to be styled
 */
export const useStyles = baseStylesKey => {
  const themeStyles = useContext(ThemeContext);
  return themeStyles[baseStylesKey];
};

/**
 * HOC to create a component that accepts a "theme" prop and uses it to set
 * the current theme. This is intended to be used by the top-level inspector
 * components.
 * @param {Object} WrappedComponent - React component to be wrapped
 */
export const themeAcceptor = WrappedComponent => {
  const ThemeAcceptor = ({ theme = DEFAULT_THEME_NAME, ...restProps }) => {
    const themeStyles = useMemo(() => {
      switch (Object.prototype.toString.call(theme)) {
        case '[object String]':
          return base(themes[theme]);
        case '[object Object]':
          return base(theme);
        default:
          return base(themes[DEFAULT_THEME_NAME]);
      }
    }, [theme]);

    return (
      <ThemeContext.Provider value={themeStyles}>
        <WrappedComponent {...restProps} />
      </ThemeContext.Provider>
    );
  };

  ThemeAcceptor.propTypes = {
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  return ThemeAcceptor;
};
