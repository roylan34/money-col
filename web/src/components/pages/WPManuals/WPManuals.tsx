import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WPPost } from '../../../domain/entities';
import { WPManuals } from '../../templates/WPManuals';
import { ContentTypeKeys } from '../../molecules/ContentListSelector';

import { paths } from '../../../constants/routes/urls';
import { words } from '../../../constants';

type Props = {
  wpManuals: { [key: string]: WPPost };
  hasFetchedWPManual: boolean;
  fetchWPManualError: string;
  fetchWPManuals: (slug: string) => void;
} & RouteComponentProps;

export default class ManualsPage extends PureComponent<Props> {
  componentDidMount() {
    const slug = this.getSlug();

    this.props.fetchWPManuals(slug || '');
  }

  getSlug = (): string => {
    const {
      location: { search },
    } = this.props;
    const params = new URLSearchParams(search);
    const slug = params.get('slug');

    return slug || '';
  };

  onPressContentListItem = (contentType: ContentTypeKeys) => {
    this.props.history.push({
      pathname: paths.contents,
      state: {
        defaultContentType: contentType,
      },
    });
  };

  render = (): React.ReactElement => {
    const { wpManuals } = this.props;
    const slug = this.getSlug();
    const hasContent = slug && wpManuals[slug];

    const contentTypes = {
      pastVideos: words.pastVideos,
      pastProjectVideo: words.pastProjectVideo,
      eaProgram: words.eaProgram,
      manualList: words.manualList,
    };

    return (
      <WPManuals
        title={hasContent ? wpManuals[slug].title.rendered : ''}
        contentTypes={contentTypes}
        htmlString={hasContent ? wpManuals[slug].content.rendered : ''}
        onSelectContentType={this.onPressContentListItem}
      />
    );
  };
}
