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
    { min: 1, max: 26, result: "Laborer Occupation", special: "-" },
    { min: 27, max: 45, result: "Artisan Occupation", special: "-" },
    { min: 46, max: 55, result: "Artisan Occupation", special: "-" },
    { min: 56, max: 60, result: "Artisan Occupation", special: "-" },
    { min: 61, max: 68, result: "Merchant Occupation", special: "-" },
    { min: 69, max: 72, result: "Merchant Occupation", special: "-" },
    { min: 73, max: 74, result: "Merchant Occupation", special: "25% are venturers" },
    { min: 75, max: 76, result: "Specialist Occupation", special: "See sub-table" },
    { min: 77, max: 81, result: "Hosteller Occupation", special: "See sub-table" },
    { min: 82, max: 83, result: "Entertainer Occupation", special: "25% are bards" },
    { min: 84, max: 85, result: "NPC Class and NPC Level", special: "-" },
    { min: 86, max: 88, result: "Mercenary Occupation", special: "25% are veterans" },
    { min: 89, max: 91, result: "Mercenary Occupation", special: "25% are veterans" },
    { min: 92, max: 93, result: "NPC Class and NPC Level", special: "-" },
    { min: 94, max: 95, result: "Ecclesiastic Occupation", special: "-" },
    { min: 96, max: 97, result: "NPC Class and NPC Level", special: "-" },
    { min: 98, max: 98, result: "Apprentice Mage Occupation", special: "-" },
    { min: 99, max: 99, result: "NPC Class and NPC Level", special: "-" },
    { min: 100, max: 100, result: "See Villa entry (p. 224)", special: "25% are fighters" }
  ];

  let roll, entry;

  do {
    roll = Math.floor(Math.random() * 100) + 1;
    entry = table.find(row => roll >= row.min && roll <= row.max);
  } while (entry.result === "NPC Class and NPC Level");

    // Handle sub-tables
    if (entry.result === "Laborer Occupation") {
    return rollLaborerOccupation();
    }

    if (entry.result === "Hosteller Occupation") {
    return rollHostellerOccupation();
    }

    if (entry.result === "Specialist Occupation") {
    return rollSpecialistOccupation();
    }

    if (entry.result === "Mercenary Occupation") {
        return rollMercenaryOccupation();
    }

    if (entry.result === "Entertainer Occupation") {
        return rollEntertainerOccupation();
    }

    if (entry.result === "Ecclesiastic Occupation") {
        return rollMinorEcclesiasticOccupation();
    }

    if (entry.result === "Apprentice Mage Occupation") {
        return rollMinorMagicianOccupation();
    }

    if (entry.result === "Merchant Occupation") {
        return rollMerchantOccupation();
    }

    if (entry.result === "Artisan Occupation") {
        return rollArtisanOccupation();
    }


    return {
        occupation: entry.result,
        special: entry.special
    };
}


function generateCharacter() {
    const occupation = rollHenchmanOccupation()

    const displayElement = document.getElementById("henchman-occupation");
    const occupationDisplay = document.createElement("div");
    occupationDisplay.innerText = occupation.occupation;
    displayElement.appendChild(occupationDisplay);
}
