let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let randomButton= document.querySelector("#random")
let formButton= document.querySelector("#submit")


let students=[
  { profileImage:"https://cdn.glitch.com/2e918309-4bea-4b59-94f1-f9104eb21dd6%2FIMG_3602.JPG?v=1585037745072",
    Name: "Worokiya Tunkara",
    Quote: "''Can I get a lamb over rice, no onion no pepper, white sauce & hot sauce!''",
    Superlative: "Best Everything!"
  },
  { profileImage:"https://cdn.glitch.com/2e918309-4bea-4b59-94f1-f9104eb21dd6%2FIMG_6696.PNG?v=1585037780329",
    Name: "Djaliatou Barry",
    Quote: "''Woyo Nene!''",
    Superlative: "Prettiest Smile"
  },
   {profileImage:"https://cdn.glitch.com/2e918309-4bea-4b59-94f1-f9104eb21dd6%2FIMG_6694.PNG?v=1585037776009",
    Name: "Britney Anderson",
    Quote: "''I'm gonna go home and eat some curry goat!''",
    Superlative: "Most Reliable"
  },
  { profileImage:"https://cdn.glitch.com/2e918309-4bea-4b59-94f1-f9104eb21dd6%2FIMG_6692.jpg?v=1585037764253",
    Name: "Hummu Gado",
    Quote: "''I'm a bit pscycho!''",
    Superlative: "Most Petty"
  },
  { profileImage:"https://cdn.glitch.com/2e918309-4bea-4b59-94f1-f9104eb21dd6%2FIMG_5932.jpg?v=1585038315652",
    Name: "Aoussa Toure",
    Quote: "''-tells a story withough giving any context-''",
    Superlative: "Most Dramatic"
  },
 
  {profileImage:"https://cdn.glitch.com/2e918309-4bea-4b59-94f1-f9104eb21dd6%2FIMG_4481.JPG?v=1585037755843",
    Name: "Munira Odigie",
    Quote: "''Astargfurllah'",
    Superlative: "Most Likely to Forget Wedding Day"
  },
  {
    profileImage:"https://cdn.glitch.com/2e918309-4bea-4b59-94f1-f9104eb21dd6%2FIMG_6704.jpg?v=1585037804827",
    Name: "Aisatou Kanuteh",
    Quote: "''She really bugging yo!'' ",
    Superlative: "Most Likely to win a fight"
  },
   {
    profileImage:"https://cdn.glitch.com/2e918309-4bea-4b59-94f1-f9104eb21dd6%2FIMG_4702.jpg?v=1585037768854",
    Name: "Babamayokun Okudero",
    Quote: "''I like turtles!'' ",
    Superlative: "Most Likely to Succeed on Tiktok"
  },
]
let count= 0
document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].Name
    document.querySelector("#quote").innerHTML=students[count].Quote
     document.querySelector("#superlative").innerHTML=students[count].Superlative


nextButton.addEventListener("click",()=>{
  console.log('next')
  count++
  document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].Name
  document.querySelector("#quote").innerHTML=students[count].Quote
  document.querySelector("#superlative").innerHTML=students[count].Superlative
  console.log(count)
  if(count == students.length -1){
    count = -1
  }
  console.log(count)
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
   document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].Name
    document.querySelector("#quote").innerHTML=students[count].Quote
     document.querySelector("#superlative").innerHTML=students[count].Superlative
  if (count ==0){
    count =students.length 
  }
})

formButton.addEventListener("click",()=>{
  let fname =document.querySelector("#fname").value
  let image = document.querySelector("#image").value
  let quote =document.querySelector("#quote1").value
  let superlative =document.querySelector("#superlative2").value
  students.push({"profileImage": image, "Name": fname, "Quote": quote, "Superlative":superlative} )
})


randomButton.addEventListener("click",()=>{
  let random= Math.floor(Math.random()*students.length)
  document.querySelector("#pic").src= students[random].profileImage
  document.querySelector("#name").innerHTML=students[random].Name
    document.querySelector("#quote").innerHTML=students[random].Quote
     document.querySelector("#superlative").innerHTML=students[random].Superlative
})

