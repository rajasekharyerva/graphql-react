import { gql, useMutation } from '@apollo/client';

// Define the mutation to add a new item
export const ADD_ITEM = gql`
  mutation AddItem($name: String!, $description: String!) {
    addItem(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;
