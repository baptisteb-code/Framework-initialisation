type Props = {
  texte: string
}

export default function Badge({ texte }: Props) {
  return (
    <span className="mb-2 inline-block rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold uppercase text-white">
      {texte}
    </span>
  )
}