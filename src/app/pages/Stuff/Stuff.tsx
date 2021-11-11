import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../../components/DetailCard/DetailCard';
import type { Thing } from '../../types';

function Stuff(): JSX.Element {
  const thingParams = useParams();
  const [thing, setThing] = useState<Thing | null>();

  useEffect(() => {
    async function fetchThing() {
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${thingParams.stuffs}`
      );
      const fetchedThing = await response.json();
      setThing(fetchedThing);
    }
    fetchThing();
  }, []);

  return (
    <div>
      {thing && (
        <DetailCard
          title={thing?.name}
          description={thing?.description}
          categories={thing?.categories}
        />
      )}
    </div>
  );
}

export default Stuff;
