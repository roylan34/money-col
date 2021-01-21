import { RootStateOrAny } from 'react-redux';
import { EAProgram } from '../../../domain/entities';
import { EAProgramRowData } from '../../templates/EAProgramsTemplate/types';
import { ChoicesValues } from '../../molecules/RecommendedDropdown/types';
import { ADD_EA_PROGRAM_REQUEST } from '../../../redux/eaProgram/actionType';
import words from '../../../constants/words';

export type StateFromProps = {
  addEAProgramErrors: { [key: string]: string } | {};
  eaProgramData: Array<EAProgramRowData>;
  recommendedItems: { [key: string]: string };
  recommendedTitles: { [key: string]: string };
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    eaProgram: { failedRequests, eaPrograms, recommended },
  } = state;

  const addEAProgramErrors =
    failedRequests && failedRequests[ADD_EA_PROGRAM_REQUEST];
  const eaProgramData = Object.values(eaPrograms).map(eaProgram => {
    const data = eaProgram as EAProgram & {
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
      description: data.description,
      disclosure: (data.tags.regularContent
        ? words.noLimit
        : data.tags.eliteContent && data.tags.primeContent
        ? words.atLeastElite
        : words.primeOnly) as 'プライムランクのみ' | '制限なし',
      salesPlan: (data.points === 0 ? words.free : words.paid) as
        | '無料'
        | '有料',
      salePoints: String(data.points),
      fileName: data.fileName,
      showOnMyPage: String(data.tags.showOnMyPage) as 'true' | 'false',
      downloadableUrl: data.fileURL,
      publish: (data.isPublished ? words.release : words.unreleased) as
        | '公開'
        | '非公開',
      createdAt: createdDate,
      thumbnail: data.thumbnailURL,
      status:
        data.recommendedListIndex !== null
          ? `${words.recommended}${data.recommendedListIndex + 1}${
              words.displayIn
            }`
          : '',
      recommendedValue: (data.recommendedListIndex !== null
        ? `${words.recommended}${data.recommendedListIndex + 1}${
            words.displayIn
          }`
        : words.notSet) as ChoicesValues,
    };
  });

  let recommendedItems: { [key: string]: string } = {};
  let recommendedTitles: { [key: string]: string } = {};

  Object.values(recommended).forEach(eaProgram => {
    const { recommendedListIndex, id, title } = eaProgram as EAProgram;
    if (recommendedListIndex !== null) {
      recommendedItems[recommendedListIndex] = id;
      recommendedTitles[recommendedListIndex] = title;
    }
  });

  return {
    addEAProgramErrors,
    eaProgramData,
    recommendedItems,
    recommendedTitles,
  };
};
