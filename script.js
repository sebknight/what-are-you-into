var partOne = ['anal','abrupt','angry','ball',
'boob','bosom','butt','chicken','clown','cursed','fruit','evil','engorged','erect','firm','wet','moist','sensual','sexual','non-sexual','platonic','rocky','frightening','Catholic','sweet','savoury','mature','tedious','bad','raw','uncooked','aggressive','nostalgic'];
var partTwo = ['ass','biting','brushing','fondling','jobs','play','insertion','stroking','cock','choking','bitcoin','geology','teeth','tiddy','feet','shoulders','toes'];


var button = document.getElementById('button');


button.addEventListener("click", combineParts);

function combineParts() {
  var randomOne = partOne[Math.floor(Math.random()*partOne.length)];
  var randomTwo = partTwo[Math.floor(Math.random()*partTwo.length)];
  var outputDiv = document.getElementById('output');
  outputDiv.textContent = (randomOne+' '+randomTwo);
}
