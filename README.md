# Pre-requisite
 - clone the repository || Download and unzip this file
 - Node version v12.19.0 or higher `(https://nodejs.org/en/download/)`
 
# Set up
 - run `npm install` This will install all the packages and its dependencies
 - on terminal do `cypress install` This will install the latest version of cypress on your machine
 
# Running test locally
 - To start tests run `npm test` within the root

# Running test Headless
 - Run `npx cypress run` within the root
 
     
 # Additonal Notes
   - Whenever test fails, it will take screenshot of the failure and save in path
     `cypress/screenshots/xxxx.feature`
     
   - Vidoes are stored in this path
     `cypress/videos/xxx.mp4`