import React from 'react';

import {storiesOf} from "@storybook/react";
import {ResizableTableInspector as TableInspector} from '../src/';
import {makeStories} from "./table-inspector-story-maker";

const storyGroup = storiesOf('Table (Resizable)', module);
const storiesParams = makeStories(TableInspector);
storiesParams.forEach(storyParams => storyGroup.add(...storyParams));
