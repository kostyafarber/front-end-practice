function showThankYou() {
    const main = document.querySelector("main");
    const thankYou = document.querySelector(".thank__you");
    const selection = document.querySelector(".option")

    main.style.display = 'none';
    thankYou.style.display = 'flex';
    selection.innerHTML = clicked_option;

}

const buttons = document.querySelectorAll(".ratings button");

const submit = document.querySelector(".submit__page");

var clicked_option;

buttons.forEach(btn => {
    btn.addEventListener("click", event => {
        var option = event.target.innerHTML;
        clicked_option = option;

        submit.addEventListener("click", showThankYou);
        
    });
});



