Project Overview

This project is a hands-on exploration of end-to-end testing using Cypress. I used the Expand Testing practice platform to build a suite that handles real-world scenarios like form validation, complex dropdowns, file uploads, and dynamic UI elements.

What I Picked Up

1. Test Architecture
I moved away from writing "one big script" to using a structured approach with describe() and it() blocks. I also leaned on the beforeEach() hook to handle navigation, ensuring every test starts from a clean state.

2. The Locator Battle
One of the biggest takeaways was learning that not all locators are equal. While Cypress can find almost anything, I learned that IDs (#id) are the gold standard for stability. I also practiced using data-testids, which are great because they don't break even if the styling or layout of the page changes.

3. Assertions & Validation
I implemented a variety of assertions to go beyond just "clicking buttons." I used:
- Visibility checks (be.visible) for scrolling logic.
- Value matching (have.value) for dropdowns.
- State checks (be.checked) for radio buttons and checkboxes.
- Text validation (contain) to verify that the "Success" messages actually appeared after a form submission.

4. Smart Waiting
I spent time researching why cy.wait(5000) is considered a "bad habit." Instead, I relied on Cypress's Automatic Waiting and Retry-ability. If a page is a bit slow, Cypress handles the timing naturally rather than forcing a hard pause, which makes the whole suite much faster.