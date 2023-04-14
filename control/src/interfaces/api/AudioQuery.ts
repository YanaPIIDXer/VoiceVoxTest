import type { Speaker } from "../settings/Speaker";

/**
 * audio_query APIのリクエスト
 */
export interface AudioQueryRequest {
  text: string;
  speaker: Speaker;
}
