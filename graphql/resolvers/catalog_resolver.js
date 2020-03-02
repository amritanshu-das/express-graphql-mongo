const Sku = require('../../models/sku');
const Product = require('../../models/product');

const updateParentProduct = async (savedSkus, savedProduct) => {
    if (savedSkus.length > 0) {
        for (savedSku of savedSkus) {
            savedSku.parentProduct = savedProduct;
            await savedSku.save();
        }
    }
}

const parentProduct = async (productId) => {
    try {
        const savedProduct = await Product.findById(productId);
        return {
            ...savedProduct._doc,
            _id: savedProduct.id,
            skus: skus.bind(this, savedProduct._doc.skus)
        }

    } catch (err) {
        console.log(err);
    }
}

const skus = async (skuIds) => {
    try {
        const savedSkus = await Sku.find({
            _id: {
                $in: skuIds
            }
        });
        return savedSkus.map(savedSku => {
            return {
                ...savedSku._doc,
                _id: savedSku.id,
                parentProduct: parentProduct.bind(this, savedSku._doc.parentProduct)
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createSku: async (args) => {
        const sku = new Sku({
            color: args.skuInput.color,
            size: args.skuInput.size,
            image: args.skuInput.image
        })
        try {
            const savedSku = await sku.save();

            return {
                ...savedSku._doc,
                _id: savedSku.id,
                parentProduct: parentProduct.bind(this, savedSku._doc.parentProduct)
            };

        } catch (err) {
            console.log(err);
        }
    },
    createProduct: async (args) => {
        const skuIds = args.productInput.skus;
        const savedSkus = await Sku.find({
            _id: {
                $in: skuIds
            }
        });

        const product = new Product({
            name: args.productInput.name,
            brand: args.productInput.brand
        })

        if (savedSkus.length > 0) {
            savedSkus.map(savedSku => {
                product.skus.push(savedSku);
            })
        }
        const savedProduct = await product.save();

        await updateParentProduct(savedSkus, savedProduct);
        
        return {
            ...savedProduct._doc,
            _id: savedProduct.id,
            skus: skus.bind(this, savedProduct._doc.skus)
        }
    },
    allproducts: async () => {
        const products = await Product.find();
        return products.map(product => {
            return {
                ...product._doc,
                _id: product.id,
                skus: skus.bind(this, product._doc.skus)
            }
        })
    },
    allskus: async () => {
        const skus = await Sku.find();
        return skus.map(sku => {
            return {
                ...sku._doc,
                _id: sku.id,
                parentProduct: parentProduct.bind(this, sku._doc.parentProduct)
            }
        })
    }
}