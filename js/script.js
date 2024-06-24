document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = [
"https://www.repstatic.it/content/localirep/img/rep/2018/04/12/154512101-f7e8bb2a-b8a7-40e7-b068-60f890a243e7.jpg",
"https://www.avvenire.it/c/2017/PublishingImages/2d5addcfed194eca8cf92e9f2f8dd992/moro.jpg",
"https://www.raicultura.it/webdoc/aldo-moro/gallery/11.jpg",
"https://www.raicultura.it/webdoc/aldo-moro/gallery/16.jpg"
    ];

    const carouselContainer = document.getElementById('carousel');

    if (carouselContainer) {
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
    } else {
        console.error("Element with ID 'carousel' not found.");
    }

    // Aggiungi il resto del tuo codice qui...
});
