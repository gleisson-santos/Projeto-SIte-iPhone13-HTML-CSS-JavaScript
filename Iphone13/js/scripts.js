
//Selecionar os elementos a serem trabalhados

const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

//Coloar um evento para cada um dos botoes com o for
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      
        console.log(e);

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target;
        const id = button.getAttribute("id")

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);
        setTimeout (() => {
            image.classList.toggle("changing");
        }, 200);

    });
});