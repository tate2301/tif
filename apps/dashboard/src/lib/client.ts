import { createJWTClient } from "@tif/core/client";

export const velocityPaymentsAPIClient = createJWTClient(
  "http://localhost:3000"
);
