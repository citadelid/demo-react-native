declare module '*.svg' {
  const svg: any;

  export default svg;
}

export type ProcessEnv = {
  CITADEL_WIDGET_URL: string;
  CITADEL_API_HOST: string;
};
