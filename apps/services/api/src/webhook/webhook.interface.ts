export interface IWebhookService {
  registerWebhook(
    webhookRequest: WebhookRequest,
  ): Promise<WebhookRegistrationResponse>;
  updateWebhook(
    webhookId: string,
    updateDetails: WebhookUpdateRequest,
  ): Promise<WebhookUpdateResponse>;
  deleteWebhook(webhookId: string): Promise<void>;
  getRegisteredWebhooks(): Promise<Webhook[]>;
}
export type Webhook = {};
export type WebhookRequest = {};
export type WebhookResponse = {};
export type WebhookUpdateRequest = {};
export type WebhookRegistrationResponse = {};
export type WebhookUpdateResponse = {};
