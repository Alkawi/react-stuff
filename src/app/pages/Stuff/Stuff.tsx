import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../../components/DetailCard/DetailCard';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

function Stuff(): JSX.Element {
  const { thingId } = useParams();
  const thing = useFetch(`https://json-server.neuefische.de/stuff/${thingId}`);

  return (
    <div>
      {thing && (
        <DetailCard
          title={thing.name}
          description={thing.description}
          categories={thing.categories}
        />
      )}
    </div>
  );
}

export default Stuff;
