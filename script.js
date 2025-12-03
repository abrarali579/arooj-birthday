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

// In script.js

function setupVoiceButton() {
    const voiceBtn = document.getElementById('voice-btn');
    const voiceMessage = document.getElementById('voice-message');
    let nameIndex = 0;
    
    // Use 'click' here because the anchor tag must complete its default action (navigation)
    voiceBtn.addEventListener('click', function() {
        // This logic handles the changing message text for fun.
        const name = loveNames[nameIndex];
        voiceMessage.textContent = `Message played for ${name}! (Check the new tab/download)`;
        
        nameIndex = (nameIndex + 1) % loveNames.length;
        
        createCelebrationEffect();
    });
    
    // CRITICAL: Block all default touch actions on the anchor tag to prevent scroll interference.
    voiceBtn.addEventListener('touchstart', (e) => {
        e.stopPropagation(); // Stop the event from bubbling up the DOM
    });
}
// ...
    // Use touchstart for mobile speed
    tapArea.addEventListener('touchstart', (e) => {
        e.preventDefault(); // MANDATORY: BLOCK BROWSER DEFAULT ACTIONS
        handleTap(e);
    });
// ...
// --- GAME STATE ---
let loveMeter = 0;
let unlockedSections = 0;
let tapCount = 0;
let wishIndex = 0;
const maxLoveMeter = 100;
const tapsToUnlock = 50; // Taps needed to unlock all content

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    populateSections();
    startTypewriterEffect();
    setupGame();
    setupGiftBox();
    setupWishButton();
    setupVoiceButton();
    setupAnimations();
    setupSparkleTrail();
});

// --- CORE LOGIC FUNCTIONS ---
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
        } else {
            // Stop the cursor blink after typing is complete
            typewriterElement.style.borderRight = 'none';
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// --- CORE MOBILE GAME LOGIC ---
function setupGame() {
    const tapArea = document.getElementById('tap-area');
    const loveMeterFill = document.getElementById('love-meter-fill');
    const loveMeterText = document.getElementById('love-meter-text');

    let isTapping = false;

    const handleTap = (e) => {
        if (isTapping) return;
        isTapping = true;
        
        // Visual feedback
        tapArea.style.transform = 'scale(0.95)';

        tapCount++;
        loveMeter = Math.min(maxLoveMeter, tapCount * (maxLoveMeter / tapsToUnlock));
        loveMeterFill.style.width = `${loveMeter}%`;

        const progress = Math.round(loveMeter);
        loveMeterText.textContent = `Love is ${progress}% complete. Keep Tapping!`;
        
        const eventData = e.touches && e.touches.length > 0 ? e.touches[0] : e;
        createTapEffect(eventData);
        
        checkUnlockProgress();

        setTimeout(() => {
            isTapping = false;
        }, 50); 
    };

    const resetTapVisual = () => {
        tapArea.style.transform = 'scale(1)';
    };

    // Use touchstart for mobile speed
    tapArea.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleTap(e);
    });

    tapArea.addEventListener('touchend', resetTapVisual);
    tapArea.addEventListener('touchcancel', resetTapVisual);

    // Click for desktop fallback
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
            unlockedSections = index + 1;
            createCelebrationEffect();
        }
    });

    // Final Unlock
    if (loveMeter >= 100 && unlockedSections < sections.length + 1) {
        unlockSection('future-section');
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
            giftBox.removeEventListener('click', openGift); 
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
    
    voiceBtn.addEventListener('click', function(e) {
        // Prevent default navigation if the href is '#'
        // e.preventDefault(); 
        
        const name = loveNames[nameIndex];
        voiceMessage.textContent = `Message played for ${name}! (Check the new tab/download)`;
        
        nameIndex = (nameIndex + 1) % loveNames.length;
        
        createCelebrationEffect();
    });
}

// --- ANIMATION HELPER FUNCTIONS ---

function setupAnimations() {
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

// Create Heart Tunnel
function createHeartTunnel() {
    const tunnelContainer = document.getElementById('heart-tunnel');
    const heartCount = 100;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'tunnel-heart';
        heart.innerHTML = '❤️';
        
        // Position hearts in a 3D spiral
        const angle = (i / heartCount) * Math.PI * 2;
        const radius = 50 + (i * 2);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = i * 10;
        
        heart.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        heart.style.fontSize = `${1 + (i / 20)}rem`;
        heart.style.opacity = `${0.1 + (i / heartCount) * 0.6}`;
        
        tunnelContainer.appendChild(heart);
    }
}

// Create Constellation
function createConstellation() {
    const constellation = document.getElementById('constellation');
    const starCount = 100;
    const connections = [];
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        const brightness = Math.random() * 0.5 + 0.5;
        star.style.opacity = brightness;
        
        connections.push({x, y});
        
        constellation.appendChild(star);
    }
    
    // Create connections (simplified)
    for (let i = 0; i < connections.length - 1; i += 5) {
        const start = connections[i];
        const end = connections[i + 1];
        
        if (end) {
            const dx = end.x - start.x;
            const dy = end.y - start.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 20) {
                const connection = document.createElement('div');
                connection.className = 'star-connection';
                
                connection.style.left = `${start.x}vw`;
                connection.style.top = `${start.y}vh`;
                connection.style.width = `${distance}vw`;
                connection.style.transform = `rotate(${Math.atan2(dy, dx) * 180 / Math.PI}deg)`;
                
                constellation.appendChild(connection);
            }
        }
    }
}

function createFallingElement(symbol, color, sizeMultiplier) {
    const element = document.createElement('div');
    element.className = 'falling';
    element.innerHTML = symbol;
    
    const left = Math.random() * 100;
    element.style.left = `${left}vw`;
    element.style.color = color;
    element.style.fontSize = `${1.5 * sizeMultiplier}rem`;
    
    const duration = Math.random() * 5 + 5;
    element.style.animationDuration = `${duration}s`;
    
    document.getElementById('animations-container').appendChild(element);
    
    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }, duration * 1000);
}

function startFallingHearts() {
    setInterval(() => {
        createFallingElement('❤️', '#ff4081', 1.5);
    }, 300);
}

function startFallingButterflies() {
    setInterval(() => {
        createFallingElement('🦋', '#ba68c8', 2);
    }, 500);
}

function startFallingSparkles() {
    setInterval(() => {
        createFallingElement('✨', '#ffeb3b', 1);
    }, 200);
}

function createBalloon(color) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.background = color;
    balloon.style.left = `${Math.random() * 100}vw`;
    
    const duration = Math.random() * 10 + 20;
    balloon.style.animationDuration = `${duration}s`;
    
    document.getElementById('animations-container').appendChild(balloon);
    
    setTimeout(() => {
        if (balloon.parentNode) {
            balloon.parentNode.removeChild(balloon);
        }
    }, duration * 1000);
}

function startFloatingBalloons() {
    const colors = ['#ff4081', '#ba68c8', '#2196f3', '#4caf50', '#ff9800'];
    
    setInterval(() => {
        createBalloon(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000);
}

function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.top = `${Math.random() * 50 + 10}vh`;
    
    const duration = Math.random() * 20 + 30;
    cloud.style.animationDuration = `${duration}s`;
    
    document.getElementById('animations-container').appendChild(cloud);
    
    setTimeout(() => {
        if (cloud.parentNode) {
            cloud.parentNode.removeChild(cloud);
        }
    }, duration * 1000);
}

function startFloatingClouds() {
    setInterval(() => {
        createCloud();
    }, 5000);
}

function createShiningParticle() {
    const particle = document.createElement('div');
    particle.className = 'shining-particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    document.getElementById('animations-container').appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 2000);
}

function startShiningParticles() {
    setInterval(() => {
        createShiningParticle();
    }, 100);
}

function createLoveNote(symbol) {
    const note = document.createElement('div');
    note.className = 'love-note';
    note.innerHTML = symbol;
    note.style.left = `${Math.random() * 100}vw`;
    
    const duration = Math.random() * 15 + 25;
    note.style.animationDuration = `${duration}s`;
    
    document.getElementById('animations-container').appendChild(note);
    
    setTimeout(() => {
        if (note.parentNode) {
            note.parentNode.removeChild(note);
        }
    }, duration * 1000);
}

function startFloatingLoveNotes() {
    const notes = ['💌', '📝', '💖', '💕'];
    
    setInterval(() => {
        createLoveNote(notes[Math.floor(Math.random() * notes.length)]);
    }, 4000);
}

function createHeartBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'heart-bubble';
    bubble.innerHTML = '❤️';
    bubble.style.left = `${Math.random() * 100}vw`;
    
    const duration = Math.random() * 10 + 15;
    bubble.style.animationDuration = `${duration}s`;
    
    document.getElementById('animations-container').appendChild(bubble);
    
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.parentNode.removeChild(bubble);
        }
    }, duration * 1000);
}

function startFloatingHeartBubbles() {
    setInterval(() => {
        createHeartBubble();
    }, 2000);
}

function createFirefly() {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    firefly.style.left = `${Math.random() * 100}vw`;
    firefly.style.top = `${Math.random() * 100}vh`;
    
    const duration = Math.random() * 10 + 15;
    firefly.style.animationDuration = `${duration}s`;
    
    document.getElementById('animations-container').appendChild(firefly);
    
    setTimeout(() => {
        if (firefly.parentNode) {
            firefly.parentNode.removeChild(firefly);
        }
    }, duration * 1000);
}

function startFireflies() {
    setInterval(() => {
        createFirefly();
    }, 1500);
}

function createWhisperMessage() {
    const message = document.createElement('div');
    message.className = 'whisper-message';
    message.textContent = whisperMessages[Math.floor(Math.random() * whisperMessages.length)];
    message.style.left = `${Math.random() * 70 + 15}vw`;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) {
            message.parentNode.removeChild(message);
        }
    }, 8000);
}

function startWhisperMessages() {
    setInterval(() => {
        createWhisperMessage();
    }, 8000);
}

function createTapEffect(event) {
    const tapX = event.clientX;
    const tapY = event.clientY;
    
    const ripple = document.createElement('div');
    ripple.className = 'tap-ripple';
    ripple.style.left = `${tapX}px`;
    ripple.style.top = `${tapY}px`;
    
    document.body.appendChild(ripple);

    // Animate
    setTimeout(() => {
        ripple.style.width = '150px';
        ripple.style.height = '150px';
        ripple.style.opacity = '0';
    }, 10);
    
    // Clean up
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 400);
}

function createCelebrationEffect() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createFallingElement('✨', '#ffeb3b', 1);
        }, i * 50);
    }
}

function showFinalCelebration() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const symbols = ['🎉', '🎊', '🎈', '❤️', '✨'];
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            const colors = ['#ff4081', '#ba68c8', '#2196f3', '#4caf50', '#ff9800'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            createFallingElement(symbol, color, 2);
        }, i * 100);
    }
    
    const unlockMessage = document.getElementById('unlock-message');
    unlockMessage.textContent = "🎂 Happy Birthday, Arooj! You


    // --- 1. Wish Button Fix ---
function setupWishButton() {
    const wishBtn = document.getElementById('wish-btn');
    const handleWish = (e) => { 
        if (e.type === 'touchend') e.preventDefault(); // CRITICAL: Stop ghost clicks
        makeWish(); 
    };
    
    wishBtn.addEventListener('click', handleWish);
    wishBtn.addEventListener('touchstart', (e) => { e.preventDefault(); makeWish(); });
    // Add touchend listener to prevent subsequent click events on mobile
    wishBtn.addEventListener('touchend', handleWish); 
}

// --- 2. Gift Box Fix ---
function setupGiftBox() {
    const giftBox = document.getElementById('gift-box');
    const giftMessage = document.getElementById('gift-message');
    
    const openGift = (e) => {
        if (e.type === 'touchend') e.preventDefault(); // CRITICAL: Stop ghost clicks
        
        if (!giftBox.classList.contains('open')) {
            // ... (rest of the openGift logic) ...
            giftBox.removeEventListener('click', openGift); 
            giftBox.removeEventListener('touchend', openGift);
        }
    };
    
    giftBox.addEventListener('click', openGift);
    giftBox.addEventListener('touchstart', (e) => { e.preventDefault(); openGift(e); });
    // Add touchend listener to prevent subsequent click events on mobile
    giftBox.addEventListener('touchend', openGift);
}
