<<<<<<< HEAD
# Akarsha Jain - 3D Portfolio

A beautiful, responsive 3D portfolio website with a soft, formal color scheme designed for female professionals. Features moving 3D boxes in the background and a vertical navigation system.

## Features

- ✨ **3D Background Animation**: Beautiful moving boxes with soft purple color scheme
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Soft Formal Colors**: Professional color palette suitable for female professionals
- 📋 **Vertical Navigation**: Elegant sidebar navigation with smooth scrolling
- 🎯 **Interactive Elements**: Hover effects, smooth transitions, and engaging animations
- ♿ **Accessibility**: High contrast support, reduced motion, and keyboard navigation
- 🌙 **Dark Mode**: Automatic dark mode support based on system preferences
- 🖨️ **Print Friendly**: Optimized for printing

## Sections

1. **Home**: Landing page with introduction and call-to-action
2. **About**: Personal information with profile photo
3. **Education**: Academic background and achievements
4. **Experience**: Work history with timeline layout
5. **Skills**: Technical skills organized by categories
6. **Projects**: Featured projects with descriptions and technologies
7. **Certifications**: Professional certifications and achievements
8. **Contact**: Contact information and social links

## How to Use

### Running the Portfolio

1. **Local Development**: Simply open `index.html` in your web browser
2. **Live Server**: Use a local server for the best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access**: Open `http://localhost:8000` in your browser

### Customization

#### Personal Information
Edit the following sections in `index.html`:
- Name and title in the navigation header
- About section content
- Education details
- Work experience
- Skills and technologies
- Project descriptions
- Contact information

#### Colors
The color scheme is defined in CSS variables in `styles.css`:
```css
:root {
  --primary-color: #8B7EC8;      /* Main purple */
  --secondary-color: #E8E2F3;    /* Light lavender */
  --accent-color: #D4C5F7;       /* Soft purple */
  --text-primary: #4A4A6A;       /* Dark text */
  --text-secondary: #6B6B8A;     /* Secondary text */
  --background-light: #FDF8FC;   /* Light background */
  --background-white: #FFFFFF;   /* White background */
}
```

#### 3D Background
Customize the 3D animation in `script.js`:
- Change colors in the `colors` array
- Adjust the number of boxes by modifying the loop counts
- Modify animation speeds and behaviors

#### Images
Replace `WIT.png` with your own images:
- Profile photo in the About section
- Project images in the Projects section
- University/company logos

## File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript for 3D background and navigation
├── WIT.png            # Profile/placeholder images
├── libs/              # Three.js libraries
│   ├── three.module.js
│   ├── OrbitControls.js
│   ├── dat.gui.module.js
│   └── gsap.min.js
└── README.md          # This file
```

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## Performance

- Optimized 3D rendering with performance considerations
- Responsive images and efficient CSS
- Smooth animations with hardware acceleration
- Mobile-optimized navigation

## Accessibility Features

- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences
- Focus indicators for interactive elements

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your portfolio folder to Netlify
2. Or connect your GitHub repository
3. Your site will be deployed automatically

### Vercel
1. Import your GitHub repository to Vercel
2. Deploy with default settings
3. Your portfolio will be live instantly

## Customization Tips

1. **Add Your Photo**: Replace `WIT.png` with your professional photo
2. **Update Links**: Add your actual social media and project links
3. **Modify Content**: Update all text content to reflect your experience
4. **Add Projects**: Include screenshots and links to your actual projects
5. **Customize Colors**: Adjust the color scheme to match your personal brand
6. **Add Animations**: Enhance with additional CSS animations if desired

## Troubleshooting

### 3D Background Not Loading
- Ensure all Three.js files are in the `libs/` folder
- Check browser console for JavaScript errors
- Try refreshing the page

### Navigation Issues
- Clear browser cache
- Check if JavaScript is enabled
- Ensure all CSS and JS files are properly linked

### Mobile Issues
- Test on different devices and browsers
- Check responsive breakpoints in CSS
- Verify touch interactions work properly

## License

This portfolio template is free to use and modify for personal and commercial projects.

## Credits

- **Three.js**: 3D graphics library
- **Poppins Font**: Google Fonts
- **Icons**: Unicode symbols and emojis

---

**Enjoy your beautiful 3D portfolio!** 🎉 
=======
# Akarsha-s-Portfolio
>>>>>>> c4ecb77f11860f9775613b00f3f815be5395a767
