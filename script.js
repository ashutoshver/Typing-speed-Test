const setOfWords = [
  "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",

  "If you find it in your heart to care for somebody else, you will have succeeded.",

  "Success consists of going from failure to failure without loss of enthusiasm.",

  "Always bear in mind that your own resolution to succeed is more important than any other."
];

const msg = document.getElementById("msg");
const typewords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

let startPlay = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done"
}

let endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
 

  let totalTime = ((endTime - startTime) / 1000);
  console.log(totalTime)

  let totalWords = typewords.value;
  let wordCount = wordCounter(totalWords);

  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMsg = "Your speed is " + speed + " words per minutes ";

  finalMsg += compareWords(msg.innerText, totalWords);         // for seeing error in words

  msg.innerText = finalMsg;
  
}

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;

  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      count++;
    }
  })

  let errorWords = (words1.length - count);
  return (count + " correct out of " + words1.length + " words and the total numbers of error are " + errorWords + ".");
}

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response)
  return response;
}


btn.addEventListener("click", function () {
  console.log(this.innerText)
  if (this.innerText == "Start") {
    typewords.disabled = false;
    startPlay();
  }
  else if (this.innerText = "Done") {
    typewords.disabled = true;
    btn.innerText = "Start";
    endPlay();
  }
})