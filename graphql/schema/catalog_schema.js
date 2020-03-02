const types = `
    type Sku {
        _id: ID!
        color: String!
        size: String!
        image: String!
        parentProduct: Product
        createdAt: String!
        updatedAt: String!
    }

    type Product {
        _id: ID!
        name: String!
        brand: String!
        skus: [Sku]
        createdAt: String!
        updatedAt: String!
    }
`

const inputs = `
    input SkuInput {
        color: String!
        size: String!
        image: String!
    }

    input ProductInput {
        name: String!
        brand: String!
        skus: [ID]
    }
`

const queries = `
    allproducts: [Product!]!
    allskus: [Sku!]!
`

const mutations = `
    createProduct(productInput: ProductInput): Product!
    createSku(skuInput: SkuInput): Sku!
`

module.exports = { types, inputs, queries, mutations }