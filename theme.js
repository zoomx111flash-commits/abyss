/* ============================================================
   ABYSS · Theme System
   ============================================================ */

(function(){
  "use strict";

  const THEMES = {
    abyss: {
      name: 'Abyss',
      name_ar: 'الهاوية',
      colors: {
        '--bg': '#030308',
        '--card': 'rgba(10, 10, 18, 0.65)',
        '--card-solid': 'rgba(12, 12, 22, 0.92)',
        '--border': 'rgba(255, 30, 60, 0.25)',
        '--border-hover': 'rgba(255, 30, 60, 0.65)',
        '--primary': '#ff1e3c',
        '--primary-2': '#ff5570',
        '--primary-glow': 'rgba(255, 30, 60, 0.6)',
        '--text': '#ebebf5',
        '--text-dim': '#70707f',
        '--text-mute': '#3a3a48',
        '--success': '#00ff88'
      },
      swatch: '#ff1e3c'
    },
    matrix: {
      name: 'Matrix',
      name_ar: 'المصفوفة',
      colors: {
        '--bg': '#000800',
        '--card': 'rgba(0, 20, 0, 0.65)',
        '--card-solid': 'rgba(0, 25, 5, 0.92)',
        '--border': 'rgba(0, 255, 65, 0.25)',
        '--border-hover': 'rgba(0, 255, 65, 0.65)',
        '--primary': '#00ff41',
        '--primary-2': '#66ff88',
        '--primary-glow': 'rgba(0, 255, 65, 0.6)',
        '--text': '#c8ffc8',
        '--text-dim': '#4a6a4a',
        '--text-mute': '#1a2a1a',
        '--success': '#00ff41'
      },
      swatch: '#00ff41'
    },
    ice: {
      name: 'Ice',
      name_ar: 'الجليد',
      colors: {
        '--bg': '#030810',
        '--card': 'rgba(5, 15, 25, 0.65)',
        '--card-solid': 'rgba(8, 20, 35, 0.92)',
        '--border': 'rgba(0, 200, 255, 0.25)',
        '--border-hover': 'rgba(0, 200, 255, 0.65)',
        '--primary': '#00c8ff',
        '--primary-2': '#66ddff',
        '--primary-glow': 'rgba(0, 200, 255, 0.6)',
        '--text': '#e0f4ff',
        '--text-dim': '#5a7a8a',
        '--text-mute': '#2a3a4a',
        '--success': '#00ff88'
      },
      swatch: '#00c8ff'
    },
    void: {
      name: 'Void',
      name_ar: 'الفراغ',
      colors: {
        '--bg': '#08030d',
        '--card': 'rgba(15, 5, 25, 0.65)',
        '--card-solid': 'rgba(20, 8, 32, 0.92)',
        '--border': 'rgba(180, 0, 255, 0.25)',
        '--border-hover': 'rgba(180, 0, 255, 0.65)',
        '--primary': '#b400ff',
        '--primary-2': '#cc55ff',
        '--primary-glow': 'rgba(180, 0, 255, 0.6)',
        '--text': '#f0e0ff',
        '--text-dim': '#7a5a8a',
        '--text-mute': '#3a2a4a',
        '--success': '#00ff88'
      },
      swatch: '#b400ff'
    },
    stealth: {
      name: 'Stealth',
      name_ar: 'التخفي',
      colors: {
        '--bg': '#0a0a0a',
        '--card': 'rgba(20, 20, 20, 0.65)',
        '--card-solid': 'rgba(25, 25, 25, 0.92)',
        '--border': 'rgba(150, 150, 150, 0.25)',
        '--border-hover': 'rgba(150, 150, 150, 0.65)',
        '--primary': '#a0a0a0',
        '--primary-2': '#c0c0c0',
        '--primary-glow': 'rgba(150, 150, 150, 0.6)',
        '--text': '#e8e8e8',
        '--text-dim': '#808080',
        '--text-mute': '#404040',
        '--success': '#00ff88'
      },
      swatch: '#a0a0a0'
    }
  };

  /* ============================================================
     Get / Set Theme
     ============================================================ */
  function getTheme(){
    return localStorage.getItem('abyss_theme') || 'abyss';
  }

  function setTheme(themeId){
    if (!THEMES[themeId]) return;
    localStorage.setItem('abyss_theme', themeId);
    applyTheme();
  }

  function applyTheme(){
    const themeId = getTheme();
    const theme = THEMES[themeId];
    if (!theme) return;

    // Apply CSS variables to :root
    const root = document.documentElement;
    Object.keys(theme.colors).forEach(function(key){
      root.style.setProperty(key, theme.colors[key]);
    });

    // Update meta theme-color for mobile browsers
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme){
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    metaTheme.content = theme.colors['--bg'];

    // Dispatch event
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: themeId } }));
  }

  /* ============================================================
     Get all themes (for settings page)
     ============================================================ */
  function getAllThemes(){
    return THEMES;
  }

  /* ============================================================
     Initialize
     ============================================================ */
  applyTheme();

  /* ============================================================
     Export
     ============================================================ */
  window.AbyssTheme = {
    get: getTheme,
    set: setTheme,
    apply: applyTheme,
    all: getAllThemes
  };
})();
