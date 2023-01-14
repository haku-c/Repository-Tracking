import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LanguagesUsed from './languages';

export default function RepositoryCard({ name, description, url, languages }) {
  console.log(languages.edges);
  return (
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
            <LanguagesUsed languageList={languages.edges}></LanguagesUsed>
          </CardContent>
          <CardActions>
            <Button size="small" href={url}>Github</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>);
}
