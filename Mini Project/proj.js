// Collection Of Quote
const quotes = [{
    quote: `It is better to be hated for what you are than to be loved for something you are not.`,
    author: `- Andre Gide`
}, {
    quote: `Talk is cheap. Show me the code.`,
    author: ` Linus Torvalds`
}, {
    quote: `We live the life of others when we read their thoughts.`,
    author: `RGV`
}, {
    quote: `I'm an atheist.I dont believe in ghosts`,
    author: `RGV`
}, {
    quote: `Everyone's birth is accidental,it's not intentional.`,
    author: `RGV`
}, {
    quote: `Allow yourself to accept the reality`,
    author: `Ujwal`
}, {
    quote: `The most negative word of 2020 is "POSITIVE.`,
    author: `Covid-19`
}, {
    quote: `Woman fall in love in a man's presense.Men tend to realize they are n love in a woman's absense`,
    author: `#someone`
}, {
    quote: `Javascript is the duct tape of the Internet.  `,
    author: `Charlie Campbell`
}, {
    quote: `Powerful people comes from powerful places`,
    author: `KGF`
},
{
    quote: `Computer language design is just like a stroll in the park. Jurassic Park, that is.`,
    author: `Larry Wall`
}, {
    quote: `Programming languages are like girlfriends: The new one is better because *you* are better.`,
    author: `Derek Sivers`
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})