// بسم الله الرحمن الرحيم 


let div = document.querySelector(".JJ div")
let input =document.querySelector(".JJ input")
let counter = document.querySelector(".JJ .counter")
let progress = document.querySelector(".JJ .progress")


let maxLength = input.getAttribute("maxlength")
counter.innerHTML = maxLength


input.oninput = function() {
    // for counter
    counter.innerHTML = maxLength - this.value.length
    counter.innerHTML == 0 ? counter.classList.add("zero") : counter.classList.remove("zero") 

    // for progress
    progress.style.width = `${(this.value.length * 100) / maxLength}%`
}