
export type SessionRequest = {
    amount: {
        currency: CURRENCIES,
        value: number
    },
    reference: string
    returnUrl: string
    expiresAt: Date
}

export type SessionResponse = {
    id: string
    merchantAccount: string
    amount: {
        currency: CURRENCIES
        value: number
    }
    reference: string
    returnUrl: string
    checkoutUrl: string
    expiresAt: Date
}

export enum SessionStatus {
    PENDING,
    SUCCESS,
    CANCELLED
}