var partOne = ['anal','abrupt','angry','ball',
'boob','bosom','butt','chicken','clown','cursed','fruit','evil','engorged','erect','firm','wet','moist','sensual','sexual','non-sexual','platonic','rocky','frightening','Catholic','online','sweet','savoury','tedious','bad','raw','uncooked','aggressive','nostalgic','aromatic','gourmet','bruised','old-fashioned','abrasive','unflattering','tight','furry','vacuum-sealed'];
var partTwo = ['ass','tongue','biting','brushing','fondling','compression','jobs','play','insertion','stroking','cock','choking','bitcoin','geology','teeth','tiddy','feet','shoulders','toes','men','women'];


var button = document.getElementById('button');


button.addEventListener("click", combineParts);

function combineParts() {
  var randomOne = partOne[Math.floor(Math.random()*partOne.length)];
  var randomTwo = partTwo[Math.floor(Math.random()*partTwo.length)];
  var outputDiv = document.getElementById('output');
  outputDiv.textContent = (randomOne+' '+randomTwo);
}
