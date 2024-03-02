import { minutes, seconds } from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function togglePlaying() {
  //se a classe 'running' estiver presente, isPlaying será definido como true; 
  state.isPlaying = document.documentElement.classList.toggle('running')
  timer.countdown()
  sounds.buttonPlay.play()
}


export function togglePause() {
  console.log('entrou')
  //se a classe 'running' estiver ausente, isPlaying será definido como false
  state.isPlaying = false
  document.documentElement.classList.remove('running')

}

export function stop() {
  state.isPlaying = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function plus() {
  state.minutes += 5;
  timer.updateDisplay(state.minutes, state.seconds);
  sounds.buttonPlay.play()
}

export function minus() {
  state.minutes -= 5;

  if (state.minutes <= 0) {
    state.minutes = 5
    alert("O tempo mínimo de 5 minutos")
  }

  timer.updateDisplay(state.minutes, state.seconds);
  sounds.buttonPlay.play()
}


// ação dos cards
export function cardTree(element) {

  element.classList.toggle('active-card');

  const isActive = element.classList.contains('active-card')

  if(isActive) {
    sounds.forest.play()
  } else {
    sounds.forest.pause()
  }

}

export function cardCloud(element) {
  element.classList.toggle('active-card');

  const isActive = element.classList.contains('active-card')

  if(isActive) {
    sounds.rain.play()
  } else {
    sounds.rain.pause()
  }

}

export function cardStore(element) {
  element.classList.toggle('active-card');

  const isActive = element.classList.contains('active-card')

  if(isActive) {
    sounds.coffee.play()
  } else {
    sounds.coffee.pause()
  }

}

export function cardCampfire(element) {
  element.classList.toggle('active-card');

  const isActive = element.classList.contains('active-card')

  if(isActive) {
    sounds.fireplace.play()
  } else {
    sounds.fireplace.pause()
  }

}