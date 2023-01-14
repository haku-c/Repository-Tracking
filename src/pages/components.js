import * as React from 'react';
import RepositoryCard from '../components/repository';
import { useRepoData } from '../hooks/repository-data';

export default function Repository() {
  const repos = useRepoData()
  return (
    <div>
      {
        repos.map(repo =>
          <div key={repo.node.name} >
            <RepositoryCard name={repo.node.name} description={repo.node.description}
              url={repo.node.url} languages={repo.node.languages}></RepositoryCard>
          </div>)
      }
    </div>
  )
}
export const Head = () => <title>Repositories</title>