import { addCustomStyleSheet, clonePrintArea, copyTargetStyles, makePrintIframe } from "./utils/html";
import { iframePrint } from "./utils/iframe-print";

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

  const styles = copyTargetStyles();

  if (stylesheet) {
    const customStyle = addCustomStyleSheet(stylesheet);
    styles.push(customStyle);
  }

  let copy = clonePrintArea(printArea, { ignoreElements });

  if (!(printArea instanceof Document)) {
    const printIframe = makePrintIframe({ title, frameId });
    iframePrint(copy, printIframe, styles)
      .then(iframe => document.body.removeChild(iframe))
      .catch(e => console.error(e));
  } else {
    window.print();
  }
}

export { print };
