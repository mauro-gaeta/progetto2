document.addEventListener("DOMContentLoaded", function() {
    const letterTableBody = document.getElementById('letter-table-body');

    // Array dei file XML delle lettere (puoi aggiungere altri file XML qui)
    const letterFiles = [
        'letters/letter1.xml',
        'letters/letter2.xml',
        // Aggiungi altri file XML qui
    ];

    letterFiles.forEach((file, index) => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "text/xml");

                const title = xmlDoc.getElementsByTagName("title")[0].textContent;
                const date = xmlDoc.getElementsByTagName("date")[0].textContent;
                const recipient = xmlDoc.getElementsByTagName("recipient")[0].textContent;
                const description = `Lettera di Aldo Moro a ${recipient}`;

                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${description}</td>
                    <td>${date}</td>
                    <td>${recipient}</td>
                    <td><a href="lettera${index + 1}.html">Dettagli</a></td>
                `;

                letterTableBody.appendChild(row);
            })
            .catch(error => {
                console.error('Errore nel caricamento del file XML:', error);
            });
    });
});
