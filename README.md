# funda-assignment
An assignment made for Funda that displays 5 smoke tests for the website.

The tests were written using PlayWright version 1.50.1.
To run all 5 tests in headless mode, please execute `npm run test`.

The project contains three spec files:

## home.spec
The Home test spec contains two tests:

- A test that verifies some important links (elements) are displayed
- A test that verifies a use can navigate to one such link

## login.spec
The Login test spec contains one test:

- A test that verifies that incorrect user input displays a warning, and when a correct input is given, the user is able to log in to the website

## search.spec
The Search test spec contains two tests:

- A test that verifies a user can search (from the home page) for an area and see results
- A test that verifies a user can click a listing from the search page to get its details, and potentially reach out to the seller/agents.

In order to execute these tests or run the project, one must provide a Secrets file that exports:
- A user agent to run the test with
- A valid account for the login flow

In a project of bigger scale, I would probably use dotenv or similar to provide these secrets for different configurations
