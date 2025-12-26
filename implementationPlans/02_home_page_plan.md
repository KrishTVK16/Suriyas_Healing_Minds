# Home Page Implementation Plan

## Overview

This plan addresses specific issues on the Home page (`index.html`) including hero section image, content alignment, missing images, and button positioning across different screen sizes.

## Proposed Changes

### [COMPONENT] Home Page Content & Layout

#### [MODIFY] [index.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/index.html)

**Changes**:

1. **Hero Section Image** (Lines 42-57):
   - The hero section currently uses SVG gradients as background
   - Add a background image option or feature image element
   - Ensure image is responsive and maintains aspect ratio
   - Consider adding `<img>` tag within hero-content or updating CSS background-image

2. **"How We Can Help" Section** (Lines 77-121):
   - **Line 79-80**: Center-align section heading (update `.section-title h2`)
   - **Lines 87, 93, 99, 105, 111, 117**: Align "Learn More" buttons properly
   - Add CSS class to ensure buttons are centered within cards: `text-align: center` or flexbox centering

3. **Section Headings - Center Alignment** (Lines 126, 188, 219, 275, 307, 331):
   - These headings should already be centered via `.section-title` class
   - Verify proper center alignment in CSS
   - Add additional center-alignment if needed

4. **Missing Images in Sections**:
   - Review sections that may need images (Lines 129-178 - "Areas of Expertise" uses emoji icons)
   - If specific sections need actual images, add appropriate `<img>` tags with Unsplash or placeholder URLs
   - Ensure all images have proper `loading="lazy"` attributes

5. **"Your First Steps" Section** (Lines 329-355):
   - **Lines 332, 337, 342, 347**: Center-align card headings
   - Card headings use `.card-title` which may have `text-align: left` override
   - Update CSS or add inline styles to center these specific headings

6. **"Our Caring Professionals" Section** (Lines 217-270):
   - **Mobile View** (Lines 234, 248, 262): Center-align "View Profile" buttons
   - **Tablet View**: Properly align buttons in responsive grid
   - Add media query CSS for mobile (<768px) to center buttons: `margin: 0 auto` or flexbox
   - Add media query CSS for tablet (768px-1024px) to ensure proper button alignment

---

### [COMPONENT] Home Page Styles

#### [MODIFY] [styles.css](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/css/styles.css)

**Changes**:

1. **Hero Section**:
   - Update `.hero` class to support background image
   - Add background-image property with appropriate URL
   - Ensure image coverage with `background-size: cover` and `background-position: center`
   - Maintain gradient overlay for text readability

2. **Section Headings**:
   - Verify `.section-title h2` has `text-align: center`
   - Add specific overrides if certain sections aren't centered

3. **Card Buttons Alignment**:
   - Update `.card .btn` to ensure center alignment within cards
   - Add flexbox or margin auto for button positioning

4. **"Your First Steps" Card Titles**:
   - Create specific selector for this section's card titles
   - Override any left-align styles with `text-align: center`

5. **Mobile Responsive - Buttons**:
   - Add media query `@media (max-width: 768px)` for `.therapist-card .btn`
   - Ensure buttons are centered: `width: 100%` or `margin: 0 auto`

6. **Tablet Responsive - Buttons** (768px-1024px):
   - Add media query for `.therapist-card`
   - Ensure buttons display properly in grid layout
   - Adjust button sizing and alignment within cards

## Verification Plan

### Manual Verification

**Test 1: Hero Section Image**
1. Open [index.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/index.html) in browser
2. Verify hero section displays background image (not just gradient)
3. Check image is responsive and scales properly across screen sizes
4. Ensure text remains readable over image

**Test 2: "How We Can Help" Section**
1. Scroll to "How We Can Help" section
2. Verify heading is center-aligned
3. Check that all "Learn More" buttons are properly aligned within their cards
4. Test on desktop, tablet, and mobile views

**Test 3: Section Headings Center Alignment**
1. Scroll through entire home page
2. Verify all section headings are center-aligned:
   - "Areas of Expertise"
   - "Your Path to Wellness Starts Here"
   - "Our Caring Professionals"
   - "Stories of Hope & Healing"
   - "Affordable Care Options"
   - "Your First Steps"

**Test 4: "Your First Steps" Card Headings**
1. Scroll to "Your First Steps" section
2. Verify all three card headings are center-aligned:
   - "Schedule Free Consultation"
   - "Meet Your Therapist"
   - "Begin Your Journey"

**Test 5: "Our Caring Professionals" Buttons (Mobile View)**
1. Resize browser to mobile width (375px-414px)
2. Scroll to "Our Caring Professionals" section
3. Verify "View Profile" buttons are center-aligned in each therapist card
4. Test on iPhone SE (375px) and iPhone 12 (390px) sizes

**Test 6: "Our Caring Professionals" Buttons (Tablet View)**
1. Resize browser to tablet width (768px-1024px)
2. Scroll to "Our Caring Professionals" section
3. Verify buttons are properly aligned within the grid layout
4. Check spacing and alignment consistency across cards

### Browser Testing
- **Desktop**: Chrome, Firefox, Edge (1920x1080, 1366x768)
- **Tablet**: iPad (768x1024), iPad Pro (1024x1366)
- **Mobile**: iPhone SE (375x667), iPhone 12 (390x844), Samsung Galaxy (360x640)
