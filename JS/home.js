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
let pro = []
let disc = [40, 25, 15, 25, 25]
async function getproducts() {
    let p = await fetch("http://127.0.0.1:3000/Images/Products/")
    let response = await p.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/Products/`);
            let product = parts[1].replace('%20', ' ')
            pro.push(product)
        }
    }
    const items = document.getElementById('products')
    let i = 0;
    for (const element of pro) {
        items.innerHTML = items.innerHTML + ` <div class="products2" data-products="/Images/Products/${element}">
                    <img src="/Images/Products/${element}" alt="">
                    <p>${element.replace(".png", "")}</p>
                    <div class="discount">-${disc[i]}%</div>
                </div> `
        i = i + 1;
    }



}

let ho = []
let usd = [39, 10, 19, 100, 19, 19, 19, 19]
async function gethomeandoutddor() {
    let home_out = await fetch("http://127.0.0.1:3000/Images/interior/")
    let response = await home_out.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/interior/`);
            let home_outdoor = parts[1].replaceAll('%20', ' ')
            ho.push(home_outdoor)
        }
    }
    let i = 0;
    const items = document.getElementById('grid1')
    for (const element of ho) {
        items.innerHTML = items.innerHTML + ` <div class="acessories" data-products="/Images/interior/${element}">
                    <p>${element.replace(".png", "")}</p>
                    <p class="usd">From <br> USD ${usd[i]}  </p>
                    <img width="82" src="/Images/interior/${element}" alt="">

                </div> `
        i = i + 1;
    }


}

let comp = []
let usd1 = [89, 35, 10, 90, 340, 19, 240, 19]
async function getelectronics() {
    let electronics = await fetch("http://127.0.0.1:3000/Images/tech2/")
    let response = await electronics.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/tech2/`);
            let ele = parts[1].replaceAll('%20', ' ')
            comp.push(ele)
        }
    }
    let i = 0;
    const items = document.getElementById('grid2')
    for (const element of comp) {
        items.innerHTML = items.innerHTML + ` <div class="acessories1" data-products="/Images/tech2/${element}">
                    <p>${element.replace(".png", "")}</p>
                    <p class="usd1">From <br> USD ${usd1[i]}  </p>
                    <img src="/Images/tech2/${element}" alt="">

                </div> `
        i = i + 1;
        if (i == 3) {
            const items1 = document.getElementById('grid2')

        }
    }


}

getelectronics()
gethomeandoutddor()
getproducts()
getflags()

const liElements = document.querySelectorAll('.left ul li');

liElements.forEach(li => {
    li.addEventListener("click", () => {
        // Remove 'show1' class from all li elements
        liElements.forEach(el => el.classList.remove('show1'));

        // Add 'show1' class to the clicked li
        li.classList.add('show1');
    });

});

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {

    searchButton.style.transition = "transform 0.2s ease";
    searchButton.style.transform = "scale(0.98)";

    setTimeout(() => {
        searchButton.style.transform = "scale(1)";
    }, 150);
});
const layoutselector = document.querySelectorAll('.layout li');

layoutselector.forEach(e => {
    e.addEventListener("click", () => {

        layoutselector.forEach(el => el.classList.remove('show2'));

        e.classList.add("show2");

    });
})


const itemsselector = document.querySelectorAll('.items li');

itemsselector.forEach(e => {
    e.addEventListener("click", () => {

        itemsselector.forEach(el => el.classList.remove('show2'));

        e.classList.add("show2");

    });
})

const learnbutton = document.querySelector(".l-but");

learnbutton.addEventListener("click", () => {

    learnbutton.style.transition = "transform 0.2s ease";
    learnbutton.style.transform = "scale(0.98)";

    setTimeout(() => {
        learnbutton.style.transform = "scale(1)";
    }, 150);
});

const join = document.querySelector(".join");
join.addEventListener("click", () => {

    join.style.transition = "transform 0.2s ease";
    join.style.transform = "scale(0.98)";

    setTimeout(() => {
        join.style.transform = "scale(1)";
    }, 150);
});
const login = document.querySelector(".login");
login.addEventListener("click", () => {

    login.style.transition = "transform 0.2s ease";
    login.style.transform = "scale(0.98)";

    setTimeout(() => {
        login.style.transform = "scale(1)";
    }, 150);
});

const subscribe = document.querySelector(".subs");
subscribe.addEventListener("click", () => {

    subscribe.style.transition = "transform 0.2s ease";
    subscribe.style.transform = "scale(0.98)";

    setTimeout(() => {
        subscribe.style.transform = "scale(1)";
    }, 150);
});








