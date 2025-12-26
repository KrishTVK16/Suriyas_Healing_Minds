# Blog Page Implementation Plan

## Overview

This plan addresses the non-functional Blog page link in the navbar that currently does not open any page.

## User Review Required

> [!IMPORTANT]
> **Blog Page Implementation**: The Blog link in the navbar currently points to `#blog` (a hash anchor) rather than an actual page. There are two options:
> 1. **Create a new Blog page**: Implement a full blog.html page with blog posts layout
> 2. **Temporary Fix**: Create a simple placeholder page or "Coming Soon" page
> 3. **Remove Link**: Remove the Blog link entirely if not needed
> 
> Please indicate your preference.

## Proposed Changes

### Option A: Create Full Blog Page

#### [NEW] [blog.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/blog.html)

**Content**:
1. **Page Header**: "Mental Health Blog" with tagline
2. **Blog Post Grid**: Display blog posts in card grid layout
3. **Featured Post**: Highlight one main post at top
4. **Blog Categories**: Filter/navigation for post categories
5. **Blog Posts**: Multiple blog post preview cards with:
   - Featured image
   - Title
   - Excerpt/preview
   - Author info
   - Date published
   - Read More button
6. **Pagination**: For multiple blog post pages
7. **Sidebar** (optional): Recent posts, categories, search

---

### Option B: Simple Placeholder Page

#### [NEW] [blog.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/blog.html)

**Content**:
1. **Page Header**: "Blog Coming Soon"
2. **Message**: Informative message about future blog content
3. **Newsletter Signup**: Collect emails to notify when blog launches
4. **Return Home Button**: Link back to home page

---

### Common Changes (Both Options)

#### [MODIFY] [index.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/index.html)
#### [MODIFY] [about.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/about.html)
#### [MODIFY] [services.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/services.html)
#### [MODIFY] [therapists.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/therapists.html)
#### [MODIFY] [resources.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/resources.html)
#### [MODIFY] [contact.html](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/contact.html)

**Changes for each file**:
1. **Navbar Blog Link** (Line ~33 in most files):
   - Change from: `<a href="#blog">Blog</a>`
   - Change to: `<a href="blog.html">Blog</a>`

2. **Footer Blog Link** (Lines ~378 in most files):
   - Change from: `<a href="#blog">Blog</a>`
   - Change to: `<a href="blog.html">Blog</a>`

---

### CSS Updates (If Creating Full Blog Page)

#### [MODIFY] [styles.css](file:///e:/OfficeDownloads_/DecWebsites/suryas/Mental-health-counseling-portal/css/styles.css)

**Changes**:
1. **Blog Post Card Styles**:
   - `.blog-post-card` with image, title, excerpt layout
   - Hover effects for interactivity
   - Responsive grid layout

2. **Featured Post Styling**:
   - `.featured-post` with larger, prominent display
   - Different layout from regular posts

3. **Blog Category Navigation**:
   - `.blog-category-nav` for category filters
   - Active state styling

4. **Blog Sidebar** (if included):
   - `.blog-sidebar` with sticky positioning
   - Recent posts list styling
   - Category widget styling

## Verification Plan

### Manual Verification

**Test 1: Navbar Blog Link (All Pages)**
1. Open each page in browser:
   - index.html
   - about.html
   - services.html
   - therapists.html
   - resources.html
   - contact.html
2. Click "Blog" link in navbar
3. Verify link navigates to blog.html page
4. Check that blog page loads correctly

**Test 2: Footer Blog Link (All Pages)**
1. Scroll to footer on each page
2. Click "Blog" link in footer
3. Verify link navigates to blog.html page

**Test 3: Blog Page Display** (If Full Blog Page Created)
1. Open blog.html directly
2. Verify page displays:
   - Page header with title
   - Blog post grid
   - Featured post (if included)
   - Category navigation (if included)
   - Sidebar (if included)
3. Test "Read More" buttons on blog posts
4. Test category filter functionality

**Test 4: Blog Page Responsiveness**
1. Resize browser to mobile width (375px-414px)
2. Verify blog post grid stacks to single column
3. Test sidebar (if included) moves below content on mobile
4. Repeat for tablet width (768px-1024px)

**Test 5: Placeholder Page** (If Placeholder Created)
1. Open blog.html
2. Verify "Coming Soon" message displays correctly
3. Test newsletter signup form (if included)
4. Test "Return Home" button functionality

**Test 6: Navigation Consistency**
1. Navigate between pages using navbar
2. Verify "Blog" link is consistently:
   - In the same position across all pages
   - Styled correctly (active state on blog.html)
   - Clickable and functional

### Browser Testing
- **Desktop**: Chrome, Firefox, Edge (1920x1080, 1366x768)
- **Tablet**: iPad (768x1024), iPad Pro (1024x1366)
- **Mobile**: iPhone SE (375x667), iPhone 12 (390x844), Samsung Galaxy (360x640)

## Decision Required

Please confirm which option you prefer:
- [ ] **Option A**: Create full Blog page with blog posts
- [ ] **Option B**: Create simple "Coming Soon" placeholder page
- [ ] **Option C**: Remove Blog link entirely (not recommended)

If Option A is selected, please also specify:
- Number of blog posts to display initially
- Blog post topics/content (provide sample posts or will use placeholder content)
- Whether to include sidebar and category filtering
