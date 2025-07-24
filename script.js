const imgExploracionMapa = document.getElementById('cont-exploracion-mapa');

imgExploracionMapa.addEventListener('click', function () {
    Swal.fire({
        title: "<strong>Exploración y mapa</strong>",
        html: `
            <p>Uno de los aspectos más destacados de <strong>Hollow Knight</strong> es su enfoque en la exploración. Hollow Knight no tiene diálogos largos ni explicaciones claras: el jugador debe interpretar lo que pasa a partir de lo que ve, los personajes que encuentra, los escenarios y los objetos.</p>
            <br>
            <p>Aunque las zonas parecen separadas (como si fueran niveles distintos), en realidad todo el mapa está unido como un gran laberinto. No hay pantallas de carga entre zonas, y el jugador puede pasar de una a otra de forma fluida.</p>
            <br>
            <p>Esto le da al juego una estructura conocida como <i>"Metroidvania"</i>, un estilo de juego en el que:</p>
            <ul>
                <li>No hay un solo camino lineal.</li>
                <li>Se puede volver a zonas anteriores con nuevas habilidades para desbloquear secretos.</li>
                <li>El progreso depende de explorar, recordar rutas y probar caminos nuevos.</li>
            </ul>
            <br>
            <p>Al inicio, el jugador no tiene un mapa completo. Para poder orientarse, debe encontrar a un personaje llamado <strong>Cornifer</strong>, un cartógrafo que está escondido en cada zona. Al encontrarlo, se puede comprar un mapa inicial del área. Luego, con una pluma (también comprable), el jugador puede ir completando el mapa mientras explora.</p>
            <br>
            <p>El mapa no se actualiza automáticamente: solo se actualiza cuando el jugador descansa en un banco, que funciona como punto de guardado.</p>
            <br>
            <p>🧭 <strong>Zonas principales de Hallownest:</strong> Cada zona tiene un ambiente único, enemigos distintos, música propia y muchos secretos. Algunas de las más conocidas son:</p>
            <ul>
                <li><strong>Greenpath</strong>: una región exuberante y verde, con vegetación espesa, agua ácida y enemigos rápidos. Es de las primeras zonas que se exploran.</li>
                <li><strong>Deepnest</strong>: un lugar oscuro, enredado como una telaraña, lleno de insectos agresivos y trampas. Es una de las zonas más inquietantes del juego.</li>
                <li><strong>City of Tears</strong>: una ciudad majestuosa donde siempre llueve. Aquí hay muchos secretos escondidos entre edificios abandonados y enemigos más fuertes.</li>
                <li><strong>Crystal Peak</strong>: una mina llena de cristales brillantes, plataformas móviles y peligros eléctricos. Su dificultad es mayor que otras zonas tempranas.</li>
                <li><strong>Fog Canyon</strong>, <strong>Fungal Wastes</strong>, <strong>Kingdom's Edge</strong>, <strong>Royal Waterways</strong> y más: cada una tiene su historia, desafíos y enemigos característicos.</li>
            </ul>
            <br>
            <p>🔍 <strong>¿Qué se encuentra al explorar?</strong> Explorar no solo permite avanzar: también se descubren cosas como:</p>
            <ul>
                <li>Fragmentos de máscara para aumentar la salud.</li>
                <li>Fragmentos de alma para mejorar la magia.</li>
                <li>Encantamientos (charms) que modifican habilidades.</li>
                <li>Jefes ocultos y finales alternativos del juego.</li>
                <li>NPCs (personajes) que revelan la historia de Hallownest.</li>
            </ul>
        `,
    });
});
