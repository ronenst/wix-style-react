import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import Tabs from './Tabs';
import styles from './Tabs.scss';

const tabsDriverFactory = ({element, wrapper, component}) => {
  const findFirst = query => $(element).find(query)[0];
  const getItemsContainer = () => findFirst('ul');
  const getItems = () => [...getItemsContainer().childNodes]

  return {
    exists: () => !!element,
    getTitles: () => getItems().map(childNode => childNode.textContent),
    clickTabAt: index => ReactTestUtils.Simulate.click(getItems()[index]),
    getActiveTabIndex: () => getItems().findIndex(childNode => childNode.classList.contains(styles.active)),
    isDefaultType: () => Tabs.tabTypes.every(tabType => !element.classList.contains(styles[tabType])),
    getItemsContainerClassList: () => getItemsContainer().classList,
    hasDivider: () => element.classList.contains(styles.hasDivider),
    getItemsWidth: () => new Set(getItems().map(item => item.style.width)),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r.childNodes[0]}>{ClonedWithProps}</div>, wrapper);
    },
    getSideContent: () => findFirst(`.${styles.sideContent}`),
  };
};

export default tabsDriverFactory;
