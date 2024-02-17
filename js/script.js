const buttons = document.querySelectorAll('.buttons button');
const resultMessage = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.disabled = true); // Disable all buttons

        const randomIndex = Math.floor(Math.random() * buttons.length);
        const randomButton = buttons[randomIndex];

        if (button === randomButton) {
            resultMessage.innerHTML = 'Congratulations! You won! <a href="https://link.tngdigital.com.my/eLuS6QBqtmQ3tdDW7">按这里赢取你的奖金</a>';
        } else {
            resultMessage.textContent = 'Sorry! Try again!';
        }
    });
});
