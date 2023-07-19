export function iframePrint(
  element: Node,
  iframe: HTMLIFrameElement,
  params?: PrintParams
) {
  document.getElementsByTagName("body")[0].appendChild(iframe);

  if (iframe) {
    iframe.onload = () => {
      let printDocument =
        iframe.contentWindow?.document || iframe.contentDocument;
      if (printDocument) {
        printDocument.body.appendChild(element);
        iframe.contentWindow?.print();
      }
    };
  }
}
