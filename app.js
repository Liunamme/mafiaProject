/// РАНДОМАЙЗЕРЫ

// РАНДОМ РОЛЕЙ В МАФИИ

let randomRoleMassive = [];
let resultRoleRole = []


// Функция перемешивающая массив в рандомном порядке
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

// КНОПКИ РАНДОМА
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
//


// РАНДОМ СЛОТОВ В МАФИИ

let randomSlotMassive = [];
let resultSlotRole = []

// Функция перемешивающая массив в рандомном порядке
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
//

// КНОПКИ РАНДОМА
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
//
///

/// КНОПКИ ДЛЯ АДАПТИВНОСТИ/КОМПАКТНОСТИ
// Кнопка скрыть/раскрыть кнопки игроков/фолов для моб.версии
controlBtnClose.onclick = () => {
  
  if (controlBtnClose.value === `❌`){
    controlBtnClose.value = `✅`
  }
  else if (controlBtnClose.value === `✅`) {
    controlBtnClose.value = `❌`
  }
  controlBtnClose.classList.toggle('cBC')
  controlBtn09.classList.toggle('cBCS')
  controlBtn10.classList.toggle('cBCS')
  controlBtn11.classList.toggle('cBCS')
  controlBtn12.classList.toggle('cBCS')
  controlBtn13.classList.toggle('cBCS')
  controlBtn14.classList.toggle('cBCS')
  controlBtn15.classList.toggle('cBCS')
  fallBtn04.classList.toggle('cBCS')
  fallBtn05.classList.toggle('cBCS')
}
//

// Кнопка скрыть/раскрыть боковое меню
mafiaBtnClose.onclick = () => {
  mafiaRole.classList.toggle('offRole')
  textAriaMafia.classList.toggle('offRole')
  mafiaSlots.classList.toggle('offRole')
  mafiaInfo.classList.toggle('offRole')
}
mCPButtonHide.onclick = () => {
  mafiaCloseRandomGlobal.classList.toggle('offRoleGlobal')
  mafiaControlPanel.classList.toggle('idMafiaControlPanelMore')
  if (mCPButtonHide.value === `►`){
    mCPButtonHide.value = `◀`
  }
  else if (mCPButtonHide.value === `◀`) {
    mCPButtonHide.value = `►`
  }
}
///


/// CONTROL PANEL MAFIA

const controlPanelResult = document.querySelector('#controlPanelResult') // ПАНЕЛЬ УПРАВЛЕНИЯ ИГРОКАМИ 9-15
const btnFalls = document.querySelector('#btnFalls') // СОЗДАНИЕ КНОПОК НА 4/5 ФОЛОВ
const textAriaMafia = document.querySelector("#textAriaMafia") // ИНФОРМАЦИОННОЕ ПОЛЕ ОБ ИГРЕ С РЕДАКТИРУЕМОЙ ИНФОРМАЦИЕЙ

let localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Размер шрифта выставленных игроков, взависимости от кол-ва выставленных
function fSResultVoteMafia() {
  if (localArrVote.length > 4) {
    resultVoteMafia.style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    resultVoteMafia.style.fontSize = '50px'
  }
}
//

// 9 ИГРОКОВ

// Функция создает 9 строчек в которых указаны: Номер игрока и кнопка выставить
function mP9() {
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
}
//

// Функционал кнопок 'Выставить' на 9 игроков
function funcPushVoting9() {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

  pushVoting1.onclick = () => {
    // Run
    if (pushVoting1.value === 'Выставить') {
      pushVoting1.classList.toggle('mafiaVotingBtnOff')
      pushVoting1.value = 'Отменить'
      localArrVote.push(1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting1.value === 'Отменить') {
      pushVoting1.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote1 = localArrVote.indexOf(1)
      localArrVote.splice(localIndexVote1, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting1.value = 'Выставить'
    }

    fSResultVoteMafia()
  }
  
  pushVoting2.onclick = () => {
    // Run
    if (pushVoting2.value === 'Выставить') {
      pushVoting2.classList.toggle('mafiaVotingBtnOff')
      pushVoting2.value = 'Отменить'
      localArrVote.push(2)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting2.value === 'Отменить') {
      pushVoting2.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote2 = localArrVote.indexOf(2)
      localArrVote.splice(localIndexVote2, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting2.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting3.onclick = () => {
    // Run
    if (pushVoting3.value === 'Выставить') {
      pushVoting3.classList.toggle('mafiaVotingBtnOff')
      pushVoting3.value = 'Отменить'
      localArrVote.push(3)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting3.value === 'Отменить') {
      pushVoting3.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote3 = localArrVote.indexOf(3)
      localArrVote.splice(localIndexVote3, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting3.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting4.onclick = () => {
    // Run
    if (pushVoting4.value === 'Выставить') {
      pushVoting4.classList.toggle('mafiaVotingBtnOff')
      pushVoting4.value = 'Отменить'
      localArrVote.push(4)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting4.value === 'Отменить') {
      pushVoting4.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote4 = localArrVote.indexOf(4)
      localArrVote.splice(localIndexVote4, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting4.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting5.onclick = () => {
    // Run
    if (pushVoting5.value === 'Выставить') {
      pushVoting5.classList.toggle('mafiaVotingBtnOff')
      pushVoting5.value = 'Отменить'
      localArrVote.push(5)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting5.value === 'Отменить') {
      pushVoting5.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote5 = localArrVote.indexOf(5)
      localArrVote.splice(localIndexVote5, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting5.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting6.onclick = () => {
    // Run
    if (pushVoting6.value === 'Выставить') {
      pushVoting6.classList.toggle('mafiaVotingBtnOff')
      pushVoting6.value = 'Отменить'
      localArrVote.push(6)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting6.value === 'Отменить') {
      pushVoting6.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote6 = localArrVote.indexOf(6)
      localArrVote.splice(localIndexVote6, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting6.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting7.onclick = () => {
    // Run
    if (pushVoting7.value === 'Выставить') {
      pushVoting7.classList.toggle('mafiaVotingBtnOff')
      pushVoting7.value = 'Отменить'
      localArrVote.push(7)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting7.value === 'Отменить') {
      pushVoting7.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote7 = localArrVote.indexOf(7)
      localArrVote.splice(localIndexVote7, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting7.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting8.onclick = () => {
    // Run
    if (pushVoting8.value === 'Выставить') {
      pushVoting8.classList.toggle('mafiaVotingBtnOff')
      pushVoting8.value = 'Отменить'
      localArrVote.push(8)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting8.value === 'Отменить') {
      pushVoting8.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote8 = localArrVote.indexOf(8)
      localArrVote.splice(localIndexVote8, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting8.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting9.onclick = () => {
    // Run
    if (pushVoting9.value === 'Выставить') {
      pushVoting9.classList.toggle('mafiaVotingBtnOff')
      pushVoting9.value = 'Отменить'
      localArrVote.push(9)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting9.value === 'Отменить') {
      pushVoting9.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote9 = localArrVote.indexOf(9)
      localArrVote.splice(localIndexVote9, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting9.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 9 игроков

// База значений для функции - на 9 игроков
function funcClearVoteMafia9base() { 
  pushVoting1.value = 'Выставить'
  pushVoting2.value = 'Выставить'
  pushVoting3.value = 'Выставить'
  pushVoting4.value = 'Выставить'
  pushVoting5.value = 'Выставить'
  pushVoting6.value = 'Выставить'
  pushVoting7.value = 'Выставить'
  pushVoting8.value = 'Выставить'
  pushVoting9.value = 'Выставить'
  localArrVote = []
  resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")

  pushVoting1.classList.remove('mafiaVotingBtnOff')
  pushVoting2.classList.remove('mafiaVotingBtnOff')
  pushVoting3.classList.remove('mafiaVotingBtnOff')
  pushVoting4.classList.remove('mafiaVotingBtnOff')
  pushVoting5.classList.remove('mafiaVotingBtnOff')
  pushVoting6.classList.remove('mafiaVotingBtnOff')
  pushVoting7.classList.remove('mafiaVotingBtnOff')
  pushVoting8.classList.remove('mafiaVotingBtnOff')
  pushVoting9.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia9() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia9base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 9 игроков
function funcFalls4Players9() {
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
}
//

// Функция добавляющая кнопки 5 фолов и +30 на 9 игроков
function funcFalls5Players9() {
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
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 9 игроков
function funcGreenRedFalls4Players9() { 
  player1Fall1.onclick = () => {
    player1Fall1.classList.toggle('mafiaRedBtn')
  }
  player1Fall2.onclick = () => {
    player1Fall2.classList.toggle('mafiaRedBtn')
  }
  player1Fall3.onclick = () => {
    player1Fall3.classList.toggle('mafiaRedBtn')
  }
  player1Fall4.onclick = () => {
    player1Fall4.classList.toggle('mafiaRedBtn')
  }
  player1Plus30.onclick = () => {
    player1Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player2Fall1.onclick = () => {
    player2Fall1.classList.toggle('mafiaRedBtn')
  }
  player2Fall2.onclick = () => {
    player2Fall2.classList.toggle('mafiaRedBtn')
  }
  player2Fall3.onclick = () => {
    player2Fall3.classList.toggle('mafiaRedBtn')
  }
  player2Fall4.onclick = () => {
    player2Fall4.classList.toggle('mafiaRedBtn')
  }
  player2Plus30.onclick = () => {
    player2Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player3Fall1.onclick = () => {
    player3Fall1.classList.toggle('mafiaRedBtn')
  }
  player3Fall2.onclick = () => {
    player3Fall2.classList.toggle('mafiaRedBtn')
  }
  player3Fall3.onclick = () => {
    player3Fall3.classList.toggle('mafiaRedBtn')
  }
  player3Fall4.onclick = () => {
    player3Fall4.classList.toggle('mafiaRedBtn')
  }
  player3Plus30.onclick = () => {
    player3Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player4Fall1.onclick = () => {
    player4Fall1.classList.toggle('mafiaRedBtn')
  }
  player4Fall2.onclick = () => {
    player4Fall2.classList.toggle('mafiaRedBtn')
  }
  player4Fall3.onclick = () => {
    player4Fall3.classList.toggle('mafiaRedBtn')
  }
  player4Fall4.onclick = () => {
    player4Fall4.classList.toggle('mafiaRedBtn')
  }
  player4Plus30.onclick = () => {
    player4Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player5Fall1.onclick = () => {
    player5Fall1.classList.toggle('mafiaRedBtn')
  }
  player5Fall2.onclick = () => {
    player5Fall2.classList.toggle('mafiaRedBtn')
  }
  player5Fall3.onclick = () => {
    player5Fall3.classList.toggle('mafiaRedBtn')
  }
  player5Fall4.onclick = () => {
    player5Fall4.classList.toggle('mafiaRedBtn')
  }
  player5Plus30.onclick = () => {
    player5Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player6Fall1.onclick = () => {
    player6Fall1.classList.toggle('mafiaRedBtn')
  }
  player6Fall2.onclick = () => {
    player6Fall2.classList.toggle('mafiaRedBtn')
  }
  player6Fall3.onclick = () => {
    player6Fall3.classList.toggle('mafiaRedBtn')
  }
  player6Fall4.onclick = () => {
    player6Fall4.classList.toggle('mafiaRedBtn')
  }
  player6Plus30.onclick = () => {
    player6Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player7Fall1.onclick = () => {
    player7Fall1.classList.toggle('mafiaRedBtn')
  }
  player7Fall2.onclick = () => {
    player7Fall2.classList.toggle('mafiaRedBtn')
  }
  player7Fall3.onclick = () => {
    player7Fall3.classList.toggle('mafiaRedBtn')
  }
  player7Fall4.onclick = () => {
    player7Fall4.classList.toggle('mafiaRedBtn')
  }
  player7Plus30.onclick = () => {
    player7Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player8Fall1.onclick = () => {
    player8Fall1.classList.toggle('mafiaRedBtn')
  }
  player8Fall2.onclick = () => {
    player8Fall2.classList.toggle('mafiaRedBtn')
  }
  player8Fall3.onclick = () => {
    player8Fall3.classList.toggle('mafiaRedBtn')
  }
  player8Fall4.onclick = () => {
    player8Fall4.classList.toggle('mafiaRedBtn')
  }
  player8Plus30.onclick = () => {
    player8Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player9Fall1.onclick = () => {
    player9Fall1.classList.toggle('mafiaRedBtn')
  }
  player9Fall2.onclick = () => {
    player9Fall2.classList.toggle('mafiaRedBtn')
  }
  player9Fall3.onclick = () => {
    player9Fall3.classList.toggle('mafiaRedBtn')
  }
  player9Fall4.onclick = () => {
    player9Fall4.classList.toggle('mafiaRedBtn')
  }
  player9Plus30.onclick = () => {
    player9Plus30.classList.toggle('mafiaRedBtn')
  }
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 9 игроков
function funcGreenRedFalls5Players9() { 
  player1Fall1.onclick = () => {
    player1Fall1.classList.toggle('mafiaRedBtn')
  }
  player1Fall2.onclick = () => {
    player1Fall2.classList.toggle('mafiaRedBtn')
  }
  player1Fall3.onclick = () => {
    player1Fall3.classList.toggle('mafiaRedBtn')
  }
  player1Fall4.onclick = () => {
    player1Fall4.classList.toggle('mafiaRedBtn')
  }
  player1Fall5.onclick = () => {
    player1Fall5.classList.toggle('mafiaRedBtn')
  }
  player1Plus30.onclick = () => {
    player1Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player2Fall1.onclick = () => {
    player2Fall1.classList.toggle('mafiaRedBtn')
  }
  player2Fall2.onclick = () => {
    player2Fall2.classList.toggle('mafiaRedBtn')
  }
  player2Fall3.onclick = () => {
    player2Fall3.classList.toggle('mafiaRedBtn')
  }
  player2Fall4.onclick = () => {
    player2Fall4.classList.toggle('mafiaRedBtn')
  }
  player2Fall5.onclick = () => {
    player2Fall5.classList.toggle('mafiaRedBtn')
  }
  player2Plus30.onclick = () => {
    player2Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player3Fall1.onclick = () => {
    player3Fall1.classList.toggle('mafiaRedBtn')
  }
  player3Fall2.onclick = () => {
    player3Fall2.classList.toggle('mafiaRedBtn')
  }
  player3Fall3.onclick = () => {
    player3Fall3.classList.toggle('mafiaRedBtn')
  }
  player3Fall4.onclick = () => {
    player3Fall4.classList.toggle('mafiaRedBtn')
  }
  player3Fall5.onclick = () => {
    player3Fall5.classList.toggle('mafiaRedBtn')
  }
  player3Plus30.onclick = () => {
    player3Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player4Fall1.onclick = () => {
    player4Fall1.classList.toggle('mafiaRedBtn')
  }
  player4Fall2.onclick = () => {
    player4Fall2.classList.toggle('mafiaRedBtn')
  }
  player4Fall3.onclick = () => {
    player4Fall3.classList.toggle('mafiaRedBtn')
  }
  player4Fall4.onclick = () => {
    player4Fall4.classList.toggle('mafiaRedBtn')
  }
  player4Fall5.onclick = () => {
    player4Fall5.classList.toggle('mafiaRedBtn')
  }
  player4Plus30.onclick = () => {
    player4Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player5Fall1.onclick = () => {
    player5Fall1.classList.toggle('mafiaRedBtn')
  }
  player5Fall2.onclick = () => {
    player5Fall2.classList.toggle('mafiaRedBtn')
  }
  player5Fall3.onclick = () => {
    player5Fall3.classList.toggle('mafiaRedBtn')
  }
  player5Fall4.onclick = () => {
    player5Fall4.classList.toggle('mafiaRedBtn')
  }
  player5Fall5.onclick = () => {
    player5Fall5.classList.toggle('mafiaRedBtn')
  }
  player5Plus30.onclick = () => {
    player5Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player6Fall1.onclick = () => {
    player6Fall1.classList.toggle('mafiaRedBtn')
  }
  player6Fall2.onclick = () => {
    player6Fall2.classList.toggle('mafiaRedBtn')
  }
  player6Fall3.onclick = () => {
    player6Fall3.classList.toggle('mafiaRedBtn')
  }
  player6Fall4.onclick = () => {
    player6Fall4.classList.toggle('mafiaRedBtn')
  }
  player6Fall5.onclick = () => {
    player6Fall5.classList.toggle('mafiaRedBtn')
  }
  player6Plus30.onclick = () => {
    player6Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player7Fall1.onclick = () => {
    player7Fall1.classList.toggle('mafiaRedBtn')
  }
  player7Fall2.onclick = () => {
    player7Fall2.classList.toggle('mafiaRedBtn')
  }
  player7Fall3.onclick = () => {
    player7Fall3.classList.toggle('mafiaRedBtn')
  }
  player7Fall4.onclick = () => {
    player7Fall4.classList.toggle('mafiaRedBtn')
  }
  player7Fall5.onclick = () => {
    player7Fall5.classList.toggle('mafiaRedBtn')
  }
  player7Plus30.onclick = () => {
    player7Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player8Fall1.onclick = () => {
    player8Fall1.classList.toggle('mafiaRedBtn')
  }
  player8Fall2.onclick = () => {
    player8Fall2.classList.toggle('mafiaRedBtn')
  }
  player8Fall3.onclick = () => {
    player8Fall3.classList.toggle('mafiaRedBtn')
  }
  player8Fall4.onclick = () => {
    player8Fall4.classList.toggle('mafiaRedBtn')
  }
  player8Fall5.onclick = () => {
    player8Fall5.classList.toggle('mafiaRedBtn')
  }
  player8Plus30.onclick = () => {
    player8Plus30.classList.toggle('mafiaRedBtn')
  }
  
  player9Fall1.onclick = () => {
    player9Fall1.classList.toggle('mafiaRedBtn')
  }
  player9Fall2.onclick = () => {
    player9Fall2.classList.toggle('mafiaRedBtn')
  }
  player9Fall3.onclick = () => {
    player9Fall3.classList.toggle('mafiaRedBtn')
  }
  player9Fall4.onclick = () => {
    player9Fall4.classList.toggle('mafiaRedBtn')
  }
  player9Fall5.onclick = () => {
    player9Fall5.classList.toggle('mafiaRedBtn')
  }
  player9Plus30.onclick = () => {
    player9Plus30.classList.toggle('mafiaRedBtn')
  }
}
//

// КНОПКА НА 9 ИГРОКОВ
controlBtn09.onclick = () => {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  mP9() // Функция создает 9 строчек в которых указаны: Номер игрока и кнопка выставить
  funcPushVoting9() // Функционал кнопок 'Выставить' на 9 игроков
  funcClearVoteMafia9() // Функция очищающая поле 'Выставлены' на 9 игроков

  // Функционал кнопки 4 фола
  fallBtn04.onclick = () => {

// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP9() // Функция создает 9 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls4Players9() // Функция добавляющая кнопки 4 фолов и +30 на 9 игроков
  funcPushVoting9() // Функционал кнопок 'Выставить' на 9 игроков
  funcClearVoteMafia9() // Функция очищающая поле 'Выставлены' на 9 игроков
  funcGreenRedFalls4Players9() // Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30

}


  // Функционал кнопки 5 фолов
  fallBtn05.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//
  mP9() // Функция создает 9 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls5Players9() // Функция добавляющая кнопки 5 фолов и +30 на 9 игроков
  funcPushVoting9() // Функционал кнопок 'Выставить' на 9 игроков
  funcClearVoteMafia9() // Функция очищающая поле 'Выставлены'
  funcGreenRedFalls5Players9() // Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30

}
}

// 10 игроков

// Функция создает 10 строчек в которых указаны: Номер игрока и кнопка выставить
function mP10() {
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
}
//

// Функционал кнопок 'Выставить' на 10 игроков
function funcPushVoting10() {
  funcPushVoting9()
  pushVoting10.onclick = () => {
    // Run
    if (pushVoting10.value === 'Выставить') {
      pushVoting10.classList.toggle('mafiaVotingBtnOff')
      pushVoting10.value = 'Отменить'
      localArrVote.push(10)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting10.value === 'Отменить') {
      pushVoting10.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote10 = localArrVote.indexOf(10)
      localArrVote.splice(localIndexVote10, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting10.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 10 игроков

// База значений для функции - на 10 игроков
function funcClearVoteMafia10base() { 
  funcClearVoteMafia9base()
  pushVoting10.value = 'Выставить'
  pushVoting10.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia10() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia10base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 10 игроков
function funcFalls4Players10() {
  funcFalls4Players9()
  mafiaPlayer10.innerHTML += 
  `
  <button id="player10Fall1" class="mafiaGreenBtn">1</button>
  <button id="player10Fall2" class="mafiaGreenBtn">2</button>
  <button id="player10Fall3" class="mafiaGreenBtn">3</button>
  <button id="player10Fall4" class="mafiaGreenBtn">4</button>
  <button id="player10Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция добавляющая кнопки 5 фолов и +30 на 10 игроков
function funcFalls5Players10() {
  funcFalls5Players9()
  mafiaPlayer10.innerHTML += 
  `
  <button id="player10Fall1" class="mafiaGreenBtn">1</button>
  <button id="player10Fall2" class="mafiaGreenBtn">2</button>
  <button id="player10Fall3" class="mafiaGreenBtn">3</button>
  <button id="player10Fall4" class="mafiaGreenBtn">4</button>
  <button id="player10Fall5" class="mafiaGreenBtn">5</button>
  <button id="player10Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 10 игроков
function funcGreenRedFalls4Players10() { 
  funcGreenRedFalls4Players9()
  player10Fall1.onclick = () => {
    player10Fall1.classList.toggle('mafiaRedBtn')
  }
  player10Fall2.onclick = () => {
    player10Fall2.classList.toggle('mafiaRedBtn')
  }
  player10Fall3.onclick = () => {
    player10Fall3.classList.toggle('mafiaRedBtn')
  }
  player10Fall4.onclick = () => {
    player10Fall4.classList.toggle('mafiaRedBtn')
  }
  player10Plus30.onclick = () => {
    player10Plus30.classList.toggle('mafiaRedBtn')
  }
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 10 игроков
function funcGreenRedFalls5Players10() { 
  funcGreenRedFalls5Players9()
  player10Fall1.onclick = () => {
    player10Fall1.classList.toggle('mafiaRedBtn')
  }
  player10Fall2.onclick = () => {
    player10Fall2.classList.toggle('mafiaRedBtn')
  }
  player10Fall3.onclick = () => {
    player10Fall3.classList.toggle('mafiaRedBtn')
  }
  player10Fall4.onclick = () => {
    player10Fall4.classList.toggle('mafiaRedBtn')
  }
  player10Fall5.onclick = () => {
    player10Fall5.classList.toggle('mafiaRedBtn')
  }
  player10Plus30.onclick = () => {
    player10Plus30.classList.toggle('mafiaRedBtn')
  }
}
//


// КНОПКА НА 10 ИГРОКОВ
controlBtn10.onclick = () => {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
mP10() // Функция создает 10 строчек в которых указаны: Номер игрока и кнопка выставить
funcPushVoting10() // Функционал кнопок 'Выставить' на 10 игроков
funcClearVoteMafia10() // Функция очищающая поле 'Выставлены' на 10 игроков

  // Функционал кнопки 4 фола
  fallBtn04.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP10() // Функция создает 10 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls4Players10() // Функция добавляющая кнопки 4 фолов и +30 на 9 игроков
  funcPushVoting10() // Функционал кнопок 'Выставить' на 10 игроков
  funcClearVoteMafia10() // Функция очищающая поле 'Выставлены' на 10 игроков
  funcGreenRedFalls4Players10() // Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 10 игроков

}


  // Функционал кнопки 5 фолов
  fallBtn05.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP10() // Функция создает 10 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls5Players10() // Функция добавляющая кнопки 5 фолов и +30 на 9 игроков
  funcPushVoting10() // Функционал кнопок 'Выставить' на 10 игроков
  funcClearVoteMafia10() // Функция очищающая поле 'Выставлены' на 10 игроков
  funcGreenRedFalls5Players10() // Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 10 игроков
}
}

// 11 Игроков

// Функция создает 11 строчек в которых указаны: Номер игрока и кнопка выставить
function mP11() {
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
}
//

// Функционал кнопок 'Выставить' на 11 игроков
function funcPushVoting11() {
  funcPushVoting10()
  pushVoting11.onclick = () => {
    // Run
    if (pushVoting11.value === 'Выставить') {
      pushVoting11.classList.toggle('mafiaVotingBtnOff')
      pushVoting11.value = 'Отменить'
      localArrVote.push(11)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting11.value === 'Отменить') {
      pushVoting11.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote11 = localArrVote.indexOf(11)
      localArrVote.splice(localIndexVote11, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting11.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 11 игроков

// База значений для функции - на 11 игроков
function funcClearVoteMafia11base() { 
  funcClearVoteMafia10base()
  pushVoting11.value = 'Выставить'
  pushVoting11.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia11() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia11base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 11 игроков
function funcFalls4Players11() {
  funcFalls4Players10()
  mafiaPlayer11.innerHTML += 
  `
  <button id="player11Fall1" class="mafiaGreenBtn">1</button>
  <button id="player11Fall2" class="mafiaGreenBtn">2</button>
  <button id="player11Fall3" class="mafiaGreenBtn">3</button>
  <button id="player11Fall4" class="mafiaGreenBtn">4</button>
  <button id="player11Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция добавляющая кнопки 5 фолов и +30 на 11 игроков
function funcFalls5Players11() {
  funcFalls5Players10()
  mafiaPlayer11.innerHTML += 
  `
  <button id="player11Fall1" class="mafiaGreenBtn">1</button>
  <button id="player11Fall2" class="mafiaGreenBtn">2</button>
  <button id="player11Fall3" class="mafiaGreenBtn">3</button>
  <button id="player11Fall4" class="mafiaGreenBtn">4</button>
  <button id="player11Fall5" class="mafiaGreenBtn">5</button>
  <button id="player11Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 11 игроков
function funcGreenRedFalls4Players11() { 
  funcGreenRedFalls4Players10()
  player11Fall1.onclick = () => {
    player11Fall1.classList.toggle('mafiaRedBtn')
  }
  player11Fall2.onclick = () => {
    player11Fall2.classList.toggle('mafiaRedBtn')
  }
  player11Fall3.onclick = () => {
    player11Fall3.classList.toggle('mafiaRedBtn')
  }
  player11Fall4.onclick = () => {
    player11Fall4.classList.toggle('mafiaRedBtn')
  }
  player11Plus30.onclick = () => {
    player11Plus30.classList.toggle('mafiaRedBtn')
  }
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 11 игроков
function funcGreenRedFalls5Players11() { 
  funcGreenRedFalls5Players10()
  player11Fall1.onclick = () => {
    player11Fall1.classList.toggle('mafiaRedBtn')
  }
  player11Fall2.onclick = () => {
    player11Fall2.classList.toggle('mafiaRedBtn')
  }
  player11Fall3.onclick = () => {
    player11Fall3.classList.toggle('mafiaRedBtn')
  }
  player11Fall4.onclick = () => {
    player11Fall4.classList.toggle('mafiaRedBtn')
  }
  player11Fall5.onclick = () => {
    player11Fall5.classList.toggle('mafiaRedBtn')
  }
  player11Plus30.onclick = () => {
    player11Plus30.classList.toggle('mafiaRedBtn')
  }
}
//


// КНОПКА НА 11 ИГРОКОВ
controlBtn11.onclick = () => {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Вывод информации об игре в текстовое поле
textAriaMafia.innerHTML =
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
//

  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  mP11() // Функция создает 11 строчек в которых указаны: Номер игрока и кнопка выставить
  funcPushVoting11() // Функционал кнопок 'Выставить' на 11 игроков
  funcClearVoteMafia11() // Функция очищающая поле 'Выставлены' на 11 игроков

  // Функционал кнопки 4 фола
  fallBtn04.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP11() // Функция создает 11 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls4Players11() // Функция добавляющая кнопки 4 фолов и +30 на 11 игроков
  funcPushVoting11() // Функционал кнопок 'Выставить' на 11 игроков
  funcClearVoteMafia11() // Функция очищающая поле 'Выставлены' на 11 игроков
  funcGreenRedFalls4Players11() // Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 11 игроков

}


  // Функционал кнопки 5 фолов
  fallBtn05.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP11() // Функция создает 11 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls5Players11() // Функция добавляющая кнопки 5 фолов и +30 на 11 игроков
  funcPushVoting11() // Функционал кнопок 'Выставить' на 11 игроков
  funcClearVoteMafia11() // Функция очищающая поле 'Выставлены' на 11 игроков
  funcGreenRedFalls5Players11() // Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 11 игроков

}
}

// 12 игроков

// Функция создает 12 строчек в которых указаны: Номер игрока и кнопка выставить
function mP12() {
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
}
//

// Функционал кнопок 'Выставить' на 12 игроков
function funcPushVoting12() {
  funcPushVoting11()
  pushVoting12.onclick = () => {
    // Run
    if (pushVoting12.value === 'Выставить') {
      pushVoting12.classList.toggle('mafiaVotingBtnOff')
      pushVoting12.value = 'Отменить'
      localArrVote.push(12)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting12.value === 'Отменить') {
      pushVoting12.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote12 = localArrVote.indexOf(12)
      localArrVote.splice(localIndexVote12, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting12.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 12 игроков

// База значений для функции - на 12 игроков
function funcClearVoteMafia12base() { 
  funcClearVoteMafia11base()
  pushVoting12.value = 'Выставить'
  pushVoting12.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia12() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia12base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 12 игроков
function funcFalls4Players12() {
  funcFalls4Players11()
  mafiaPlayer12.innerHTML += 
  `
  <button id="player12Fall1" class="mafiaGreenBtn">1</button>
  <button id="player12Fall2" class="mafiaGreenBtn">2</button>
  <button id="player12Fall3" class="mafiaGreenBtn">3</button>
  <button id="player12Fall4" class="mafiaGreenBtn">4</button>
  <button id="player12Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция добавляющая кнопки 5 фолов и +30 на 12 игроков
function funcFalls5Players12() {
  funcFalls5Players11()
  mafiaPlayer12.innerHTML += 
  `
  <button id="player12Fall1" class="mafiaGreenBtn">1</button>
  <button id="player12Fall2" class="mafiaGreenBtn">2</button>
  <button id="player12Fall3" class="mafiaGreenBtn">3</button>
  <button id="player12Fall4" class="mafiaGreenBtn">4</button>
  <button id="player12Fall5" class="mafiaGreenBtn">5</button>
  <button id="player12Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 12 игроков
function funcGreenRedFalls4Players12() { 
  funcGreenRedFalls4Players11()
  player12Fall1.onclick = () => {
    player12Fall1.classList.toggle('mafiaRedBtn')
  }
  player12Fall2.onclick = () => {
    player12Fall2.classList.toggle('mafiaRedBtn')
  }
  player12Fall3.onclick = () => {
    player12Fall3.classList.toggle('mafiaRedBtn')
  }
  player12Fall4.onclick = () => {
    player12Fall4.classList.toggle('mafiaRedBtn')
  }
  player12Plus30.onclick = () => {
    player12Plus30.classList.toggle('mafiaRedBtn')
  }
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 12 игроков
function funcGreenRedFalls5Players12() { 
  funcGreenRedFalls5Players11()
  player12Fall1.onclick = () => {
    player12Fall1.classList.toggle('mafiaRedBtn')
  }
  player12Fall2.onclick = () => {
    player12Fall2.classList.toggle('mafiaRedBtn')
  }
  player12Fall3.onclick = () => {
    player12Fall3.classList.toggle('mafiaRedBtn')
  }
  player12Fall4.onclick = () => {
    player12Fall4.classList.toggle('mafiaRedBtn')
  }
  player12Fall5.onclick = () => {
    player12Fall5.classList.toggle('mafiaRedBtn')
  }
  player12Plus30.onclick = () => {
    player12Plus30.classList.toggle('mafiaRedBtn')
  }
}
//


// КНОПКА НА 12 ИГРОКОВ
controlBtn12.onclick = () => {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Вывод информации об игре в текстовое поле
textAriaMafia.innerHTML =
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
//

  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  mP12() // Функция создает 12 строчек в которых указаны: Номер игрока и кнопка выставить
  funcPushVoting12() // Функционал кнопок 'Выставить' на 12 игроков
  funcClearVoteMafia12() // Функция очищающая поле 'Выставлены' на 12 игроков

  // Функционал кнопки 4 фола
  fallBtn04.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP12() // Функция создает 12 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls4Players12() // Функция добавляющая кнопки 4 фолов и +30 на 12 игроков
  funcPushVoting12() // Функционал кнопок 'Выставить' на 12 игроков
  funcClearVoteMafia12() // Функция очищающая поле 'Выставлены' на 12 игроков
  funcGreenRedFalls4Players12() // Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 12 игроков

}


  // Функционал кнопки 5 фолов
  fallBtn05.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP12() // Функция создает 12 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls5Players12() // Функция добавляющая кнопки 5 фолов и +30 на 12 игроков
  funcPushVoting12() // Функционал кнопок 'Выставить' на 12 игроков
  funcClearVoteMafia12() // Функция очищающая поле 'Выставлены' на 12 игроков
  funcGreenRedFalls5Players12() // Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 12 игроков
}
}

// 13 игроков

// Функция создает 13 строчек в которых указаны: Номер игрока и кнопка выставить
function mP13() {
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
}
//

// Функционал кнопок 'Выставить' на 13 игроков
function funcPushVoting13() {
  funcPushVoting12()
  pushVoting13.onclick = () => {
    // Run
    if (pushVoting13.value === 'Выставить') {
      pushVoting13.classList.toggle('mafiaVotingBtnOff')
      pushVoting13.value = 'Отменить'
      localArrVote.push(13)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting13.value === 'Отменить') {
      pushVoting13.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote13 = localArrVote.indexOf(13)
      localArrVote.splice(localIndexVote13, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting13.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 13 игроков

// База значений для функции - на 13 игроков
function funcClearVoteMafia13base() { 
  funcClearVoteMafia12base()
  pushVoting13.value = 'Выставить'
  pushVoting13.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia13() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia13base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 13 игроков
function funcFalls4Players13() {
  funcFalls4Players12()
  mafiaPlayer13.innerHTML += 
  `
  <button id="player13Fall1" class="mafiaGreenBtn">1</button>
  <button id="player13Fall2" class="mafiaGreenBtn">2</button>
  <button id="player13Fall3" class="mafiaGreenBtn">3</button>
  <button id="player13Fall4" class="mafiaGreenBtn">4</button>
  <button id="player13Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция добавляющая кнопки 5 фолов и +30 на 13 игроков
function funcFalls5Players13() {
  funcFalls5Players12()
  mafiaPlayer13.innerHTML += 
  `
  <button id="player13Fall1" class="mafiaGreenBtn">1</button>
  <button id="player13Fall2" class="mafiaGreenBtn">2</button>
  <button id="player13Fall3" class="mafiaGreenBtn">3</button>
  <button id="player13Fall4" class="mafiaGreenBtn">4</button>
  <button id="player13Fall5" class="mafiaGreenBtn">5</button>
  <button id="player13Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 13 игроков
function funcGreenRedFalls4Players13() { 
  funcGreenRedFalls4Players12()
  player13Fall1.onclick = () => {
    player13Fall1.classList.toggle('mafiaRedBtn')
  }
  player13Fall2.onclick = () => {
    player13Fall2.classList.toggle('mafiaRedBtn')
  }
  player13Fall3.onclick = () => {
    player13Fall3.classList.toggle('mafiaRedBtn')
  }
  player13Fall4.onclick = () => {
    player13Fall4.classList.toggle('mafiaRedBtn')
  }
  player13Plus30.onclick = () => {
    player13Plus30.classList.toggle('mafiaRedBtn')
  }
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 13 игроков
function funcGreenRedFalls5Players13() { 
  funcGreenRedFalls5Players12()
  player13Fall1.onclick = () => {
    player13Fall1.classList.toggle('mafiaRedBtn')
  }
  player13Fall2.onclick = () => {
    player13Fall2.classList.toggle('mafiaRedBtn')
  }
  player13Fall3.onclick = () => {
    player13Fall3.classList.toggle('mafiaRedBtn')
  }
  player13Fall4.onclick = () => {
    player13Fall4.classList.toggle('mafiaRedBtn')
  }
  player13Fall5.onclick = () => {
    player13Fall5.classList.toggle('mafiaRedBtn')
  }
  player13Plus30.onclick = () => {
    player13Plus30.classList.toggle('mafiaRedBtn')
  }
}
//


// КНОПКА НА 13 ИГРОКОВ
controlBtn13.onclick = () => {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Вывод информации об игре в текстовое поле
textAriaMafia.innerHTML =
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
//

  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  mP13() // Функция создает 13 строчек в которых указаны: Номер игрока и кнопка выставить
  funcPushVoting13() // Функционал кнопок 'Выставить' на 13 игроков
  funcClearVoteMafia13() // Функция очищающая поле 'Выставлены' на 13 игроков

  // Функционал кнопки 4 фола
  fallBtn04.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP13() // Функция создает 13 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls4Players13() // Функция добавляющая кнопки 4 фолов и +30 на 13 игроков
  funcPushVoting13() // Функционал кнопок 'Выставить' на 13 игроков
  funcClearVoteMafia13() // Функция очищающая поле 'Выставлены' на 13 игроков
  funcGreenRedFalls4Players13() // Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 13 игроков

}


  // Функционал кнопки 5 фолов
  fallBtn05.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP13() // Функция создает 13 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls5Players13() // Функция добавляющая кнопки 5 фолов и +30 на 13 игроков
  funcPushVoting13() // Функционал кнопок 'Выставить' на 13 игроков
  funcClearVoteMafia13() // Функция очищающая поле 'Выставлены' на 13 игроков
  funcGreenRedFalls5Players13() // Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 13 игроков
}
}

// 14 игроков

// Функция создает 14 строчек в которых указаны: Номер игрока и кнопка выставить
function mP14() {
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
}
//

// Функционал кнопок 'Выставить' на 14 игроков
function funcPushVoting14() {
  funcPushVoting13()
  pushVoting14.onclick = () => {
    // Run
    if (pushVoting14.value === 'Выставить') {
      pushVoting14.classList.toggle('mafiaVotingBtnOff')
      pushVoting14.value = 'Отменить'
      localArrVote.push(14)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting14.value === 'Отменить') {
      pushVoting14.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote14 = localArrVote.indexOf(14)
      localArrVote.splice(localIndexVote14, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting14.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 14 игроков

// База значений для функции - на 14 игроков
function funcClearVoteMafia14base() { 
  funcClearVoteMafia13base()
  pushVoting14.value = 'Выставить'
  pushVoting14.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia14() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia14base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 14 игроков
function funcFalls4Players14() {
  funcFalls4Players13()
  mafiaPlayer14.innerHTML += 
  `
  <button id="player14Fall1" class="mafiaGreenBtn">1</button>
  <button id="player14Fall2" class="mafiaGreenBtn">2</button>
  <button id="player14Fall3" class="mafiaGreenBtn">3</button>
  <button id="player14Fall4" class="mafiaGreenBtn">4</button>
  <button id="player14Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция добавляющая кнопки 5 фолов и +30 на 14 игроков
function funcFalls5Players14() {
  funcFalls5Players13()
  mafiaPlayer14.innerHTML += 
  `
  <button id="player14Fall1" class="mafiaGreenBtn">1</button>
  <button id="player14Fall2" class="mafiaGreenBtn">2</button>
  <button id="player14Fall3" class="mafiaGreenBtn">3</button>
  <button id="player14Fall4" class="mafiaGreenBtn">4</button>
  <button id="player14Fall5" class="mafiaGreenBtn">5</button>
  <button id="player14Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 14 игроков
function funcGreenRedFalls4Players14() { 
  funcGreenRedFalls4Players13()
  player14Fall1.onclick = () => {
    player14Fall1.classList.toggle('mafiaRedBtn')
  }
  player14Fall2.onclick = () => {
    player14Fall2.classList.toggle('mafiaRedBtn')
  }
  player14Fall3.onclick = () => {
    player14Fall3.classList.toggle('mafiaRedBtn')
  }
  player14Fall4.onclick = () => {
    player14Fall4.classList.toggle('mafiaRedBtn')
  }
  player14Plus30.onclick = () => {
    player14Plus30.classList.toggle('mafiaRedBtn')
  }
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 14 игроков
function funcGreenRedFalls5Players14() { 
  funcGreenRedFalls5Players13()
  player14Fall1.onclick = () => {
    player14Fall1.classList.toggle('mafiaRedBtn')
  }
  player14Fall2.onclick = () => {
    player14Fall2.classList.toggle('mafiaRedBtn')
  }
  player14Fall3.onclick = () => {
    player14Fall3.classList.toggle('mafiaRedBtn')
  }
  player14Fall4.onclick = () => {
    player14Fall4.classList.toggle('mafiaRedBtn')
  }
  player14Fall5.onclick = () => {
    player14Fall5.classList.toggle('mafiaRedBtn')
  }
  player14Plus30.onclick = () => {
    player14Plus30.classList.toggle('mafiaRedBtn')
  }
}
//


// КНОПКА НА 14 ИГРОКОВ
controlBtn14.onclick = () => {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Вывод информации об игре в текстовое поле
textAriaMafia.innerHTML =
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
//

  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  mP14() // Функция создает 14 строчек в которых указаны: Номер игрока и кнопка выставить
  funcPushVoting14() // Функционал кнопок 'Выставить' на 14 игроков
  funcClearVoteMafia14() // Функция очищающая поле 'Выставлены' на 14 игроков

  // Функционал кнопки 4 фола
  fallBtn04.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP14() // Функция создает 14 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls4Players14() // Функция добавляющая кнопки 4 фолов и +30 на 14 игроков
  funcPushVoting14() // Функционал кнопок 'Выставить' на 14 игроков
  funcClearVoteMafia14() // Функция очищающая поле 'Выставлены' на 14 игроков
  funcGreenRedFalls4Players14() // Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 14 игроков

}


  // Функционал кнопки 5 фолов
  fallBtn05.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP14() // Функция создает 14 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls5Players14() // Функция добавляющая кнопки 5 фолов и +30 на 14 игроков
  funcPushVoting14() // Функционал кнопок 'Выставить' на 14 игроков
  funcClearVoteMafia14() // Функция очищающая поле 'Выставлены' на 14 игроков
  funcGreenRedFalls5Players14() // Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 14 игроков
}
}

// 15 игроков

// Функция создает 15 строчек в которых указаны: Номер игрока и кнопка выставить
function mP15() {
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
}
//

// Функционал кнопок 'Выставить' на 15 игроков
function funcPushVoting15() {
  funcPushVoting14()
  pushVoting15.onclick = () => {
    // Run
    if (pushVoting15.value === 'Выставить') {
      pushVoting15.classList.toggle('mafiaVotingBtnOff')
      pushVoting15.value = 'Отменить'
      localArrVote.push(15)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting15.value === 'Отменить') {
      pushVoting15.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote15 = localArrVote.indexOf(15)
      localArrVote.splice(localIndexVote15, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting15.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 15 игроков

// База значений для функции - на 15 игроков
function funcClearVoteMafia15base() { 
  funcClearVoteMafia14base()
  pushVoting15.value = 'Выставить'
  pushVoting15.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia15() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia15base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 15 игроков
function funcFalls4Players15() {
  funcFalls4Players14()
  mafiaPlayer15.innerHTML += 
  `
  <button id="player15Fall1" class="mafiaGreenBtn">1</button>
  <button id="player15Fall2" class="mafiaGreenBtn">2</button>
  <button id="player15Fall3" class="mafiaGreenBtn">3</button>
  <button id="player15Fall4" class="mafiaGreenBtn">4</button>
  <button id="player15Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция добавляющая кнопки 5 фолов и +30 на 15 игроков
function funcFalls5Players15() {
  funcFalls5Players14()
  mafiaPlayer15.innerHTML += 
  `
  <button id="player15Fall1" class="mafiaGreenBtn">1</button>
  <button id="player15Fall2" class="mafiaGreenBtn">2</button>
  <button id="player15Fall3" class="mafiaGreenBtn">3</button>
  <button id="player15Fall4" class="mafiaGreenBtn">4</button>
  <button id="player15Fall5" class="mafiaGreenBtn">5</button>
  <button id="player15Plus30" class="mafiaGreenBtn">+30</button>
  `
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 15 игроков
function funcGreenRedFalls4Players15() { 
  funcGreenRedFalls4Players14()
  player15Fall1.onclick = () => {
    player15Fall1.classList.toggle('mafiaRedBtn')
  }
  player15Fall2.onclick = () => {
    player15Fall2.classList.toggle('mafiaRedBtn')
  }
  player15Fall3.onclick = () => {
    player15Fall3.classList.toggle('mafiaRedBtn')
  }
  player15Fall4.onclick = () => {
    player15Fall4.classList.toggle('mafiaRedBtn')
  }
  player15Plus30.onclick = () => {
    player15Plus30.classList.toggle('mafiaRedBtn')
  }
}
//

// Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 15 игроков
function funcGreenRedFalls5Players15() { 
  funcGreenRedFalls5Players14()
  player15Fall1.onclick = () => {
    player15Fall1.classList.toggle('mafiaRedBtn')
  }
  player15Fall2.onclick = () => {
    player15Fall2.classList.toggle('mafiaRedBtn')
  }
  player15Fall3.onclick = () => {
    player15Fall3.classList.toggle('mafiaRedBtn')
  }
  player15Fall4.onclick = () => {
    player15Fall4.classList.toggle('mafiaRedBtn')
  }
  player15Fall5.onclick = () => {
    player15Fall5.classList.toggle('mafiaRedBtn')
  }
  player15Plus30.onclick = () => {
    player15Plus30.classList.toggle('mafiaRedBtn')
  }
}
//


// КНОПКА НА 15 ИГРОКОВ
controlBtn15.onclick = () => {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Вывод информации об игре в текстовое поле
textAriaMafia.innerHTML =
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
//

  btnFalls.innerHTML = 
  `
  <button id="fallBtn04" class="fallBtn">4 фола</button>
  <button id="fallBtn05" class="fallBtn">5 фолов</button> 
  `
  mP15() // Функция создает 15 строчек в которых указаны: Номер игрока и кнопка выставить
  funcPushVoting15() // Функционал кнопок 'Выставить' на 15 игроков
  funcClearVoteMafia15() // Функция очищающая поле 'Выставлены' на 15 игроков

  // Функционал кнопки 4 фола
  fallBtn04.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP15() // Функция создает 15 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls4Players15() // Функция добавляющая кнопки 4 фолов и +30 на 15 игроков
  funcPushVoting15() // Функционал кнопок 'Выставить' на 15 игроков
  funcClearVoteMafia15() // Функция очищающая поле 'Выставлены' на 15 игроков
  funcGreenRedFalls4Players15() // Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 15 игроков

}


  // Функционал кнопки 5 фолов
  fallBtn05.onclick = () => {
// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
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
//

  mP15() // Функция создает 15 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls5Players15() // Функция добавляющая кнопки 5 фолов и +30 на 15 игроков
  funcPushVoting15() // Функционал кнопок 'Выставить' на 15 игроков
  funcClearVoteMafia15() // Функция очищающая поле 'Выставлены' на 15 игроков
  funcGreenRedFalls5Players15() // Функция окрашивающая в зеленый/красный цвет кнопки 5 фолов и +30 на 15 игроков

}
}

// КОНЕЦ КНОПОЧЕК
///

// Секундомер
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
//

// Ширина mafiaUpBlockGlobal = ширине mafiaControlPanel
setInterval(function () {
  document.querySelector('#mafiaUpBlockGlobal').style.width = `${document.querySelector('#mafiaControlPanel').offsetWidth -4}px`
}, 10);
//
