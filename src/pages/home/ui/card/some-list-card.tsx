type SomeListCardProps = {
  title: string
  description: string
}

export function SomeListCard(props: SomeListCardProps) {
  const { title, description } = props
  return (
    <article className="animate-fade-in-up">
      <h3 className="mb-4">{title}</h3>
      <p className="text-base text-gray-40">{description}</p>
    </article>
  )
}
