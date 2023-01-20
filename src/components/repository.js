import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LanguagesUsed from './languages';

export default function RepositoryCard({ name, description, url, dateCreated, datePushed, languages }) {

  const dateCreatedObj = new Date(dateCreated);
  const dateCreatedArr = dateCreatedObj.toDateString().split(" ");
  const dateCreatedString = "Created: " + dateCreatedArr[1] + " " + dateCreatedArr[2] + ", " + dateCreatedArr[3];

  const datePushedObj = new Date(datePushed);
  const datePushedArr = datePushedObj.toDateString().split(" ");
  const datePushedString = "Last Commit: " + datePushedArr[1] + " " + datePushedArr[2] + ", " + datePushedArr[3];

  return (
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography color="text.secondary">
              {description}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'left'
              }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5 }} color="text.secondary">{dateCreatedString}</Typography>
              <Typography variant="subtitle2" sx={{ mb: 1.5, ml: 1.5 }} color="text.secondary">{datePushedString}</Typography>
            </Box>
            <LanguagesUsed projectName={name} languageList={languages.edges}></LanguagesUsed>
          </CardContent>
          <CardActions sx={{ mb: 1.5, ml: .5 }}>
            <Button size="small" variant="contained" href={url}>Github</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>);
}
