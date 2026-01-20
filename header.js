// Universal Header
document.addEventListener('DOMContentLoaded', () => {
    // Check if header already exists to prevent duplicates
    if (document.querySelector('.site-header')) return;

    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
        <div class="header-container">
            <a href="/gamedev-tools/" class="logo">
                <span class="logo-emoji">🎮</span>
                <span class="logo-text">GameDev Tools</span>
            </a>
            <nav class="main-nav">
                <a href="/gamedev-tools/palette-reducer.html">Palette Reducer</a>
                <a href="/gamedev-tools/paletteremapper.html">Remapper</a>
                <a href="/gamedev-tools/ui-theme-generator.html">UI Theme</a>
                <a href="/gamedev-tools/pixelart.html">Pixel Art</a>
                <a href="/gamedev-tools/spritesheet.html">Spritesheet</a>
                <a href="/gamedev-tools/sfx.html">SFX</a>
            </nav>
            <button class="mobile-menu-btn" aria-label="Toggle menu" onclick="this.classList.toggle('open'); document.querySelector('.main-nav').classList.toggle('mobile-open');">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    `;
    
    // Insert after opening body tag
    document.body.insertBefore(header, document.body.firstChild);

    // Highlight current page
    const currentPath = window.location.pathname;
    const navLinks = header.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check: if current path ends with the href file name
        if (currentPath.endsWith(href) || (href === '/gamedev-tools/' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))) {
            link.classList.add('active');
        }
    });
});
