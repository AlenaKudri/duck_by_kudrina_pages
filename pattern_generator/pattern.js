const canvas = document.getElementById('patternCanvas');
const ctx = canvas.getContext('2d');
const size = 40;

function generatePattern() {
    for (let y = 0; y < canvas.height; y += size) {
        for (let x = 0; x < canvas.width; x += size) {
            
            const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size);
        }
    }
}

document.getElementById('generateBtn').addEventListener('click', generatePattern);

generatePattern();
