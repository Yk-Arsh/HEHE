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

function triggerExplosion() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff4e50', '#ff758c', '#ff7eb3', '#f9d423', '#ffffff']
    });
  }
}

function goToPage2() {
  triggerExplosion();
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page3').style.display = 'none';
  window.scrollTo(0, 0);
}

function goToPage3() {
  triggerExplosion();
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
  window.scrollTo(0, 0);
}

function restartExperience() {
  triggerExplosion();
  stopAudio();
  resetVibeSelection();
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
  window.scrollTo(0, 0);
}

function selectVibe(vibe) {
  triggerExplosion();
  stopAudio();

  const surpriseText = document.getElementById('surpriseText');
  const softSong = document.getElementById('softSong');
  const darkSong = document.getElementById('darkSong');

  if (vibe === 'soft') {
    surpriseText.innerHTML = `Happiest Birthday! 🌸<br><br>I hope your day brings you all the peace, gentle warmth, and quiet happiness you deserve. Thank you for being such a beautiful part of my life.`;
    if (softSong) softSong.play().catch(() => {});
  } else if (vibe === 'dark') {
    surpriseText.innerHTML = `Happy Birthday. 🖤<br><br>Even in the distance and quiet, you still hold space in my heart like no one else. Wishing you an unforgettable day.`;
    if (darkSong) darkSong.play().catch(() => {});
  }

  document.getElementById('vibeOptions').style.display = 'none';
  document.getElementById('vibeHeaderTitle').style.display = 'none';
  document.getElementById('surpriseMessage').style.display = 'block';
  document.getElementById('secondPhotoBox').style.display = 'block';
  document.getElementById('giftSection').style.display = 'block';
}

function resetVibeSelection() {
  stopAudio();
  document.getElementById('vibeOptions').style.display = 'flex';
  document.getElementById('vibeHeaderTitle').style.display = 'block';
  document.getElementById('surpriseMessage').style.display = 'none';
  document.getElementById('secondPhotoBox').style.display = 'none';
  document.getElementById('giftSection').style.display = 'none';
  document.getElementById('giftResult').style.display = 'none';
}

function stopAudio() {
  const softSong = document.getElementById('softSong');
  const darkSong = document.getElementById('darkSong');
  if (softSong) { softSong.pause(); softSong.currentTime = 0; }
  if (darkSong) { darkSong.pause(); darkSong.currentTime = 0; }
}

function openGift(boxNumber) {
  triggerExplosion();
  const giftText = document.getElementById('giftText');
  
  if (boxNumber === 1) {
    giftText.innerHTML = "🎁 <b>Gift #1:</b> Unlimited warm birthday wishes and endless peaceful moments! 🕊️";
  } else if (boxNumber === 2) {
    giftText.innerHTML = "🎁 <b>Gift #2:</b> A reminder of how truly special and irreplaceable you are. ✨";
  } else if (boxNumber === 3) {
    giftText.innerHTML = "🎁 <b>Gift #3:</b> A quiet promise that no matter what, I'm always wishing the best for you. ⭐";
  }

  document.getElementById('giftSection').style.display = 'none';
  document.getElementById('giftResult').style.display = 'block';
}

function resetGiftSelection() {
  document.getElementById('giftResult').style.display = 'none';
  document.getElementById('giftSection').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  createFloatingBackground();
});
