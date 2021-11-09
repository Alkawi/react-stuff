import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const CardDetail = (): JSX.Element => (
  <Card
    title={'Hier steht der Titel'}
    description={'Hier wird beschrieben'}
    tagList={['JS', 'HTML', 'CSS', 'TS']}
    detail={true}
  />
);

export const CardRegular = (): JSX.Element => (
  <Card
    title={'Regular'}
    description={'Beschreibung'}
    tagList={['JS', 'CSS', 'TS']}
    detail={false}
  />
);
