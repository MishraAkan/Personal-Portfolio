let menu= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Backend Developer', 'Web Designer', 'CSE Student'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

const readMoreBtn = document.getElementById("read-more-btn");
const moreAbout = document.getElementById("more-about");

readMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (moreAbout.style.display === "none") {
        moreAbout.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    } else {
        moreAbout.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
});

const serviceButtons = document.querySelectorAll(".read-more-btn");

serviceButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const moreText = this.previousElementSibling;

        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "block";
            this.textContent = "Read Less";
        } else {
            moreText.style.display = "none";
            this.textContent = "Read More";
        }
    });
});

