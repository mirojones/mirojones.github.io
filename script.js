alert("site down for maintainance. please come back later")

// captcha
const captchaCtx = document.getElementById("captcha-canvas").getContext("2d"),
  captchaSlider = document.getElementById("captcha-slider"),
  captchaSliderLabel = document.querySelector(".captcha-slider-label"),
  captcha = document.querySelector(".captcha"),
  content = document.querySelector(".content");

var captchaFireX = 10,
  failedAttempts = 0;

function captchaDraw() {
  captchaFireX = captchaSlider.value;
  console.log(captchaFireX);
  captchaCtx.clearRect(0, 0, 300, 150);
  captchaCtx.font = "50px emoji";
  captchaCtx.fillText("\u{1F1EE}\u{1F1F1}", 120, 90);
  captchaCtx.fillText("\u{1F1F5}\u{1F1F8}", 230, 90);
  captchaCtx.fillText("\u{1F525}", captchaFireX, 90);
}

captchaDraw();

captchaSlider.addEventListener("input", () => {
  captchaSliderLabel.style.opacity = "0";
  captchaDraw();
});

captchaSlider.addEventListener("change", () => {
  if (captchaSlider.value > 100 && captchaSlider.value < 140) {
    captchaSlider.setAttribute("data-captcha", "pass");
    setTimeout(() => {
      // admission
      captcha.style.display = "none";
      content.style.display = "block";
    }, 500);
  } else {
    failedAttempts++;
    captchaSlider.setAttribute("data-captcha", "fail");
    setTimeout(() => {
      captchaSlider.value = 10;
      captchaSlider.removeAttribute("data-captcha");
      captchaSliderLabel.innerText = "Try again";
      captchaSliderLabel.style.opacity = "1";
      captchaDraw();
    }, 500);
  }
});