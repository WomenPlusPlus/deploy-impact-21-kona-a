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
* Show organizations by category  
* Show contact details for each organization
* Ability to click a email/call an organization from the contact screen
* Display most frequently searched for categories
* Display United Nations 17 Development Goals (SGD) should be displayed to show that Kona is aligned with this vision
* Display organizations by SGD
 
## Product & Technical Specifications
The technical and specifications were chosen to keep the application light weight and simple. There is no database, only a JSON file. When a new organization is 
added, it will be appended to the JSON file. Not having a database allows for one less moving part in the tech-stack, which is why we decided to go this route.
* Ability to run on Google and IOS mobile platforms
* Frontend and backend developed on Expo/React-Native
* Data is stored as JSON 

## Data Architecture
 The original data was provided to us by the Product Owner. It was an unstructured Excel File with 8 columns of data which described the organization's objectives.
The data was restructured so an organization can have 1 to many categories, and 0 to many sub-categories. This structure allowed the development team
to filter on specific organizations in a pragmatic way, while also developing a methodology for Kona to start building a database.
* 8 Main Categories:
  1. Education
  2. Health
  3. Legal
  4. Social Services
  5. Employment
  6. Agriculture
  7. Migration
  8. Crisis

In the future, Kona will be able to have a new organization tag themselves with one or more of these categories, will build an entity-relationship between the organization and category 
in the database. It is my recommendation to Kona that they modify and add to these categories as needed.

Crisis is a special category that encompasses natural disasters, war, and other catastrophic events that displace entire populations. As a team, we thought this category was important, but did not know how it fit into the app we are building. 

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
