import { NextRequest, NextResponse } from 'next/server'
import { getPurchases, markAsPurchased, unmarkAsPurchased } from '@/lib/storage'

// GET - Check if a gift is purchased
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const purchases = await getPurchases()
    const purchaseInfo = purchases[id] || { purchased: false }

    return NextResponse.json(purchaseInfo)
  } catch (error) {
    console.error('Error getting purchase status:', error)
    return NextResponse.json({ error: 'Failed to get purchase status' }, { status: 500 })
  }
}

// POST - Mark a gift as purchased
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { purchasedBy } = body

    await markAsPurchased(id, purchasedBy)

    return NextResponse.json({ success: true, purchased: true })
  } catch (error) {
    console.error('Error marking as purchased:', error)
    return NextResponse.json({ error: 'Failed to mark as purchased' }, { status: 500 })
  }
}

// DELETE - Unmark a gift as purchased
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await unmarkAsPurchased(id)

    return NextResponse.json({ success: true, purchased: false })
  } catch (error) {
    console.error('Error unmarking as purchased:', error)
    return NextResponse.json({ error: 'Failed to unmark as purchased' }, { status: 500 })
  }
}

