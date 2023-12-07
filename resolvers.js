const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    }, {
        title: "City of Glass",
        author: "Paul Auster",
    }, {
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
    }
];

const resolvers = {
    Query: {
        books: () => books,
    },
};

module.exports = resolvers;