import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import * as TabPropTypes from '../constants/tab-prop-types';
import TabItem from '../TabItem';
import withItemMaxWidth from '../withItemMaxWidth';
import styles from '../../Tabs.scss';


class TabItems extends React.Component {

  renderItem(item) {
    const {activeId, type, width, onClick, itemMaxWidth} = this.props;
    return (
      <TabItem
        key={item.id}
        item={item}
        itemMaxWidth={itemMaxWidth}
        isActive={activeId === item.id}
        type={type}
        width={width}
        onItemClick={onClick}
        />
    );
  }

  render() {
    const {items, type, dataHook} = this.props;
    const className = classNames(styles.itemsContainer, styles[type]);

    return (
      <ul className={className} data-hook={dataHook}>
        {items.map(item => this.renderItem(item))}
      </ul>
    );
  }

}

TabItems.propTypes = {
  type: TabPropTypes.type,
  items: TabPropTypes.items.isRequired,
  activeId: TabPropTypes.activeId,
  onClick: TabPropTypes.onClick,
  width: TabPropTypes.width,
  dataHook: PropTypes.string,
  itemMaxWidth: PropTypes.number
};

export default withItemMaxWidth(TabItems);
