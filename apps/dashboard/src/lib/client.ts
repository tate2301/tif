import { client } from "@tif/core";

export const velocityPaymentsAPIClient = client.createJWTClient(
  "http://localhost:3000"
);
