type NewWordProps = {
  renewWord: () => void;
};

const NewWord = ({ renewWord }: NewWordProps) => {
  return (
    <div className="mb-6">
      <button
        className="text-black text-xl bg-green-500 hover:bg-green-800 shadow-xs font-medium leading-5 rounded-base px-4 py-2.5"
        onClick={renewWord}
      >
        New Word
      </button>
    </div>
  );
};

export default NewWord;
