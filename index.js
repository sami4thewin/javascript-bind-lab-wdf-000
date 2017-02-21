const app = "I don't do much.";



const digitalClock = {
  time: Math.round(Date.now()/1000),

  startTicking(){
    setInterval(() => this.time++, 1000);
  }
};

function censor(word, string) {
  var reg = new RegExp(word, "g");
  return string.replace(reg, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
