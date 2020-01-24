# _Leap Year_

#### _Application that takes in a year for user input and displays true or false based on whether the year is a leap year or not._, 23 January 2020

#### By _**Jamison Cozart & Kristina Hengster Tintor**_

## Description

_Takes a user input number and displays true or false based on a calculation to determine if the number would be a leap year or not._

## Setup/Installation Requirements

**Option 1:**

1. Clone the repository into preferred directory:
    ```
    git clone https://github.com/jamisoncozart/leap-year
    ```

3. Change into project directory
    ```
    cd leap-year
    ```

2. Open working directory in Visual Studio Code or preferred text editor:
    ```
    code .
    ```
3. Open `index.html` in Chrome or preferred browser (some styles might change if not openned in chrome)

**Option 2:**

1. Download the .zip file by clicking the `Clone or download` button on this repo page.

2. `Unzip` the downloaded .zip file.

3. Open `index.html` in a browser (Chrome preferred) to view the page.

## Behavior Driven Development Specifications

| Behavior                                              | Input    | Output|
| ----------------------------------------------------- |:--------:| -----:|
| If user input is NaN                                  | "hello"  | false |
| If user input is a float                              | "2004.3" | false |
| A year is not a leap year if it is not divisible by 4 | 1993     | false |
| A year is a leap year if it is divisible by 4         | 2004     | true  |
| A year is not a leap year if it is divisible by 100   | 1900     | false |
| A year is a leap year if it is divisible by 400       | 2000     | true  |

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery
* Git

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jamison Cozart & Kristina Hengster Tintor_**
