# use-focus-visible

> A react hook based on https://github.com/WICG/focus-visible

> This package is a very slightly modified implementation of the work of [Jeroen Ransijn](https://github.com/airtable-JayRansijn). See the original source here: <https://github.com/WICG/focus-visible/issues/205>

[![NPM](https://img.shields.io/npm/v/use-focus-visible.svg)](https://www.npmjs.com/package/use-focus-visible) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install use-focus-visible
```
OR
```bash
yarn add use-focus-visible
```

## Usage

```tsx
import React from 'react'

import { FocusVisibleManager, useFocusVisible}  from 'use-focus-visible'

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
  )
}

function App() {
  render() {
    return (
      <FocusVisibleManager>
        <Button />
      </FocusVisibleManager>
    );
  }
}
```

## Credit
Credit to [Web Incubator CG](https://github.com/WICG) and [Jeroen Ransijn](https://github.com/airtable-JayRansijn) or the original work.

This project was created using [create-react-library](https://github.com/transitive-bullshit/create-react-library#readme)

## License

MIT © [dipunm](https://github.com/dipunm)
