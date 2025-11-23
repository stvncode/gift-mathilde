import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-border/50">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-serif font-light">
            Cadeau introuvable
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="flex justify-center">
            <Heart className="h-24 w-24 text-amber-600/30 dark:text-amber-400/30" />
          </div>
          <p className="text-muted-foreground">
            Oups ! Ce cadeau n'existe pas dans la liste de Mathilde.
          </p>
          <Button asChild className="w-full bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700">
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à la liste
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

