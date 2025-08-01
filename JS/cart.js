
function getanimations() {


    const shopnow = document.querySelector(".shopnow button");
    shopnow.addEventListener("click", () => {

        shopnow.style.transition = "transform 0.2s ease";
        shopnow.style.transform = "scale(0.98)";

        setTimeout(() => {
            shopnow.style.transform = "scale(1)";
        }, 150);
    });



}

getanimations()

