let celdas = document.querySelectorAll('.col-4')
let flag = true;
let arreglo = [null, null, null, null, null, null, null ,null, null];
let contador = 0;
let nuevaRonda = document.querySelector('.nuevaRonda')
let accion1 = document.querySelectorAll('.accion1')
let accion2 = document.querySelectorAll('.accion2')
let accion3 = document.querySelectorAll('.accion3')
let accion4= document.querySelectorAll('.accion4')
let accion5= document.querySelectorAll('.accion5')
let accion6= document.querySelectorAll('.accion6')
let accion7= document.querySelectorAll('.accion7')
let accion8= document.querySelectorAll('.accion8')
let pantalla1 = document.querySelector('.pantalla1')
let pantalla2 = document.querySelector('.pantalla2')
let contadorX = 0;
let contadorO = 0;
let nuevaPartida = document.querySelector('.nuevaPartida')

const validarGanador = () => {
    if((arreglo[0] != null && arreglo[1] != null) 
        && (arreglo[0] == arreglo[1]) 
        && (arreglo[1] == arreglo[2])){
        validarJugador()
        fila1()

        
    }
    else if ((arreglo[3] != null && arreglo[4] != null) 
        && (arreglo[3] == arreglo[4]) 
        && (arreglo[4] == arreglo[5])){
        validarJugador()
        fila2()

    }
    else if ((arreglo[6] != null && arreglo[7] != null) 
        && (arreglo[6] == arreglo[7]) 
        && (arreglo[7] == arreglo[8])){
        validarJugador()
        fila3()
    }
    
    else if ((arreglo[0] != null && arreglo[3] != null) 
        && (arreglo[0] == arreglo[3]) 
    && (arreglo[3] == arreglo[6])){
        validarJugador()
        columna1()
    }    
    else if ((arreglo[1] != null && arreglo[4] != null) 
        && (arreglo[1] == arreglo[4]) 
        && (arreglo[4] == arreglo[7])){
        validarJugador()
        columna2()
    }    
    else if ((arreglo[2] != null && arreglo[5] != null) 
        && (arreglo[2] == arreglo[5]) 
        && (arreglo[5] == arreglo[8])){
        validarJugador()
        columna3()
        

    }
    else if ((arreglo[6] != null && arreglo[4] != null) 
        && (arreglo[6] == arreglo[4]) 
        && (arreglo[4] == arreglo[2])){
        validarJugador()
        diagonal1()
        

    }
    else if ((arreglo[0] != null && arreglo[4] != null) 
        && (arreglo[0] == arreglo[4]) 
        && (arreglo[4] == arreglo[8])){
        validarJugador()
        diagonal2()
        

    }
    else{
        let filter = arreglo.filter((item) => item == null)
        if(filter.length == 0){
            alert('empate')
            
        }
        }
     
}

const fila1 = () => {
    accion1.forEach((fila1) => {
        fila1.classList.toggle('bg-danger')
        fila1.classList.toggle("text-decoration-line-through")
    })
}

const fila2 = () => {
    accion2.forEach((fila2) => {
        fila2.classList.toggle('bg-danger')
        fila2.classList.toggle("text-decoration-line-through")
    })
}

const fila3 = () => {
    accion3.forEach((fila3) => {
        fila3.classList.toggle('bg-danger')
        fila3.classList.toggle("text-decoration-line-through")
    })
}

const columna1 = () => {
    accion4.forEach((columna1) => {
        columna1.classList.toggle('bg-danger')
        columna1.classList.toggle("text-decoration-line-through")
    })
}

const columna2 = () => {
    accion5.forEach((columna2) => {
        columna2.classList.toggle('bg-danger')
        columna2.classList.toggle("text-decoration-line-through")
    })
}

const columna3 = () => {
    accion6.forEach((columna3) => {
        columna3.classList.toggle('bg-danger')
        columna3.classList.toggle("text-decoration-line-through")
    })
}

const diagonal1 = () => {
    accion7.forEach((diagonal1) => {
        diagonal1.classList.toggle('bg-danger')
        diagonal1.classList.toggle("text-decoration-line-through")
    })
}

const diagonal2 = () => {
    accion8.forEach((diagonal2) => {
        diagonal2.classList.toggle('bg-danger')
        diagonal2.classList.toggle("text-decoration-line-through")
    })
    
}

const bloquearCasilla = (coordenada) => {
    if(arreglo[coordenada] != null){
        return true
    }
        return false
}

const marcar = (celda) => {
    let isBlock = bloquearCasilla(celda.target.id) 
    if(isBlock){
        alert('Ya esta marcado')
    
    }else{
        if(flag){
            celda.target.innerText = 'X'
            arreglo[celda.target.id] = 'X'
            flag = !flag
        }else{
            celda.target.innerText = 'O'
            arreglo[celda.target.id] = 'O'
            flag = !flag
        }
        validarGanador()
        

    }
}

const validarJugador = () => {
    if(flag == false){
        alert('ganaste PRIMER jugador, continua asi, continua la ronda en el boton: nuevaRonda')
        contadorX = contadorX +1
        pantalla1.value = contadorX

        if(contadorX == 3){
            alert('ganaste la partida PRIMER jugador, inicia otra en el boton: nuevaPartida')
            
        }
    }else {
        alert('ganaste SEGUNDO jugador, continua asi, continua la ronda en el boton: nuevaRonda')
        contadorO = contadorO +1
        pantalla2.value = contadorO

        if(contadorO == 3){
            alert('ganaste la partida SEGUNDO jugador, inicia otra en el boton: nuevaPartida')
        }
    }
}

nuevaRonda.addEventListener('click', () => {
    celdas.forEach((celdas) => {
        celdas.innerText = ''
        arreglo = [null, null, null, null, null, null, null ,null, null];
        flag = true
        celdas.classList.remove('bg-danger')
        celdas.classList.remove("text-decoration-line-through")
    })
})

celdas.forEach((celda) => {
    nuevaPartida.addEventListener('click', () => {
    celda.innerText = ''
    arreglo = [null, null, null, null, null, null, null ,null, null];
    flag = true
    celda.classList.remove('bg-danger')
    celda.classList.remove("text-decoration-line-through")
    contadorX = 0 
    contadorO = 0
    pantalla1.value = ''
    pantalla2.value = ''
})
celda.addEventListener('click', marcar)
})