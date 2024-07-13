# Fitness Equipment and Accessories - Frontend

## Overview

We're developing a comprehensive e-commerce website for fitness equipment using React and Redux. This platform offers a seamless shopping experience with features like product listings, detailed product pages, and a user-friendly cart system. Additionally, it includes robust product management capabilities for administrators and bonus features such as debounced search and page refresh warnings to enhance performance and user experience. Optional integration with Stripe provides secure payment processing. This project aims to create a modern, efficient, and user-centric online store for fitness enthusiasts.

## Core Pages and Functionalities

1. **Homepage**

   - Header Section: Logo and site name.
   - Navigation Links: Links to other pages.
   - Hero Section: Visually appealing hero/branding section.
   - Categories Section: Product categories with images or icons.
   - Featured Products: Displayed products with a button to view details.
   - Benefits Section: Highlights the benefits of using the products.
   - Image Gallery: Mosaic view of images of healthy individuals using the products.
   - Footer: Contact information, social media links, and other relevant links.

2. **Products Page**

   - Product Listings: Images, names, prices, and a button to view details.
   - Searching and Filtering: Search bar, category and price range filters, sorting options, and "Clear Filter" button.

3. **Product Details Page**

   - Product Information: Name, price, stock quantity, description, images, and category.
   - Add to Cart Button: Adds the product to the cart.

4. **Cart Page**

   - Cart Items: List of products added to the cart with their quantities.
   - Controls: Increase/decrease quantity, remove product.
   - Pricing Details: Detailed total pricing, updated dynamically.
   - Proceed to Checkout Button: Redirects to the checkout page.

5. **Checkout Page**

   - User Details: Collects name, email, phone number, and delivery address.
   - Payment Methods: Cash on Delivery and optional Stripe integration.

6. **Product Management**

   - Product List Table: Displays products in a table format with columns for product name, price, category, and actions.
   - Action Buttons: Update and delete products.
   - Adding a Product: Fields for name, price, description, images, category, and stock.

7. **About Us Page**
   - Company Overview: History, mission, and vision.
   - Team Introduction: Key members of the team with their roles and brief bios.
   - Customer Testimonials: Testimonials from satisfied customers.
   - Contact Information: Detailed contact information and feedback encouragement.

## UI/UX

- **Quality**: Good user interface with wisely chosen colour combinations and smooth user experience.
- **Responsiveness**: The entire website is responsive for both mobile and desktop devices.

## Bonus Features

- **Debounce API Calls**: Reduces the number of API calls.
- **Page Refresh Warning**: Warns when refreshing the page if the cart is not empty.

## Optional Features

- **Integrate Stripe Payment**: For processing payments.
- **Implement Pagination**: Custom implementation on the Products page.

## Frontend Development Stack

- **React** ⚛️
- **Redux** 🌀

## Live Link

[Visit Live Site](https://fitness-equipment-and-accessories-backend-frontend.vercel.app/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fitness-equipment-and-accessories-frontend.git
   cd fitness-equipment-and-accessories-frontend
   ```
1. Install dependencies:
   ```bash
   yarn install
   ```
1. Start the development server:
   ```bash
   yarn dev
   ```
1. Open your browser and navigate to:

   ```bash
   http://localhost:5173

   ```

   **Contribution**
   Feel free to contribute by creating pull requests. For major changes, please open an issue first to discuss what you would like to change.

   **License**
   This project is licensed under the MIT License.
