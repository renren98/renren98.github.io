const buttons = document.querySelectorAll('.buttons button');
const resultMessage = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.disabled = true); // Disable all buttons

        const randomIndex = Math.floor(Math.random() * buttons.length);
        const randomButton = buttons[randomIndex];

        if (button === randomButton) {
            resultMessage.innerHTML = 'Congratulations! You won! <a href="https://sg.shp.ee/9ikyEKvp2woRajvyQcsR1">按这里赢取你的奖金</a>';
        } else {
            resultMessage.textContent = 'Sorry! Try again!';
            setTimeout(() => {
                window.location.href = 'https://renren98.github.io'; // Replace with the URL you want to redirect to
            }, 1000); // Redirects after 2 seconds
        }
    });
});
