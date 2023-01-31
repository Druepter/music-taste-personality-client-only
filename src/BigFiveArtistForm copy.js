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


//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function BigFiveArtistForm({statementValue}){
    
    const handleStatementSelection = (event) => {
      console.log(event.target.value);
      statementValue(event.target.value);
    };

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
          <FormControl sx={{ml: 5}}>
            {`(min-width:600px) matches: ${matches}`}
            <RadioGroup
              row
              aria-labelledby="bigFive-row-radio-buttons-group-label"
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
        </>
    )
}

