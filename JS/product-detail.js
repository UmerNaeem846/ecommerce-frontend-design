
function getanimations() {
 

    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", () => {

        searchButton.style.transition = "transform 0.2s ease";
        searchButton.style.transform = "scale(0.98)";

        setTimeout(() => {
            searchButton.style.transform = "scale(1)";
        }, 150);
    });
    const sellers = document.querySelector(".sellers");
    sellers.addEventListener("click", () => {

        sellers.style.transition = "transform 0.2s ease";
        sellers.style.transform = "scale(0.98)";

        setTimeout(() => {
            sellers.style.transform = "scale(1)";
        }, 150);
    });
    const send = document.querySelector(".send-inquiry");
    send.addEventListener("click", () => {

        send.style.transition = "transform 0.2s ease";
        send.style.transform = "scale(0.98)";

        setTimeout(() => {
            send.style.transform = "scale(1)";
        }, 150);
    });

    const shopnow = document.querySelector(".shopnow button");
    shopnow.addEventListener("click", () => {

        shopnow.style.transition = "transform 0.2s ease";
        shopnow.style.transform = "scale(0.98)";

        setTimeout(() => {
            shopnow.style.transform = "scale(1)";
        }, 150);
    });

    const heart = document.querySelector(".heart");
    const heartp = document.querySelector(".heart p");
    const heartImg = heart.querySelector("img");
    let liked = false;
    let width = false
    heart.addEventListener("click", () => {
        liked = !liked;
        width = !width;
        heartImg.src = liked ? "/Images/Icon/Heart-red.png" : "/Images/Icon/favorite_border.png";
        heartImg.width = width ? "30" : "24"
        heartp.innerHTML = liked ? "Saved" : "Save for Later"
        heart.style.paddingLeft = liked ? "80px" : "70px"
    });
    const tabs = document.querySelectorAll('.full-details ul li');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all content
            contents.forEach(c => c.classList.remove('active'));

            // Activate current tab
            tab.classList.add('active');
            // Show corresponding content
            const target = tab.dataset.target;
            document.querySelector(`.tab-content.${target}`).classList.add('active');
        });
    });



}


let flags = []
async function getflags() {
    let f = await fetch("http://127.0.0.1:3000/Images/flags/")
    let response = await f.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/flags/`);
            let flag = parts[1].replace('%20', ' ')
            flags.push(flag)
        }
    }
    const options = document.getElementById('dropdownOptions');
    for (const element of flags) {
        options.innerHTML = options.innerHTML + ` <div class="option" data-flag="/Images/flags/${element}">
                            <img src="/Images/flags/${element}" alt="" />
                        </div>`

    }

    const dropdown = document.querySelector('.custom-dropdown');
    const selected = document.getElementById('selectedOption');

    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        options.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        options.classList.remove('show');
    });

    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener("click", () => {
            const imgsrc = option.getAttribute('data-flag')
            selected.innerHTML = `<span>Ship to</span> <img src="${imgsrc}" alt="" /> <img src="/Images/control/Vector.png" alt="Arrow" class="arrow" />`
        }
        )

    }
    )
}

let mobile = []
async function getmobile() {
    let f = await fetch("http://127.0.0.1:3000/Images/Mobile/")
    let response = await f.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/Mobile/`);
            let cl = parts[1].replace('%20', ' ')
            mobile.push(cl)
        }
    }
    const boxes = document.querySelector('.boxes');
    for (const element of mobile) {
        boxes.innerHTML = boxes.innerHTML + `                    <div class="box1">
                        <img width="45" height="45" src="/Images/Mobile/${element}" alt="">
                    </div>`
    }
    selectmobile()
}
function selectmobile() {
    const box1 = document.querySelectorAll('.box1');
    box1.forEach(box => {
        box.addEventListener("click", () => {

            box1.forEach(b => b.style.border = "1px solid #DEE2E7");

            box.style.border = "1px solid #505050";
            const boximage = box.querySelector('img');
            const productboximg = document.querySelector('.productbox img');

            productboximg.style.transition = "all 0.3s ease";
            productboximg.style.opacity = "0";
            productboximg.style.transform = "scale(0.95)";

            setTimeout(() => {
                productboximg.src = boximage.src;
                productboximg.width = 345;
                productboximg.height = 345;

                productboximg.style.opacity = "1";
                productboximg.style.transform = "scale(1)";
            }, 150);
        }
        )

    })

}

let clothes = []
let nameclo = ["T-shirts with multiple colors for men", "Leather Jacket", "Brown winter coat medium size", "Jeans shorts for men blue color", "Blue T-shirt"]
async function getclothes() {
    let f = await fetch("http://127.0.0.1:3000/Images/Clothes/")
    let response = await f.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/Clothes/`);
            let cl = parts[1].replace('%20', ' ')
            clothes.push(cl)
        }
    }
    let i = 0;
    const shirtboxes = document.querySelector('.shirtboxes');
    for (const element of clothes) {
        shirtboxes.innerHTML = shirtboxes.innerHTML + `<div class="shirt">
                    <div class="imgofshirt">
                        <img width="70" height="70" src="/Images/Recommended-Items/${element}" alt="">
                    </div>
                    <div class="detailsofshirt">
                        <p>${nameclo[i]}</p>
                        <h6>$7.00 - $99.50</h6>
                    </div>`
        i = i + 1;
    }
}
let books = []
let namebook = ["UN Nuevo Mundo, Ahora", "Spirtual Experiences", "Prepared", "Memory", "The Arrivals", "Look to the Stars", "The Domestic Goddness"]
async function getbooks() {
    let f = await fetch("http://127.0.0.1:3000/Images/book/")
    let response = await f.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/book/`);
            let cl = parts[1].replace('%20', ' ')
            books.push(cl)
        }
    }
    let i = 0;
    const book = document.querySelector('.books');
    for (const element of books) {
        book.innerHTML = book.innerHTML + ` <div class="book">
                    <div class="imgofbook">
                        <img width="155" height="185" src="/Images/book/${element}" alt="">
                    </div>
                    <div class="detailsofbook">
                        <p>${namebook[i]}</p>
                        <h6>$7.00 - $99.50</h6>
                    </div>
                </div>`
        i = i + 1;
    }
}
getbooks()
getclothes()
getmobile()
getflags()
getanimations()

