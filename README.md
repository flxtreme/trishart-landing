# trishart — Handmade Wire Art & Floral Landing Page



> A handcrafted landing page for trishart, showcasing custom wire art bouquets, floral creations, and personalized handmade gifts through an immersive scrolling experience.



🔗 [Live Demo](https://yourdomain.com/landing/trishart)



## Overview



trishart is a fully responsive single-page landing page designed to showcase handmade wire art bouquets and floral creations. The experience combines elegant typography, immersive imagery, and subtle motion effects to communicate the craftsmanship behind every piece.



The page guides visitors through featured work, customer testimonials, and inquiry options while maintaining a lightweight and fast-loading experience.



---



## Design Goals



* Create a premium handmade brand aesthetic

* Showcase product photography prominently

* Encourage custom order inquiries

* Deliver a smooth and engaging scrolling experience

* Maintain excellent mobile responsiveness

* Keep the implementation lightweight and dependency-free



---



## Built With



### Frontend



* HTML5

* Tailwind CSS

* Vanilla JavaScript



### Typography



* Montserrat

* Playfair Display

* DM Sans



### Styling Approach



The design system is inspired by natural floral elements and handcrafted artistry.



Color palette highlights:



* Ivory backgrounds

* Daisy-yellow accents

* Leaf-green highlights

* Warm bark-inspired typography



These colors reinforce the organic and handmade identity of the brand.



---



## Key Features



### Hero Section



The hero area introduces the brand through:



* Large editorial typography

* Strong call-to-action buttons

* Layered image composition

* Smooth scroll-based parallax effects



The hero image moves subtly as users scroll, creating depth and visual interest.



---



### Masonry Gallery



The gallery is built using CSS Columns instead of a traditional grid layout.



Benefits include:



* Natural image stacking

* Variable image heights

* Better use of available space

* Pinterest-inspired presentation



Additional parallax movement creates a more dynamic browsing experience.



---



### Sticky Call-to-Action



A sticky custom-order card remains visible while visitors browse the gallery.



This helps:



* Improve conversions

* Increase visibility of inquiry actions

* Reinforce the custom-order offering



---



### Testimonials Section



The testimonials area features:



* Customer reviews

* Layered background imagery

* Responsive card layouts

* Soft visual hierarchy



A dedicated background layer allows imagery to remain subtle without affecting text readability.



---



### Contact Section



The inquiry section includes:



* Contact information

* Custom inquiry form

* Conversion-focused messaging



A darker color palette creates contrast and naturally draws attention toward the form.



---



## Animation System



The website uses lightweight JavaScript-powered interactions instead of animation libraries.



### Hero Parallax



The hero image moves slower than the page scroll to create depth.



### Gallery Parallax



Individual gallery items move at different speeds using custom `data-speed` values.



### Dynamic Background Transitions



The site's background color transitions between sections to match the active content area.



Examples:



* Ivory → Hero

* Yellow → Gallery

* Mist → Testimonials

* Dark → Contact



---



## Responsive Strategy



The layout is optimized for:



* Mobile devices

* Tablets

* Laptops

* Large desktop screens



Desktop-only enhancements include:



* Advanced parallax effects

* Sticky content panels

* Fixed background imagery



These effects are disabled on smaller devices to improve performance and usability.



---



## Performance Considerations



To maintain smooth performance:



* Uses Vanilla JavaScript instead of heavy animation libraries

* Leverages CSS Columns for masonry layouts

* Uses `requestAnimationFrame` for animation loops

* Uses passive scroll listeners

* Limits intensive effects to larger screens



---



## Project Structure



```text

/

├── index.html

├── assets/

│   ├── hero.jpg

│   ├── gallery-feature.jpg

│   ├── shop.jpg

│   ├── image-1.jpg

│   ├── image-2.jpg

│   ├── image-3.jpg

│   └── ...

```



---



## What I Learned



This project focused on balancing visual storytelling with performance.



Key challenges included:



* Building smooth parallax effects without external libraries

* Creating a masonry gallery using pure CSS

* Managing section-based background transitions

* Maintaining responsiveness across all screen sizes



The final result is a lightweight, visually engaging landing page that reflects the handcrafted nature of the trishart brand while remaining fast, accessible, and easy to maintain.