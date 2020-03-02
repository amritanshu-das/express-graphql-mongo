const types = `
    type Quote {
        _id: ID!
        name: String!
        price: Float!
        lineItems: [QuoteLineItem]
        createdAt: String!
        updatedAt: String!
    }

    type QuoteLineItem {
        quantity: Int!
        sku: Sku!
    }
`

const inputs = `
    input QuoteInput {
        name: String!
        price: Float!
        lineItems: [QuoteLineItemInput]
    }

    input QuoteLineItemInput {
        quantity: Int!
        sku: ID!
    }
`

const queries = `
    allquotes: [Quote!]!
`

const mutations = `
    createQuote(quoteInput: QuoteInput): Quote!
`

module.exports = { types, inputs, queries, mutations }