# Bad Siri 🙃
---

contributors:
Michael R. 
 https://github.com/mediumcrunch/

 ---

### Say hi to Bad Siri. 
She is the opposite of what we think of when you hear the name 'Siri'. She purposely calls you the wrong name because she doesn't care. You wanted help to find a pizza shop? Where the closest gas station is? Well she is only partly listening as she will most likely respond with a totally irrelevant understanding to what you wanted to know. 


This idea came from a bad robot that was built a while ago, and I thought:

 *Almost everyone uses Siri...what if she went 'off the rails' and started to disobey and give no regard to the user.*

---
 
## How to clone & load up Bad Siri

1. At the top you will see the button to `clone or download`
2. Clone the repo to your local machine
3. Run `npm install`
4. When done, run `npm start`
5. visit `localhost:3000`

**These steps assume you have NPM installed.**

If you need NPM please follow the link:
[npm Documentation](https://docs.npmjs.com/)


## How to run tests with Cypress window

1. In command line, in the main folder of entire project, type `node_modules/.bin/cypress open`
2. A Cypress window will appear and you can either select a specific test OR click `Run all specs`

### Run tests via command line (headless)
1. Run `npx cypress run` in command line
This defaults to using Electron as the browser, and will create a videos folder within Cypress for you to watch the test pass/fail. 

2. Run `npx cypress open --browser`
This will run the test in command line and a Cypress window.

** If you want Chrome then you will need to specify it as the browser, HOWEVER, currently headless Chrome does **not** record the test at all. Support for recording is on Cypresses to do list and is a feature many are waiting on.