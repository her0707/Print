import { addCustomStyleSheet, cloneElement, makePrintIframe } from "./utils/html";
import { iframePrint } from "./utils/iframe-print";

function print({
  node,
  stylesheet = "",
  ignoreElements = [".no-print"],
  iframe = true,
  title = "",
  frameId = "print-iframe",
}: PrintParams) {
  let printArea: HTMLElement | Document;

  if (node) {
    printArea = node;
  } else {
    printArea = document;
  }

  const targetStyles = document.querySelectorAll("style, link, meta, base, title");

  const styles = [...targetStyles];
  if (stylesheet) {
    const customStyle = addCustomStyleSheet(stylesheet);
    styles.push(customStyle);
  }

  let copy = cloneElement(printArea, { ignoreElements });

  styles.forEach(style => copy.appendChild(style));

  const printIframe = makePrintIframe({ title, frameId });

  iframePrint(copy, printIframe);
}

export { print };
