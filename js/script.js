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
const fullMainTitle = 'hello, im uwo!';

// Function to apply typewriter effect to the main title
function typeMainTitle() {
    let i = 0;
    mainTitleElement.textContent = ''; // Clear initial content
    mainTitleElement.style.animation = 'none'; // Reset animation
    mainTitleElement.style.width = '0'; // Start with 0 width

    const typeWriterInterval = setInterval(() => {
        if (i < fullMainTitle.length) {
            mainTitleElement.textContent += fullMainTitle.charAt(i);
            mainTitleElement.style.width = `${mainTitleElement.scrollWidth}px`;
            i++;
        } else {
            clearInterval(typeWriterInterval);
            // Once typing is done, start the cursor blink animation
            document.getElementById('cursor').style.animation = 'blink 1s infinite';
        }
    }, 100); // Adjust typing speed (milliseconds per character)
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
    
    document.getElementById('browser-name').innerHTML = `Browser: <span class="browser-info-label">${browserInfo.name}</span>`;
    document.getElementById('browser-version').innerHTML = `Version: <span class="browser-info-label">${browserInfo.version}</span>`;
    document.getElementById('user-agent').innerHTML = `User Agent: <span class="browser-info-label">${browserInfo.userAgent}</span>`;
    document.getElementById('platform').innerHTML = `Platform: <span class="browser-info-label">${browserInfo.platform}</span>`;
    document.getElementById('cookies-enabled').innerHTML = `Cookies: <span class="browser-info-label">${browserInfo.cookiesEnabled ? 'Enabled' : 'Disabled'}</span>`;
}

// --- Fade-In for Text Blocks ---
const mainTextContainer = document.getElementById('main-text-container');
const infoTextContainer = document.getElementById('info-text-container');
const contactTextContainer = document.getElementById('contact-text-container');
const friendsTextContainer = document.getElementById('friends-text-container');

// Function to fade in the Info content
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

// Function to fade in the Main content
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
            // Reset the content before re-fading
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
            // Reset the content before re-fading
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
        } else if (tabId === 'browser') {
            updateBrowserInfo();
        }
    });
});

console.log("Page loaded with modern 2.1 design");