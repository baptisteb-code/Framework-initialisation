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
  {id : 1, question: "Qui es-tu ? ⮛", reponse:"Je m’appelle Baptiste, je suis étudiant à l’IIM Digital School à Paris, et je mélange graphisme, vidéo et développement web."},
  {id : 2, question: "Quels types de projets réalises-tu ? ⮛", reponse:"Je réalise des sites et applications web, des visuels, des publicités vidéo et des scènes 3D."},
  {id : 3, question: "Où puis-je voir plus de tes projets ? ⮛", reponse:"Sur la page Projets, avec une fiche détaillée pour chaque réalisation."}
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