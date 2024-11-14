import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import '../styles/style.css'; // Adjust the path as needed

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      description
    }
  }
`;

function ItemList() {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {data.items.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.description}</td>
      </tr>
    ))}
  </tbody>
</table>
  );
}

export default ItemList;
