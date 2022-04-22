window.onload = () => {

    const progress = 10
    const progressTimerState = 20
    const circle = document.querySelector(".circle")

    let currentState = 0

    const loaderTimer = setInterval(() => {
        circle.style.background = `conic-gradient(rgb(224, 70, 109) ${currentState}%, rgb(240, 197, 208) 0%)`
        circle.children[0].textContent = `${currentState}%`
        if(currentState >= progress)
            clearInterval(loaderTimer)
        currentState++
    }, progressTimerState)
}