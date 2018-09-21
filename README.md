# Simon Says

## An old-time classic for your phone
Test your memory! This takes the classic Simon board and puts it in your pocket, with a small twist. Four colored buttons will flash in a sequence, which you must repeat back by pushing the corresponding buttons in the same order. Every time you succeed, another item is added to the sequence and Simon repeats himself. But be careful! Not every flashing light is said by Simon. Pay attention to the light in the middle to know which commands to ignore!

## Demo
To demo this app, navigate to the following page:
https://expo.io/@dghero/simonsays

You will need the Expo client on your phone (download link included on page). Once installed, scan the QR code with the app to download the game.

Unfortunately, at the time of writing, the iOS version of the phone app cannot download published projects made by other people, only your own. To view the game, clone the repo, run `npm install`, and then `npm run ios`. Android users can do the same, instead using `npm run android`. You can then connect it to a VM, or by using the Expo app to scan the resultant QR code (requires your computer and phone to be on the same WiFi network).

## Technology Stack
This app uses React Native for the user interface and Redux for state storage.

## Screenshots

<img width="400" alt="Simon Turn" src="https://raw.githubusercontent.com/thinkful-ei22/devinhero-simon-says/master/pictures/simonturn.png" />

<img width="400" alt="Player Turn" src="https://raw.githubusercontent.com/thinkful-ei22/devinhero-simon-says/master/pictures/playerturn.png" />
