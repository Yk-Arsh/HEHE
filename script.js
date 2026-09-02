let currentVibe = 'soft';

// Passcode Gate Logic for Page 1 Entrance
function checkPasscode() {
  const input = document.getElementById("passcodeInput").value;
  const errorMsg = document.getElementById("passcodeError");
  
  if (input === "060911") {
    triggerExplosion();
    document.getElementById("passcodeGate").style.display = "none";
    document.getElementById("landingContent").style.display = "block";
  } else {
    errorMsg.style.display = "block";
  }
}

// Floating background elements generator
function createFloatingBackground() {
  const container = document.createElement('div');
  container.className = 'floating-bg-container';
  document.body.appendChild(container);

  const shapes = ['💖', '🌸', '🌹', '✨', '💕', '⭐'];

  setInterval(() => {
    const el = document.createElement('div');
    el.className = 'floating-item';
    el.innerText = shapes[Math.floor(Math.random() * shapes.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = Math.random() * 3 + 4 + 's';
    el.style.fontSize = Math.random() * 1.2 + 1 + 'rem';
    
    container.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 7000);
  }, 400);
}

// Button Click Explosion (Confetti / Flowers & Hearts)
function triggerExplosion() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4e50', '#ff758c', '#ff7eb3', '#f9d423', '#ffffff']
    });
  }
}

function selectVibe(vibe) {
  triggerExplosion();
  currentVibe = vibe;
  const vibeOptions = document.getElementById('vibeOptions');
  const vibeHeader = document.getElementById('vibeHeaderTitle');
  const surpriseMsg = document.getElementById('surpriseMessage');
  const surpriseText = document.getElementById('surpriseText');
  const secondPhotoBox = document.getElementById('secondPhotoBox');
  const giftSection = document.getElementById('giftSection');

  vibeOptions.style.display = 'none';
  vibeHeader.style.display = 'none';
  surpriseMsg.style.display = 'block';

  const softSong = document.getElementById('softSong');
  const darkSong = document.getElementById('darkSong');

  if (vibe === 'soft') {
    if (darkSong) darkSong.pause();
    if (softSong) softSong.play().catch(e => console.log("Audio play blocked"));
    
    surpriseText.innerHTML = `
      <strong>✨ Soft Romance Letter</strong><br><br>
      May your day be as gentle, beautiful, and light as youuhh are Iff i was there right now i would have ran to you hug you so so so tight that You would have said let me go i wouldd have makee you blushh a 10000 timess i love you kiddo 💕
    `;
    
    const secondImg = secondPhotoBox.querySelector('img');
    if (secondImg) secondImg.src = 'second-photo.jpg';

    secondPhotoBox.style.display = 'block';
    giftSection.style.display = 'block';

  } else if (vibe === 'dark') {
    if (softSong) softSong.pause();
    if (darkSong) darkSong.play().catch(e => console.log("Audio play blocked"));
    
    surpriseText.innerHTML = `
      <strong>🖤 Dark Romance Letter</strong><br><br>
      Oh You came here too mommy?? Happyy birthdayy babygurll Btww iff i wass there with you right now i would have ran to you eat your lipstick like an icyy then i wouldd havee kissed you a 100 times each n everytime i would have make sure u get butterflys in your stomach while bitingg your neckk n holdingg your waist in my handd 🪻🖤 like its my personal property (although it is).
    `;
    
    const secondImg = secondPhotoBox.querySelector('img');
    if (secondImg) secondImg.src = 'second-photo.jpg';

    secondPhotoBox.style.display = 'block';
    giftSection.style.display = 'block';
  }
}

function openGift(boxNumber) {
  triggerExplosion();
  const giftResult = document.getElementById('giftResult');
  const giftText = document.getElementById('giftText');
  const giftSection = document.getElementById('giftSection');

  giftSection.style.display = 'none';
  giftResult.style.display = 'block';

  if (currentVibe === 'soft') {
    if (boxNumber === 1) {
      giftText.innerHTML = "🕊️ <strong>Gift Box #1:</strong> A lifetime supply of patience, peace, and someone who will always listen to you when things get heavy.";
    } else if (boxNumber === 2) {
      giftText.innerHTML = "✨ <strong>Gift Box #2:</strong> A safe harbor. No matter how busy things get or where life takes us, you always have a place where you matter completely.";
    } else if (boxNumber === 3) {
      giftText.innerHTML = "⭐ <strong>Gift Box #3:</strong> wantt flowerss ?? 🤩 invite me or dmm";
    }
  } else if (currentVibe === 'dark') {
    if (boxNumber === 1) {
      giftText.innerHTML = "🖤 <strong>Gift Box #1:</strong> Unlimited neck bites, holding you close, and never letting you go.";
    } else if (boxNumber === 2) {
      giftText.innerHTML = "🪻 <strong>Gift Box #2:</strong> Stealing all your lipsticks one kiss at a time.";
    } else if (boxNumber === 3) {
      giftText.innerHTML = "👑 <strong>Gift Box #3:</strong> Being completely yours, no matter where we are.";
    }
  }
}

function resetGiftSelection() {
  document.getElementById('giftResult').style.display = 'none';
  document.getElementById('giftSection').style.display = 'block';
}

function goToPage2() {
  triggerExplosion();
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
  window.scrollTo(0, 0);
}

function goToPage3() {
  triggerExplosion();
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
  window.scrollTo(0, 0);
}

function resetVibeSelection() {
  const soft = document.getElementById('softSong');
  const dark = document.getElementById('darkSong');
  if (soft) soft.pause();
  if (dark) dark.pause();

  document.getElementById('vibeOptions').style.display = 'flex';
  document.getElementById('vibeHeaderTitle').style.display = 'block';
  document.getElementById('surpriseMessage').style.display = 'none';
  document.getElementById('secondPhotoBox').style.display = 'none';
  document.getElementById('giftSection').style.display = 'none';
  document.getElementById('giftResult').style.display = 'none';
}

function restartExperience() {
  triggerExplosion();
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page1').style.display = 'block';

  // Reset back to passcode gate if restarted
  document.getElementById('landingContent').style.display = 'none';
  document.getElementById('passcodeGate').style.display = 'block';
  document.getElementById('passcodeInput').value = '';

  resetVibeSelection();
  window.scrollTo(0, 0);
}

// Live Birthday Countdown Timer
const birthdayTarget = new Date("September 6, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = birthdayTarget - now;

  if (timeDifference > 0) {
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    const timerElement = document.getElementById("countdownDisplay");
    if (timerElement) {
      timerElement.innerHTML = `${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;
    }
  } else {
    const timerElement = document.getElementById("countdownDisplay");
    if (timerElement) {
      timerElement.innerHTML = "🎉 IT'S OFFICIALLY YOUR DAY! 🎉";
    }
  }
}

// Start falling background elements and countdown on load
document.addEventListener('DOMContentLoaded', () => {
  createFloatingBackground();
  setInterval(updateCountdown, 1000);
  updateCountdown();
});
