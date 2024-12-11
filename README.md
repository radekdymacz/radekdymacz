# Modern 3D Interactive Website

A minimalist website featuring an interactive 3D background created with Three.js. The site showcases a modern, clean design with floating geometric shapes and dynamic animations.

## 🚀 Features

- **Interactive 3D Background**
  - Floating geometric shapes (icosahedron, tetrahedron, octahedron)
  - Smooth animations and rotations
  - Responsive to window resizing
  - Uses Three.js for 3D rendering

- **Modern Design Elements**
  - Animated gradient text effects
  - Dark theme with subtle grid patterns
  - Minimalist UI with focus on content
  - Blur effects and modern animations

- **Technical Features**
  - Built with Jekyll for GitHub Pages
  - Responsive design using TailwindCSS
  - Font Awesome integration for icons
  - Custom commit automation script

## 🛠 Project Structure

```
.
├── _layouts/
│   └── default.html      # Main layout with 3D background and styling
├── _config.yml          # Jekyll configuration
├── index.html          # Homepage with animated slogan
├── Gemfile            # Ruby dependencies
└── commit.sh         # Automated git commit script
```

## 💻 Development

### Prerequisites
- Ruby (for Jekyll)
- Node.js (for npm packages)
- Git

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/radekdymacz/radekdymacz.github.io.git
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```

### Making Changes

The site uses several key technologies:

1. **Three.js Setup** (in `_layouts/default.html`):
   - Scene setup with custom camera position
   - Geometric shapes with metallic material
   - Custom lighting with ambient and directional lights

2. **Styling** (in respective files):
   - Gradient animations for text
   - Grid background patterns
   - Modern blur effects for UI elements

3. **Automated Deployment**
   Use the commit script for quick updates:
   ```bash
   ./commit.sh "Your commit message"
   # or just
   ./commit.sh  # uses default message
   ```

## 🎨 Design Choices

- **Color Scheme**
  - Background: Pure black (#000000)
  - Gradient: Blue (#60a5fa) → Purple (#8b5cf6) → Pink (#ec4899)
  - 3D Objects: Indigo with metallic finish

- **Typography**
  - Inter font family for modern look
  - Responsive font sizing
  - Gradient text effects

## 🔧 Maintenance

- Update dependencies regularly:
  ```bash
  bundle update
  ```
- Check GitHub Pages build status after pushes
- Test responsiveness across different devices

## 📝 License

MIT License - feel free to use and modify as needed.