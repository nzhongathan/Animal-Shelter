# Animal Shelter

### Adapted from the [Bits of Good bootcamp final project](https://www.notion.so/gtbitsofgood/Animal-Shelter-c3495607f1d24f369fed458b6d6d7d90)

In my first full stack project, I created a web app for an Animal Shelter which incorporates the frontend, backend server, and database implementation primarily using the MERN stack.

### My Tech Stack
Frontend: React, CSS (Bootstrap)

Backend: JavaScript (NodeJS, Express)

Database: MongoDB (and Mongoose)

Other: NPM

### Webpage
#### Home page
![Homepage](https://user-images.githubusercontent.com/69808907/149990543-3e408e5c-d4cf-4564-955d-3c548473e736.png)

#### About Us Page
![About1](https://user-images.githubusercontent.com/69808907/149991072-1abc3271-e7ae-44e5-8c3d-29918fa36e3c.png)
![About2](https://user-images.githubusercontent.com/69808907/149991074-bec4808c-f3b3-4796-98e0-74673cb1ace2.png)
![About3](https://user-images.githubusercontent.com/69808907/149991075-35be996b-d3e0-4644-a4d5-243e8ee368f7.png)

#### Animal Display Page
In this page, users are able to select the animal that they want to view. Once this happens, an API request is sent to the server to retrieve just animals of that type, where the data for those animals are sent back and displayed. A pop up is also offered to view more information about a certain animal.
![Animal1](https://user-images.githubusercontent.com/69808907/149991453-2e4b2b1c-5009-4c21-bbd0-c3e789e23e7f.png)
![Animal2](https://user-images.githubusercontent.com/69808907/149991454-a163458e-5cd9-4c84-9321-7824af29208d.png)

#### Request Page
Here, users are able to submit a request for a certain animal currently in the shelter. When this happens, a HTTP request will be sent to the server to mark the animal as "Adopted" in the database, no longer showing it in the animal display.
![Request](https://user-images.githubusercontent.com/69808907/149991708-e98e4363-0229-4919-b8f0-a943380dccf5.png)

#### Adding An Animal
Finally, I have added a page for the workers at the Animal Shelter to input animals into the database. This requires a log-in page which I implemented with JWT (Json Web Token). In the database, a collection of users are stored with their email and password. When a user tries to log in, a request will be sent to retrieve a token which will then be verified, giving access to the page.
![Login1](https://user-images.githubusercontent.com/69808907/149992229-6c3339a6-9ce4-4e52-a21e-d3e541d2ec5b.png)
Once a user logs in, they can input information on the animal which will then be appended into the database as a new document.
![Login2](https://user-images.githubusercontent.com/69808907/149992230-370caf10-1e30-40dc-94da-71ba0e7f110b.png)

### MongoDB
Here are some screenshots from MongoDBCompass to show the data being stored.
![MongoDB1](https://user-images.githubusercontent.com/69808907/149992438-b0090e80-9b3f-45ee-b0eb-61fa129374f8.png)
![MongoDB2](https://user-images.githubusercontent.com/69808907/149992439-463f89de-fa67-4ba2-b5ba-f4c498c4871c.png)





