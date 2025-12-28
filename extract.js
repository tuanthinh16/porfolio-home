const extract = require('pdf-extract');

const pdfPath = 'src/CV_Dotuanthinh_12_2025_en.pdf';

const options = {
  type: 'text'
};

const processor = extract(pdfPath, options, (err) => {
  if (err) console.error('Error:', err);
});

processor.on('complete', (data) => {
  console.log(data.text_pages.join('\n'));
});

processor.on('error', (err) => console.error('Error:', err));