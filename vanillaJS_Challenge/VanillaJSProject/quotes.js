const quotes = [
    {
        quote: "If one advances confidently in the direction of his dreams, and endeavours to live the life which he has imagined, he will meet with success unexpected in common hours.",
        author: "Henry David Thoreau"
    },
    {
        quote: "Love does not consist in gazing at each other, but in looking together in the same direction.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.",
        author: "Roy T. Bennett"
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "Helen Keller"
    },
    {
        quote: "You still have enough time to make your dream come true" ,
        author: "Peter Pan"
    }
]

const quote = document.querySelector(".quote span:first-child")
const author = document.querySelector(".quote span:last-child")

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = randomQuote.quote
author.innerText = randomQuote.author