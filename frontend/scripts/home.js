function searchFiles() {
    const searchKeyword = document.getElementById('searchInput').value.toLowerCase();
    const fileResultsDiv = document.getElementById('fileResults');
    fileResultsDiv.innerHTML = ''; // Clear previous search results

    // Sample PDF file URLs
    const pdfFiles = [
        'sample1.pdf',
        'sample2.pdf',
        'sample3.pdf'
    ];

    pdfFiles.forEach(pdfFile => {
        // Use a PDF reading library like PDF.js to read PDF content
        // Here, we're just simulating the search process
        // Replace this with actual PDF content reading and searching logic

        // Simulated search logic (replace with actual PDF content reading and searching)
        if (pdfFile.toLowerCase().includes(searchKeyword)) {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `
                <div class="block max-w-[18rem] rounded-lg bg-gray-900 text-white text-left text-base shadow-lg dark:bg-gray-800 dark:text-gray-300">
                    <div class="p-6">
                        <a class="mb-2 text-2xl font-semibold leading-tight text-primary" href="${pdfFile}">
                            ${pdfFile}
                        </a>
                        <p class="mb-4 text-base leading-normal">
                            Found keyword in this PDF file.
                        </p>
                    </div>
                </div>
            `;
            fileResultsDiv.appendChild(resultItem);
        }
    });
}