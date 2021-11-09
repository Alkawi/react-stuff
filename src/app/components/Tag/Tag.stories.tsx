import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

export const TagOne = (): JSX.Element => <Tag tagList={['JS', 'JK']}/>;
