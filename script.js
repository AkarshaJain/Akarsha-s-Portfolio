// Bonhomme Paris Style Horizontal Scrolling Portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio initializing...');
    
    // Get DOM elements
    const scenes = document.querySelectorAll('.scene');
    const navDots = document.querySelectorAll('.nav-dot');
    const progressBar = document.querySelector('.progress-bar');
    const mainContainer = document.querySelector('.main-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    let currentScene = 0;
    let isScrolling = false;
    let scrollTimeout;
    
    // Initialize
    updateScene(0);
    updateProgressBar();
    
    // Force initial scene to be visible
    setTimeout(() => {
        scenes[0].classList.add('active');
        updateProgressBar();
    }, 100);
    
    // Update scene visibility
    function updateScene(sceneIndex) {
        scenes.forEach((scene, index) => {
            scene.classList.remove('active');
            if (index === sceneIndex) {
                scene.classList.add('active');
            }
        });
        
        navDots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === sceneIndex) {
                dot.classList.add('active');
            }
        });
        
        // Show scroll indicator only on landing page
        if (sceneIndex === 0) {
            scrollIndicator.classList.add('show');
        } else {
            scrollIndicator.classList.remove('show');
        }
        
        // Force reflow to ensure proper rendering
        mainContainer.offsetHeight;
    }
    
    // Update progress bar
    function updateProgressBar() {
        const progress = (currentScene / (scenes.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
        console.log('Progress:', progress + '%');
    }
    
    // Go to specific scene
    function goToScene(sceneIndex) {
        if (isScrolling || sceneIndex < 0 || sceneIndex >= scenes.length) return;
        
        console.log('Going to scene:', sceneIndex);
        isScrolling = true;
        currentScene = sceneIndex;
        
        // Calculate horizontal scroll position
        const scrollX = sceneIndex * window.innerWidth;
        
        // Update main container transform for horizontal scrolling
        mainContainer.style.transform = `translateX(-${scrollX}px)`;
        
        // Update scenes and navigation
        updateScene(sceneIndex);
        updateProgressBar();
        
        // Reset scrolling flag
        setTimeout(() => {
            isScrolling = false;
        }, 1200);
    }
    
    // Next scene
    function nextScene() {
        if (currentScene < scenes.length - 1) {
            goToScene(currentScene + 1);
        }
    }
    
    // Previous scene
    function prevScene() {
        if (currentScene > 0) {
            goToScene(currentScene - 1);
        }
    }
    
    // Mouse wheel navigation - Bonhomme Paris style
    document.addEventListener('wheel', (e) => {
        // Check if scrolling within projects or experience containers
        const projectsContainer = document.querySelector('.projects-container');
        const timelineContainer = document.querySelector('.timeline-container');
        const educationContainer = document.querySelector('.education-container');
        
        // If scrolling within these containers, allow normal scrolling
        if (projectsContainer && projectsContainer.contains(e.target)) {
            return; // Allow normal scrolling within projects container
        }
        
        if (timelineContainer && timelineContainer.contains(e.target)) {
            return; // Allow normal scrolling within timeline container
        }
        
        if (educationContainer && educationContainer.contains(e.target)) {
            return; // Allow normal scrolling within education container
        }
        
        // If scrolling on the main page, handle horizontal navigation
        e.preventDefault();
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0 && currentScene < scenes.length - 1) {
                nextScene();
            } else if (e.deltaY < 0 && currentScene > 0) {
                prevScene();
            }
        }, 50);
    }, { passive: false });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isScrolling) return;
        
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            e.preventDefault();
            nextScene();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            e.preventDefault();
            prevScene();
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToScene(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToScene(scenes.length - 1);
        }
    });
    
    // Navigation dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToScene(index);
    });
  });

    // Touch/swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartTime = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartTime = Date.now();
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const touchDuration = Date.now() - touchStartTime;
        const diff = touchStartX - touchEndX;
        
        const swipeThreshold = 50;
        const timeThreshold = 300;
        
        if (Math.abs(diff) > swipeThreshold && touchDuration < timeThreshold) {
            if (diff > 0 && currentScene < scenes.length - 1) {
                nextScene();
            } else if (diff < 0 && currentScene > 0) {
                prevScene();
            }
        }
    }, { passive: true });
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
        // Ensure proper initial positioning
        mainContainer.style.transform = 'translateX(0)';
        updateScene(0);
        updateProgressBar();
    }, 500);
    
    // Tabbed Navigation for Projects and Experience
    initializeTabbedNavigation();
    
    console.log('Portfolio initialized successfully!');
});

// Tabbed Navigation Functionality
function initializeTabbedNavigation() {
    // Projects tabs
    const projectTabs = document.querySelectorAll('.project-tab');
    const projectCategories = document.querySelectorAll('.projects-category');
    
    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            // Update active tab
            projectTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active category
            projectCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.getAttribute('data-category') === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
    
    // Experience tabs
    const experienceTabs = document.querySelectorAll('.experience-tab');
    const experienceCategories = document.querySelectorAll('.experience-category');
    
    experienceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            // Update active tab
            experienceTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active category
            experienceCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.getAttribute('data-category') === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
}

// Add CSS for Bonhomme Paris style animations
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 1s ease-in-out;
        overflow-x: hidden;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .scene {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .scene.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .scene-content {
        opacity: 0;
        transform: translateY(100px);
        transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .scene.active .scene-content {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-title, .hero-subtitle, .hero-description {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .scene.active .hero-title {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.3s;
    }
    
    .scene.active .hero-subtitle {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.6s;
    }
    
    .scene.active .hero-description {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.9s;
    }
    
    .scroll-indicator {
        opacity: 0;
        transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .scene.active .scroll-indicator {
        opacity: 1;
        transition-delay: 1.2s;
    }
    
    /* Prevent vertical scrolling */
    html, body {
        overflow-y: hidden;
        overflow-x: hidden;
    }
    
    /* Smooth horizontal transitions */
    .main-container {
        will-change: transform;
    }
`;
document.head.appendChild(style);
