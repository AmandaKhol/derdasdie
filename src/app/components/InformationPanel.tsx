import { WordRandom } from "../../../dictionaries/words";

type InformationPanelProps = {
  information: WordRandom;
};

const InformationPanel = ({ information }: InformationPanelProps) => {
  const { gender, word } = information;
  return (
    <div>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Plural:</strong> {word.plural}
      </p>
      <p>
        <strong>Translation (EN):</strong> {word.translation}
      </p>
      <p>
        <strong>Level:</strong> {word.level}
      </p>
    </div>
  );
};

export default InformationPanel;
