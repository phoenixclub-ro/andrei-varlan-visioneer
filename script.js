
const characters = {
    angry: { name: "Atom Eve", image: "character_images/atom-eve.jpg", quote: "He asked for no pickles" },
    happy: { name: "Invincible", image: "character_images/Invincible.jpg", quote: "To survive you have to BE [TITLE CARD]" },
    sad: { name: "Immortal", image: "character_images/Immortal.jpg", quote: "Where is Omni-Man" },
    neutral: { name: "Omni-Man", image: "character_images/omni-man.jpg", quote: "Are you sure?" },
    surprised: { name: "Conquest", image: "character_images/conquest.jpg", quote: "Stand ready for my arrival worm..." }
  };

  async function initializeWebcam() {
    const video = document.getElementById("webcam");
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  }


  async function analyzeExpression() {
    const emotion = detectEmotion(); 
    assignCharacter(emotion);
  }

 
  function assignCharacter(emotion) {
    const character = characters[emotion];
    if (character) {
      document.getElementById("character-img").src = character.image;
      document.getElementById("character-name").innerText = character.name;
      document.getElementById("character-quote").innerText = character.quote;

      document.getElementById("result").classList.remove("hidden");
    } else {
      alert("No emotion detected!");
    }
  }


  function detectEmotion() {
   
    const emotions = ["angry", "happy", "sad", "neutral", "surprised"];
    return emotions[Math.floor(Math.random() * emotions.length)];
  }


  initializeWebcam();


  document.getElementById("analyze-button").addEventListener("click", analyzeExpression);