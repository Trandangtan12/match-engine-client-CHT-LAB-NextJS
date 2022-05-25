import { MatchEngineClient } from "./config/matchEngine.config";

const url = {
  apiEndpoint: "https://match-engine.noownerapi.com/",
  wsEndpoint: "wss://match-engine-ws.noownerapi.com",
};
export const match_engine = new MatchEngineClient(url);
