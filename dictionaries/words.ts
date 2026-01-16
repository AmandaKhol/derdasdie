export type Word = {
  singular: string;
  plural: string;
  translation: string;
  level: string;
};

type Dictionary = Array<Word>;

export const GENDER = {
  DER: "der",
  DIE: "die",
  DAS: "das",
} as const;

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export type WordRandom = {
  gender: Gender;
  word: Word;
};

const der: Dictionary = [
  {
    singular: "Elefant",
    plural: "Elefanten",
    translation: "Elephant",
    level: "A1",
  },
  {
    singular: "Vorschlag",
    plural: "Vorschläge",
    translation: "Suggestion",
    level: "A2",
  },
  {
    singular: "Lebenslauf",
    plural: "Lebesläufen",
    translation: "CV",
    level: "A2",
  },
  {
    singular: "Einsatz",
    plural: "Einsätze",
    translation: "Use",
    level: "B1",
  },
  {
    singular: "Eindruck",
    plural: "Eindrücke",
    translation: "Impression",
    level: "B2",
  },
];

const das: Dictionary = [
  {
    singular: "Ereignis",
    plural: "Ereignisse",
    translation: "Event",
    level: "B2",
  },
  {
    singular: "Schnäppchen",
    plural: "Schnäppchen",
    translation: "Bargain",
    level: "B2",
  },
  {
    singular: "Spiegelbild",
    plural: "Spiegelbilder",
    translation: "Reflexion",
    level: "B2",
  },
];

const die: Dictionary = [
  {
    singular: "Stellenanzeige",
    plural: "Stellenanzeigen",
    translation: "Job advertisement",
    level: "B2",
  },
  {
    singular: "Bewegung",
    plural: "Bewegungen",
    translation: "Movement",
    level: "A1",
  },
  {
    singular: "Ablehnung",
    plural: "Ablehnungen",
    translation: "Rejection",
    level: "B1",
  },
];

export const gendersArray = [
  { gender: GENDER.DER, words: der },
  { gender: GENDER.DIE, words: die },
  { gender: GENDER.DAS, words: das },
];

export function getTheWord(previousWord: WordRandom | null): WordRandom {
  let word: Word;
  let gender: Gender;

  do {
    const randomGenderIndex = Math.floor(Math.random() * gendersArray.length);
    const selectedGender = gendersArray[randomGenderIndex];

    const randomWordIndex = Math.floor(
      Math.random() * selectedGender.words.length
    );

    word = selectedGender.words[randomWordIndex];
    gender = selectedGender.gender;
  } while (previousWord && word.singular === previousWord.word.singular);

  return {
    gender,
    word,
  };
}
