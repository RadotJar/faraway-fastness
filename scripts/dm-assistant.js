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

function addTorch() {
    const torchDuration = document.createElement('span');
    torchDuration.className = '.turnsRemaining';
    torchDuration.innerText = '6';

    const newTorch = document.createElement('li');
    newTorch.innerText = 'Torch ';
    newTorch.appendChild(torchDuration);

    const durationsContainer = document.getElementById('durations');
    durationsContainer.appendChild(newTorch);
}

function addSpell() {
    const spellDuration = document.createElement('span');
    spellDuration.className = '.turnsRemaining';
    spellDuration.innerText = '10';

    const newSpell = document.createElement('li');
    newSpell.innerText = 'Spell ';
    newSpell.appendChild(spellDuration);

    const durationsContainer = document.getElementById('durations');
    durationsContainer.appendChild(newSpell);
}

function updateHour() {
    const hour = document.getElementById('hour');
    const updatedHour = Number( hour.innerText ) + 1;
    hour.innerText = updatedHour;
}

function updateDurations() {
    const durationsContainer = document.getElementById('durations');
    const durations = durationsContainer.children;
    for ( const duration of durations ) {
        const turnsRemainingElm = duration.getElementsByClassName('.turnsRemaining')[0];
        const turnsRemaining = Number(turnsRemainingElm.innerText);
        const updatedTurns = turnsRemaining - 1;

        if ( updatedTurns < 1 ) {
            duration.remove()
            continue;
        }

        turnsRemainingElm.innerText = updatedTurns;
    }
}