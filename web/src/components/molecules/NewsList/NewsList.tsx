import React, { PureComponent } from 'react';
import { NewsItem } from '../../atoms/NewsItem';
import { List } from './elements';
import { News } from './types';

type Props = {
  newsData: Array<News>;
};

class NewsList extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { newsData } = this.props;

    return (
      <List>
        <ul>
          {newsData.map(data => {
            return <NewsItem {...data} key={data.id} />;
          })}
        </ul>
      </List>
    );
  };
}

export default NewsList;
