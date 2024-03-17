export interface ZimSwitchPaymentRequest {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    amount: number;
  }

  export interface ZimSwitchPaymentResponse {
    transactionId: string;
    status: 'success' | 'failed';
  }

