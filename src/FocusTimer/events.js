import * as elements from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
  elements.controls.addEventListener('click', function() {
    const action = event.target.dataset.action

    if (typeof actions[action] != "function") {
      return
    }

   actions[action]()
  })

  elements.sounds.addEventListener('click', function(e) {
    const action = event.target.dataset.action
    
    if (typeof actions[action] != "function") {
      return
    }

   actions[action](e.target)
  })
}