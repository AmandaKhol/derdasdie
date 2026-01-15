"use client";

import { useEffect, useState } from "react";
import { getTheWord, Word } from "../../../dictionaries/words";

type WordRandom = {
  gender: string;
  word: Word;
};

export default function RandomWordClient() {
  const [word, setWord] = useState<WordRandom | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showCorrectMessage, setShowCorrectMessage] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const fetchWord = async () => {
      setWord(getTheWord());
    };

    fetchWord();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
    console.log("selected answer:", event.target.value);
    if (event.target.value === word?.gender) {
      setShowCorrectMessage(true);
    } else {
      setShowCorrectMessage(false);
    }
  };

  const renewWord = () => {
    setWord(getTheWord());
    setShowCorrectMessage(null);
    setSelectedAnswer(null);
  };

  if (!word) return <p>Loading word...</p>;

  return (
    <div className="flex flex-col justify-center">
      <div className="m-4 bg-gray-300 p-10 w-44 justify-items-center">
        <p>{word.word.singular}</p>
      </div>
      <form
        className="m-10 bg-amber-300 flex flex-col content-between"
        action=""
      >
        <p>Select the gender</p>
        <div className="flex justify-between">
          <input
            type="radio"
            name="gender"
            value="der"
            checked={selectedAnswer === "der"}
            onChange={handleChange}
          />
          <label htmlFor="der">der</label>
          <input
            type="radio"
            name="gender"
            value="das"
            checked={selectedAnswer === "das"}
            onChange={handleChange}
          />
          <label htmlFor="das">das</label>
          <input
            type="radio"
            name="gender"
            value="die"
            checked={selectedAnswer === "die"}
            onChange={handleChange}
          />
          <label htmlFor="die">die</label>
        </div>
      </form>
      {showCorrectMessage !== null && (
        <div>
          <p>THAT IS {showCorrectMessage ? "CORRECT" : "FALSE"}</p>
          <p>
            <strong>Gender:</strong> {word.gender}
          </p>
          <p>
            <strong>Plural:</strong> {word.word.plural}
          </p>
          <p>
            <strong>Translation (EN):</strong> {word.word.translation}
          </p>
        </div>
      )}
      <button
        className="mt-1.5 text-black bg-green-500 hover:bg-green-800 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"
        onClick={renewWord}
      >
        New Word
      </button>
    </div>
  );
}
