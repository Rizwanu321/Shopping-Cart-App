
# Shopping Cart Application

Welcome to the Shopping Cart Application, a simple React project designed to simulate a shopping cart experience with a free gift feature when a certain threshold is reached.

## Overview

This application allows users to:
- View a list of products.
- Add products to a shopping cart.
- Update the quantity of products in the cart.
- Automatically receive a free gift when the cart total reaches ₹1000.
- See a progress bar indicating how close they are to earning the free gift.


### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rizwanu321/Shopping-Cart-App.git
   cd Shopping-Cart-App
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The application will start and be available at `localhost:3000` in your web browser.

## Project Structure

```
Shopping-Cart-App/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Product.js
│   │   ├── CartItem.js
│   │   └── CartSummary.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Features

- **Product Listing:** Displays a list of products with options to add them to the cart.
- **Cart Management:** Users can update quantities or remove items from the cart (except for the free gift).
- **Free Gift:** Automatically adds a free Wireless Mouse when the cart total reaches ₹1000.
- **Progress Bar:** Shows progress towards earning the free gift.
- **User Interaction:** Smooth interactions for adding, updating, and removing items from the cart.


## Website Link

Visit the live website: [Shopping Cart Application](https://shopping-cart-app-beryl-one.vercel.app/)

