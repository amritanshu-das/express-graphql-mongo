const catalogResolver = require('./catalog_resolver');
const userResolver = require('./user_resolver');
const quoteResolver = require('./quote_resolver');

const rootResolver = {
    ...catalogResolver,
    ...userResolver,
    ...quoteResolver
}

module.exports = rootResolver;