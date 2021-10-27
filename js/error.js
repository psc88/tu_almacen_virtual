// diseño del juego ahorcado

//funcion para remplazar una letra por el guion
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}


let palabras = ['casa', 'perro', 'gato', 'elefante']
let contadorFallados = 0;
let palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g,"_ ")

document.querySelector ('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcular').addEventListener('click', () =>{
    let letraUnica = document.querySelector('#letra').value
    let haFallado = true;
    for(const i in palabra){
        if(letraUnica == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letraUnica);
            haFallado = false;
        } 
    }

    if(haFallado){
        contadorFallados++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(205*contadorFallados) + 'px 0';
        if(contadorFallados == 4){
            alert("Perdiste el Juego")
            let botonContinuar = document.querySelector('#continuar')
            botonContinuar.innerHTML += `<button id="continuar" class="juego" onclick="continuarJuego()">Continuar</button>`
        }
    }else {
        if(palabraConGuiones.indexOf('_') <0){
            alert('Victoria')
            let botonContinuar = document.querySelector('#continuar')
            botonContinuar.innerHTML += `<button id="continuar" class="juego" onclick="continuarJuego()">Continuar</button>`
        }
    }

    window.continuarJuego = () => {
        location.reload();
    }

    document.querySelector('#output').innerHTML = palabraConGuiones;

    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
});