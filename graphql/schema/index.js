const { buildSchema } = require('graphql');
const catalogSchema = require('./catalog_schema');
const userSchema = require('./user_schema');
const quoteSchema = require('./quote_schema');

const types = [];
const inputs = [];
const queries = [];
const mutations = [];

const schemas = [catalogSchema, userSchema, quoteSchema];

schemas.map(schema => {
    if (schema.types && schema.types.length > 0) {
        types.push(schema.types);
    }
    if (schema.inputs && schema.inputs.length > 0) {
        inputs.push(schema.inputs);
    }
    if (schema.queries && schema.queries.length > 0) {
        queries.push(schema.queries);
    }
    if (schema.mutations && schema.mutations.length > 0) {
        mutations.push(schema.mutations);
    }
})

module.exports = buildSchema(`
    ${types.join()}
    ${inputs.join()}

    type RootQuery {
        ${queries.join()}
    }

    type RootMutation {
        ${mutations.join()}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)