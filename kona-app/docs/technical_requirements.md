# Dots Technical Specifications


## Mobile App Objectives
The Dots Application was created to bridge the gap between people in need to organizations that can offer assistance within the Senegal region.
The application was created because it was difficult for people to find the correct organizations to help them with specific problems.
A mobile application will ask a series of questions that will guide the user to a list of organizations that can offer assistance for their specific problem.

## Special Considerations
* 50% of Kona's users are illiterate, therefore app must have icons, audio, and easy to understand language that will help to guide the user
* Since many of the users may only access the internet via mobile phone, and may have older mobile phones, the following considerations were taken into account:
  * Ability to use offline
  * Application shall be created for mobile devices
  * The application should light-weight so it will work with older devices

## Screens  
* Organizations can be viewed by category  
* Contact details are displayed for each organization
* Display most frequently searched for categories for easy access
* Display United Nations 17 Development Goals (SGD) so that it is apparent that Kona aligned with this shared vision
* Filter organizations by SGD category
 
## Product & Technical Specifications
The technical and specifications were chosen to keep the application light weight and simple. There is no database, only a JSON file. When a new organization is 
added, it will be appended to the JSON file. Not having a database allows for one less moving part in the tech-stack, which is why we decided to go this route.
* Ability to run on Google and IOS mobile platforms
* Frontend and backend developed on Expo/React-Native
* Data is stored as JSON 
* Audio feature allows people to have multiple ways to use the website. This feature was implemented for accessability to illiterate users.

## Data Architecture
 The original data was provided to us by the Product Owner. It was an unstructured Excel File with 8 columns of data that described the organization's objectives.
The data was restructured so an organization can have:
* 1 to many categories
*  0 to many sub-categories

This structure allowed the development team to filter on specific organizations in a pragmatic way, while also developing a methodology for Kona to start building a database.

* 8 Main Categories:
  1. Education
  2. Health
  3. Legal
  4. Social Services
  5. Employment
  6. Agriculture
  7. Migration
  8. Crisis

<img src="https://github.com/WomenPlusPlus/deploy-impact-21-kona-a/blob/main/kona-app/docs/images/updated_catagories.png" alt="Organization Categories">

We have found 140 subcategories within the data. It is my recommendation that these subcatagories are transformed to fall into similar groups so that the data can be filtered in a more maintainable way. An example of this would be to group synonyms such as "War" and "Armed Conflict" into the same group. By doing this, when a new organization joins Dots, they can simply tag themselves and the organization will become searchable to the user.

In the future, Kona will be able to have a new organization tag themselves with one or more of these categories, will build an entity-relationship between the organization and category in the database. It is my recommendation to Kona that they modify and add to these categories as needed.

Crisis is a special category that encompasses natural disasters, war, and other catastrophic events that displace entire populations. As a team, we thought this category was important, but did not know how it fit into the app we are building. 

Two graphs were created that show what are the most popular topics within the Dots ecosystem. The graphs tell us that the organizations most cater to Social Services, Education, and Health. The people that are supported most frequently are children and youth. Youth is a category that encompasses people in the age ranges of 12-20 that are capable of having some capacity for self autonomy, while children are dependent on their caretakers for all of their needs

<img src="https://github.com/WomenPlusPlus/deploy-impact-21-kona-a/blob/main/kona-app/docs/category_graph.png" alt="Frequency of Topics within all Organizations">


<img src="https://github.com/WomenPlusPlus/deploy-impact-21-kona-a/blob/main/kona-app/docs/user_graph.png" alt="Frequency of User Groups within all Organizations">


## Maintenance needs 
* Maintenance will be performed by Kona
 
 ## Future Work
* Admin panel:
  *  Modify questions asked to users
  *  Modify existing organization details 
  *  Add new organizations and tag the type of work they perform (Health, Education, etc)
  *  Ability to add new organization categories 
  *  Log in screen that saves user credentials
* The app should delete user history after X amount of time. In the cases of domestic abuse it could be harmful to the user to save information
* Language setting button that can change the language from French to the other primary languages spoken in Senegal.
* In order to develop the database, the PO or the organization itself, should tag their objectives in accordance with the categories that exist within the data, this will make the data easier to search and display on to the user.
