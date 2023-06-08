const mongoose = require('mongoose');

const Blog = mongoose.Schema(
  {
  title: {
    type: String,
    required: true,
    description : true
  },
  body: {
    type: String,
    required: true,
    description : true
  }
 
},
{
  timestamps: true
}
)

const AllBlog = mongoose.model('Blog', Blog)
module.exports = AllBlog;