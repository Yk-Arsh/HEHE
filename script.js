// Continuous background floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 4 + 's';
  heart.style.fontSize = Math.random() * 15 + 15 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);

// Reveal vibe options
function showVibeOptions() {
  document.getElementById('initialBtnGroup').style.display = 'none';
  document.getElementById('vibeOptions').style.display = 'flex';
}

// Burst extra hearts
function heartBurst(emoji = '💖') {
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = emoji;
      heart.style.left = Math.random() * 80 + 10 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.style.fontSize = Math.random() * 20 + 20 + 'px';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 150);
  }
}

// Choice selection logic
function selectVibe(mode) {
  document.getElementById('vibeOptions').style.display = 'none';
  document.getElementById('surpriseMessage').style.display = 'block';
  document.getElementById('giftSection').style.display = 'block';

  const surpriseText = document.getElementById('surpriseText');

  if (mode === 'soft') {
    const softAudio = document.getElementById('softSong');
    if (softAudio) softAudio.play();

    document.body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #feada6 100%)';
    surpriseText.innerHTML = "✨ <b>Soft Romance:</b> May your day be as gentle, beautiful, and light as your soul. Thank you for bringing so much warmth into the world—wishing you pure peace and endless smiles today! 💕";
    heartBurst('✨');

  } else if (mode === 'dark') {
    const darkAudio = document.getElementById('darkSong');
    if (darkAudio) darkAudio.play();

    document.body.style.background = 'linear-gradient(135deg, #0f051d 0%, #290a29 50%, #4a0e17 100%)';
    surpriseText.innerHTML = "🖤 <b>Dark Romance:</b> Distance and quiet moments will never fade what's real. No matter where we are, you hold a deeply special place in my heart that nothing can change. 🥀";
    heartBurst('🖤');
  }

  // Trigger Confetti
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

  function randomInRange(min, max) { return Math.random() * (max - min) + min; }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);

    const particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
}

// Open Gift Handler
function openGift(option) {
  document.getElementById('giftSection').style.display = 'none';
  const giftResult = document.getElementById('giftResult');
  const giftText = document.getElementById('giftText');
  giftResult.style.display = 'block';

  if (option === 1) {
    giftText.innerHTML = "🕊️ <b>Gift #1 Unlocked:</b> A promise of unconditional peace, continuous support, and respect for your space. Always in your corner.";
  } else if (option === 2) {
    giftText.innerHTML = "✨ <b>Gift #2 Unlocked:</b> 1x Ticket for your favorite treat or coffee whenever you're ready to catch up—no pressure, no timelines.";
  } else if (option === 3) {
    giftText.innerHTML = "⭐ <b>Gift #3 Unlocked:</b> One universal wish for your upcoming year to bring everything you've been working for and dreaming of.";
  }

  heartBurst('🎁');
}
