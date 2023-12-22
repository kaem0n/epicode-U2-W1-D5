const navBar = document.getElementsByTagName('nav')[0]
const navBarButton = navBar.querySelector('button')
const main = document.getElementById('trending')
const body = document.getElementsByTagName('body')[0]

window.addEventListener('scroll', function() {
    let scroll = this.scrollY
    console.log(scroll)
    console.log(main.offsetTop)
    if (scroll >= main.offsetTop) {
        navBar.classList.remove('yellow')
        navBar.classList.add('white')
        navBarButton.classList.remove('black')
        navBarButton.classList.add('green')
    } else if (scroll < main.offsetTop) {
        navBar.classList.remove('white')
        navBar.classList.add('yellow')
        navBarButton.classList.remove('green')
        navBarButton.classList.add('black')
    }
})

const svg = document.getElementById('mostro')
const cropSvg = function () {
    if (window.innerWidth === 768) {
        svg.setAttribute('viewBox', '0 0 100 462')
    }
}

cropSvg() // ATTENZIONE: in fase di test riavviare la pagina dopo aver modificato la larghezza del viewport