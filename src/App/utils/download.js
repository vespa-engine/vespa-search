import FileSaver from 'file-saver';

export function downloadFile(filename, content) {
  const blob = new Blob([content], {
    type: 'text/plain;charset=utf-8',
  });
  FileSaver.saveAs(blob, filename);
}
