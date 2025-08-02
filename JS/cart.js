
function getanimations() {


    const shopnow = document.querySelector(".shopnow button");
    shopnow.addEventListener("click", () => {

        shopnow.style.transition = "transform 0.2s ease";
        shopnow.style.transform = "scale(0.98)";

        setTimeout(() => {
            shopnow.style.transform = "scale(1)";
        }, 150);
    });

    const checkout = document.querySelector(".checkout button");
    checkout.addEventListener("click", () => {

        checkout.style.transition = "transform 0.2s ease";
        checkout.style.transform = "scale(0.98)";

        setTimeout(() => {
            checkout.style.transform = "scale(1)";
        }, 150);
    });
    const apply = document.querySelector(".text-button button");
    apply.addEventListener("click", () => {

        apply.style.transition = "transform 0.2s ease";
        apply.style.transform = "scale(0.95)";

        setTimeout(() => {
            apply.style.transform = "scale(1)";
        }, 150);
    });





}
let payment = []
async function getpaymentmethod() {
    let home_out = await fetch("http://127.0.0.1:3000/Images/Payment/")
    let response = await home_out.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/Payment/`);
            let home_outdoor = parts[1].replaceAll('%20', ' ')
            payment.push(home_outdoor)
        }
    }
    const paymentmethod = document.querySelector('.paymentmethod')
    for (const element of payment) {
        paymentmethod.innerHTML = paymentmethod.innerHTML + ` <div class="card">
                            <img width="25" height="14" src="/Images/Payment/${element}" alt="">
                        </div> `
    }

}
let cart = []
let cartdetails = ["T-shirts with multiple colors for men", "Leather Jacket", "Brown winter coat medium size"]
async function getcartitems() {
    let home_out = await fetch("http://127.0.0.1:3000/Images/Cart/")
    let response = await home_out.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".png")) {
            let parts = element.href.split(`/Cart/`);
            let home_outdoor = parts[1].replaceAll('%20', ' ')
            cart.push(home_outdoor)
        }
    }
    const carts = document.querySelector('.cart')
    let price = [49.99, 35.99, 28.99]
    let i = 0;

    for (const element of cart) {
        carts.innerHTML = carts.innerHTML + ` <div class="order1">
                    <div class="img-details">
                        <div class="orderimg">
                            <img width="100" src="/Images/Cart/${element}" alt="">
                        </div>
                        <div class="detailsoforder">
                            <p>${cartdetails[i]}</p>
                            <h6>Size: medium, Color: Gray, Material: Cotton</h6>
                            <h6>Seller: Artel Market</h6>
                            <div class="remove-saved">
                                <button class="remove">Remove</button>
                                <button class="save">Save for later</button>
                            </div>
                        </div>
                    </div>
                    <div class="price-quantity">
                        <p class="price">$${price[i]}</p>
                        <label for="dropdown"></label>
                        <select name="" id="pcs">
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                        </select>
                    </div>
                </div>`
        i = i + 1;
    }
    carts.innerHTML += ` <div class="shop-removal">
                    <a class="backtohome" href="/HTML/Home.html">
                        <button class="backtoshop"><img src="/Images/Icon/arrow_back.png"></img>Back to shop</button>
                    </a>
                        <button class="removeall">Remove All</button>

                </div>`
    cartremovesave()
    updateCartCount();
    updateCartTotals();


}


function updateCartTotals() {
    const orderItems = document.querySelectorAll(".order1");
    let subtotal = 0;

    orderItems.forEach((item, index) => {
        const priceText = item.querySelector(".price").textContent.replace("$", "");
        const price = parseFloat(priceText);
        const qty = parseInt(item.querySelector("select").value);
        subtotal += price * qty;
    });

    let discount = subtotal > 0 ? 0.1 * subtotal : 0; // Example: 10% discount
    let tax = subtotal > 0 ? 0.05 * subtotal : 0;     // Example: 5% tax
    let total = subtotal - discount + tax;

    document.getElementById("subtotalAmount").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("discountAmount").textContent = `- $${discount.toFixed(2)}`;
    document.getElementById("taxAmount").textContent = `+ $${tax.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `$${total.toFixed(2)}`;
}

function cartremovesave() {
    const removeButtons = document.querySelectorAll(".remove");
    const cartCount = document.getElementById("cartCount");

    removeButtons.forEach(remove => {
        remove.addEventListener("click", () => {
            const orderCard = remove.closest(".order1");

            // Get the item title from the removed cart item
            const removedTitle = orderCard.querySelector(".detailsoforder p").textContent.trim();

            // Enable the corresponding "Move to Cart" button again
            const moveButtons = document.querySelectorAll(".movetocart");
            moveButtons.forEach(btn => {
                const bookTitle = btn.parentElement.querySelector("p").textContent.trim();
                if (bookTitle === removedTitle) {
                    btn.textContent = "Move to Cart";
                    btn.disabled = false;
                    btn.style.opacity = 1;
                }
            });

            // Remove the item
            orderCard.remove();

            updateCartCount();
            updateCartTotals();
        });

    });

    const quantitySelectors = document.querySelectorAll(".order1 select");
    quantitySelectors.forEach(select => {
        select.addEventListener("change", () => {
            updateCartTotals();
        });
    });



    const saved = document.querySelectorAll(".save");
    saved.forEach(save => {
        save.addEventListener("click", () => {

            save.style.transition = "transform 0.2s ease";
            save.style.transform = "scale(0.95)";

            setTimeout(() => {
                save.style.transform = "scale(1)";
            }, 150);
        });
    })
    const backtohome = document.querySelectorAll(".backtohome");
    backtohome.forEach(backtohom => {
        backtohom.addEventListener("click", () => {

            backtohom.style.transition = "transform 0.2s ease";
            backtohom.style.transform = "scale(0.95)";

            setTimeout(() => {
                backtohom.style.transform = "scale(1)";
            }, 150);
        });
    })
    const removeall = document.querySelectorAll(".removeall");
    removeall.forEach(removeal => {
        removeal.addEventListener("click", () => {
            // Animation
            removeal.style.transition = "transform 0.2s ease";
            removeal.style.transform = "scale(0.95)";
            setTimeout(() => {
                removeal.style.transform = "scale(1)";
            }, 150);

            // Remove all cart items
            const cartContainer = document.querySelector('.cart');
            const allOrders = cartContainer.querySelectorAll(".order1");
            allOrders.forEach(order => order.remove());

            const shopRemoval = cartContainer.querySelector(".shop-removal");
            if (shopRemoval) {
                shopRemoval.remove();
            }

            // Update cart state
            updateCartCount();
            updateCartTotals();
        });
    });


}

function updateCartCount() {
    const count = document.querySelectorAll(".order1").length;
    document.getElementById("cartCount").textContent = count;

    const emptyCartMessage = document.getElementById("emptyCart");
    if (emptyCartMessage) {
        emptyCartMessage.style.display = count === 0 ? "flex" : "none";
    }
}

let books = []
let namebook = ["UN Nuevo Mundo, Ahora", "Spirtual Experiences", "What kids need for a fulfilled life", "The Imperfections of Memory", "The Arrivals Sci-fi Thriller", "Look to the Stars Newyork Times", "The Domestic Goddness"]
let price = [20.99, 15.99, 18.99, 25.99, 10.99, 12.99, 23.99]
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
        book.innerHTML = book.innerHTML + ` <div class="book1">
                    <div class="imgofbook">
                        <img width="155" height="220" src="/Images/book/${element}" alt="">
                    </div>
                    <div class="detailsofbook">
                        <h6>$${price[i]}</h6>
                        <p>${namebook[i]}</p>
                        <button class="movetocart"><img src="/Images/Icon/shopping_cart.png" alt="">Move to
                            Cart</button>

                    </div>
                </div>`
        i = i + 1;
    }
    setupMoveToCart();

}
function setupMoveToCart() {
    const moveButtons = document.querySelectorAll(".movetocart");

    moveButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const cartContainer = document.querySelector(".cart");

            // Create the order item HTML
            const orderItem = document.createElement("div");
            orderItem.classList.add("order1");
            orderItem.innerHTML = `
                <div class="img-details">
                    <div class="orderimg">
                        <img width="100" height="100px" src="/Images/book/${books[index]}" alt="">
                    </div>
                    <div class="detailsoforder">
                        <p>${namebook[index]}</p>
                        <h6>Size: - , Color: -, Material: Paper</h6>
                        <h6>Seller: Bookstore</h6>
                        <div class="remove-saved">
                            <button class="remove">Remove</button>
                            <button class="save">Save for later</button>
                        </div>
                    </div>
                </div>
                <div class="price-quantity">
                    <p class="price">$${price[index]}</p>
                    <label for="dropdown"></label>
                    <select name="" id="pcs">
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                        <option value="4">Qty: 4</option>
                        <option value="5">Qty: 5</option>
                    </select>
                </div>
            `;

            // Insert before the remove all button section if it exists
            const shopRemoval = cartContainer.querySelector(".shop-removal");
            if (shopRemoval) {
                cartContainer.insertBefore(orderItem, shopRemoval);
            } else {
                cartContainer.appendChild(orderItem);
            }

            // Update all cart-related functions
            updateCartCount();
            updateCartTotals();
            cartremovesave();

            // Optional: disable button to prevent multiple adds
            btn.textContent = "Added to Cart";
            btn.disabled = true;
            btn.style.opacity = 0.5;
        });
    });
}

getbooks()
cartremovesave()
getcartitems()
getpaymentmethod()
getanimations()

