"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ModeToggle } from "@/components/toggle-mode"
import { getCategoryLabel, getGiftById } from "@/data/gifts"
import { usePurchases } from "@/hooks/use-purchases"
import { ArrowLeft, Book, ExternalLink, Gift, Heart, ShoppingBag, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export default function GiftDetailPage() {
  const params = useParams()
  const id = params.id as string
  const gift = getGiftById(id)
  const { isPurchased, markAsPurchased, loading } = usePurchases()
  const [showDialog, setShowDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const purchased = !loading && isPurchased(id)

  if (!gift) {
    notFound()
  }

  const handlePurchase = async () => {
    setIsSubmitting(true)
    try {
      const success = await markAsPurchased(id)
      if (success) {
        toast.success("Merci ! Le cadeau a été marqué comme acheté 🎁")
        setShowDialog(false)
      } else {
        toast.error("Une erreur est survenue, veuillez réessayer")
      }
    } catch (error) {
      toast.error("Une erreur est survenue, veuillez réessayer")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getCategoryIcon = () => {
    switch (gift.category) {
      case "books":
        return <Book className="h-5 w-5" />
      case "kindle":
        return <Gift className="h-5 w-5" />
      case "accessories":
        return <Sparkles className="h-5 w-5" />
      default:
        return <Heart className="h-5 w-5" />
    }
  }

  const getCategoryColor = () => {
    switch (gift.category) {
      case "books":
        return "from-slate-100 to-stone-100 dark:from-slate-800 dark:to-stone-800"
      case "kindle":
        return "from-slate-100 to-stone-100 dark:from-slate-800 dark:to-stone-800"
      case "accessories":
        return "from-slate-100 to-stone-100 dark:from-slate-800 dark:to-stone-800"
      default:
        return "from-slate-100 to-stone-100 dark:from-slate-800 dark:to-stone-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2 hover:text-amber-700 dark:hover:text-amber-500">
                <ArrowLeft className="h-4 w-4" />
                Retour à la liste
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border border-border/50 pt-0">
            {/* Image Section */}
            <div className={`relative h-96 bg-gradient-to-br ${getCategoryColor()}`}>
              {gift.imageUrl ? (
                <Image
                  src={gift.imageUrl}
                  alt={gift.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  {gift.category === "books" && <Book className="h-32 w-32 text-amber-600/20 dark:text-amber-400/20" />}
                  {gift.category === "kindle" && <Gift className="h-32 w-32 text-amber-600/20 dark:text-amber-400/20" />}
                  {gift.category === "accessories" && (
                    <Sparkles className="h-32 w-32 text-amber-600/20 dark:text-amber-400/20" />
                  )}
                  {gift.category === "other" && <Heart className="h-32 w-32 text-amber-600/20 dark:text-amber-400/20" />}
                </div>
              )}
              <div className="absolute top-6 left-6">
                <Badge className="bg-background/95 backdrop-blur text-foreground text-base px-4 py-2 gap-2 border border-amber-200 dark:border-amber-800">
                  {getCategoryIcon()}
                  {getCategoryLabel(gift.category)}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <CardHeader className="space-y-4">
              <div className="flex items-start gap-3">
                <CardTitle className="text-4xl font-serif font-light tracking-wide text-foreground flex-1">
                  {gift.title}
                </CardTitle>
                {gift.isFavorite && !purchased && (
                  <div className="bg-rose-500 dark:bg-rose-600 rounded-full p-3 shadow-lg animate-pulse flex-shrink-0">
                    <Heart className="h-6 w-6 text-white fill-white" />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {gift.isFavorite && !purchased && (
                  <Badge className="w-fit bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700">
                    ❤️ Coup de cœur de Mathilde
                  </Badge>
                )}
                {purchased && (
                  <Badge className="w-fit bg-slate-700 dark:bg-slate-600 text-white border-0">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Ce cadeau a déjà été acheté
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed">{gift.description}</p>
              </div>

              {gift.price && (
                <div className="flex items-center gap-2 text-2xl font-semibold text-rose-600">
                  <span>{gift.price}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 text-white shadow-lg"
                  disabled={purchased}
                >
                  <a href={gift.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Voir le produit
                  </a>
                </Button>
                {!purchased ? (
                  <Button
                    onClick={() => setShowDialog(true)}
                    size="lg"
                    variant="outline"
                    className="flex-1 border-2 border-green-600 dark:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/30 text-green-700 dark:text-green-400"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    J'ai acheté ce cadeau
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="flex-1 border-2 border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  >
                    <Link href="/">
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Retour aux cadeaux
                    </Link>
                  </Button>
                )}
              </div>

              {/* Link Display */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Lien du produit :</p>
                <a
                  href={gift.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-amber-700 dark:text-amber-500 hover:underline break-all"
                >
                  {gift.link}
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-amber-600 dark:text-amber-500 fill-amber-600 dark:fill-amber-500" />
              Un cadeau parfait pour Mathilde
              <Heart className="h-4 w-4 text-amber-600 dark:text-amber-500 fill-amber-600 dark:fill-amber-500" />
            </p>
          </div>
        </div>
      </main>

      {/* Purchase Confirmation Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Confirmer l'achat</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Vous êtes sur le point de marquer ce cadeau comme acheté. Il apparaîtra alors comme
              non disponible pour les autres personnes. Êtes-vous sûr(e) ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setShowDialog(false)} disabled={isSubmitting}>
              Annuler
            </Button>
            <Button
              onClick={handlePurchase}
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              {isSubmitting ? "En cours..." : "Confirmer l'achat"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
