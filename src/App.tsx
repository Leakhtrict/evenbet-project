import React, { useState } from 'react';

import { Block1, Block2, StartButton } from 'components';

import './App.css';

export const App = (): JSX.Element => {
    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="blocks-wrapper">
        <Block1 />
        <Block2 />
      </div>
      <StartButton isButtonDisabled={isButtonDisabled} setButtonDisabled={setButtonDisabled} />
    </div>
  );
}
