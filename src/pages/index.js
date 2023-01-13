import * as React from "react"
import { useRepoData } from "../hooks/repository-data"

export default function RepositoryPage() {
  const repos = useRepoData()
  return (
    <div>
      <h1>Projects</h1>
      <h2>Repos</h2>
      <ul>
        {
          repos.map(repo =>
            <li key={repo.node.name}>{repo.node.name}: {repo.node.description}</li>)
        }
      </ul>
    </div>
  )
}

export const Head = () => <title>Home Page</title>
