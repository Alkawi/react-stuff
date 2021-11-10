import React from 'react';
import Tags from './Tag';

export default {
  title: 'Component/Tag',
  component: Tags,
};

export const TagOne = (): JSX.Element => <Tags tagList={['JS', 'JK']} />;
