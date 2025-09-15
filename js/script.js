// Функция для выхода с сайта (редирект на Google)
function exitSite() {
    window.location.href = "https://google.com";
}

// Анимация печатной машинки для текста (ника)
function typeWriter(text, element, speed, callback) {
    let i = 0;
    const textArray = text.split('');
    const initialSpeed = speed;

    function type() {
        if (i < textArray.length) {
            element.innerHTML += textArray[i];
            i++;

            // После первых двух символов увеличиваем скорость
            const currentSpeed = i === 2 ? Math.max(0, speed - 25) : speed;
            setTimeout(type, currentSpeed);
        } else {
            element.classList.add('typewriter-with-cursor');
            if (typeof callback === 'function') callback();
        }
    }

    // Запускаем анимацию
    type();
}

// Функция для определения названия браузера
function getBrowserName() {
    const userAgent = navigator.userAgent;

    if (/Chrome/.test(userAgent) && !/Edge|OPR/.test(userAgent)) {
        return "Chrome";
    }
    if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
        return "Safari";
    }
    if (/Firefox/.test(userAgent)) {
        return "Firefox";
    }
    if (/MSIE|Trident/.test(userAgent)) {
        return "Internet Explorer";
    }
    if (/Edge/.test(userAgent)) {
        return "Edge";
    }
    if (/Opera|OPR/.test(userAgent)) {
        return "Opera";
    }
    return "Unknown";
}

// Функция для отображения информации о браузере
function showBrowserInfo() {
    const container = document.getElementById('browser-details');
    if (!container) return;

    const infoHtml = `
        <p><strong>user agent:</strong> ${navigator.userAgent}</p>
        <p><strong>platform:</strong> ${navigator.platform}</p>
        <p><strong>language:</strong> ${navigator.language}</p>
        <p><strong>cookies enabled:</strong> ${navigator.cookieEnabled}</p>
        <p><strong>screen resolution:</strong> ${screen.width} x ${screen.height}</p>
        <p><strong>color depth:</strong> ${screen.colorDepth} bits</p>
        <p><strong>browser name:</strong> ${getBrowserName()}</p>
    `;

    container.innerHTML = infoHtml;
}

// Инициализация при загрузке документа
document.addEventListener('DOMContentLoaded', () => {
    // Анимация печатной машинки для ника
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        typeWriter('uwogylu', typewriterElement, 200);
    }

    // Проверка URL для отображения информации о браузере
    const path = window.location.pathname;
    if (path.endsWith('browser.html') || path.endsWith('browser')) {
        showBrowserInfo();
    }
});