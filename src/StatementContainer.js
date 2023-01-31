import React, {useState, useEffect} from "react";
import Statement from "./Statement";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';


export default function StatementContainer({setBigFiveData, linkToContinue}){

    //Map, welche alle Statements in Textform und als Nummer beinhaltet
    const statementMap = new Map();
    statementMap.set(1, 'Ich bin ehr zurückhaltend, reserviert.')
    statementMap.set(2, 'Ich schenke anderen leicht Vertrauen, glaube an das Gute im Menschen.')
    statementMap.set(3, 'Ich bin bequem, neige zur Faulheit.')
    statementMap.set(4, 'Ich bin entspannt, lasse mich durch Stress nicht aus der Ruhe bringen.')
    statementMap.set(5, 'Ich habe nur wenig künstlerisches Interesse.')
    statementMap.set(6, 'Ich gehe aus mir heraus, bin gesellig.')
    statementMap.set(7, 'Ich neige dazu, andere zu kritisieren.')
    statementMap.set(8, 'Ich erledige Aufgaben gründlich.')
    statementMap.set(9, 'Ich werde leicht nervös und unsicher.')
    statementMap.set(10, 'Ich habe eine aktive Vorstellungskraft, bin fantasievoll.')



    //Map, welche die Nummern der Statementes und die Nummern der Auswahl des Nutzers beeinhaltet
    //key = Statement Nummer
    //value = auswahl welche der Nutzer getroffen hat
    const [statementSelectionMap, setStatementSelectionMap] = useState(new Map())

    //Wenn sich diese States ändern. verändert sich die Seite
    const [statementDescription, setStatementDescription] = useState(statementMap.get(1))
    const [statementNumber, setStatementNumber] = useState(1)
    const [allStatementsDone, setAllStatementsDone] = useState(false)




    const increaseStatementNumber = () => {
      if(statementNumber < statementMap.size){
        setStatementNumber(statementNumber + 1)
      }
      else{
        console.log("jetzt andere Seite")
        setAllStatementsDone(true)
      }
      
    }

    const matchStatementDescriptionToStatementNumer = () => {
      setStatementDescription(statementMap.get(statementNumber))
    }

    //Füge der Selection Map einen Eintrag hinzu
    const addEntryToStatementSelectionMap = (number, selection) => {
      setStatementSelectionMap(statementSelectionMap.set(number, selection))
    }

    const calculateBigFiveInventory = () => {
      console.log("Jetzt wird recodiert")
      recodeStatements()

      const bfi_extraversion = (statementSelectionMap.get(1) + statementSelectionMap.get(6)) / 2
      const bfi_neurotizismus = (statementSelectionMap.get(4) + statementSelectionMap.get(9)) / 2
      const bfi_offenheit = (statementSelectionMap.get(5) + statementSelectionMap.get(10)) / 2
      const bfi_gewissenhaftigkeit = (statementSelectionMap.get(3) + statementSelectionMap.get(8)) / 2
      const bfi_vertraeglichkeit = (statementSelectionMap.get(2) + statementSelectionMap.get(7)) / 2
      


      console.log("Extraversion " + bfi_extraversion)
      console.log("Neurotizismus " + bfi_neurotizismus)
      console.log("Offenheit " + bfi_offenheit)
      console.log("Gewissenhaftigkeit " + bfi_gewissenhaftigkeit)
      console.log("Verträglichkeit " + bfi_vertraeglichkeit)

      const bigFiveMap = new Map()

      bigFiveMap.set('extraversion', bfi_extraversion)
      bigFiveMap.set('neurotizismus', bfi_neurotizismus)
      bigFiveMap.set('offenheit', bfi_offenheit)
      bigFiveMap.set('gewissenhaftigkeit', bfi_gewissenhaftigkeit)
      bigFiveMap.set('vertraeglichkeit', bfi_vertraeglichkeit)

      //BFIK
      //Brand Personality Schwartz


      console.log(bigFiveMap)

      setBigFiveData(bigFiveMap)


    }


    //Einige Statements sind negative Fragen. Diese müssen zu nächst recodiert werden
    const recodeStatements = () => {
      console.log("Map nicht recodiert:")
      console.log(statementSelectionMap)

      statementSelectionMap.forEach((value, key) => {
        console.log("jedes element " + key)
        //All diese Statements müssen recodiert werden
        if(key == 1 || key == 3 || key == 4 || key == 5 || key == 7){
          if(value == 1) {
            statementSelectionMap.set(key, 5)
          }
          else if(value == 2){
            statementSelectionMap.set(key, 4)
          }
          else if(value == 4){
            statementSelectionMap.set(key, 2)
          }
          else if(value == 5){
            statementSelectionMap.set(key, 1)
          }
        }    
      })
      console.log("Map recodiert jo:")
      console.log(statementSelectionMap)

      

    }

    useEffect(() => {
      //Wenn statementNumber sich ändert setzte auch statementDescription neu
      matchStatementDescriptionToStatementNumer()
    }, [statementNumber])

    useEffect(() => {
      //Hier muss eine Prüfung erfolgen ob alle Statements wirklich bearbeitet wurden
      //React führt die Hook use Effekt sonst zweimal aus
      //Einmal bei Initialisierung und einmal beim ändern
      if(allStatementsDone == true){
        calculateBigFiveInventory()
      }
    }, [allStatementsDone])


    return (
        <>
          <Container sx={{boxShadow: 1}} style={{backgroundColor: "white", paddingTop: 6, minHeight: '91vh', marginBottom: 0}} maxWidth="md">
            {allStatementsDone == false ?
              <Statement description={statementDescription} number={statementNumber} increaseStatementNumber={increaseStatementNumber} addEntryToStatementSelectionMap={addEntryToStatementSelectionMap}></Statement>
            :
              <>
                <Typography sx={{mb: 2, mt: 2, fontSize: 15}}>
                  Vielen Dank! Alle Fragen für diesen Teil sind beantwortet.
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx = {{paddingTop: 4, paddingBottom: 5}}
                >
                  <Button component={RouterLink} to={linkToContinue} variant="contained" size="large">Weiter</Button>
                </Box>

              </>

            }
          </Container>     
        </>
    )       




}