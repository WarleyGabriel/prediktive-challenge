# prediktive-challenge

These tests are written in JavaScript with SuperTest and Jest.

## Index

- [Requirements](#Requirements)
- [Getting Started](#Getting-Started)
- [Running tests](#Running-tests)

## Requirements

- node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
- npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

## Running tests

Run API tests and see the output:

```bash
npm run test
```

```bash
─────────────────────────────────────────────────────────────────────────────────────────────────
  PASS  src/test/#1.challenge.test.js
   ● Console
      [
        'https://duckduckgo.com/i/99b04638.png',
        'https://duckduckgo.com/i/39ce98c0.png',
        'https://duckduckgo.com/i/f0eb79ee.png',
        ...
      ]

─────────────────────────────────────────────────────────────────────────────────────────────────
  PASS  src/test/#2.challenge.test.js
   ● Console
      Apu Nahasapeemapetilon, Barney Gumble, Bart Simpson, Bleeding Gums Murphy, Chief Wiggum...

─────────────────────────────────────────────────────────────────────────────────────────────────
  FAIL  src/test/#3.challenge.test.js
   ● Assert if "min_abstract_length" is a valid number

    expect(received).toBe(expected) // Object.is equality

    Expected: "number"
    Received: "string"

       9 |   expect(minAbstractLength).toEqual(expect.anything());
      10 |
    > 11 |   expect(typeof minAbstractLength).toBe("number");
         |                                    ^
      12 | });

─────────────────────────────────────────────────────────────────────────────────────────────────
Test Suites: 1 failed, 2 passed, 3 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        3.902 s, estimated 4 s
─────────────────────────────────────────────────────────────────────────────────────────────────
```
