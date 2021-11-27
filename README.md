<p align="center"><img width=30.5% src="https://kona-connect.org/wp-content/uploads/2021/03/cropped-connect_logo_positive-e1614970117884-300x97.png"></p>


   
   <h2 align="center">Dots: The alternative legal aid tech connecting individuals to the right organisations</h2>

<div align="center"> 
   
  ![test](https://img.shields.io/badge/Deploy-(impact)-red?style=flat&logo=appveyor)
  ![test2](https://img.shields.io/badge/expo-4.12.12-blue=flat&logo=appveyor&labelColor=blue)
  ![test3](https://img.shields.io/badge/created_by-reactnative-blue=expo&logoColor=expo)

</div>  


---

## 🧐  About 

Kona Connect’s legal team, together with students and expert volunteers from around the world, are developing a tool to connect people in need to 
the organisations best equipped to help them. This has been a 6 week volunteer project in collaboration with Kona-Connect and Women++. The team's goal is to develop an application that will connect Sengalese people to various NGO's and organizations that can provide assistance for specific needs.


## 🔺 Dependencies

The fastest way to get up and running is to use the Expo Go app on your iOS or Android device. Expo Go allows you to open up apps that are being served through Expo CLI.
```
npm install --global expo-cli
```


Download Expo Go on your mobile device

<a href="https://play.google.com/store/apps/details?id=host.exp.exponent">🤖 Android Play Store - Android Lollipop (5) and greater.
</a>

<a href="https://apps.apple.com/us/app/expo-go/id982107779">🍎 iOS App Store - iOS 11 and greater</a>



## ☎️ Using the Dots App

In command line, in the project root run

```
expo start
```
This will produce a QR code in terminal which can be scanned by the Expo app on your mobile phone. Scan this app to start the application on your mobile device.

## 🔩 Application Design

* React-Native
* Expo
* JSON for data storage

In order to keep the app light-weight, we decided to use a JSON to store the data infrastruture. 

## :octocat:  Directory Structure
 
```
kona-app
│   README.md
│   .gitignore
|   .App.js
|   .app.json
└───.expo-shared 
|
└───assets     
│    └─── fonts
|    └─── SDG-Icons
│    └─── logos 
|
└───components
|   │   globals
|   │   quetion
|   |   startQuestionaire       
└───routes
|    │   CoverStack.js
|      
└───screens
|   │   Accordian.js
|   │   Cover.js
|   │   DropdownQuestion.js
│   │   Filter.js
|   |   FilteredBySGD.js
|   |   FilteredOrgs.js
|   |   Home.js
|   |   QuestionWithButtons.js
|   |   Solo.js
|   |   StartQuestionnaire.js
│   
└─── data
|   │   LogoMaping.js
|   |   kona_orgs.json
|   │   raw_data.csv
|   |   raw_data.xlsx
│   |    └─── data_analysis
|   |   └─── data_transformation
│   |    └─── scripts
|   |         |    AddLogos.py
|   |         |    GenerateLogoMappings.py
|
└─── docs
|    │   technical_specification.md
|    │   Project_Summary_KONA_A.pdf
|    │   Project_Presentation_KONA_A.pdf
|    |
└───src 
│    │   
│    └───test     

```


<h2> :floppy_disk: Project Folder Description</h2>

<p>This Project includes directories:</p>
<h4>assets:</h4>
<ul>
  <li></b>  This directory contains all of the images and fonts.</li>
</ul>

<h4>components:</h4>
<ul>
  <li></b>  This folder contains the components used for the app, including global components, used on different screens (different types of buttons, Footer, Logo, Search bar, global stylesheet, etc.); more specific local components, including Filter section,  SearchedFor section and local styling; and organizations folder with components displaying NGOs. </li>
</ul>

<h4>routes:</h4>
<ul>
  <li><b>CoverStack.js</b> This is how navigation between the screens works in our app </li>
</ul>

<h4>screens:</h4>
<ul>
  <li><b>Home.js</b> First screen with Searchbar, fast help buttons, quick glance to organizations and SDGs section </li>
  <li><b>Filter.js</b> - Lets talk about what files to add here :) </li>
  <li><b>FilteredOrgs.js</b> - Lets talk about what files to add here :)</li>
  <li><b>StartQuestionnaire.js</b> - Lets talk about what files to add here :)</li>
</ul>

<h4>data:</h4>
<ul>
  <li><b>raw_org_data.csv</b> Data that was provided by Kona.</li>
  <li><b>raw_org_data.xlsx</b>  Original Spreadsheet provided by Kona.</li>
  <li><b>kona_orgs.json</b> Data that has been transformed, filtered, and grouped </li>
  <li><b>LogoMapping.js</b> Data + company logos that is used to render the app </li>
  <li><scripts dir</b> Scripts that append images to the JSON file, and create the new LogoMapping.js file that will be rendered to the application </li>
  <li><b>data_transformation dir</b> Jupyter Notebooks that show the process of how data was cleansed, filtered, and catagorized</li>
  <li><b>data_analysis dirs</b> -Jupyter Notebook with analysis on the frequency of times a catagory, SDG, and target group appears within the organization data </li>



</ul>
<h4>docs:</h4>
<ul>
   <li><a href="https://github.com/WomenPlusPlus/deploy-impact-21-kona-a/blob/main/kona-app/docs/technical_requirements.md
">technical_specifications.md</a> Contains information about the tech stack, decision making process, features, data structure, and future work. A link to Figma, where we created our UI/UX is included here </li>
   <li><b>Project_Summary_KONA_A.pdf</b> Project summry that includes how we worked together to form a collaborative and effective team, the lessons we learned, and other project details </li>
   <li><b>Project_Presentation_KONA_A.pdf</b> Final Presenatiation for this product</li>

</ul>


##  🙏 Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [discord-hackathon](https://github.com/campus-experts/discord-hackathon-template/blob/main/README.md)
* [Spam-Detector](https://github.com/ma-shamshiri/Spam-Detector/blob/master/README.md)
* [Markdown-Badges](https://ileriayo.github.io/markdown-badges/)

<table>
<tr>
    <td align="center">
        <a href="https://www.womenplusplus.ch/deploy-impact">
            <img src="https://static.wixstatic.com/media/e7fcfa_b0822451075045dea0abc7f2389d0938~mv2.jpg/v1/fill/w_1200,h_627,al_c/e7fcfa_b0822451075045dea0abc7f2389d0938~mv2.jpg"" width="300;" alt="Deploy(impact)"/>
            <br />
        </a>
    </td>
    <td align="center">
        <a href="https://www.womenplusplus.ch/">
            <img src="https://static.wixstatic.com/media/e7fcfa_ae690222c29f481cacd154a8cecccbfd~mv2.png/v1/fill/w_234,h_104,al_c,q_85,usm_0.66_1.00_0.01/women%2B%2B%20logo%20purple-2021.web" width="300;" alt="Women++"/>
            <br />
        </a>
    </td>
   </tr>
   </table>



## 👏 Authors

<!-- readme: collaborators,contributors -start -->    
<table>
<tr>
    <td align="center">
        <a href="https://github.com/TCarrPGH">
            <img src="https://avatars.githubusercontent.com/u/15948247?v=4" width="100;" alt="TC"/>
            <br />
            <sub><b>Tiffany Carruthers</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ymik0410">
            <img src="https://avatars.githubusercontent.com/u/78605063?v=4" width="100;" alt="TC"/>
            <br />
            <sub><b>Yulia Mikhaylova</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Alexboedtker">
            <img src="https://avatars.githubusercontent.com/u/71139736?v=4" width="100;" alt="TC"/>
            <br />
            <sub><b>Alexandra Bödtker </b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/katkava">
            <img src="https://avatars.githubusercontent.com/u/68730265?v=4" width="100;" alt="TC"/>
            <br />
            <sub><b>Kat Kavaliova</b></sub>
        </a>
    </td>
  </tr>
</table>

## License
<a href = "https://github.com/WomenPlusPlus/deploy-impact-21-kona-a/blob/main/LICENSE"> License </a>                     
                                                                                                 
                                                                                                 
<!-- readme: collaborators,contributors -end -->
                                                                                                 
                                        
