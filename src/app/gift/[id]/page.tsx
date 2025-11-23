import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCategoryLabel, getGiftById } from "@/data/gifts"
import { ArrowLeft, Book, ExternalLink, Gift, Heart, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function GiftDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const gift = getGiftById(resolvedParams.id)

  if (!gift) {
    notFound()
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
        return "from-rose-100 to-pink-100"
      case "kindle":
        return "from-purple-100 to-indigo-100"
      case "accessories":
        return "from-pink-100 to-purple-100"
      default:
        return "from-rose-100 to-purple-100"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover:text-rose-600">
              <ArrowLeft className="h-4 w-4" />
              Retour à la liste
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-2 pt-0">
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
                  {gift.category === "books" && <Book className="h-32 w-32 text-rose-300" />}
                  {gift.category === "kindle" && <Gift className="h-32 w-32 text-purple-300" />}
                  {gift.category === "accessories" && (
                    <Sparkles className="h-32 w-32 text-pink-300" />
                  )}
                  {gift.category === "other" && <Heart className="h-32 w-32 text-rose-300" />}
                </div>
              )}
              <div className="absolute top-6 left-6">
                <Badge className="bg-white/95 text-foreground text-base px-4 py-2 gap-2">
                  {getCategoryIcon()}
                  {getCategoryLabel(gift.category)}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <CardHeader className="space-y-4">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                {gift.title}
              </CardTitle>
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
                  className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg"
                >
                  <a href={gift.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Voir le produit
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 hover:bg-rose-50"
                >
                  <Link href="/">
                    <Heart className="h-5 w-5 mr-2" />
                    Retour aux cadeaux
                  </Link>
                </Button>
              </div>

              {/* Link Display */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Lien du produit :</p>
                <a
                  href={gift.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-rose-600 hover:underline break-all"
                >
                  {gift.link}
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
              Un cadeau parfait pour Mathilde
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
