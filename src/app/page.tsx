"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCategoryLabel, gifts } from "@/data/gifts"
import { Book, Gift, Heart, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <Heart className="h-8 w-8 text-rose-500 fill-rose-500 animate-pulse" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Liste de Mathilde
            </h1>
            <Sparkles className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-center text-muted-foreground mt-2">Noël & Anniversaire 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Categories Summary */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Badge variant="secondary" className="px-4 py-2 text-base">
            <Book className="h-4 w-4 mr-2" />
            {gifts.filter((g) => g.category === "books").length} Livres
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-base">
            <Gift className="h-4 w-4 mr-2" />
            {gifts.filter((g) => g.category === "kindle").length} Kindle
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-base">
            <Sparkles className="h-4 w-4 mr-2" />
            {gifts.filter((g) => g.category === "accessories").length} Accessoires
          </Badge>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gifts.map((gift) => (
            <Link key={gift.id} href={`/gift/${gift.id}`} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 cursor-pointer overflow-hidden pt-0">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-rose-100 to-purple-100 overflow-hidden">
                  {gift.imageUrl ? (
                    <Image src={gift.imageUrl} alt={gift.title} fill className="object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      {gift.category === "books" && <Book className="h-16 w-16 text-rose-300" />}
                      {gift.category === "kindle" && <Gift className="h-16 w-16 text-purple-300" />}
                      {gift.category === "accessories" && (
                        <Sparkles className="h-16 w-16 text-pink-300" />
                      )}
                      {gift.category === "other" && <Heart className="h-16 w-16 text-rose-300" />}
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-foreground hover:bg-white">
                      {getCategoryLabel(gift.category)}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-rose-600 transition-colors line-clamp-2">
                    {gift.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{gift.description}</p>
                  <div className="mt-4 flex items-center text-sm text-rose-600 font-medium">
                    <span className="group-hover:mr-2 transition-all">Voir les détails</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Fait avec <Heart className="h-4 w-4 text-rose-500 fill-rose-500" /> pour Mathilde
          </p>
        </div>
      </footer>
    </div>
  )
}
