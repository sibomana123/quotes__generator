const newQuoteBtn = document.querySelector(".new__quote");
const person =document.querySelector('.person')
const quote= document.querySelector('.quote')

const quotes=[
  {quote:"I didn't fail the test. I just found 100 ways to do it wrong.",
   person:"Sheryl Sandberg"
  },
    {quote:"If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
   person:"Benjamin Franklin"
  },
    {quote:"I attribute my success to this: I never gave or took any excuse.",
   person:"Florence Nightingale"
  },
    {quote:"Dreaming, after all, is a form of planning.",
   person:"Gloria Steinem"
  },
    {quote:"I would rather die of passion than of boredom.",
   person:"Vincent van Gogh"
  },
]

newQuoteBtn.addEventListener('click',function(){
   let random= Math.floor(Math.random()*quotes.length)

   quote.textContent=quotes[random].quote;
   person.textContent= quotes[random].person
})