# Kainan - Filipino Restaurant Search and Save

Sometimes it's hard to find your favorite Filipino restaurant in a new city. You go to google but for whatever reason, you can't just find a simple list of all restaurants that meet your criteria and no more. That's where Kainan comes in - it's simple. Log in, search your city, find restaurants and save them! 

The goal of this project was more of an exercise in API manipulation. I used the Zomato API for the restaurant data and Google Maps is actively being integrated.

## What it includes

* Passport and Passport-Local for authentication
* Express sessions to keep user loggedin from page to page
* Sequelize models and migration for creating user accounts and widlife sighting information
* Setting for PostgreSQL
* Connect-Flash for error/success messages
* Bcrypt for hashing passwords preventing access to sensitive information
* (coming soon!) Google maps API to allow restaurant mapping

### User Model

| Column Name | SQL Type | Notes							|
|-------------|----------|----------------------------------|
| id | Integer | Serial primary key|
| createdAt | Date | Automatically generated |
| updatedAt | Date | Automatically generated |
| firstname | String | - |
| lastname | String | - |
| email | String | usernameField for login |
| password | String | Hashed with bcrypt |


### Restaurant Model

| Column Name | SQL Type | Notes							|
|-------------|----------|----------------------------------|
| id | Integer | Serial primary key|
| createdAt | Date | Automatically generated |
| updatedAt | Date | Automatically generated |
| userId | Integer | Connect restaurants to a user |
| menu | String | link to menu |
| locality | Integer | city |
| address | String | restaurant address |
| age | String | Age if known |
| latitude | Integer | Latitude from map pin |
| longitude | Integer | Longitude from map pin |
| name | String | restaurant name |


### Default Routes Supplied

| Method | Path | Location | Purpose |
|--------|-------------------|----------------------|-------------------------------------------|
| GET | / | server.js| Home Page|
| GET | /auth/login| controllers/auth.js | Login form page |
| POST | /auth/login | controllers/auth.js | Login submission + Redirect to profile/saved restaurants |
| GET | /auth/signup | controllers/auth.js | Signup form page |
| POST | /auth/signup | controllers/auth.js | Signup submission + Redirect to login |
| GET | /auth/logout | controllers/auth.js | Logout + redirect home |
| GET | /profile/pastsight | controllers/profile.js | View saved resturants |
| GET | /profile/edit/:id | controllers/profile.js | Edit saved resturants |
| PUT | /profile/edit/:id | controllers/profile.js | Edit submission + redirect to profile |
| DELETE | /profile/:id | controllers/profile.js | Deletes resturant |

## Steps to use

#### 1. Visit the site (https://kainan-app-bg.herokuapp.com/) and you'll be directed to the homepage.

![Home Page](https://res.cloudinary.com/glaserbw/image/upload/v1541550176/Portfolio/kainan.png)

#### 2. If you've never visited, click "Sign Up" to create an account.

![Signup Page](https://res.cloudinary.com/glaserbw/image/upload/v1542336646/signup.png)

#### 3. If you have visited, click "Login" sign into your account.

![Login Page](https://res.cloudinary.com/glaserbw/image/upload/v1542336719/loginpage.png)

#### 4. After logging in or signing up, you will be directed to search page.

![Past Page](https://res.cloudinary.com/glaserbw/image/upload/v1541550176/Portfolio/kainan.png)

#### 5. View restaraunts based on your search criteria. Click the '+' button to add them to your Hitlist

![Edit Page](https://res.cloudinary.com/glaserbw/image/upload/v1542336511/restaurantresults.png)
 
#### 6. View your hist list and link to each restaurants menu 

![New Page](https://res.cloudinary.com/glaserbw/image/upload/v1542336544/hitlist.png)


## Next Steps 

(11/15/18) This project is currently lacking the mapping function, which is being developed 

Otherwise, it can use more design features to be a bit more inviting. Currently using Materialize but more bespoke design would be good. 






















