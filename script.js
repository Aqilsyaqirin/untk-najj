<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>For Najlaa</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Sacramento&display=swap" rel="stylesheet">
  <style>
    /* Basic Styling */
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #f9a8d4, #ffcbf2);
      color: #333;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
    }

    h1 {
      font-family: 'Sacramento', cursive;
      font-size: 3.5em;
      color: #ff3366;
      margin: 20px 0;
      animation: fadeInUp 2s ease-out;
    }

    p {
      font-size: 1.2em;
      margin: 10px 0;
      animation: fadeInUp 2s ease-out;
    }

    /* Circular Main Picture */
    .main-picture {
      width: 250px;  /* Set a fixed width */
      height: 250px; /* Set a fixed height to make it a circle */
      object-fit: cover; /* Ensure the image covers the circle area */
      border-radius: 50%; /* This makes the image circular */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
      margin-top: 20px;
    }

    .main-picture:hover {
      transform: scale(1.05);
    }

    /* Button Styling */
    .love-button {
      padding: 12px 25px;
      font-size: 1.3em;
      background-color: #ff3366;
      color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
      margin-top: 20px;
      position: relative;
    }

    .love-button:hover {
      background-color: #ff4d94;
      transform: translateY(-5px);
    }

    .love-button:active {
      transform: translateY(2px);
    }

    /* Hidden Pictures */
    .extra-pictures {
      display: none;
      margin-top: 20px;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }

    .extra-picture {
      width: 250px; /* Default width for circular images */
      height: 250px; /* Default height for circular images */
      border-radius: 50%;  /* Make them circular */
      object-fit: cover;
      margin: 15px;
      opacity: 0;
      transition: opacity 1s ease, transform 0.3s ease-in-out;
    }

    .extra-picture:hover {
      transform: scale(1.1); /* Slightly enlarge on hover */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .extra-picture.show {
      opacity: 1;
    }

    /* Love Animation */
    .love-animation {
      font-size: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: flyOut 3s ease-in forwards;
    }

    /* Heart Floating Effect */
    .hearts .heart {
      width: 35px;
      height: 35px;
      background-color: red;
      margin: 10px;
      border-radius: 50%;
      animation: heartFloat 5s ease-in-out infinite;
      position: absolute;
    }

    @keyframes heartFloat {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      50% {
        transform: translateY(-100px);
        opacity: 0.5;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* Floating Emojis */
    .emojis .emoji {
      font-size: 2em;
      animation: emojiFloat 5s ease-in-out infinite;
      position: absolute;
    }

    @keyframes emojiFloat {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      50% {
        transform: translateY(-150px);
        opacity: 0.5;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* Floating Text */
    .floating-text {
      font-size: 1.5em;
      color: #ff3366;
      position: absolute;
      animation: floatText 5s ease-in-out infinite;
      font-family: 'Sacramento', cursive;
    }

    @keyframes floatText {
      0% {
        opacity: 0;
        transform: translateY(0);
      }
      50% {
        opacity: 1;
        transform: translateY(-100px);
      }
      100% {
        opacity: 0;
        transform: translateY(0);
      }
    }

    /* "I Love You" Text Animation */
    .i-love-you {
      font-size: 3em;
      font-family: 'Sacramento', cursive;
      color: #ff3366;
      display: none;
      animation: fadeInSlideUp 3s ease-in-out forwards;
    }

    @keyframes fadeInSlideUp {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Fade In Up Animation for Message */
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    /* Fly Out Animation for Love Animation */
    @keyframes flyOut {
      0% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-50px); }
    }

    /* Smooth Scrolling */
    html {
      scroll-behavior: smooth;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
      h1 {
        font-size: 2.5em;
      }

      .main-picture {
        width: 200px;
        height: 200px;
      }

      .love-button {
        font-size: 1.1em;
      }

      .i-love-you {
        font-size: 2.5em;
      }

      .extra-picture {
        width: 200px;
        height: 200px;
      }
    }

    /* Responsive Scaling for Touch Devices */
    @media (max-width: 480px) {
      .extra-picture {
        width: 150px;
        height: 150px;
      }

      .main-picture {
        width: 180px;
        height: 180px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="image-container">
      <!-- Main picture of Najlaa -->
      <img src="najlaa1.jpg" alt="Najlaa's Picture" class="main-picture" id="mainPicture">
    </div>
    <h1>For Najlaa,</h1>
    <p>You are my everything. I love you more than words can express.</p>
    <button class="love-button" onclick="triggerLove()">Send Love</button>
    <div class="love-animation" id="loveAnimation">❤️</div>
    
    <!-- Hidden pictures that appear when button is clicked -->
    <div id="extraPictures" class="extra-pictures">
      <img src="najlaa2.jpg" alt="Najlaa's Picture 2" class="extra-picture">
      <img src="najlaa3.jpg" alt="Najlaa's Picture 3" class="extra-picture">
      <p id="message" class="message">I Love You!</p>
    </div>

    <!-- Floating hearts -->
    <div class="hearts">
      <div class="heart" style="animation-delay: 1s;"></div>
      <div class="heart" style="animation-delay: 2s;"></div>
      <div class="heart" style="animation-delay: 3s;"></div>
    </div>

    <!-- Floating Emojis -->
    <div class="emojis">
      <div class="emoji" style="top: 10%; left: 20%;">💖</div>
      <div class="emoji" style="top: 30%; left: 50%;">😘</div>
      <div class="emoji" style="top: 60%; left: 80%;">💫</div>
    </div>

    <!-- Floating Words -->
    <div class="floating-text" style="top: 20%; left: 5%;">Hi Sweetie, I Love You!</div>
    <div class="floating-text" style="top: 30%; left: 40%;">You are my heart 💖</div>
    <div class="floating-text" style="top: 50%; left: 75%;">Forever and Always 💫</div>

    <!-- "I Love You" text animation -->
    <p id="iLoveYou" class="i-love-you">I Love You</p>
  </div>

  <audio id="loveSound" src="love-sound.mp3" preload="auto"></audio> <!-- Sound for clicking -->

  <script>
    function triggerLove() {
      // Play sound effect
      const sound = document.getElementById('loveSound');
      sound.play();

      // Show additional pictures and message
      const extraPictures = document.getElementById('extraPictures');
      const message = document.getElementById('message');
      extraPictures.style.display = 'block';
      extraPictures.style.opacity = 1;
      message.style.animation = 'fadeInUp 2s ease-in-out';
      
      // Show the images with a fade-in effect
      const images = document.querySelectorAll('.extra-picture');
      images.forEach((image, index) => {
        setTimeout(() => {
          image.classList.add('show');
        }, index * 500);
      });
      
      // Love animation
      const loveAnim = document.getElementById('loveAnimation');
      loveAnim.style.animation = 'flyOut 3s ease-in forwards';

      // "I Love You" text animation
      const loveText = document.getElementById('iLoveYou');
      loveText.style.display = 'block';
      loveText.style.animation = 'fadeInSlideUp 3s ease-in-out forwards';

      // Reset animation after it finishes
      setTimeout(() => {
        loveAnim.style.animation = ''; // Remove animation after it finishes
      }, 3000);