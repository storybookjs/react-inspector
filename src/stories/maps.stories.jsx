/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Maps',
};

export const MapEmptyMap = {
  render: () => <Inspector data={new Map()} />,
  name: 'Map: Empty Map',
};

export const MapBooleanKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [true, 'one'],
          [false, 'two'],
        ])
      }
    />
  ),

  name: 'Map: Boolean keys',
};

export const MapRegexKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [/\S/g, 'one'],
          [/\D/g, 'two'],
        ])
      }
    />
  ),

  name: 'Map: Regex keys',
};

export const MapStringKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          ['one', 1],
          ['two', 2],
        ])
      }
    />
  ),

  name: 'Map: String keys',
};

export const MapObjectKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [{}, 1],
          [{ key: 2 }, 2],
        ])
      }
    />
  ),

  name: 'Map: Object keys',
};

export const MapArrayKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [[1], 1],
          [[2], 2],
        ])
      }
    />
  ),

  name: 'Map: Array keys',
};

export const MapMapKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [new Map(), 1],
          [new Map([]), 2],
        ])
      }
    />
  ),

  name: 'Map: Map keys',
};
