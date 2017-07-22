Feature: Sign up with user details

Background:
Given the URL of the twitter site
Then the twitter page must be displayed

Scenario Outline: SignUp with user details 
When user clicks the SignUp button
Then the signup page must be displayed
Then Enter the Full name, Phone/Email and Password "<Full Name>", "<Phone or Email>", "<Password>"
Then Click on the SignUp button

Examples:
|      Full Name           |  Phone or Email       |   Password   |
|     Swathi Sridharan     |   267-798-5279        |   abc123@1   |
|     Anuvarsha Gumpalli   | anuvarsha95@gmail.com |   abctest1   |