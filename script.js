document.getElementById("entrarBtn").addEventListener("click", function () {
    const login = document.getElementById("login");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const password = document.getElementById("password");

    let isValid = true;

    // Função para validar se o campo está preenchido
    function validateField(field) {
        if (field.value.trim() === "") {
            field.classList.add("error");
            isValid = false;
        } else {
            field.classList.remove("error");
        }
    }

    // Função para validar o formato de email
    function validateEmail(field) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(field.value.trim())) {
            field.classList.add("error");
            isValid = false;
            alert("Por favor, insira um email válido.");
        } else {
            field.classList.remove("error");
        }
    }

    // Validar cada campo
    validateField(login);
    validateField(password);
    validateEmail(email);
    validateField(telefone); // O telefone será validado apenas para estar preenchido

    // Se todos os campos forem válidos, prosseguir
    if (isValid) {
        alert("Todos os campos estão preenchidos corretamente. Login efetuado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

// Máscara para o telefone: (XX) XXXXX-XXXX
document.getElementById("telefone").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove qualquer coisa que não seja número
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 5) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        value = value.replace(/^(\d*)/, "($1");
    }
    e.target.value = value;
});

document.getElementById("quitBtn").addEventListener("click", function () {
    alert("Você clicou no botão SAIR!");
});

// Função para criar o efeito de cachoeira de código
function createCodeRain() {
    const waterfall = document.querySelector('.waterfall');
    const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16; // Tamanho da fonte em pixels
    const columns = Math.floor(window.innerWidth / fontSize);

    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -1000;
    }

    function draw() {
        waterfall.innerHTML = ''; // Limpa o conteúdo anterior

        for (let i = 0; i < drops.length; i++) {
            const codeLine = document.createElement('div');
            codeLine.classList.add('code');
            codeLine.style.left = i * fontSize + 'px';
            codeLine.style.top = drops[i] + 'px';

            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            codeLine.textContent = text;

            waterfall.appendChild(codeLine);

            drops[i] += fontSize;

            if (drops[i] > window.innerHeight) {
                drops[i] = Math.random() * -1000;
            }
        }
    }

    setInterval(draw, 50);
}

// Inicia o efeito de cachoeira de código
createCodeRain();
