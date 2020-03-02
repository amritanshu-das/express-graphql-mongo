const types = `
    type User {
        _id: ID!
        name: String!
        email: String!
        addresses: [Address]
        createdAt: String!
        updatedAt: String!
    }

    type Address {
        nickName: String!
        address1: String!
        address2: String
        city: String!
        state: String!
        zip: String!
    }
`

const inputs = `
    input UserInput {
        name: String!
        email: String!
        addresses: [AddressInput]
    }

    input AddressInput {
        nickName: String!
        address1: String!
        address2: String
        city: String!
        state: String!
        zip: String!
    }
`

const queries = ``

const mutations = `
    createUser(userInput: UserInput): User!
    addUserAddr(userId: ID!, addressInput: AddressInput!): Address!
`
module.exports = { types, inputs, queries, mutations }