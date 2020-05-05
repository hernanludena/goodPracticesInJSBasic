var personas =[];
var mayores =[];
function agregar(){     
    
    var p1=new Persona(document.p.nombre.value,
                       document.p.apellido.value,
                       document.p.edad.value);
    
    
    personas.push(p1);
     
    
    var n = parseInt(document.p.edad.value,10);     
    
    if(n > 18)
    {
        mayores.push(p1);
    }else{
        alert("no es mayor");
    }
    
    //clean
     document.p.nombre.value="";
    document.p.apellido.value="";
    document.p.edad.value="";
    
}

function Persona(nombre,apellido,edad){
    this.nombre = nombre; //incluir el this
    this.apellido = apellido;
    this.edad = edad;
    //var x=5; //no es atributo
}




function mostrar(){
    var cadena="";
    
    
    for(var i =0; i<personas.length;i++)
    {
        cadena+= personas[i].nombre+" " + personas[i].apellido +" "+personas[i].edad+'\n' ;
    }
     
    
   document.p.ta_persona.value = cadena;    
}


function mostrar2(){
    var cadena="";    
    
   personas.forEach(function(valor){//,indice
       cadena+= valor.nombre+" " + valor.apellido +" "+valor.edad+'\n' ;               
    }); 
    document.p.ta_persona.value = cadena; 
    
}

function mostrar3(){
    var cadena="";    
    
    for(indice in personas){
       cadena+= personas[indice].nombre+" " + personas[indice].apellido +" "+personas[indice].edad+'\n' ;     }
    document.p.ta_persona.value = cadena; 
    
}


function mostrarMayores(){
    var cadena="";    
    
    for(indice in mayores){       
       cadena+= mayores[indice].nombre+" " + personas[indice].apellido +" "+personas[indice].edad+'\n' ;
       
    }        
        
    document.p.ta_mayor.value = cadena; 
    
}


