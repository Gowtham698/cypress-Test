import cypress from "cypress";
import { when } from "cypress-cucumber-preprocessor/steps";


when ('read the json file',()=>{
   
   let data = cy.readFile('example.json')
   testdata = JSON.parse(JSON.stringify(data))
   let dataset = testdata
})