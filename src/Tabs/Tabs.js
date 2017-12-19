import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../BaseComponents/WixComponent';
import styles from './Tabs.scss';

class Tabs extends WixComponent {

  renderItem(item) {
    const {onClick, width, activeId, type} = this.props;

    const className = classNames(styles.tab, {
      [styles.active]: item.id === activeId,
    });

    const style = type === 'uniformSide' ? { width } : {};

    return (
      <li key={item.id} onClick={() => onClick(item)} className={className} style={style}>
        {item.title}
      </li>
    );
  }

  renderItems() {
    const {items, type} = this.props;
    const className = classNames(styles.itemsContainer, styles[type]);
    return <ul className={className}>{items.map(i => this.renderItem(i))}</ul>;
  }

  renderSideContent() {
    const {sideContent} = this.props;
    return sideContent && <div className={styles.sideContent}>{sideContent}</div>;
  }

  render() {
    const {hasDivider} = this.props;

    const className = classNames(styles.container, {
      [styles.hasDivider]: hasDivider,
    });

    return (
      <div className={className}>
        {this.renderItems()}
        {this.renderSideContent()}
      </div>
    );
  }
}

Tabs.tabTypes = ['compact', 'compactSide', 'uniformSide', 'uniformFull'];

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired
  })).isRequired,
  onClick: PropTypes.func,
  activeId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.oneOf(Tabs.tabTypes),
  hasDivider: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sideContent: PropTypes.node,
};

Tabs.defaultProps = {
  hasDivider: true,
};

export default Tabs;
