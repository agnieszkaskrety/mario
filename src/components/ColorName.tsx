import { useFetchData } from "../hooks/useFetchData";
import { IColorNameProps } from "./types";
import { removeHash } from "../utils/utils";

const ColorName = ({ color }: IColorNameProps) => {
  const colorParam = removeHash(color);

  const { data, isLoading, error } = useFetchData(
    `https://www.thecolorapi.com/id?hex=${colorParam}`
  );

  const colorName = data?.name?.value as string;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {colorName && <p>{colorName}</p>}
    </>
  );
};

export default ColorName;
