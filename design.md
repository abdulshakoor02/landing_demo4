
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
*   **Layout:** A full-width interactive section with a dark-themed background featuring prominent geometric 3D elements that visually represent each service.
*   **Visual Design:**
    *   **Background:** Dynamic 3D geometric elements that change based on the selected service
    *   **Overlay Card:** A text panel overlayed on top of the 3D background that displays service information
    *   **Color Scheme:** Dark theme with gold accent colors for text and UI elements to ensure proper contrast
*   **Content Structure:**
    *   **Overlay Text Card:** Contains the service title and detailed description
    *   **Service Navigation:** A bottom navigation bar with text labels for each service (not dots), allowing users to switch between different services
*   **Interactive Experience:**
    *   When a user clicks on a service name in the bottom navigation:
        *   The background 3D geometric element transitions to represent the selected service
        *   The overlay text card content updates to show the corresponding service information
    *   This creates a carousel/slider-style experience where users can explore different services through the text-based bottom navigation
*   **Animation:**
    *   Smooth transitions between service views with fade and morph effects for the 3D background elements
    *   Staggered text animation for the overlay card content when switching services
    *   Hover effects on the navigation text elements to indicate interactivity

### 2.5. Success Stories Section (Detailed Implementation)
This is the most complex interactive element, inspired by the flexy.global design with advanced scroll interactions.

*   **Component Name:** `SuccessStoriesSection`
*   **Layout Structure:**
    *   **Split Layout:** Two-column design with distinct scrolling behaviors
    *   **Left Column (Sticky):** Fixed-position text content that remains visible during right column scrolling
    *   **Right Column (Scrollable):** Masonry grid layout with independent vertical scrolling within section boundaries
    *   **Container:** Full-width section with controlled overflow for the scrollable area

*   **Left Column - Sticky Content:**
    *   **Position:** `position: sticky` with top positioning to remain fixed during scroll
    *   **Content:**
        *   **Section Title (H2):** "Client Success Stories"
        *   **Introduction Text:** Brief overview of success stories and client achievements
        *   **Trust Indicators:** Key statistics or metrics displayed prominently
        *   **Navigation Hints:** Visual cues indicating scrollable content to the right
    *   **Visual Design:** Clean typography with proper hierarchy, using the established color palette

*   **Right Column - Scrollable Masonry Grid:**
    *   **Layout:** Irregular masonry grid with varying card heights for organic, dynamic feel
    *   **Scroll Behavior:** Independent vertical scrolling container (`overflow-y: auto`) contained within section
    *   **Folder-like Card Design:**
        *   **Visual Style:** Mimics file folders with tab-like headers and layered appearance
        *   **Backgrounds:** Gradient backgrounds with subtle shadows for depth
        *   **Content Organization:** Each card represents a success story with:
            *   **Category Tag:** Pill-shaped indicator (e.g., "Skilled Worker", "Family Visa")
            *   **Client Name/Title:** Prominent heading for each success story
            *   **Achievement Summary:** Brief description of the immigration success
            *   **Key Metrics:** Important statistics or timeline information
            *   **Visual Elements:** Icons or small imagery representing the story type
    *   **Interactions:**
        *   **Hover States:** Cards elevate with increased shadow and subtle scale transformation
        *   **Scroll Indicators:** Visual feedback showing scrollable content availability
        *   **Smooth Transitions:** CSS transitions for all interactive elements

*   **Tab Navigation System:**
    *   **Functionality:** Filter-based navigation to categorize success stories
    *   **Categories:**
        *   `Skilled Worker Programs`
        *   `Family Sponsorship`
        *   `Investor & Business Visas`
        *   `Student Visas`
        *   `All Stories` (Default view)
    *   **Visual Design:**
        *   Horizontal tab bar with active state indicators
        *   Gold accent color for active tab with smooth transition animations
        *   Hover effects with subtle background changes

*   **Animation & Micro-interactions:**
    *   **Sticky Element Transition:** Smooth appearance/disappearance of sticky left content
    *   **Grid Filtering:** Cross-fade animation when filtering between categories
    *   **Scroll Reveal:** Cards animate into view as user scrolls the right column
    *   **Hover Effects:** Parallax-like movements and opacity changes on card interaction
    *   **Loading States:** Subtle loading animations when filtering content

*   **Responsive Behavior:**
    *   **Desktop:** Full split layout with sticky left and scrollable right
    *   **Tablet:** Modified layout with reduced column widths, maintaining scroll behavior
    *   **Mobile:** Stacked layout with both sections becoming independently scrollable
    *   **Touch Interactions:** Optimized for touch devices with appropriate feedback

*   **Accessibility Considerations:**
    *   Keyboard navigation support for tab selection
    *   Screen reader compatibility with proper ARIA labels
    *   Focus indicators for interactive elements
    *   Reduced motion preferences respected

### 2.6. Testimonials Section
*   **Layout:** A full-width section with a grid or masonry layout of testimonial cards, titled "Client Success Stories" in a prominent heading.
*   **Header Section:**
    *   Sticky navigation bar at the top with consultancy logo on the left and navigation links on the right
    *   Navigation includes: Home, Services, Success Stories, About Us, Contact, and a "Book a Consultation" CTA button
*   **Testimonial Card Design:**
    *   Multiple testimonial cards arranged in a responsive grid layout
    *   Each card contains:
        *   Client profile photo (circular frame)
        *   Client name and title/location
        *   Testimonial quote text in readable typography
        *   Star rating system (5-star ratings visible)
    *   Clean, modern card design with subtle shadows and rounded corners
    *   Consistent spacing and alignment for visual harmony
*   **Visual Design:**
    *   Professional color scheme using the established palette (deep sapphire blue, white, soft gold accents)
    *   Ample white space for readability and visual breathing room
    *   Clean typography hierarchy with proper contrast
    *   Subtle shadows for depth and card separation
*   **Responsive Behavior:**
    *   Grid layout adapts to different screen sizes
    *   Columns reduce on tablet and mobile views
    *   Cards maintain consistent spacing and proportions across devices
*   **Animation:**
    *   Smooth carousel/slider functionality for browsing testimonials
    *   Subtle hover effects on testimonial cards (elevation with shadow enhancement)
    *   Smooth transitions between testimonial views
    *   Staggered card reveal animations as user scrolls into view

### 2.7. Countries you can settle with us
*   **Purpose:** Showcase destination countries using a contained vertical image scroller that highlights country imagery, quick facts, and a CTA to learn more.
*   **Layout & Visuals:**
    *   A contained section with a fixed-height vertical scroller displaying stacked images (images_scroller asset). Each item consists of two stacked images visible one-after-the-other within the scroller. Images have a semi-transparent dark overlay to ensure text contrast.
    *   Overlay text: centered, large country name (Poppins, 600), and a one-line benefit/summary (Lato, 400) beneath. Overlay uses the gold accent for country name and white for the subtitle.
    *   Image treatment: subtle rounded corners, soft drop shadow, and an inner gradient to improve legibility.
*   **Interactions & Micro-interactions:**
    *   Contained vertical scrolling (`overflow-y: auto`) within the section, independent from page scroll.
    *   Subtle parallax effect: foreground overlay moves slightly slower than the image during scroll for depth.
    *   On hover (desktop): overlay opacity increases, image scale to 1.02, and a soft elevation shadow appears.
    *   Click/tap opens a detail modal with country quick facts (processing times, popular visas, starting checklist) and a prominent CTA button `Learn more / Start your application`.
*   **Responsive Behavior:**
    *   Desktop: two stacked images visible in the scroller; section width constrained to content grid; horizontal padding preserved.
    *   Tablet: stacked images remain but reduced height; overlays scale down for readability.
    *   Mobile: single-column stacked images (one visible at a time), full-width container, touch-optimized vertical swipe.
*   **Accessibility:**
    *   Each scroller item is a keyboard-focusable card with an accessible name (aria-label="Country — {Country Name}").
    *   Modal: Trap focus, provide close button, and accessible headings. Respect prefers-reduced-motion.
    *   Ensure sufficient color contrast for overlay text (WCAG AA minimum).
*   **Placement & Cross-references:**
    *   Place directly after the Testimonials section and before the FAQ section. Cross-reference in the Success Stories area where relevant: "See country highlights in ‘Countries you can settle with us’ for example cases and quick facts."

### 2.8. FAQ Section
*   **Layout:** A two-column layout. The left column has a title "Your Questions, Answered". The right column contains an accordion.
*   **Accordion Item:** Each item has a question and an answer.
*   **Animation:**
    *   Initially, only questions are visible.
    *   On clicking a question, the answer section expands smoothly (height animates from 0 to auto).
    *   An icon (e.g., a `+`) next to the question will animate into an `x` on expansion.
    *   Only one question can be open at a time. Clicking a new question will collapse the previously open one.

### 2.9. Final CTA Section
*   **Layout:** A full-width section with the primary blue background color (`#0D2F5B`).
*   **Content:**
    *   **Headline (H2):** "Ready to Start Your Immigration Story?" (in white text).
    *   **Button:** The same gold `Book a Consultation` button, centered and large.
*   **Animation:** As the user scrolls this into view, a subtle pattern or world map graphic can fade into the background to add visual interest.

### 2.10. Footer
*   **Top Part (Marquee):** Before the main footer content, include a large, bold, scrolling marquee with the text "Let's Work Together • Let's Work Together •" in the gold accent color. This is a final, high-impact visual statement.
*   **Main Layout:** A 4-column layout.
*   **Content:**
    *   Column 1: Logo and a brief mission statement.
    *   Column 2: Quick Links (Navigation).
    *   Column 3: Contact Info (Address, Phone, Email).
    *   Column 4: Social Media Icons (LinkedIn, etc.).
*   **Visuals:** Clean, organized, with clear typography on a dark background.
