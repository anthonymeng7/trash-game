const Math = require('mathjs');
let combineFunc = (listST, listOfStuff2) => {
    let trashNames = ['Trash', 'Litter', 'Pollution', 'Waste', 'Plastic', 'Plastic Bottle', 'Scrap', 'Recycling'];
    
    let totalScore = 0;
    let totalTopic = 0;
    let numObjectsFound = 0;
    let matchedLabels = new Array();

    for(let j = 0; j < listST.length; j++){
        if((listST[j][1] + listST[j][2]) / 2.0 > 0.50){
            for(let i = 0; i < trashNames.length; i++){
                if(trashNames[i] == (listST[j][0])){
                    matchedLabels.push(trashNames[i]);
                    numObjectsFound++;
                    totalScore += listST[j][1]; //ayy fix this and the line below
                    totalTopic += listST[j][2];
                }
            }
        }
    }

    let averageScore = totalScore / numObjectsFound;
    let averageTopic = totalTopic / numObjectsFound;
    averageScore *= 1000;
    averageTopic *= 1000;

    let data = [matchedLabels, averageScore, averageTopic];



    let secondST = new Array();

    for(let i = 0; i < listOfStuff2.length; i++){
        if(data[0].indexOf(listOfStuff2[i][0]) >= 0){
            secondST.push([listOfStuff2[i][1], listOfStuff2[i][2]]);
        }else{
            secondST.push([0, 0]);
        }
    }

    let totalScore2 = 0;
    let totalTopic2 = 0;
    let numObjectsFound2 = 0;

    for(let i = 0; i < secondST.length; i++){
        numObjectsFound2++;
        totalScore2 += secondST[i][0];
        totalTopic2 += secondST[i][1];
    }

    let averageScore2 = totalScore2 / numObjectsFound2;
    let averageTopic2 = totalTopic2 / numObjectsFound2;
    averageScore2 *= 1000;
    averageTopic2 *= 1000;

    if(Math.abs(averageScore - averageScore2) <= 1.5 * Math.std(secondST)){
        averageScore2 *= 1.75;
        averageTopic2 *= 1.75;
    } else if(Math.abs(averageScore - averageScore2) <= 2.5 * Math.std(secondST)){
        averageScore2 *= 1.25;
        averageTopic2 *= 1.25
    }
    return ((averageScore + averageTopic) / 2 - (averageScore2 + averageTopic2) / 2)*10;
}
module.exports = combineFunc;
//export default combineFunc;