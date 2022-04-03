# mvc-tech-blog

Building an Model-View-Controller (MVC): Tech Blog

# Description - Why did build an employee management?
The main purpose to build this is to create a Tech blog, this software uses a variety of files, database storage, and technology. Any blog on the home page can be seen and clicked to see further information provided by the user. The author of both the post and the comments will be visible.

If a user wants to start their own blog, they can register for one or log in to an existing one. They now have access to a dashboard where they may post blogs after logging in. They can also remark on other blogs by leaving their name and a date.

The user can then logout and discontinue their session, or the session can be timed out. The user is also able to edit the comment or add other comments onto the blog. User can also delete their posts.

# What does this project do? and how?

The packages required to run are:

-bcrypt, connect-session-sequelize, dotenv, express
, express-handlebars, express-session, mysql2, sequelize and nodemon.

A database will need to be created first then seeded wih data.

The application is deployed on Heroku at https://mvc-tech-blog-1.herokuapp.com/

On Heroku, go to the webpage. As a guest, you can read posts and click on links; as a registered user, you may add your own posts and comment on others'. You can also alter the names and content of your own posts, as well as delete them. You can also change your password, email, and username.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

# So far what has been achieved and further improvements?

All requirements above has been achieved.

# To access Github Repository 

1. https://github.com/samira0101/mvc-tech-blog.git


# References

1. https://solveforums.msomimaktaba.com/threads/solved-react-sequelize-server-responding-with-404-but-works-localy.615905/

2. https://expressjs.com/en/guide/routing.html

3. https://www.geeksforgeeks.org/express-js-res-render-function/

4. https://www.tabnine.com/code/javascript/functions/express/Router/delete

5. https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API

6. https://developer.mozilla.org/en-US/docs/Web/API/Response/json

7. http://expressjs.com/en/resources/middleware/session.html

8. https://sequelize.org/master/manual/model-basics.html

9. https://www.tabnine.com/code/javascript/functions/init

10. https://sequelize.org/v5/manual/associations.html

11. https://www.tabnine.com/code/javascript/functions/bcrypt-nodejs/compareSync

12. https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

13. https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/

14. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

15. https://handlebarsjs.com/guide/partials.html#partial-parameters

16. https://handlebarsjs.com/guide/

17. https://codedec.com/tutorials/find-current-day-date-and-time-in-java-script-with-different-formats/

18. https://sequelize.org/v5/manual/models-definition.html#configuration