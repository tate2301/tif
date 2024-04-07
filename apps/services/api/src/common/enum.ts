export enum GOODS_TYPE {
  SERVICE = 'service',
  SOFTWARE = 'software',
  PHYSICAL = 'physical_goods',
}

export enum CHECKOUT_TYPE {
  PAY = 'pay',
  SUBSCRIBE = 'subscribe',
  DONATE = 'donate',
  BOOK = 'book',
}

export enum PAYMENT_METHODS {
  EcoCash = 'ecocash',
  ZimSwitch = 'zimswitch',
  Visa = 'visa',
  Mastercard = 'mastercard',
  OneMoney = 'onemoney',
  Telecash = 'telecash',
}

export enum PAYMENT_MODE {
  Checkout = 'checkout',
  Payment = 'payment',
}

export enum CURRENCIES {
  USD = 'USD',
  ZWL = 'ZWL',
}
