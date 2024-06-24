document.addEventListener("DOMContentLoaded", function() {
    const letterTableBody = document.getElementById('letter-table-body');

    // Array dei file XML delle lettere
    const letterFiles = [
        'letters/letter1.xml',
        'letters/letter2.xml'
        // Aggiungi altri file XML qui
    ];

    letterFiles.forEach((file, index) => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "application/xml");

                let title, date, recipient, description;

                if (xmlDoc.documentElement.nodeName === "TEI") {
                    // Parsing per file TEI
                    title = xmlDoc.getElementsByTagName("title")[0].textContent;
                    date = xmlDoc.getElementsByTagName("date")[0].textContent;
                    recipient = xmlDoc.getElementsByTagName("sourceDesc")[0].textContent.split(" a ")[1];
                    description = `Lettera di Aldo Moro a ${recipient}`;
                } else if (xmlDoc.documentElement.nodeName === "metadata") {
                    // Parsing per file Dublin Core
                    title = xmlDoc.getElementsByTagName("title")[0].textContent;
                    date = xmlDoc.getElementsByTagName("date")[0].textContent;
                    recipient = xmlDoc.getElementsByTagName("subject")[0].textContent.split(" a ")[1];
                    description = `Lettera di Aldo Moro a ${recipient}`;
                } else {
                    throw new Error("Formato XML sconosciuto");
                }

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
