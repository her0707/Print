import { addCustomStyleSheet, cloneElement, makePrintIframe } from "./html";
import { iframePrint } from "./iframe-print";

function print({
  node,
  stylesheet = "",
  ignoreElements = [".no-print"],
  iframe = true,
  title = "",
  frameId = "print-iframe",
}: any) {
  let printArea: HTMLElement | Document;

  if (node) {
    printArea = document.querySelector(node);
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

  if (!(printArea instanceof Document)) {
    console.log(printArea);
    const printIframe = makePrintIframe({ title, frameId });
    iframePrint(copy, printIframe, styles);
  } else {
    window.print();
  }
}

export { print };
