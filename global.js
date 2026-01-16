document.addEventListener("DOMContentLoaded", () => {
    // 1. Вставка хедера (если его нет)
    if (!document.querySelector("header")) {
        const headerHTML = `
        <header>
            <h1><a href="index.html">GAMEDEV TOOLS</a></h1>
            <p>DONNYSCOTTINA HUB</p>
        </header>`;
        document.body.insertAdjacentHTML("afterbegin", headerHTML);
    }

    // 2. Вставка футера (если его нет)
    if (!document.querySelector("footer")) {
        const footerHTML = `
        <footer>
            © 2026 DONNYSCOTTINA INC. ALL RIGHTS RESERVED.
        </footer>`;
        document.body.insertAdjacentHTML("beforeend", footerHTML);
    }

    // 3. Яндекс.Метрика
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106284741', 'ym');

    ym(106284741, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true
    });
});