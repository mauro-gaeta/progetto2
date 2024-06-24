document.addEventListener('DOMContentLoaded', function() {
    // Caricamento dinamico del carosello di immagini sulla homepage
    const carouselImages = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg"
    ];

    const carouselContainer = document.getElementById('carousel');

    carouselImages.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        const img = document.createElement('img');
        img.src = image;
        img.alt = "Immagine";

        const link = document.createElement('a');
        link.href = "#";
        link.textContent = "Link a pagina di esempio";

        slide.appendChild(img);
        slide.appendChild(link);

        carouselContainer.appendChild(slide);
    });

    // Caricamento dinamico delle lettere nel catalogo completo
    const catalogoContainer = document.getElementById('lettere');

    // Simulazione di 10 lettere
    for (let i = 1; i <= 10; i++) {
        const lettera = {
            titolo: `Lettera a Destinatario ${i}`,
            autore: "Aldo Moro",
            destinatario: `Destinatario ${i}`,
            data: `1978-04-${i}`,
            testo: "Contenuto della lettera...",
            immagine: `images/lettera${i}.jpg`,
            fonte: "Fonte della lettera"
        };

        const letteraHTML = `
            <div class="lettera">
                <h2>${lettera.titolo}</h2>
                <ul>
                    <li><strong>Autore:</strong> ${lettera.autore}</li>
                    <li><strong>Destinatario:</strong> ${lettera.destinatario}</li>
                    <li><strong>Data:</strong> ${lettera.data}</li>
                    <li><strong>Fonte:</strong> ${lettera.fonte}</li>
                </ul>
                <p>${lettera.testo}</p>
                <img src="${lettera.immagine}" alt="Immagine della lettera">
                <a href="#">Dettagli</a>
            </div>
        `;

        catalogoContainer.innerHTML += letteraHTML;
    }

    // Caricamento dinamico dei destinatari nel catalogo per destinatario
    const destinatariContainer = document.getElementById('destinatari');

    // Esempio di destinatari
    const destinatari = ["Destinatario 1", "Destinatario 2", "Destinatario 3", "Destinatario 4", "Destinatario 5"];

    destinatari.forEach(destinatario => {
        const destinatarioHTML = `<div><a href="#">${destinatario}</a></div>`;
        destinatariContainer.innerHTML += destinatarioHTML;
    });
});
