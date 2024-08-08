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
  - [License](#license)
  - [Links](#links)
  - [Keywords](#keywords)

## Installation

You can install the package using npm or yarn:

```bash
npm install my-bottom-sheet
```

## Introduction

BottomSheet is a versatile and user-friendly React component designed to provide a smooth bottom sheet experience. With customizable options, BottomSheet ensures a seamless integration into your project.

Key Features:

Responsive Design: Adapts to various screen sizes and devices.
Customizable Colors: Easily change the color scheme to match your app.
Smooth Animations: Enjoy smooth transitions and animations.

## Interactive Demo

![TimePicker Demo](https://github.com/HosseinAzadpour/react-time-picker-digital/blob/users/TimePickerPhoneSize.png)

## Features

- **Bottom Sheet**: Enhance user experience with a responsive and draggable bottom sheet.
- **Overlay**: Customize the overlay with smooth animations and touch interactions.
- **Customizable Design**: Adapt the component to fit your application's theme with various color and design options.

## Example

```jsx
import React, { useState } from "react";
import BottomSheet from "my-bottom-sheet";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <button onClick={() => setIsOpen(true)}>Open BottomSheet</button>
      <BottomSheet
        isOpen={isOpen}
        sendDataToParent={(open) => setIsOpen(open)}
        overlayOpacity={1}
        overlayBlur={2}
        backgroundColor={"#fff"}
      >
        <div>Your content here</div>
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
| `isOpen`           | `boolean`  | Required    | Determines if the bottom sheet is open or closed.   |
| `overlayOpacity`   | `number`   | 1           | Sets the opacity of the overlay.                    |
| `overlayBlur`      | `number`   | 2           | Sets the blur effect for the overlay.               |
| `backgroundColor`  | `string`   | "lightGray" | Sets the background color of the bottom sheet.      |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

## Keywords

react, bottom sheet, bottom drawer, slide panel, swipeable sheet, modal sheet, react component, overlay, customizable sheet, responsive design, mobile-friendly, smooth animations, UI component, draggable sheet, react UI, touch interaction, sheet overlay, pop-up panel, user-friendly, modern web
