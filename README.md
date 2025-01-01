# Next.js 15 - 404 Error Handling

This repository demonstrates a common issue in Next.js 15 applications where a 404 error caused by a missing image results in a crash.  The solution shows how to gracefully handle this error.

## Bug
The `pages/about.js` file attempts to load an image that does not exist.  This causes a runtime error and crashes the page.

## Solution
The `pages/aboutSolution.js` file demonstrates a solution using error boundaries and optional chaining to prevent the crash. This gracefully handles the missing image by not rendering it without causing the entire page to fail.