import { useStaticQuery, graphql } from "gatsby"

export const useRepoData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        github {
          user(login:"haku-c") {
            repositories (
              last:20,
              privacy:PUBLIC, 
              orderBy:{
                direction:DESC
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
                            color
                          }
                        }
                    }
                }
              }
            }
          }
        }
      }
    `
  )
  const repos = data.github.user.repositories.edges;
  return repos;
}