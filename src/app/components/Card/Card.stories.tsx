import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const CardRegular = (): JSX.Element => (
  <Card title={'Regular'} description={'Beschreibung'} />
);
