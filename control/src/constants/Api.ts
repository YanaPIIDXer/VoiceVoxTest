const host = "http://localhost:8081";

interface IApi {
  [type: string]: string;
}

/**
 * APIのエンドポイント群
 */
export const apiEndpoints: IApi = {
  audioQuery: host + "/audio_query",
  synthesis: host + "/synthesis",
};
