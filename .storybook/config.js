import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/object-inspector');
  require('../stories/dom-inspector');
  require('../stories/table-inspector');
}

configure(loadStories, module);
