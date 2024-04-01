import { createCipheriv, randomUUID } from "crypto"

export const generatePrimaryKey = () => {
    return randomUUID()
}