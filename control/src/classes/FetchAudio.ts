import type { Speaker } from "@/interfaces/settings/Speaker";
import { callAudioQueryRequest, callSynthesis } from "@/api/query";

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

    // 音声合成
    const response = await callSynthesis({
      speaker: this.speaker,
      query: query.data
    });
    
    const bytes = new Uint8Array(response.data);
    return "data:audio/wav;base64," + btoa(String.fromCharCode(...bytes));
  }
}
