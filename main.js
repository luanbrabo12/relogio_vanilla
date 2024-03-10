const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(()=>{
  let data = new Date()

  horas.textContent = data.getHours()
  minutos.textContent = data.getMinutes()
  segundos.textContent = data.getSeconds()
}, 1000)