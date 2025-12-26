# Resources Page Implementation Plan

## Overview

This plan addresses specific issues on the Resources page (`resources.html`) including card heading alignment, button positioning, missing images, and responsive layout fixes.

## Proposed Changes

### [COMPONENT] Resources Page Content & Layout

#### [MODIFY] [resources.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/resources.html)

**Changes**:

1. **"Self-Help Tools" Section Card Headings & Buttons** (Need to identify exact lines):
   - Center-align card headings within Self-Help Tools cards
   - Center-align buttons within cards
   - Ensure headings and buttons align properly with each other
   - Apply consistent styling across all cards in this section

2. **Section Headings Center Alignment**:
   - Verify all section headings on Resources page are center-aligned
   - Sections likely include:
     - "Self-Help Tools"
     - "Recommended Readings"
     - "Support Groups"
     - "Crisis Resources"
     - "Mental Health Apps"
     - "Worksheets & Exercises"
   - Update headings to use `.section-title` class or similar

3. **"Recommended Readings" Images**:
   - Add missing images for book covers or reading materials
   - Use placeholder images or Unsplash book/reading images
   - Ensure consistent image sizing (e.g., 200x300 for book covers)
   - Add proper `loading="lazy"` attributes

4. **Button Alignment Across Sections**:
   - Identify all sections with misaligned buttons
   - Ensure buttons are:
     - Centered within their containers
     - Consistent sizing
     - Properly spaced from content above
   - Apply to buttons in:
     - Self-Help Tools cards
     - Recommended Readings cards
     - Support Groups links
     - Download buttons for worksheets

5. **Mobile/Tablet Left-Alignment Fix**:
   - Ensure all content spans full width on mobile/tablet
   - Fix any sections appearing left-aligned with empty right space
   - Improve card grid responsive behavior

**Note**: Need to view the complete Resources page HTML to identify exact line numbers

---

### [COMPONENT] Resources Page Styles

#### [MODIFY] [styles.css](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/css/styles.css)

**Changes**:

1. **Card Heading Center Alignment**:
   - Update card title styling for Resources page sections
   - Override `.card-title { text-align: left; }` where needed
   - Create `.card-title-center` class if not exists
   - Apply to Self-Help Tools and other relevant sections

2. **Button Center Alignment**:
   - Ensure buttons within cards are centered
   - Add `text-align: center` to button containers
   - OR use flexbox/grid for centering: `justify-content: center`
   - Create consistent button layout pattern for all Resources cards

3. **Section Headings**:
   - Verify `.section-title h2` has `text-align: center`
   - Add specific overrides if Resources page needs them

4. **Image Styling for Recommended Readings**:
   - Create image container styles for book covers
   - Add proper sizing, borders, shadows for visual appeal
   - Ensure responsive behavior
   - Consider aspect ratio preservation

5. **Mobile/Tablet Responsive**:
   - Add media queries for Resources page specific layouts
   - Ensure `.card-grid` stacks properly on mobile
   - Fix any left-alignment issues on tablet (768px-1024px) and mobile (<768px)
   - Center all content appropriately

## Verification Plan

### Manual Verification

**Note**: This verification plan is based on the description. Exact tests may need adjustment after viewing the complete Resources page HTML.

**Test 1: Self-Help Tools Section**
1. Open Resources page (exact path needed) in browser
2. Scroll to "Self-Help Tools" section
3. Verify:
   - All card headings are center-aligned
   - All buttons are center-aligned
   - Headings and buttons align consistently with each other
4. Check on desktop, tablet, and mobile views

**Test 2: Section Headings Center Alignment**
1. Scroll through entire Resources page
2. Verify all section headings are center-aligned
3. Check sections (adjust based on actual page):
   - "Self-Help Tools"
   - "Recommended Readings"
   - "Support Groups"
   - "Crisis Resources"
   - Other resource sections

**Test 3: Recommended Readings Images**
1. Scroll to "Recommended Readings" section
2. Verify all book/reading images display correctly
3. Check images:
   - Load properly
   - Have consistent sizing
   - Display with appropriate styling (borders, shadows)
4. Test on slow connections (network throttling)

**Test 4: Button Alignment Across Page**
1. Scroll through all sections with buttons
2. Verify buttons are:
   - Centered within their containers
   - Consistently sized
   - Properly aligned with content
3. Check buttons in:
   - Self-Help Tools cards
   - Recommended Readings
   - Support Groups
   - Worksheet downloads
   - Any other sections with buttons

**Test 5: Mobile/Tablet Responsive Layout**
1. Resize browser to mobile width (375px-414px)
2. Scroll through entire Resources page
3. Verify:
   - No left-alignment issues with empty right space
   - All content is properly centered/full-width
   - Cards stack vertically
   - Buttons remain centered
4. Repeat for tablet width (768px-1024px)

**Test 6: Card Grid Responsiveness**
1. Test card grids at various breakpoints:
   - Desktop (1920px, 1366px): Should show multiple columns
   - Tablet (768px-1024px): Should show 2 columns
   - Mobile (375px-414px): Should stack in 1 column
2. Verify spacing is consistent across all breakpoints

**Test 7: Image Quality & Loading**
1. Check all images in Recommended Readings
2. Verify proper lazy loading
3. Test image display on retina/high-DPI screens
4. Ensure appropriate image optimization

### Browser Testing
- **Desktop**: Chrome, Firefox, Edge (1920x1080, 1366x768)
- **Tablet**: iPad (768x1024), iPad Pro (1024x1366)
- **Mobile**: iPhone SE (375x667), iPhone 12 (390x844), Samsung Galaxy (360x640)

### Additional Checks Needed
- [ ] View complete Resources page HTML to identify exact line numbers
- [ ] Identify all card sections that need heading/button alignment
- [ ] Determine exact sections for recommended readings
- [ ] Map out all button locations requiring alignment fixes
