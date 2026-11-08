import Image from "next/image";
import Bouton from "@/components/bouton"
import Section from "@/components/section"
import Hero from "@/components/hero"
import Carte from "@/components/carte"
import Accordeon from "@/components/accordeon"
import { PROJETS } from "@/data/projets"



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
      avecBouton
    />

    <Section titre="Mes projets">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJETS.slice(0,3).map((projet) => (
          <Carte
            key={projet.id}
            titre={projet.titre}
            categorie={projet.categorie}
            resume={projet.resume}
            href={`/projets/${projet.slug}`}
          />
        ))}
      </div>
      <div className="mt-8">
        <Bouton label="Voir plus" href="/projet" ></Bouton>
      </div>

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