var partOne = ['anime','anal','abrupt','angry','boob','bosom','butt',
'clown','cursed','fruity','evil','engorged','erect','firm','wet',
'moist','sensual','sexual','non-sexual','platonic','gay','heterosexual', 'homosexual','bisexual','lesbian','transgender','haunted','online','IRL','tedious','bad','raw','aggressive','scented','gourmet','old-fashioned','abrasive','unflattering','tight','furry','vacuum-sealed','resentful','outdated','queer','passionate','rough','gentle','seductive','careful','experienced','adventurous','mature','new-fangled','erotic','charismatic','corporate','sweaty','thicc','vigorous','tender','hard','soft','beautiful','heavy','regular','vanilla','group','jumbo','big','jiggly','small','tiny','glamorous','perfect','regrettable','humiliating','lovely','robust','horny','long','short','normal','inefficient','benign','harmless','playful','genuine','counterfeit','full', 'fake','spontaneous','mischievious','flawless','magical','warm','ice-cold','cyber','virile','fragrant','overwhelming','fierce','perverted','extreme','extra','respectful','vigilant','enchanted','artificial','supportive','goth','mysterious','androgynous','masculine','feminine','versatile','immaculate','drippy','orgasmic','vibrating','spicy','feisty','electric','intimate','messy','dirty','chaste','pure','muscular','suggestive','subversive','improbable','oversized','large','sexy','handsome','botched','hot','fertile','saucy','nasty','filthy','romantic','mediocre','battery-powered','naked','nude','naughty','bratty','flavoured','forgettable','silicone'];

var partTwo = ['ass','coupling','bears','tonguing','biting','fondling','jobs','play','wrestling','fighting','slapping','dating','sexting','romance','marriage','monogamy','polyamory','pegging','insertion','stroking','cock','choking','bitcoin','teeth','tiddy','feet','shoulders','toes','men','women','fanfic','videos','bondage','ghosts','hacking','hands','fisting','courting','relations','spanking','holes','pussy','kink','tentacles','licking','balls','friendship','wigs','roleplay','domination','submission','people','fingering','beef','piss','salami','knees','dong','penetration','sucking','implants','flirting','witches','wizards','monsters','robots','cum','hand-holding','kissing','hugging','dildos','machines','buttholes','flaps','bits','mouths','eyes','tops','bottoms','fluids','ears','gamers','friends','lovers','partners','booty','legs','orifices','foreplay','jizz','squirting','queefing','edging','massage','masturbation','humping','pleasure','member','pounding','eye contact','sausage','melons','throbbing','shaving','dick','felching','threesomes','DILFs','MILFs','piercing'];

var button = document.querySelector('.btn');
button.addEventListener('click', combineParts);

function combineParts() {
  var randomOne = partOne[Math.floor(Math.random()*partOne.length)];
  var randomTwo = partTwo[Math.floor(Math.random()*partTwo.length)];
  var output = document.getElementById('output');
  output.textContent = (randomOne+' '+randomTwo);
  button.blur();
}
