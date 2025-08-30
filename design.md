
# Landing Page Design Document: Immigration Consultancy (v3)

## 1. Overall Vision & Design System

**Vision:** To create a modern, professional, and trustworthy landing page that establishes the consultancy as a premier choice for immigration services. The design should be clean, inspiring, and user-centric, guiding visitors seamlessly from information discovery to consultation booking. We will draw inspiration from the dynamic and polished feel of `flexy.global` but adapt it to the more formal and reassuring tone required for an immigration service.

**Core Technologies:**
*   **Framework:** Next.js with TypeScript
*   **Styling:** Tailwind CSS for utility-first styling.
*   **Animations:** Framer Motion for sophisticated and performant animations.

**Design System:**
*   **Color Palette:**
    *   **Primary:** `#0D2F5B` (Deep Sapphire Blue) - Evokes trust, professionalism, and stability.
    *   **Secondary:** `#FFFFFF` (White) - For clean backgrounds and text.
    *   **Accent:** `#D4AF37` (Soft Gold) - Represents success, quality, and optimism. Used for CTAs, highlights, and key icons.
    *   **Neutral:** `#F1F5F9` (Slate 100) and `#64748B` (Slate 500) - For backgrounds, borders, and body text.
*   **Typography:**
    *   **Headings:** `Poppins`, a modern and clean sans-serif font. (Weights: 600 for main heads, 500 for sub-heads).
    *   **Body Text:** `Lato`, a highly readable and friendly sans-serif font. (Weight: 400).
*   **Iconography:** Use a consistent set of professional, line-art icons (e.g., from Heroicons or a similar library).
*   **Background Effects:** To add depth and a modern aesthetic, we will use large, soft-focused, slowly rotating gradient "blobs" in the background of key sections (like the Hero and Services). These should be subtle and not distract from the main content.

**Global Interactivity & Effects:**
*   **Scroll Progress Indicator:** A thin (2-3px) gold-colored progress bar will be fixed to the top of the viewport. It will animate its width from 0% to 100% based on the user's scroll depth of the page.
*   **Custom Cursor:** (Optional, for premium feel) A custom circular cursor that is subtle on the general page but transforms (e.g., grows, shows an icon) when hovering over interactive elements like links or buttons.

---

## 2. Page Structure & Component Breakdown

### 2.1. Header
*   **Layout:** A sticky header that remains visible on scroll.
    *   Left: Logo of the consultancy.
    *   Center: Navigation links (`Home`, `Services`, `Success Stories`, `About Us`, `Contact`).
    *   Right: A primary CTA button: `Book a Consultation`.
*   **Animation:**
    *   On page load, the header is transparent.
    *   On scroll down (after ~100px), the header background transitions to a semi-transparent blur (`backdrop-filter: blur(8px); background-color: rgba(13, 47, 91, 0.8);`) with a smooth `ease-in-out` transition.

### 2.2. Hero Section
*   **Visual:** A full-screen, high-resolution background video playing on a loop.
    *   **Content:** The video should be a montage of inspiring, slow-motion clips: a person receiving a passport, a family looking at a new city skyline, a professional shaking hands in a new office. The video should have a subtle dark overlay to ensure text contrast.
*   **Text Content:**
    *   **Main Headline (H1):** "Your Gateway to a New Beginning" - Large, bold `Poppins` font.
    *   **Sub-headline (p):** "Expert guidance for your global immigration journey. We turn aspirations into reality."
    *   **CTA Button:** A prominent button with the gold accent color: `Start Your Journey`.
    *   **Social Proof:** Directly below the sub-headline, include a line: "*Recognized by [Official Immigration Body] & Featured in [Major News Outlet]*" to build immediate credibility.
*   **Animation:**
    *   **Headline Animation:** The main headline will animate in with a **word-by-word reveal**. Each word will fade in and slide up sequentially, creating a sophisticated, flowing effect.
    *   The sub-headline and social proof text will animate in after the main headline, fading in and moving up slightly (`opacity: 0 -> 1`, `y: 20 -> 0`).
    *   **Button Micro-interaction:** The CTA button will have a subtle "shimmer" effect. On hover, the background fill will animate smoothly, and if it contains an icon (e.g., an arrow), the icon will move slightly to the right (`transform: translateX(4px);`).

### 2.3. Partners Marquee Section
*   **Layout:** A full-width section placed below the Hero. It features a continuously scrolling marquee of logos.
*   **Content:** This section will display logos of partner organizations, legal firms, or official bodies to build immediate trust.
*   **Animation:** An infinite, smooth, left-to-right scroll animation. The marquee should pause on hover. The logos will be in grayscale and turn to full color on hover.

### 2.4. Services Section
*   **Layout:** A 3-column grid of cards on a light neutral background (`#F1F5F9`).
*   **Card Content:** Each card represents a core service.
    *   **Icon:** A gold-accented icon at the top.
    *   **Title (H3):** e.g., "Skilled Worker Visas"
    *   **Description (p):** A brief 2-3 sentence explanation.
*   **Animation:**
    *   As the user scrolls this section into view, the cards will animate in with a "stagger" effect. Each card will fade in and scale up slightly (`opacity: 0 -> 1`, `scale: 0.95 -> 1`), with a 100ms delay between each card.
    *   **On Hover:** The card will lift up (`y: -5px`) and a soft shadow will appear, providing tactile feedback.

### 2.5. Success Stories Section (Detailed Implementation)
This is the most complex interactive element, inspired by the "Our Projects" section of the reference site.

*   **Component Name:** `SuccessStoriesSection`
*   **Layout:**
    1.  **Section Title (H2):** "Client Success Stories"
    2.  **Tab Navigation:** A horizontal list of tabs.
    3.  **Content Grid:** A **2-column masonry grid** of cards that updates based on the selected tab. A masonry layout allows cards to have variable heights and fit together in a compact, visually interesting way.

*   **Tab Navigation - Detailed Implementation:**
    *   **Functionality:** This will be a controlled component. Clicking a tab updates the state, which in turn filters the stories displayed in the grid.
    *   **Tabs:** Each tab represents an immigration category.
        *   `Skilled Worker Programs`
        *   `Family Sponsorship`
        *   `Investor & Business Visas`
        *   `Student Visas`
    *   **Visuals & Animation:**
        *   The active tab will have a gold-colored text and a matching underline.
        *   When a new tab is clicked, the underline will not just appear; it will **animate its position and width**, sliding smoothly from the old tab to the new one. This can be achieved with Framer Motion's `layoutId` prop, which creates a seamless "magic move" effect.

*   **Card Grid & Cards - Detailed Implementation:**
    *   **Card Structure (The `StoryCard` component):**
        *   **Background:** This is the key visual. Each card will have a high-quality background image representing the success story.
            *   **Visual Effect 1 (Dynamic Feel):** The background image will have a subtle, slow "Ken Burns" effect (constantly and slowly zooming and panning).
            *   **Visual Effect 2 (3D Parallax on Hover):** On mouse hover over the card, the background image will react to the mouse position, moving slightly in the opposite direction.
        *   **Overlay:** A dark gradient overlay (`linear-gradient(to top, rgba(0,0,0,0.8), transparent)`).
        *   **Content (Layered/Collage Style):**
            *   **Tag:** A small pill-shaped tag at the top, e.g., "Case Study".
            *   **Main Title (H4):** "Anjali's Tech Career in Canada"
            *   **Description (p):** "From Bangalore to Toronto: How we facilitated a seamless Express Entry process."
            *   **Metrics Card:** A small, offset, card-within-a-card element with a semi-transparent background, showcasing key results like: `Visa Approved: 3 Months` or `Investment: $500K`.
    *   **Animation:**
        *   **Grid Update:** When the user clicks a new tab, the cards in the grid should not just be replaced instantly. The old cards should fade out (`opacity: 1 -> 0`), and the new cards for the selected category should fade in (`opacity: 0 -> 1`).
        *   **Card Hover:** In addition to the parallax background, when a user hovers over a card, the gradient overlay can become slightly darker, and a "View Story ->" link can appear.

### 2.6. Testimonials Section
*   **Layout:** A full-width section with a single, prominent testimonial visible at a time, functioning as a carousel.
*   **Visuals:**
    *   Large quotation marks as a background design element.
    *   Client's photo (in a circle frame), Name, and Country of Origin.
*   **Animation:**
    *   The carousel will auto-play every 8 seconds.
    *   The transition between testimonials will be a smooth, horizontal slide.

### 2.7. FAQ Section
*   **Layout:** A two-column layout. The left column has a title "Your Questions, Answered". The right column contains an accordion.
*   **Accordion Item:** Each item has a question and an answer.
*   **Animation:**
    *   Initially, only questions are visible.
    *   On clicking a question, the answer section expands smoothly (height animates from 0 to auto).
    *   An icon (e.g., a `+`) next to the question will animate into an `x` on expansion.
    *   Only one question can be open at a time. Clicking a new question will collapse the previously open one.

### 2.8. Final CTA Section
*   **Layout:** A full-width section with the primary blue background color (`#0D2F5B`).
*   **Content:**
    *   **Headline (H2):** "Ready to Start Your Immigration Story?" (in white text).
    *   **Button:** The same gold `Book a Consultation` button, centered and large.
*   **Animation:** As the user scrolls this into view, a subtle pattern or world map graphic can fade into the background to add visual interest.

### 2.9. Footer
*   **Top Part (Marquee):** Before the main footer content, include a large, bold, scrolling marquee with the text "Let's Work Together • Let's Work Together •" in the gold accent color. This is a final, high-impact visual statement.
*   **Main Layout:** A 4-column layout.
*   **Content:**
    *   Column 1: Logo and a brief mission statement.
    *   Column 2: Quick Links (Navigation).
    *   Column 3: Contact Info (Address, Phone, Email).
    *   Column 4: Social Media Icons (LinkedIn, etc.).
*   **Visuals:** Clean, organized, with clear typography on a dark background.
