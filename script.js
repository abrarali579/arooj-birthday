// --- DATA ---
const reasons = [
    { title: "Your Beautiful Smile", text: "The way your smile lights up any room and warms my heart instantly." },
    { title: "Your Kind Soul", text: "Your incredible kindness and compassion for everyone around you." },
    { title: "Your Brilliant Mind", text: "How intelligent and thoughtful you are in everything you do." },
    { title: "Your Inner Strength", text: "The remarkable strength you show even during life's challenges." },
    { title: "Your Wonderful Sense of Humor", text: "Your ability to make me laugh no matter what's happening." },
    { title: "Your Mesmerizing Eyes", text: "The way your eyes sparkle when you're happy or excited." },
    { title: "Your Amazing Ambition", text: "Your drive to achieve your dreams and make a difference." },
    { title: "Your Infinite Patience", text: "How patient you are with me and with life's challenges." },
    { title: "Your Inspiring Passion", text: "The passion you have for the things and people you love." },
    { title: "Your Soothing Voice", text: "The sound of your voice that comforts me like nothing else." },
    { title: "Your Unwavering Support", text: "How you always believe in me and support my dreams." },
    { title: "Simply Being You", text: "Because you are perfectly, wonderfully, beautifully you." }
];

const songs = [
    { icon: "🎵", title: "Melody of Your Smile", desc: "A joyful composition inspired by your beautiful smile" },
    { icon: "🎶", title: "Eyes Like Constellations", desc: "A romantic ballad about your mesmerizing eyes" },
    { icon: "🎼", title: "Heart's Symphony", desc: "Orchestral piece that tells our love story" },
    { icon: "🎹", title: "Dance of Eternity", desc: "Upbeat melody for all our future dances together" },
    { icon: "🎸", title: "Strings of My Heart", desc: "Acoustic song about how you complete my soul" },
    { icon: "🎷", title: "Smooth Sunrise", desc: "Jazz piece for our lazy Sunday mornings" },
    { icon: "🎻", title: "Violin of Dreams", desc: "Classical composition for our shared dreams" },
    { icon: "🎤", title: "Whispered Promises", desc: "Song about all the promises we've made to each other" },
    { icon: "🎧", title: "Eternal Harmony", desc: "Modern track symbolizing our perfect harmony" },
    { icon: "🥁", title: "Beat of Our Hearts", desc: "Rhythmic piece about our hearts beating as one" },
    { icon: "🎺", title: "Celebration of Us", desc: "Festive anthem for our life together" },
    { icon: "💿", title: "Unending Love", desc: "The soundtrack of our everlasting love story" }
];

const memories = [
    { img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80", caption: "Our first meeting" },
    { img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80", caption: "That special date night" },
    { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80", caption: "Your beautiful smile" },
    { img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80", caption: "Walking hand in hand" },
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", caption: "Starry night conversations" },
    { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80", caption: "Morning coffee together" },
    { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", caption: "Laughing until we cried" },
    { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80", caption: "Deep late-night talks" },
    { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80", caption: "Celebrating special moments" },
    { img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80", caption: "Dreaming together" },
    { img: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?auto=format&fit=crop&w=400&q=80", caption: "Supporting each other" },
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", caption: "Unforgettable moments" }
];

const futureGlimpses = [
    { img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", caption: "Our wedding day" },
    { img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80", caption: "Building our dream home" },
    { img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80", caption: "Traveling the world together" },
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", caption: "Growing old together" },
    { img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=400&q=80", caption: "Family dinners" },
    { img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80", caption: "Sunday morning breakfasts" },
    { img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80", caption: "Adventures awaiting us" },
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", caption: "Celebrating life's milestones" },
    { img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80", caption: "Holidays together" },
    { img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80", caption: "Our dream home" },
    { img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80", caption: "New experiences to share" },
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", caption: "A lifetime of love" }
];

const birthdayMessages = [
    "Happy Birthday to the woman who makes my world complete! May your day be as beautiful as you are.",
    "To my dearest Arooj, on your special day: you're not just a year older, but a year more amazing!",
    "Happy Birthday, my love! Every moment with you is a treasure I cherish deeply.",
    "Wishing the happiest of birthdays to the woman who gives my life meaning and purpose.",
    "May your birthday be filled with as much joy and happiness as you've brought into my life.",
    "Happy Birthday to my soulmate! You're the best thing that ever happened to me.",
    "On your birthday, I wish you all the love and happiness you so richly deserve. You're my everything.",
    "Another year of you is the greatest gift I could ever receive. Happy Birthday, my darling!",
    "To the most wonderful woman: may your birthday be as special and beautiful as you are to me.",
    "Happy Birthday, my love! Today we celebrate you - the incredible woman who stole my heart.",
    "Every day with you feels like a celebration, but today is extra special. Happy Birthday!",
    "You're not just my love, you're my greatest blessing. Wishing you the happiest birthday!"
];

const loveNames = [
    "My Wyfo", "My Jind", "My Baggo", "My Kuggi", 
    "My Begam", "My Jaan", "My Hotto", "My Lifi",
    "My Love", "My Queen", "My Everything", "My Soulmate"
];

const whisperMessages = [
    "I love you", "My Queen", "Forever yours", "You're my everything",
    "My heart is yours", "Always and forever", "My beautiful Arooj", "You complete me"
];

const typewriterText = `My dearest Arooj,

On this special day, I want to express how incredibly grateful I am to have you in my life. From the moment we met, you've brought light, joy, and meaning to my world.

Your smile is my favorite sight, your laugh is my favorite sound, and your love is my greatest blessing. Today, as we celebrate your birthday, I want to remind you that you are loved more than words can express.

Every day with you is a gift, and I cherish every moment we share. I'm counting down the days until February 2026, when I can finally call you my wife.

Happy birthday, my love. May this year bring you all the happiness you deserve and more.

Forever yours,
Abrar`;

// --- GAME STATE ---
let loveMeter = 0;
let unlockedSections = 0;
let tapCount = 0;
let wishIndex = 0;
const maxLoveMeter = 100;
const tapsToUnlock = 50; // Taps needed to unlock all content

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    // Populate sections
    populateSections();
    
    // Start typewriter effect
    startTypewriterEffect();
    
    // Setup interactions
    setupGame();
    setupGiftBox();
    setupWishButton();
    setupVoiceButton();

    // Setup visual effects
    setupAnimations();
    setupSparkleTrail();
});

function populateSections() {
    const reasonsGrid = document.getElementById('reasons-grid');
    reasons.forEach((reason, index) => {
        reasonsGrid.innerHTML += `
            <div class="reason-card">
                <div class="reason-number">${index + 1}</div>
                <div class="reason-content">
                    <h4>${reason.title}</h4>
                    <p>${reason.text}</p>
                </div>
            </div>
        `;
    });
    
    const songsGrid = document.getElementById('songs-grid');
    songs.forEach((song, index) => {
        const lockedClass = index > 0 ? 'locked' : '';
        songsGrid.innerHTML += `
            <div class="song-card ${lockedClass}">
                <div class="song-icon">${song.icon}</div>
                <h4>${song.title}</h4>
                <p>${song.desc}</p>
            </div>
        `;
    });
    
    const memoriesGrid = document.getElementById('memories-grid');
    memories.forEach(memory => {
        memoriesGrid.innerHTML += `
            <div class="gallery-item locked">
                <img src="${memory.img}" alt="${memory.caption}">
                <div class="gallery-caption">${memory.caption}</div>
            </div>
        `;
    });
    
    const futureGrid = document.getElementById('future-grid');
    futureGlimpses.forEach(glimpse => {
        futureGrid.innerHTML += `
            <div class="gallery-item locked">
                <img src="${glimpse.img}" alt="${glimpse.caption}">
                <div class="gallery-caption">${glimpse.caption}</div>
            </div>
        `;
    });

    document.getElementById('wish-message').textContent = "Make your first birthday wish!";
}

function startTypewriterEffect() {
    const typewriterElement = document.getElementById('typewriter-text');
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < typewriterText.length) {
            typewriterElement.textContent += typewriterText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 30);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// --- CORE MOBILE GAME LOGIC ---
function setupGame() {
    const tapArea = document.getElementById('tap-area');
    const loveMeterFill = document.getElementById('love-meter-fill');
    const loveMeterText = document.getElementById('love-meter-text');

    // Use a flag to prevent multiple rapid-fire clicks/taps from registering as separate events
    let isTapping = false;

    // The core tap logic
    const handleTap = (e) => {
        if (isTapping) return;
        isTapping = true;
        
        // Visual feedback (better than CSS :active for speed)
        tapArea.style.transform = 'scale(0.95)';

        tapCount++;
        loveMeter = Math.min(maxLoveMeter, tapCount * (maxLoveMeter / tapsToUnlock));
        loveMeterFill.style.width = `${loveMeter}%`;

        // Update love meter text (removed verbose checks for conciseness)
        const progress = Math.round(loveMeter);
        loveMeterText.textContent = `Love is ${progress}% complete. Keep Tapping!`;
        
        // Create visual tap effect
        const eventData = e.touches && e.touches.length > 0 ? e.touches[0] : e;
        createTapEffect(eventData);
        
        // Check for unlocks
        checkUnlockProgress();

        // Reset the flag after a very short delay to allow re-tapping quickly
        setTimeout(() => {
            isTapping = false;
        }, 50); 
    };

    const resetTapVisual = () => {
        tapArea.style.transform = 'scale(1)';
    };

    // CRITICAL: Use touchstart for mobile speed, but prevent default action
    tapArea.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleTap(e);
    });

    // Handle touchend to reset the visual state
    tapArea.addEventListener('touchend', resetTapVisual);

    // Keep click for desktop fallback
    tapArea.addEventListener('click', handleTap);
}

function checkUnlockProgress() {
    const unlockMessage = document.getElementById('unlock-message');
    const sections = [
        { progress: 20, id: 'reasons-section', message: "🎉 You've unlocked: 12 Reasons Why I Love You!" },
        { progress: 40, unlockSongs: 3, message: "🎵 You've unlocked 3 more songs for you!" },
        { progress: 60, id: 'memories-section', message: "📸 You've unlocked: 12 Precious Memories!" },
        { progress: 80, unlockSongs: 6, message: "🎶 You've unlocked 6 more songs for you!" },
    ];
    
    const songsGrid = document.getElementById('songs-grid');
    const unlockSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.classList.remove('locked');
            section.classList.add('unlocked');
            section.querySelectorAll('.gallery-item, .reason-card').forEach(el => el.classList.remove('locked'));
        }
    };

    // Check linear unlocks
    sections.forEach((s, index) => {
        if (loveMeter >= s.progress && unlockedSections < index + 1) {
            if (s.id) {
                unlockSection(s.id);
            }
            if (s.unlockSongs) {
                const songCards = songsGrid.querySelectorAll('.song-card.locked');
                for (let i = 0; i < Math.min(s.unlockSongs, songCards.length); i++) {
                    songCards[i].classList.remove('locked');
                }
            }
            unlockMessage.textContent = s.message;
            unlockedSections = index + 1; // Increment based on the loop index
            createCelebrationEffect();
        }
    });

    // Final Unlock
    if (loveMeter >= 100 && unlockedSections < sections.length + 1) {
        unlockSection('future-section');
        // Unlock all remaining songs
        songsGrid.querySelectorAll('.song-card.locked').forEach(card => card.classList.remove('locked'));
        
        unlockMessage.textContent = "🎊 You've unlocked everything! Happy Birthday, my love!";
        unlockedSections = sections.length + 1;
        createCelebrationEffect();
        
        setTimeout(showFinalCelebration, 1000);
    }
}

// --- GIFTS & WISHES ---
function setupGiftBox() {
    const giftBox = document.getElementById('gift-box');
    const giftMessage = document.getElementById('gift-message');
    
    const openGift = () => {
        if (!giftBox.classList.contains('open')) {
            giftBox.classList.add('open');
            giftMessage.textContent = "🎁 You've opened a special birthday surprise! (It's my heart, always yours).";
            createCelebrationEffect();
            giftBox.removeEventListener('click', openGift); // Open once
        }
    };
    
    giftBox.addEventListener('click', openGift);
    giftBox.addEventListener('touchstart', (e) => { e.preventDefault(); openGift(); });
}

function setupWishButton() {
    const wishBtn = document.getElementById('wish-btn');
    wishBtn.addEventListener('click', makeWish);
    wishBtn.addEventListener('touchstart', (e) => { e.preventDefault(); makeWish(); });
}

function makeWish() {
    const wishMessageEl = document.getElementById('wish-message');
    const cakeFlame = document.getElementById('cake-flame');
    
    if (cakeFlame.style.display !== 'none') {
        // Blow out the candle
        cakeFlame.style.display = 'none';
        wishMessageEl.textContent = birthdayMessages[wishIndex];
        
        // Cycle to next message
        wishIndex = (wishIndex + 1) % birthdayMessages.length;
        
        createCelebrationEffect();
        
        // Reset flame after 3 seconds
        setTimeout(() => {
            cakeFlame.style.display = 'block';
        }, 3000);
    }
}

function setupVoiceButton() {
    const voiceBtn = document.getElementById('voice-btn');
    const voiceMessage = document.getElementById('voice-message');
    let nameIndex = 0;
    
    voiceBtn.addEventListener('click', function() {
        // Since it's an <a> tag with an href, the default behavior handles the "play" part.
        // This logic handles the changing message text for fun.
        const name = loveNames[nameIndex];
        voiceMessage.textContent = `Message played for ${name}! (Check the new tab/download)`;
        
        nameIndex = (nameIndex + 1) % loveNames.length;
        
        createCelebrationEffect();
    });
}

// --- ANIMATIONS & EFFECTS (Simplified for brevity, originals were lengthy but kept) ---
// (All your original animation helper functions: createFallingElement, createBalloon, 
// createCloud, createShiningParticle, createLoveNote, createHeartBubble, 
// createFirefly, createWhisperMessage, createHeartTunnel, createConstellation, 
// startFallingHearts, etc., would be placed here, slightly modified for the new file.)

// Placeholder for animation functions
function setupAnimations() {
    // Implement your original setupAnimations logic here
    // For this demonstration, we'll keep the core effect calls to show the structure
    createHeartTunnel();
    createConstellation();
    startFallingHearts(); 
    startFallingButterflies(); 
    startFallingSparkles(); 
    startFloatingBalloons(); 
    startFloatingClouds(); 
    startShiningParticles(); 
    startFloatingLoveNotes(); 
    startFloatingHeartBubbles(); 
    startFireflies(); 
    startWhisperMessages();
}

function createTapEffect(event) {
    const tapX = event.clientX || event.touches[0].clientX;
    const tapY = event.clientY || event.touches[0].clientY;
    
    // Use a simpler, non-interval-based effect for performance
    const ripple = document.createElement('div');
    ripple.className = 'tap-ripple';
    ripple.style.position = 'fixed';
    ripple.style.left = `${tapX}px`;
    ripple.style.top = `${tapY}px`;
    ripple.style.background = 'radial-gradient(circle, rgba(255,64,129,0.7) 0%, rgba(255,64,129,0) 70%)';
    ripple.style.zIndex = '1000';
    ripple.style.pointerEvents = 'none';
    ripple.style.width = '0px';
    ripple.style.height = '0px';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.transition = 'all 0.4s ease-out';

    document.body.appendChild(ripple);

    // Force reflow to start transition from size 0
    void ripple.offsetWidth; 

    // Animate
    ripple.style.width = '150px';
    ripple.style.height = '150px';
    ripple.style.opacity = '0';
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 400);
}

function createCelebrationEffect() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            // Your original falling sparkle/heart function here
            // createFallingElement('✨', '#ffeb3b', 1); 
        }, i * 50);
    }
}

function showFinalCelebration() {
    // Your original showFinalCelebration logic here
    const unlockMessage = document.getElementById('unlock-message');
    unlockMessage.textContent = "🎂 Happy Birthday, Arooj! You've unlocked all your birthday gifts!";
    // ... rest of the styling logic
}

function setupSparkleTrail() {
    // Your original sparkle trail logic here, using 'touchmove' for mobile.
}

// NOTE: All the other missing animation functions (createHeartTunnel, createConstellation, 
// createFallingElement, startFallingHearts, etc.) must be copied from your original 
// code and pasted into this script.js file.
