const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const btnGroup = document.querySelector('.btn-group');
const btnGroup2 = document.querySelector('.btn-group-2');

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Semprotulation Lala";
    gif.src = "tonton.gif";
    btnGroup.style.display = 'none'; // Hide the first button group
    btnGroup2.style.display = 'flex'; // Show the second button group
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY= Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
