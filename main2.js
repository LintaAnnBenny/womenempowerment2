// Array of quotes and images
const quotes = [
    {
        title: "Strength in Unity",
        quote: '"The most courageous act is still to think for yourself. Aloud." - Coco Chanel',
        heroImage: 'Coco_Chanel.jpg',
        quoteImage1: 'Audre Lorde.jpg',
        quoteText1: '"I am not free while any woman is unfree, even when her shackles are very different from my own." - Audre Lorde',
        quoteImage2: 'Bell Hooks.jpg',
        quoteText2: '"Feminism is for everybody." - Bell Hooks'
    },
    {
        title: "Empowerment Through Action",
        quote: '"I am not free while any woman is unfree, even when her shackles are very different from my own." - Audre Lorde',
        heroImage: 'Audre Lorde.jpg',
        quoteImage1: 'Coco_Chanel.jpg',
        quoteText1: '"The most courageous act is still to think for yourself. Aloud." - Coco Chanel',
        quoteImage2: 'Bell Hooks.jpg',
        quoteText2: '"Feminism is for everybody." - Bell Hooks'
    },
    {
        title: "Inspiring Change",
        quote: '"Feminism is for everybody." - Bell Hooks',
        heroImage: 'Bell Hooks.jpg',
        quoteImage1: 'Coco_Chanel.jpg',
        quoteText1: '"The most courageous act is still to think for yourself. Aloud." - Coco Chanel',
        quoteImage2: 'Audre Lorde.jpg',
        quoteText2: '"I am not free while any woman is unfree, even when her shackles are very different from my own." - Audre Lorde'
    }
];

// Function to change the quote and images
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById('heroTitle').innerText = quote.title;
    document.getElementById('heroQuote').innerText = quote.quote;
    document.getElementById('heroImage').src = quote.heroImage;
    document.getElementById('quoteImage1').src = quote.quoteImage1;
    document.getElementById('quoteText1').innerText = quote.quoteText1;
    document.getElementById('quoteImage2').src = quote.quoteImage2;
    document.getElementById('quoteText2').innerText = quote.quoteText2;
}