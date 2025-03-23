function advanceTurn() {
    const turn = document.getElementById('turn');
    let updatedTurn = Number(turn.innerText) + 1;

    if ( updatedTurn > 6 ) {
        updateHour();
        updatedTurn = 1;
    } 

    turn.innerText = updatedTurn

    updateDurations();
}

function addTorch( event ) {
    const characterName = event.target.characterName.value;

    const torchDuration = document.createElement('span');
    torchDuration.className = '.turns-remaining';
    torchDuration.innerText = '6';

    const newTorch = document.createElement('button');
    newTorch.innerText = characterName + '\'s Torch '
    newTorch.className = 'duration-torch'
    newTorch.appendChild(torchDuration);

    const durationsContainer = document.getElementById('durations');
    durationsContainer.appendChild(newTorch);
}

function addSpell() {
    const spellDuration = document.createElement('span');
    spellDuration.className = '.turns-remaining';
    spellDuration.innerText = '10';

    const newSpell = document.createElement('button');
    newSpell.innerText = 'Spell ';
    newSpell.className = 'duration-spell'
    newSpell.appendChild(spellDuration);

    const durationsContainer = document.getElementById('durations');
    durationsContainer.appendChild(newSpell);
}

function updateHour() {
    const hour = document.getElementById('hour');
    const updatedHour = Number( hour.innerText ) + 1;
    hour.innerText = updatedHour;
}

// There is a bug
function updateDurations() {
    const durationsContainer = document.getElementById('durations');
    const durations = durationsContainer.children;
    for ( const duration of durations ) {
        const turnsRemainingElm = duration.getElementsByClassName('.turns-remaining')[0];
        const turnsRemaining = Number(turnsRemainingElm.innerText);
        const updatedTurns = turnsRemaining - 1;

        if ( updatedTurns < 1 ) {
            duration.remove()
            continue;
        }

        turnsRemainingElm.innerText = updatedTurns;
    }
}

function openTorchModal() {
    const modal = document.getElementById('torch-modal');
    modal.showModal();
}