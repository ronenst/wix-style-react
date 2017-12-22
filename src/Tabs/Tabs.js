import React from 'react';
import omit from 'omit';
import PropTypes from 'prop-types';

import WixComponent from '../BaseComponents/WixComponent';
import SideContent from './core/SideContent';
import TabItems from './core/TabItems';
import * as TabPropTypes from './core/constants/tab-prop-types';
import styles from './Tabs.scss';


class Tabs extends WixComponent {

  render() {
    const {sideContent} = this.props;
    const tabItemsProps = omit(['sideContent'], this.props);

    return (
      <div className={styles.container}>
        <TabItems {...tabItemsProps}/>
        <SideContent content={sideContent}/>
      </div>
    );
  }

}

Tabs.propTypes = {
  items: TabPropTypes.items.isRequired,
  onClick: TabPropTypes.onClick,
  activeId: TabPropTypes.activeId,
  type: TabPropTypes.type,
  width: TabPropTypes.width,
  sideContent: TabPropTypes.sideContent,
  dataHook: PropTypes.string
};

export default Tabs;
