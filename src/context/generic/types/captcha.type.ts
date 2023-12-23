export type TResponseTokens = Array<{
  token: string;
  used: boolean;
  timestamp: number;
  expiresAt: number;
}>;
