# Checkout Kata

## Setup
- Clone this repository - please don't fork it!
- Run `npm install`

## Workflow
- Treat this like a real piece of work, but only spend an hour or two on it - it doesn't matter how far you get
- It must work in Node.js v6
- Feel free to use any npm modules and/or npm tasks
- Commit your work frequently

## Instructions
You should implement a supermarket checkout which:
- always accepts a string of items and returns the total price
- discounts any offers from the total price

Use the following pricing information:

| Item  | Price | Offer     |
| :---: | :---: | :---:     |
| A     | 50    | 3 for 130 |
| B     | 30    | 2 for 45  |
| C     | 20    | N/A       |
| D     | 15    | N/A       |

For example, passing in `'DABA'` returns `145`.
