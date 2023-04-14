import type { Speaker } from "@/interfaces/settings/Speaker";
import { callAudioQueryRequest } from "@/api/query";

/**
 * 音声をフェッチするクラス
 */
export class FetchAudio {
  private speaker: Speaker;
  private text: string;

  /**
   * コンストラクタ
   * @param speaker 発現させるキャラクタ
   * @param text 発現させる内容
   */
  constructor (speaker: Speaker, text: string) {
    this.speaker = speaker;
    this.text = text;
  }

  /**
   * フェッチ
   * @returns Base64に変換されたWave形式の音声
   */
  async fetch (): Promise<string> {
    // AudioQuery
    const query = await callAudioQueryRequest({
      speaker: this.speaker,
      text: this.text,
    });
    console.log(query.data);

    // TODO: 音声合成の実装
    return "OK";
  }
}
