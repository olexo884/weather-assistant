export interface MessagesData {
  _id: string;
  sessionId: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  __v?: number;
}

export interface APISendData {
  status: 'success' | 'error' | "fail";
  data: {
    messages: MessagesData[]
  }
}

export interface APIGetData {
  status: 'success' | 'error' | "fail";
  results: number;
  nextCursor: string;
  data: {
    messages: MessagesData[]
  }
}

export type ChatProps = {
  messages: MessagesData[];
  nextCursor: string;
};