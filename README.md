#Code Challenge 5: Angular and MongoDB Hero Tracker

#Instructions
This assessment is intended to see how you are progressing with Angular, Mongo, Node, and Express. It is open-notes and open-book. No talking is allowed for the duration.

Once you are complete, check your work into a new repo and post it on GitHub. Submit this link with your assignment.

A friendly reminder that this is simply a way for us to see how you are individually doing with the technology. If this is no problem, great. If you are struggling with it, get done what you can and still submit. This assessment is not an indicator of how you will perform post Prime or a measure of overall success thus far. It just gives us an idea of where you are at.

Just relax and show us what you know!

Thanks and good luck!

##Your Hero Tracker
The Department of Superhero Knowledge needs an app to help track super hero aliases and powers. You are going to build them this app with Angular and MongoDB. This app will have the following features. Please do not add anything. Focus on the functionality listed.

##Hero Entry
This will have a form to fill out and create new heroes. Each hero will have the following information on their record:

* ```alias```  (this is their superhero name)
* ```first_name```
* ```last_name```
* ```city```
* ```power_name```

Store these in a Collection called ```Heroes``` with Mongo.

##Super Power Select
The above mentioned view will utilize a list of known super powers to populate a select list drop down. 
Each super power has just one field called: ```power_name```

Enter the following into your database of super powers:

* Invisibility
* Flight
* Super Speed
* Heat Vision
* Super Strength
* Accelerated Healing
* Power Blast
* Animal Affinity

Use the ```power_name``` string field as the value in your option elements. This would store the string on the Hero object. 


##Hero Listing & Removal
This should show a list of heroes, displaying all the information from the entry captured in the view before.
Each listing should have a button to delete the listing from the database.

##Node Server
Your app will need a Node/Express server that can serve static files. It should make use of route modules and run on port 4242.

##Database
If you follow the naming guidelines above for your Collection, there is no need to submit any information about your database.



#Challenge Grading Guidelines

##Reinforcement Needed
1 - Individual was missing many logic components to show that the group was on the path to completion. Code is generally unorganized and difficult to follow. Note that a grading instructor can use their own discretion to make the call on 'close' submissions. Meaning that an instructor can grade an 'almost complete' assessment as a 2 if their are indicators that the student would have gotten the assessment done with more time, or perhaps forgot some small syntactically. 

##Meets Expectations
2 - Individual was able to successfully complete the challenge based on the requirements of the project. Code is generally well organized. Variable and Function names are descriptive of what their purpose is. 

##Above Expectations
3 - Same as 2, but also includes: Abstraction is used in such a way that the application is modular where appropriate. 

##Challenge-Specific Considerations
1. Incomplete; doesn't run. Missing an entire View, Controller, or no client side routing.
2. Complete. All features work as expected.
3. Complete. Used a Factory or had excellent styling added.
