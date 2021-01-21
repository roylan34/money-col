import React, { PureComponent } from 'react';
import {
  Container,
  LimitedTextAreaWrapper,
  LargeTextAreaWrapper,
  LeftContainer,
  RightContainer,
  Labels,
  RadioWrapper,
  RadioButtonsWrapper,
  SellAmountContainer,
  SellAmountWrapper,
  SellAmountInput,
  Cover,
  ReplaceRecommendedContainer,
  RecommendedLabel,
} from './descContentsElements';
import { fileDescPlaceholder } from './constants';
import { RecommendedItems } from './types';
import ItemInfo from './ItemInfo';
import { TextArea } from '../../atoms/TextArea';
import { ImgFileInput } from '../../atoms/ImgFileInput';
import { RadioButtons } from '../../atoms/RadioButtonGroup';
import { TextInput } from '../../atoms/TextInput';
import { PublishDropdown } from '../../molecules/PublishDropdown';
import { ReplaceModal } from '../../molecules/ReplaceRecommendedModal';
import { RecommendedDropdown } from '../../molecules/RecommendedDropdown';
import { ChoicesValues } from '../../molecules/RecommendedDropdown/types';
import words from '../../../constants/words';

const indexOfChoice: { [key: string]: string } = {
  おすすめ1に表示する: '0',
  おすすめ2に表示する: '1',
  おすすめ3に表示する: '2',
  設定しない: '-1',
  '': '-1',
};

type Props = {
  name: string;
  title: string;
  desc: string;
  publish: string;
  disclosure: string;
  salesPlan: string;
  salePrice: string;
  thumbnail: string | null;
  recommendedValue: ChoicesValues | '';
  recommendedItems: RecommendedItems;
  recommendedTitles: RecommendedItems;
  onChangeTitle: (videoTitle: string) => void;
  onChangeDesc: (videoDesc: string) => void;
  onChangeFile: (file: File | null) => void;
  onChangeDisclosure: (disclosure: string) => void;
  onChangeSalesPlan: (salesPlan: string) => void;
  onChangeSalePrice: (salePrice: string) => void;
  onChangePublishSetting: (publishSetting: string) => void;
  onChangeRecommended: (recommended: string) => void;
  type: 'project' | 'video';
};

type State = {
  isReplaceVisible: boolean;
  recommendedSelected: string;
  oldTitle: string;
  indexInMsg: '1' | '2' | '3';
};

class FileDescContents extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const indexSelected = indexOfChoice[props.recommendedValue];
    const oldTitle =
      indexSelected === '-1'
        ? ''
        : props.recommendedTitles[
            (indexSelected as unknown) as keyof RecommendedItems
          ];

    this.state = {
      isReplaceVisible: false,
      recommendedSelected: '',
      oldTitle,
      indexInMsg: '1',
    };
  }

  onChangeSelected = (selected: string) => {
    const {
      recommendedItems,
      recommendedTitles,
      onChangeRecommended,
    } = this.props;
    const index = indexOfChoice[selected];

    if (
      selected === 'おすすめ1に表示する' ||
      selected === 'おすすめ2に表示する' ||
      selected === 'おすすめ3に表示する'
    ) {
      if (
        index !== '-1' &&
        recommendedItems[(index as unknown) as keyof RecommendedItems]
      ) {
        const indexInMsg = (parseInt(index) + 1).toString();
        this.setState(
          {
            recommendedSelected: selected,
            oldTitle:
              recommendedTitles[(index as unknown) as keyof RecommendedItems],
            indexInMsg: indexInMsg as '1' | '2' | '3',
          },
          () => this.setState({ isReplaceVisible: true }),
        );
      } else {
        onChangeRecommended(selected);
      }
    } else {
      onChangeRecommended(selected);
    }
  };

  onCancelReplace = () => {
    this.setState({ isReplaceVisible: false });
  };

  onReplace = () => {
    const { onChangeRecommended } = this.props;
    const { recommendedSelected } = this.state;

    this.setState({ isReplaceVisible: false }, () =>
      onChangeRecommended(recommendedSelected),
    );
  };

  render = (): React.ReactElement => {
    const {
      name,
      title,
      onChangeTitle,
      desc,
      salesPlan,
      onChangeDesc,
      onChangeFile,
      onChangeDisclosure,
      onChangeSalesPlan,
      salePrice,
      onChangeSalePrice,
      onChangePublishSetting,
      recommendedValue,
      type,
      publish,
      disclosure,
      thumbnail,
    } = this.props;
    const { isReplaceVisible, oldTitle, indexInMsg } = this.state;

    return (
      <Container>
        <LeftContainer>
          <LimitedTextAreaWrapper>
            <TextArea
              placeholder={fileDescPlaceholder[type].title}
              theme="gray"
              maxLimit={100}
              onChange={onChangeTitle}
              value={title}
            />
          </LimitedTextAreaWrapper>
          <LargeTextAreaWrapper>
            <TextArea
              placeholder={fileDescPlaceholder[type].description}
              theme="gray"
              onChange={onChangeDesc}
              value={desc}
            />
          </LargeTextAreaWrapper>
          <Labels>{words.fileDescPlaceholders.thumbnail}</Labels>
          <ImgFileInput onChangeFile={onChangeFile} value={thumbnail || null} />
          <RadioWrapper>
            <Labels>{words.fileDescPlaceholders.disclosure}</Labels>
            <RadioButtonsWrapper>
              <RadioButtons
                labels={words.disclosureValues}
                value={disclosure || words.disclosureValues[0]}
                onChange={onChangeDisclosure}
              />
            </RadioButtonsWrapper>
          </RadioWrapper>
          <RadioWrapper>
            <Labels>{words.fileDescPlaceholders.salesPlan}</Labels>
            <RadioButtonsWrapper>
              <RadioButtons
                labels={words.salesPlanValues}
                value={salesPlan || words.salesPlanValues[0]}
                onChange={onChangeSalesPlan}
              />
            </RadioButtonsWrapper>
          </RadioWrapper>
          <SellAmountContainer
            isVisible={salesPlan === words.salesPlanValues[1]}>
            <Labels>{words.fileDescPlaceholders.sellAmount}</Labels>
            <SellAmountWrapper>
              <SellAmountInput>
                <TextInput
                  onChangeText={onChangeSalePrice}
                  value={salePrice}
                  theme="noBorder"
                  isDynamicHeight
                />
              </SellAmountInput>
              <Labels>{words.fileDescPlaceholders.points}</Labels>
            </SellAmountWrapper>
          </SellAmountContainer>
        </LeftContainer>
        <RightContainer>
          <ItemInfo name={name} />
          <PublishDropdown
            onChange={onChangePublishSetting}
            labels={words.publishDropdownValue}
            defValue={publish || words.publishDropdownValue[0]}
          />
          <RecommendedLabel>{words.recommendedLabel}</RecommendedLabel>
          <RecommendedDropdown
            value={recommendedValue}
            onChangeSelected={this.onChangeSelected}
          />
        </RightContainer>
        <Cover isVisible={isReplaceVisible}>
          <ReplaceRecommendedContainer>
            <ReplaceModal
              oldTitle={oldTitle}
              newTitle={title}
              onCancel={this.onCancelReplace}
              onReplace={this.onReplace}
              index={indexInMsg}
            />
          </ReplaceRecommendedContainer>
        </Cover>
      </Container>
    );
  };
}

export default FileDescContents;
