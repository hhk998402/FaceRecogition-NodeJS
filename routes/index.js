var express = require('express');
var router = express.Router();
var fs = require('fs');
// const fr = require('face-recognition');
// const recognizer = fr.FaceRecognizer();
// var path = require('path');
//
// // const howardFaces = ["howard_1.png","howard_2.png","howard_3.png","howard_4.png","howard_5.png","howard_6.png","howard_7.png","howard_8.png","howard_9.png","howard_10.png","howard_11.png","howard_12.png","howard_13.png","howard_14.png","howard_15.png","howard_16.png","howard_17.png","howard_18.png","howard_19.png","howard_20.png","howard_21.png","howard_22.png"];
// // const rajFaces = ["raj_1.png","raj_2.png","raj_3.png","raj_4.png","raj_5.png","raj_6.png","raj_7.png","raj_8.png","raj_9.png","raj_10.png","raj_11.png","raj_12.png","raj_13.png","raj_14.png","raj_15.png","raj_16.png","raj_17.png","raj_18.png","raj_19.png","raj_20.png","raj_21.png","raj_22.png"]
// // const sheldonFaces = ["sheldon_1.png","sheldon_2.png","sheldon_3.png","sheldon_4.png","sheldon_5.png","sheldon_6.png","sheldon_7.png","sheldon_8.png","sheldon_9.png","sheldon_10.png","sheldon_11.png","sheldon_12.png","sheldon_13.png","sheldon_14.png","sheldon_15.png","sheldon_16.png","sheldon_17.png","sheldon_18.png","sheldon_19.png","sheldon_20.png","sheldon_21.png","sheldon_22.png"];
// const detector = fr.FaceDetector();
//
// console.log("Loading  viraat images ");
// // const img1 = fr.loadImage('../routes/howard_1.png');
// // const img2 = fr.loadImage('../routes/howard_2.png');
// const img1 = fr.loadImage('../routes/harish_12.png');
// const img2 = fr.loadImage('../routes/harish_14.png');
//
//
// const vimg1  = detector.detectFaces(img1);
// const vimg2  = detector.detectFaces(img2);
//
// let  viraat_faces = [] ;
// viraat_faces = vimg1.concat(vimg2);
//
// console.log("Loading  smith images ");
// const smimg1 = fr.loadImage('../routes/processedImage.png');
// const smimg2 = fr.loadImage('../routes/processedImage(1).png');
//
// const vimg3  = detector.detectFaces(smimg1);
// const vimg4  = detector.detectFaces(smimg2);
//
// //const smith_faces = [ vimg3, vimg4] ;
// let smith_faces = [];
// smith_faces = vimg3.concat(vimg4);
// console.log("post smith");
//
// console.log("Loading msd images ");
// const msimg1 = fr.loadImage('../routes/hemanth_2.png');
// const msimg2 = fr.loadImage('../routes/hemanth_5.png');
//
// const vimg5  = detector.detectFaces(msimg1);
// const vimg6  = detector.detectFaces(msimg2);
// let dhoni_faces = [] ;
// dhoni_faces = vimg5.concat(vimg6);
//
// console.log(" Post dhoni faces");
// // const recognizer = fr.FaceRecognizer();
//
// const numJitters = 15;
// recognizer.addFaces(smith_faces, 'nikhil',numJitters);
// recognizer.addFaces(viraat_faces, 'hari',numJitters);
// recognizer.addFaces(dhoni_faces, 'hemant',numJitters);
//
// /* GET home page. */
// router.get('/predict', function(req, res, next) {
//     console.log("running prediction");
//     const msimg3 = fr.loadImage('../routes/harish_19.png');
//
//     const faceImage = detector.detectFaces(msimg3);
//     if ( Array.isArray(faceImage)) {
//         console.log("is array");
//     }
//     else {
//         console.log("not a array");
//     }
//
//     const predictionsAll = recognizer.predict(faceImage[0]);
//     console.log(predictionsAll);
//     const predictions = recognizer.predictBest(faceImage[0]);
//     if(predictions['distance']>0.5){
//         res.json({"msg":"NOT REGISTERED"});
//         console.log("Not Registered")
//     }
//     else{
//         res.json(predictions);
//         console.log("PREDICTED ANSWER: " + predictions['className']);
//     }
//   // res.render('index', { title: 'Express' });
// });
//
// router.post('/upload', function(req, res, next) {
//     console.log(req.files.image.originalFilename);
//     console.log(req.files.image.path);
//     fs.readFile(req.files.image.path, function (err, data) {
//         var dirname = path.dirname(require.main.filename).toString()
//         var newPath = dirname + "/uploads/" + req.files.image.originalFilename;
//         fs.writeFile(newPath, data, function (err) {
//             if (err) {
//                 res.json({'response': "Error"});
//             } else {
//                 res.json({'response': "Saved"});
//             }
//         });
//     });
//     // console.log("running prediction");
//     // const msimg3 = fr.loadImage('../routes/howard_1.png');
//     //
//     // const faceImage = detector.detectFaces(msimg3);
//     // if ( Array.isArray(faceImage)) {
//     //     console.log("is array");
//     // }
//     // else {
//     //     console.log("not a array");
//     // }
//     //
//     // const predictionsAll = recognizer.predict(faceImage[0]);
//     // console.log(predictionsAll);
//     // const predictions = recognizer.predictBest(faceImage[0]);
//     // if(predictions['distance']>0.5){
//     //     res.json({"msg":"NOT REGISTERED"});
//     //     console.log("Not Registered")
//     // }
//     // else{
//     //     res.json(predictions);
//     //     console.log("PREDICTED ANSWER: " + predictions['className']);
//     // }
//     // res.render('index', { title: 'Express' });
// });

// router.get('/addFace', function(req, res, next) {
//
// });

module.exports = router;
