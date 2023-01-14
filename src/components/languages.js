import * as React from "react"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function LanguagesUsed({ languageList }) {

  return (
    <Stack direction="row" spacing={1}>
      {
        languageList.map(lang => <Chip label={lang.node.name}></Chip>)
      }
    </Stack>
  );
}