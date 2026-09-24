const DISALLOWED = [
    "dzen.ru",
    "vk.ru",
    "vk.com",
    "rutube.ru",
    "max.ru"
]

function blockLinks() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        const href = link.href.toLowerCase();
        const text = link.href.toLowerCase();

        const isDisallowed = DISALLOWED.some(item => href.includes(item) || text.includes(item));

        if (isDisallowed) {
            link.style.pointerEvents = 'none';
        }
    });
}

blockLinks();

const observer = new MutationObserver(() => blockLinks());
observer.observe(document.body, { childList: true, subtree: true })