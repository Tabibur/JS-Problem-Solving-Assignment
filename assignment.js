function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var dhakaMile = feetToMile(79200);
console.log(dhakaMile);


 
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalCount = chairCount + tableCount + bedCount;
    return totalCount;
}
var woodResult = woodCalculator(5, 10, 15);
console.log(woodResult);



function brickCalculator(height) {
    var brick = 0;
    if (height <= 10) {
        brick = height * 15 * 1000;
    }    
    else if (height <= 20) {
        var firstToTenth = 10 * 15 * 1000;
        var remaining = height - 10;
        var eleventhToTwentieth = remaining * 12 * 1000;
        brick = firstToTenth + eleventhToTwenteth;
}
             
    else {
        var firstToTenth = 10 * 15 * 1000;
        var eleventhToTwentieth = 10 * 12 * 1000;
        var remaining = height - 20;
        var twentyFirstToThirty = remaining * 10 * 1000;
        brick = firstToTenth + eleventhToTwenteth + twentyFirstToThirty;
    }
    return brick;
    }
    var count = brickCalculator(30);
    console.log(count);



function tinyFriend(friendlist){
    const tiny = friendlist[0];
    for (const i = 0; i < friendlist.length; i++){
    const element = friendlist[i];
    if (element.length < tiny.length){
    tiny = element;
}
}
return tiny;
}
const friendlist = ["kalam", "rabbani",  "mondol", "raj", "bikkram"];

console.log(tinyFriend(friendlist));


