import * as React from 'react';
import RepositoryCard from '../components/repository';
import { useRepoData } from "../hooks/repository-data"

export default function Repository() {
  const repos = useRepoData()
  const repo1 = repos[1].node;
  console.log(repo1);
  const user = {
    name: "Test"
  }
  return (
    <div>
      {
        repos.map(repo =>
          <RepositoryCard name={repo.node.name} description={repo.node.description} url={repo.node.url}></RepositoryCard>)
      }
    </div>
  )
}
export const Head = () => <title>Repository Cards</title>