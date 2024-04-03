// env.ts
export default () => ({
  // Add your own properties here however you'd like
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  gateway: process.env.PAYMENT_GATEWAY_URL,
  secret: process.env.JWT_SECRET,
});
