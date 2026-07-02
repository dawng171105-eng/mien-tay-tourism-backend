import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Tour = sequelize.define(
  "Tour",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    itinerary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dailyItinerary: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    provincesVisited: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: [],
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    priceAdult: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        min: 0,
      },
    },
    priceChild: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        min: 0,
      },
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxSlots: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    minSlots: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1,
      },
    },
    availableSlots: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: [],
    },
    departures: {
      type: DataTypes.ARRAY(DataTypes.DATE),
      allowNull: true,
      defaultValue: [],
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isCombo: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    type: {
      type: DataTypes.ENUM("relaxation", "nature", "culture", "adventure"),
      defaultValue: "nature",
    },
    departurePoint: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inclusions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: [],
    },
    exclusions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: [],
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      defaultValue: 0,
      validate: {
        min: 0,
        max: 5,
      },
    },
  },
  {
    timestamps: true,
    tableName: "tours",
  },
);

export default Tour;
