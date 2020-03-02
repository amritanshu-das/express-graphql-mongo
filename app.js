const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const expressGraphql = require('express-graphql');

const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyparser.json());

app.use('/graphql', expressGraphql({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}));

mongoose.connect('mongodb://my-machine:27017/myshop', {
    useNewUrlParser: true
}).then(() => {
    app.listen(4040, () => {
        console.log('Server started!!!!!!');
    })
}).catch(err => {
    console.error(err);
});