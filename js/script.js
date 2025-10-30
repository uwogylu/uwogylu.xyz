// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Function to show the selected tab content and hide others
function showTab(tabId) {
    // Hide all content sections
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Deactivate all buttons
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected content section
    const selectedContent = document.getElementById(`${tabId}-content`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Activate the clicked button
    const activeButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Trigger content display for the selected tab
    if (tabId === 'info') {
        typeInfoContentAndFadeIn();
    } else if (tabId === 'main') {
        typeMainContentAndFadeIn();
    } else if (tabId === 'contact') {
        typeContactContentAndFadeIn();
    } else if (tabId === 'friends') {
        typeFriendsContentAndFadeIn();
    } else if (tabId === 'psn') {
        typePsnContentAndFadeIn();
    } else if (tabId === 'browser') {
        updateBrowserInfo();
    }
}

// Add event listeners to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        showTab(tabId);
    });
});

// --- Typewriter Effect for Main Title ---
const mainTitleElement = document.getElementById('typewriter-main-title');
const fullMainTitle = 'hello im uwo<3';

// Function to apply typewriter effect to the main title
function typeMainTitle() {
    let i = 0;
    if (mainTitleElement) {
        mainTitleElement.textContent = ''; // Clear initial content
        mainTitleElement.style.animation = 'none'; // Reset animation
        mainTitleElement.style.width = '0'; // Start with 0 width

        const typeWriterInterval = setInterval(() => {
            if (i < fullMainTitle.length) {
                let char = fullMainTitle.charAt(i);
                // Replace '<' with '&lt;' for proper display
                if (char === '<') {
                    mainTitleElement.innerHTML += '&lt;';
                } else {
                    mainTitleElement.textContent += char;
                }
                mainTitleElement.style.width = `${mainTitleElement.scrollWidth}px`;
                i++;
            } else {
                clearInterval(typeWriterInterval);
                // Once typing is done, start the cursor blink animation
                const cursor = document.getElementById('cursor');
                if (cursor) {
                    cursor.style.animation = 'blink 1s infinite';
                }
            }
        }, 100); // Adjust typing speed (milliseconds per character)
    }
}

// Function to get browser information
function getBrowserInfo() {
    const browserInfo = {
        name: 'Unknown',
        version: 'Unknown',
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        cookiesEnabled: navigator.cookieEnabled,
        javaScriptEnabled: true // Always true since this script runs with JS
    };

    // Try to detect browser name and version
    if (navigator.userAgent.indexOf('Firefox') !== -1) {
        browserInfo.name = 'Mozilla Firefox';
        const match = navigator.userAgent.match(/Firefox\/(\d+\.\d+)/);
        if (match) browserInfo.version = match[1];
    } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
        browserInfo.name = 'Google Chrome';
        const match = navigator.userAgent.match(/Chrome\/(\d+\.\d+)/);
        if (match) browserInfo.version = match[1];
    } else if (navigator.userAgent.indexOf('Safari') !== -1) {
        browserInfo.name = 'Apple Safari';
        const match = navigator.userAgent.match(/Version\/(\d+\.\d+)/);
        if (match) browserInfo.version = match[1];
    } else if (navigator.userAgent.indexOf('Edge') !== -1) {
        browserInfo.name = 'Microsoft Edge';
        const match = navigator.userAgent.match(/Edge\/(\d+\.\d+)/);
        if (match) browserInfo.version = match[1];
    } else if (navigator.userAgent.indexOf('Opera') !== -1 || navigator.userAgent.indexOf('OPR') !== -1) {
        browserInfo.name = 'Opera';
        const match = navigator.userAgent.match(/(Opera|OPR)\/(\d+\.\d+)/);
        if (match) browserInfo.version = match[2];
    }

    return browserInfo;
}

// Function to update browser information display
function updateBrowserInfo() {
    const browserInfo = getBrowserInfo();
    
    const browserNameEl = document.getElementById('browser-name');
    const browserVersionEl = document.getElementById('browser-version');
    const userAgentEl = document.getElementById('user-agent');
    const platformEl = document.getElementById('platform');
    const cookiesEnabledEl = document.getElementById('cookies-enabled');
    
    if (browserNameEl) browserNameEl.innerHTML = `Browser: <span class="browser-info-label">${browserInfo.name}</span>`;
    if (browserVersionEl) browserVersionEl.innerHTML = `Version: <span class="browser-info-label">${browserInfo.version}</span>`;
    if (userAgentEl) userAgentEl.innerHTML = `User Agent: <span class="browser-info-label">${browserInfo.userAgent}</span>`;
    if (platformEl) platformEl.innerHTML = `Platform: <span class="browser-info-label">${browserInfo.platform}</span>`;
    if (cookiesEnabledEl) cookiesEnabledEl.innerHTML = `Cookies: <span class="browser-info-label">${browserInfo.cookiesEnabled ? 'Enabled' : 'Disabled'}</span>`;
}

// --- Fade-In for Text Blocks ---
const mainTextContainer = document.getElementById('main-text-container');
const infoTextContainer = document.getElementById('info-text-container');
const contactTextContainer = document.getElementById('contact-text-container');
const friendsTextContainer = document.getElementById('friends-text-container');
const psnTextContainer = document.getElementById('psn-text-container');

// Function to fade in the Info content (now contains about me info)
function typeInfoContentAndFadeIn() {
    // Only run if the Info tab is currently active
    if (document.querySelector('.tab-button.active').getAttribute('data-tab') === 'info') {
        // Start fade-in after a short delay
        setTimeout(() => {
            // Add fade-in class to all paragraphs inside the container
            const paragraphs = infoTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.add('fade-in');
                // Trigger reflow to ensure the animation starts from the beginning
                void p.offsetWidth;
                p.classList.add('appear');
            });
        }, 300); // Delay before starting fade-in
    }
}

// Function to fade in the Main content (now contains system info)
function typeMainContentAndFadeIn() {
    // Only run if the Main tab is currently active
    if (document.querySelector('.tab-button.active').getAttribute('data-tab') === 'main') {
        // Start fade-in after a short delay
        setTimeout(() => {
            // Add fade-in class to all paragraphs inside the container
            const paragraphs = mainTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.add('fade-in');
                // Trigger reflow to ensure the animation starts from the beginning
                void p.offsetWidth;
                p.classList.add('appear');
            });
        }, 300); // Delay before starting fade-in
    }
}

// Function to fade in the Contact content
function typeContactContentAndFadeIn() {
    // Only run if the Contact tab is currently active
    if (document.querySelector('.tab-button.active').getAttribute('data-tab') === 'contact') {
        // Start fade-in after a short delay
        setTimeout(() => {
            // Add fade-in class to all paragraphs inside the container
            const paragraphs = contactTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.add('fade-in');
                // Trigger reflow to ensure the animation starts from the beginning
                void p.offsetWidth;
                p.classList.add('appear');
            });
        }, 300); // Delay before starting fade-in
    }
}

// Function to fade in the Friends content
function typeFriendsContentAndFadeIn() {
    // Only run if the Friends tab is currently active
    if (document.querySelector('.tab-button.active').getAttribute('data-tab') === 'friends') {
        // Start fade-in after a short delay
        setTimeout(() => {
            // Add fade-in class to all paragraphs inside the container
            const paragraphs = friendsTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.add('fade-in');
                // Trigger reflow to ensure the animation starts from the beginning
                void p.offsetWidth;
                p.classList.add('appear');
            });
        }, 300); // Delay before starting fade-in
    }
}

// Function to fade in the PSN content
function typePsnContentAndFadeIn() {
    // Only run if the PSN tab is currently active
    if (document.querySelector('.tab-button.active').getAttribute('data-tab') === 'psn') {
        // Start fade-in after a short delay
        setTimeout(() => {
            // Add fade-in class to all paragraphs inside the container
            const paragraphs = psnTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.add('fade-in');
                // Trigger reflow to ensure the animation starts from the beginning
                void p.offsetWidth;
                p.classList.add('appear');
            });
        }, 300); // Delay before starting fade-in
    }
}

// --- Initialize Effects ---
// Start the main title typewriter effect when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    typeMainTitle();
    // Initialize browser info for the browser tab
    updateBrowserInfo();
    // Start the Info content fade-in effect for the initially active Info tab
    typeInfoContentAndFadeIn();
});

// Re-trigger the content effect when switching to different tabs
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        if (tabId === 'info') {
            // Reset the content before re-fading (system info)
            const paragraphs = infoTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.remove('appear');
                // Trigger reflow to reset the animation state
                void p.offsetWidth;
                p.classList.remove('fade-in');
            });
            // Add a small delay to ensure the content is displayed before fading in
            setTimeout(typeInfoContentAndFadeIn, 10);
        } else if (tabId === 'main') {
            // Reset the content before re-fading (about me info)
            const paragraphs = mainTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.remove('appear');
                // Trigger reflow to reset the animation state
                void p.offsetWidth;
                p.classList.remove('fade-in');
            });
            // Add a small delay to ensure the content is displayed before fading in
            setTimeout(typeMainContentAndFadeIn, 10);
        } else if (tabId === 'contact') {
            // Reset the content before re-fading
            const paragraphs = contactTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.remove('appear');
                // Trigger reflow to reset the animation state
                void p.offsetWidth;
                p.classList.remove('fade-in');
            });
            // Add a small delay to ensure the content is displayed before fading in
            setTimeout(typeContactContentAndFadeIn, 10);
        } else if (tabId === 'friends') {
            // Reset the content before re-fading
            const paragraphs = friendsTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.remove('appear');
                // Trigger reflow to reset the animation state
                void p.offsetWidth;
                p.classList.remove('fade-in');
            });
            // Add a small delay to ensure the content is displayed before fading in
            setTimeout(typeFriendsContentAndFadeIn, 10);
        } else if (tabId === 'psn') {
            // Reset the content before re-fading
            const paragraphs = psnTextContainer.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.classList.remove('appear');
                // Trigger reflow to reset the animation state
                void p.offsetWidth;
                p.classList.remove('fade-in');
            });
            // Add a small delay to ensure the content is displayed before fading in
            setTimeout(typePsnContentAndFadeIn, 10);
        } else if (tabId === 'browser') {
            updateBrowserInfo();
        }
    });
});

// Add interactivity to the fixed cube and player on hover
const fixedCube = document.querySelector('.fixed-cube');
if (fixedCube) {
    fixedCube.addEventListener('mouseenter', () => {
        fixedCube.style.animationPlayState = 'paused';
    });
    
    fixedCube.addEventListener('mouseleave', () => {
        fixedCube.style.animationPlayState = 'running';
    });
}

// Cycle through status display text
function cycleStatusText() {
    const statusDisplay = document.querySelector('.status-display');
    if (statusDisplay) {
        const statuses = [
            "Status: ROGUE △ROGUE △",
            "Status: ROUGEROUGE", 
            "Status: FLOWFLOW"
        ];
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % statuses.length;
            statusDisplay.textContent = statuses[currentIndex];
        }, 2000); // Change every 2 seconds
    }
}

// Add beat-synchronized flashing to elements
function addBeatSyncFlashing() {
    const elements = document.querySelectorAll('.color-changing, .quick-flash, .long-flash');
    
    // Randomly change colors of elements at beat intervals
    setInterval(() => {
        const colorChangingElements = document.querySelectorAll('.color-changing');
        colorChangingElements.forEach(element => {
            // Randomly change color classes to create swapping effect
            const hue = Math.floor(Math.random() * 360);
            element.style.color = `hsl(${hue}, 100%, 50%)`;
        });
    }, 500); // Change colors every half second to simulate beat
}

// Call initialization functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addBeatSyncFlashing();
});

console.log("Page loaded with optimized design and interactive cube");