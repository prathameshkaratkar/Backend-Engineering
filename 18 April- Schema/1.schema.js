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






//! For reference, please refer to


export const SysUserSchema = new Mongoose.Schema(
    {
      sysId: { type: String, required: true },
      name: { type: String, required: true },
      contactNumber: { type: String, required: true },
      email: { type: String, required: false },
      roles: [
        {
          type: String,
          required: false
        }
      ],
      isActive: { type: Boolean, required: true, default: true },
      STATUS: { type: Boolean, required: true, default: true }
    },
    {
      timestamps: true
    }
  );
  
  
  
  export const TaskSchema = new Mongoose.Schema(
    {
      sysId: { type: String, required: true },
      ticketId: { type: String, required: true },
      businessAccount: {
        sysId: { type: String, required: true }
      },
      assignee: { type: String, required: false },
      title: { type: String, required: true },
      description: { type: String, required: false },
      customerDetails: {
        name: { type: String, required: false },
        contactNumber: { type: String, required: false },
        address: { type: String, required: false },
        location: { type: String, required: false }
      },
      state: { type: String, required: true, default: 'draft' },
      comments: [
        {
          comment: { type: String, required: false },
          authorId: { type: String, required: false },
          createdAt: { type: String, required: false },
          updatedAt: { type: String, required: false }
        }
      ],
      workLogs: [
        {
          state: { type: String, required: false },
          comment: { type: String, required: false },
          editorType: { type: String, required: true },
          editorId: { type: String, required: true },
          createdAt: { type: Date, required: true },
          assigne: { type: String, required: false },
          location: { type: Array, required: false }
        }
      ],
  
      attachments: [
        {
          _id: false,
          name: { type: String, required: false },
          type: { type: String, required: false },
          size: { type: Number, required: false },
          isActive: { type: Boolean, default: true }
        }
      ],
      isActive: { type: Boolean, required: true, default: true },
      STATUS: { type: Boolean, required: true, default: true }
    },
    {
      timestamps: true
    }
  );
  
  
  
  
  export const OTPSchema = new Mongoose.Schema(
    {
      userSysId: { type: String, required: true },
      token: { type: String, required: true },
      code: { type: Number, required: true },
      attempts: { type: Number, required: true, default: 0 },
      userAgent: { type: String, required: true },
      hostName: { type: String, required: true },
      ipAddress: { type: String, required: true },
      isActive: { type: Boolean, required: true, default: true },
      STATUS: { type: Boolean, required: true, default: true }
    },
    {
      timestamps: true
    }
  );
  
  
  export const GroupSchema = new Mongoose.Schema(
    {
      sysId: { type: String, required: true },
      group: { type: String, required: true },
      roles: [
        {
          _id: false,
          sysId: { type: String, required: false },
          isActive: { type: Boolean, required: false },
          createdAt: { type: Boolean, required: false },
          updatedAt: { type: Boolean, required: false }
        }
      ],
      isActive: { type: Boolean, required: true, default: true },
      STATUS: { type: Boolean, required: true, default: true }
    },
    {
      timestamps: true
    }
  );