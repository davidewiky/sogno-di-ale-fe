import { red } from "@mui/material/colors";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Instagram, YouTube } from "@mui/icons-material";

export function Info() {
  return (
    <Card
      style={{
        backgroundColor: "transparent",
        borderStyle: "double",
        flexWrap: "wrap",
        resize: "horizontal",
        overflow: "hidden",
      }}
    >
      <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }}>A</Avatar>} />
      <CardContent>
        <Typography sx={{ color: "text.primary" }} variant="body2">
          È un’associazione ONLUS per la ricerca oncologica in ambito
          pediatrico. È nata il 21 febbraio 2010 per volontà di familiari, amici
          ed insegnanti di Alessandro Bianchi, morto a soli 18 anni a causa di
          un sarcoma di Ewing, per realizzare il suo sogno, maturato durante la
          lunga lotta contro la malattia: sostenere finanziariamente la ricerca
          scientifica e le attività ricreative dei piccoli degenti all’interno
          dell’ospedale. Per raccogliere fondi, “Il Sogno di Ale” organizza
          eventi culturali, cene benefiche, tornei sportivi e serate informative
          per far conoscere ai coetanei di Alessandro il grande valore della
          vita e l’importanza della ricerca per affrontare le malattie
          pediatriche. IL SOGNO DI ALE è dare ad altri “Ale” la forza per
          combattere la terribile angoscia della malattia e la speranza di
          poterla sconfiggere.
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          allow="autoplay; encrypted-media"
          allowFullScreen
          component="iframe"
          height="150"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          width="150"
        />
        <Typography variant="subtitle2">
          “Sempre resistere alle forze contrarie; non piegarsi mai, mostrarsi
          saldi, evoca l’aiuto delle divinità.” Johann Wolfgang Goethe
        </Typography>
      </Box>
      <CardActions disableSpacing>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <YouTube />
        </IconButton>
      </CardActions>
    </Card>
  );
}
