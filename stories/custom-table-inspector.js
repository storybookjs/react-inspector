import React from 'react';

import {storiesOf} from "@storybook/react";
import {ResizableTableInspector} from '../src/';
import {makeStories} from "./table-inspector-story-maker";

const storyGroup = storiesOf('Table (Resizable)', module);
const storiesParams = makeStories(ResizableTableInspector);
storiesParams.forEach(storyParams => storyGroup.add(...storyParams));
