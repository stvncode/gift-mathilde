import { NextResponse } from 'next/server'
import { getPurchases } from '@/lib/storage'

// GET - Get all purchases
export async function GET() {
  try {
    const purchases = await getPurchases()
    return NextResponse.json(purchases)
  } catch (error) {
    console.error('Error getting all purchases:', error)
    return NextResponse.json({ error: 'Failed to get purchases' }, { status: 500 })
  }
}

