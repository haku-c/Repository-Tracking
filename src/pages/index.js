import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function ProjectsPage() {
  const data = useStaticQuery(
    graphql`
    query {
      github {
        user(login:"haku-c") {
          repositories (
            last:20,
            privacy:PUBLIC, 
            orderBy:{
              direction:ASC
              field:CREATED_AT },
            affiliations:COLLABORATOR){
              edges {
                node {
                  url
                  name
                  description
                  createdAt
                  pushedAt
                  languages (
                    first:5, 
                    orderBy:{
                      direction:DESC
                      field:SIZE}
                    ){
                      edges {
                        node {
                          name
                        }
                      }
                  }
              }
            }
          }
        }
      }
    }`)

  console.log(data);
  const repos = data.github.user.repositories.edges;
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
