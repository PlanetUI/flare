# Flare Documentations

## Information Architecture

### User Welcome
* Preview Most Bought Course (Sort by Category)
* List Mentor
* List Review from Alumni

### Authentication
* Register
* Login
* Logout

### User Profile
* User Information
* List Course Taken
* Certificate Achieved

### Course
* List Course by Category
* Video Course

### Quiz
* Quiz by Category (1/week)
* Leaderboard Quiz & Reward

### Discussion
* Public Room Discussion
* Topic Room Discussion
* Room Discussion with Mentor
* Private chat

### Rent Mentor
* List Available Mentor with It's Information


## Explanation 

User Welcome = Containing list course, alumni review and mentor with good portfolio to gain user attention.

Authentication = User need to create an accout to access full feature of the system

Course = Contain List course and video course like Udemy

Quiz = System will giving a random quiz 1/week and there will be a reward for it

Discussion
* Public room discussion so user can talk to every user who accessed the system,
* Topic room discussion provide coversation for specific topic
* Room discussion with mentor is the same as before, but there is mentor in it for a range time that has been set before.
* Private chat, giving user access to chat specific user

Rent Mentor = User can pay mentor to tech/freely ask him privately


## Design System

* Frontend: Svelte (because svelte has faster performance than react.js, angular, vue.js. indeed react.js is more suitable for systems that have a lot of interaction with users, but this online learning system emphasizes easy to use to users so that users can more easily use this system. So because of that, svelte is used in order to facilitate its development as well as provide satisfactory performance for users)

* Backend: Node.js, Express.js (in order to minimize costs because it can be done by javascript-based developers because the frontend also uses a javascript framework so there is no need to look for new people who have skills in different fields)

* Database: NoSQL (This online learning system has a lot of data that may have to be stored in the form of documents or collections, because of that this system can use NoSQL)

* Server: Nginx (With sub-process management, Nginx can respond to requests from customers properly. Plus, Nginx is server event based. Which means, the server only responds to requests from users. This of course will save memory. In addition, Nginx can also save computer resources. In other words, Nginx doesn't consume too much RAM. So this can certainly save costs that will be incurred)


## Estimation Cost

* Still cannot determine

