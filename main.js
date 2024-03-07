const numeropc = document.getElementById("numeroPc")
const problemapc = document.getElementById("problemaPc")
const tablaProblemas = document.getElementById("tablaProblemas")
const botonagregar = document.getElementById("btnagregar")
const botoneliminarresueltos= document.getElementById("btneliminarresueltos")
const fila = document.getElementById("fila");

let arraynumeros = []
let arrayproblema = []


botonagregar.addEventListener("click", cargardatos)



function cargardatos() {


    if (numeropc.value === "" || problemapc.value === "") {

        alert("Por favor complete ambos campos")

        return;
    }
        
    let contadortabla = arraynumeros.length

    contadortabla++; 

    alert(contadortabla)
    

    const valorinput1 = numeropc.value
    const valorinput2 = problemapc.value

    arraynumeros.push(valorinput1)
    arrayproblema.push(valorinput2)


    let ultimoelementoarraynumero = arraynumeros[arraynumeros.length -1];
    let ultimoelementoarrayproblema = arrayproblema[arrayproblema.length-1]




    tablaProblemas.innerHTML += 
    (`<td>${arraynumeros.length}</td> <th id=(contadortabla.value)>${ultimoelementoarraynumero}</th> <th>${ultimoelementoarrayproblema}</th><th><input type="checkbox"></th>`)

    
}



    

    
