# Ragas Modas Website

https://ragas-moda.vercel.app/

Welcome to the Ragas Modas website! This project is a comprehensive platform showcasing our fabric printing services, products, and company information. Below you'll find details on how to set up and run the project, as well as an overview of its features.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Page**: A welcoming introduction to Ragas Modas with a call to action.
- **About Us**: Information about our mission and services.
- **Services**: Detailed descriptions of our printing services.
- **Contact**: A contact form for inquiries and feedback.
- **Products**: A dynamic listing of available products categorized for easy navigation.
- **Gallery**: A showcase of our work through images.
- **Testimonials**: Customer feedback and testimonials.
- **Blog**: Articles related to fabric printing and design.
- **API Integration**: Handles contact form submissions and newsletter subscriptions.

## Installation

To get started with the Ragas Modas website, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ragas-modas-website.git
   ```

2. Navigate to the project directory:
   ```
   cd ragas-modas-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the website in action.

## Usage

Once the server is running, you can navigate through the different sections of the website using the navigation bar. Each section is designed to provide a seamless user experience with animated elements and responsive design.

## Folder Structure

The project is organized as follows:

```
ragas-modas-website
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about
│   │   └── page.tsx
│   ├── services
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── products
│   │   ├── page.tsx
│   │   ├── [category]
│   │   │   └── page.tsx
│   │   └── [category]/[id]
│   │       └── page.tsx
│   ├── gallery
│   │   └── page.tsx
│   ├── testimonials
│   │   └── page.tsx
│   ├── blog
│   │   ├── page.tsx
│   │   └── [slug]
│   │       └── page.tsx
│   └── api
│       ├── contact
│       │   └── route.ts
│       └── newsletter
│           └── route.ts
├── components
│   ├── layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   ├── ui
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Carousel.tsx
│   │   ├── ProductCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── Newsletter.tsx
│   │   ├── ContactForm.tsx
│   │   └── AnimatedBanner.tsx
│   ├── sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   └── TestimonialsSection.tsx
│   └── animations
│       ├── FadeIn.tsx
│       ├── SlideIn.tsx
│       └── TextReveal.tsx
├── lib
│   ├── utils.ts
│   ├── animations.ts
│   └── api.ts
├── hooks
│   ├── useAnimation.ts
│   └── useMediaQuery.ts
├── types
│   └── index.ts
├── public
│   ├── logo.png
│   ├── favicon.ico
│   ├── images
│   │   ├── hero.jpg
│   │   ├── products
│   │   ├── gallery
│   │   └── team
│   └── icons
├── styles
│   └── animations.css
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Contributing

We welcome contributions to improve the Ragas Modas website! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.# manankididikakaam
