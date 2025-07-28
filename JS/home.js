let flags = []
let url = ["shopname.ae", "shopname.au", "shopname.ch", "shopname.com.dk", "shopname.com.fr", "shopname.ge", "shopname.co.uk", "shopname.it", "shopname.ru", "shopname.us"]
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
    let i = 0;
    const items = document.getElementById('grid5')
    for (const element of flags) {
        items.innerHTML = items.innerHTML + ` <div class="regions" data-flag="/Images/flags/${element}">
                            <img width="28" height="20" src="/Images/flags/${element}" alt="" />
                            <div class="name-url">
                                <p class="name">${element.replace('.png', '')}</p>
                                <p class ="url">${url[i]}</p>
                            </div>

                        </div>`
        i = i + 1

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
    }


}


let reco = []
let usd2 = [10.29, 10.29, 12.49, 33.99, 98.99, 9.99, 8.99, 10.29, 10.29, 80.95]
let desc = ["T-shirts with multiple colors for men","Leather Jacket", "Brown winter coat medium size", "Leather Wallet",
    "Jeans bag for travel for men",
    "Jeans shorts for men blue color",
    "Headset for gaming with mic",
    "Blue T-shirt",
    "Pots",
    "Kettle"]

async function getrecommended() {
    let electronics = await fetch("http://127.0.0.1:3000/Images/Recommended-Items/")
    let response = await electronics.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/Recommended-Items/`);
            let reco_items = parts[1].replaceAll('%20', ' ')
            reco.push(reco_items)
        }
    }
    let i = 0;
    const items = document.getElementById('grid3')
    for (const element of reco) {
        items.innerHTML = items.innerHTML + ` <div class="rec-items" data-products="/Images/Recommended-Items/${element}">
                    <img width="235" src="/Images/Recommended-Items/${element}" alt="">
                    <p class="usd2">$${usd2[i]}  </p>
                    <p class="quality">${desc[i]}</p>
                </div> `
                i=i+1;

    }


}


let extra = []
let name2 = ["Source from Industry Hubs", "Customize Your Products", "Fast, reliable shipping by ocean or air", "Product monitoring and inspection"]
async function getextra() {
    let electronics = await fetch("http://127.0.0.1:3000/Images/Extra-services/")
    let response = await electronics.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/Extra-services/`);
            let extra_services = parts[1].replaceAll('%20', ' ')


            extra.push(extra_services)
        }
    }
    console.log(extra)
    let i = 0;
    const items = document.getElementById('grid4')
    for (const element of extra) {
        items.innerHTML = items.innerHTML + ` <div class="extra-ser" data-products="/Images/Extra-services/${element}">
                    <div class="image-wrapper">
                        <img src="/Images/Extra-services/${element}" alt="">
                    </div> 
                    <div class="ellipse">
                        <img src="/Images/Random/Ellipse 12.png" alt="">
                    </div>
                    <img class="icon" src="/Images/Icon/${element}" alt="">

                    <p>${name2[i]}</p>
                </div>`
        i = i + 1
    }


}




function getanimations() {
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
    const learnbutton2 = document.querySelector(".l-but2");
    const learnbutton3 = document.querySelector(".l-but3");


    learnbutton.addEventListener("click", () => {

        learnbutton.style.transition = "transform 0.2s ease";
        learnbutton.style.transform = "scale(0.98)";

        setTimeout(() => {
            learnbutton.style.transform = "scale(1)";
        }, 150);
    });
    learnbutton2.addEventListener("click", () => {

        learnbutton2.style.transition = "transform 0.2s ease";
        learnbutton2.style.transform = "scale(0.98)";

        setTimeout(() => {
            learnbutton2.style.transform = "scale(1)";
        }, 150);
    });
    learnbutton3.addEventListener("click", () => {

        learnbutton3.style.transition = "transform 0.2s ease";
        learnbutton3.style.transform = "scale(0.98)";

        setTimeout(() => {
            learnbutton3.style.transform = "scale(1)";
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
    const inquiry = document.querySelector(".send");
    inquiry.addEventListener("click", () => {

        inquiry.style.transition = "transform 0.2s ease";
        inquiry.style.transform = "scale(0.98)";

        setTimeout(() => {
            inquiry.style.transform = "scale(1)";
        }, 150);
    });
}

getextra()
getrecommended()
getelectronics()
gethomeandoutddor()
getproducts()
getflags()
getanimations()

