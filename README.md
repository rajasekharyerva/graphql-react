# graphql-react
/my-fullstack-app
  /graphql-server            # Backend project (GraphQL + Express + PostgreSQL)
    /src
      server.js
      /models
        index.js            # Sets up database connection and models
        Item.js             # Example model (e.g., Item)
      /graphql
        schema.js           # Defines GraphQL schema
        resolvers.js        # Defines resolvers for GraphQL queries and 
    Dockerfile
    .env
    package.json

  /graphql-frontend          # Frontend project (React + Apollo Client)
    /src
      index.js
      App.js
      apolloClient.js
      components/
        ItemList.js         # Component for listing items
        ItemForm.js         # Component for adding/editing items
    package.json
    Dockerfile

  .gitignore                 # Git ignore file for the entire repo
  README.md                  # Project documentation
  docker-compose.yml


### Start the Backend Server with Docker
cd my-project/graphql-server
docker-compose up --build
docker-compose down

### Start the React Frontend App
cd my-project/graphql-frontend
npm start
Ctrl+C
