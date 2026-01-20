// Universal Footer
document.addEventListener('DOMContentLoaded', () => {
    // Check if footer already exists
    if (document.querySelector('.site-footer')) return;

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-col">
                <h4>🎮 GameDev Tools</h4>
                <p>Free browser-based tools for game developers.</p>
                <p>100% Client-side processing.</p>
            </div>
            <div class="footer-col">
                <h4>Tools</h4>
                <ul class="footer-links">
                    <li><a href="/gamedev-tools/palette-reducer.html">Palette Reducer</a></li>
                    <li><a href="/gamedev-tools/paletteremapper.html">Palette Remapper</a></li>
                    <li><a href="/gamedev-tools/ui-theme-generator.html">UI Theme Generator</a></li>
                    <li><a href="/gamedev-tools/pixelart.html">Pixel Art Editor</a></li>
                    <li><a href="/gamedev-tools/spritesheet.html">Spritesheet Maker</a></li>
                    <li><a href="/gamedev-tools/sfx.html">SFX Generator</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Links</h4>
                <ul class="footer-links">
                    <li><a href="https://github.com/Donnyscottina/gamedev-tools" target="_blank">GitHub Repository</a></li>
                    <li><a href="https://github.com/Donnyscottina" target="_blank">Author Profile</a></li>
                    <li><a href="/gamedev-tools/">Home</a></li>
                    <li><a href="/gamedev-tools/blog.html">Blog</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2026 GameDev Tools • Made with ❤️ for indie devs</p>
        </div>
    `;
    
    document.body.appendChild(footer);
});