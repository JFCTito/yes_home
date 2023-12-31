<p align="center"> 
  <img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/YesHomeblanco.png" width="350" height="150">
</p>



<h1 align="center">Yes Home</h1> <br><br>


<h2>Table of Contents</h2>

1.Team.
2. Project Description and Technologies.<br>
3. How to Install and Run the Project.<br>
4. Test: Back (spring boot).<br>
5. User Story: Client and Stakeholders.<br>
6. Figma.<br>



<h2 align="center">TEAM</h2><br>
* Maite Presa. Product Owner.<br>
* Jesús Fajardo . Scrum Manager.<br>
* Fco Manuel Saavedra Galiano. Developer.<br>
* Sabina Perez. Developer.<br>
* Aida Herraiz Caseres. Developer.<br>
* Maite Presa. Developer.<br>
* Angela Coello. Developer.<br>
* Franci Sánchez Zambrano. Developer.<br>
* Victor Nash. Developer.<br>
* Ahinoa Aguado. Developer.<br>
  
---
<h2 align="center">Project Description</h2><br>

<h3>Backend with Spring Boot:</h3> 

The backend part of the application is built using the Spring Boot framework. Spring Boot is a popular and robust tool that enables fast and efficient development of Java applications, providing an MVC (Model-View-Controller) architecture to organize the code.<br><br>

<h3>Frontend with React:</h3> 

The frontend part of the application is developed using React, an open source JavaScript library for building user interfaces. React is known for its focus on reusable components, allowing for a fast and interactive user experience.<br><br>

<h3>Communication between Frontend and Backend:</h3> 

Spring Boot is used to develop an API that acts as a communication interface between the frontend and the backend. React uses this API through the useEffect hook to make a request to the Spring Boot backend RESTful API when the component is first mounted. It then uses the useState hook to store the advertisement data fetched in the advertisements state, allowing it to be displayed in the UI and kept up to date as it changes.<br><br>

<p align="center">
<img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/apiPostman1" width="700" height="500">
<img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/apiPostman2" width="700" height="500">
</p>

<h2 align="center">Technologies:</h2>

<p align="center"> 
  <img src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" width="75" height="75">
  <img src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" width="75" height="75"> 
</p>

<p align="center"> 
  <img src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" width="75" height="75">
  <img src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" width="75" height="75">
  <img src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" width="75" height="75">
</p>

<p align="center"> 
  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" width="75" height="75">
  <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" width="75" height="75">
  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" width="75" height="75">
  <img src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" width="75" height="75">
  <img src="https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png" width="75" height="75">
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="75" height="75">
  <img src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png" width="75" height="75">  
</p>


---
<h2 align="center">How to Install and Run the Project</h2><br>

### Environment configuration:

Make sure to have Java Development Kit [JDK](https://www.oracle.com/java/technologies/downloads/) installed on the server where the Spring Boot part will be hosted.
Make sure to have [Node.js](https://nodejs.org/es) and npm [Node Package Manager](https://www.npmjs.com/) installed on the server where the React part will be hosted.<br><br>

### Backend [the Spring Boot](https://spring.io/projects/spring-boot):
Make sure that the database and other application settings are correctly set in the application.properties.
Compile the Spring Boot project using the Maven build command, such as mvn clean install to create the JAR file.<br><br>

### Frontend [React](https://es.react.dev/):
Run the npm install command to install all the necessary dependencies.
Configure the API URLs in the React application to point to the server where the Spring Boot part will be hosted. This can be done using environment variables or configuration files, so that they can be easily switched between development and production environments. You can use http://localhost:4000/advertisments.<br><br>

---
<h2 align="center">Test: Back (spring boot)</h2><br>

<p align="center">
<img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/test_back1.png" width="700" height="500">
<img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/test_back2.png" width="700" height="500">
</p>

---

<h2 align="center">User Story: Client and Stakeholders</h2><br>

### The Client made the following request:<br>

<p>
What are the main domain objects in a marketplace?

1. Advertisement ⇒ the published content:
  a. Flats, houses, premises, ... in fotocasa or habitaclia.<br>
  b. Job offers on InfoJobs.<br>
  c. Cars or motorcycles on ¿adivinas? <br>
  d. Almost everything (including the above) on milanuncios.<br>
  
2. User ⇒ the person looking for content.<br>
   a. For free!<br>
   
3. Customer ⇒ the person or company posting content.<br>
  a. Also called "advertiser" or "professional user".<br>
  b. The customer pays to publish content.<br>

4. Contact ⇒ when the person searching is interested in an ad and decides to contact the advertiser<br>
  a. A perfect match!<br>

  And some of the main functionalities for our users:<br>

5. Search: <br>
  a. By features.<br>
  b. By free text.<br>
  c. By geographic area<br>
  
6. Favorite ads<br>

7. Alerts ⇒ notifications when there are new ads that meet my searches or some other criteria.<br><br>

### Stakeholders: Value proposition<br>

Welcome to YesHome, your number one destination to find your dream home. We are a vibrant and comprehensive marketplace that connects property buyers and sellers, offering a unique and simple experience for all users interested in the real estate market.

Key features:

Wide selection of properties: At YesHome, we have an extensive database of homes for sale of various typologies, sizes and locations. Whether you are looking for a cozy apartment in the city, a spacious house in the suburbs or a luxurious property by the beach, we have the perfect option for you.

Easy navigation: Our intuitive and user-friendly platform makes finding your next home a hassle-free experience. With powerful search filters and a user-friendly interface, you can refine your preferences and find properties that fit your needs and budget.

Detailed information: We believe in transparency and accurate information. Every property listing on YesHome includes high-quality photos, detailed descriptions and relevant data about the neighborhood, nearby amenities, key features and more. So you can make informed decisions.

Verified user profiles: We ensure the safety and trust of our users by verifying profiles. Both buyers and sellers must go through an authentication process to ensure the legitimacy of transactions.

---

### [Figma ](https://www.figma.com/file/iBVm45jcBsfdfQI7vqBfZZ/prototipo?type=design&node-id=38%3A196&mode=design&t=wbjklZPv8EfdLV1R-1)

<p align="center">
<img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/figma1.png" width="150" height="250">
<img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/figma2.png" width="150" height="250">
<img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/figma3.png" width="150" height="250">
<img src="https://github.com/JFCTito/grupo_14/blob/dev/front-end/src/img/figma4.png" width="150" height="250">
</p>

---


