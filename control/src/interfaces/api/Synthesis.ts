import type { Speaker } from './../settings/Speaker';

/**
 * synthesis APIのリクエスト
 */
export interface SynthesisRequest {
  speaker: Speaker;
  query: object;
}
