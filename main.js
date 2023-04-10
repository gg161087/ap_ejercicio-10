const app = document.getElementById('app');
const btnEjecutar = document.getElementById('btn-ejecutar');
const btnReset = document.getElementById('btn-reset');
const divEnunciado = document.getElementById('enunciado');

const vocales = ['a', 'e', 'i', 'o', 'u'];
const arrayUnoASeis = [1,2,3,4,5,6];
const arrayRandom = [15,3,24,8,16,6];
const arrayCuatro =  [ 1, -4, 12, 0, -3, 29, -150];
const arrayCinco =  ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
const arrayColores =  ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
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
const selectorConsigna = () => { 
    let value = document.getElementById('select-2').value;          
    switch (value) {
        case "a":
            eA();
            break;
        case "b":
            eB();
            break;
        case "c":
            eC();
            break;
        case "d":
            eD();
            break;
        case "e":
            eE();
            break;
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
        ${createButtonPrimary('Seleccionar','btn-2','selectorConsigna()')}
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
    app.innerHTML += `
        ${createParrafo('','p-3a')}
        ${createParrafo('','p-3b')}
    `
    const pA = document.getElementById('p-3a');
    const pB = document.getElementById('p-3b');

    pA.innerText = `Array: ${arrayRandom}`

    for (const iterator of arrayRandom) {
        resultado = iterator * iterator;
        arrayVacio.push(resultado)
    }
    pB.innerText = `Array al cuadrado: ${arrayVacio}`
}

const eCuatro = () => {
    app.innerHTML += `${createParrafo('','p-4a')}`
    const pA = document.getElementById('p-4a');
    resultado = 0;
    for (const iterator of arrayCuatro) {
        if (iterator > 0) {
            console.log(iterator);
            resultado += iterator;
        }
    }
    pA.innerText = `Suma de positivos: ${resultado}`
}

const eCinco = () => {
    app.innerHTML += `
        ${createParrafo('','p-5a')}
        ${createParrafo('','p-5b')}
        ${createParrafo('','p-5c')}
        ${createParrafo('','p-5d')}
        ${createParrafo('','p-5e')}
        ${createParrafo('','p-5f')}
        ${createParrafo('','p-5g')}
    `
    const pA = document.getElementById('p-5a');
    pA.innerText = `Nombre con al menos 6 letras: `
    const pB = document.getElementById('p-5b');
    pB.innerText = `Nombres con M: `
    const pC = document.getElementById('p-5c');
    const pD = document.getElementById('p-5d');
    const pF = document.getElementById('p-5f');
    const pG = document.getElementById('p-5g');
    
    const arrayD = []
    const arrayF = []
    for (const iterator of arrayCinco) {
        if (iterator.length >= 6) {                        
            pA.innerText += ` ${iterator},`
        }
        if (iterator[0] == 'M') {                
            pB.innerText += ` ${iterator},`
        }
        arrayD.push(iterator[0])
        arrayF.push(iterator.toUpperCase())
        if (iterator[0] == 'J') {
            pG.innerText = `Repuesta consigina G, SI, ${iterator[0]} comienza con 'J'`
        } else {
            pG.innerText = `Repuesta consigina G, NO, ninguno comienza con 'J'`
        }
    }
    let ordenar = arrayCinco.sort();
    pC.innerText = `Ordenar alfabéticamente: ${ordenar}`
    console.log(ordenar);

    pD.innerText = `Array de iniciales: ${arrayD}`
    pF.innerText = `Array en mayúsculas: ${arrayF}`

}

const eSies = () => {
    app.innerHTML += createParrafo(`Array colores: ${arrayColores}`,'p-6a')   
    resultado = prompt('ingrese un color: ');
    if (arrayColores.includes(resultado.toLocaleLowerCase())) {
        app.innerHTML += createParrafo(`El color ${resultado} SE encuentra en el array.`,'');         
    }else{
        app.innerHTML += createParrafo(`El color ${resultado} NO se encuentra en el array.`,'');
    }
}

const arraySoloPares = (array) => {
    for (const i of array) {
        if (i%2 == 0) {
            arrayVacio.push(i);
        }
    }
    return arrayVacio;
}

const eSiete = () => {
    app.innerHTML += createParrafo(`Array de solo números: ${arrayRandom}`, '');
    app.innerHTML += createParrafo(`Nuevo array de pares: ${arraySoloPares(arrayRandom)}`, '');
}

const arraySoloVocales = (array) => {
    for (const i of array) {
        for (const vocal of vocales) {            
            if (i[0].toLocaleLowerCase() == vocal) {                
                arrayVacio.push(i);
            }
        }
    }
    return arrayVacio;
}
const eOcho = () => {
    arrayCinco.push('Ernesto')
    app.innerHTML += createParrafo(`Array de solo palabras: ${arrayCinco}`, '');
    app.innerHTML += createParrafo(`Nuevo array que comienzan con una vocal: ${arraySoloVocales(arrayCinco)}`, '');    
}

const intercambiarElementos = (arreglo, indice1, indice2) => {  
    const temp = arreglo[indice1];

    arreglo[indice1] = arreglo[indice2];
  
    arreglo[indice2] = temp;
  
    return arreglo;
}

const eNueve = () => {
    app.innerHTML += createParrafo(`Array: ${arrayCinco}`, '');
    app.innerHTML += createParrafo(`Nuevo array cambando el indice 1 por el 3: ${intercambiarElementos(arrayCinco, 1, 3)}`, ''); 
}

const eDiez = () => {
    app.innerHTML += createParrafo(`Segundo parrafo (el primero es la consigna)`, 'p-10a');
    app.innerHTML += createParrafo(`Tercer parrafo`, 'p-10b');

    $(document).ready( () => {        
        $('p:first').click( () => {
            alert('Has hecho click en el primer párrafo!');
        });
    });   
}

const eOnce = () => {
    app.innerHTML += `
        <table>
            <tr>
                <td>Fila 1, Columna 1</td>
                <td>Fila 1, Columna 2</td>
            </tr>
        <tr>
            <td>Fila 2, Columna 1</td>
            <td>Fila 2, Columna 2</td>
        </tr>
        </table>
    `

    $(document).ready( () => {
        $('td').click(event => $(event.target).css({
            'background-color': 'darkslategray'
        }));       
    });
}

const eDoce = () => {
    app.innerHTML += `
        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
            <li>Elemento 4</li>
        </ul>
    `
    $(document).ready( () => {
        $('li').click(event => $(event.target).hide());
    });
}

const craeteTable2x3 = (id) => {
    return `<table id="${id}">
      <tr>
        <td class="td0">Fila 1, Columna 1</td>
        <td class="td0">Fila 1, Columna 2</td>
      </tr>
      <tr>
        <td class="td1">Fila 2, Columna 1</td>
        <td class="td1">Fila 2, Columna 2</td>
      </tr>
      <tr>
        <td class="td2">Fila 3, Columna 1</td>
        <td class="td2">Fila 3, Columna 2</td>
      </tr>
    </table>`
}

const eTrece = () => {
    app.innerHTML += `
        ${craeteTable2x3('tabla1')}
        <br>
        ${craeteTable2x3('tabla2')}
    `
    /* $(document).ready(() => {
        // Seleccionar las filas de la primera tabla y agregar un evento click
        $('tr').click(event => { 
            const indiceFila = $(event.currentTarget).index();
            console.log(indiceFila);        
            $(`#tabla1 .td${indiceFila}`).css('background-color', 'darkslategray');
        });
    }); */
    $(document).ready(() => {
        $('#tabla1 tr').click(event => {
            const indiceFila = $(event.currentTarget).index();
            console.log(indiceFila);
            $(`#tabla1 .td${indiceFila}`).css('background-color', 'darkslategray');
        })     
    });
}

const eCatorce = () => {
    app.innerHTML += `
        <h1>Noticias</h1>
        <div class="noticia">
            <h2>Título de la noticia 1</h2>
            <p>Descripción de la noticia 1.</p>
        </div>    
        <div class="noticia">
            <h2>Título de la noticia 2</h2>
            <p>Descripción de la noticia 2.</p>
        </div>    
        <div class="noticia">
            <h2>Título de la noticia 3</h2>
            <p>Descripción de la noticia 3.</p>
        </div>
        <br>
        ${createButtonSuccess('Aumentar Font', 'aumentar-font')}
        <br>
        <br>
        ${createButtonDanger('Disminuir Font', 'disminuir-font')}
        <br>
        <br>
        ${createButtonPrimary('Disminuir Font', 'disminuir-font')}
    `
}
const eQuince = () => {
    app.innerHTML += `
        <table id="tabla1">
            <tr>
                <td>Texto 1</td>
                <td>Texto 2</td>
                <td>Texto 3</td>
            </tr>
            <tr>
                <td>Texto 4</td>
                <td>Texto 5</td>
                <td>Texto 6</td>
            </tr>
            <tr>
                <td>Texto 7</td>
                <td>Texto 8</td>
                <td>Texto 9</td>
            </tr>
        </table>
        <table id="tabla2">
            <tr>
                <td>Texto A</td>
                <td>Texto B</td>
                <td>Texto C</td>
            </tr>
            <tr>
                <td>Texto D</td>
                <td>Texto E</td>
                <td>Texto F</td>
            </tr>
            <tr>
                <td>Texto G</td>
                <td>Texto H</td>
                <td>Texto I</td>
            </tr>
        </table>        
    `
    app.innerHTML += `${createButtonSuccess('Cambiar', 'btn-15')}`
    $(document).ready( () => {
        $("#btn-15").click( () => {
            $("#tabla1 td").text("-");
        });
    });
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

const selectorEjercicio = () => {
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