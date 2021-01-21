import { VideoLecture, VideoLectureTags } from '../../../domain/entities/';
import {
  VideoItemRow,
  RecommendedValue,
} from '../../templates/VideosTemplate/types';
import words from '../../../constants/words';

export const getFormattedValues = (
  tags: VideoLectureTags,
  isPublished: boolean,
  points: number,
): { publishSettings: string; limit: string; salesPlan: string } => {
  const publishSettings = isPublished ? words.release : words.unreleased;
  const limit = tags.regularContent
    ? words.noLimit
    : tags.eliteContent && tags.primeContent
    ? words.atLeastElite
    : words.primeOnly;
  const salesPlan = points === 0 ? words.free : words.paid;

  return {
    publishSettings,
    limit,
    salesPlan,
  };
};

export const getFormattedRowData = (
  video: VideoLecture & {
    createdAt: Date;
    fileName: string;
  },
): VideoItemRow => {
  const {
    title,
    lengthInMs,
    tags,
    thumbnailURL,
    description,
    createdAt,
    isPublished,
    views,
    fileURL,
    points,
    id,
    fileName,
    recommendedListIndex,
  } = video as VideoLecture & {
    createdAt: Date;
    fileName: string;
  };

  const { publishSettings, limit, salesPlan } = getFormattedValues(
    tags,
    isPublished,
    points,
  );

  const videoItem = {
    imgUrl: thumbnailURL,
    videoLength: lengthInMs,
    title,
    description,
  };

  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();

  const createdDate = `${year}/${month}/${date}`;

  return {
    videoItem,
    publishSettings,
    limit,
    createdAt: createdDate,
    views,
    downloadableUrl: fileURL,
    salesPlan,
    id,
    status:
      recommendedListIndex !== null
        ? `${words.recommended}${recommendedListIndex + 1}${words.displayIn}`
        : '',
    salePoints: String(points),
    fileName,
    recommendedValue: (recommendedListIndex !== null
      ? `${words.recommended}${recommendedListIndex + 1}${words.displayIn}`
      : words.notSet) as RecommendedValue,
  };
};
