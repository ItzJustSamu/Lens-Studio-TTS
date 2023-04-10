//#TTS 2023//
//@input Component.Text fortuneTeller
//@input Asset.AudioTrackAsset fortuneAudio

var fortunes = [
    "You will find love soon",
    "A big change is coming your way",
    "Your hard work will pay off",
    "Take a risk, it will be worth it",
    "Good news is on the horizon"
];

function generateFortune() {
    var index = Math.floor(Math.random() * fortunes.length);
    var fortune = fortunes[index];
    
  script.fortuneTeller.text = fortune;

    
    if (script.fortuneAudio) {
        script.fortuneAudio.play(1);
    }
}

script.createEvent("TapEvent").bind(generateFortune);
