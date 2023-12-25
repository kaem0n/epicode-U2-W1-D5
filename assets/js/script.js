const navBar = document.getElementsByTagName('nav')[0]
const navBarButton = navBar.querySelector('button')
const main = document.getElementById('trending')

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

const svg = document.getElementById('mostro') // svg contenente le M
const cropSvg = function () {
    // modifico il terzo valore di viewBox per tagliare l'svg evitando di creare una barra di scorrimento orizzontale
    if (window.innerWidth <= 1024) {
        svg.setAttribute('viewBox', '0 0 100 462')
    }
}

cropSvg() // ATTENZIONE: riavviare la pagina dopo aver modificato la larghezza del viewport

// per Stefano: qualora ti fosse sfuggito (non credo ma per onestà te lo dico comunque), il codice che segue è successivo alla consegna, lo sto compilando solo per cosa mia perciò ignoralo ai fini della valutazione del compito.

const mContainer = document.getElementById('m-container') // trovo il contenitore di "M" tramite un ID assegnato sull'HTML
const mArray = mContainer.querySelectorAll('g') // array con tutti i tag "g" che contengono le M

setInterval(() => { // intervallo di 20ms che a occhio è quello che usa il sito originale
    // creo un indice random per ciclare le "M"
    const randomIndex = Math.floor(Math.random() * mArray.length)
    // verifico il loro valore di opacity e lo inverto
    if (mArray[randomIndex].getAttribute('opacity') === '1') {
        mArray[randomIndex].setAttribute('opacity', '0')
    } else if (mArray[randomIndex].getAttribute('opacity') === '0') {
        mArray[randomIndex].setAttribute('opacity', '1')
    }
}, 20);