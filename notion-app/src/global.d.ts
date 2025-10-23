// Force this file to be treated as a module
export {};

declare global {
  interface Window {
    __IS_SHELL_ENVIRONMENT__?: boolean;
    __NOTION_BASE_PATH__?: string;
  }
}
