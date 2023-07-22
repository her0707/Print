export function iframePrint(
  element: Node,
  iframe: HTMLIFrameElement,
  styles: any[],
  params?: PrintParams,
): Promise<HTMLIFrameElement> {
  document.getElementsByTagName("body")[0].appendChild(iframe);

  return new Promise((resolve, reject) => {
    iframe.onload = () => {
      try {
        let printDocument = iframe.contentWindow?.document || iframe.contentDocument;
        if (printDocument) {
          for (const style of styles) {
            printDocument.head.appendChild(style);
          }
          printDocument.body.appendChild(element);

          iframe.contentWindow?.focus();
          setTimeout(() => {
            iframe.contentWindow?.print();

            resolve(iframe);
          }, 1000);
        }
      } catch (e) {
        reject(e);
      }
    };
  });
}
