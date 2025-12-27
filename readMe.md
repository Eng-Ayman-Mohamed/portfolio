# Ayman Mohamed - Portfolio

A modern, responsive portfolio website for a software engineer with dark/light theme, project showcase, and contact form.

![Portfolio Preview](https://img.shields.io/badge/React-Portfolio-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Live Demo
[View Live Portfolio](https://ayman-mohamed.vercel.app) 

## ✨ Features

- 🌓 **Dark/Light Theme** - Toggle with Context API & localStorage persistence
- 📱 **Fully Responsive** - Works on all devices
- 🎨 **Modern UI** - Clean design with smooth animations
- 📁 **Data Separation** - All content in JSON files
- ⚡ **Fast Performance** - Optimized React components
- 📬 **Contact Form** - Functional form with validation

## 🛠️ Tech Stack

- **Frontend**: React 18, CSS Modules
- **State Management**: React Context API
- **Icons**: Font Awesome
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Header/        # Navigation header
│   ├── Hero/          # Introduction section
│   ├── Projects/      # Project showcase
│   ├── Skills/        # Skills & technologies
│   ├── Experience/    # Work & education timeline
│   ├── Contact/       # Contact form
│   ├── Footer/        # Footer with links
│   └── ThemeToggle/   # Theme switcher
├── contexts/          # Theme context
├── data/              # JSON data files
└── styles/            # Global & module CSS
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Eng-Ayman-Mohamed/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Edit your personal information**
Open `src/data/personal.json` and fill in your details:
```json
{
  "email": "your.email@example.com",
  "phone": "+1234567890",
  "socialLinks": [
    {
      "name": "GitHub",
      "url": "https://github.com/yourusername",
      "icon": "fa-github"
    }
  ]
}
```

4. **Add your profile picture** 
Place your photo in `src/data/` as `profile.jpg`

5. **Start the development server**
```bash
npm start
# or
yarn start
```

6. **Open your browser**
Navigate to `http://localhost:3000`

## 📝 Customization

### 1. Update Content
Edit these files in `src/data/`:
- `public.json` - Public information 
- `projects.json` - Your projects
- `skills.json` - Your skills
- `experience.json` - Work & education

### 2. Change Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --accent: #4361ee; /* Primary color */
  --accent-light: #4895ef;
  --bg-primary: #ffffff; /* Light theme */
  --text-primary: #333333;
}
```

### 3. Add Projects
Add to `src/data/projects.json`:
```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "github": "https://github.com/your/project",
  "liveDemo": "https://project-demo.com",
  "icon": "fas fa-project-icon"
}
```

### 4. Add Social Links
Edit `src/data/private.json`:
```json
"socialLinks": [
  {
    "name": "GitHub",
    "url": "https://github.com/yourusername",
    "icon": "fa-github"
  },
  {
    "name": "LinkedIn",
    "url": "https://linkedin.com/in/yourprofile",
    "icon": "fa-linkedin-in"
  }
]
```

## 🏗️ Build for Production

```bash
# Create production build
npm run build
# or
yarn build

# The build files will be in the `build/` folder
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Deploy!

### Deploy to GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

## 🎨 Theme System

The portfolio includes a complete theme system:
- Uses React Context API
- Persists user preference in localStorage
- Smooth transitions between themes
- Accessible toggle button

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayman Mohamed**
- Portfolio: [ayman.dev](https://ayman.dev)
- GitHub: [Eng-Ayman-Mohamed](https://github.com/Eng-Ayman-Mohamed)
- LinkedIn: [ayman-mohamed-abotaha](https://linkedin.com/in/ayman-mohamed-abotaha)

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev)
- [Font Awesome](https://fontawesome.com)
- [CSS Modules](https://github.com/css-modules/css-modules)
- Inspiration from various portfolio designs

## 📞 Support

For support, email [eng.ayman.mohamed.abotaha.kasim@gmail.com](mailto:eng.ayman.mohamed.abotaha.kasim@gmail.com) or open an issue in the GitHub repository.

---

Made with ❤️ by Ayman Mohamed