
/*const fs=require('fs');

let impresion=fs.readFileSync(__dirname +'/pruebaFs.txt','utf-8')

console.log(impresion)*/

/*const perro= require('./primer modulo')

console.log(perro)*/

//const fs=require('fs')

// const files=fs.readdirSync('./'); //asincronica

//console.log(files);

/*const files=fs.readdir('../', function(err,files){
    if (err) console.log("Error",err);
    else console.log('Result',files);
})

const EventEmitter=require('events'); //event emitter is a class, por eso esta en mayusucla

const emitter=new EventEmitter();

emitter.on('messageLogged', (arg)=> { 
    console.log('Listener called',arg) // le pasas info sobre data
})
//signaling that an event has happened
//a listener is a function that will be called when an event is 
emitter.emit('messageLogged',{id:1,url:'http://'}); //we can add event arguments
*/
//1 00

/*
let sumatoria=(n1,n3,n2)=>{
    if(n3==="+"){
        let suma=n1+n2
        typeof suma ==='number'? console.log(suma) : console.log("error");           
    }else{
        console.log("solo se permite sumar")
    }

    }

sumatoria(2,"+",3)*/

let operacion=(n1,n3,n2)=>{
    if(n3==="+"){
        let suma=n1+n2
        typeof suma ==='number'? console.log(suma) : console.log("error");           
    }else if(n3==="*"){
        let mult=n1*n2
        typeof mult ==='number'? console.log(mult) : console.log("error");   
    }else if(n3==="/"){
        let div=n1/n2
        typeof div ==='number'? console.log(div) : console.log("error");   

    }else if(n3==="-"){
        let res=n1/n2
        typeof res ==='number'? console.log(res) : console.log("error");
    }else{
        console.log("operacion no permitida");
    }
}

operacion(2,"#",2)

/*
let operacion=(n1,n3,n2)=>{
    if(n3==="+"){
        let err=true;
        let suma=n1+n2;
        typeof suma ==='number'? console.log(suma) : err=false;
         while(err===false){
            console.log("no podes sumar letras")
            break;
            };        
        };
};

operacion("a","+",2)*/

/*let suma= (n1,n2)=>{
    let sum=n1+n2;
    console.log(sum)

};

suma(Number(process.argv[2]),Number(process.argv[3]));*/