import * as dotenv from "dotenv";
import { createJsonFile } from "./createJsonFile";
import WebClient from "./node_modules/@slack/web-api/dist/WebClient";

(async () => {
  dotenv.config();
  const token = process.env.API_TOKEN as string;
  const channelId = process.env.CHANNEL_ID as string;

  const client = new WebClient(token);
  const response = await client.conversations.history({
    channel: channelId,
  });
  const conversationHistory = response.messages;
  if (!conversationHistory) return console.log("メッセージ履歴がありません。");
  console.log(conversationHistory);

  createJsonFile("generated/newGenerated.json", conversationHistory as []);
})();
