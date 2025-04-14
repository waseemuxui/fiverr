# Fiverr X Reloader – Auto Refresh Tool for Fiverr Sellers
with enhancement 

**Website:** [https://fiverrxreloader.netlify.app](https://fiverrxreloader.netlify.app)  
**Tagline:** *Keep your Fiverr dashboard active 24/7 and never miss a gig!*

---
an Exepet level Open source Fiverr Auto Reload like Free Relo

## 📌 Project Overview

**Fiverr X Reloader** is a professional, React-based auto-refresh tool built specifically for Fiverr sellers. It ensures that your Fiverr dashboard remains active around the clock by reloading the page at randomized intervals—mimicking natural user behavior to avoid detection. With a sleek, mobile-optimized UI, a smooth splash screen, and a live countdown timer, this tool helps boost your online presence and productivity on Fiverr.

---

## 🚀 Key Features

- **Auto-Refresh with Randomization:**  
  Automatically reloads your Fiverr dashboard at randomized intervals (±20% variation) to simulate natural user activity and keep you active on Fiverr 24/7.

- **Live Countdown Timer:**  
  Displays a real-time countdown showing the seconds until the next refresh, ensuring you always know when the next update occurs.

- **Smooth Splash Screen:**  
  Features a full-screen, mobile-optimized splash screen using a high-quality `intro.gif` with a smooth fade-out transition.

- **Customizable Settings:**  
  Easily configure your Fiverr dashboard URL and adjust the base refresh interval (in minutes) to suit your workflow.

- **Minimize/Expand Dashboard View:**  
  Toggle between a full and minimized view of the Fiverr dashboard iframe for enhanced usability.

- **PWA Support:**  
  Fully configured as a Progressive Web App (PWA) with a custom manifest and favicon for improved mobile experience.

---

## 🛠️ Technologies Used

- **React.js:** Frontend framework
- **Create React App:** Application scaffolding and build tool
- **JavaScript & CSS:** Core programming and styling
- **Netlify:** Deployment platform

---

## 📂 Project Structure

```
FiverrXReloader/
├── public/
│   ├── index.html            # Main HTML file with favicon and title set to "Fiverr Reloader"
│   ├── manifest.json         # PWA configuration with logo.png icons
│   ├── intro.gif             # High-quality splash screen animation (full-screen)
│   ├── logo.png              # Main app icon (favicon; used in the manifest)
│   └── logo1.png             # Header logo (displayed in the app header)
├── src/
│   ├── App.js                # Main React component (splash screen, settings, countdown timer, iframe, etc.)
│   ├── App.css               # Global styles for the app
│   └── index.js              # React entry point
└── README.md                 # This documentation file
```

---

## 🖥️ Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MuzamilChouhan/fiverrxreloader.git
   cd fiverrxreloader
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   ```

   The app will run at [http://localhost:3000](http://localhost:3000).

4. **Build for Production:**

   ```bash
   npm run build
   ```

5. **Deploy to Netlify:**

   Deploy the production build using Netlify CLI:

   ```bash
   netlify deploy --prod
   ```

   Alternatively, connect your GitHub repository to Netlify for continuous deployment.

---

## 🛠️ Configuration

- **Favicon & App Icon:**  
  Replace `public/logo.png` with your custom app icon. This image is used as the favicon (in `index.html` and `manifest.json`) and represents your app on mobile devices and browsers.

- **Header Logo:**  
  Replace `public/logo1.png` with your desired header logo. This logo is displayed in the app header alongside the title "Fiverr Reloader."

- **Splash Screen Animation:**  
  Customize `public/intro.gif` to modify the splash screen intro. The splash screen is designed to be mobile-optimized and covers the entire viewport with a smooth fade-out effect.

- **Base Refresh Interval:**  
  Adjust the default refresh interval (in minutes) directly via the app settings in the UI.

---

## 📛 How It Works

1. **Splash Screen Transition:**  
   On launch, a full-screen splash screen displays `intro.gif` with a smooth fade-out animation, providing a polished introduction on both mobile and desktop.

2. **Header & Branding:**  
   The header features your custom header logo (`logo1.png` at a fixed 40px width) alongside the title "Fiverr Reloader." The favicon is set to `logo.png`, ensuring consistent branding across platforms.

3. **Auto-Refresh Functionality:**  
   The app reloads your Fiverr dashboard (loaded via an iframe) at randomized intervals to mimic human behavior. A live countdown timer displays the seconds remaining until the next refresh.

4. **User Controls:**  
   Configure your dashboard URL and refresh interval. Start or stop the auto-refresh process and toggle between full and minimized views of the dashboard as needed.

---

## 👨‍💻 Author

Developed by **Muzamil Chouhan**  
- **GitHub:** [MuzamilChouhan](https://github.com/MuzamilChouhan)  
- **Email:** [muzamil.chohaan@gmail.com](mailto:muzamil.chohaan@gmail.com)

---

## 🚀 Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository.**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Add feature or fix bug"
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request.**

For major changes, please open an issue first to discuss your ideas.

---

## 📌 License

This project is licensed under the [MIT License](LICENSE).

---

## 📌 Conclusion

**Fiverr X Reloader** is a powerful auto-refresh tool designed to help Fiverr sellers maintain an active online presence effortlessly. With advanced features like randomized refresh intervals, a live countdown timer, a smooth mobile-optimized splash screen, and an intuitive, Fiverr-inspired interface, this tool optimizes your workflow and boosts productivity.

Feel free to fork, star, and contribute to this project—let's grow the community together!

Happy Coding! 🎉

