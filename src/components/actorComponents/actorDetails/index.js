import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import TransgenderIcon from '@mui/icons-material/Transgender';
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };



const MovieDetails = ({ person }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  var genderIcon;

    switch(person.gender){
      case 1: genderIcon = <WomanIcon/>
      break;
      case 2: genderIcon = <ManIcon/>
      break;
      default: genderIcon =  <TransgenderIcon/>
      break;
    }
  

  return (
  
    <>
    {/* <Card style={{marginBottom:40}}>
      <Typography variant="h5" component="h3" style={{padding:20}}>
        {person.name}
      </Typography>
      </Card> */}
<Card style={{marginBottom:40}}>
      <Typography variant="h9" component="p" style={{padding:20}}>
        {person.biography}
      </Typography>
</Card>
      <Paper 
        component="ul" 
        sx={root}
      >
        
        <li>
          <Chip label="AKA" sx={chip} color="primary" />
        </li>
        {person.also_known_as.map((g) => (
          <li key={g}>
            <Chip label={g} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
      
        <Chip icon={<AccessTimeIcon />} label={`${person.place_of_birth}`} />
        <Chip
          icon= {genderIcon}/>
        
        <Chip
          icon={<StarRate />}
          label={`Popularity: ${person.popularity} `}
        />
        <Chip label={`Born: ${person.birthday}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        {/* <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
        {movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={chip} />
          </li>
        ))} */}
      </Paper>
      <Divider style={{paddingTop: 20, paddingBottom: 20}}/>

    </>
  );
};

export default  MovieDetails ;