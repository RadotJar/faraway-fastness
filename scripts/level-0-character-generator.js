function rollArtisanOccupation() {
  const roll = Math.floor(Math.random() * 100) + 1;

  const table = [
    { min: 1, max: 2, result: "Apothecary", special: "Buys/sells botanicals (herbal teas, healing herbs)" },
    { min: 3, max: 4, result: "Armorer", special: 'Buys "metals, common" (bronze, iron) and sells "armor & weapons" (armor)' },
    { min: 5, max: 6, result: "Baker", special: 'Buys "grain & vegetables" (grain), sells bread' },
    { min: 7, max: 8, result: "Blacksmith", special: 'Buys "metals, common" (iron), sells "tools" (iron tools)' },
    { min: 9, max: 9, result: "Bookbinder", special: 'Buys "books, rare" (unbound/damaged books), sells services (binding/repair)' },
    { min: 10, max: 11, result: "Bowyer / Fletcher", special: 'Buys "wood, common", sells "armor & weapons" (bows, arrows)' },
    { min: 12, max: 14, result: "Brewer", special: 'Buys "grain & vegetables" (grain), sells "beer, ale"' },
    { min: 15, max: 16, result: "Brickmaker", special: "Sells services (makes fired clay bricks and ceramic tiles)" },
    { min: 17, max: 21, result: "Butcher", special: 'Buys animals (any except horse), sells "meats, preserved"' },
    { min: 22, max: 22, result: "Cabinetmaker", special: 'Buys "woods, common" and "woods, rare", sells services' },
    { min: 23, max: 25, result: "Candlemaker", special: 'Buys "meats, preserved" (animal fat), sells candles' },
    { min: 26, max: 27, result: "Capper / Hatter", special: 'Buys "textiles" (felt, velvet), sells "clothing" (caps/hats)' },
    { min: 28, max: 28, result: "Carpenter", special: 'Buys "woods, common" and "woods, rare", sells services (wooden structures)' },
    { min: 29, max: 31, result: "Chaloner / Tapicer", special: 'Buys "textiles" (wool), sells blankets and tapestries' },
    { min: 32, max: 37, result: "Clothmaker", special: 'Buys "textiles" (yarn), "dyes & pigments", sells "textiles" (wool or linen)' },
    { min: 38, max: 39, result: "Cobbler / Cordwainer", special: 'Buys "furs, common" (leather), sells "clothing" (shoes and leather goods)' },
    { min: 40, max: 41, result: "Confectioner", special: 'Buys "grain & vegetables" (grain), "salt", "spices", sells candy or pastries' },
    { min: 42, max: 42, result: "Cooper", special: 'Buys "wood, common" and "metals, common", sells barrels' },
    { min: 43, max: 44, result: "Coppersmith", special: 'Buys "metals, common" (copper, tin), sells "tools" (metal tools)' },
    { min: 45, max: 45, result: "Corder / Ropemaker", special: 'Buys "textiles" (fiber), makes ropes and cords' },
    { min: 46, max: 48, result: "Decorative Artist", special: 'Buys "dyes & pigments", sells services (mosaics, painting)' },
    { min: 49, max: 49, result: "Florist", special: "Sells services (cuts and arranges fresh flowers)" },
    { min: 50, max: 50, result: "Gemcutter", special: 'Buys "semiprecious stones" (uncut), sells "gems"' },
    { min: 51, max: 52, result: "Glassworker", special: 'Sells "glassware"' },
    { min: 53, max: 56, result: "Goldsmith", special: 'Buys/sells "metals, precious" (gold), sells gold jewelry' },
    { min: 57, max: 58, result: "Hornworker", special: 'Buys/sells "monster parts" and "ivory"' },
    { min: 59, max: 60, result: "Illuminator", special: "Sells services (illuminates books with colored inks)" },
    { min: 61, max: 61, result: "Jeweler", special: 'Buys "metals, precious", "gems", sells jewelry and regalia' },
    { min: 62, max: 62, result: "Locksmith", special: 'Buys "metals, common" (iron), sells tools, locks, manacles' },
    { min: 63, max: 64, result: "Mason", special: "Sells services (cuts stone and constructs stone buildings)" },
    { min: 65, max: 65, result: "Parchmentmaker", special: 'Buys/sells "furs, common" (skins), makes parchment' },
    { min: 66, max: 66, result: "Perfumer", special: 'Buys/sells "spices", sells perfumes and incense' },
    { min: 67, max: 69, result: "Potter", special: 'Sells "pottery" and "porcelain, fine"' },
    { min: 70, max: 71, result: "Saddler / Fuster", special: 'Buys "furs, common" (leather), sells saddles and tack' },
    { min: 72, max: 75, result: "Scribe", special: "Sells services (scribes codices and scrolls)" },
    { min: 76, max: 76, result: "Shipwright", special: 'Buys "wood, common", sells services (builds and repairs ships)' },
    { min: 77, max: 77, result: "Silversmith", special: 'Buys/sells "metals, precious" (silver), sells silverware and jewelry' },
    { min: 78, max: 83, result: "Spinner", special: 'Buys "textiles" (fiber), sells "textiles" (yarn)' },
    { min: 84, max: 89, result: "Tailor / Seamstress", special: 'Buys "textiles" (wool, linen, silk), sells "clothing"' },
    { min: 90, max: 93, result: "Tanner / Tawer", special: 'Buys "furs, common" (skins), sells "furs, common" (leather)' },
    { min: 94, max: 94, result: "Taxidermist", special: 'Buys "furs, common", "monster parts", "ivory", sells services (stuffing and mounting)' },
    { min: 95, max: 96, result: "Tinker / Toymaker", special: 'Buys "metals, common" and "wood, common", sells toys and trinkets' },
    { min: 97, max: 97, result: "Wainwright", special: 'Buys "wood, common", sells services (constructs and repairs carts and wagons)' },
    { min: 98, max: 99, result: "Weaponsmith", special: 'Buys "metals, common" (iron), sells "armor & weapons" (melee weapons)' },
    { min: 100, max: 100, result: "Wheelwright", special: 'Buys "wood, common", sells services (makes and repairs wheels)' }
  ];

  const entry = table.find(row => roll >= row.min && roll <= row.max);

  return {
    occupation: entry.result,
    special: entry.special
  };
}

function rollMerchantOccupation() {
  const roll = Math.floor(Math.random() * 100) + 1;

  const table = [
    { min: 1, max: 1, result: "Bookseller", special: 'Buys/sells "books, rare"' },
    { min: 2, max: 6, result: "Chandler / Upholder", special: "Buys/sells any/all goods with 10% price penalty; general reseller of goods" },
    { min: 7, max: 8, result: "Coppermonger", special: 'Buys/sells "metals, common" (copper or tin ingots)' },
    { min: 9, max: 20, result: "Cornmonger", special: 'Buys/sells "grain & vegetables" (grain)' },
    { min: 21, max: 31, result: "Draper", special: 'Buys/sells "textiles" (wool or linen)' },
    { min: 32, max: 38, result: "Fishmonger", special: 'Buys/sells "fish, preserved"' },
    { min: 39, max: 44, result: "Fripperer", special: 'Buys/sells "clothing" (second-hand clothing)' },
    { min: 45, max: 46, result: "Furrier", special: 'Buys/sells "hides, furs", "furs, rare", "monster parts" (furs); sells fur capes and coats' },
    { min: 47, max: 48, result: "Greengrocer", special: 'Buys/sells "grain & vegetables" (fruits and vegetables)' },
    { min: 49, max: 52, result: "Horsemonger", special: 'Buys/sells "mounts" (horses)' },
    { min: 53, max: 61, result: "Ironmonger", special: 'Buys/sells "metals, common" (iron ingots)' },
    { min: 62, max: 66, result: "Lawyer", special: "Sells legal services" },
    { min: 67, max: 75, result: "Lumbermonger", special: 'Buys/sells "wood, common" and "wood, rare"' },
    { min: 76, max: 80, result: "Mercer", special: 'Buys/sells "textiles" (felt, velvet) and "silk"' },
    { min: 81, max: 82, result: "Oilmonger", special: 'Buys/sells "oil & sauce" (oils)' },
    { min: 83, max: 88, result: "Peltmonger / Skinner", special: 'Buys/sells "furs, common" (pelts); sells "furs, common" (skins)' },
    { min: 89, max: 91, result: "Poulterer", special: 'Sells "preserved meat" (poultry)' },
    { min: 92, max: 95, result: "Salter / Pepperer", special: 'Buys/sells "salt", "botanicals", "spices"' },
    { min: 96, max: 100, result: "Vintner", special: 'Buys/sells "wine & spirits"' }
  ];

  const entry = table.find(row => roll >= row.min && roll <= row.max);

  return {
    occupation: entry.result,
    special: entry.special
  };
}

function rollMinorMagicianOccupation() {
  const roll = Math.floor(Math.random() * 100) + 1;

  const table = [
    { min: 1, max: 2, result: "Augur", special: "Training to be 1st level" },
    { min: 3, max: 10, result: "Occultist", special: "Training to be 1st level" },
    { min: 11, max: 20, result: "Astrologer", special: "Training to be 1st level" },
    { min: 21, max: 35, result: "Hedge Magician", special: "Training to be 1st level" },
    { min: 36, max: 65, result: "Apprentice Mage", special: "Training to be 1st level" },
    { min: 66, max: 80, result: "Prestidigitator", special: "Training to be 1st level" },
    { min: 81, max: 90, result: "Charlatan", special: "Training to be 1st level" },
    { min: 91, max: 97, result: "Failed Apprentice", special: "Training to be 1st level" },
    { min: 98, max: 100, result: "Apprentice Warlock", special: "Training to be 1st level" }
  ];

  const entry = table.find(row => roll >= row.min && roll <= row.max);

  return {
    occupation: entry.result,
    special: entry.special
  };
}

function rollMercenaryOccupation() {
  const roll = Math.floor(Math.random() * 100) + 1;

  const table = [
    { min: 1, max: 30, result: "Light Infantry", special: "25% are veterans" },
    { min: 31, max: 45, result: "Heavy Infantry", special: "25% are veterans" },
    { min: 46, max: 65, result: "Bowman / Slinger", special: "25% are veterans" },
    { min: 66, max: 72, result: "Crossbowman", special: "25% are veterans" },
    { min: 73, max: 79, result: "Longbowman", special: "25% are veterans" },
    { min: 80, max: 85, result: "Light Cavalry", special: "25% are veterans" },
    { min: 86, max: 89, result: "Horse Archer", special: "25% are veterans" },
    { min: 90, max: 93, result: "Medium Cavalry", special: "25% are veterans" },
    { min: 94, max: 97, result: "Heavy Cavalry", special: "25% are veterans" },
    { min: 98, max: 100, result: "Cataphract", special: "25% are veterans" }
  ];

  const entry = table.find(row => roll >= row.min && roll <= row.max);

  return {
    occupation: entry.result,
    special: entry.special
  };
}

function rollEntertainerOccupation() {
  const roll = Math.floor(Math.random() * 100) + 1;

  const table = [
    { min: 1, max: 11, result: "Actor (Apprentice)", special: "25% are bards" },
    { min: 12, max: 16, result: "Actor (Journeyman)", special: "25% are bards" },
    { min: 17, max: 20, result: "Actor (Master)", special: "25% are bards" },

    { min: 21, max: 37, result: "Musician (Apprentice)", special: "25% are bards" },
    { min: 38, max: 45, result: "Musician (Journeyman)", special: "25% are bards" },
    { min: 46, max: 49, result: "Musician (Master)", special: "25% are bards" },

    { min: 50, max: 63, result: "Dancer (Apprentice)", special: "25% are bards" },
    { min: 64, max: 70, result: "Dancer (Journeyman)", special: "25% are bards" },
    { min: 71, max: 73, result: "Dancer (Master)", special: "25% are bards" },

    { min: 74, max: 100, result: "Carouser", special: "25% are bards" }
  ];

  const entry = table.find(row => roll >= row.min && roll <= row.max);

  return {
    occupation: entry.result,
    special: entry.special
  };
}

function rollMinorEcclesiasticOccupation() {
  const roll = Math.floor(Math.random() * 100) + 1;

  const table = [
    { min: 1, max: 2, result: "Anchorite", special: "Training to be 1st level" },
    { min: 3, max: 10, result: "Oracle", special: "Training to be 1st level" },
    { min: 11, max: 20, result: "Almsgiver / Missionary", special: "Training to be 1st level" },
    { min: 21, max: 35, result: "Village Witch", special: "Training to be 1st level" },
    { min: 36, max: 65, result: "Seminarian", special: "Training to be 1st level" },
    { min: 66, max: 80, result: "Hospitalist / Medician", special: "Training to be 1st level" },
    { min: 81, max: 90, result: "Sacred Courtesan", special: "Training to be 1st level" },
    { min: 91, max: 97, result: "Inquisitor", special: "Training to be 1st level" },
    { min: 98, max: 100, result: "Cultist / Heretic", special: "Training to be 1st level" }
  ];

  const entry = table.find(row => roll >= row.min && roll <= row.max);

  return {
    occupation: entry.result,
    special: entry.special
  };
}

function rollSpecialistOccupation() {
  const roll = Math.floor(Math.random() * 100) + 1;

  const table = [
    { min: 1, max: 6, result: "Alchemist (Apprentice)", special: "-" },
    { min: 7, max: 9, result: "Alchemist (Assistant)", special: "-" },
    { min: 10, max: 12, result: "Alchemist", special: "25% are mages" },

    { min: 13, max: 17, result: "Animal Trainer (Domestic)", special: "-" },
    { min: 18, max: 20, result: "Animal Trainer (Wild)", special: "-" },
    { min: 21, max: 22, result: "Animal Trainer (Giant)", special: "-" },
    { min: 23, max: 23, result: "Animal Trainer (Fantastic)", special: "-" },

    { min: 24, max: 26, result: "Artillerist", special: "25% are fighters" },

    { min: 27, max: 32, result: "Engineer (Apprentice)", special: "-" },
    { min: 33, max: 35, result: "Engineer (Assistant)", special: "-" },
    { min: 36, max: 37, result: "Engineer", special: "1% are dwarven machinists" },

    { min: 38, max: 43, result: "Healer", special: "25% are priestesses" },
    { min: 44, max: 46, result: "Healer (Physicker)", special: "25% are priestesses" },
    { min: 47, max: 48, result: "Healer (Chirurgeon)", special: "25% are priestesses" },

    { min: 49, max: 53, result: "Marshal (Light Infantry)", special: "100% are fighters" },
    { min: 54, max: 56, result: "Marshal (Bow)", special: "100% are fighters" },
    { min: 57, max: 59, result: "Marshal (Heavy Infantry)", special: "100% are fighters" },
    { min: 60, max: 62, result: "Marshal (Light Cavalry)", special: "100% are fighters" },
    { min: 63, max: 63, result: "Marshal (Heavy Cavalry)", special: "100% are fighters" },
    { min: 64, max: 64, result: "Marshal (Horse Archer)", special: "100% are fighters" },
    { min: 65, max: 65, result: "Marshal (Cataphract)", special: "100% are fighters" },

    { min: 66, max: 70, result: "Navigator", special: "50% are explorers" },
    { min: 71, max: 73, result: "Quartermaster", special: "25% are fighters" },

    { min: 74, max: 79, result: "Sage (Apprentice)", special: "-" },
    { min: 80, max: 82, result: "Sage (Assistant)", special: "-" },
    { min: 83, max: 84, result: "Sage", special: "25% are bards or mages" },

    { min: 85, max: 89, result: "Scout (Pathfinder)", special: "25% are explorers or venturers" },
    { min: 90, max: 94, result: "Scout (Surveyor)", special: "25% are explorers or venturers" },

    { min: 95, max: 97, result: "Siege Engineer", special: "1% are dwarven machinists" },
    { min: 98, max: 100, result: "Ship Captain", special: "50% are explorers or venturers" }
  ];

  const entry = table.find(row => roll >= row.min && roll <= row.max);

  return {
    occupation: entry.result,
    special: entry.special
  };
}

function rollHostellerOccupation() {
  const roll = Math.floor(Math.random() * 100) + 1;

  const table = [
    { min: 1, max: 60, result: "Cantinakeeper", special: "5% are fighters or thieves" },
    { min: 61, max: 85, result: "Tavernkeeper", special: "15% are fighters or thieves" },
    { min: 86, max: 95, result: "Innkeeper", special: "15% are fighters or thieves" },
    { min: 96, max: 100, result: "Brothelkeeper", special: "100% are thieves" }
  ];

  const entry = table.find(row => roll >= row.min && roll <= row.max);

  return {
    occupation: entry.result,
    special: entry.special
  };
}

function rollLaborerOccupation() {
    const table = [
        { min: 1, max: 3, result: "Barber" },
        { min: 4, max: 6, result: "Bath Attendant / Masseuse" },
        { min: 7, max: 8, result: "Bricklayer" },
        { min: 9, max: 19, result: "Cook" },
        { min: 20, max: 22, result: "Dockworker" },
        { min: 23, max: 25, result: "Fuller / Launderer" },
        { min: 26, max: 32, result: "Gondolier / Rower" },
        { min: 33, max: 34, result: "Gongfarmer / Streetcleaner" },
        { min: 35, max: 40, result: "Hawker" },
        { min: 41, max: 48, result: "Hostler / Stablehand" },
        { min: 49, max: 51, result: "Maidservant" },
        { min: 52, max: 59, result: "Prostitute" },
        { min: 60, max: 60, result: "Ratcatcher" },
        { min: 61, max: 61, result: "Roofer / Tiler" },
        { min: 62, max: 64, result: "Sailor / Fisher" },
        { min: 65, max: 73, result: "Scullion" },
        { min: 74, max: 75, result: "Sawyer / Woodcutter" },
        { min: 76, max: 78, result: "Teamster" },
        { min: 79, max: 90, result: "Tavernworker" },
        { min: 91, max: 100, result: "Unskilled Laborer" }
    ];

    const roll = Math.floor(Math.random() * 100) + 1;
    const entry = table.find(row => roll >= row.min && roll <= row.max);

    return {
        occupation: entry.result,
        special: null
    };
}

function rollHenchmanOccupation() {
  const table = [
    { min: 1, max: 26, result: "Laborer", special: "-" },
    { min: 27, max: 45, result: "Artisan", special: "-" },
    { min: 46, max: 55, result: "Artisan", special: "-" },
    { min: 56, max: 60, result: "Artisan", special: "-" },
    { min: 61, max: 68, result: "Merchant", special: "-" },
    { min: 69, max: 72, result: "Merchant", special: "-" },
    { min: 73, max: 74, result: "Merchant", special: "25% are venturers" },
    { min: 75, max: 76, result: "Specialist", special: "See sub-table" },
    { min: 77, max: 81, result: "Hosteller", special: "See sub-table" },
    { min: 82, max: 83, result: "Entertainer", special: "25% are bards" },
    { min: 84, max: 85, result: "NPC Class and NPC Level", special: "-" },
    { min: 86, max: 88, result: "Mercenary", special: "25% are veterans" },
    { min: 89, max: 91, result: "Mercenary", special: "25% are veterans" },
    { min: 92, max: 93, result: "NPC Class and NPC Level", special: "-" },
    { min: 94, max: 95, result: "Ecclesiastic", special: "-" },
    { min: 96, max: 97, result: "NPC Class and NPC Level", special: "-" },
    { min: 98, max: 98, result: "Apprentice Mage", special: "-" },
    { min: 99, max: 99, result: "NPC Class and NPC Level", special: "-" },
    { min: 100, max: 100, result: "See Villa entry (p. 224)", special: "25% are fighters" }
  ];

  let roll, entry;

  do {
    roll = Math.floor(Math.random() * 100) + 1;
    entry = table.find(row => roll >= row.min && roll <= row.max);
  } while (entry.result === "NPC Class and NPC Level" || entry.result === "See Villa entry (p. 224)");

    let occupation = entry.result; 

    // Handle sub-tables
    if (entry.result === "Laborer") {
      occupation = rollLaborerOccupation().occupation;
    }

    else if (entry.result === "Hosteller") {
      occupation = rollHostellerOccupation().occupation;
    }

    else if (entry.result === "Specialist") {
      occupation = rollSpecialistOccupation().occupation;
    }

    else if (entry.result === "Mercenary") {
      occupation = rollMercenaryOccupation().occupation;
    }

    else if (entry.result === "Entertainer") {
      occupation = rollEntertainerOccupation().occupation;
    }

    else if (entry.result === "Ecclesiastic") {
      occupation = rollMinorEcclesiasticOccupation().occupation;
    }

    else if (entry.result === "Apprentice Mage") {
      occupation = rollMinorMagicianOccupation().occupation;
    }

    else if (entry.result === "Merchant") {
      occupation = rollMerchantOccupation().occupation;
    }

    else if (entry.result === "Artisan") {
      occupation = rollArtisanOccupation().occupation;
    }


    return {
        occupationCategory: entry.result,
        occupation,
        special: entry.special
    };
}

function rollHenchmanStats() {
    return {
        strength: rollDice(3, 6),
        intellect: rollDice(3, 6),
        will: rollDice(3, 6),
        dexterity: rollDice(3, 6),
        constitution: rollDice(3, 6),
        charisma: rollDice(3, 6),
    }
}

function getStatModifier( value ) {
    const table = [
        { min: 3, max: 3, result: "-3" },
        { min: 4, max: 5, result: "-2" },
        { min: 6, max: 8, result: "-1" },
        { min: 9, max: 12, result: "0"},
        { min: 13, max: 15, result: "+1" },
        { min: 16, max: 17, result: "+2" },
        { min: 18, max: 18, result: "+3" },
    ]

    const entry = table.find(row => value >= row.min && value <= row.max);
    return entry.result;
}

function getStatModifiers( stats ) {
    return {
        strength: getStatModifier(stats.strength),
        intellect: getStatModifier(stats.intellect),
        will: getStatModifier(stats.will),
        dexterity: getStatModifier(stats.dexterity),
        constitution: getStatModifier(stats.constitution),
        charisma: getStatModifier(stats.charisma),
    }
}

function generateStatElements( stats, statModifiers ) {
    const elements = [];
    for ( stat in stats ) {
        const statNameEl = document.createElement('span');
        statNameEl.innerText = String(stat).charAt(0).toUpperCase() + String(stat).slice(1) + ':';
        statNameEl.className = "small-right-margin";
        elements.push(statNameEl);

        const statValueEl = document.createElement('span');
        statValueEl.innerText = stats[stat];
        elements.push(statValueEl);

        const statModifierEl = document.createElement('span');
        statModifierEl.innerText = `(${statModifiers[stat]})`;
        statModifierEl.className = "small-right-margin";
        elements.push(statModifierEl);
    }
    return elements;
}

function getArmourClass( dexterityModifier ) {
    return Number(dexterityModifier);
}

function getMeleeAttackThrow( strengthModifier ) {
    // For non-combatants only (0HD)!
    return String(12 - Number(strengthModifier)) + "+"
}

function getRangedAttackThrow( dexterityModifier ) {
    // For non-combatants only (0HD)!
    return String(12 - Number(dexterityModifier)) + "+"
}

function getSavingThrows( willModifier ) {
    return {
        paralysis: String(14 - Number(willModifier)) + "+",
        death: String(15 - Number(willModifier)) + "+",
        blast: String(16 - Number(willModifier)) + "+",
        implements: String(17 - Number(willModifier)) + "+",
        spells: String(18 - Number(willModifier)) + "+"
    }
}

function generateSavingThrowElements( savingThrows ) {
    const elements = [];
    for ( savingThrow in savingThrows ) {
        const throwNameEl = document.createElement('span');
        throwNameEl.innerText = String(savingThrow).charAt(0).toUpperCase() + String(savingThrow).slice(1) + ':';
        throwNameEl.className = "small-right-margin";
        elements.push(throwNameEl);

        const throwValueEl = document.createElement('span');
        throwValueEl.innerText = savingThrows[savingThrow];
        throwValueEl.className = "small-right-margin";
        elements.push(throwValueEl);
    }
    return elements;
}

function getAge(occupationType, additionalRanks = 0) {
  // TODO: This table does not have level of detail as in book
  const ageTable = {
    "Artisan": { base: 17, dice: [1, 6] },
    "Laborer": { base: 17, dice: [1, 6] },
    "Hosteller": { base: 21, dice: [1, 6] },
    "Mercenary": { base: 17, dice: [1, 6] },
    "Ecclesiastic": { base: 17, dice: [2, 6] },
    "Apprentice Mage": { base: 17, dice: [2, 6] },
    "Entertainer": { base: 17, dice: [1, 6] },
    "Specialist": { base: 21, dice: [1, 6] },
    "Merchant": { base: 21, dice: [1, 6] }
  };

  const entry = ageTable[occupationType];

  if (!entry) {
    throw new Error(`Unknown occupation type: ${occupationType}`);
  }

  let age = entry.base + rollDice(entry.dice[0], entry.dice[1]);

  // Additional ranks
  // TODO: Make this only for particular ones
  if (additionalRanks === 1) {
    age += rollDice(1, 10);
  } else if (additionalRanks >= 2) {
    age += rollDice(3, 10);
  }

  return age;
}

function getBeautyDescriptor(charismaModifier) {
  const descriptorDict = {
    "-3": "repulsive",
    "-2": "unsightly",
    "-1": "ugly",
    "0":  "plain-looking",
    "+1": "fetching",
    "+2": "beauteous",
    "+3": "gorgeous"
  }

  return descriptorDict[charismaModifier]
}

function rollNegativePhysicalFeature() {
  const table = [
    { min: 1, max: 2, text: "obese build" },
    { min: 3, max: 4, text: "a hunched back" },
    { min: 5, max: 6, text: "a skeletal build" },
    { min: 7, max: 8, text: "crumpled ears" },
    { min: 9, max: 10, text: "unusually large ears" },
    { min: 11, max: 12, text: "missing ears" },
    { min: 13, max: 14, text: "torn ears" },
    { min: 15, max: 16, text: "bulging eyes" },
    { min: 17, max: 18, text: "crossed eyes" },
    { min: 19, max: 20, text: "one eye covered in heavy scar tissue" },
    { min: 21, max: 22, text: "one stitched-shut eye" },
    { min: 23, max: 24, text: "a wall-eyed gaze" },
    { min: 25, max: 26, text: "wandering eyes" },
    { min: 27, max: 28, text: "misshapen hands" },
    { min: 29, max: 30, text: "missing several fingers" },
    { min: 31, max: 32, text: "a badly burned face" },
    { min: 33, max: 34, text: "a chinless face" },
    { min: 35, max: 36, text: "a disfiguring facial scar" },
    { min: 37, max: 38, text: "patchy facial hair" },
    { min: 39, max: 40, text: "wispy facial hair" },
    { min: 41, max: 42, text: "dirty, greasy hair" },
    { min: 43, max: 44, text: "thin, lank hair" },
    { min: 45, max: 46, text: "lice-ridden hair" },
    { min: 47, max: 48, text: "tangled, knotted hair" },
    { min: 49, max: 50, text: "a club foot" },
    { min: 51, max: 52, text: "misshapen legs" },
    { min: 53, max: 54, text: "a constantly drooling mouth" },
    { min: 55, max: 56, text: "discolored teeth" },
    { min: 57, max: 58, text: "filed teeth" },
    { min: 59, max: 60, text: "a frog-like mouth" },
    { min: 61, max: 62, text: "a pronounced overbite" },
    { min: 63, max: 64, text: "a pronounced underbite" },
    { min: 65, max: 66, text: "large buck teeth" },
    { min: 67, max: 68, text: "large snaggle teeth" },
    { min: 69, max: 70, text: "missing many teeth" },
    { min: 71, max: 72, text: "no teeth" },
    { min: 73, max: 74, text: "a crusted, encrusted nose" },
    { min: 75, max: 76, text: "an unusually large nose" },
    { min: 77, max: 78, text: "a smashed nose" },
    { min: 79, max: 80, text: "a missing nose" },
    { min: 81, max: 82, text: "a warty nose" },
    { min: 83, max: 84, text: "skin covered in boils" },
    { min: 85, max: 86, text: "skin marked with crude scarification" },
    { min: 87, max: 88, text: "skin covered in crude tattoos" },
    { min: 89, max: 90, text: "heavily scarred skin" },
    { min: 91, max: 92, text: "filthy skin" },
    { min: 93, max: 94, text: "peeling skin" },
    { min: 95, max: 96, text: "scabrous skin" },
    { min: 97, max: 98, text: "pock-marked skin" },
    { min: 99, max: 100, text: "warty skin" },
  ];

  const roll = Math.floor(Math.random() * 100) + 1;
  const result = table.find(entry => roll >= entry.min && roll <= entry.max);

  return result.text;
}

function rollAveragePhysicalFeature() {
  const table = [
    { min: 1, max: 2, text: "a barrel-chested build" },
    { min: 3, max: 4, text: "a chubby build" },
    { min: 5, max: 6, text: "a skinny build" },
    { min: 7, max: 8, text: "a stocky build" },
    { min: 9, max: 10, text: "a tiny build" },
    { min: 11, max: 12, text: "large ears" },
    { min: 13, max: 14, text: "small ears" },
    { min: 15, max: 16, text: "eyes of different colors" },
    { min: 17, max: 18, text: "large eyes" },
    { min: 19, max: 20, text: "narrow eyes" },
    { min: 21, max: 22, text: "one eye covered by an eye patch" },
    { min: 23, max: 24, text: "unusually colored eyes" },
    { min: 25, max: 26, text: "heavy frown or laugh lines" },
    { min: 27, max: 28, text: "an obvious birthmark" },
    { min: 29, max: 30, text: "an obvious mole" },
    { min: 31, max: 32, text: "a facial piercing" },
    { min: 33, max: 34, text: "a tattooed face" },
    { min: 35, max: 36, text: "a mallen streak in their hair" },
    { min: 37, max: 38, text: "prematurely greying hair" },
    { min: 39, max: 40, text: "receding or thinning hair" },
    { min: 41, max: 42, text: "callused hands" },
    { min: 43, max: 44, text: "long fingernails" },
    { min: 45, max: 46, text: "a missing finger" },
    { min: 47, max: 48, text: "a capped missing hand" },
    { min: 49, max: 50, text: "a carved prosthetic hand" },
    { min: 51, max: 52, text: "a hook in place of one hand" },
    { min: 53, max: 54, text: "tattooed knuckles (e.g., words like 'Hold Fast' or 'Love/Hate')" },
    { min: 55, max: 56, text: "a peg leg" },
    { min: 57, max: 58, text: "skinny legs" },
    { min: 59, max: 60, text: "short legs" },
    { min: 61, max: 62, text: "a deviated septum" },
    { min: 63, max: 64, text: "a noticeable gap between their teeth" },
    { min: 65, max: 66, text: "a lip piercing" },
    { min: 67, max: 68, text: "a missing tooth" },
    { min: 69, max: 70, text: "a replacement tooth (bone, wood, etc.)" },
    { min: 71, max: 72, text: "thin lips" },
    { min: 73, max: 74, text: "an aquiline nose" },
    { min: 75, max: 76, text: "a broken nose" },
    { min: 77, max: 78, text: "a large nose" },
    { min: 79, max: 80, text: "a pierced nose" },
    { min: 81, max: 82, text: "a small nose" },
    { min: 83, max: 84, text: "an upturned nose" },
    { min: 85, max: 86, text: "deeply tanned skin" },
    { min: 87, max: 88, text: "freckled skin" },
    { min: 89, max: 90, text: "unusually hairy skin" },
    { min: 91, max: 92, text: "minor scars" },
    { min: 93, max: 94, text: "ruddy skin" },
    { min: 95, max: 96, text: "tattooed skin" },
    { min: 97, max: 98, text: "unusually pale skin" },
    { min: 99, max: 100, text: "weather-beaten skin" }
  ];

  const roll = Math.floor(Math.random() * 100) + 1;
  const result = table.find(entry => roll >= entry.min && roll <= entry.max);

  return result.text;
}


function rollPositivePhysicalFeature() {
  function rollOnce(ignoreRollTwice = false) {
    const table = [
      { min: 1, max: 3, text: "an athletic build" },
      { min: 4, max: 6, text: "a broad-chested or bosomy build" },
      { min: 7, max: 9, text: "good posture" },
      { min: 10, max: 12, text: "a slim build" },
      { min: 13, max: 15, text: "well-proportioned features" },
      { min: 16, max: 18, text: "clear eyes" },
      { min: 19, max: 21, text: "a commanding gaze" },
      { min: 22, max: 24, text: "a mesmerizing gaze" },
      { min: 25, max: 27, text: "a piercing gaze" },
      { min: 28, max: 30, text: "striking eye color" },
      { min: 31, max: 33, text: "graceful hands" },
      { min: 34, max: 36, text: "strong hands" },
      { min: 37, max: 39, text: "a beauty mark" },
      { min: 40, max: 42, text: "a dashing facial scar" },
      { min: 43, max: 45, text: "distinguished features" },
      { min: 46, max: 48, text: "chiseled, fine features" },
      { min: 49, max: 51, text: "a heroic, graceful jawline" },
      { min: 52, max: 54, text: "an honest face" },
      { min: 55, max: 57, text: "a striking or beautifying tattoo" },
      { min: 58, max: 60, text: "a youthful countenance" },
      { min: 61, max: 63, text: "glossy hair" },
      { min: 64, max: 66, text: "lustrous hair" },
      { min: 67, max: 69, text: "luxurious, silken hair" },
      { min: 70, max: 72, text: "long legs" },
      { min: 73, max: 75, text: "muscular, well-toned legs" },
      { min: 76, max: 78, text: "slim legs" },
      { min: 79, max: 81, text: "a charming, winning smile" },
      { min: 82, max: 84, text: "a dazzling smile" },
      { min: 85, max: 87, text: "full, sensuous lips" },
      { min: 88, max: 90, text: "perfect teeth" },
      { min: 91, max: 93, text: "flawless skin" },
      { min: 94, max: 96, text: "glossy skin" },
      { min: 97, max: 99, text: "a healthy complexion" },
      { min: 100, max: 100, rollTwice: true }
    ];

    const roll = Math.floor(Math.random() * 100) + 1;
    const result = table.find(entry => roll >= entry.min && roll <= entry.max);

    if (result.rollTwice && !ignoreRollTwice) {
      const first = rollOnce(true);
      const second = rollOnce(true);
      return `${first} and ${second}`
    }

    return result.text;
  }

  return rollOnce();
}

function joinWithAnd(items) {
  if (!items || items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function getPhysicalFeatureString( charismaModifier ) {
  const extraRollNum = Math.abs(Number(charismaModifier));

  const averageFeature = rollAveragePhysicalFeature();

  let extraFeatures = [];
  for ( let i = 0; i < extraRollNum; i++ ) {
    const extraFeature = Number(charismaModifier) > 0 ? rollPositivePhysicalFeature() : rollNegativePhysicalFeature();
    extraFeatures.push( extraFeature )
  }

  return joinWithAnd( [averageFeature].concat(extraFeatures) );
}

function getPersonalDetailsString(beautyDescriptor, age, physicalFeatures) {
  return `A(n) ${beautyDescriptor} ${age} year old with ${physicalFeatures}`
}

function generateCharacter() {
    const occupation = rollHenchmanOccupation()
    const stats = rollHenchmanStats()
    const statModifiers = getStatModifiers( stats )
    const armourClass = getArmourClass( statModifiers.dexterity );
    const meleeAttackThrow = getMeleeAttackThrow(statModifiers.strength);
    const rangedAttackThrow = getRangedAttackThrow(statModifiers.dexterity);
    const savingThrows = getSavingThrows( statModifiers.will );
    const age = getAge(occupation.occupationCategory);
    const beautyDescriptor = getBeautyDescriptor(statModifiers.charisma);
    const physicalFeatures = getPhysicalFeatureString( statModifiers.charisma );

    const occupationElement = document.getElementById("henchman-occupation");
    occupationElement.innerText = occupation.occupation;

    const personalDetailsContainerElement = document.getElementById("henchman-personal-details");
    const personalDetailsElement = document.createElement('span');
    const personalDetailsString = getPersonalDetailsString(beautyDescriptor, age, physicalFeatures);
    personalDetailsElement.innerText = personalDetailsString;
    personalDetailsContainerElement.replaceChildren(personalDetailsElement)

    const statsContainerElement = document.getElementById("henchman-stats");
    const statElements = generateStatElements(stats, statModifiers);
    statsContainerElement.replaceChildren(...statElements);

    const combatAttributesElement = document.getElementById("henchman-combat-attributes");

    const hpElement = document.createElement('span');
    hpElement.innerText = 'HP: 0';
    hpElement.className = "small-right-margin";

    const armourClassElement = document.createElement('span');
    armourClassElement.innerText = `AC: ${armourClass}`
    armourClassElement.className = "small-right-margin";

    const meleeAtkThrowElement = document.createElement('span');
    meleeAtkThrowElement.innerText = `AtkMel: ${meleeAttackThrow}`;
    meleeAtkThrowElement.className = "small-right-margin";

    const rangedAtkThrowElement = document.createElement('span');
    rangedAtkThrowElement.innerText = `AtkRng: ${rangedAttackThrow}`;
    rangedAtkThrowElement.className = "small-right-margin";

    combatAttributesElement.replaceChildren(hpElement, armourClassElement, meleeAtkThrowElement, rangedAtkThrowElement)

    const savingThrowsContainerElement = document.getElementById("henchman-saving-throws");
    const savingThrowElements = generateSavingThrowElements(savingThrows);
    savingThrowsContainerElement.replaceChildren(...savingThrowElements);

}
