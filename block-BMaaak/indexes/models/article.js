let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: { type: String },
    description: String,
    tags: [String],
  },
  { timestamps: true }
);

articleSchema.index({ tags: 1 });

articleSchema.index({ title: 'text' });

articleSchema.index({ description: 'text' });

articleSchema.index({ title: 'text', description: 'text' });

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;
