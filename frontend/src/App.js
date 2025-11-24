import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HonorsAwards from './components/HonorsAwards';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import SplitText from "./components/reactBits/SplitText/SplitText";
import Aurora from './components/reactBits/Aurora/Aurora';

import './App.css';


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

function App() {
  React.useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || !savedTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Remove Emergent badge if it exists
    const removeEmergentBadge = () => {
      // Remove by ID
      const badgeById = document.getElementById('emergent-badge');
      if (badgeById) {
        badgeById.remove();
      }

      // Remove by href containing emergent
      document.querySelectorAll('a[href*="emergent"]').forEach(el => el.remove());

      // Remove by ID containing emergent
      document.querySelectorAll('[id*="emergent"]').forEach(el => el.remove());

      // Remove by text content
      document.querySelectorAll('a, div, p, span').forEach(el => {
        if (el.textContent && el.textContent.includes('Made with Emergent')) {
          el.remove();
        }
      });

      // Remove fixed positioned elements at bottom right that might be the badge
      document.querySelectorAll('[style*="position: fixed"][style*="bottom"], [style*="position:fixed"][style*="bottom"]').forEach(el => {
        if (el.textContent && (el.textContent.includes('Emergent') || el.textContent.includes('emergent'))) {
          el.remove();
        }
      });
    };



    // Remove immediately
    removeEmergentBadge();

    // Remove after a short delay in case it's added dynamically
    setTimeout(removeEmergentBadge, 100);
    setTimeout(removeEmergentBadge, 500);
    setTimeout(removeEmergentBadge, 1000);

    // Watch for dynamically added badges
    const observer = new MutationObserver(removeEmergentBadge);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (

    <BrowserRouter>
      {/* Arka plan */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none' // Aurora'nın UI etkilememesi için
      }}>
        <Aurora
  colorStops={["#0c0f14", "#241c2b", "#4b2862"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
/>
      </div>

      {/* Uygulama içeriği */}
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/honors-awards" element={<HonorsAwards />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
