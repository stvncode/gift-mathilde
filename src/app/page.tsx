"use client"

import { ModeToggle } from "@/components/toggle-mode"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCategoryLabel, gifts } from "@/data/gifts"
import { usePurchases } from "@/hooks/use-purchases"
import { Book, Filter, Gift, Heart, ShoppingBag, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"

type CategoryFilter = "all" | "books" | "kindle" | "accessories" | "puzzle" | "paint" | "other"

export default function Home() {
  const { isPurchased, loading } = usePurchases()
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all")
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const filteredGifts = useMemo(() => {
    return gifts.filter((gift) => {
      // Category filter
      if (categoryFilter !== "all" && gift.category !== categoryFilter) {
        return false
      }

      // Favorites filter
      if (showFavoritesOnly && !gift.isFavorite) {
        return false
      }

      // Availability filter
      if (showAvailableOnly && !loading && isPurchased(gift.id)) {
        return false
      }

      return true
    })
  }, [categoryFilter, showFavoritesOnly, showAvailableOnly, loading, isPurchased])

  const resetFilters = () => {
    setCategoryFilter("all")
    setShowFavoritesOnly(false)
    setShowAvailableOnly(false)
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1" />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-foreground">
                Liste de Mathilde
              </h1>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Noël & Anniversaire 2025
              </p>
            </div>
            <div className="flex-1 flex justify-end">
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Welcome Message */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20">
            <CardContent className="pt-6">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-serif font-light text-foreground">Bonjour ! 👋</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Bienvenue sur la liste de cadeaux de Mathilde pour Noël et son anniversaire.
                  </p>
                  <p>
                    Vous trouverez ici une sélection de petites attentions qui lui feraient très
                    plaisir. Les cadeaux marqués d'un{" "}
                    <span className="inline-flex items-center gap-1">
                      <Heart className="h-4 w-4 text-rose-500 fill-rose-500 inline" />
                    </span>{" "}
                    sont ses coups de cœur !
                  </p>
                  <p className="pt-2 text-sm">
                    N'hésitez pas à me contacter si vous avez besoin d'aide ou si vous ne pouvez pas
                    récupérer un cadeau,je peux m'en charger avec plaisir ! 😊
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="space-y-6 border border-border/40 p-6 rounded-xl">
            {/* Category Filters */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Catégories</p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={categoryFilter === "all" ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    categoryFilter === "all"
                      ? "bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700"
                      : "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  }`}
                  onClick={() => setCategoryFilter("all")}
                >
                  Tous ({gifts.length})
                </Badge>
                <Badge
                  variant={categoryFilter === "books" ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    categoryFilter === "books"
                      ? "bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700"
                      : "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  }`}
                  onClick={() => setCategoryFilter("books")}
                >
                  <Book className="h-3 w-3 mr-1" />
                  Livres ({gifts.filter((g) => g.category === "books").length})
                </Badge>
                <Badge
                  variant={categoryFilter === "kindle" ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    categoryFilter === "kindle"
                      ? "bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700"
                      : "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  }`}
                  onClick={() => setCategoryFilter("kindle")}
                >
                  <Gift className="h-3 w-3 mr-1" />
                  Kindle ({gifts.filter((g) => g.category === "kindle").length})
                </Badge>
                <Badge
                  variant={categoryFilter === "accessories" ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    categoryFilter === "accessories"
                      ? "bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700"
                      : "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  }`}
                  onClick={() => setCategoryFilter("accessories")}
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  Accessoires ({gifts.filter((g) => g.category === "accessories").length})
                </Badge>
                <Badge
                  variant={categoryFilter === "puzzle" ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    categoryFilter === "puzzle"
                      ? "bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700"
                      : "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  }`}
                  onClick={() => setCategoryFilter("puzzle")}
                >
                  Puzzles ({gifts.filter((g) => g.category === "puzzle").length})
                </Badge>
                <Badge
                  variant={categoryFilter === "paint" ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    categoryFilter === "paint"
                      ? "bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700"
                      : "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  }`}
                  onClick={() => setCategoryFilter("paint")}
                >
                  Peinture ({gifts.filter((g) => g.category === "paint").length})
                </Badge>
                <Badge
                  variant={categoryFilter === "other" ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    categoryFilter === "other"
                      ? "bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700"
                      : "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  }`}
                  onClick={() => setCategoryFilter("other")}
                >
                  Autres ({gifts.filter((g) => g.category === "other").length})
                </Badge>
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Filtres rapides</p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={showFavoritesOnly ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    showFavoritesOnly
                      ? "bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-700"
                      : "border-rose-300 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                  }`}
                  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                >
                  <Heart className={`h-3 w-3 mr-1 ${showFavoritesOnly ? "fill-white" : ""}`} />
                  Coups de cœur uniquement
                </Badge>
                <Badge
                  variant={showAvailableOnly ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    showAvailableOnly
                      ? "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                      : "border-green-300 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-950/30"
                  }`}
                  onClick={() => setShowAvailableOnly(!showAvailableOnly)}
                >
                  <ShoppingBag className="h-3 w-3 mr-1" />
                  Disponibles uniquement
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Gift Cards Grid */}
        {filteredGifts.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-muted rounded-full">
                <Filter className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-light text-foreground mb-2">
              Aucun cadeau trouvé
            </h3>
            <p className="text-muted-foreground mb-4">
              Essayez de modifier vos filtres pour voir plus de résultats
            </p>
            <Button variant="outline" onClick={resetFilters}>
              Réinitialiser les filtres
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGifts.map((gift) => {
              const purchased = !loading && isPurchased(gift.id)

              return (
                <Link key={gift.id} href={`/gift/${gift.id}`} className="group">
                  <Card
                    className={`h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden pt-0 border-border/50 ${
                      purchased
                        ? "opacity-60 hover:opacity-70 hover:border-slate-400 dark:hover:border-slate-600"
                        : "hover:border-amber-400/50 dark:hover:border-amber-600/50"
                    }`}
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-100 to-stone-100 dark:from-slate-800 dark:to-stone-800 overflow-hidden">
                      {gift.imageUrl ? (
                        <Image
                          src={gift.imageUrl}
                          alt={gift.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          {gift.category === "books" && (
                            <Book className="h-16 w-16 text-amber-600/30 dark:text-amber-400/30" />
                          )}
                          {gift.category === "kindle" && (
                            <Gift className="h-16 w-16 text-amber-600/30 dark:text-amber-400/30" />
                          )}
                          {gift.category === "accessories" && (
                            <Sparkles className="h-16 w-16 text-amber-600/30 dark:text-amber-400/30" />
                          )}
                          {gift.category === "other" && (
                            <Heart className="h-16 w-16 text-amber-600/30 dark:text-amber-400/30" />
                          )}
                        </div>
                      )}
                      {gift.isFavorite && !purchased && (
                        <div className="absolute top-3 left-3">
                          <div className="bg-rose-500 dark:bg-rose-600 rounded-full p-2 shadow-lg animate-pulse">
                            <Heart className="h-4 w-4 text-white fill-white" />
                          </div>
                        </div>
                      )}
                      {purchased && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-slate-700 dark:bg-slate-600 text-white border-0">
                            <ShoppingBag className="h-3 w-3 mr-1" />
                            Déjà acheté
                          </Badge>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-background/95 backdrop-blur text-foreground border border-amber-200 dark:border-amber-800">
                          {getCategoryLabel(gift.category)}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle
                        className={`transition-colors line-clamp-2 font-serif ${
                          purchased
                            ? "text-muted-foreground"
                            : "group-hover:text-amber-700 dark:group-hover:text-amber-500"
                        }`}
                      >
                        {gift.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {gift.description}
                      </p>
                      <div
                        className={`mt-4 flex items-center text-sm font-medium ${
                          purchased ? "text-muted-foreground" : "text-amber-700 dark:text-amber-500"
                        }`}
                      >
                        <span className="group-hover:mr-2 transition-all">
                          {purchased ? "Voir quand même" : "Voir les détails"}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 text-sm">
            Fait avec{" "}
            <Heart className="h-4 w-4 text-amber-600 dark:text-amber-500 fill-amber-600 dark:fill-amber-500" />{" "}
            pour Mathilde
          </p>
        </div>
      </footer>
    </div>
  )
}
