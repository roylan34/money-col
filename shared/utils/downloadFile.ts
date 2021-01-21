export const downloadFileBlob = (blob: Blob, filename: string): void => {
  if (blob && filename) {
    // Convert blob into a Blob URL
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = blobUrl;
    link.download = filename;

    document.body.appendChild(link);

    link.dispatchEvent(
      new window.MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );
    document.body.removeChild(link);
  }
};
