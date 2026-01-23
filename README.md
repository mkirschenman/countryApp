Country App

Description:
This app is being used as an example to creating a countries explorer app. See this github link https://github.com/uplift-delivery/katas/tree/main/countries.
The goal is to create an app that matches the description mentioned in the countries explorer and solve the problem.

Before Cloning the APP:

Make sure you have node and npm installed. At the time I created this, I was using npm version 11.6.2 and node version 24.13.0.
You may go here to download https://nodejs.org/en/download

For this app you will also need to install ExpoGo on an Android or IOS device.
This will be used to see the app running.
Note you may be able to set this up to run on an emulator as well. ExpoGo is good for simplicity.

Instructions to run the app.

1. Open a terminal that you can execute commands, and navigate to the location you want the app located.
1. Clone the code repo onto your own machine by using  "git clone https://github.com/mkirschenman/countryApp.git"
2. In the terminal enter the app folder created
3. Install dependencies using "npm install"
4. Run the command "npx expo start" to start the app.
5. Scan the QR code shown to access the APP with Expo go.

Helpful commands:

1. To completely clear node modules an reinstall you may do this...
  rm package-lock.json
  rm -rf node_modules
  npm install

2. To restart the app and clear cache you may do this...
   npx expo start --reset-cache

Decisions/ Trade-offs:

The first decision I made was what kind of APP to create and what languages to use. I decided to make it using Expo so it can work on Android or IOS.
Also speed, one of the reasons this decision was made was that my last job used this framework and language. It was an easier start based on what I have already learned.

Next, I decided to use tanstackQuery to execute the queries. Similar to the last decision. I had used this in my last job. The advantages include not re-calling for the query data once it exists on a screen.

Next, On the main screen I decided to set up the user data in a scrolling way for users to access. Users can scroll down to access any of the countries. For simplicity, for now,
I decided to only have the user be able to select one favorite country which is at the top of each screen. I had considered adding an icon star or image button for the users
to select a favorite. Again, due to simplicity, I just chose to make it a button with some text. A button for more information was chosen the same way. But it might be nice to have these
both be icon type buttons instead. I had also considered adding another screen for favorites list. Again due to simplicity this was axed.

Next, on the Details screen I created a simple display box for the detailed data. I added labels for the data so it was better understood. Some of the data coming from the API was
not in a predictable format. This is why Languages and Currencies is displayed as [object object]. This is an issue but did not decide to resolve it yet.

Larger decisions regarding sharing data between screens. I decided to go with two different methods for sharing data. For the Favorites a Context was used because it seemed like a more global
item to share between screens so a Provider was set up to be used. The data on the details screen was passed using just params. I wanted to share just the data needed on the next screen. Since this seemed more related to 
the selection the user made. There may be drawbacks to passing with params here so it could be refactored to use Context. Another option for state/storage was something
like Redux storage, an outside tool. This was also used in my last job. Due to the size of the APP and data needed. It did not seem necessary.

I kept styles fairly simple but tried to create a layout for the countries that made sense. So each country has its own section on the main screen.

More Time:

There are many things I might change if I had more time. User experience, design, storage, etc. The main thing I would change (now if I have not gotten to adding tests yet) would be adding a testing library
and setting up some tests so that I met the testing you were looking for. I am familiar with Test Driven Development but have never implemented it on the job. The closest thing I had to this
was tests and conditions being determined beforehand in documentation. I might choose Jest which I used on my last job or another one.







