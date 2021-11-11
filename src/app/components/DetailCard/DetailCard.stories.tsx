import React from 'react';
import DetailCard from './DetailCard';

export default {
  title: 'Component/DetailCard',
  component: DetailCard,
};

export const CardRegular = (): JSX.Element => (
  <DetailCard
    title={'Regular'}
    description={'Beschreibung'}
    tagList={['Eins', 'Zwei', 'Drei']}
  />
);
