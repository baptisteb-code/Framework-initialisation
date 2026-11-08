export type Projet = {
  id: number
  slug: string
  titre: string
  description: string
  categorie: string
  resume: string,
  misEnAvant: boolean
}

export const PROJETS: Projet[] =[
  {id : 1, slug: "kinizy", titre: "Kinizy", description:"J’ai été chargé de vibe coder une application pour une kinésithérapeute du sport. Ce dont elle avait besoin, c’était une application où elle pouvait rentrer les données des tests qu’elle réalisait sur ses patients pour infino avoir un compte rendu global des tests du clients pour savoir si un retour au sport est réalisable.", resume: "Réalisation d'une application web pour une kinésithérapeute", categorie: "Dev", misEnAvant: true},
  {id : 2, slug: "pub-nike", titre: "Pub Nike", description:"J’ai pu produire avec une équipe une pub factice Nike pour promouvoir la paire la Mercurial, une paire de crampon.", resume: "Campagne publicitaire pour Nike", categorie: "Audiovisuel", misEnAvant: false},
  {id : 3, slug: "pub-babe", titre: "Pub Babe", description:"Mon équipe et moi avons imaginé une approche promotionnelle humoristique et décalée autour du short à 3 ceintures de la marque (B)ABE.", resume: "Campagne publicitaire pour Babe", categorie: "Audiovisuel", misEnAvant: true},
  {id : 4, slug: "to-do-list", titre: "To Do List", description:"Pour m'entrainer au JS, j'ai créé une application de gestion de tâches.", resume: "Application de gestion de tâches", categorie: "Dev", misEnAvant: false},
  {id : 5, slug: "scene-medieval", titre: "Scène Médiéval", description:"Dans le cadre des semaines de cours de 3D, nous avons créé une scènes médiévale.", resume: "Scène théâtrale médiévale", categorie: "3D", misEnAvant: false},
  {id : 6, slug: "scene-architecture", titre: "Scène Architecture", description:"Dans le cadre des semaines de cours de 3D, nous avons créé un salon.", resume: "Création d'un salon", categorie: "3D", misEnAvant: true}
]
  

