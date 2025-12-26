# Therapists Page Implementation Plan

## Overview

This plan addresses specific issues on the Therapists page (`therapists.html`) including card name alignment, button redesign and alignment, missing images, and responsive layout fixes.

## Proposed Changes

### [COMPONENT] Therapists Page Content & Layout

#### [MODIFY] [therapists.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/therapists.html)

**Changes**:

1. **Therapist Card Names Center Alignment** (Lines 111-300):
   - **Lines 114, 138, 162, 186, 210, 234, 258, 282**: Center-align therapist names
   - Current names use `.therapist-name` class which has `text-align: left` in CSS
   - Need to override or update CSS to center these names
   - All 8 therapist cards need this fix

2. **Button Redesign & Alignment** (Lines 127-130, 151-154, 175-178, etc.):
   - Currently uses flexbox with `display: flex; gap: 0.5rem`
   - "View Profile" button (`.btn-secondary`) and "Book Appointment" button (`.btn`)
   - Buttons need consistent redesign:
     - Equal width distribution
     - Better spacing
     - Improved visual hierarchy
   - Ensure even alignment across all 8 therapist cards

3. **Team Photo Image** (Lines 306-314):
   - **Line 310**: Verify team photo image loads correctly
   - URL: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=400&fit=crop`
   - If image appears missing, replace with working URL or generate custom team photo
   - Ensure proper responsive sizing

4. **Mobile/Tablet Left-Alignment Fix**:
   - Ensure all therapist cards and content span full width on mobile/tablet
   - Fix any sections appearing left-aligned with empty right space
   - Improve card grid responsive behavior

5. **Tablet View Button Alignment** (768px-1024px):
   - Specifically address button alignment in tablet view
   - Ensure buttons don't overflow or appear misaligned
   - Maintain consistent spacing in grid layout

---

### [COMPONENT] Therapists Page Styles

#### [MODIFY] [styles.css](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/css/styles.css)

**Changes**:

1. **Therapist Name Center Alignment**:
   - Update `.therapist-name` class to use `text-align: center`
   - OR create specific override for therapist cards
   - Ensure credentials (`.therapist-credentials`) also center-aligned

2. **Button Redesign**:
   - Update therapist card button container styling
   - Options for button layout:
     - Keep flex layout but ensure equal widths
     - Use grid layout for perfect alignment
     - Add `flex: 1` to each button for equal distribution
   - Improve button padding and sizing for better click targets
   - Ensure consistent height across both buttons

3. **Button Styling Improvements**:
   - Update `.btn` and `.btn-secondary` for therapist cards
   - Consider adding specific class `.therapist-btn` for card buttons
   - Ensure visual distinction between primary and secondary actions
   - Add hover/focus states for better interactivity

4. **Mobile Responsive (< 768px)**:
   - Add media query for `.therapist-card` layout
   - Center-align buttons on mobile
   - Consider stacking buttons vertically on very small screens
   - Ensure proper spacing between stacked buttons
   - Fix any left-alignment issues

5. **Tablet Responsive (768px-1024px)**:
   - Add specific media query for tablet view
   - Ensure therapist-card grid displays properly (likely 2 columns)
   - Fix button alignment in 2-column layout
   - Prevent buttons from breaking layout or overflowing
   - Maintain consistent button sizing across grid

6 **Card Grid Responsive**:
   - Verify `.card-grid` behavior on Therapists page
   - Ensure proper spacing between cards at all breakpoints
   - Desktop: 3 columns
   - Tablet: 2 columns
   - Mobile: 1 column

## Verification Plan

### Manual Verification

**Test 1: Therapist Name Center Alignment**
1. Open [therapists.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/therapists.html) in browser
2. Scroll through all 8 therapist cards
3. Verify each therapist name is center-aligned within the card
4. Check names:
   - Dr. Sarah Johnson
   - Michael Chen
   - Dr. Emily Rodriguez
   - Jennifer Williams
   - Robert Martinez
   - Patricia Brown
   - Dr. Amanda Lee
   - David Kim

**Test 2: Button Redesign & Alignment (Desktop)**
1. View therapist cards on desktop (1920px width)
2. Verify "View Profile" and "Book Appointment" buttons are:
   - Equal width
   - Evenly aligned next to each other
   - Properly spaced
   - Visually appealing
3. Check all 8 cards have consistent button styling

**Test 3: Team Photo Image**
1. Scroll to "We're Here for You" section
2. Verify team photo displays correctly
3. Check image quality and appropriate sizing
4. Test image loads on slow connections

**Test 4: Mobile View Layout**
1. Resize browser to mobile width (375px-414px)
2. Verify therapist cards:
   - Stack in single column
   - Names are center-aligned
   - Buttons are center-aligned or stacked vertically
   - No left-alignment with empty right space
3. Test on iPhone SE (375px) and iPhone 12 (390px) sizes

**Test 5: Tablet View Button Alignment**
1. Resize browser to tablet width (768px-1024px)
2. Verify therapist cards display in 2-column grid
3. Check buttons are properly aligned within each card
4. Ensure consistent spacing between cards
5. Verify no button overflow or layout breaks
6. Test on iPad (768x1024) and iPad Pro (1024x1366) sizes

**Test 6: Responsive Card Grid**
1. Test card grid at various breakpoints:
   - 1920px (desktop): Should show 3 columns
   - 1366px (laptop): should show 3 columns
   - 1024px (tablet): Should show 2 columns
   - 768px (tablet): Should show 2 columns
   - 414px (mobile): Should show 1 column
   - 375px (mobile): Should show 1 column

**Test 7: Button Hover States**
1. Hover over "View Profile" buttons
2. Hover over "Book Appointment" buttons
3. Verify hover effects work correctly
4. Check visual feedback is clear and consistent

**Test 8: Filter Functionality**
1. Test filter buttons at top of page
2. Click different specialty filters
3. Verify cards filter correctly
4. Ensure button alignment remains consistent after filtering

### Browser Testing
- **Desktop**: Chrome, Firefox, Edge (1920x1080, 1366x768)
- **Tablet**: iPad (768x1024), iPad Pro (1024x1366)
- **Mobile**: iPhone SE (375x667), iPhone 12 (390x844), Samsung Galaxy (360x640)
