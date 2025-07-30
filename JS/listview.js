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

let liofp = []
let title = ["Iphone 13 pro max, 256GB Storage 8GB Ram", "Huawei Pad pro , 512GB Storage 12GB Ram", "Xiaomi Note 13 Pro, 256GB Storage 16GB Ram", "Iphone 16 pro max, 256GB Storage 8GB Ram", "Iphone 13 pro max, 256GB Storage 8GB Ram", "Huawei Pad pro , 512GB Storage 12GB Ram"]
let price = ["499.00", "299.00", "199.00", "699.99", "499.00", "299.00"]
let orders = [72, 40, 32, 12, 72, 40]
let desc = ["The iPhone 13 Pro Max with 256GB of storage and 8GB of RAM features a Super Retina XDR display with ProMotion for a smooth and responsive feel, the powerful A15 Bionic chip, adurable design, and impressive battery life",
    "The Huawei MatePad Pro with 512GB storage and 12GB RAM is a high-end tablet known for its powerful performance and vibrant display.",
    "The Xiaomi Redmi Note 13 Pro, with 256GB storage and 16GB RAM, is a mid-range smartphone featuring a 200MP main camera with OIS, a 120Hz AMOLED display, and 67W fast charging.",
    "The iPhone 16 Pro Max with 256GB storage and 8GB RAM features a 6.9-inch Super Retina XDR display, the powerful Apple A18 Pro chip, and a pro camera system with a 48MP main lens, 48MP ultrawide, and a 12MP telephoto lens with 5x optical zoom.",
    "The iPhone 13 Pro Max with 256GB of storage and 8GB of RAM features a Super Retina XDR display with ProMotion for a smooth and responsive feel, the powerful A15 Bionic chip, adurable design, and impressive battery life",
    "The Huawei MatePad Pro with 512GB storage and 12GB RAM is a high-end tablet known for its powerful performance and vibrant display."]



// Render function
function renderProducts() {
    const listofproducts = document.querySelector(".listofproducts");
    listofproducts.innerHTML = "";
    let isList = listofproducts.classList.contains("list-mode");
    let i = 0
    for (const element of liofp) {
        if (isList) {
            listofproducts.innerHTML += `
            <div class="product1">
                <div class="productimg">
                    <img width="210" height="210" src="/Images/MobilePhones/${element}" alt="">
                </div>
                <div class="description">
                    <p>${title[i]}</p>
                    <h2>$${price[i]}</h2>
                    <div class="ratting-order">
                        <img height="15" width="80" src="/Images/Misc/rating-1.png" alt="">
                        <ul class="order">
                            <li class="o">${orders[i]} orders</li>
                            <li class="shi">Free Shipping</li>
                        </ul>
                    </div>
                    <h5>${desc[i]}</h5>
                    <h6>View Details</h6>
                </div>
                <div class="heart">
                    <img src="/Images/Icon/favorite_border.png" alt="">
                </div>
            </div>`;
            i = i + 1;
        } else {
            listofproducts.innerHTML += `
            <div class="product1">
                <div class="productimg">
                    <img width="250" height="250" src="/Images/MobilePhones/${element}" alt="">
                </div>
                <div class="description">
                    <div class="heart">
                        <img src="/Images/Icon/favorite_border.png" alt="">
                    </div>
                    <div class="price">
                        <h2>$${price[i]}</h2>
                        <h3>$1200.99</h3>
                    </div>
                    <div class="ratting-order">
                        <img height="15" width="80" src="/Images/Misc/rating-1.png" alt="">
                        <ul class="order">
                            <li class="o">${orders[i]} orders</li>
                            <li class="shi">Free Shipping</li>
                        </ul>
                    </div>
                    <h5>${title[i]}</h5>
                    <h6>View Details</h6>
                </div>
            </div>`;
            i = i + 1;

        }
    }
    attachHeartListeners();

}
function attachHeartListeners() {
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach(heart => {
        const heartImg = heart.querySelector("img");
        let liked = false;
        let width=false

        heart.addEventListener("click", () => {
            liked = !liked;
            width=!width;
            heartImg.src = liked ? "/Images/Icon/Heart-red.png" : "/Images/Icon/favorite_border.png";
            heartImg.width=width ?"30" :"24"
        });
    });
}
// Fetch images and call render
async function getlistofproducts() {
    try {
        const res = await fetch("http://127.0.0.1:3000/Images/MobilePhones/");
        const text = await res.text();
        const div = document.createElement("div");
        div.innerHTML = text;

        const as = div.getElementsByTagName("a");
        for (let i = 0; i < as.length; i++) {
            const href = as[i].href;
            if (href.endsWith(".png")) {
                let parts = href.split(`/MobilePhones/`);
                let p = parts[1].replace(/%20/g, ' ');
                liofp.push(p);
            }
        }

        renderProducts();
        attachHeartListeners();
        // initial render after loading images
    } catch (err) {
        console.error("Error fetching images:", err);
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

    const subscribe = document.querySelector(".subs");
    subscribe.addEventListener("click", () => {

        subscribe.style.transition = "transform 0.2s ease";
        subscribe.style.transform = "scale(0.98)";

        setTimeout(() => {
            subscribe.style.transform = "scale(1)";
        }, 150);
    });
}

function getranges() {
    const rangeMin = document.getElementById("rangeMin");
    const rangeMax = document.getElementById("rangeMax");
    const minInput = document.getElementById("minInput");
    const maxInput = document.getElementById("maxInput");

    // --- Currency parse function (no formatting needed) ---
    function parseCurrency(value) {
        return parseInt(value) || 0;
    }

    // --- Update input fields from sliders only ---
    function updateInputsFromSliders() {
        minInput.value = rangeMin.value;
        maxInput.value = rangeMax.value;
    }

    // --- Update sliders from inputs ---
    function updateSlidersFromInputs() {
        const minVal = parseCurrency(minInput.value);
        const maxVal = parseCurrency(maxInput.value);

        if (minVal <= maxVal) {
            rangeMin.value = minVal;
            rangeMax.value = maxVal;
            updateRanges(); // Update gradient only
        }
    }

    // --- Update slider gradient backgrounds only ---
    function updateRanges() {
        const minVal = parseInt(rangeMin.value);
        const maxVal = parseInt(rangeMax.value);

        const percentMin = (minVal / 999999) * 100;
        const percentMax = (maxVal / 999999) * 100;

        const gradient = `linear-gradient(to right, 
        #AFD0FF 0%, 
        #AFD0FF ${percentMin}%, 
        #0D6EFD ${percentMin}%, 
        #0D6EFD ${percentMax}%, 
        #d3d3d3 ${percentMax}%)`;

        rangeMin.style.background = gradient;
        rangeMax.style.background = gradient;
    }

    // --- Slider input events ---
    rangeMin.addEventListener("input", () => {
        if (parseInt(rangeMin.value) > parseInt(rangeMax.value)) {
            rangeMin.value = rangeMax.value;
        }
        updateInputsFromSliders();
        updateRanges();
    });

    rangeMax.addEventListener("input", () => {
        if (parseInt(rangeMax.value) < parseInt(rangeMin.value)) {
            rangeMax.value = rangeMin.value;
        }
        updateInputsFromSliders();
        updateRanges();
    });

    // --- Input field events ---
    minInput.addEventListener("change", updateSlidersFromInputs);
    maxInput.addEventListener("change", updateSlidersFromInputs);

    // --- Initial sync ---
    updateInputsFromSliders();
    updateRanges();
}

function displayside() {
    const ele = document.querySelector(".ele");
    const arrow = document.querySelector(".container1 .heading-img img");

    arrow.addEventListener("click", () => {
        const isHidden = window.getComputedStyle(ele).display === "none";

        if (isHidden) {
            ele.style.display = "block";
            arrow.style.transform = "rotate(360deg)";
        } else {
            ele.style.display = "none";
            arrow.style.transform = "rotate(180deg)";
        }
    });

    const checkbox_radio = document.querySelector(".container2 .checkbox-radio");
    const arrow1 = document.querySelector(".container2 .heading-img img");

    arrow1.addEventListener("click", () => {
        const isHidden = window.getComputedStyle(checkbox_radio).display === "none";

        if (isHidden) {
            checkbox_radio.style.display = "flex";
            arrow1.style.transform = "rotate(360deg)";
        } else {
            checkbox_radio.style.display = "none";
            arrow1.style.transform = "rotate(180deg)";
        }
    });

    const checkbox_radio1 = document.querySelector(".container3 .checkbox-radio");
    const arrow2 = document.querySelector(".container3 .heading-img img");

    arrow2.addEventListener("click", () => {
        const isHidden = window.getComputedStyle(checkbox_radio1).display === "none";

        if (isHidden) {
            checkbox_radio1.style.display = "flex";
            arrow2.style.transform = "rotate(360deg)";
        } else {
            checkbox_radio1.style.display = "none";
            arrow2.style.transform = "rotate(180deg)";
        }
    });
    const range_container = document.querySelector(".container4 .range-container");
    const arrow3 = document.querySelector(".container4 .heading-img img");

    arrow3.addEventListener("click", () => {
        const isHidden = window.getComputedStyle(range_container).display === "none";

        if (isHidden) {
            range_container.style.display = "block";
            arrow3.style.transform = "rotate(360deg)";
        } else {
            range_container.style.display = "none";
            arrow3.style.transform = "rotate(180deg)";
        }
    });

    const checkbox_radio2 = document.querySelector(".container5 .checkbox-radio");
    const arrow4 = document.querySelector(".container5 .heading-img img");

    arrow4.addEventListener("click", () => {
        const isHidden = window.getComputedStyle(checkbox_radio2).display === "none";

        if (isHidden) {
            checkbox_radio2.style.display = "flex";
            arrow4.style.transform = "rotate(360deg)";
        } else {
            checkbox_radio2.style.display = "none";
            arrow4.style.transform = "rotate(180deg)";
        }
    });

    const checkbox_radio3 = document.querySelector(".container6 .checkbox-radio");
    const arrow5 = document.querySelector(".container6 .heading-img img");

    arrow5.addEventListener("click", () => {
        const isHidden = window.getComputedStyle(checkbox_radio3).display === "none";

        if (isHidden) {
            checkbox_radio3.style.display = "flex";
            arrow5.style.transform = "rotate(360deg)";
        } else {
            checkbox_radio3.style.display = "none";
            arrow5.style.transform = "rotate(180deg)";
        }
    });
}
function displaylist_grid() {
    const gridview = document.querySelector(".gridview");
    const listview = document.querySelector(".listview");
    const listofproducts = document.querySelector(".listofproducts");

    function switchView(toMode) {
        listofproducts.classList.add('fade-out');

        setTimeout(() => {
            listofproducts.classList.remove("list-mode", "grid-mode");
            listofproducts.classList.add(toMode);

            renderProducts(); // Render new layout
            listofproducts.classList.remove('fade-out');
        }, 400); // Match CSS transition time
    }

    gridview.addEventListener("click", () => {
        switchView("grid-mode");
        gridview.style.backgroundColor = "#EFF2F4";
        listview.style.backgroundColor = "#FFFFFF";
    });

    listview.addEventListener("click", () => {
        switchView("list-mode");
        listview.style.backgroundColor = "#EFF2F4";
        gridview.style.backgroundColor = "#FFFFFF";
    });
}

function movepagenumbers() {
    const pages = document.querySelectorAll(".page-numbers > div.pg-1, .pg-2, .pg-3, .pg-4");
    const backBtn = document.querySelector(".back");
    const forwardBtn = document.querySelector(".forward");

    let currentPage = 0; // 0-based index for pg-1 to pg-4

    function updateActivePage() {
        pages.forEach((page, index) => {
            if (index === currentPage) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });

        // Disable back button if at first page
        backBtn.style.opacity = currentPage === 0 ? "0.4" : "1";
        backBtn.style.pointerEvents = currentPage === 0 ? "none" : "auto";

        // Disable forward button if at last page
        forwardBtn.style.opacity = currentPage === pages.length - 1 ? "0.4" : "1";
        forwardBtn.style.pointerEvents = currentPage === pages.length - 1 ? "none" : "auto";
    }

    backBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            updateActivePage();
        }
    });

    forwardBtn.addEventListener("click", () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updateActivePage();
        }
    });

    // Allow clicking on page numbers
    pages.forEach((page, index) => {
        page.addEventListener("click", () => {
            currentPage = index;
            updateActivePage();
        });
    });

    updateActivePage();
}




displaylist_grid()
movepagenumbers()
getlistofproducts()
displayside()
getranges()
getflags()
getanimations()

