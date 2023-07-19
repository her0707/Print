export function cloneElement(
  element: HTMLElement | Document,
  params: Pick<PrintParams, "ignoreElements">
) {
  // TODO Print 시 예외 영역 작업필요
  const clone = element.cloneNode(true);

  return clone;
}

export function makePrintIframe(
  params: Pick<PrintParams, "title" | "frameId">
) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "style",
    "visibility: hidden; height: 0; width: 0; position: absolute; border: 0"
  );

  iframe.srcdoc = "<html><head><title>" + params.title + "</title>";
  iframe.setAttribute("id", params.frameId);

  return iframe;
}

export function addCustomStyleSheet(stylesheet: string) {
  const customStyle = document.createElement("link");
  customStyle.rel = "stylesheet";
  customStyle.href = stylesheet;
  return customStyle;
}
