export type Word = {
  singular: string;
  plural: string;
  translation: string;
  level: string;
};

type Dictionary = Array<Word>;

const der: Dictionary = [
  {
    singular: "Elefant",
    plural: "Elefanten",
    translation: "Elephant",
    level: "A1",
  },
  {
    singular: "Pferd",
    plural: "Pferde",
    translation: "Horse",
    level: "A1",
  },
];

const das: Dictionary = [
  {
    singular: "Brot",
    plural: "Brot",
    translation: "Bread",
    level: "A1",
  },
];

const die: Dictionary = [
  {
    singular: "Katze",
    plural: "Katzen",
    translation: "Cat",
    level: "A1",
  },
];

const gendersArray = [
  { gender: "der", words: der },
  { gender: "das", words: das },
  { gender: "die", words: die },
];

export function getTheWord(): { gender: string; word: Word } {
  const randomGenderIndex = Math.floor(Math.random() * gendersArray.length);
  const selectedGender = gendersArray[randomGenderIndex];

  const randomWordIndex = Math.floor(
    Math.random() * selectedGender.words.length
  );
  const word = selectedGender.words[randomWordIndex];

  return {
    gender: selectedGender.gender,
    word,
  };
}

console.log(getTheWord());
