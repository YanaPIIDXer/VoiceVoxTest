import axios from "axios";
import type { AxiosResponse } from "axios";
import { apiEndpoints } from "@/constants/Api";
import type { AudioQueryRequest } from "@/interfaces/api/AudioQuery";
import type { SynthesisRequest } from "@/interfaces/api/Synthesis";

/**
 * audio_query
 */
export const callAudioQueryRequest = async (request: AudioQueryRequest): Promise<AxiosResponse<any, any>> => {
  const params = {
    speaker: request.speaker.id.toString(),
    text: request.text,
  }
  const searchParams = new URLSearchParams(params);
  return await axios.post(apiEndpoints.audioQuery + "?" + searchParams.toString());
}

/**
 * synthesis
 */
export const callSynthesis = async (request: SynthesisRequest): Promise<AxiosResponse<any, any>> => {
  return await axios.post(apiEndpoints.synthesis + "?speaker=" + request.speaker.id, request.query);
}
