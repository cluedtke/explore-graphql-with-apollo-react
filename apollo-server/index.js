const { ApolloServer, gql } = require('apollo-server');
const { users } = require('./data/mock');

// schema
const typeDefs = gql`
    type User {
        id: ID!
        name: String
        superpowers: [Superpower]!
    }

    type Superpower {
        id: ID!
        text: String
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }
`;

// resolvers
const resolvers = {
    Query: {
        users: () => {
            return users;
        },
        user: (root, { id }) => {
            return users.find(user => user.id === id);
        },
    },
};

// server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Apollo server started at ${url}`);
});
