export interface ICharacter {
  name: string;
  color: string;
}

export interface IFormProps {
  handleCharacterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  character: ICharacter;
}

export interface IGridProps {
  character: ICharacter;
}

export interface ICellProps {
  label: number;
  name: string;
  color: string;
}

export interface IColorNameProps {
  color: string;
}

export interface ICharacterIconProps {
  fill: string;
}
