const image = require('C:/Users/menga/Documents/GitHub/trash3/routes/images');

async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('C:/Users/menga/Documents/GitHub/trash3/services/beach.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    let array = [];
    let array2 = [];
    labels.forEach(label => {
        array.push([label.description,label.score, label.topicality]);
    })
    // for(let i =0;i<array.length;i++){
    //     for(let j =0;j<array[0].length;j++){
    //         console.log(array[i][j]);
    //     }
    // }
    // labels.forEach(label => console.log(label.description +" "+ label.score + " " + label.topicality));
    const [result2] = await client.labelDetection('C:/Users/menga/Documents/GitHub/trash3/services/beach2.jpg');
    const labels2 = result2.labelAnnotations;
    i=0;
    labels2.forEach(label => {
        array2.push([label.description,label.score,label.topicality]);
    })
    // let actualData = new Array(array2.length / 3);
    // for(let i = 0; i < actualData.length; i++){
    //     actualData.push([array2[3 * i], array2[3 * i + 1], array2[]);
    // }
    // for(let i =0;i<array2.length;i++){
    //     for(let j =0;j<array2[0].length;j++){
    //         console.log(array2[i][j]);
    //     }
    // }
    return image(array,array2);
  }