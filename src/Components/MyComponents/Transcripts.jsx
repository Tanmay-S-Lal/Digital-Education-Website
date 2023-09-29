import React, { useState } from "react";
import '../Styles/Transcripts.css'

function Selection() {
  const [selects, setSelects] = useState("");
  const [texting, setTexting] = useState("Ma, please let me go to school today. I have been at home for the past two days. I am getting bored,But you still have a fever. Go outside and lie down on the cot.Poonam fell asleep on the cot. (Gap)Suddenly, something fell on her face. Poonam woke up at once and touched her cheek.Oh no, whose mischief is this? Is it the crow's or the pigeon's? It seems it's the crow's.Poonam looked up and saw many animals on the tree. There was pigeon , crow, sparrow, monkey, squirrel. Poonam walked to the pond to wash her face. She saw many animals in the pond. There was buffalo, swan, frog and fishes.Let us look at some more animals and look at their sounds.This is a dog. Dogs are 4 legged mammals otherwise knows as humans best friend. They are known for being loyal family pets.This is a horse. A horse is a tall and strong animal. The legs of the horse are thin but long and powerful which help the horse to run fast. Horses have a hairy tail.This is an elephant. The elephant is world largest living animal. It is a four legged creature with two small eyes, two large ear, a trunk and a short tail. It's four legs are all thick and big. This is a lion. It is a wild animal which lives in jungle. He is one of the strongest animal so he is called as king of the jungledue to his huge size,power and attacking nature.This is a crow. Crowd are large birds with shiny black feather. They often live together in large families. They're known for their loud voices.This is a frog. Frogs are small animals that can jump very well. Frogs are similar to toads. A frog has smooth skin and long legs");

  const handleSelectChange = (e) => {
    const selectedLanguage = e.target.value;

    if (selectedLanguage === "english") {
      setTexting("Ma, please let me go to school today. I have been at home for the past two days. I am getting bored,But you still have a fever. Go outside and lie down on the cot.Poonam fell asleep on the cot. (Gap)Suddenly, something fell on her face. Poonam woke up at once and touched her cheek.Oh no, whose mischief is this? Is it the crow's or the pigeon's? It seems it's the crow's.Poonam looked up and saw many animals on the tree. There was pigeon , crow, sparrow, monkey, squirrel. Poonam walked to the pond to wash her face. She saw many animals in the pond. There was buffalo, swan, frog and fishes.Let us look at some more animals and look at their sounds.This is a dog. Dogs are 4 legged mammals otherwise knows as humans best friend. They are known for being loyal family pets.This is a horse. A horse is a tall and strong animal. The legs of the horse are thin but long and powerful which help the horse to run fast. Horses have a hairy tail.This is an elephant. The elephant is world largest living animal. It is a four legged creature with two small eyes, two large ear, a trunk and a short tail. It's four legs are all thick and big. This is a lion. It is a wild animal which lives in jungle. He is one of the strongest animal so he is called as king of the jungledue to his huge size,power and attacking nature.This is a crow. Crowd are large birds with shiny black feather. They often live together in large families. They're known for their loud voices.This is a frog. Frogs are small animals that can jump very well. Frogs are similar to toads. A frog has smooth skin and long legs");
    } else if (selectedLanguage === "kannada") {
      setTexting("ಅಮ್ಮ, ಇವತ್ತು ದಯವಿಟ್ಟು ನನ್ನನ್ನು ಶಾಲೆಗೆ ಹೋಗಲು ಬಿಡಿ. ನಾನು ಮೂರು ದಿನಗಳಿಂದ ಮನೆಯಲ್ಲೇ ಇರುವೆ. ನನಗೆ ತುಂಬಾ ಬೇಸರವಾಗುತ್ತಿದೆ.ಆದರೆ ನಿನಗೆ ಇನ್ನೂ ಸ್ವಲ್ಪ ಜ್ವರವಿದೆ. ಹೊರಗೆ ಹೋಗಿ ಮಂಚದ ಮೇಲೆ ಮಲಗಿ ವಿಶ್ರಮಿಸು.ಪೂನಮ್ ಮಂಚದ ಮೇಲೆ ಮಲಗಲು ಹೊರಗೆ ಹೋದಳು. ಆಕೆ ಮಂಚದ ಮೇಲೆ ಮಲಗಿದ್ದಾಗ ಅವಳ ಮುಖದ ಮೇಲೆ ಏನೋ ಬಿದ್ದಿತು. ಪೂನಮ್ ಒಮ್ಮೆಲೇ ಎದ್ದು ಅವಳ ಮುಖವನ್ನು ಮುಟ್ಟಿ ನೋಡಿದಳು.  ಅಯ್ಯೋ! ಯಾರ ಚೇಷ್ಟೆ ಇದು? ಕಾಗೆಯದ್ದೋ, ಅಥವಾ ಪಾರಿವಾಳದ್ದೋ? ಕಾಗೆಯದ್ದೇ ಎಂದು ಅನಿಸುತ್ತದೆ.ಪೂನಮ್ ಮೇಲೆ ನೋಡಿದಾಗ ಅವಳಿಗೆ ಮರದಲ್ಲಿ ಅನೇಕ ಪ್ರಾಣಿಗಳು ಕಾಣಿಸಿದವು. ಅಲ್ಲಿ ಪಾರಿವಾಳ, ಕಾಗೆ, ಗುಬ್ಬಚ್ಚಿ, ಮಂಗ ಮ‌ತ್ತು ಅಳಿಲು ಮುಂತಾದ ಪ್ರಾಣಿಗಳು ಇದ್ದವು. ಪೂನಮ್ ತನ್ನ ಮುಖವನ್ನು ತೊಳೆಯಲು ಕೊಳದ ಬಳಿ ಹೋದಳು. ಅಲ್ಲಿಯೂ ಅನೇಕ ಪ್ರಾಣಿಗಳನ್ನು ನೋಡಿದಳು. ಎಮ್ಮೆ, ಕಪ್ಪೆ, ಹಂಸ ಮತ್ತು ಮೀನುಗಳು ಅಲ್ಲಿ ಇದ್ದವು.ಈಗ ನಾವು ಕೆಲವು ಪ್ರಾಣಿಗಳನ್ನು ನೋಡೋಣ ಮತ್ತು ಅವುಗಳ ಧ್ವನಿಗಳನ್ನು ಕೇಳೋಣ.ಇದು ಒಂದು ನಾಯಿ. ನಾಯಿಗಳು ನಾಲ್ಕು ಕಾಲುಗಳುಳ್ಳ ಒಂದು ಸಸ್ತನಿ. ಇವುಗಳನ್ನು ಮಾನವನ ಉತ್ತಮ ಗೆಳೆಯರೆಂದು ಕರೆಯುತ್ತಾರೆ. ಇವು ನಿಷ್ಠಾವಂತ ಸಾಕುಪ್ರಾಣಿಗಳೂ ಹೌದು. ಇದು ಒಂದು ಕುದುರೆ. ಕುದುರೆಯು ಉದ್ದ ಮತ್ತು ಶಕ್ತಿಯುತ ಪ್ರಾಣಿ. ಕುದುರೆಯ ಕಾಲುಗಳು ತೆಳ್ಳಗಿದ್ದರೂ ಬಲಿಷ್ಠವಾಗಿದ್ದು, ವೇಗವಾಗಿ ಓಡಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಇವುಗಳಿಗೆ ಕೂದಲುಳ್ಳ ಬಾಲವಿರುತ್ತದೆ. ಇದು ಒಂದು ಆನೆ. ಆನೆಯು ವಿಶ್ವದ ಅತ್ಯಂತ ದೊಡ್ಡ ಜೀವಿ. ಆನೆಗೆ ನಾಲ್ಕು ಕಾಲುಗಳಿದ್ದು, ಸಣ್ಣ ಕಣ್ಣುಗಳು, ದೊಡ್ಡ ಕಿವಿಗಳು‌‌ ಮತ್ತು ದೇಹ, ಹಾಗೂ ಕಿರಿದಾದ ಬಾಲ ಇರುತ್ತದೆ. ಅದರ ಕಾಲುಗಳು ದಪ್ಪವಾಗಿರುತ್ತವೆ.ಇದು ಒಂದು ಸಿಂಹ. ಇದೊಂದು ಕಾಡುಪ್ರಾಣಿ. ಇದು ಬಹಳ ಶಕ್ತಿಯುತವಾದ ಪ್ರಾಣಿಯಾಗಿದ್ದು, ಗಾತ್ರ, ಬಲ ಮತ್ತು ಆಕ್ರಮಣಕಾರಿ ಸ್ವಭಾವ ಹೊಂದಿರುವುದರಿಂದ ಇದನ್ನು'ಕಾಡಿನ ರಾಜ'ನೆಂದು ಕರೆಯುವರು.ಇದು ಒಂದು ಕಾಗೆ. ಕಾಗೆಯು ಕಪ್ಪು ಹೊಳೆಯುವ ಗರಿಗಳುಳ್ಳ ಹಕ್ಕಿ. ಅವು ದೊಡ್ಡ ಕುಟುಂಬದಲ್ಲಿ ವಾಸಿಸುತ್ತವೆ. ಇವುಗಳ ಧ್ವನಿ ಕರ್ಕಶವಾಗಿರುತ್ತದೆ.ಇದು ಒಂದು ಕಪ್ಪೆ. ಕಪ್ಪೆಗಳು ಸಣ್ಣಗಿದ್ದು, ಉತ್ತಮವಾದ ಹಾರುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿವೆ. ಇವು ನೆಲಗಪ್ಪೆಗಳ ರೀತಿ ಕಾಣುತ್ತವೆ. ಇವು ನುಣುಪಾದ ಚರ್ಮ ಮತ್ತು ಉದ್ದ ಕಾಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತವೆ.");
    }

    setSelects(selectedLanguage);
  };

  return (
    <div className="scroll-bg">
      <select className="optionlanguage" value={selects} onChange={handleSelectChange}>
        {/* <option value="">Select a language</option> */}
        <option value="english">English</option>
        <option value="kannada">ಕನ್ನಡ</option>
      </select>
      <div className="scroll-div">
        <div className="scroll-object"> 
          <h2 className="transcriptheading">{texting}</h2>
        </div>
      </div>
      
    </div>
  );
}

export default Selection;
