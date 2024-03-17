import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {
  IWebhookService,
  Webhook,
  WebhookRegistrationResponse,
  WebhookRequest,
  WebhookUpdateRequest,
  WebhookUpdateResponse,
} from './webhook.interface';

@Injectable()
export class WebhookService implements IWebhookService {
  constructor(private httpService: HttpService) {}

  registerWebhook(
    webhookRequest: WebhookRequest,
  ): Promise<WebhookRegistrationResponse> {
    throw new Error('Method not implemented.');
  }
  updateWebhook(
    webhookId: string,
    updateDetails: WebhookUpdateRequest,
  ): Promise<WebhookUpdateResponse> {
    throw new Error('Method not implemented.');
  }
  deleteWebhook(webhookId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getRegisteredWebhooks(): Promise<Webhook[]> {
    throw new Error('Method not implemented.');
  }

  async sendWebhook(url: string, data: any): Promise<void> {
    try {
      await this.httpService.post(url, data).toPromise();
      console.log(`Webhook sent successfully to ${url}`);
    } catch (error) {
      console.error(`Failed to send webhook to ${url}`, error);
    }
  }
}
