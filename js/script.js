document.addEventListener('DOMContentLoaded', () => {
    const bgAnimation = document.getElementById('bgAnimation');
    const numberOfColumns = 23; // Número de columnas
    const numberOfRows = 23; // Número de filas
    const hexagonSize = 70; // Tamaño de los hexágonos
    const spacing = 0.7; // Espaciado entre hexágonos

    // Calcula la altura de cada hexágono (altura del rombo interno)
    const hexagonHeight = hexagonSize * Math.sqrt(3) / 2;

    for (let row = 0; row < numberOfRows; row++) {
        for (let col = 0; col < numberOfColumns; col++) {
            const colorBox = document.createElement('div');
            colorBox.classList.add('colorBox');

            // Posicionamiento de los hexágonos en filas y columnas
            const x = col * (hexagonSize * 1.01 + spacing);
            const y = row * (hexagonHeight + spacing);

            // Ajustar el desplazamiento en filas impares
            if (row % 2 !== 0) {
                colorBox.style.left = `${x + hexagonSize * 0.40 + spacing / 0.1}px`;
            } else {
                colorBox.style.left = `${x}px`;
            }

            colorBox.style.top = `${y}px`;

            bgAnimation.append(colorBox);
        }
    }
});





document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Gonzalo Sotelo", "Desarrollador web"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const speed = 150;  // typing speed in milliseconds
    const delayBetweenTexts = 2000;  // delay between texts in milliseconds

    function type() {
        if (count === texts.length) {
            count = 0;  // reset to start over
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typing').textContent = letter;

        if (letter.length === currentText.length) {
            setTimeout(() => {
                erase();
            }, delayBetweenTexts);
        } else {
            setTimeout(type, speed);
        }
    }

    function erase() {
        if (index > 0) {
            letter = currentText.slice(0, --index);
            document.getElementById('typing').textContent = letter;
            setTimeout(erase, speed);
        } else {
            count++;
            setTimeout(type, speed);
        }
    }

    type();  // start the typing effect
});



document.querySelector('.conteiner-menu').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show-menu');        });