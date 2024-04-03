import axios, { AxiosInstance, AxiosResponse } from "axios";

class AxiosBuilder {
  private instance: AxiosInstance;
  private baseURL: string;

  constructor(baseUrl: string) {
    this.baseURL = baseUrl;
    this.instance = axios.create({
      baseURL: this.baseURL,
    });
  }

  withJWT() {
    this.instance.interceptors.request.use((config: any) => {
      if (!config.headers) return;
      const access_token = localStorage.getItem("access_token");
      config.headers["Authorization"] = `Bearer ${access_token}`;
      return config;
    });

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error) => {
        if (
          error.response?.status === 401 &&
          error.config &&
          !error.config.__isRetryRequest
        ) {
          error.config.__isRetryRequest = true;

          const refresh_token = localStorage.getItem("refresh_token");
          const response = await axios.post("/auth/refresh", { refresh_token });
          localStorage.setItem("access_token", response.data.access_token);

          return this.instance(error.config);
        }
        throw error;
      }
    );

    return this;
  }

  withAPIKey(apiKey: string) {
    this.instance.interceptors.request.use((config: any) => {
      config.headers["x-api-key"] = `Bearer ${apiKey}`;
      return config;
    });

    return this;
  }

  build() {
    return this.instance;
  }
}

export const createJWTClient = (
  baseUrl: string = "http://localhost:3000/api"
) => new AxiosBuilder(baseUrl).withJWT().build();

export const createAPIKeyClient = (
  baseUrl: string = "http://localhost:3000/api",
  apiKey: string
) => new AxiosBuilder(baseUrl).withAPIKey(apiKey).build();
