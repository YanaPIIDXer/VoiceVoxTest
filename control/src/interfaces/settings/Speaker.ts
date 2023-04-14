/**
 * 発言させるキャラクタのインタフェース
 */
export interface Speaker {
  id: number;
  name: string;
};

/**
 * 発現させるキャラクタ
 */
export const speakers: Speaker[] = [
  { id: 1, name: "ずんだもん" },
];
