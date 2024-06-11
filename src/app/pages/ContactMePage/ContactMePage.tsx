
import React, { useRef, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Translator from '../../components/Translator';
import '../../../fonts/accidental_presidency/accid___.ttf'
import './styles.css'
import { MailOutline, WhatsApp } from '@mui/icons-material';
import { t } from 'i18next';
import { Footer } from '../../components/Footer';


export const ContactMePage = () => {

  const [message, setMessage] = useState("")

  return <>
    <div className='contact-me-page'>
      <Typography variant='h2' sx={{ mb: 5 }}>
        <Translator path={"commonWords.contactMe"} />
      </Typography>

      <Box
        component={'div'}
        sx={{
          border: '1px solid',
          borderColor: "text.secondary",
          borderRadius: 1,
          maxWidth: '500px',
          width: '90%',
        }}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setMessage(e.target.value) }
              sx={{ m: 2, width: '88%' }}
              id="message"
              label={t("commonWords.message")}
              multiline
              rows={4}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} >
            <Button startIcon={<MailOutline />} href={`mailto:marco.ag.pegoraro@hotmail.com?&body=${message}`} target='_blank' variant="contained" sx={{ mb: 2 }}>
              E-mail
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  </>
}
