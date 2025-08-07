# E-commerce Frontend Design
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/UmerNaeem846/ecommerce-frontend-design)

This repository contains the complete frontend design for a modern e-commerce website. It is built using pure HTML, CSS, and vanilla JavaScript, showcasing a clean, responsive, and interactive user interface. The project includes pages for home, product listing (with grid/list views), product details, and a shopping cart.

## Features

-   **Dynamic Content Loading**: JavaScript is used to dynamically fetch and display content such as products, categories, and other page elements, simulating a real-world application.
-   **Interactive UI**: Smooth hover effects, transitions, and click animations enhance user experience.
-   **Homepage**: A comprehensive landing page featuring a hero section, timed deals, category-specific product showcases, a supplier inquiry form, and recommended items.
-   **Product Listing Page**:
    -   Switch between **List View** and **Grid View** to browse products.
    -   Advanced filtering sidebar for categories, brands, features, price range, and condition.
    -   Pagination to navigate through product lists.
-   **Product Detail Page**:
    -   Image gallery with a main view and selectable thumbnails.
    -   Detailed product information, specifications, and pricing tiers.
    -   Tabbed section for Description, Reviews, Shipping, and Seller Info.
    -   "You may like" and "Related Products" sections.
-   **Shopping Cart**:
    -   Fully functional cart to add, remove, and update quantities of products.
    -   Dynamic calculation of subtotal, discount, tax, and total price.
    -   "Saved for Later" functionality.

## Pages

-   `Home.html`: The main landing page of the e-commerce site.
-   `list-gridview.html`: A page for displaying products with robust filtering and view options.
-   `product-detail.html`: A detailed view of a single product.
-   `cart.html`: The user's shopping cart page.

## Technologies Used

-   **HTML5**: For the structure and content of the web pages.
-   **CSS3**: For styling, layout (using Flexbox and Grid), and animations.
-   **Vanilla JavaScript**: For all dynamic functionality, DOM manipulation, event handling, and simulating API calls with the Fetch API.

## Project Structure

The repository is organized into distinct folders for clarity and maintainability:

```
├── CSS/         # Stylesheets for each page and component
├── HTML/        # All HTML page files
├── JS/          # JavaScript files for page-specific logic
└── Images/      # All image assets, organized into subdirectories
```

## Setup and Usage

This project uses the `fetch` API to dynamically load local image files to simulate a backend. Because of this, you cannot simply open the `HTML` files directly in your browser. You need to serve the files using a local web server.

**1. Using VS Code Live Server Extension:**

-   Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in Visual Studio Code.
-   Right-click on any `.html` file (e.g., `HTML/Home.html`).
-   Select "Open with Live Server".

**2. Using Python's built-in server:**

-   Open your terminal or command prompt.
-   Navigate to the root directory of the project.
-   Run the following command:
    ```bash
    # For Python 3
    python -m http.server

    # For Python 2
    python -m SimpleHTTPServer
    ```
-   Open your browser and go to `http://localhost:8000/HTML/Home.html`.

**Note:** The JavaScript files are configured to fetch from `http://127.0.0.1:3000/`. If you use a different server or port (like the methods above), you may need to update the base URLs in the `.js` files for the dynamic content to load correctly.
