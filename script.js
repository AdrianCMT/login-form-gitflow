document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Formulario enviado');
});

document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordInput = this.previousElementSibling;
    const icon = this.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

class Bubble {
    constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.fill();
        ctx.closePath();
    }

    update(bubbles) {
        this.x += this.dx;
        this.y += this.dy;

        // Rebote con paredes
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // Colisiones entre burbujas
        for (let other of bubbles) {
            if (this === other) continue;
            let dist = Math.hypot(this.x - other.x, this.y - other.y);
            if (dist < this.radius + other.radius) {
                this.dx = -this.dx;
                this.dy = -this.dy;
                other.dx = -other.dx;
                other.dy = -other.dy;
            }
        }

        this.draw();
    }
}

let bubbles = [];
let numBubbles = 12; // pocas para que esté limpio

for (let i = 0; i < numBubbles; i++) {
    let radius = Math.random() * 20 + 15; // entre 15 y 35 px
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    bubbles.push(new Bubble(x, y, radius, dx, dy));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let bubble of bubbles) {
        bubble.update(bubbles);
    }
    requestAnimationFrame(animate);
}

animate();

