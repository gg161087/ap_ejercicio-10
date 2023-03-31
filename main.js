const app = document.getElementById('app');
const btnEjecutar = document.getElementById('btn-ejecutar');
const btnReset = document.getElementById('btn-reset');
const divEnunciado = document.getElementById('enunciado');

const vocales = ['a', 'e', 'i', 'o', 'u'];
const arrayUnoASeis = [1,2,3,4,5,6];
const arrayVacio = [];
let promedios = {}
let num;
let num1;
let num2;
let num3;
let num4;
let resultado;
let i = 0;
let booleano = true;

const createDiv = (id) => `<div id="${id}"></div>`;
const createParrafo = (text, id) => `<p id="${id}">${text}</p>`;
const createHdos = (text) => `<h2>${text}</h2>`;
const createUL = (id) => `<ul id="${id}"></ul>`
const createLabel = (text, para, id) => `<label for="${para}" id="${id}">${text}</label>`;
const createButtonPrimary = (text, id, funcion) => `<button class="btn btn-primary" id="${id}" onclick="${funcion}">${text}</button>`;
const createButtonDanger = (text, id) => `<button class="btn btn-danger" id="${id}">${text}</button>`;
const createButtonSuccess = (text, id) => `<button class="btn btn-success"id="${id}">${text}</button>`;
const createInput = (tipo, id) => `<input type="${tipo}" id="${id}">`;
const createSelect = (nombre, id) => `<select class="form-select-sm" name="${nombre}" id="${id}"></select>`
const createOption = (valor, text) => `<option value=${valor}>${text}</option>`;

const getRandomInt= (max) => {
    return Math.floor(Math.random() * max);
}

const eUno = () => {
    app.innerHTML += `
        ${createDiv('div-1a')}
        ${createDiv('div-1b')}
        ${createDiv('div-1c')}        
    `;
    let div1a = document.getElementById('div-1a');
    div1a.innerHTML += `
        ${createParrafo('Generador de números random')}
        ${createLabel('Número generado: ', 'input-1', 'label-1')}
        ${createInput('text', 'input-1')}
        ${createButtonPrimary('Generar número', 'btn-1a')}
        
    `;      
    let buttonA = document.getElementById('btn-1a');
    let input = document.getElementById('input-1');
    buttonA.addEventListener('click', () => {                
        input.value = getRandomInt(100);          
    });

    let div1b = document.getElementById('div-1b');
    div1b.innerHTML += `
        ${createParrafo('Insertar número al array')}
        ${createButtonSuccess('Agregar número al array', 'btn-1b')}
        ${createParrafo('','p-1b')}        
    `;
    let p1B = document.getElementById('p-1b');
    let buttonB = document.getElementById('btn-1b');

    buttonB.addEventListener('click', () => {
        if (isNaN(input.value) || input.value == '') {
            alert('solo números');
            input.value = '';           
        } else {
            num = input.value;
            arrayVacio.push(num); 
            input.value = '';              
            p1B.innerText = arrayVacio;
        }                
    });

    let div1c = document.getElementById('div-1c');
    div1c.innerHTML += `        
        ${createButtonDanger('Crear Lista', 'btn-1c')}
        ${createParrafo('','p-1c')}        
    `;
    let buttonC = document.getElementById('btn-1c');
                   
    buttonC.addEventListener('click', () => {
        buttonC.disabled = true;
        div1c.innerHTML += createUL('ul-1');
        let ul = document.getElementById('ul-1');
        ul.style.textAlign = 'left';
        for (const iterator of arrayVacio) {            
            ul.innerHTML += `<li>${iterator}</li>`
        }
        input.disabled = true;        
        buttonA.disabled = true;
        buttonB.disabled = true;
        
    }); 
}
//eDos
const eA = () => {
    app.innerHTML += `<p>Resultado consigna A:</p>`        
    while (arrayUnoASeis.length > i) {
        app.innerHTML += `<p>${arrayUnoASeis[i]}</p>`
        i++;
    }        
}
const eB = () => {
    app.innerHTML += `<p>Resultado consigna B:</p>`
    for (i = 0; i < arrayUnoASeis.length; i++) {
        app.innerHTML += `<p>${arrayUnoASeis[i]}</p>`            
    }
}
const eC = () => {
    app.innerHTML += `<p>Resultado consigna C:</p>`
    arrayUnoASeis.forEach( (element) =>{
        app.innerHTML += `<p>${element}</p>`
    })
}
const eD = () => {
    app.innerHTML += `<p>Resultado consigna D:</p>`        
    for (const iterator of arrayUnoASeis) {
        app.innerHTML += `<p>${iterator + 1}</p>`
    } 
}
const eE = () => {
    let copiaArrayMasUno = [];
    app.innerHTML += `<p>Resultado consigna E:</p>`        
    for (const iterator of arrayUnoASeis) {
        copiaArrayMasUno.push(iterator + 1);
    }
    for (const iterator of copiaArrayMasUno) {
        app.innerHTML += `<p>${iterator}</p>`    
    } 
}
const eF = () => {
    resultado = 0;
    app.innerHTML += `<p>Resultado consigna F:</p>`        
    for (const iterator of arrayUnoASeis) {        
        resultado += iterator;
    } 
    app.innerHTML += `
        <p>Suma total de los elementos: ${resultado} del array ${arrayUnoASeis}</p>
        <p>Promedio: ${resultado/arrayUnoASeis.length}</p>
    `
}
const selector2 = () => { 
    let value = document.getElementById('select-2').value;          
    switch (value) {
        case "a":
            eA();
            break;
        case "b":
            eB();
        case "c":
            eC();
        case "d":
            eD();
        case "e":
            eE();
        case "f":
            eF();    
            break;
        default:
            break;
    }
} 

const eDos = () => {  
    app.innerHTML += `
        ${createLabel('Seleccione letra de ejercicio:', 'eDos', 'label-2')}
        ${createSelect('eDos', 'select-2')}
        ${createButtonPrimary('Seleccionar','btn-2','selector2()')}
    `
    let selectEDos = document.getElementById('select-2');    
    selectEDos.innerHTML += `
        ${createOption('a','A')}
        ${createOption('b','B')}
        ${createOption('c','C')}
        ${createOption('d','D')}
        ${createOption('e','E')}
        ${createOption('f','F')}
    ` 
}

const eTres = () => {
    
}

const eCuatro = () => {
    
}

const eCinco = () => {
    
}

const eSies = () => {
    
}

const eSiete = () => {
    
}

const eOcho = () => {
    
}

const eNueve = () => {
    
}

const eDiez = () => {
    app.innerHTML += createLabel('Ingrese un número: ', 'input-9', 'label-10');
    app.innerHTML += createInput('text', 'input-10');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-10'); 
    
    let button = document.getElementById('btn-10');
    let input = document.getElementById('input-10');
    let label = document.getElementById('label-10');    
    
    button.addEventListener('click', () => {                
        if (isNaN(input.value) || input.value == '') {
            alert('debes ingresar solo números');
            input.value = '';
        } else {
            if (!booleano){
                let num2 = Number(input.value);                
                let resultado = restar(num1, num2);
                input.style.display = 'none';
                button.style.display = 'none';
                label.style.display = 'none';            
                app.innerHTML += createParrafo(`Resultado de ${num1} + ${num2} = ${resultado}`);
                button.disabled = true;
            }
            num1 = Number(input.value);
            booleano = false;            
            input.value = '';
            label.innerText = 'Ingrese otro número: ';
            button.innerText = 'Restar';                   
        }      
    });    
}

const eOnce = () => {
    
}

const eDoce = () => {

}

const eTrece = () => {

}

const eCatorce = () => {

}

const eQuince = () => {

}

const eDieciseis = () => {

}

const eDiecisiete = () => {

}

const eDieciocho = () => {

}

const eDiecinueve = () => {

}

const eVeinte = () => {

}

const eVeintiuno = () => {

}

const eVeintidos = () => {

}

const eVeintitres = () => {

}

const eVeinticuatro = () => {

}

const selector = () => {
    const value = parseInt(document.getElementById('selector').value);    
    let enunciado = '';        
    switch (value) {
        case 1:
            enunciado = 'Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada. Tiene que crear la lista uno mismo.';            
            eUno();
            break;
        case 2:
            eDos();
            enunciado = `Dado el array = [1,2,3,4,5,6]<br> a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.<br> b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.<br> c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.<br> d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.<br> e. Generar una copia de un array pero con todos los elementos incrementados en 1.<br> f. Calcular el promedio`;
            break;
        case 3:
            eTres();
            enunciado = 'Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al cuadrado.'; 
            break;
        case 4:
            eCuatro();
            enunciado = 'Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.'; 
            break;
        case 5:
            eCinco();
            enunciado = `Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].<br> a. Obtener aquellos nombres con al menos 6 letras.<br> b. Obtener los nombres que comienzan con "M".<br> c. Ordenar alfabéticamente y mostrar por consola.<br> d. Generar un array que contenga solo las iniciales <br> e. Ejemplo: ["F", "L", "E", "M",... ].<br> f. Generar un array que contenga todos los nombres en mayúscula.<br> g. Queremos saber si alguno de estos nombres comienza con "J”`; 
            break;
        case 6:
            eSies();
            enunciado = 'Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.'; 
            break;
        case 7:
            eSiete();
            enunciado = 'Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares'; 
            break;
        case 8:
            eOcho();
            enunciado = 'Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.'; 
            break;
        case 9:
            eNueve();
            enunciado = 'Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices'; 
            break;
        case 10:
            eDiez();
            enunciado = 'Crear dos párrafos en el body de una página. Capturar el evento click solo del primero utilizando la librería jQuery.'; 
            break;
        case 11:
            eOnce();
            enunciado = 'Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo cuando sea presionada con el mouse.'; 
            break;
        case 12:
            eDoce();
            enunciado = `Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para ocultar un elemento jQuery tiene un método llamado hide( ).`; 
            break;
        case 13:
            eTrece();
            enunciado = 'Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color de fondo de cada fila de la primera tabla cuando sea presionada con el mouse.'; 
            break;
        case 14:
            eCatorce();
            enunciado = 'Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en un div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de fuente.'; 
            break;
        case 15:
            eQuince();
            enunciado = 'Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el contenido de la primera tabla, dejando intacto el de la segunda.'; 
            break;
        case 16:
            eDieciseis();
            enunciado = 'Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres botones que permitan fijar distintos hipervínculos para la propiedad href. Además actualizar el texto del hipervínculo.'; 
            break;
        case 17:
            eDiecisiete();
            enunciado = `Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego cuando sean presionadas ocultarlas.`; 
            break;
        case 18:
            eDieciocho();
            enunciado = 'Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha.'; 
            break;
        case 19:
            eDiecinueve();
            enunciado = 'Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla cuando ingresamos con el mouse y regresar al original cuando salimos.'; 
            break;
        case 20:
            eVeinte();
            enunciado = 'Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250 píxeles y si se hace doble clic nuevamente retornar al tamaño 800 x 70.'; 
            break;
        case 21:
            eVeintiuno();
            enunciado = 'Confeccionar una página que contenga un div con un conjunto de párrafos. Cuando se presione con el mouse dentro del div ocultarlo lentamente y cuando esté completamente oculto hacer que aparezca lentamente otro bloque de texto.'; 
            break;
        case 22:
            eVeintidos();
            enunciado = 'Mostrar con console.log el valor de un option cada vez que un usuario seleccione un option nuevo de un elemento select.'; 
            break;
        case 23:
            eVeintitres();
            enunciado = 'Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página referida con console.log'; 
            break;
        case 24:
            eVeinticuatro();
            enunciado = 'Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar un texto en la página que el formulario fue enviado.'; 
            break;                                                                              
        default:
            enunciado = 'No existe el ejercicio con ese número:';
            break;
    }
    btnEjecutar.disabled = true;
    divEnunciado.innerHTML += '<h4>Consigna: </h4>';
    divEnunciado.innerHTML += createParrafo(enunciado);    
    btnReset.disabled = false;       
}
const reset = () => {
    btnReset.disabled = true;
    location.reload();
}