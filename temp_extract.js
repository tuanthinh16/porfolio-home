const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function extract() {
    let dataBuffer = fs.readFileSync('d:\\\\porfolio-home\\\\src\\\\CV_Dotuanthinh_12_2025_en.pdf');
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    await parser.destroy();
    console.log(result.text);
}

extract().catch(console.error);