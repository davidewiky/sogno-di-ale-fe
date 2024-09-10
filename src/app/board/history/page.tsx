import {Box, Divider, Link, Typography} from "@mui/material";

export default function HistoryPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        LA NOSTRA STORIA
      </Typography>

      <Typography variant="body1" paragraph>
        È un’associazione ONLUS per la ricerca oncologica in ambito pediatrico.
      </Typography>

      <Typography variant="body1" paragraph>
        È nata il 21 febbraio 2010 per volontà di familiari, amici ed insegnanti
        di Alessandro Bianchi, morto a soli 18 anni a causa di un sarcoma di  <Link
          href="https://it.wikipedia.org/wiki/Sarcoma_di_Ewing"
          target="_blank"
          rel="noopener"
        >
          Ewing
        </Link>, per realizzare il suo sogno, maturato durante la lunga lotta
        contro la malattia: sostenere finanziariamente la ricerca scientifica e
        le attività ricreative dei piccoli degenti all’interno dell’ospedale.
      </Typography>

      <Typography variant="body1" paragraph>
        Per raccogliere fondi, “Il Sogno di Ale” organizza eventi culturali,
        cene benefiche, tornei sportivi e serate informative per far conoscere
        ai coetanei di Alessandro il grande valore della vita e l’importanza
        della ricerca per affrontare le malattie pediatriche.
      </Typography>

      <Typography variant="body1" paragraph>
        IL SOGNO DI ALE è dare ad altri “Ale” la forza per combattere la
        terribile angoscia della malattia e la speranza di poterla sconfiggere.
      </Typography>
      <Divider />
      <Typography fontStyle="italic" variant="body1" align="left" paragraph>
        “Sempre resistere alle forze contrarie; <br/>
        non piegarsi mai, <br/>
        mostrarsi saldi, <br/>
        evoca l’aiuto delle divinità.”
        <br />
        <br/>
        <strong>Johann Wolfgang Goethe</strong>
      </Typography>
    </Box>
  );
}
