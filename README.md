# Codeceptjs within Test

## Start and Run Tests

1. npm start;

2. npm run test:puppeteer;
    - PASSES

3. npm run test:playwright; (fails)
    - FAILS

## Playwright `within` test
### Expected Result
Due to using "within", we should click the 4th button and see the test "class-4 clicked"

### Actual Result
"within" appears to be ignored, resulting in the first button being clicked and the text "class-1 clicked" being visible

### Debugging
On Playwright, the initial line in "proceedClick" is `this._getContext()`:
https://github.com/codeceptjs/CodeceptJS/blob/3.x/lib/helper/Playwright.js#L2367

Whereas in Puppeteer it is `this.context`:
https://github.com/codeceptjs/CodeceptJS/blob/3.x/lib/helper/Puppeteer.js#L2299

When changing Playwright to match Puppeteer, within appears to work as expected.
