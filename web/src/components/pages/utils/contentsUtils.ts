import {
  VideoLecture,
  ProjectContent,
  EAProgram,
  UserRankTitle,
  Manual,
} from '../../../domain/entities';

type Restriction = {
  isRestricted: boolean;
};
type VideoContents = {
  [index: string]: VideoLecture & Restriction;
};
type ProjectContents = {
  [index: string]: ProjectContent & Restriction;
};
type EAContents = {
  [index: string]: EAProgram & Restriction;
};
type ManualContentsType = {
  [index: string]: Manual;
};
type Tags = {
  showOnMyPage: boolean;
  primeContent: boolean;
  eliteContent: boolean;
  regularContent: boolean;
};

const getIsRestricted = (tags: Tags, rank: UserRankTitle): boolean => {
  if (rank === 'レギュラー') {
    if (!tags.regularContent) return true;

    return false;
  } else if (rank === 'エリート') {
    if (!tags.regularContent && !tags.eliteContent) return true;

    return false;
  } else {
    return false;
  }
};

export const setVideoPurchaseRestriction = (
  contents: VideoContents,
  rank: UserRankTitle,
): VideoContents => {
  let videoContents = { ...contents };
  for (let [key, value] of Object.entries(contents)) {
    videoContents = {
      ...videoContents,
      [key]: {
        ...value,
        isRestricted: getIsRestricted(value.tags, rank),
      },
    };
  }

  return videoContents;
};

export const setProjectContentPurchaseRestriction = (
  contents: ProjectContents,
  rank: UserRankTitle,
): ProjectContents => {
  let projectContents = { ...contents };
  for (let [key, value] of Object.entries(contents)) {
    projectContents = {
      ...projectContents,
      [key]: {
        ...value,
        isRestricted: getIsRestricted(value.tags, rank),
      },
    };
  }

  return projectContents;
};

export const setEAContentPurchaseRestriction = (
  contents: EAContents,
  rank: UserRankTitle,
): EAContents => {
  let eaContents = { ...contents };
  for (let [key, value] of Object.entries(contents)) {
    eaContents = {
      ...eaContents,
      [key]: {
        ...value,
        isRestricted: getIsRestricted(value.tags, rank),
      },
    };
  }

  return eaContents;
};

export const setManualContentViewByRank = (
  contents: ManualContentsType,
  rank: UserRankTitle,
): ManualContentsType => {
  let manualList = {} as ManualContentsType;

  for (let [key, value] of Object.entries(contents)) {
    const restrictedContent = getIsRestricted(value.tags as Tags, rank);

    if (!restrictedContent) {
      manualList[key] = {
        ...value,
      };
    }
  }

  return manualList;
};
