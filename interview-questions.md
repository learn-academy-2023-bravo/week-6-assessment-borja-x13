# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:  To fix this mistake and properly connect the two tables we would need to create a migration that adds a column (cohort_id) to the students table. So, the foreign key will be named cohort_id and it will be in the Student model

Researched answer: The foreign key always goes on the belongs_to side,  which in this case it is the Student model. Foreign keys should always be an integer and be the modelname_id, which here is cohort_id.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that always require params be passed are show, edit, update and destroy. they need params because the route needs to know which specific item you want to process and params is how you effectively distinguish each item from another

Researched answer: the delete route also needs the ID params, I always get mixed up with delete and destroy. Delete is the form(GET request) and destroy is the action(DELETE request).

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands are: rails g model which creates a model or table; rails g resource which will also create the RESTful routes necessary for performing CRUD actions, and rails g migration which allows you to generate a migration file from the terminal

Researched answer: Some more generator commands: rails g scaffold which is a different way to generate the RESTful routes required but it is not recommended to be used as it creates a lot of unnecessary routes; rails g controller which generates a controller.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students => index controller method that will display all the students

action: "POST" location: /students => create controller method that will create a new student

action: "GET" location: /students/new => new controller method that returns a form to create a new student

action: "GET" location: /students/2 => show controller method that diplays a single student which is specified by the ID

action: "GET" location: /students/2/edit => edit controller method that returns a form for editing a single student specified by the ID

action: "PATCH" location: /students/2 => update contoller method that updates a single student entry as specified by the ID

action: "DELETE" location: /students/2 => destroy controller method that deletes a student entry from the db as specified by the ID

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    1.  As a user, I want to see a front page, so I can undestand what's being offered.
    2.  As a user, I want to be able to move around the overall suite, so that I can get more information.
    3.  As a user, I want to be able to get contact information, so that I can talk to a real person about anything I need.
    4.  As a user, I want to be able to see the resume, so that I can learn more about the developer.
    5.  As a user, I want to be able to see projects completed by the developer in a single location, so that I can select which ones I want to know more about.
    6.  As a user, I want to be able to select a single project, so that I can see it working live.
    7.  As a user, I want to be able to see at a quick glance what technologies the developer is familiar with.
    8.  As a user, I want to be able to make an account.
    9.  As a user, I want to be able to give feedback.
    10.  As a user, I want to be able to change between light and dark mode depending on my preference.