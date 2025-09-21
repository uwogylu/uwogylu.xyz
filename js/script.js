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
        <p><strong>security token:</strong> <span class="e93-symbol">e93</span></p>
    `;
    container.innerHTML = infoHtml;
}

// Случайные эффекты мерцания для элементов
function addRandomGlitchEffect() {
    const elements = document.querySelectorAll('h1, h2, p, .social-link');
    setInterval(() => {
        if (Math.random() > 0.8) {
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            randomElement.classList.add('glitch');
            setTimeout(() => {
                randomElement.classList.remove('glitch');
            }, 200);
        }
    }, 3000);
}

// Новые функции для версии 3.0
// Функция для создания эффекта "взлома" при клике
function hackEffect(element) {
    element.classList.add('hack-effect');
    setTimeout(() => {
        element.classList.remove('hack-effect');
    }, 500);
}

// Функция для имитации процесса взлома
function simulateHack() {
    const hackContainer = document.getElementById('hack-progress');
    if (!hackContainer) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            hackContainer.innerHTML = '<span class="e93-symbol">e93</span> HACK COMPLETE';
        }
        hackContainer.innerHTML = `HACKING... ${Math.round(progress)}%`;
    }, 200);
}

// Новая функция для анимации при загрузке
function animateOnLoad() {
    const elements = document.querySelectorAll('.content-box, h1, .profile-info, .button-container');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Функция для создания эффекта "битых" элементов
function createBrokenEffect() {
    const brokenElements = document.querySelectorAll('.broken-element');
    brokenElements.forEach(el => {
        setInterval(() => {
            if (Math.random() > 0.7) {
                el.style.transform = `rotate(${Math.random() * 10 - 5}deg) scale(${1 + Math.random() * 0.1 - 0.05})`;
                setTimeout(() => {
                    el.style.transform = 'none';
                }, 100);
            }
        }, 2000);
    });
}

// Функция для создания звуковых эффектов (если разрешены)
function playSystemSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.value = 220;
        gainNode.gain.value = 0.1;
        
        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
        }, 100);
    } catch (e) {
        console.log("Audio not supported");
    }
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
    
    // Добавляем случайные эффекты мерцания
    addRandomGlitchEffect();
    
    // Добавляем эффект печатной машинки для текста на странице disclaimer
    if (path.endsWith('index.html') || path.endsWith('/')) {
        const disclaimerText = document.querySelector('.disclaimer p');
        if (disclaimerText) {
            const originalText = disclaimerText.textContent;
            disclaimerText.textContent = '';
            typeWriter(originalText, disclaimerText, 50);
        }
    }
    
    // Добавляем новые функции для версии 3.0
    // Добавляем эффекты для кнопок
    const buttons = document.querySelectorAll('button, .btn-hover');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            hackEffect(this);
            // Проигрывание звукового эффекта при клике
            playSystemSound();
        });
    });
    
    // Добавляем анимацию при загрузке
    animateOnLoad();
    
    // Добавляем эффекты для новых элементов
    if (path.endsWith('main.html')) {
        // Создаем эффекты для профиля
        const profileInfo = document.querySelector('.profile-info');
        if (profileInfo) {
            profileInfo.addEventListener('mouseenter', () => {
                profileInfo.style.animation = 'pulse 2s infinite';
            });
        }
    }
    
    // Создаем эффекты для элементов
    createBrokenEffect();
});