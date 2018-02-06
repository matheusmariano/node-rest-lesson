module.exports = {
  app: {
    port: process.env.PORT || '4000',
  },
  database: {
    driver: process.env.DB_DRIVER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'app',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
  },
};
