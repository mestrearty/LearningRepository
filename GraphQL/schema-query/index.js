const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  #Pontos de Entrada da sua API!
  type Query {
    ola: String!
    hora: String
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Basta retornar uma string";
    },
    hora() {
      return new Date().toString();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
