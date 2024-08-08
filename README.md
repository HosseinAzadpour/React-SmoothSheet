# TimePicker

A bilingual (English/Persian) and responsive digital time picker library with customizable color options. Perfect for modern web applications requiring dynamic and stylish time selection.

## Table of Contents

- [TimePicker](#timepicker)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Introduction](#introduction)
  - [Interactive Demo](#interactive-demo)
  - [Example](#example)
  - [props](#props)
  - [License](#license)
  - [Links](#links)

## Installation

You can install the package using npm or yarn:

```bash
npm install react-time-picker-digital
```

## Introduction

TimePicker is a versatile and user-friendly React component designed to allow users to select time easily. With its intuitive interface and responsive design, TimePicker ensures a seamless experience across all devices.

Key Features:
Bilingual Support: TimePicker supports both English and Persian languages, making it accessible for a wider audience.
Responsive Design: The component adapts to various screen sizes and devices, ensuring a consistent user experience whether on mobile or desktop.
Customizable Color Options: Choose from a variety of color options to match your application's design and theme.
Smooth Scrolling: Navigate through hours and minutes with smooth scrolling functionality.
Easy Integration: Simply import the component and use it in your project with minimal

## Interactive Demo

Here is a screenshot of the `TimePicker` component:

![TimePicker Demo](https://github.com/HosseinAzadpour/react-time-picker-digital/blob/users/TimePickerDesktopSize.png)
![TimePicker Demo](https://github.com/HosseinAzadpour/react-time-picker-digital/blob/users/TimePickerPhoneSize.png)

## Example

Here is an example of how to use the TimePicker component in your React application:

```jsx

import React, { useState } from "react";
import { TimePicker } from "react-time-picker-digital";

function App() {
  var [hour, setHour] = useState();
  var [minute, setMinute] = useState();
  function handleDataFromChild(data) {
    setHour(data.hour);
    setMinute(data.minute);
    console.log("hour", hour);
    console.log("minute", minute);
  }

  return (
    <div className='App'>
      <TimePicker
        backgroundColor={"#fff"}
        color={"crimson"}
        textColor={"black"}
        numbersColor={"gray"}
        language={"en"}
        prevPage={"/"}
        nextPage={"/about"}
        sendDataToParent={handleDataFromChild}
      />
    </div>
  );
}

export default App;

```

## props

Prop Type Default Description
sendDataToParent function Required Function to send the selected time to the parent.
prevPage string Required Link to the previous page.
nextPage string Required Link to the next page.

| Prop               | Type       | Default   | Description                                                                                               |
| ------------------ | ---------- | --------- | --------------------------------------------------------------------------------------------------------- |
| `sendDataToParent` | `function` | Required  | A callback function to send the selected hour and minute to the parent component.                         |
| `prevPage`         | `string`   | Required  | The URL to navigate to when the back button is clicked.                                                   |
| `nextPage`         | `string`   | Required  | The URL to navigate to when the confirm button is clicked.                                                |
| `language`         | `string`   | "en"      | Determines the language of the timepicker. The user can select between Persian ('fa') and English ('en'). |
| `color`            | `string`   | "#2088B4" | Sets the color theme of the timepicker selected hour and minute. The user can select any valid CSS color. |
| `backgroundColor`  | `string`   | "#fff"    | Sets the color theme of the timepicker background color. The user can select any valid CSS color.         |
| `textColor`        | `string`   | "#000000" | Sets the color theme of the timepicker text color. The user can select any valid CSS color.               |
| `numbersColor`     | `string`   | "#bababa" | Sets the color theme of the timepicker numbers list color. The user can select any valid CSS color.       |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

https://github.com/HosseinAzadpour/react-time-picker-digital
