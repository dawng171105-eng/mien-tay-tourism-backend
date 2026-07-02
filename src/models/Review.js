import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Review = sequelize.define(
  'Review',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      trim: true,
    },
  },
  {
    timestamps: true,
    tableName: 'reviews',
  }
);

// Unique constraint on tour and user
Review.addHook('beforeSync', (options) => {
  options.uniqueKeys = {
    unique_review: {
      fields: ['tourId', 'userId'],
    },
  };
});

export default Review;
