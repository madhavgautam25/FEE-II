const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type User {
    id: ID!
    name: String!
    }

    type Query {
    users: [User]
    user(id: ID!): User
    }`;

const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Riya" },
];

const resolvers = {
    Query: {
    users: () => users,
    user: (_, { id }) => users.find((u) => u.id == id),
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});