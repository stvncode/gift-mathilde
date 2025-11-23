# Système d'Achat de Cadeaux

## 🎁 Fonctionnalités

Le site dispose maintenant d'un système complet pour gérer les achats de cadeaux :

### Pour les Utilisateurs

- **Voir les cadeaux disponibles** : Les cadeaux non achetés apparaissent normalement
- **Voir les cadeaux déjà achetés** : Badge "Déjà acheté" + opacité réduite
- **Marquer un cadeau comme acheté** : Bouton "J'ai acheté ce cadeau" sur la page de détail
- **Confirmation** : Dialog de confirmation avant de valider l'achat

### Interface Utilisateur

- **Liste principale** :
  - Cadeaux disponibles : affichage normal avec hover effects
  - Cadeaux achetés : opacité 60%, badge "Déjà acheté", texte "Voir quand même"
- **Page de détail** :
  - Badge "Ce cadeau a déjà été acheté" si applicable
  - Bouton "J'ai acheté ce cadeau" (vert) pour marquer comme acheté
  - Bouton "Retour aux cadeaux" une fois acheté
  - Confirmation dialog avant validation

## 🔧 Architecture Technique

### API Routes (Next.js)

```
/api/gifts/purchases         GET  - Récupérer tous les achats
/api/gifts/[id]/purchase     GET  - Vérifier si un cadeau est acheté
/api/gifts/[id]/purchase     POST - Marquer comme acheté
/api/gifts/[id]/purchase     DELETE - Annuler un achat (admin)
```

### Stockage

**Vercel Postgres** - Base de données PostgreSQL gratuite

- Base de données relationnelle robuste
- Scalable et performante
- Inclus dans le plan gratuit de Vercel

**Schéma de la table** :

```sql
CREATE TABLE purchases (
  id SERIAL PRIMARY KEY,
  gift_id VARCHAR(255) UNIQUE NOT NULL,
  purchased BOOLEAN NOT NULL DEFAULT true,
  purchased_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  purchased_by VARCHAR(255)
);
```

### Hook React

`usePurchases()` - Hook custom pour gérer l'état des achats

- `purchases` : objet contenant tous les achats
- `loading` : état de chargement
- `isPurchased(giftId)` : vérifier si un cadeau est acheté
- `markAsPurchased(giftId, purchasedBy?)` : marquer comme acheté
- `refresh()` : recharger les données

## 🚀 Déploiement sur Vercel

### Étape 1 : Créer une base de données Postgres

1. Allez sur votre projet Vercel
2. Onglet "Storage" → "Create Database"
3. Sélectionnez "Postgres"
4. Choisissez la région (la plus proche de vous)
5. Cliquez sur "Create"

### Étape 2 : Connecter la base de données

Les variables d'environnement seront automatiquement ajoutées :

- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- etc.

### Étape 3 : Initialiser la base de données

Après le premier déploiement, visitez :

```
https://votre-site.vercel.app/api/init-db
```

Cela créera la table `purchases` automatiquement. Vous devriez voir :

```json
{
  "success": true,
  "message": "Database initialized"
}
```

### Étape 4 : C'est tout ! 🎉

Le système est maintenant opérationnel avec une vraie base de données PostgreSQL.

## 🔄 Migration vers une vraie base de données

Si vous voulez migrer vers PostgreSQL, MongoDB, ou autre :

1. Installer le client de votre choix
2. Modifier `/src/lib/storage.ts` pour utiliser votre DB
3. L'interface API reste identique, seule l'implémentation change

Exemple pour Supabase :

```typescript
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export async function getPurchases() {
  const { data } = await supabase.from("purchases").select("*")
  return data
}
```

## 🎨 Personnalisation

### Couleurs

- Badge "Déjà acheté" : `bg-slate-700`
- Bouton "J'ai acheté" : `border-green-600`
- Success toast : vert

### Textes

Modifier dans :

- `/src/app/page.tsx` : badges et messages de la liste
- `/src/app/gift/[id]/page.tsx` : boutons et dialog de confirmation

## 📝 Notes

- Les achats sont persistants (fichier JSON)
- Pas d'authentification : système de confiance
- Un cadeau acheté ne peut pas être "désacheté" via l'interface (mais possible via l'API DELETE)
- Toast notifications pour feedback utilisateur
