"use client";

import { useEffect, useState } from "react";
import { getTheWord, WordRandom } from "../../../dictionaries/words";
import InformationPanel from "./InformationPanel";
import SelectAnswer from "./SelectAnswer";

export default function RandomWordClient() {
  const [word, setWord] = useState<WordRandom | null>(null);

  const [showCorrectMessage, setShowCorrectMessage] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const fetchWord = async () => {
      setWord(getTheWord());
    };

    fetchWord();
  }, []);

  const handleChange = (value: string) => {
    if (value === word?.gender) {
      setShowCorrectMessage(true);
    } else {
      setShowCorrectMessage(false);
    }
  };

  const renewWord = () => {
    setWord(getTheWord());
    setShowCorrectMessage(null);
  };

  if (!word) return <p>Loading word...</p>;

  return (
    <div className="flex flex-1 flex-col justify-between mx-auto w-full h-full max-w-300 items-center mt-3">
      <div className="flex flex-col items-center overflow-auto">
        <div className="m-4 bg-gray-300 p-10 w-44 text-center text-3xl rounded-2xl min-w-2xl">
          <p>{word.word.singular}</p>
        </div>
        <SelectAnswer handleSelect={handleChange}></SelectAnswer>

        {showCorrectMessage !== null && (
          <div className="text-xl">
            <p
              className={`text-xl mb-1 ${
                showCorrectMessage ? "text-green-700" : "text-red-700"
              }`}
            >
              THAT IS {showCorrectMessage ? "CORRECT" : "FALSE"}
            </p>
            <InformationPanel information={word} />
          </div>
        )}
      </div>

      <div className="mb-6">
        <button
          className="text-black text-xl bg-green-500 hover:bg-green-800 shadow-xs font-medium leading-5 rounded-base px-4 py-2.5"
          onClick={renewWord}
        >
          New Word
        </button>
      </div>
    </div>
  );
}
