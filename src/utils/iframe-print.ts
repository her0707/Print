export function iframePrint(element: Node, iframe: HTMLIFrameElement, styles: any[], params?: PrintParams) {
  document.getElementsByTagName("body")[0].appendChild(iframe);

  if (iframe) {
    iframe.onload = () => {
      let printDocument = iframe.contentWindow?.document || iframe.contentDocument;
      if (printDocument) {
        printDocument.body.appendChild(element);
        for (const style of styles) {
          printDocument.head.appendChild(style);
        }

        iframe.contentWindow?.print();
      }
    };
  }
}
