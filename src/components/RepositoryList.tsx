import { useState, useEffect } from 'react'

//styles
import '../styles/repositories.scss'

//components
import { RepositoryItem } from './RepositoryItem'

//repositorio link https://api.github.com/users/jhonscarpa/repos

interface IRepository {
  id: string
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositores] = useState<IRepository[]>([])
  useEffect(() => {
    fetch('https://api.github.com/users/jhonscarpa/repos')
      .then(response => response.json())
      .then(data => setRepositores(data))
  }, [])
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(item => (
          <RepositoryItem key={item.id} repository={item} />
        ))}
      </ul>
    </section>
  )
}
