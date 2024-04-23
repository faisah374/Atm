#!/usr/bin/env node
import  inquirer from "inquirer"

let myBalance = 10000; // dollar
let myPin = 1234;

 let pinAnswer = await inquirer.prompt(

    [
        {
            name:"pin",
            message:"enter your pin",
            type:"number"




}
]
);
 if(pinAnswer.pin === myPin){
 console.log("correct pin code!!!")
  let operationAns = await inquirer.prompt(
     [
      {  name:"operation",
 message:"please slection option",
 type:"list",

 choices:["withdraw","check balance","fastcash","other"]}]);
    
         if(operationAns.operation==="fastcash")
           {
           let Ansfastcash= await inquirer.prompt([
           {    
           name:"fashamount",
            message:"cash option",
           type:"list",
           choices:[500,1000,2000,5000,1000]}
           ]                            

         
           
           )
           console.log(Ansfastcash.fashamount);
         
           myBalance  -=Ansfastcash.fashamount
           console.log("Remainig balance"  +" " 
           +  myBalance)}
    

           if(operationAns.operation === "withdraw"){
           let amountAns = await inquirer.prompt(
           [
            
            {
                name:"amount",
             message:"enter your amount",
           type:"number"}]);
           console.log(amountAns.amount);
           myBalance -=amountAns.amount
           console.log("My remaining balance" +" "+   myBalance)
           }else if(operationAns.operation === "check balance"){console.log(myBalance)
           };

        
        
    
    
        
               
 
 }  else{console.log("invalid correct")};
  

