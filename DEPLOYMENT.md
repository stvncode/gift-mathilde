# 🚀 Guide de Déploiement - Liste de Mathilde

## Déploiement sur Vercel

### Prérequis
- Un compte Vercel (gratuit)
- Le code poussé sur GitHub/GitLab/Bitbucket

### Étape 1 : Déployer le site

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository Git
4. Vercel détectera automatiquement que c'est un projet Next.js
5. Cliquez sur "Deploy"

⏱️ Le premier déploiement prend ~2-3 minutes

### Étape 2 : Créer la base de données Postgres

1. Une fois le site déployé, allez dans votre projet Vercel
2. Cliquez sur l'onglet **"Storage"**
3. Cliquez sur **"Create Database"**
4. Sélectionnez **"Postgres"**
5. Choisissez un nom pour votre base (ex: `gift-mathilde-db`)
6. Sélectionnez la région la plus proche (ex: `Frankfurt` pour l'Europe)
7. Cliquez sur **"Create"**

✅ Les variables d'environnement sont automatiquement connectées à votre projet

### Étape 3 : Initialiser la base de données

Une fois le déploiement terminé, visitez cette URL dans votre navigateur :

```
https://votre-site.vercel.app/api/init-db
```

Remplacez `votre-site.vercel.app` par l'URL de votre site Vercel.

Vous devriez voir :
```json
{
  "success": true,
  "message": "Database initialized"
}
```

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

Utilisez l'interface Vercel ou l'API :
```
GET https://votre-site.vercel.app/api/gifts/purchases
```

### Réinitialiser un achat (en cas d'erreur)

Vous pouvez supprimer un achat via l'API :
```bash
curl -X DELETE https://votre-site.vercel.app/api/gifts/[GIFT_ID]/purchase
```

Ou via l'interface Vercel Storage en SQL :
```sql
DELETE FROM purchases WHERE gift_id = 'gift-id-here';
```

## 🆘 Dépannage

### Erreur "Failed to connect to database"

1. Vérifiez que la base de données est bien créée dans "Storage"
2. Vérifiez que les variables d'environnement sont connectées
3. Redéployez le projet : "Deployments" → menu "..." → "Redeploy"

### Le statut des achats ne persiste pas

1. Visitez `/api/init-db` pour recréer la table
2. Vérifiez les logs dans "Deployments" → votre déploiement → "Logs"

### Erreur 500 sur l'API

1. Vérifiez les logs Vercel
2. Assurez-vous que `@vercel/postgres` est bien installé
3. Vérifiez que `POSTGRES_URL` est bien défini

## 💰 Coûts

### Plan Gratuit Vercel
- ✅ Déploiements illimités
- ✅ Base de données Postgres (avec limites généreuses)
- ✅ SSL automatique
- ✅ 100GB de bande passante/mois

Pour un site de liste de cadeaux familial, **le plan gratuit est largement suffisant** ! 🎁

## 🔄 Mises à jour

Pour déployer des modifications :
1. Commitez et poussez votre code sur Git
2. Vercel déploiera automatiquement
3. Aucune action supplémentaire nécessaire

Les données de la base de données sont préservées entre les déploiements.

