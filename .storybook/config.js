import { configure } from '@storybook/react';
import 'storybook-chromatic';

function loadStories() {
  require('../stories/object-inspector');
  require('../stories/dom-inspector');
  require('../stories/table-inspector');
}

configure(loadStories, module);
