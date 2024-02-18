https://teachablemachine.withgoogle.com/models/F-tQ5MssU/

function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F-tQ5MssU/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}