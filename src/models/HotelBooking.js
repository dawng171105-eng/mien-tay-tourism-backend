import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const HotelBooking = sequelize.define(
  'HotelBooking',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    checkIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkOut: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    notes: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'cancelled', 'completed'),
      defaultValue: 'pending',
    },
    paymentStatus: {
      type: DataTypes.ENUM('unpaid', 'paid', 'refunded'),
      defaultValue: 'unpaid',
    },
  },
  {
    timestamps: true,
    tableName: 'hotel_bookings',
  }
);

export default HotelBooking;
