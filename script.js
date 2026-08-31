// ==========================================
// CUSTOM MESSAGES & GIFTS
// ==========================================

const SOFT_ROMANCE_LETTER = `
✨ <b>Soft Romance Letter</b><br><br>
May your day be as gentle, beautiful, and light as youuhh are Iff i was there right now i would have ran to hug you so so so tight that You would have said let me go i wouldd have makee you blushh a 10000 timess i love you kiddo 💕
`;

const DARK_ROMANCE_LETTER = `
🖤 <b>Dark Romance Letter</b><br><br>
Oh You came heree too mommy?? Happyy birthdayy babygurll Btww iff i wass there with you right now i would have ran to you eat your lipstick like an icyy then i wouldd havee kissed you a 100 times each n everytime i would have make sure u get butterflys in your stomach while bitingg your neckk n holdingg you waist in my handd🌚🖤 like its my personal property (although it is).
`;

// Soft Romance Gifts
const SOFT_GIFT_1 = "🕊️ <b>Gift Box #1:</b> want a dyson? Ayo noo thats 50k";
const SOFT_GIFT_2 = "✨ <b>Gift Box #2:</b> want an iphone? I gott one hehe use mine";
const SOFT_GIFT_3 = "⭐ <b>Gift Box #3:</b> Wantt flowerss baccha?? If yes dmm meh or invite me to roblox";

// Dark Romance Gifts
const DARK_GIFT_1 = "🖤 <b>Gift Box #1:</b> A kiss everynight ayo grow a lil but kiddo 🖤";
const DARK_GIFT_2 = "🌚 <b>Gift Box #2:</b> I Will makee suree to not lett you sleep all night hehe 🌚";
const DARK_GIFT_3 = "🤩 <b>Gift Box #3:</b> A dark choclate dmm mee again or invite mee 🤩";

// Tracks active vibe ('soft' or 'dark')
let currentVibe = 'soft';

// ==========================================
// CORE LOGIC
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

function goToPage2() {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
  heartBurst('✨');
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
  currentVibe = mode;
  const softAudio = document.getElementById('softSong');
  const darkAudio = document.getElementById('darkSong');

  if (softAudio) { softAudio.pause(); softAudio.currentTime = 0; }
  if (darkAudio) { darkAudio.pause(); darkAudio.currentTime = 0; }

  const targetAudio = mode === 'soft' ? softAudio : darkAudio;
  if (targetAudio) {
    targetAudio.play().catch(err => console.log('Audio playback info:', err));
  }

  // Hide vibe choice blocks
  document.getElementById('vibeOptions').style.display = 'none';
  document.getElementById('vibeHeaderTitle').style.display = 'none';

  // Display letter and images
  document.getElementById('surpriseMessage').style.display = 'block';
  document.getElementById('secondPhotoBox').style.display = 'block';
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

function resetVibeSelection() {
  const softAudio = document.getElementById('softSong');
  const darkAudio = document.getElementById('darkSong');
  if (softAudio) { softAudio.pause(); softAudio.currentTime = 0; }
  if (darkAudio) { darkAudio.pause(); darkAudio.currentTime = 0; }

  document.getElementById('surpriseMessage').style.display = 'none';
  document.getElementById('secondPhotoBox').style.display = 'none';
  document.getElementById('giftSection').style.display = 'none';
  document.getElementById('giftResult').style.display = 'none';

  document.getElementById('vibeHeaderTitle').style.display = 'block';
  document.getElementById('vibeOptions').style.display = 'flex';
}

function openGift(option) {
  document.getElementById('giftSection').style.display = 'none';
  const giftResult = document.getElementById('giftResult');
  const giftText = document.getElementById('giftText');
  giftResult.style.display = 'block';

  if (currentVibe === 'soft') {
    if (option === 1) giftText.innerHTML = SOFT_GIFT_1;
    else if (option === 2) giftText.innerHTML = SOFT_GIFT_2;
    else if (option === 3) giftText.innerHTML = SOFT_GIFT_3;
  } else {
    if (option === 1) giftText.innerHTML = DARK_GIFT_1;
    else if (option === 2) giftText.innerHTML = DARK_GIFT_2;
    else if (option === 3) giftText.innerHTML = DARK_GIFT_3;
  }

  heartBurst(currentVibe === 'soft' ? '🎁' : '🖤');
}

function resetGiftSelection() {
  document.getElementById('giftResult').style.display = 'none';
  document.getElementById('giftSection').style.display = 'block';
}
