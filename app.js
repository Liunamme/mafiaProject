/////////////////////////////////////////////////////////////////////
// РАНДОМ РОЛЕЙ В МАФИИ
const mafiaBtn09 = document.querySelector('#mafiaBtn09')
const mafiaBtn10 = document.querySelector('#mafiaBtn10')
const mafiaBtn11 = document.querySelector('#mafiaBtn11')
const mafiaBtn12 = document.querySelector('#mafiaBtn12')
const mafiaBtn13 = document.querySelector('#mafiaBtn13')
const mafiaBtn14 = document.querySelector('#mafiaBtn14')
const mafiaBtn15 = document.querySelector('#mafiaBtn15')
const mafiaRoleResult = document.querySelector('#mafiaRoleResult')

let randomRoleMassive = [];

let resultRoleRole = []



let shuffle = function (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    resultRoleRole = [...arr]
    return arr;
}


mafiaBtn09.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
`
}

mafiaBtn10.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Комиссар👮‍♂️','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
`
}

mafiaBtn11.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Доктор💉','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Дон🕵🏻','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
`
}

mafiaBtn12.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Дон🕵🏻','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Доктор💉','Мафия🔫','Мирный житель🙍‍♂️','Любовница💖']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
<br>
12) ${resultRoleRole[11]}
`
}

mafiaBtn13.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Мафия🔫','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻','Мирный житель🙍‍♂️','Доктор💉','Мафия🔫','Мирный житель🙍‍♂️','Любовница💖','Маньяк🔪']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
<br>
12) ${resultRoleRole[11]}
<br>
13) ${resultRoleRole[12]}
`
}

mafiaBtn14.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Мафия🔫','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Доктор💉','Дон🕵🏻','Мирный житель🙍‍♂️','Любовница💖','Маньяк🔪','Мирный житель🙍‍♂️']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
<br>
12) ${resultRoleRole[11]}
<br>
13) ${resultRoleRole[12]}
<br>
14) ${resultRoleRole[13]}
`
}

mafiaBtn15.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Мафия🔫','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻','Мирный житель🙍‍♂️','Доктор💉','Мафия🔫','Мирный житель🙍‍♂️','Любовница💖','Маньяк🔪','Мафия🔫','Доп.Роль❓']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
<br>
12) ${resultRoleRole[11]}
<br>
13) ${resultRoleRole[12]}
<br>
14) ${resultRoleRole[13]}
<br>
15) ${resultRoleRole[14]}
`
}


///////
// РАНДОМ СЛОТОВ В МАФИИ
const slotBtn09 = document.querySelector('#slotBtn09')
const slotBtn10 = document.querySelector('#slotBtn10')
const slotBtn11 = document.querySelector('#slotBtn11')
const slotBtn12 = document.querySelector('#slotBtn12')
const slotBtn13 = document.querySelector('#slotBtn13')
const slotBtn14 = document.querySelector('#slotBtn14')
const slotBtn15 = document.querySelector('#slotBtn15')
const slotRoleResult = document.querySelector('#slotRoleResult')

let randomSlotMassive = [];

let resultSlotRole = []

let shuffleSlots = function (arr) {
  for (let i = arr.length - 1; i > 0 ; i--) {
      let tmp = arr[i];
      let rnd = Math.floor(Math.random() * (i + 1));

      arr[i] = arr[rnd];
      arr[rnd] = tmp;
  }
  resultSlotRole = [...arr]
  return arr;
}

slotBtn09.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
`
}

slotBtn10.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
`
}

slotBtn11.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
`
}

slotBtn12.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11,12]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
<br>
12) ${resultSlotRole[11]}
`
}

slotBtn13.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
<br>
12) ${resultSlotRole[11]}
<br>
13) ${resultSlotRole[12]}
`
}

slotBtn14.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
<br>
12) ${resultSlotRole[11]}
<br>
13) ${resultSlotRole[12]}
<br>
14) ${resultSlotRole[13]}
`
}

slotBtn15.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
<br>
12) ${resultSlotRole[11]}
<br>
13) ${resultSlotRole[12]}
<br>
14) ${resultSlotRole[13]}
<br>
15) ${resultSlotRole[14]}
`
}


const mafiaBtnClose = document.querySelector('#mafiaBtnClose')
const textAriaMafia = document.querySelector('#textAriaMafia')
const mafiaRole = document.querySelector('#mafiaRole')
const mafiaSlots = document.querySelector('#mafiaSlots')
const mafiaInfo = document.querySelector('#mafiaInfo')
const mCPButtonHide = document.querySelector('#mCPButtonHide')
const mafiaCloseRandomGlobal = document.querySelector('#mafiaCloseRandomGlobal')
const MafiaControlPanel = document.querySelector('#mafiaControlPanel')
const controlBtnClose = document.querySelector('#controlBtnClose')


controlBtnClose.onclick = () => {
  
  if (controlBtnClose.value === `❌`){
    controlBtnClose.value = `✅`
  }
  else if (controlBtnClose.value === `✅`) {
    controlBtnClose.value = `❌`
  }
  document.querySelector('#controlBtnClose').classList.toggle('cBC')
  document.querySelector('#controlBtn09').classList.toggle('cBCS')
  document.querySelector('#controlBtn10').classList.toggle('cBCS')
  document.querySelector('#controlBtn11').classList.toggle('cBCS')
  document.querySelector('#controlBtn12').classList.toggle('cBCS')
  document.querySelector('#controlBtn13').classList.toggle('cBCS')
  document.querySelector('#controlBtn14').classList.toggle('cBCS')
  document.querySelector('#controlBtn15').classList.toggle('cBCS')
  document.querySelector('#fallBtn04').classList.toggle('cBCS')
  document.querySelector('#fallBtn05').classList.toggle('cBCS')
}

mafiaBtnClose.onclick = () => {
  mafiaRole.classList.toggle('offRole')
  textAriaMafia.classList.toggle('offRole')
  mafiaSlots.classList.toggle('offRole')
  mafiaInfo.classList.toggle('offRole')
}
mCPButtonHide.onclick = () => {
  mafiaCloseRandomGlobal.classList.toggle('offRoleGlobal')
  MafiaControlPanel.classList.toggle('idMafiaControlPanelMore')
  if (mCPButtonHide.value === `►`){
    mCPButtonHide.value = `◀`
  }
  else if (mCPButtonHide.value === `◀`) {
    mCPButtonHide.value = `►`
  }

}
////////////////
// CONTROL PANEL MAFIA

const controlBtn09 = document.querySelector('#controlBtn09')
const controlBtn10 = document.querySelector('#controlBtn10')
const controlBtn11 = document.querySelector('#controlBtn11')
const controlBtn12 = document.querySelector('#controlBtn12')
const controlBtn13 = document.querySelector('#controlBtn13')
const controlBtn14 = document.querySelector('#controlBtn14')
const controlBtn15 = document.querySelector('#controlBtn15')

const controlPanelResult = document.querySelector('#controlPanelResult')
const btnFalls = document.querySelector('#btnFalls')


// 9 ИГРОКОВ

controlBtn09.onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
=================
🤍 На столе: 
1 Мафия🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<div id="mafiaVoteResultString">
</div>
`
document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 4 фолл
=================
🤍 3 фолл - мут
=================
🤍 На столе: 
1 Мафия🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}
document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 5 фолл
=================
🤍 4 фолл - мут
=================
🤍 На столе: 
1 Мафия🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}


}
}

// 10 игроков
controlBtn10.onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
=================
🤍 На столе: 
2 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer10"><span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<div id="mafiaVoteResultString">
</div>
`

document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 4 фолл
=================
🤍 3 фолл - мут
=================
🤍 На столе: 
2 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 5 фолл
=================
🤍 4 фолл - мут
=================
🤍 На столе: 
2 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}


document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 11 Игроков

controlBtn11.onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
=================
🤍 Несострелы можно
=================
🤍 На столе: 
2 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer10"><span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer11"><span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<div id="mafiaVoteResultString">
</div>
`

document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 4 фолл
=================
🤍 Несострелы можно
🤍 3 фолл - мут
=================
🤍 На столе: 
2 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 5 фолл
=================
🤍 Несострелы можно
🤍 4 фолл - мут
=================
🤍 На столе: 
2 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 12 игроков

controlBtn12.onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
=================
🤍 Несострелы можно
=================
🤍 На столе: 
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer10"><span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer11"><span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer12"><span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<div id="mafiaVoteResultString">
</div>
`

document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`


let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 4 фолл
=================
🤍 Несострелы можно
🤍 3 фолл - мут
=================
🤍 На столе: 
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer12.innerHTML = `<span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 5 фолл
=================
🤍 Несострелы можно
🤍 4 фолл - мут
=================
🤍 На столе: 
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer12.innerHTML = `<span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Fall5" class="mafiaGreenBtn">5</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall5').onclick = () => {
  document.querySelector('#player12Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 13 игроков
controlBtn13.onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
=================
🤍 Несострелы можно
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer10"><span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer11"><span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer12"><span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer13"><span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<div id="mafiaVoteResultString">
</div>
`

document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 4 фолл
=================
🤍 Несострелы можно
🤍 3 фолл - мут
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer12.innerHTML = `<span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer13.innerHTML = `<span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 5 фолл
=================
🤍 Несострелы можно
🤍 4 фолл - мут
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer12.innerHTML = `<span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer13.innerHTML = `<span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Fall5" class="mafiaGreenBtn">5</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Fall5" class="mafiaGreenBtn">5</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall5').onclick = () => {
  document.querySelector('#player12Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall5').onclick = () => {
  document.querySelector('#player13Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 14 игроков
controlBtn14.onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
=================
🤍 Несострелы можно
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer10"><span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer11"><span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer12"><span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer13"><span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer14"><span>14</span><input type="button" id="pushVoting14" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<div id="mafiaVoteResultString">
</div>
`

document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 4 фолл
=================
🤍 Несострелы можно
🤍 3 фолл - мут
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer12.innerHTML = `<span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer13.innerHTML = `<span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer14.innerHTML = `<span>14</span><input type="button" id="pushVoting14" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer14.innerHTML += 
`
<button id="player14Fall1" class="mafiaGreenBtn">1</button>
<button id="player14Fall2" class="mafiaGreenBtn">2</button>
<button id="player14Fall3" class="mafiaGreenBtn">3</button>
<button id="player14Fall4" class="mafiaGreenBtn">4</button>
<button id="player14Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player14Fall1').onclick = () => {
  document.querySelector('#player14Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall2').onclick = () => {
  document.querySelector('#player14Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Plus30').onclick = () => {
  document.querySelector('#player14Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 5 фолл
=================
🤍 Несострелы можно
🤍 4 фолл - мут
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
3 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer12.innerHTML = `<span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer13.innerHTML = `<span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer14.innerHTML = `<span>14</span><input type="button" id="pushVoting14" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Fall5" class="mafiaGreenBtn">5</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Fall5" class="mafiaGreenBtn">5</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer14.innerHTML += 
`
<button id="player14Fall1" class="mafiaGreenBtn">1</button>
<button id="player14Fall2" class="mafiaGreenBtn">2</button>
<button id="player14Fall3" class="mafiaGreenBtn">3</button>
<button id="player14Fall4" class="mafiaGreenBtn">4</button>
<button id="player14Fall5" class="mafiaGreenBtn">5</button>
<button id="player14Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall5').onclick = () => {
  document.querySelector('#player12Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall5').onclick = () => {
  document.querySelector('#player13Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player14Fall1').onclick = () => {
  document.querySelector('#player14Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall2').onclick = () => {
  document.querySelector('#player14Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall5').onclick = () => {
  document.querySelector('#player14Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Plus30').onclick = () => {
  document.querySelector('#player14Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 15 игроков
controlBtn15.onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
=================
🤍 Несострелы можно
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
4 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
1 Доп.Роль❓
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer10"><span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer11"><span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer12"><span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer13"><span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer14"><span>14</span><input type="button" id="pushVoting14" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer15"><span>15</span><input type="button" id="pushVoting15" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<div id="mafiaVoteResultString">
</div>
`

document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting15').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting15').value === 'Выставить') {
    document.querySelector('#pushVoting15').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting15').value = 'Отменить'
    localArrVote.push(15)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting15').value === 'Отменить') {
    document.querySelector('#pushVoting15').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote15 = localArrVote.indexOf(15)
    localArrVote.splice(localIndexVote15, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting15').value = 'Выставить'
}


  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  document.querySelector("#pushVoting15").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 4 фолл
=================
🤍 Несострелы можно
🤍 3 фолл - мут
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
4 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
1 Доп.Роль❓
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer12.innerHTML = `<span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer13.innerHTML = `<span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer14.innerHTML = `<span>14</span><input type="button" id="pushVoting14" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer15.innerHTML = `<span>15</span><input type="button" id="pushVoting15" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer14.innerHTML += 
`
<button id="player14Fall1" class="mafiaGreenBtn">1</button>
<button id="player14Fall2" class="mafiaGreenBtn">2</button>
<button id="player14Fall3" class="mafiaGreenBtn">3</button>
<button id="player14Fall4" class="mafiaGreenBtn">4</button>
<button id="player14Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer15.innerHTML += 
`
<button id="player15Fall1" class="mafiaGreenBtn">1</button>
<button id="player15Fall2" class="mafiaGreenBtn">2</button>
<button id="player15Fall3" class="mafiaGreenBtn">3</button>
<button id="player15Fall4" class="mafiaGreenBtn">4</button>
<button id="player15Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting15').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting15').value === 'Выставить') {
    document.querySelector('#pushVoting15').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting15').value = 'Отменить'
    localArrVote.push(15)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting15').value === 'Отменить') {
    document.querySelector('#pushVoting15').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote15 = localArrVote.indexOf(15)
    localArrVote.splice(localIndexVote15, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting15').value = 'Выставить'
}


  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  document.querySelector("#pushVoting15").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player14Fall1').onclick = () => {
  document.querySelector('#player14Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall2').onclick = () => {
  document.querySelector('#player14Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Plus30').onclick = () => {
  document.querySelector('#player14Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player15Fall1').onclick = () => {
  document.querySelector('#player15Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall2').onclick = () => {
  document.querySelector('#player15Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall3').onclick = () => {
  document.querySelector('#player15Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall4').onclick = () => {
  document.querySelector('#player15Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Plus30').onclick = () => {
  document.querySelector('#player15Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  document.querySelector("#textAriaMafia").innerHTML = 
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 5 фолл
=================
🤍 Несострелы можно
🤍 4 фолл - мут
=================
🤍 На столе: 
1 Маньяк🔪
1 Любовница💖
4 Мафии🔫
1 Дон🕵🏻
1 Комиссар👮‍♂️
1 Доктор💉
1 Доп.Роль❓
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
  // Run
  mafiaPlayer1.innerHTML = `<span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `<span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `<span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `<span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `<span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `<span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `<span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `<span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `<span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `<span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer11.innerHTML = `<span>11</span><input type="button" id="pushVoting11" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer12.innerHTML = `<span>12</span><input type="button" id="pushVoting12" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer13.innerHTML = `<span>13</span><input type="button" id="pushVoting13" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer14.innerHTML = `<span>14</span><input type="button" id="pushVoting14" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`
  mafiaPlayer15.innerHTML = `<span>15</span><input type="button" id="pushVoting15" class = "voteBtn10 mafiaVotingBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Fall5" class="mafiaGreenBtn">5</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Fall5" class="mafiaGreenBtn">5</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer14.innerHTML += 
`
<button id="player14Fall1" class="mafiaGreenBtn">1</button>
<button id="player14Fall2" class="mafiaGreenBtn">2</button>
<button id="player14Fall3" class="mafiaGreenBtn">3</button>
<button id="player14Fall4" class="mafiaGreenBtn">4</button>
<button id="player14Fall5" class="mafiaGreenBtn">5</button>
<button id="player14Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer15.innerHTML += 
`
<button id="player15Fall1" class="mafiaGreenBtn">1</button>
<button id="player15Fall2" class="mafiaGreenBtn">2</button>
<button id="player15Fall3" class="mafiaGreenBtn">3</button>
<button id="player15Fall4" class="mafiaGreenBtn">4</button>
<button id="player15Fall5" class="mafiaGreenBtn">5</button>
<button id="player15Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    document.querySelector('#pushVoting1').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }

  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    document.querySelector('#pushVoting2').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    document.querySelector('#pushVoting3').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    document.querySelector('#pushVoting4').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    document.querySelector('#pushVoting5').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    document.querySelector('#pushVoting6').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    document.querySelector('#pushVoting7').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    document.querySelector('#pushVoting8').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    document.querySelector('#pushVoting9').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    document.querySelector('#pushVoting10').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    document.querySelector('#pushVoting11').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    document.querySelector('#pushVoting12').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    document.querySelector('#pushVoting13').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    document.querySelector('#pushVoting14').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}

if (localArrVote.length > 4) {
  document.querySelector('#resultVoteMafia').style.fontSize = '35px'
}
else if (localArrVote.length <= 4){
  document.querySelector('#resultVoteMafia').style.fontSize = '50px'
}
}

document.querySelector('#pushVoting15').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting15').value === 'Выставить') {
    document.querySelector('#pushVoting15').classList.toggle('mafiaVotingBtnOff')
    document.querySelector('#pushVoting15').value = 'Отменить'
    localArrVote.push(15)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting15').value === 'Отменить') {
    document.querySelector('#pushVoting15').classList.toggle('mafiaVotingBtnOff')
    let localIndexVote15 = localArrVote.indexOf(15)
    localArrVote.splice(localIndexVote15, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting15').value = 'Выставить'
}


  if (localArrVote.length > 4) {
    document.querySelector('#resultVoteMafia').style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    document.querySelector('#resultVoteMafia').style.fontSize = '50px'
  }
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  document.querySelector("#pushVoting15").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall5').onclick = () => {
  document.querySelector('#player12Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall5').onclick = () => {
  document.querySelector('#player13Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player14Fall1').onclick = () => {
  document.querySelector('#player14Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall2').onclick = () => {
  document.querySelector('#player14Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall5').onclick = () => {
  document.querySelector('#player14Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Plus30').onclick = () => {
  document.querySelector('#player14Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player15Fall1').onclick = () => {
  document.querySelector('#player15Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall2').onclick = () => {
  document.querySelector('#player15Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall5').onclick = () => {
  document.querySelector('#player15Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Plus30').onclick = () => {
  document.querySelector('#player15Plus30').classList.toggle('mafiaRedBtn')
}

}
}

/// КОНЕЦ КНОПОЧЕК
/// Секундомер
var timer = 0;
var timerInterval;
var ms = document.getElementById('ms');
var second = document.getElementById('second');
var minute = document.getElementById('minute');



function vpered() {
  sanovka();
  timerInterval = setInterval(function() {
  timer += 1/60;
  msVal = Math.floor((timer - Math.floor(timer))*100);
  secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
  minuteVal = Math.floor(timer/60);
  ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
  second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
  minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/60);
}

function ClearСlock() { 
  ms.innerHTML = '00';
  second.innerHTML = '00';
  minute.innerHTML = '00';
  timer = 0;
  msVal = 0;
  secondVal = 0;
  minuteVal = 0;
} 

function sanovka() {
  clearInterval(timerInterval);
}
///////////////////////////////////////

setInterval(function () {
  document.querySelector('#mafiaUpBlockGlobal').style.width = `${document.querySelector('#mafiaControlPanel').offsetWidth -4}px`
}, 10);
