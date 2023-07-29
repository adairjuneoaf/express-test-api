declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: Number;
    }
  }
}

export {};