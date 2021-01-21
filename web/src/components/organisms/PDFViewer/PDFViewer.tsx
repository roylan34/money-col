import React, { PureComponent } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Container } from './elements';
import { throttle } from '../../../../../shared/utils';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
  fileURL: string;
};

type State = {
  numPages: number;
  width: number;
};

class PDFViewer extends PureComponent<Props, State> {
  throttledSetDivSize: () => void;
  pdfWrapper: React.RefObject<HTMLElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      numPages: 0,
      width: 320,
    };
    this.throttledSetDivSize = throttle(this.setDivSize, 500);
    this.pdfWrapper = React.createRef();
  }

  componentDidMount() {
    this.setDivSize();
    window.addEventListener('resize', this.throttledSetDivSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttledSetDivSize);
  }

  setDivSize = () => {
    if (this.pdfWrapper && this.pdfWrapper.current)
      this.setState({
        width: Math.max(
          315,
          this.pdfWrapper.current.getBoundingClientRect().width * 0.8,
        ),
      });
  };

  onDocumentLoadSuccess = (pdf: { numPages: number }) => {
    this.setState({ numPages: pdf.numPages });
  };

  render = (): React.ReactElement => {
    const { fileURL } = this.props;
    const { numPages, width } = this.state;

    return (
      //@ts-ignore
      <Container ref={this.pdfWrapper}>
        <Document
          file={`https://cors-anywhere.herokuapp.com/${fileURL}`}
          onLoadSuccess={this.onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (element, index) => {
            return (
              <Page
                renderMode="canvas"
                pageNumber={index + 1}
                renderTextLayer={false}
                scale={1}
                key={`page${index}`}
                width={width}
              />
            );
          })}
        </Document>
      </Container>
    );
  };
}

export default PDFViewer;
