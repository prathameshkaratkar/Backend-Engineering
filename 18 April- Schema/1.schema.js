// assignment =>  productId 
// - product name
// - description
// - quantity
// - sku
// - reviews
// - added by
// - added on
// - updated on

const productSchema = new Mongoose.Schema (
    {
        productId: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        sku: {
            type: String,
            required: true
        },
        reviews: [
            {
                comment: {type:String, required:false},
                rating: {type:Number, required:false},
                addedOn: {type:Date, required:false},
                updatedOn: {type:Date, required:false}
            }
        ],
        addedBy: {
            type: String,
            required: true
        },
        addedOn: {
            type: Date,
            required: true
        },
        updatedOn: {
            type: Date,
            required: true
        }
    }
)