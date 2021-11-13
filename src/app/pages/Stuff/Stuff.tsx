import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailCard from '../../components/DetailCard/DetailCard';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

function Stuff(): JSX.Element {
  const { thingId } = useParams();
  const thing = useFetch<Thing>(
    `https://json-server.neuefische.de/stuff/${thingId}`
  );

  const navigate = useNavigate();

  async function handleDelete(id: number) {
    await fetch(`https://json-server.neuefische.de/stuff/${id}`, {
      method: 'DELETE',
    });
    navigate('/');
  }
  return (
    <div>
      {thing && (
        <DetailCard
          title={thing.name}
          description={thing.description}
          categories={thing.categories}
          onDelete={() => handleDelete(thing.id)}
        />
      )}
    </div>
  );
}

export default Stuff;
