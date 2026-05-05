# Instructions de Génération de la Landing Page "Before S2EE"

## Contexte du Projet pour l'Intégration
L'événement "Before S2EE" est organisé par le club étudiant ETIC à l'École Nationale Supérieure d'Informatique (ESI). C'est une journée de préparation intensive (workshops, formations, talks) destinée à aider les étudiants à décrocher leur premier emploi, PFE ou stage. Il sert de tremplin avant l'événement phare "S2EE", un grand salon de l'emploi.

## Directives Générales pour Claude
- **Structure** : Créer une Landing Page complète "One-Page" moderne.
- **Images des intervenants** : Les photos se trouvent dans le dossier `public/` et sont nommées explicitement selon le nom de la personne (ex: `/public/moussa_boussekine.jpg`). Tu dois générer le code pour inclure ces images.
- **Formulaire d'inscription** : Utiliser un lien générique `#lien-google-form` (le vrai lien sera injecté plus tard).

---

## 1. Hero Section
- **Titre principal (Pick-up line)** : "Immergez avec nous dans le monde professionnel."
- **Sous-titre explicatif** : Préparez-vous à décrocher votre premier emploi, stage ou PFE grâce à une journée d'accompagnement exclusif.
- **Boutons d'appel à l'action (CTA)** :
  1. **Bouton Principal** : "Inscrivez-vous" (Redirige vers le Google Form).
  2. **Bouton Secondaire** : "Découvrez notre agenda" (Redirige avec une ancre vers la section Agenda plus bas).

## 2. Section Statistiques
- **En-tête (Pick-up line)** : "L'impact en quelques chiffres : l'excellence au service de votre avenir."
- **Données à mettre en valeur (sous forme de grandes cartes ou compteurs)** :
  - **50+** Formations (toutes éditions confondues, sur site et en ligne)
  - **500+** Participants (toutes éditions confondues)
  - **1500+** Simulations d'entretiens (effectuées avec des experts du domaine)
  - **40+** Intervenants professionnels (experts RH et techniques, toutes éditions confondues)

## 3. Section Agenda & Intervenants (Édition : S2EE 17)
- **UI/UX Demandée** : Implémenter un effet "Hover" interactif. L'agenda s'affiche sous forme de liste chronologique sur la gauche. Au survol (hover) d'un élément, les détails (description, intervenants, photos) s'affichent dynamiquement dans un panneau sur la droite.
- **Programme de la journée en présentiel** :
  - **8H30** : Check-in
  - **9H00** : Cérémonie d'ouverture
  - **9H30** : Talk 1 *(Intervenant : Moussa Boussekine - inclure sa photo)*
  - **11H00** : Correction de CV *(Intervenant : Ahmed Addala - inclure sa photo)*
  - **13H00 - 13H30** : Pause déjeuner
  - **13H30** : Talk 2 - Focus LinkedIn *(Intervenant : Boukeha Mohamed Akram - inclure sa photo)*
  - **15H00** : Simulation d'entretien *(Intervenants : Aimen Khelifati & Ahmed Addala - inclure leurs photos)*
  - **17H00** : Clôture

## 4. Section Formations en Ligne (Pré-événement)
- **En-tête (Pick-up line)** : "Prenez une longueur d'avance avec nos sessions en ligne."
- **Contenu** :
  - **Jeudi (18h00 - 19h30)** : Formation CV
  - **Vendredi (18h00)** : Formation LinkedIn
*(Note : Ne pas afficher d'intervenants pour ces formations en ligne, elles doivent être présentées de manière globale).*

## 5. Section FAQ (Foire Aux Questions)
- **En-tête** : "Vous avez des questions ? Nous avons les réponses."
- **Questions à intégrer sous forme d'accordéon** :
  - **Q : Où se déroule l'événement ?**
    - *R* : Le Before S2EE se déroule en présentiel au sein de l'École Nationale Supérieure d'Informatique (ESI).
  - **Q : L'accès à l'événement est-il gratuit ?**
    - *R* : Oui, l'accès à l'événement, aux talks et à toutes les formations est 100% gratuit pour les étudiants !
  - **Q : Faut-il déjà avoir de l'expérience professionnelle pour y participer ?**
    - *R* : Absolument pas ! Au contraire, cet événement est spécialement conçu pour vous aider à acquérir vos premières expériences, structurer votre profil et démystifier les processus de recrutement.
  - **Q : Faut-il s'inscrire à l'avance pour les corrections de CV et simulations ?**
    - *R* : Oui, les places étant limitées pour garantir un suivi qualitatif et personnalisé avec nos experts, l'inscription via notre formulaire est indispensable.
  - **Q : Puis-je assister uniquement aux formations en ligne ?**
    - *R* : Oui, bien que nous recommandions de vivre l'expérience complète en présentiel, vous pouvez vous inscrire spécifiquement pour les webinaires de préparation en ligne.

## 6. Banner CTA (Call to Action Final)
- **Titre (Pick-up line)** : "Prêt à propulser votre carrière au niveau supérieur ?"
- **Design** : Bannière large, accrocheuse, clôturant la page.
- **Bouton** : "Inscrivez-vous dès maintenant" (Redirige vers le Google Form).
