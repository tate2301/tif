require("dotenv").config({ path: ".env" });

export const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || "tif",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "mysecret",
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  },
};
