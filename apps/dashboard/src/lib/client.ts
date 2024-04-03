import { apiUrl } from "@/utils/apiUrl";
import { createJWTClient } from "@tif/core/client";

export const velocityPaymentsAPIClient = createJWTClient(
  apiUrl
);
