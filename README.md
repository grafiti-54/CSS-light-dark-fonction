# Light/Dark Theme Switcher

Un exemple simple et élégant d'implémentation du thème clair/sombre utilisant la nouvelle fonction CSS `light-dark()`. Cette solution permet une transition fluide entre les thèmes et respecte les préférences système de l'utilisateur tout en offrant la possibilité de basculer manuellement entre les thèmes.

## 🌟 Caractéristiques

- Utilisation de la nouvelle fonction CSS `light-dark()`
- Transitions fluides entre les thèmes
- Support des préférences système
- Bouton de basculement manuel
- Animations et effets interactifs
- Design responsive
- Code modulaire et bien organisé

## 🛠️ Technologies Utilisées

- HTML5
- CSS3 (avec variables CSS et `light-dark()`)
- JavaScript Vanilla

## 📁 Structure du Projet

```
light-dark-theme/
│
├── index.html          # Structure HTML principale
├── css/
│   └── style.css      # Styles et transitions
├── js/
│   └── script.js      # Logique de changement de thème
└── README.md         # Documentation
```

## 💻 Installation

1. Clonez ce repository :
```bash
git clone https://github.com/grafiti-54/CSS-light-dark-fonction.git
```

2. Ouvrez `index.html` dans votre navigateur préféré

## 🌐 Compatibilité Navigateurs

Cette fonctionnalité est supportée par les navigateurs modernes :
- Chrome 123+
- Firefox 120+
- Safari 17.5+
- Edge 123+

## 📝 Notes

- La fonction `light-dark()` est une nouvelle fonctionnalité CSS en 2024 qui simplifie grandement la gestion des thèmes
- Pour que la fonction fonctionne, il est nécessaire de définir `color-scheme: light dark` sur l'élément `:root`
- Les transitions sont optionnelles mais améliorent significativement l'expérience utilisateur
