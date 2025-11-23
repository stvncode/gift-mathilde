"use client"

import { useEffect, useState } from "react"

type PurchaseInfo = {
  purchased: boolean
  purchasedAt?: string
  purchasedBy?: string
}

type PurchasesData = {
  [giftId: string]: PurchaseInfo
}

export function usePurchases() {
  const [purchases, setPurchases] = useState<PurchasesData>({})
  const [loading, setLoading] = useState(true)

  const fetchPurchases = async () => {
    try {
      const response = await fetch("/api/gifts/purchases")
      if (response.ok) {
        const data = await response.json()
        setPurchases(data)
      }
    } catch (error) {
      console.error("Error fetching purchases:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPurchases()
  }, [])

  const markAsPurchased = async (giftId: string, purchasedBy?: string) => {
    try {
      const response = await fetch(`/api/gifts/${giftId}/purchase`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ purchasedBy }),
      })

      if (response.ok) {
        await fetchPurchases() // Refresh the list
        return true
      }
      return false
    } catch (error) {
      console.error("Error marking as purchased:", error)
      return false
    }
  }

  const isPurchased = (giftId: string) => {
    return purchases[giftId]?.purchased || false
  }

  return {
    purchases,
    loading,
    markAsPurchased,
    isPurchased,
    refresh: fetchPurchases,
  }
}

