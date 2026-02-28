# Papa CHAAZOU Michel - Site Hommage

Faire-part de décès transformé en site web moderne et responsif.

## 📋 Contenu

Ce projet comprend un site web complet en une seule page avec sections:
- **Présentation**: Page d'accueil avec photo et dates
- **Faire-part**: Annonce officielle de décès
- **Biographie**: Présentation de Papa Michel
- **Programme**: Calendrier détaillé de la cérémonie
- **Carte**: Localisation des événements

## 📁 Structure du Projet

```
papa_michel_site/
├── index.html              # Page principale du site
├── 404.html               # Page d'erreur
├── PROGRAMME_PAPA_MICHEL_OK.pdf  # Faire-part PDF original
├── images/                # Dossier des images
│   ├── logo.png           # Logo du site
│   ├── fleur.png          # Éléments de décoration
│   └── ...                # Autres images de référence
└── README.md              # Ce fichier

```

## 🚀 Déploiement

### Local (Développement)
```bash
# Ouvrir simplement index.html dans un navigateur
# ou utiliser un serveur local Python:
python -m http.server 8000

# Puis accéder à http://localhost:8000
```

### En ligne
1. Compresser le dossier `papa_michel_site/`
2. Uploader sur votre hébergeur (Netlify, Vercel, etc.)
3. Configurer le domaine personnalisé si souhaité

## 🎨 Personnalisation

### Changer les couleurs
Modifier les valeurs dans la section `<style>` du `index.html`:
- Or: `#d4af37` (primaire)
- Gris/pierre: `#1c1917` (texte)

### Modifier le contenu
Le contenu est entièrement contenu dans `index.html`. Rechercher et remplacer:
- Dates
- Noms et prénoms
- Textes
- Heures du programme

### Ajouter des images
Placer les images dans le dossier `images/` et référencer dans le HTML.

## 📱 Responsive

Le site est entièrement responsive et fonctionne sur:
- Desktop
- Tablette
- Mobile

## 🖨️ Impression & PDF

- Bouton "Télécharger PDF" en haut à droite
- Format A4 automatique
- Tous les styles d'impression sont préservés
- Utilise la bibliothèque `html2pdf.js`

## 📊 Technos utilisées

- **HTML5**: Structure sémantique
- **Tailwind CSS**: Framework CSS utilitaire
- **Vanilla JavaScript**: Animations et interactions
- **html2pdf.js**: Génération de PDF
- **Lucide Icons**: Icônes SVG
- **Google Fonts**: Polices (Playfair Display, Lato)

## ✨ Fonctionnalités

✅ Design moderne et respectueux  
✅ Navigation fluide et intuitive  
✅ Animations au scroll  
✅ Export PDF haute qualité  
✅ Version d'impression optimisée  
✅ Entièrement responsive  
✅ Chargement rapide  
✅ Accessibilité améliorée  

## 📧 Contact & Support

Pour toute question sur le site, veuillez contacter la famille ou l'organisateur.

---

**Création**: 28 février 2026  
**Hommage à**: Papa CHAAZOU Michel (1948-2026)
