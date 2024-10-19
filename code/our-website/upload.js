document.getElementById('scanButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');

    if (fileInput.files.length === 0) {
        output.textContent = 'Please upload an image file.';
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
            Tesseract.recognize(
                img,
                'eng',
                {
                    logger: info => console.log(info) // Log progress
                }
            ).then(({ data: { text } }) => {
                output.textContent = text;
            }).catch(err => {
                output.textContent = 'Error recognizing text: ' + err.message;
            });
        };
    };

    reader.readAsDataURL(file);
});