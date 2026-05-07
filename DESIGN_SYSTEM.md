# 🎨 Visual Design Showcase

## Color Palette

### Primary Gradient
```
From: #5B6CF2 (Primary Blue)
To:   #3D63FF (Accent Blue)

Used for:
- Buttons & CTAs
- Gradient text
- Section highlights
- Icons & badges
```

### Supporting Colors
```
Text Primary:  #1F2937 (Dark Gray)
Text Secondary: #6B7280 (Medium Gray)
Text Light:    #F3F4F6 (Off White)
Divider:       #E5E7EB (Border Gray)
Background:    #FFFFFF (White)
Alt Background: #F9FAFB (Very Light Gray)
```

---

## Typography Scale

### Headings
```
Section Titles (h2)
├─ Size: 48px (md: 56px, lg: 64px)
├─ Weight: 800 (Extra Bold)
├─ Color: Gradient (Primary → Accent)
└─ Line-height: 1.1

Sub Headings (h3)
├─ Size: 24px
├─ Weight: 700 (Bold)
├─ Color: text-gray-900
└─ Line-height: 1.3

Card Titles (h4)
├─ Size: 20px
├─ Weight: 700 (Bold)
└─ Color: text-gray-900

Small Headings
├─ Size: 14px
├─ Weight: 700 (Bold)
├─ Color: text-white/90
└─ Letter-spacing: wide
```

### Body Text
```
Large Paragraphs
├─ Size: 18px
├─ Weight: 400 (Regular)
├─ Color: text-gray-600
└─ Line-height: 1.6

Regular Text
├─ Size: 14px
├─ Weight: 500 (Medium)
├─ Color: text-gray-700
└─ Line-height: 1.5

Small Text
├─ Size: 12px
├─ Weight: 400 (Regular)
├─ Color: text-gray-600
└─ Line-height: 1.4
```

---

## Component Visual Hierarchy

### Statistics Cards
```
┌─────────────────────────────┐
│  Icon (32px)                │  ← Primary color in circle
│  ┌──────────────────┐       │
│  │ 10,000+         │       │  ← Gradient text (4xl)
│  └──────────────────┘       │
│  Businesses                 │  ← Label (lg, bold)
│  Trusted by companies...    │  ← Description (sm, gray)
└─────────────────────────────┘
```

### Integration Cards
```
┌─────────────────────────────┐
│ Payment Gateways      ▶      │  ← Category + Arrow
├─────────────────────────────┤
│ ✓ Stripe              ✓      │  ← Checkmarks
│ ✓ Razorpay                  │
│ ✓ PayPal                    │
│ ✓ Square                    │
├─────────────────────────────┤
│ Learn more        →          │  ← Subtle CTA
└─────────────────────────────┘
```

### Blog Cards
```
┌──────────────────────────────┐
│ 🍽️  Restaurant             │  ← Emoji + Category
│                              │
│ 10 Ways to Optimize...      │  ← Title (lg, bold)
│ Discover proven strategies   │  ← Excerpt
│                              │
│ Calendar  May 10, 2024       │  ← Meta info
│ User     Sarah Johnson       │
│ Clock    5 min read      →   │  ← Read time + Arrow
└──────────────────────────────┘
```

### Pricing Cards
```
┌──────────────────────────┐
│ ★ MOST POPULAR           │  ← Badge (Professional only)
├──────────────────────────┤
│ Professional             │  ← Plan name
│ Ideal for growing...     │  ← Description
│ ₹14,999                  │  ← Price (gradient)
│ per month                │
│ [Start Free Trial]       │  ← CTA Button
├──────────────────────────┤
│ ✓ Up to 50 users        │  ← Feature list
│ ✓ 100 GB storage        │
│ ✓ Advanced analytics    │
│ ✓ Priority support      │
└──────────────────────────┘
```

### FAQ Item (Collapsed)
```
┌─────────────────────────────────────┐
│ What is Codelink?         ▼ (Closed)│
└─────────────────────────────────────┘
```

### FAQ Item (Expanded)
```
┌─────────────────────────────────────┐
│ What is Codelink?         ▲ (Open) │
├─────────────────────────────────────┤
│ Codelink is an enterprise SaaS...  │
│ [Long detailed answer...]          │
└─────────────────────────────────────┘
```

---

## Button Styles

### Primary CTA Button
```
Background: Gradient (Primary → Accent)
Text Color: White
Padding: 16px 32px
Border-radius: 8px
Font-weight: 700
Hover: Scale 1.05 + Shadow glow
Active: Scale 0.95
```

### Secondary Button
```
Background: Light Gray (100)
Text Color: Dark Gray (900)
Padding: 12px 24px
Border-radius: 8px
Font-weight: 600
Hover: Scale 1.02 + Darker background
```

### Icon Button (Social)
```
Background: Light (white/5)
Icon: white/70
Size: 40px
Border-radius: 8px
Hover: Scale 1.1 + Lighter background
```

---

## Spacing System

### Vertical Spacing
```
py-4   →  16px
py-8   →  32px
py-12  →  48px
py-16  →  64px
py-20  →  80px  ← Section padding
```

### Horizontal Spacing
```
px-4   →  16px
px-6   →  24px  ← Container default
px-8   →  32px
```

### Gap/Margins
```
gap-4  →  16px  ← Between items
gap-6  →  24px
gap-8  →  32px
```

---

## Shadow & Depth

### Hover Shadow
```
box-shadow: 0 20px 40px rgba(0,0,0,0.1)
Applied to: Card hovers, button hovers
Transition: 300ms ease
```

### Glow Shadow (CTA Buttons)
```
box-shadow: 0 0 20px rgba(91, 108, 242, 0.5)
Applied to: Primary buttons on hover
Color: Primary blue with transparency
```

### Subtle Shadow
```
box-shadow: 0 1px 2px rgba(0,0,0,0.05)
Applied to: Cards at rest
Transition: Smooth on hover
```

---

## Animation Patterns

### Scroll Reveal
```
Initial: opacity 0, y-axis +20px
On Scroll: opacity 1, y-axis 0
Duration: 0.5-0.6s
Easing: ease-out
Stagger: 0.1s between children
```

### Hover Lift
```
Normal: y-axis 0
Hover: y-axis -5px
Duration: 0.3s
Easing: ease-out
```

### Counter Animation
```
Initial: scale 0
On View: scale 1
Duration: 0.5s with spring
Delay: Staggered by child index
```

### Accordion Toggle
```
Close: height 0, opacity 0
Open: height auto, opacity 1
Duration: 0.3s
Easing: ease-in-out
```

---

## Responsive Grid Examples

### 3-Column Layout
```
desktop (lg):  grid-cols-3
tablet (md):   grid-cols-2
mobile:        grid-cols-1
Gap:           gap-8
```

### 4-Column Layout
```
desktop (lg):  grid-cols-4
tablet (md):   grid-cols-2
mobile:        grid-cols-1
Gap:           gap-6 or gap-8
```

---

## Focus States

### Buttons
```
Focus-visible outline with 2px offset
Color: Primary blue
Border-radius: Matches button
```

### Form Inputs
```
Default: border-gray-200
Focus: border-primary
Transition: 200ms ease
Background: white/10 hover
```

---

## Dark Mode Considerations

### Text Colors for Footer
```
Primary Text: text-white
Secondary Text: text-white/70
Tertiary Text: text-white/60
Hover State: text-white
```

### Backgrounds
```
Primary: text-primary (navy/black)
Gradient Overlay: white/5 to white/10
Icons: text-white/70 hover text-white
```

---

## Accessibility Features

### Contrast Ratios
```
White text on Primary Blue: 4.5:1 (AA)
Dark text on White: 7:1+ (AAA)
Gray text on White: 4.5:1 (AA)
```

### Interactive Elements
```
Minimum touch target: 44px × 44px
Hover area: Visually indicated
Focus states: Visible outline or color change
```

### Semantic HTML
```
<section> for major sections
<h2>, <h3>, <h4> proper hierarchy
<button> for clickable elements
<a> for navigation links
aria-label for icon-only buttons
```

---

## Performance Optimizations

### Animations
```
Use GPU-accelerated properties:
- transform: scale, translateY
- opacity

Avoid:
- left, top, width, height changes
- color gradients on hover (use brightness instead)
```

### Rendering
```
viewport={{ once: true }}
→ Animation only triggers once when element enters view

delayChildren: 0.2
→ Stagger animations to prevent reflow

will-change: transform
→ For frequently animated elements
```

---

## Browser Support

```
Chrome:      Latest + 2 previous versions
Firefox:     Latest + 2 previous versions
Safari:      Latest + 2 previous versions
Edge:        Latest + 2 previous versions

Features:
- Gradients:     Full support
- Transforms:    Full support
- Animations:    Full support
- Grid:          Full support
- Flexbox:       Full support
```

---

**Design System: Modern, Accessible, Performant ✨**
