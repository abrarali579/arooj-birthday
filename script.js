// Data for the website
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

// Game State
let loveMeter = 0;
let unlockedSections = 0;
let tapCount = 0;
const maxLoveMeter = 100;
const tapsToUnlock = 50; // Taps needed to unlock all content
let wishIndex = 0; // Index for birthday messages

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Populate 12 Reasons (initially locked)
    const reasonsGrid = document.getElementById('reasons-grid');
    reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="reason-number">${index + 1}</div>
            <div class="reason-content">
                <h4>${reason.title}</h4>
                <p>${reason.text}</p>
            </div>
        `;
        reasonsGrid.appendChild(card);
    });
    
    // Populate 12 Songs (only first one initially available)
    const songsGrid = document.getElementById('songs-grid');
    songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        if (index > 0) {
            card.classList.add('locked');
        }
        card.innerHTML = `
            <div class="song-icon">${song.icon}</div>
            <h4>${song.title}</h4>
            <p>${song.desc}</p>
        `;
        songsGrid.appendChild(card);
    });
    
    // Populate 12 Memories (initially locked)
    const memoriesGrid = document.getElementById('memories-grid');
    memories.forEach((memory, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item locked';
        item.innerHTML = `
            <img src="${memory.img}" alt="${memory.caption}">
            <div class="gallery-caption">${memory.caption}</div>
        `;
        memoriesGrid.appendChild(item);
    });
    
    // Populate 12 Future Glimpses (initially locked)
    const futureGrid = document.getElementById('future-grid');
    futureGlimpses.forEach((glimpse, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item locked';
        item.innerHTML = `
            <img src="${glimpse.img}" alt="${glimpse.caption}">
            <div class="gallery-caption">${glimpse.caption}</div>
        `;
        futureGrid.appendChild(item);
    });
    
    // Typewriter effect
    const typewriterElement = document.getElementById('typewriter-text');
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < typewriterText.length) {
            typewriterElement.textContent += typewriterText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 30);
        }
    }
    
    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
    
    // Setup game interactions
    setupGame();
    
    // Setup animations
    setupAnimations();
    
    // Setup gift box
    setupGiftBox();
    
    // Setup voice button
    setupVoiceButton();
    
    // Setup wish button (initial message)
    document.getElementById('wish-message').textContent = "Make your first birthday wish!";
    
    // Setup sparkle trail
    setupSparkleTrail();
});

// Setup Game
function setupGame() {
    const tapArea = document.getElementById('tap-area');
    const loveMeterFill = document.getElementById('love-meter-fill');
    const loveMeterText = document.getElementById('love-meter-text');
    
    tapArea.addEventListener('click', function(event) {
        tapCount++;
        loveMeter = Math.min(maxLoveMeter, tapCount * (maxLoveMeter / tapsToUnlock));
        loveMeterFill.style.width = `${loveMeter}%`;
        
        // Update love meter text
        if (loveMeter < 25) {
            loveMeterText.textContent = `Love is growing... ${Math.round(loveMeter)}%`;
        } else if (loveMeter < 50) {
            loveMeterText.textContent = `Love is getting stronger! ${Math.round(loveMeter)}%`;
        } else if (loveMeter < 75) {
            loveMeterText.textContent = `Love is overflowing! ${Math.round(loveMeter)}%`;
        } else if (loveMeter < 100) {
            loveMeterText.textContent = `Almost there! ${Math.round(loveMeter)}%`;
        } else {
            loveMeterText.textContent = `Love is complete! 100%`;
        }
        
        // Create tap effect
        createTapEffect(event);
        
        // Check if we can unlock sections
        checkUnlockProgress();
    });
    
    // Also allow tapping anywhere on the tap area (not just the text)
    tapArea.addEventListener('touchstart', function(e) {
        e.preventDefault();
        tapArea.click();
    });
}

// Check unlock progress
// Function is intentionally kept outside DOMContentLoaded for global access (as needed by makeWish)

// Check unlock progress - Replaces the original function in script.js
function checkUnlockProgress() {
    const unlockMessage = document.getElementById('unlock-message');
    const reasonsSection = document.getElementById('reasons-section');
    const memoriesSection = document.getElementById('memories-section');
    const futureSection = document.getElementById('future-section');
    const songsGrid = document.getElementById('songs-grid');
    const songCards = songsGrid.querySelectorAll('.song-card.locked');
    
    // Level 1: Unlock Reasons
    if (loveMeter >= 20 && !reasonsSection.classList.contains('unlocked')) {
        reasonsSection.classList.remove('locked');
        reasonsSection.classList.add('unlocked');
        unlockMessage.textContent = "🎉 Level 1 Unlocked: 12 Reasons Why I Love You!";
        createCelebrationEffect();
    }
    
    // Level 2: Unlock 3 More Songs
    if (loveMeter >= 40 && songCards.length > 9) {
        for (let i = 0; i < 3; i++) {
            if (songCards[i]) songCards[i].classList.remove('locked');
        }
        unlockMessage.textContent = "🎵 Level 2 Unlocked: 3 More Songs for you!";
        createCelebrationEffect();
    }
    
    // Level 3: Unlock Memories
    if (loveMeter >= 60 && !memoriesSection.classList.contains('unlocked')) {
        memoriesSection.classList.remove('locked');
        memoriesSection.classList.add('unlocked');
        memoriesSection.querySelectorAll('.gallery-item.locked').forEach(item => item.classList.remove('locked'));
        unlockMessage.textContent = "📸 Level 3 Unlocked: 12 Precious Memories!";
        createCelebrationEffect();
    }
    
    // Level 4: Unlock 6 More Songs
    if (loveMeter >= 80 && songCards.length > 3) {
        for (let i = 0; i < 6; i++) {
            if (songCards[i]) songCards[i].classList.remove('locked');
        }
        unlockMessage.textContent = "🎶 Level 4 Unlocked: 6 More Songs for you!";
        createCelebrationEffect();
    }
    
    // Level 5: Final Unlock (Future Glimpses and all remaining songs)
    if (loveMeter >= 100 && !futureSection.classList.contains('unlocked')) {
        futureSection.classList.remove('locked');
        futureSection.classList.add('unlocked');
        futureSection.querySelectorAll('.gallery-item.locked').forEach(item => item.classList.remove('locked'));

        // Unlock all remaining songs
        songsGrid.querySelectorAll('.song-card.locked').forEach(card => {
            card.classList.remove('locked');
        });
        
        unlockMessage.textContent = "🎊 FINAL LEVEL! You've unlocked everything! Happy Birthday, my love!";
        unlockedSections = 5; // Force completion
        createCelebrationEffect();
        
        // Show final celebration
        setTimeout(() => {
            showFinalCelebration();
        }, 1000);
    }
}
function setupAnimations() {
    // Create heart tunnel
    createHeartTunnel();
    
    // Create constellation
    createConstellation();
    
    // Start various animations
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
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random brightness
        const brightness = Math.random() * 0.5 + 0.5;
        star.style.opacity = brightness;
        
        // Store position for connections
        connections.push({x, y});
        
        constellation.appendChild(star);
    }
    
    // Create connections to form "Arooj" (simplified)
    // This is a simplified version - in a real app you'd create proper constellation
    for (let i = 0; i < connections.length - 1; i += 5) {
        const start = connections[i];
        const end = connections[i + 1];
        
        if (end) {
            const dx = end.x - start.x;
            const dy = end.y - start.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only connect nearby stars
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

// Falling Hearts
function startFallingHearts() {
    setInterval(() => {
        createFallingElement('❤️', '#ff4081', 1.5);
    }, 300);
}

// Falling Butterflies
function startFallingButterflies() {
    setInterval(() => {
        createFallingElement('🦋', '#ba68c8', 2);
    }, 500);
}

// Falling Sparkles
function startFallingSparkles() {
    setInterval(() => {
        createFallingElement('✨', '#ffeb3b', 1);
    }, 200);
}

// Floating Balloons
function startFloatingBalloons() {
    const colors = ['#ff4081', '#ba68c8', '#2196f3', '#4caf50', '#ff9800'];
    
    setInterval(() => {
        createBalloon(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000);
}

// Floating Clouds
function startFloatingClouds() {
    setInterval(() => {
        createCloud();
    }, 5000);
}

// Shining Particles
function startShiningParticles() {
    setInterval(() => {
        createShiningParticle();
    }, 100);
}

// Floating Love Notes
function startFloatingLoveNotes() {
    const notes = ['💌', '📝', '💖', '💕'];
    
    setInterval(() => {
        createLoveNote(notes[Math.floor(Math.random() * notes.length)]);
    }, 4000);
}

// Floating Heart Bubbles
function startFloatingHeartBubbles() {
    setInterval(() => {
        createHeartBubble();
    }, 2000);
}

// Fireflies
function startFireflies() {
    setInterval(() => {
        createFirefly();
    }, 1500);
}

// Whisper Messages
function startWhisperMessages() {
    setInterval(() => {
        createWhisperMessage();
    }, 8000);
}

// Helper functions for creating animation elements
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

// Setup Gift Box
function setupGiftBox() {
    const giftBox = document.getElementById('gift-box');
    const giftMessage = document.getElementById('gift-message');
    
    giftBox.addEventListener('click', function() {
        if (!giftBox.classList.contains('open')) {
            giftBox.classList.add('open');
            giftMessage.textContent = "🎁 You've unlocked a special birthday surprise!";
            
            // Create celebration effect
            createCelebrationEffect();
        }
    });
}

// Setup Voice Button
function setupVoiceButton() {
    const voiceBtn = document.getElementById('voice-btn');
    const voiceMessage = document.getElementById('voice-message');
    let nameIndex = 0;
    
    voiceBtn.addEventListener('click', function() {
        const name = loveNames[nameIndex];
        voiceMessage.textContent = `Happy Birthday ${name}!`;
        
        // Cycle to next name
        nameIndex = (nameIndex + 1) % loveNames.length;
        
        // Create audio simulation (in a real app, you'd play actual audio)
        simulateAudioPlay();
        
        // Create celebration effect
        createCelebrationEffect();
    });
}

// Simulate audio play
function simulateAudioPlay() {
    const voiceBtn = document.getElementById('voice-btn');
    voiceBtn.innerHTML = '<i class="fas fa-volume-up"></i> Playing...';
    voiceBtn.style.background = 'linear-gradient(135deg, #4caf50, #2e7d32)';
    
    setTimeout(() => {
        voiceBtn.innerHTML = '<i class="fas fa-play-circle"></i> Play Another Message';
        voiceBtn.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-dark))';
    }, 2000);
}

// Make a Wish - needs to be global because of inline onclick in HTML
function makeWish() {
    const wishMessage = document.getElementById('wish-message');
    const cakeFlame = document.getElementById('cake-flame');
    
    if (cakeFlame.style.display !== 'none') {
        // Blow out the candle
        cakeFlame.style.display = 'none';
        wishMessage.textContent = birthdayMessages[wishIndex];
        
        // Cycle to next message
        wishIndex = (wishIndex + 1) % birthdayMessages.length;
        
        // Create celebration effect
        createCelebrationEffect();
        
        // Reset flame after 3 seconds
        setTimeout(() => {
            cakeFlame.style.display = 'block';
        }, 3000);
    }
}

// Create Tap Effect
function createTapEffect(event) {
    const container = document.getElementById('animations-container');
    const tapX = event.clientX || event.touches[0].clientX;
    const tapY = event.clientY || event.touches[0].clientY;
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = `${tapX - 25}px`;
    ripple.style.top = `${tapY - 25}px`;
    ripple.style.width = '50px';
    ripple.style.height = '50px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'radial-gradient(circle, rgba(255,64,129,0.7) 0%, rgba(255,64,129,0) 70%)';
    ripple.style.zIndex = '1000';
    ripple.style.pointerEvents = 'none';
    
    document.body.appendChild(ripple);
    
    // Animate ripple
    let size = 50;
    const grow = setInterval(() => {
        size += 10;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${tapX - size/2}px`;
        ripple.style.top = `${tapY - size/2}px`;
        ripple.style.opacity = `${1 - size/200}`;
        
        if (size > 200) {
            clearInterval(grow);
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }
    }, 20);
}

// Create Celebration Effect
function createCelebrationEffect() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createFallingElement('✨', '#ffeb3b', 1);
        }, i * 50);
    }
}

// Show Final Celebration
function showFinalCelebration() {
    // Create massive celebration
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const symbols = ['🎉', '🎊', '🎈', '❤️', '✨'];
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            const colors = ['#ff4081', '#ba68c8', '#2196f3', '#4caf50', '#ff9800'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            createFallingElement(symbol, color, 2);
        }, i * 100);
    }
    
    // Show final message
    const unlockMessage = document.getElementById('unlock-message');
    unlockMessage.textContent = "🎂 Happy Birthday, Arooj! You've unlocked all your birthday gifts!";
    unlockMessage.style.fontSize = '1.3rem';
    unlockMessage.style.color = 'var(--primary)';
    unlockMessage.style.fontWeight = '700';
}

// Setup Sparkle Trail
function setupSparkleTrail() {
    let trail = [];
    const maxTrailLength = 20;
    
    document.addEventListener('mousemove', function(e) {
        createSparkle(e.clientX, e.clientY);
    });
    
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 0) {
            createSparkle(e.touches[0].clientX, e.touches[0].clientY);
        }
    });
    
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-trail';
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        
        // Random size
        const size = Math.random() * 15 + 10;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        document.body.appendChild(sparkle);
        
        // Add to trail
        trail.push(sparkle);
        
        // Limit trail length
        if (trail.length > maxTrailLength) {
            const oldSparkle = trail.shift();
            if (oldSparkle.parentNode) {
                oldSparkle.parentNode.removeChild(oldSparkle);
            }
        }
        
        // Fade out sparkles
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
                // Remove from trail
                const index = trail.indexOf(sparkle);
                if (index > -1) {
                    trail.splice(index, 1);
                }
            }
        }, 1000);
    }
}
