import { RootStateOrAny } from 'react-redux';
import { ProjectContent } from '../../../domain/entities';
import { RowData } from '../../templates/ProjectContentTemplate/types';
import { ChoicesValues } from '../../molecules/RecommendedDropdown/types';
import { ADD_PROJECT_CONTENT_REQUEST } from '../../../redux/projectContent/actionType';
import words from '../../../constants/words';

export type StateFromProps = {
  addProjectContentErrors: { [key: string]: string } | {};
  projectContentData: Array<RowData>;
  recommendedItems: { [key: string]: string };
  recommendedTitles: { [key: string]: string };
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    projectContent: {
      failedRequests,
      projectContents,
      recommended,
      hasNextPage,
      hasPrevPage,
    },
  } = state;

  const addProjectContentErrors =
    failedRequests && failedRequests[ADD_PROJECT_CONTENT_REQUEST];
  const projectContentData = Object.values(projectContents).map(
    projectContent => {
      const data = projectContent as ProjectContent & {
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
    },
  );

  let recommendedItems: { [key: string]: string } = {};
  let recommendedTitles: { [key: string]: string } = {};

  Object.values(recommended).forEach(projectContent => {
    const {
      recommendedListIndex,
      id,
      title,
    } = projectContent as ProjectContent;
    if (recommendedListIndex !== null) {
      recommendedItems[recommendedListIndex] = id;
      recommendedTitles[recommendedListIndex] = title;
    }
  });

  return {
    addProjectContentErrors,
    projectContentData,
    recommendedItems,
    recommendedTitles,
    hasNextPage,
    hasPrevPage,
  };
};
