# 🚀 Guide de Déploiement - Liste de Mathilde

## Déploiement sur Vercel avec Neon Postgres

### Prérequis

- Un compte Vercel (gratuit)
- Un compte Neon (gratuit) - [neon.tech](https://neon.tech)
- Le code poussé sur GitHub/GitLab/Bitbucket

### Étape 1 : Créer la base de données Neon

1. Allez sur [console.neon.tech](https://console.neon.tech)
2. Créez un nouveau projet (ex: `gift-mathilde-db`)
3. Choisissez la région la plus proche
4. Une fois créé, **copiez la connection string** :
   - Dans le dashboard Neon
   - Section "Connection Details"
   - Sélectionnez **"Pooled connection"** (recommandé pour Vercel)
   - Copiez l'URL complète qui ressemble à :
     ```
     postgresql://user:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require
     ```

### Étape 2 : Déployer le site sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository Git
4. **Avant de déployer**, ajoutez la variable d'environnement :
   - Dans "Environment Variables"
   - Name: `DATABASE_URL`
   - Value: collez votre connection string Neon
   - Cliquez sur "Add"
5. Cliquez sur "Deploy"

⏱️ Le premier déploiement prend ~2-3 minutes

### Étape 3 : Initialiser la base de données

Une fois le déploiement terminé, visitez cette URL dans votre navigateur :

```
https://gift-mathilde.vercel.app/api/init-db
```

Vous devriez voir :

```json
{
  "success": true,
  "message": "Database initialized"
}
```

Cela créera automatiquement la table `purchases` dans votre base Neon.

🎉 **C'est tout !** Votre site est maintenant complètement fonctionnel.

## 🔍 Vérification

### Tester le système d'achat

1. Allez sur votre site
2. Cliquez sur un cadeau
3. Cliquez sur "J'ai acheté ce cadeau"
4. Confirmez
5. Retournez à la liste → le cadeau devrait apparaître comme "Déjà acheté"
6. Rechargez la page → l'état devrait persister (c'est stocké en base de données)

### Voir les données dans la base

Dans Vercel :

1. Allez dans "Storage" → votre base de données
2. Cliquez sur l'onglet "Data"
3. Vous pouvez voir la table `purchases` et son contenu

## 🔧 Configuration Avancée

### Nom de domaine personnalisé

1. Dans Vercel, allez dans "Settings" → "Domains"
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions DNS

### Variables d'environnement additionnelles

Si vous voulez ajouter d'autres variables :

1. "Settings" → "Environment Variables"
2. Ajoutez vos variables
3. Redéployez le projet

## 📊 Gestion de la base de données

### Voir les achats

Utilisez l'API ou l'interface Neon :

```
GET https://gift-mathilde.vercel.app/api/gifts/purchases
```

### Réinitialiser un achat (en cas d'erreur)

**Option 1 : Via l'API**

```bash
curl -X DELETE https://gift-mathilde.vercel.app/api/gifts/[GIFT_ID]/purchase
```

**Option 2 : Via le SQL Editor de Neon**

1. Allez dans votre projet Neon
2. Cliquez sur "SQL Editor"
3. Exécutez :

```sql
DELETE FROM purchases WHERE gift_id = 'gift-id-here';
```

### Voir toutes les données

Dans Neon Console :

1. SQL Editor → "Tables"
2. Sélectionnez la table `purchases`
3. Vous verrez tous les achats

## 🆘 Dépannage

### Erreur "Failed to connect to database"

1. Vérifiez que `DATABASE_URL` est bien défini dans Vercel
   - Allez dans "Settings" → "Environment Variables"
   - Vérifiez que la variable existe et est correcte
2. Vérifiez que votre base Neon est active (pas en pause)
3. Testez la connection string dans le SQL Editor de Neon
4. Redéployez le projet : "Deployments" → menu "..." → "Redeploy"

### Le statut des achats ne persiste pas

1. Visitez `/api/init-db` pour recréer la table
2. Vérifiez les logs dans "Deployments" → votre déploiement → "Logs"

### Erreur 500 sur l'API

1. Vérifiez les logs Vercel
2. Assurez-vous que `@neondatabase/serverless` est bien installé
3. Vérifiez que `DATABASE_URL` est bien défini
4. Testez la route `/api/init-db` pour voir l'erreur exacte

## 💰 Coûts

### Plan Gratuit

**Vercel :**

- ✅ Déploiements illimités
- ✅ SSL automatique
- ✅ 100GB de bande passante/mois

**Neon Postgres :**

- ✅ 512 MB de stockage
- ✅ Branches illimitées (dev/staging)
- ✅ Autoscaling automatique
- ✅ Pause automatique après inactivité

Pour un site de liste de cadeaux familial, **les plans gratuits sont largement suffisants** ! 🎁

## 🔄 Mises à jour

Pour déployer des modifications :

1. Commitez et poussez votre code sur Git
2. Vercel déploiera automatiquement
3. Aucune action supplémentaire nécessaire

Les données de la base de données sont préservées entre les déploiements.
