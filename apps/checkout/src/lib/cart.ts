export type Item = {
    id: string
    name: string
    amount: number
    quantity: number
    url: string
}

export type Discount = {
    id: string
    name: string
    value: number
    type: "percent" | "fixed"
}

interface Cart {
    items: Item[]
    discounts: Discount[]
    addItem(item: Item): void
    removeItem(item_id: string): void

    addDiscountCode(code: string): Promise<void>
    removeDiscountCode(code: string): Promise<void>

    discountTotal(): number
    subTotal(): number
    total(): number
}

export class ProductsCart implements Cart {
    items: Item[] = []
    discounts: Discount[] = []

    constructor() {

    }

    addItem(item: Item): void {
        this.items.concat(item)
    }

    removeItem(item_id: string): void {
        this.items = this.items.filter(item => item.id !== item_id)
    }

    async addDiscountCode(code: string): Promise<void> {
        const discount: Discount = {id: code, name: "Discount name", value: 4, type: "percent"}
        this.discounts.concat(discount)
    }

    async removeDiscountCode(code: string): Promise<void> {
        this.discounts = this.discounts.filter(discount => discount.id !== code)
    }

    discountTotal(): number {
        let total = 0;

        for(let i = 0; i < this.discounts.length; i++) {
            const discount = this.discounts[i]
            if(discount.type === "fixed") total += discount.value
            else total += discount.value / 100
        }
        return total
    }

    subTotal(): number {
        let total = 0;
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i]
            total += item.amount * item.quantity
        }
        return total
    }

    total(): number {
        return this.subTotal() - this.discountTotal()
    }

}