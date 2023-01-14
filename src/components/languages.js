import * as React from "react"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function LanguagesUsed({ languageList, projectName }) {

  return (
    <Stack direction="row" spacing={1}>
      {
        languageList.map(lang => <Chip key={projectName + lang.node.name} label={lang.node.name}></Chip>)
      }
    </Stack>
  );
}