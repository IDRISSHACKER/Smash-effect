window.onload = () => {

    let circle = document.querySelector(".load")
    let file = document.querySelector(".file")

    const loading = ()=>{
        let progress = 100
        let progressTimerState = 20
        let currentState = 0
        const loaderTimer = setInterval(() => {
            circle.style.background = `conic-gradient(#e85059 ${currentState}%, rgb(240, 197, 208, .5) 0%)`
            if (currentState >= progress)
                clearInterval(loaderTimer)
            currentState++
        }, progressTimerState)
    }

    circle.addEventListener("click", (e)=>{
        loading()
        e.preventDefault()
        let outed = setTimeout(()=>{
            clearTimeout(outed)
            file.click()
            return true
        },1200)
    })
}