## Instruction to run Automated Test

1. Open `test.js` file.

2. In the `test.js` file, edit the global variables:
```
var testName = 'testing'; //Enter path that are outside the 3 HTTP endpoints specified.
```
```
var name1 = 'BigCommerce_123'; //Enter a valid name consists of a-z,A-Z,0-9,_(underscore)
```
```
var name2 = 'BigCommerce@'; //Enter an invalid name that consists of character other than a-z,A-Z,0-9,_(underscore)
```
```
var twitterID1 = 'sportparagon'; //Enter a twitterID who have 0 tweet
```
```
var twitterID2 = 'BigCommerce'; //Enter a twitterID who have at least 1 tweet
```

3. Then, in the Terminal (on macOS) or Command Prompt (on Windows), navigate the directory to the root directory of your project.

4. Type `npm test` in the Terminal (on macOS) or Command Prompt (on Windows). 

5. The test will start running by itself.
