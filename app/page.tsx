import Image from "next/image";
import Bouton from "@/components/bouton"
import Section from "@/components/section"
import Hero from "@/components/hero"
import Carte from "@/components/carte"
import Accordeon from "@/components/accordeon"
import { PROJETS } from "@/data/projets"



// type Projet ={
//   id: number,
//   titre: string,
//   resume: string, 
//   categorie: string
// }


// const PROJETS: Projet[] =[
//   {id : 1, titre: "Kinizy", resume:"identité visuelle", categorie: "Dev"},
//   {id : 2, titre: "Pub Nike", resume:"identité visu", categorie: "Audiovisuel"},
//   {id : 3, titre: "Pub Babe", resume:"identité visuelle", categorie: "Audiovisuel"}
// ]

type Question ={
  id: number,
  question: string,
  reponse: string
}

const QUESTIONS: Question[] =[
  {id : 1, question: "Quels sont vos engagements écoresponsables ? ⮛", reponse:"Nous réduisons activement notre empreinte carbone en optimisant nos emballages, en choisissant des partenaires éthiques et en favorisant des circuits logistiques plus verts."},
  {id : 2, question: "Prévoyez-vous de nouveautés prochainement ? ⮛", reponse:"Oui ! Nous développons constamment de nouveaux produits et services. Inscrivez-vous à notre newsletter pour découvrir nos prochains lancements en avant-première."},
  {id : 3, question: "Comment utilisez-vous les avis clients pour évoluer ? ⮛", reponse:"Vos retours sont essentiels. Nous analysons chaque suggestion pour perfectionner notre catalogue et adapter nos futurs projets à vos besoins réels."}
]

export default function Accueil(){
  return (
  <main className="mx-auto max-w-3xl px-6 py-16">

    <Hero
      titre="Mon portfolio"
      texte="Bienvenue sur mon portfolio, où je partage mes projets et réalisations. Explorez mes travaux et découvrez mon univers créatif."
    />

    <Section titre="Mes projets">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJETS.map((projet) => (
          <Carte
            key={projet.id}
            titre={projet.titre}
            categorie={projet.categorie}
            resume={projet.resume}
            href={`/projets/${projet.slug}`}
          />
        ))}
      </div>

      <Bouton label="voir plus" href="/projet" variante="plein"></Bouton>

    </Section>

   

    {QUESTIONS.map((question) => (
          <Accordeon
            key={question.id}
            question={question.question}
            children={question.reponse}
          />
        ))}

  </main>
  )
}