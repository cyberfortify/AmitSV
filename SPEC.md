# Portfolio Website Specification - Senior PMO Engineer

## Project Overview
- **Project Name**: PMO Senior Engineer Portfolio
- **Type**: Single-page personal portfolio website
- **Core Functionality**: Showcase professional background, skills, projects, and contact information for a Senior PMO Engineer
- **Target Users**: Recruiters, hiring managers, potential clients, and professional network

---

## UI/UX Specification

### Layout Structure

**Page Sections:**
1. **Navigation** - Fixed top nav with smooth scroll links
2. **Hero Section** - Full viewport intro with name, title, and CTA
3. **About Section** - Professional summary with key highlights
4. **Experience Section** - Timeline of work experience
5. **Skills Section** - Visual skill representation
6. **Projects Section** - Featured projects/case studies
7. **Contact Section** - Contact form and social links
8. **Footer** - Copyright and quick links

**Responsive Breakpoints:**
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (two columns where applicable)
- Desktop: > 1024px (full layout)

### Visual Design

**Color Palette:**
- Background Primary: `#0a0a0a` (near black)
- Background Secondary: `#141414` (dark gray)
- Surface: `#1a1a1a` (card backgrounds)
- Text Primary: `#f5f5f5` (off-white)
- Text Secondary: `#8a8a8a` (muted gray)
- Accent Primary: `#e8c547` (golden/amber)
- Accent Secondary: `#c9a227` (darker gold)
- Border: `#2a2a2a` (subtle borders)

**Typography:**
- Headings: "Playfair Display", serif - elegant and professional
- Body: "DM Sans", sans-serif - clean and readable
- Font Sizes:
  - H1: 4rem (desktop), 2.5rem (mobile)
  - H2: 2.5rem (desktop), 1.75rem (mobile)
  - H3: 1.5rem
  - Body: 1rem
  - Small: 0.875rem

**Spacing System:**
- Section padding: 100px vertical (desktop), 60px (mobile)
- Container max-width: 1200px
- Card padding: 2rem
- Element gap: 1.5rem

**Visual Effects:**
- Subtle grain texture overlay on background
- Smooth hover transitions (0.3s ease)
- Floating animation on decorative elements
- Fade-in animations on scroll
- Accent color glow effects on interactive elements

### Components

**Navigation:**
- Logo (initials) on left
- Nav links on right (desktop)
- Hamburger menu (mobile)
- Sticky with backdrop blur on scroll

**Hero Section:**
- Large heading with name
- Animated typing effect for title
- Brief tagline
- Two CTA buttons: "View Work" and "Contact Me"
- Decorative geometric shapes

**About Cards:**
- Icon + title + description format
- Hover lift effect
- Grid layout (3 columns desktop, 1 mobile)

**Experience Timeline:**
- Vertical timeline with alternating sides (desktop)
- Single column (mobile)
- Company logo, title, dates, description
- Connecting line with nodes

**Skill Bars:**
- Progress bar visualization
- Category grouping (Technical, Management, Tools)
- Animated fill on scroll

**Project Cards:**
- Image/visual thumbnail
- Title, description, tags
- Hover overlay with "View Details"
- Grid layout (2 columns desktop, 1 mobile)

**Contact Form:**
- Name, Email, Message fields
- Submit button with loading state
- Success/error feedback

**Social Links:**
- Icon-based links (LinkedIn, GitHub, Email)
- Hover color change

---

## Functionality Specification

### Core Features
1. **Smooth Scrolling** - Click nav links to scroll to sections
2. **Mobile Navigation** - Hamburger menu toggle
3. **Scroll Animations** - Elements fade/slide in on viewport entry
4. **Skill Animation** - Progress bars animate when visible
5. **Form Validation** - Client-side validation with feedback
6. **Theme Consistency** - Unified dark theme throughout

### User Interactions
- Nav link click → smooth scroll to section
- Mobile menu toggle → slide in/out menu
- Scroll past threshold → nav becomes opaque
- Form submit → validation check → success message
- Project card hover → overlay appears

### Edge Cases
- Form submission without required fields → show error
- Invalid email format → show specific error
- Very long content in sections → proper truncation/overflow

---

## Acceptance Criteria

1. ✓ Page loads without errors
2. ✓ All sections visible and properly styled
3. ✓ Navigation works (smooth scroll to sections)
4. ✓ Mobile menu toggles correctly
5. ✓ Responsive at all breakpoints (mobile, tablet, desktop)
6. ✓ Animations trigger on scroll
7. ✓ Form validates input before submission
8. ✓ All text is readable and accessible
9. ✓ Color scheme is consistent throughout
10. ✓ No horizontal overflow on any screen size