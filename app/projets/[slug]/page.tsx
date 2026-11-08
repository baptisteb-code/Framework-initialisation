import { notFound } from "next/navigation"
import Bouton from "@/components/bouton"
import BoutonJaime from "@/components/bouton-jaime"
import { PROJETS } from "@/data/projets"
import Image from "next/image"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PageProjet({ params }: Props) {
  const { slug } = await params
  const projet = PROJETS.find((p) => p.slug === slug)

  if (!projet) {
    notFound()
  }

  return (
    <article className="py-12">
      <p className="text-xs uppercase text-neutral-500">{projet.categorie}</p>
      <h1 className="mt-2 text-4xl font-semibold">{projet.titre}</h1>
      <h2 className="mt-2 text-sm text-neutral-500">{projet.date}</h2>
      {projet.image && (
        <Image
          src={projet.image}
          alt={projet.titre}
          width={1200}
          height={675}
          className="mt-6 rounded-lg"
        />
      )}

      {projet.video && (
        <video src={projet.video} controls className="mt-6 w-full rounded-lg" />
      )}
      <p className="mt-6 max-w-xl text-neutral-500">{projet.description}</p>
      <div className="mt-8 flex gap-4">
        <BoutonJaime />
        <Bouton label="Tous les projets" href="/projets" variante="contour" />
      </div>
    </article>
  )
}


