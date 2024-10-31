import { IFormProps } from "./types";

const Form = ({ handleCharacterChange, character }: IFormProps) => {
  const { name, color } = character;

  return (
    <div>
      <label>
        Name:
        <input name="name" value={name} onChange={handleCharacterChange} />
      </label>

      <label>
        Color:
        <input
          type="color"
          name="color"
          value={color}
          onChange={handleCharacterChange}
        />
      </label>
    </div>
  );
};

export default Form;
