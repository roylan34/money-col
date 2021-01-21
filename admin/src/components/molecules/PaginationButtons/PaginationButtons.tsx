import React from 'react';
import { Button, Container, Page } from './elements';

type Props = {
  onPressNext: () => void;
  onPressPrev: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

type State = {
  pageNumber: number;
};

export default class PaginationButtons extends React.PureComponent<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pageNumber: 1,
    };
  }

  updatePageNumber = (mode: 'prev' | 'next') => {
    const delta = mode === 'prev' ? -1 : 1;

    this.setState(({ pageNumber }: State) => ({
      pageNumber: pageNumber + delta,
    }));
  };

  handleOnPressPrev = () => {
    this.props.onPressPrev();
    this.updatePageNumber('prev');
  };

  handleOnPressNext = () => {
    this.props.onPressNext();
    this.updatePageNumber('next');
  };

  render(): React.ReactNode {
    const { hasNextPage, hasPrevPage } = this.props;
    const { pageNumber } = this.state;

    return (
      <Container>
        <Button
          disabled={!hasPrevPage || pageNumber === 1}
          onClick={this.handleOnPressPrev}>
          {'<'}
        </Button>
        <Page>{pageNumber}</Page>
        <Button disabled={!hasNextPage} onClick={this.handleOnPressNext}>
          {'>'}
        </Button>
      </Container>
    );
  }
}
