import React from 'react';
import Tags from './Tags';

export default {
  title: 'Component/Tag',
  component: Tags,
};

export const TagOne = (): JSX.Element => <Tags>{['JS', 'JK']} </Tags>;
