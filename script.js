// ==========================================
// Hloo baccha APKAA BIRTHDAYY HN AAJ APKOO PATAA HNN I MISS YOU SO SO SOO MUCHH Meko na apki 24/7 yaad atti rehti hn likee crazyy walii app na mere cutiee hoo ap kite bade hogye ywrr meko to choti wali lara zyda psnd hn.<br><br>`;
// ==========================================

const SOFT_ROMANCE_LETTER = `
✨ <b>Soft Romance Letter</b><br><br>
May your day be as gentle, beautiful, and light as your soul. Thank you for bringing so much warmth into my world. Wishing you pure peace, bright moments, and endless reason to smile today! 💕
`;

const DARK_ROMANCE_LETTER = `
🖤 <b>Dark Romance Letter</b><br><br>
Distance and quiet moments will never fade what's real. No matter where life takes us or how much time passes, you hold a deeply special place in my heart that nothing can ever alter. 🥀
`;

const GIFT_1 = "🕊️ <b>Gift #1:</b> A promise of unconditional peace, continuous support, and total respect for your space. Always quietly in your corner.";
const GIFT_2 = "✨ <b>Gift #2:</b> 1x Ticket for your favorite coffee or dessert whenever you're ready to catch up—no pressure, no timelines.";
const GIFT_3 = "⭐ <b>Gift #3:</b> One big universal wish for your upcoming year to bring everything you've been working so hard for.";

// ==========================================
// core APP LOGIC
// ==========================================

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 4 + 's';
  heart.style.fontSize = Math.random() * 15 + 15 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => { heart.remove(); }, 7000);
}
setInterval(createHeart, 500);

function showVibeOptions() {
  document.getElementById('initialBtnGroup').style.display = 'none';
  document.getElementById('vibeOptions').style.display = 'flex';

  const soft = document.getElementById('softSong');
  const dark = document.getElementById('darkSong');
  if (soft) soft.load();
  if (dark) dark.load();
}

function heartBurst(emoji = '💖') {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = emoji;
      heart.style.left = Math.random() * 80 + 10 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.style.fontSize = Math.random() * 20 + 20 + 'px';
      document.body.appendChild(heart);

      setTimeout(() => { heart.remove(); }, 5000);
    }, i * 150);
  }
}

function selectVibe(mode) {
  const softAudio = document.getElementById('softSong');
  const darkAudio = document.getElementById('darkSong');

  if (softAudio) { softAudio.pause(); softAudio.currentTime = 0; }
  if (darkAudio) { darkAudio.pause(); darkAudio.currentTime = 0; }

  const targetAudio = mode === 'soft' ? softAudio : darkAudio;
  if (targetAudio) {
    targetAudio.play().catch(err => console.log('Audio playback error:', err));
  }

  document.getElementById('vibeOptions').style.display = 'none';
  document.getElementById('surpriseMessage').style.display = 'block';
  document.getElementById('giftSection').style.display = 'block';

  const surpriseText = document.getElementById('surpriseText');

  if (mode === 'soft') {
    document.body.style.background = "linear-gradient(rgba(255, 154, 158, 0.75), rgba(254, 207, 239, 0.75)), url('her-photo.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    surpriseText.innerHTML = SOFT_ROMANCE_LETTER;
    heartBurst('✨');
  } else {
    document.body.style.background = "linear-gradient(rgba(15, 5, 29, 0.85), rgba(74, 14, 23, 0.85)), url('her-photo.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    surpriseText.innerHTML = DARK_ROMANCE_LETTER;
    heartBurst('🖤');
  }

  if (typeof confetti === 'function') {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }
}

function openGift(option) {
  document.getElementById('giftSection').style.display = 'none';
  const giftResult = document.getElementById('giftResult');
  const giftText = document.getElementById('giftText');
  giftResult.style.display = 'block';

  if (option === 1) giftText.innerHTML = GIFT_1;
  else if (option === 2) giftText.innerHTML = GIFT_2;
  else if (option === 3) giftText.innerHTML = GIFT_3;

  heartBurst('🎁');
}

// Allows user to return and select another gift
function resetGiftSelection() {
  document.getElementById('giftResult').style.display = 'none';
  document.getElementById('giftSection').style.display = 'block';
}
