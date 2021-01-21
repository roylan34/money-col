import React, { PureComponent } from 'react';
import { PurchaseModal as CanPurchaseModal } from '../../organisms/PurchaseModal';
import { ContentExcerpt } from '../../organisms/ContentList';
import { ModalContainer, CanPurchaseModalWrapper } from './elements';

type Props = {
  userPoints: number;
  isPurchasingContent: boolean;
  selectedPurchaseContent: ContentExcerpt;
  onPurchaseContent: () => void;
  onPurchasePoints: () => void;
  onPressCancel: () => void;
};

export default class PurchaseModal extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      onPressCancel,
      onPurchaseContent,
      userPoints,
      isPurchasingContent,
      selectedPurchaseContent: {
        id,
        title,
        description,
        points,
        thumbnailURL,
        tags,
        isRestricted,
      },
    } = this.props;

    return (
      <ModalContainer>
        <CanPurchaseModalWrapper>
          <CanPurchaseModal
            onPressCancel={onPressCancel}
            onPressBuy={onPurchaseContent}
            isRestricted={isRestricted}
            cardData={{ id, title, description, thumbnailURL, tags, points }}
            totalPoints={userPoints}
            isPurchasingContent={isPurchasingContent}
          />
        </CanPurchaseModalWrapper>
      </ModalContainer>
    );
  };
}
