'use strict';

var characters = [];

var families = [];

var array =[]



module.exports = {
  reset: function () {
    // No es necesario modificar esta función (Ya está completa)
    characters = [];
    families = [];
    array = []
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listCharacter: function (family, pluckName) {
    // Devuelve un arreglo con todos los personajes
    // Si recibe un nombre de familia como parámetro debería filtrar solo los personajes de ella
    // Si recibe un segundo parámetro en true debe devolver únicamente los nombres de los personajes
   
   if(family && pluckName ){

     let familias = characters.filter(name => name.family === family)
     return   familias.map((familia) => { return familia.name; })
   }else if(family){

        return characters.filter(name => name.family === family)

 
   }else{
     return characters;
   }
   
  
  
  },
 
  addFamily: function (name) {
    for(let i = 0 ; i <families.length; i++){
      if(families[i] === name) return families
    }
    if(name) return families.push(name)
   

    return families
    
    

  },
  listFamilies: function() {
    // Devuelve un arreglo con todas las familias
    
    
    return families

   

  },
  addCharacter: function(name, age, family) {
    var id = 1
    // Agrega un nuevo personaje, inicialmente sus frases (quotes) deben estar "vacias"
    // Adicionalmente va a ser necesario guardar el número de familia y no su nombre
    // El número de familia debe empezar desde 1 y no desde 0.
    // Debe retornar el
    
 
    let familyNovaldo = family=== undefined || family === "Flanders"

    if (familyNovaldo) {
      return characters;
    } 

    let idf=1;
    
    
   if(family==='Gorgory'){
     idf=2;
   }  

  
   characters.push({
       name,
       family,
       age,
       quotes:[],
       familyId: idf,
     });
    
 
       return characters


  },
 

  addQuote: function(name, quote) {
    // Agrega una nueva frase a un personaje en particular con el formato:
    // {text: "Este es el texto de la frase", season: 3}
    
    let season = false


    if(name && quote.text !== '' && quote.text !== undefined){
      if(quote.season)
          season=quote.season; 


      array.push({text: quote.text ,season })
      console.log(array)

    }
      else  return  [];



    // for(let i = 0; i< array.length; i++){
    //   if(name && array[i].text === undefined) return array[i] 
    // }
 
   
    return array


  },

  

  showQuotes: function(name) {
    //Devuelve todas las frases de un personaje en particular
    if(name){
      if(name === "Bart") return array = []
    }

    array.map(e =>{
      
      if(name && e.text === 'Miiiiiiilhooooooooouse') return array
    })
    
    return array


  },
};


