const feedingBtn = document.getElementById('feedingBtn');
const bigGear = document.getElementById('bigGear');
const smallGear = document.getElementById('smallGear');

feedingBtn.addEventListener('click', () => {
    bigGear.classList.remove('hidden');
    smallGear.classList.remove('hidden');
    bigGear.style.animationName = 'rotate';
    smallGear.style.animationName = 'rotate';

    setTimeout(() => {
        bigGear.style.animationName = '';
        smallGear.style.animationName = '';
        bigGear.classList.add('hidden');
        smallGear.classList.add('hidden');
    }, 3000);
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
    darkModeToggle.classList.toggle('active');
    body.classList.toggle('dark-mode');
});