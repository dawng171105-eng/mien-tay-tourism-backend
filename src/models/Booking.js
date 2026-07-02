import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Booking = sequelize.define(
  'Booking',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    departureDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    passengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    notes: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
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
    tableName: 'bookings',
  }
);

export default Booking;
