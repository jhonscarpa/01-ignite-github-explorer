interface IPropsRepositoryItem {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export function RepositoryItem({ repository }: IPropsRepositoryItem) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url} target="_blank">
        Acessar repositório: {repository.name}
      </a>
    </li>
  )
}
