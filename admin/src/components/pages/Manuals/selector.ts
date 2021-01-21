import { RootStateOrAny } from 'react-redux';
import { Manual } from '../../../domain/entities/';
import { ArticlesRowData } from '../../templates/ArticlesTemplate/types';
import { ADD_MANUAL_REQUEST } from '../../../redux/manual/actionType';
import words from '../../../constants/words';

export type StateFromProps = {
  addManualErrors: { [key: string]: string } | {};
  manualData: Array<ArticlesRowData>;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    manual: { failedRequests, manuals },
  } = state;

  const addManualErrors = failedRequests && failedRequests[ADD_MANUAL_REQUEST];
  const manualData = Object.values(manuals).map(manual => {
    const data = manual as Manual & {
      fileName: string;
      createdAt: Date;
    };

    const year = data.createdAt.getFullYear();
    const month = data.createdAt.getMonth();
    const date = data.createdAt.getDate();

    const createdDate = `${year}/${month}/${date}`;

    return {
      title: data.title,
      id: data.id,
      disclosure: (data.tags.regularContent
        ? words.noLimit
        : data.tags.eliteContent && data.tags.primeContent
        ? words.atLeastElite
        : words.primeOnly) as 'プライムランクのみ' | '制限なし',

      fileName: data.fileName,
      downloadableUrl: data.fileURL,
      publish: (data.isPublished ? words.release : words.unreleased) as
        | '公開'
        | '非公開',
      createdAt: createdDate,
      thumbnail: data.thumbnailURL,
    };
  });

  return {
    addManualErrors,
    manualData,
  };
};
