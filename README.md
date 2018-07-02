# FaceRecogition-NodeJS
This is an implementation of the facerecognition.js module. 


**Pre-requisite**

	Download the face-recognition npm module and follow the build instructions according to your system
	
**Usage**

Next, `git clone` the project, and do `npm install`. If you have built performed the previous build step correctly, this step should go off without a hitch.

Then, `npm start` gets the server started on http://localhost:3000

**Image Storage**

Some sample faces are provided in https://github.com/hhk998402/FaceRecogition-NodeJS/blob/master/routes/faces
All newly added faces are stored here. Store the images as PNG Files only. Also, name the files in the following way: -
	
	firstName-middleName-lastName_anyString.png

Make sure the fileName doesn't consist of any spaces or any other special character apart from underscore. Use hyphens in place of spaces for longer names.


**Routes and their Usage**

1. http://localhost:3000/capture - This is the main page, wherein you can test and see the predictions as well as train new faces. To **perform facial recognition** against the images that have already been trained, go to `http://localhost:3000/capture/` and click on the camera icon in the capture window. Wait for about three seconds and the prediction will be shown above with the closeness to the answer. Remember, here the lower the distance, the better the prediction.

Here is a simple demonstration: 

![Prediction Walkthrough](https://github.com/hhk998402/FaceRecogition-NodeJS/blob/master/routes/Demo_-FaceRecognition-on-NodeJS.gif)

Now, to **train new faces**, first type your name in the input box below the capture window. Don't use underscores or spaces. Use hyphens in place of spaces. After entering a valid name, click the "Click here to train" button alongside. Make sure you are prominently visible in the capture box. Wait for the training completed message to come before adding a new image. 

![Training Walkthrough](https://github.com/hhk998402/FaceRecogition-NodeJS/blob/master/routes/Training_example.gif)

