
async function getAdvice(url) {
    const res = await fetch(url)
    let obj = await res.json()
    return obj;
};

function updateCounter() {
    counter += 1;
    let counterElement = document.querySelector(".number")
    counterElement.innerHTML = counter

}

function triggerGetAdvice() {
    getAdvice("https://api.adviceslip.com/advice").then(obj => {

        // generate advice
        let adviceField = document.querySelector(".advice") 
        let advice = obj['slip']['advice']

        adviceField.innerHTML = advice;
        setTimeout(updateCounter(), 2000);
        
    });
}

let counter = 1;

let advicebtn = document.querySelector("button");
advicebtn.addEventListener("click", triggerGetAdvice);

