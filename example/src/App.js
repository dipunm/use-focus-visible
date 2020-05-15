import React from 'react'

import { FocusVisibleManager, useFocusVisible } from 'use-focus-visible'
import 'use-focus-visible/dist/index.css'

function Button(props) {
  const { focusVisible, onFocus, onBlur } = useFocusVisible();

  return (
    <button
      style={{ outline: focusVisible ? "2px solid black" : "none" }}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {props.children} {focusVisible ? "yes" : "no"}
    </button>
  );
}

const App = () => {
  return (
    <div className="App">
      <div>
        <h3>
          Managed buttons, outline get outline when focused through keyboard
        </h3>
        <FocusVisibleManager>
          <Button>Has focus visible: </Button>
          <Button>Has focus visible: </Button>
          <Button>Has focus visible: </Button>
        </FocusVisibleManager>
      </div>
      <div>
        <h3>Unmanaged buttons, focusVisible behaves same as focus.</h3>
        <Button>Has focus visible: </Button>
        <Button>Has focus visible: </Button>
        <Button>Has focus visible: </Button>
      </div>
    </div>
  );
}

export default App