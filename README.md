
Seed file:
  Please SEED database before checking. I have included a seed file that should auto-seed.
  After seeding: in my /server/app.js file where I sync my database, you will want to console.log out
  "force:true" in sync and the function below it called "createData" or your table will continually drop and/or you will continue to add data every time you refresh your browser.

  General App Idea:
    So the idea is an app that gives parents the ability to track data from their baby and visualize that data so that they can keep a record and spot trends. I use the chartjs library to visualize the data.


  sign-up:
    The Sign-up container has local state. redirects to Login. I suggest creating an account and then signing in.

Login:
  The LoginContainer has local state and a secure login. I've included authenication middleware. I recommend trying 2 logins...the one you created and also selecting one of the "Parents" in the database. For BEST RESULTS -> select one of the first 8 parents in the database because their baby will have more data associated with it which will demonstrate my charts. the password is hashed...but I've set it with the seed file to be the first name of the parent. For Example:
    login -> email: 'firstName'@'lastName'.com
            password: 'firstName'

  Parent Profile:

    On successful login, you're directed to a view with some buttons/links. hitting the "my babes" link will render that parents babies. Selecting the underlined baby will bring up the baby stats. hitting the red X will delete the baby from the database. clicking add baby will add another baby to the database. You will need to refresh the browser after adding a baby to get it to render unfortunaly. clicking update profile will allow you to update your profile. pretty self explanatory. I had trouble getting update to persist in the database. It would not persist after I the passed information and submited and the code looked good to me..... Things I would add if I had some more time: update baby stats, style the app much better.

    Let me know if you have any questions.
