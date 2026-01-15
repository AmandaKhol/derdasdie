type SelectProps = {
  handleSelect: (value: string) => void;
};

const SelectAnswer = ({ handleSelect }: SelectProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSelect(event.target.value);
  };

  const radioOptions = ["der", "das", "die"].map((g) => (
    <div key={g} className="flex items-center gap-1 mx-1.5 text-2xl">
      <input
        type="radio"
        id={g}
        name="gender"
        value={g}
        onChange={handleSelectChange}
        className="accent-blue-500"
      />
      <label htmlFor={g}>{g}</label>
    </div>
  ));

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
