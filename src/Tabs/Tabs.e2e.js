import eyes from 'eyes.it';

import {tabsTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';


describe('Tabs', () => {

  const storyUrl = getStoryUrl('6. Navigation', '6.3 Tabs');
  const dataHook = 'story-tabs';

  eyes.it('renders enough tab items', () => {
    const tabsDriver = tabsTestkitFactory({dataHook});

    browser.get(storyUrl);

    return waitForVisibilityOf(tabsDriver.element()).then(() => {
      expect(tabsDriver.getItemsCount()).toBe(7);
    });
  });

});
