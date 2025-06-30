const env = process.env.NODE_ENV || 'development';

const config = {
  development: { port: 3000 },
  test: { port: 4000 },
  production: { port: 80 }
};

export default config[env];