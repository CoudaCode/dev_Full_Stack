import Blog from "./models.js";
class db {
  static async insertPost(req, res) {
    try {
      const { title, body } = req.body;
     
      const newPost = await Blog.create(req.body);

      res.status(200).json(newPost);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: e.message });
    }
  }
  static async getPosts(req, res) {
    try {
      const post = await Blog.find({});
      res.status(200).json(post);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: e.message });
    }
  }
}

export default db;
