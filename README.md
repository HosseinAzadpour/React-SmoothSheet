# BottomSheet

A responsive and customizable bottom sheet component for React applications.

## Table of Contents

- [BottomSheet](#bottomsheet)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Introduction](#introduction)
  - [Interactive Demo](#interactive-demo)
  - [Features](#features)
  - [Example](#example)
  - [props](#props)
  - [API](#api)
  - [Tips and Tricks](#tips-and-tricks)
  - [FAQ](#faq)
  - [Contributing](#contributing)
  - [Contact Information](#contact-information)
  - [License](#license)
  - [Links](#links)

## Installation

You can install the package using npm or yarn:

```bash
npm install react-smooth-sheet
```

or

```bash
yarn add react-smooth-sheet
```

## Introduction

BottomSheet is a versatile and user-friendly React component designed to provide a smooth bottom sheet experience. With customizable options, BottomSheet ensures a seamless integration into your project.
<br/>

**Key Features:**
Responsive Design: Adapts to various screen sizes and devices.
<br/>
Customizable Colors: Easily change the color scheme to match your app.
<br/>
Smooth Animations: Enjoy smooth transitions and animations.

## Interactive Demo

![TimePicker Demo](https://github.com/HosseinAzadpour/react-smooth-sheet/blob/main/Demo.gif)

## Features

- Toggle visibility with a parent state.
- Customize overlay opacity and blur.
- Change the background color of the sheet.
- Accept custom content as children.

## Example

```jsx
import React, { useState } from "react";
import BottomSheet from "react-smooth-sheet";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <button onClick={() => setIsOpen(true)}>Open BottomSheet</button>
      <BottomSheet
        isOpen={isOpen}
        sendDataToParent={(open) => setIsOpen(open)}
        overlayDark={1}
        overlayBlur={2}
        backgroundColor={"lightGray"}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Your content </div>
        </div>
      </BottomSheet>
    </div>
  );
}

export default App;

```

## props

| Prop               | Type       | Default     | Description                                         |
| ------------------ | ---------- | ----------- | --------------------------------------------------- |
| `sendDataToParent` | `function` | Required    | Function to send the state to the parent component. |
| `isOpen`           | `boolean`  | false       | Determines if the bottom sheet is open or closed.   |
| `overlayOpacity`   | `number`   | 1           | Sets the opacity of the overlay.                    |
| `overlayBlur`      | `number`   | 2           | Sets the blur effect for the overlay.               |
| `backgroundColor`  | `string`   | "lightGray" | Sets the background color of the bottom sheet.      |

## API

**Functions**
<br/>

- BottomSheetShow()`: Shows the BottomSheet`.
- BottomSheetHide()`: Hides the BottomSheet`.

**Events**
<br/>

- onTouchStart`: Detects the touch start event`.
- onTouchMove`: Detects the touch move event`.
- onTouchEnd`: Detects the touch end event`.

## Tips and Tricks

Ensure the `isOpen` prop is managed by the parent component to control the visibility.
<br/>
Use the `sendDataToParent` function to update the parent state when the BottomSheet is closed.

## FAQ

Q: How can I customize the BottomSheet?
<br/>
A: You can customize it using the props provided like `overlayOpacity`, `overlayBlur`, and `backgroundColor`.
<br/>
Q: How do I close the BottomSheet?
<br/>
A: Use the `sendDataToParent` function to change the state in the parent component.

## Contributing

Contributions are welcome! Please create an issue or a pull request.

## Contact Information

For any questions or feedback, please contact me via:
<br/>

Email: [hossein.azp94@gmail.com]
<br/>

LinkedIn: [https://www.linkedin.com/in/hosseinazadpour]

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

https://github.com/HosseinAzadpour/react-smooth-sheet
