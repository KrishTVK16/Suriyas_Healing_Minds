# About Page Implementation Plan

## Overview

This plan addresses specific issues on the About page (`about.html`) including removing duplicate home page content, fixing missing images, center-aligning headings, and responsive layout fixes.

## User Review Required

> [!WARNING]
> **Content Removal**: The About page currently contains some content that appears to be derived from the home page. This content will be removed as it's redundant for a standalone About page. Please review to ensure the correct sections are being removed.

## Proposed Changes

### [COMPONENT] About Page Content & Layout

#### [MODIFY] [about.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/about.html)

**Changes**:

1. **Remove Home Page Derived Content**:
   - Identify and remove any sections that duplicate home page content
   - Review page structure to ensure About page has unique, relevant content only
   - Likely candidates for removal: redundant welcome messages, duplicate service listings
   - **Note**: Need to review with user which specific content to remove

2. **"Our Story" Section Image** (Lines 56-70):
   - **Line 60**: Image URL currently points to Unsplash photo
   - Verify image loads correctly or update to more appropriate image
   - If image is missing/broken, replace with working URL or generate custom image
   - Ensure proper sizing: `w=500&h=600&fit=crop&crop=face`

3. **Mission, Vision, Values Card Headings** (Lines 73-100):
   - **Lines 78, 83, 88**: Center-align card titles "Our Mission", "Our Vision", "Our Values"
   - These use `.card-title` class which may have left-align override
   - Add center alignment via CSS or class override

4. **Therapeutic Approach Card Headings** (Lines 123-155):
   - **Lines 130, 134, 138, 142, 146, 150**: Center-align therapeutic approach card headings
   - Headings: CBT, DBT, EMDR, Mindfulness-Based, Psychodynamic, Solution-Focused
   - Update CSS to center these specific card titles

5. **"Our Office Environment" Section Images** (Lines 190-223):
   - **Lines 197, 202, 207**: Verify images load properly
   - Images should show: Waiting Room, Therapy Room, Specialized Spaces
   - Replace any missing/broken images with working URLs
   - Ensure consistent sizing: `w=400&h=300&fit=crop`

6. **"Community Involvement" Card Headings** (Lines 226-254):
   - **Lines 234, 239, 244, 249**: Center-align card headings
   - Headings: "Workshops & Seminars", "Support Groups", "Community Partnerships", "Educational Outreach"
   - Add center alignment styling

7. **Mobile/Tablet Left-Alignment Fix**:
   - Ensure all content spans full width on mobile/tablet
   - Fix any sections that appear left-aligned with empty right space
   - Add responsive CSS for proper centering and width distribution

---

### [COMPONENT] About Page Styles

#### [MODIFY] [styles.css](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/css/styles.css)

**Changes**:

1. **Card Title Center Alignment**:
   - Create specific selectors for About page card titles that need centering
   - Override `.card-title { text-align: left; }` with center alignment for specific sections
   - Options:
     - Add class `.card-title-center { text-align: center; }`
     - Or use section-specific selectors

2. **Mobile/Tablet Responsive**:
   - Add media queries for About page specific layouts
   - Ensure `.two-column` stacks properly on mobile
   - Fix `.card-grid` to use full width on smaller screens
   - Prevent left-alignment issues on tablet (768px-1024px) and mobile (<768px)

3. **Image Sizing Consistency**:
   - Ensure all images in About page maintain consistent aspect ratios
   - Update `.two-column img` if needed for proper responsive behavior

## Verification Plan

### Manual Verification

**Test 1: Home Page Content Removal**
1. Open [about.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/about.html) in browser
2. Compare content with home page
3. Verify no duplicate/redundant content from home page remains
4. Ensure About page has unique, relevant content

**Test 2: "Our Story" Section Image**
1. Scroll to "Our Story" section
2. Verify image displays correctly on left side
3. Check image quality and appropriate sizing
4. Test image loads on slow connections (network throttling)

**Test 3: Card Headings Center Alignment**
1. Scroll through About page checking these sections:
   - Mission, Vision, Values cards (3 cards)
   - Therapeutic Approach cards (6 cards)
   - Community Involvement cards (4 cards)
2. Verify all card headings are center-aligned
3. Check alignment is consistent across all cards

**Test 4: "Our Office Environment" Images**
1. Scroll to "Our Office Environment" section
2. Verify all 3 images display correctly:
   - Comfortable Waiting Area
   - Private Therapy Rooms
   - Specialized Spaces
3. Check image quality and sizing consistency
4. Verify images load properly on all devices

**Test 5: Mobile/Tablet Responsive Layout**
1. Resize browser to mobile width (375px-414px)
2. Scroll through entire About page
3. Verify no left-alignment issues with empty right space
4. Check all content is properly centered/full-width
5. Repeat for tablet width (768px-1024px)

**Test 6: Two-Column Layout Responsiveness**
1. Test "Our Story" two-column section on:
   - Desktop (should show side-by-side)
   - Tablet (should show side-by-side or stack)
   - Mobile (should stack vertically)
2. Verify spacing and alignment in all views

### Browser Testing
- **Desktop**: Chrome, Firefox, Edge (1920x1080, 1366x768)
- **Tablet**: iPad (768x1024), iPad Pro (1024x1366)
- **Mobile**: iPhone SE (375x667), iPhone 12 (390x844), Samsung Galaxy (360x640)
