import Article from '../models/Article.js';

export async function getArticles(req, res, next) {
  try {
    const { province, category, search } = req.query;
    const filter = { published: true };

    if (province) filter.province = province;
    if (category) filter.category = category;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
      ];
    }

    const articles = await Article.find(filter)
      .populate('author', 'name')
      .sort({ createdAt: -1 });

    res.json(articles);
  } catch (err) {
    next(err);
  }
}

export async function getArticleById(req, res, next) {
  try {
    const article = await Article.findById(req.params.id).populate('author', 'name');
    if (!article) {
      return res.status(404).json({ message: 'Bài viết không tồn tại' });
    }
    res.json(article);
  } catch (err) {
    next(err);
  }
}

export async function createArticle(req, res, next) {
  try {
    const article = await Article.create({ ...req.body, author: req.user._id });
    res.status(201).json(article);
  } catch (err) {
    next(err);
  }
}

export async function updateArticle(req, res, next) {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!article) {
      return res.status(404).json({ message: 'Bài viết không tồn tại' });
    }
    res.json(article);
  } catch (err) {
    next(err);
  }
}

export async function deleteArticle(req, res, next) {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Bài viết không tồn tại' });
    }
    res.json({ message: 'Đã xóa bài viết' });
  } catch (err) {
    next(err);
  }
}

export async function getAllArticlesAdmin(req, res, next) {
  try {
    const articles = await Article.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    next(err);
  }
}
