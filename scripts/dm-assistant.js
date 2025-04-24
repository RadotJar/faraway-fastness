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

function addSpell( event ) {
    const characterName = event.target.characterName.value;
    const spellName = event.target.spellName.value;
    const spellDuration = event.target.spellDuration.value;

    const durationSpan = document.createElement('span');
    durationSpan.className = '.turns-remaining';
    durationSpan.innerText = spellDuration;

    const newSpell = document.createElement('button');
    newSpell.innerText = characterName + '\'s ' + spellName + ' ';
    newSpell.className = 'duration-spell'
    newSpell.appendChild(durationSpan);

    const durationsContainer = document.getElementById('durations');
    durationsContainer.appendChild(newSpell);
}

function updateHour() {
    const hour = document.getElementById('hour');
    const updatedHour = Number( hour.innerText ) + 1;
    hour.innerText = updatedHour;
}

// This is gross
function updateDurations() {
    const durationsContainer = document.getElementById('durations');
    const durations = durationsContainer.children;

    for ( const duration of durations ) {
        const turnsRemainingElm = duration.getElementsByClassName('.turns-remaining')[0];
        const turnsRemaining = Number(turnsRemainingElm.innerText);
        const updatedTurns = turnsRemaining - 1;
        turnsRemainingElm.innerText = updatedTurns;
    }

    for ( const duration of durations ) {
        const turnsRemainingElm = duration.getElementsByClassName('.turns-remaining')[0];
        const turnsRemaining = Number(turnsRemainingElm.innerText);
        if ( turnsRemaining < 1 ) {
            duration.remove()
        }
    }

}

function openTorchModal() {
    const modal = document.getElementById('torch-modal');
    modal.showModal();
}

function openSpellModal() {
    const modal = document.getElementById('spell-modal');
    modal.showModal();
}