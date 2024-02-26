//pegando o botão pelo id
const buttonToggle = document.getElementById('toggle-mode')


//adicionando o evento de click
buttonToggle.addEventListener('click', function() {
  document.documentElement.classList.toggle('dark')

})
