const generateLorem =(len)=>{
    const wordList = [
        "Lorem", "ipsum", "dolor", "sit", "amet",
        "consectetur", "adipiscing", "elit", "sed",
        "do", "eiusmod", "tempor", "incididunt",
        "ut", "labore", "et", "dolore", "magna",   
        "aliqua", "ut", "enim", "ad", "minim",
        "veniam", "quis", "nostrud", "exercitation",
        "ullamco", "laboris", "nisi", "ut", "aliquip",
        "ex", "ea", "commodo", "consequat", "duis",
        "aute", "irure", "dolor", "in", "reprehenderit",
        "in", "voluptate", "velit", "esse", "cillum",
        "dolore", "eu", "fugiat", "nulla", "pariatur"   
      ];
      let sentence = "";
      for(let i=0;i<len;i++)
      {
        sentence += wordList[Math.floor(Math.random() * wordList.length)] + " ";
      }
      console.log(sentence)
      return sentence
}
export {generateLorem}