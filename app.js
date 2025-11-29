// const currentLocation = location.pathname.split("/").pop(); // current file name
// const navLinks = document.querySelectorAll(".nav-link");

// navLinks.forEach(link => {
//   if (link.getAttribute("href") === currentLocation) {
//     link.classList.add("active");
//   }
// });

var aboutText=document.getElementById("aboutText");
var textBtn = document.getElementById("showTextbtn");

var lessText = `<p>Hi, I’m Muhammad Hassan - a dedicated front-end developer with a strong focus on building modern, responsive, and user-centric web applications.</p>`;
var moreText = `<p>I specialize in HTML, CSS, JavaScript, and React, and I’m constantly expanding my knowledge to stay aligned with the latest technologies. My mission is to transform ideas into seamless digital experiences that are both functional and visually engaging. At the moment, I’m working on personal projects to refine my expertise and seeking opportunities to contribute to innovative teams. Beyond coding, I enjoy tackling problem-solving challenges and keeping up with emerging trends in technology.</p>`;






function showText(){
if(textBtn.textContent === "Read More"){
    aboutText.innerHTML=moreText;
    textBtn.textContent="Read Less"

}else {
    aboutText.innerHTML = lessText;
    textBtn.textContent = "Read More";
  }

}
