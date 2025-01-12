# Calculator App

This is a **Calculator App** built using React. It provides a simple, user-friendly interface to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app allows users to interact with the calculator using both mouse clicks and keyboard events.

## Features
- Displays a full calculation expression and the current result.
- Performs basic arithmetic operations: addition (+), subtraction (-), multiplication (x), and division (/).
- Supports decimal points for floating-point operations.
- Includes a clear button to reset the calculation.
- Keyboard support for input (digits, operators, and "=").
- Error handling in case of invalid calculations, displaying "Error" when needed.

## Technologies Used
- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For styling the application and creating a responsive, visually appealing layout.

## How It Works
1. The app contains a set of clickable buttons representing digits (0-9) and operators (+, -, x, /).
2. The user can input calculations by either clicking on the buttons or using the keyboard. The keys Q, W, E, A, S, D, Z, X, C are assigned to respective calculator buttons.
3. The `oneStepAnswer` function handles input for digit and operator buttons. It updates the display accordingly and processes arithmetic calculations.
4. The "=" button evaluates the full calculation using JavaScript's `eval()` function and shows the result.
5. The app provides real-time feedback, displaying both the full calculation and the current result.
6. If there’s an error in the calculation (e.g., division by zero), the result is displayed as "Error".
7. The "AC" button resets the entire calculation to its initial state.

## How to Use
1. Click on the digits and operators or press the corresponding keys to enter a calculation.
2. Press the "=" button to see the result of the calculation.
3. Use the "AC" button to clear the display and reset the app.

This application uses React's state management to handle dynamic updates, allowing smooth interaction with the calculator. The design is simple yet efficient for performing daily arithmetic tasks.
