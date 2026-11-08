import BoutonJaime from "./bouton-jaime"
import Link from "next/link"  


type Props={
    titre: string,
    categorie: string,
    resume: string,
    misEnAvant?: boolean
    href?: string
}

export default function Carte({ titre, resume, categorie, misEnAvant, href }: Props) {
  return (
    <article className="rounded-lg border border-neutral-200 p-5">
      {misEnAvant && (
        <span className="mb-2 inline-block rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold uppercase text-white">
          En vedette
        </span>
      )}
      <p className="text-xs uppercase text-neutral-500">{categorie}</p>
      <h3 className="mt-1 font-semibold">{titre}</h3>
      <p className="mt-2 text-sm text-neutral-600">{resume}</p>
      <div className="mt-4">
        <BoutonJaime />
      </div>
      {href ? <Link href={href}>{titre}</Link> : titre}
    </article>
  )   
}
    