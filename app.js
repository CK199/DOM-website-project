let highContrastMode = false


let submitForm = () => {
    document.getElementById('form').remove()
    document.getElementById('signupText').remove()
    document.getElementById('formCompleteText').innerHTML = 'You have successfully signed up to the newsletter.'
}

let removeWelcome = () => {
    document.getElementById('welcome').remove()
    document.getElementById('removeWelcome').remove()
}

let highContrast = () => {
    
    let navElements = document.getElementsByClassName('nav')
    let text = document.getElementsByClassName('text')

    if (highContrastMode === false) {
        
        for (let i=0;i<text.length;i++) {
            text[i].classList.add("white")
        }
        
        navbar.classList.remove("navBorderPurple")
        navbar.classList.add("navBorderWhite")
        
        for (let j=0;j<navElements.length;j++) {
            navElements[j].classList.remove('navDefaultColours')
            navElements[j].classList.add('navContrast')
        }
        
        document.body.style.backgroundColor = 'black'
        document.getElementById('highContrast').innerHTML = 'Disable high contrast mode'
        highContrastMode = true

    } else {
        
        for (let i=0;i<text.length;i++) {
            text[i].classList.remove("white")
        }
        
        navbar.classList.remove("navBorderWhite")
        navbar.classList.add("navBorderPurple")
        
        for (let j=0;j<navElements.length;j++) {
            navElements[j].classList.remove('navContrast')
            navElements[j].classList.add('navDefaultColours')
        }
        
        document.body.style.backgroundColor = 'deeppink'
        document.getElementById('highContrast').innerHTML = 'Enable high contrast mode'
        highContrastMode = false
    }
}