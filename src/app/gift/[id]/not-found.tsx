import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center text-3xl">
            Cadeau introuvable
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="flex justify-center">
            <Heart className="h-24 w-24 text-rose-300" />
          </div>
          <p className="text-muted-foreground">
            Oups ! Ce cadeau n'existe pas dans la liste de Mathilde.
          </p>
          <Button asChild className="w-full">
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

