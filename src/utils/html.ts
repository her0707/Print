type StyleArray = Element | Node;

export function clonePrintArea(element: HTMLElement | Document, params: Pick<PrintParams, "ignoreElements">) {
  // TODO Print 시 예외 영역 작업필요
  const clone = element.cloneNode(true);

  return clone;
}

export function makePrintIframe(params: Pick<PrintParams, "title" | "frameId">) {
  const { title, frameId } = params;
  const iframe = document.createElement("iframe");
  iframe.setAttribute("style", `visibility: hidden; height: 0; width: 0; position: absolute; border: 0`);

  iframe.srcdoc = "<html><head><title>" + title + "</title>";
  iframe.setAttribute("id", frameId);

  return iframe;
}

export function addCustomStyleSheet(stylesheet: string) {
  const customStyle = document.createElement("link");
  customStyle.rel = "stylesheet";
  customStyle.href = stylesheet;
  return customStyle;
}

export function copyTargetStyles() {
  const targetStyles = document.querySelectorAll("style, link, meta, base, title");
  const styles: Array<StyleArray> = [];

  Array.prototype.forEach.call(targetStyles, (targetStyle: Element) => {
    styles.push(targetStyle.cloneNode());
  });

  return styles;
}
