export interface PreviewCardParams {
  thumbnailURL: string;
  title: string;
  points: number;
  id: string;
  description: string;
  tags: {
    showOnMyPage: boolean;
    primeContent: boolean;
    eliteContent: boolean;
    regularContent: boolean;
  };
}
