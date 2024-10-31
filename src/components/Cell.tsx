import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import CharacterIcon from "./CharacterIcon";
import { ICellProps } from "./types";

const Cell = ({ label, name, color }: ICellProps) => {
  const { ref, focused } = useFocusable();

  return (
    <div ref={ref} className="cell">
      {label}
      {focused && name && <CharacterIcon fill={color} />}
    </div>
  );
};

export default Cell;
