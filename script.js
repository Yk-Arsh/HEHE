let currentVibe = 'soft';

function selectVibe(vibe) {
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
      <strong>Soft Romance Letter</strong><br><br>
      Happy Birthday! Even with everything going on, I want you to know how special you are. You bring a kind of warmth and light into people's lives that's hard to find, and today is all about celebrating you and everything that makes you wonderful.
    `;
    secondPhotoBox.style.display = 'none';
    giftSection.style.display = 'block';

  } else if (vibe === 'dark') {
    if (softSong) softSong.pause();
    if (darkSong) darkSong.play().catch(e => console.log("Audio play blocked"));
    
    surpriseText.innerHTML = `
      <strong>Dark Romance Letter</strong><br><br>
      Oh You came here too mommy?? Happyy birthdayy babygurll Btww iff i wass there with you right now i would have ran to you eat your lipstick like an icyy then i wouldd havee kissed you a 100 times each n everytime i would have make sure u get butterflys in your stomach while bitingg your neckk n holdingg your waist in my handd 🪻🖤 like its my personal property (although it is).
      
      <div style="margin-top: 25px; text-align: center;">
        <button onclick="goToPage3()" class="btn-dark" style="padding: 12px; font-size: 0.95rem;">Next Chapter ➡️</button>
      </div>
    `;
    
    const secondImg = secondPhotoBox.querySelector('img');
    if (secondImg) secondImg.src = 'second-photo.jpg';

    secondPhotoBox.style.display = 'block';
    giftSection.style.display = 'block';
  }
}

function openGift(boxNumber) {
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

  if (typeof confetti === 'function') {
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
  }
}

function resetGiftSelection() {
  document.getElementById('giftResult').style.display = 'none';
  document.getElementById('giftSection').style.display = 'block';
}

function goToPage2() {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
}

function goToPage3() {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
  
  if (typeof confetti === 'function') {
    confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
  }
}

function resetVibeSelection() {
  document.getElementById('vibeOptions').style.display = 'flex';
  document.getElementById('vibeHeaderTitle').style.display = 'block';
  document.getElementById('surpriseMessage').style.display = 'none';
  document.getElementById('secondPhotoBox').style.display = 'none';
  document.getElementById('giftSection').style.display = 'none';
  document.getElementById('giftResult').style.display = 'none';
}

function restartExperience() {
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page1').style.display = 'block';

  const soft = document.getElementById('softSong');
  const dark = document.getElementById('darkSong');
  if (soft) soft.pause();
  if (dark) dark.pause();

  resetVibeSelection();
}
