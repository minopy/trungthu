function play_nhac() {
  var music = document.getElementById("music")
  var play = document.getElementById("play_nhac")

  play.onclick = function () {
    if (music.paused) {
      music.play();
      play.src = "anh/pause.png"
    } else {
      music.pause();
      play.src = "anh/play.png"
    }
  }
};
play_nhac();

function chuyen() {
  document.addEventListener("DOMContentLoaded", function () {
    var playNhac = document.getElementById("toa");
    var play = document.querySelector(".play");
    var container = document.querySelector(".container");

    playNhac.onclick = function () {
      setTimeout(function () {

        play.style.display = "none";
        container.style.display = "block";
      }, 1000);
    };
  });
};
chuyen();


function text() {
  const textToDisplay = "Trung thu là tết thiếu nhi \n Em là em bé trong lòng của anh \n Hôm nay trời đẹp như tranh \n Cùng nhau đi ngắm lồng đèn lunh linh \n Bên em với trái tim này \n Thật lòng anh muốn được ở bên em \n Trăng tròn, ấm áp, bên em \n Tặng em bài này, đong đầy niềm zui❤️❤️";
  const textContainer = document.getElementById("text_1");
  const delayBetweenCharacters = 100; // Thời gian giữa mỗi ký tự (100ms)
  const initialDelay = 2000;
  let lineIndex = 0;
  let charIndex = 0;

  function displayText() {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        textContainer.innerHTML += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(displayText, delayBetweenCharacters);
      } else {
        // Khi kết thúc một dòng, tạo một dòng mới
        textContainer.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(displayText, delayBetweenCharacters); // Thời gian giữa các dòng
      }
    }
  }

  const lines = textToDisplay.split('\n'); // Tách văn bản thành các dòng

  const toa = document.getElementById("toa");
  toa.addEventListener("click", function () {
    setTimeout(displayText, initialDelay);
    // Gọi hàm để hiển thị văn bản khi phần tử "toa" được click
  });
}
text();








