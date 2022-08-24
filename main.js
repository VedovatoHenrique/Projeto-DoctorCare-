const navigation = document.getElementById('navigation')

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section){
  const targetLine= scrollY + innerHeight / 2

  // Verificar se a seção passou da linha
  // Quais dados vou precisar?
  const sectionTop = section.offsetTop
  
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  console.log( 'O topo da seção chegou ou passou da linha? ',sectionTopReachOrPassedTargetLine)

  // Verificar se a base está abaixo da linha alvo.
  //Quais dados vou precisar?
  // a seção termina onde
  const sectionEndsAt = sectionTop + sectionHeight
  //o final da seção passou da lina alvo
  const sectionAndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?',!sectionAndPassedTargetLine)
  
  const sectionBoundaries =sectionTopReachOrPassedTargetLine && !sectionAndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document 
  .querySelector(`.menu a[href*=${sectionId}]`)

  //Inicio ele sempre sem o active se ele estiver nas condições ele é ativado.
  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }

}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000
}).reveal(
  `#home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`
)
