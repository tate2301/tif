export enum GOODS_TYPE {
    "service",
    "software",
    "physical_goods",

}

export enum CHECKOUT_TYPE {
    "payment", "subscription", "donation"
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
  