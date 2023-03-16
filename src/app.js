
 const express = require('express')

const { dirname } = require('path')

const app = express()
  
const port = process.env.PORT || 5000
const path = require('path')
app.set('view engine' , 'hbs')                   
         

                  
const viewDirectory = path.join(__dirname , "../hbsFolders/views")
app.set("views" , viewDirectory)          

   
var hbs = require("hbs")
const partialsPath = path.join(__dirname , "../hbsFolders/partials")
 hbs.registerPartials(partialsPath) 
     
            
app.get('/' , (req , res) => {                              
    res.render('index' , {     
        title : " Information About Each Student" ,
        name  : "Name" ,             
        age   : "Age" ,        
        city  : "City" ,
        lectures : "Lectures",
        average : "Average" ,
                                 
    })          
})                                           

app.get('/firstStage' , (req , res) => {      
    res.render('firstStage' , {                       
        title : "First Stage Data", 
        id    : "Id",                             
        name : "Name",
        age  : " Age",                                 
        city : "City",       
        lecture1 : "C++",    
        lecture2 : "Design",  
        lecture3 : "Architecture",                         
        average : "Average", 
        stud    :  "Students Who Will Not Take The Final Exam"
                     
         
                    
    })                          
})


app.get('/secStage' , (req , res) => {
    res.render('secStage' , {
        title : "Second Stage Data", 
        id    : "Id",  
        name : "Name",
        age  : " Age",
        city : "City",
        lecture1 : "Java",
        lecture2 : "Numerical Analysis",
        lecture3 : "Computational Theory",
        average : "Average",
        stud    :  "Students Who Will Not Take The Final Exam"
                    
    })
})  

app.get('/thirdStage' , (req , res) => {
    res.render('thirdStage' , {
        title : "Third Stage Data", 
        id    :  "Id",
        name  : "Name",
        age   : " Age",
        city : "City",
        lecture1 : "Compiler",
        lecture2 : "Artificial Intelligence",
        lecture3 : "Graphic",
        average : "Average",
        stud    :  "Students Who Will Not Take The Final Exam" 
                                
    })
})



             
app.get('/fourthStage' , (req , res) => {
    res.render('fourthStage' , {          
        title : "Fourth Stage Data", 
        id    :  "Id",         
        name : "Name",  
        age  : " Age",        
        city : "City",          
        lecture1 : "Networks", 
        lecture2 : "Operating Systems",
        lecture3 : "Applications",
        average : "Average",
        stud    :  "Students Who Will Not Take The Final Exam"
                    
    })
})

app.listen(port , () => {
    console.log(`listen ${port}`);
})
// /////////////////////////////////////////////////////////////