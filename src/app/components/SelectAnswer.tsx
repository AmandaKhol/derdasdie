import { gendersArray } from "../../../dictionaries/words";

type SelectProps = {
  answerSelected: string | null;
  handleSelect: (value: string) => void;
};

const SelectAnswer = ({ answerSelected, handleSelect }: SelectProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSelect(event.target.value);
  };

  const radioOptions = gendersArray.map((g) => {
    const gender = g.gender;
    return (
      <div key={gender} className="flex items-center gap-1 mx-1.5 text-2xl">
        <input
          type="radio"
          id={gender}
          name="gender"
          value={gender}
          checked={answerSelected === g.gender}
          onChange={handleSelectChange}
          className="accent-blue-500"
        />
        <label htmlFor={gender}>{gender}</label>
      </div>
    );
  });

  return (
    <form
      className="m-10 flex flex-col text-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <p className="text-2xl">Select the gender</p>
      <div className="flex justify-between mt-3">{radioOptions}</div>
    </form>
  );
};

export default SelectAnswer;
