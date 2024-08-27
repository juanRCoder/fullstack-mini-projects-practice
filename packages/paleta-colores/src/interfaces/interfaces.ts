export interface randomColors {
  colors: string[];
  copyToClipboard: (color: string) => Promise<void>;
}

export interface propCopyToClipboard {
  color: string;
  setCopy: (valor: boolean) => void;
}
