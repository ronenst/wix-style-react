import React from 'react';
import {storiesOf} from '@storybook/react';
import AutoDocs from 'wix-storybook-utils/AutoDocs';
import CodeExample from 'wix-storybook-utils/CodeExample';

import TextSource from '!raw-loader!wix-style-react/Text/Text';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';


storiesOf('Core', module)
  .add('Text', () => {
    return (
      <div>
        <AutoDocs source={TextSource}/>

        <CodeExample title="Standard" code={ExampleStandardRaw}>
          <ExampleStandard/>
        </CodeExample>
      </div>
    );
  });
