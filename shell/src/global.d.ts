// src/global.d.ts
export {};

declare global {
  interface Window {
    __IS_SHELL_ENVIRONMENT__?: boolean;
  }
}
