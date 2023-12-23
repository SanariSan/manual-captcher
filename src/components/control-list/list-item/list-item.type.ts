export type TListItemComponent = {
  idx: number;
  token: string;
  used: boolean;
  expiresAt: number;
  changeStatus: (number) => void;
};
