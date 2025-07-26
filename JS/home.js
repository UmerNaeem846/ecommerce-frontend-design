let flags = []
async function getflags() {
    let f = await fetch("http://192.168.100.80:3000/Images/flags/")
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








