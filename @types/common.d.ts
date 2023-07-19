type PrintParams = {
  globalStyles: boolean;
  stylesheet: string;
  ignoreElements: string[];
  iframe: boolean;
  manuallyCopyFormValues: boolean;
  timeout: number;
  title: string;
  frameId: string;
  node: HTMLElement | Document;
};
