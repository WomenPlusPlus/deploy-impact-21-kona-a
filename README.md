<p align="center"><img width=30.5% src="https://kona-connect.org/wp-content/uploads/2021/03/cropped-connect_logo_positive-e1614970117884-300x97.png"></p>


   
   <h2 align="center">Dots: The alternative legal aid tech connecting individuals to the right organisations</h2>

<div align="center"> 
   
  ![test](https://img.shields.io/badge/Deploy-(impact)-red?style=flat&logo=appveyor)
  ![test2](https://img.shields.io/badge/expo-4.12.12-blue=flat&logo=appveyor&labelColor=blue)
  ![test3](https://img.shields.io/badge/reactnative-reactnative-blue=expo&logoColor=expo)

</div>  


---

## 🧐  About 

Kona Connect’s legal team, together with students and expert volunteers from around the world, are developing a tool to connect people in need to 
the organisations best equipped to help them. This tool – a legal aid chatbot – accessible 24/7 through any smartphone device, will automatically 
guide its users, whilst simultaneously reducing aid agencies’ staggering workloads, freeing up time to help more individuals.

This has been a 6 week volunteer project in collaboration with Kona-Connect and Women++. The team's goal is to develop an application that will connect Sengalese people to various NGO's and organizations that can provide assistance for specific needs.


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
│
└───.expo-shared
│   │   file011.txt
│   │   file012.txt
│         
└───assets 
│    │   
│    └───images
│       │ logos
│       │     
│       └───fonts
│       │   file111.txt
│       │   file112.txt
│       │    
│       └───SGD
│       │   icons
│           
└───components
|   │   globals
|   │   quetion
|   |   startQuestionaire      
│   
└───routes
|    │   coverstack.js
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
    │   raw_data.csv
    │   kona_orgs.json
    |   modified_orgs.gs
└─── docs
    │   technical_specification.md

```


<h2> :floppy_disk: Project Folder Description</h2>

<p>This Project includes directories:</p>
<h4>assets:</h4>
<ul>
  <li></b>  This directory contains all of the images and fonts .</li>
</ul>

<h4>components:</h4>
<ul>
  <li></b>  This folder contains the global stying for the components used for the app </li>
</ul>

<h4>routes:</h4>
<ul>
  <li><b>CoverStack.js</b> - What does this one do? </li>
</ul>

<h4>screens:</h4>
<ul>
  <li><b>Accordian.js</b> - Lets talk about what files to add here :) </li>
  <li><b>FilteredOrgs.js</b> - Lets talk about what files to add here :)</li>
  <li><b>StartQuestionnaire.js</b> - Lets talk about what files to add here :)</li>
</ul>

<h4>data:</h4>
<ul>
  <li><b>raw_org_data.csv</b> - Data that was provided by Kona.</li>
  <li><b>process_data.json</b> - Filtered and cleansed data that was preformed in pandas </li>
  <li><b>modified_data.gs</b> - Output data used by the app </li>
</ul>
<h4>docs:</h4>
<ul>
  <li><b>technical_specifications.csv</b> - Contains information about the tech stack, decision making process, features, data structure, and future work.</li>
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
        <img src = "https://static.wixstatic.com/media/e7fcfa_b0822451075045dea0abc7f2389d0938~mv2.jpg/v1/fill/w_1200,h_627,al_c/e7fcfa_b0822451075045dea0abc7f2389d0938~mv2.jpg"
  width = "300"
   />
    <br />
    </td>
        <td align="center">
        <img src = "https://static.wixstatic.com/media/e7fcfa_ae690222c29f481cacd154a8cecccbfd~mv2.png/v1/fill/w_234,h_104,al_c,q_85,usm_0.66_1.00_0.01/women%2B%2B%20logo%20purple-2021.web"/>
    <br />
    </td>
  </tr>
    </td> 
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
<!-- readme: collaborators,contributors -end -->
