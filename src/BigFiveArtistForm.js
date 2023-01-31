import React, {useEffect} from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import {styled} from "@mui/material/styles"

//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function BigFiveArtistForm({statementValue}){
    
    const handleStatementSelection = (event) => {
      console.log(event.target.value);
      statementValue(event.target.value);
    };

    
    const RadioGroupResponsive = styled("RadioGroup") (({ theme }) => ({
      [theme.breakpoints.down("md")]: {
        name: "radio-buttons-group",
        color: "red"
      }

    }))

    return (
        <>
          <Box display={{sm: 'block', xs: 'block', md: 'none', lg: 'none', xl: 'none'}}>
            <FormControl sx={{ml: 5}}>
              <RadioGroup
                aria-labelledby="bigFive-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleStatementSelection}
              >
                <FormControlLabel value="1" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Trifft überhaupt nicht zu</Typography>} />
                <FormControlLabel value="2" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Trifft eher nicht zu</Typography>} />
                <FormControlLabel value="3" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Weder noch</Typography>} />
                <FormControlLabel value="4" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Trifft eher zu</Typography>} />
                <FormControlLabel value="5" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Trifft voll und ganz zu</Typography>} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box display={{xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none'}}>
            <FormControl sx={{ml: 5}}>
              <RadioGroup
                row
                aria-labelledby="bigFive-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleStatementSelection}
              >
                <FormControlLabel value="1" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Trifft überhaupt nicht zu</Typography>} />
                <FormControlLabel value="2" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Trifft eher nicht zu</Typography>} />
                <FormControlLabel value="3" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Weder noch</Typography>} />
                <FormControlLabel value="4" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Trifft eher zu</Typography>} />
                <FormControlLabel value="5" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 13}}}/>} label={<Typography sx={{fontSize: '15px'}}>Trifft voll und ganz zu</Typography>} />
              </RadioGroup>
            </FormControl>
          </Box>
        </>
    )
}

