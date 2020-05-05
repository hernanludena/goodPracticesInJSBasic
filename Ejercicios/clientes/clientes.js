var clientes=[];

function Cliente(cedula,nombre,apellido,edad){
    this.cedula = cedula;
    this.nombre = nombre; 
    this.apellido = apellido;
    this.edad = edad;
    var categoria =""; 
    this.credito=  Math.floor(Math.random() * 100);
    var nombreCompleto="";
}

function guardar(){    
    
  var c1=new Cliente(document.p.cedula.value,
                        document.p.nombre.value,
                       document.p.apellido.value,
                       document.p.edad.value); 
    
    if(document.p.nombre.value ==""){
       document.getElementById("mensajes").value =
                    "nombre es obligatorio"; 
        return;
    }else
    if(document.p.apellido.value ==""){
       document.getElementById("mensajes").value =
                    "apellido es obligatorio"; 
        return;
    }else
    if(parseInt(document.p.edad.value) < 0 || parseInt(document.p.edad.value) > 80 ||document.p.edad.value ==""){
       document.getElementById("mensajes").value =
                    "edad debe ser > 0 y < 80"; 
        return;
    }
    
    
    
    
    //Validacion 
    if(clientes.length==0){
        clientes.push(c1);
    }else{            
        for(var i=0;i<clientes.length;i++)
        {
            if(clientes[i].cedula==c1.cedula){
               // alert("no se puede agregar duplicados");
                document.getElementById("mensajes").value =
                    "no se puede agregar duplicados";
                break;
            }else{
                clientes.push(c1);
                break;
            }
        }
    }
    
    //clean
    document.p.cedula.value="";
    document.p.nombre.value="";
    document.p.apellido.value="";
    document.p.edad.value="";
    
    
}

function mostrarClientes(){
    var cadena="";    
    
    for(var indice in clientes){
       cadena+= clientes[indice].cedula+" " + clientes[indice].nombre+" " + clientes[indice].apellido +" "+clientes[indice].edad+'\n' ;     }
    document.p.ta_clientes.value = cadena; 
    
}

function test_pop(){
    clientes.pop();
    mostrarClientes();
}

function buscar_por_cedula (cedula){
    for(var i=0;i<clientes.length;i++)
    {
            if(clientes[i].cedula==cedula){
                return clientes[i];               
            }else{
                return undefined;
            }
        break;
    }
}

function buscar_persona(){
    var ced = document.p.numero_cedula.value;
    var c1 = buscar_por_cedula (ced);
    
    if (c1 != undefined){        
       document.p.cedula.value = c1.cedula;
       document.p.nombre.value = c1.nombre;
       document.p.apellido.value = c1.apellido
       document.p.edad.value = c1.edad;
       
    }else{
        //alert("no existe el cliente");        
        document.getElementById("mensajes").value = "no existe el cliente";
    }
}


function categoriza(){
    
   clientes.forEach(function(valor){
       
       if(valor.edad < 18){           
            valor.categoria = "A";
       }else if (valor.edad > 18 && valor.edad < 30){ 
           valor.categoria = "B";
       }else if (valor.edad > 30){ 
            valor.categoria = "C";
       }
   });     
}

function modificar_credito(modifica_cred){
    
    for(var i =0; i<clientes.length;i++)
    {
      if(clientes[i].nombreCompleto != "")
      {
        clientes[i].nombreCompleto = clientes[i].nombre+" " + clientes[i].apellido;          
      }
    
     modifica_cred(i);
        
    }
    
}

function mod_credito(){
    modificar_credito(function (i){ 
        var cred = clientes[i].credito;
          if(clientes[i].categoria == "A" && cred < 40){
             cred +=  cred*10/100;        
          }else if(clientes[i].categoria == "C" && cred < 60){
             cred +=  cred*20/100;  
          }else if(clientes[i].categoria == "B"){
             cred +=  cred*15/100;  
          } 
    });   
}

function mod_credito3(){
    modificar_credito(function (i){ 
        var cred = clientes[i].credito;
          if(clientes[i].categoria == "A" || clientes[i].categoria == "B"){
             cred +=  cred*20/100;        
          }
    });   
}
















    
        


