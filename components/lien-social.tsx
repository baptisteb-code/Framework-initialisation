type Props = {
  nom: string,
  href: string
}

export default function LienSocial({ nom, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-neutral-600 hover:text-black"
    >
      {nom}
    </a>
  )
}