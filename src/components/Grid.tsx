import { useEffect } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { IGridProps } from "./types";
import Cell from "./Cell";

const Grid = ({ character }: IGridProps) => {
  const { name, color } = character;
  const gridArray = [...Array(16).keys()];

  const {
    ref,
    focusKey: fk,
    focusSelf,
  } = useFocusable({
    focusKey: "grid",
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={fk}>
      <div ref={ref} className="grid">
        {gridArray.map((item) => (
          <Cell key={item} label={item} name={name} color={color} />
        ))}
      </div>
    </FocusContext.Provider>
  );
};

export default Grid;
