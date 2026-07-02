import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL || process.env.MONGODB_URI || 'postgres://localhost:5432/mien_tay_tourism';

// For PostgreSQL, we can use the DATABASE_URL directly
const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: process.env.NODE_ENV === 'production' ? false : console.log,
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? {
      require: true,
      rejectUnauthorized: false,
    } : false,
  },
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected successfully');
    // Sync all models
    await sequelize.sync({ alter: process.env.NODE_ENV !== 'production' });
    console.log('✅ All models synced');
  } catch (error) {
    console.error('❌ Unable to connect to PostgreSQL:', error);
    process.exit(1);
  }
}

export default sequelize;
