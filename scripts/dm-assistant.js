function advanceTurn() {
    const turn = document.getElementById('turn');
    let updatedTurn = Number(turn.innerText) + 1;

    if ( updatedTurn % 2 === 0 ) {
        openEncounterModal()
    }

    if ( updatedTurn === 5 ) {
        openRestModal()
    }

    if ( updatedTurn > 6 ) {
        updateHour();
        updatedTurn = 1;
    } 

    updateDurations();

    turn.innerText = updatedTurn
}

function addTorch( event ) {
    const characterName = event.target.characterName.value;
    const durationsContainer = document.getElementById('durations');

    const newTorch = document.createElement('button');
    newTorch.innerText = characterName + '\'s Torch '
    newTorch.className = 'duration-torch'

    const torchDuration = document.createElement('span');
    torchDuration.className = '.turns-remaining';
    torchDuration.innerText = '6';

    newTorch.appendChild(torchDuration);
    durationsContainer.appendChild(newTorch);
}

function addSpell( event ) {
    const characterName = event.target.characterName.value;
    const spellName = event.target.spellName.value;
    const spellDuration = event.target.spellDuration.value;
    const durationsContainer = document.getElementById('durations');
    
    const newSpell = document.createElement('button');
    newSpell.innerText = characterName + '\'s ' + spellName + ' ';
    newSpell.className = 'duration-spell'

    const durationSpan = document.createElement('span');
    durationSpan.className = '.turns-remaining';
    durationSpan.innerText = spellDuration;

    newSpell.appendChild(durationSpan);
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
            openDurationExpiredModal(duration);
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

// BUG: When two things expire at the same time, only one gets notified of
function openDurationExpiredModal(durationElement) {
    // Get the duration's details, stripping off its actual duration value
   const turnsRemaining = durationElement.children[0];
   turnsRemaining.remove()
   const durationDetails = durationElement.innerText;
   
   const modal = document.getElementById('duration-expired-modal');
   
   const durationDetailsElement = document.getElementById('expiry-message');
   durationDetailsElement.textContent = durationDetails + ' expired';

   modal.showModal()
}

function closeDurationExpiredModal() {
    const modal = document.getElementById('duration-expired-modal');
    modal.close()
}

function openRestModal() {
    const modal = document.getElementById('rest-modal');
    modal.showModal();
}

function closeRestModal() {
    const modal = document.getElementById('rest-modal');
    modal.close();
}

function openEncounterModal() {
    const modal = document.getElementById('encounter-modal');
    modal.showModal();
}

function closeEncounterModal() {
    const modal = document.getElementById('encounter-modal');
    modal.close();
}