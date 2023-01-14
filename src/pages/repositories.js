import * as React from 'react';
import RepositoryCard from '../components/repository';
import { useRepoData } from '../hooks/repository-data';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';

export default function Repository() {
  const repos = useRepoData()
  return (

    <Box id="wrapper" >
      <GlobalStyles styles={{ body: { padding: '0', margin: '0' } }} />
      <Typography variant="h3" component="div" align="center"> Repositories</Typography>
      <Container>
        {
          repos.map(repo =>
            <div key={repo.node.name} >
              <RepositoryCard
                name={repo.node.name} description={repo.node.description}
                url={repo.node.url} dateCreated={repo.node.createdAt}
                languages={repo.node.languages}>
              </RepositoryCard>
            </div>)
        }
      </Container>
    </Box>
  )
}
export const Head = () => <title>Repositories</title>