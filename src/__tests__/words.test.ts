import {
  GENDER,
  gendersArray,
  getTheWord,
  WordRandom,
} from "../../dictionaries/words";

describe("# getTheWord", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns a valid word object", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);

    const result = getTheWord(null);

    expect(result).toHaveProperty("gender");
    expect(result).toHaveProperty("word");
    expect(Object.values(GENDER)).toContain(result.gender);

    const genderObj = gendersArray.find((g) => g.gender === result.gender);
    expect(genderObj?.words).toContain(result.word);
  });

  it("does not return the same word as previousWord", () => {
    const mockRandom = jest
      .spyOn(Math, "random")
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0);

    const previousWord: WordRandom = getTheWord(null);

    mockRandom.mockReturnValueOnce(0).mockReturnValueOnce(0);

    const result = getTheWord(previousWord);

    expect(result.word.singular).not.toBe(previousWord.word.singular);
  });
});
