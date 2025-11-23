// Storage for gift purchases using Vercel Postgres
import { sql } from "@vercel/postgres"

export type PurchaseData = {
  [giftId: string]: {
    purchased: boolean
    purchasedAt?: string
    purchasedBy?: string
  }
}

// Initialize the database table
export async function initializeDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS purchases (
        id SERIAL PRIMARY KEY,
        gift_id VARCHAR(255) UNIQUE NOT NULL,
        purchased BOOLEAN NOT NULL DEFAULT true,
        purchased_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        purchased_by VARCHAR(255)
      )
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_gift_id ON purchases(gift_id)
    `

    console.log("Database initialized successfully")
  } catch (error) {
    console.error("Error initializing database:", error)
    // Don't throw - allow the app to continue even if table already exists
  }
}

export async function getPurchases(): Promise<PurchaseData> {
  try {
    const { rows } = await sql`
      SELECT gift_id, purchased, purchased_at, purchased_by 
      FROM purchases 
      WHERE purchased = true
    `

    const purchases: PurchaseData = {}
    for (const row of rows) {
      purchases[row.gift_id] = {
        purchased: row.purchased,
        purchasedAt: row.purchased_at?.toISOString(),
        purchasedBy: row.purchased_by,
      }
    }

    return purchases
  } catch (error) {
    console.error("Error getting purchases:", error)
    return {}
  }
}

export async function markAsPurchased(giftId: string, purchasedBy?: string): Promise<void> {
  try {
    await sql`
      INSERT INTO purchases (gift_id, purchased, purchased_at, purchased_by)
      VALUES (${giftId}, true, NOW(), ${purchasedBy || null})
      ON CONFLICT (gift_id) 
      DO UPDATE SET 
        purchased = true,
        purchased_at = NOW(),
        purchased_by = ${purchasedBy || null}
    `
  } catch (error) {
    console.error("Error marking as purchased:", error)
    throw error
  }
}

export async function unmarkAsPurchased(giftId: string): Promise<void> {
  try {
    await sql`
      DELETE FROM purchases 
      WHERE gift_id = ${giftId}
    `
  } catch (error) {
    console.error("Error unmarking as purchased:", error)
    throw error
  }
}

export async function isPurchased(giftId: string): Promise<boolean> {
  try {
    const { rows } = await sql`
      SELECT purchased 
      FROM purchases 
      WHERE gift_id = ${giftId} AND purchased = true
    `

    return rows.length > 0
  } catch (error) {
    console.error("Error checking if purchased:", error)
    return false
  }
}
