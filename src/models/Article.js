import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Article = sequelize.define(
  'Article',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    category: {
      type: DataTypes.ENUM('dia-danh', 'am-thuc', 'le-hoi', 'kinh-nghiem'),
      defaultValue: 'kinh-nghiem',
    },
    coverImage: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    tableName: 'articles',
  }
);

export default Article;
