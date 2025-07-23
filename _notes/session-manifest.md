---
title: Session Manifest
tags: ttrpg settlement
---

## Campaign Awards

<p>
    {% assign most_sessions_char = site.data.characters[0] %}
    {% assign num_sessions = most_sessions_char.sessions.size %}
    {% for character in site.data.characters %}
        {% if character.sessions.size > num_sessions %}
            {% assign most_sessions_char = character %}
            {% assign num_sessions = character.sessions.size %}
        {% endif %}
    {% endfor %}
    <span><strong>👃 Bad smell - </strong></span>
    <span>{{ most_sessions_char.name }} with {{ num_sessions }} sessions attended. <b>Honorary Mention -</b> Conversos Crypt</span>
    <br>
    <span><strong>💀 Bane of happy families - </strong></span>
    <span>Conversos Crypt and Tassos with 2 henchmen lost each.</span>
</p>

---

<div class="calendar-container">
    <div class="calendar"></div>
</div>

---

## Session 18

{% assign session_number = 18 %}

With members revived and Versos caring for the unconscious Sven, the party march down the staircase, deeper into Sanjikar.
They mount a tedious equipment transfer across a perilous drop before encountering a group of helpful goblins. The party trade information and 'mulch' for turnips.
Continuing deeper, they are confronted with a vast underground lake, and the sounds of an active bee hive somewhere overhead.
Rounding the lake, the much sought after Clubhead mushrooms are located, as well as an ancient Dwarven sword and great gem encrusted pillars.
Binabus bravely smashes one open, sending gems and himself flying across the room. As the cave ceiling begins to buckle, he and Gaius snatch up what gems they can...

📆 Date - 12th day of the First Month of the Imperial Year 325

🗺️ Location - Sanjikar

![Portrait of 'Binabus', mad demon summoning wizard of the woods. Drawn by his player](/assets/binabus.jpg)

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value (gp)</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Oxidized copper masks depicting the three pillars of Dwarven theatre: Tranquility, Pain, Duty</td>
            <td>3</td>
            <td>210</td>
        </tr>
        <tr>
            <td>Magic Sword - Girdenya, the Preserver</td>
            <td>1</td>
            <td>?</td>
        </tr>
        <tr>
            <td>Gems</td>
            <td>?</td>
            <td>?</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>?</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 17

{% assign session_number = 17 %}

The party rest overnight and become aware of the return of the Orc horde, led by Versos and Questoni. In a rush, they decide to untie the thief woman, known as Gaius,
so that she can unlock the door for them that she was pounding on last session! Within, the party find an occult room clearly used for a dark summoning.
Pressing on through the next locked door, they come into a grand staircase room and are immediately ambushed by a swarm of giant bees.
Gaius, Sporeglazer and Versos fall to the venom, but Sven hastily takes up a dark amulet to a frog god and makes a contract with the demon for their revival.

📆 Date - 12th day of the First Month of the Imperial Year 325

🗺️ Location - Sanjikar

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value (gp)</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Amulet to Tsaggotha - Demonic frog god</td>
            <td>1</td>
            <td>?</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>?</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Giant Bee</td>
            <td>12</td>
            <td>72</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>72</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 16

{% assign session_number = 16 %}

Just as the party are recovering from the attack of the bat-owl swarm, they see a group of three enter Sanjikar's gates.
A huge Opplander, balding cultist and thin, frail looking woman with a buzzcut. Leaving the sporified slaves to dance a grisly jig, the party
continue their long route back towards the gates, watching out for the interlopers. They come upon them as they stand between the party
and the previously de-trapped chest. Sven charges in, slaughtering both the men as the woman slinks off into the shadows.
The party give chase, finding the woman pounding desperately on a locked door. They tie her up and take her back to the chest,
where Sven finds a magic ring and a bottle of black-brown liquid.

📆 Date - 11th day of the First Month of the Imperial Year 325

🗺️ Location - Sanjikar

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value (gp)</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Brown-black potion</td>
            <td>1</td>
            <td>?</td>
        </tr>
        <tr>
            <td>Magical Mauvhani ring</td>
            <td>1</td>
            <td>?</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>?</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Humans</td>
            <td>3</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>30</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 15

{% assign session_number = 15 %}

The strange dwarf "Mr Sporeglazer" emerges from the catacombs of Sanjikar and joins the party, offering knowledge of the places he has been within.
The party lead the slaves back the way they came, towards the entrance of Sanjikar. Outside the forge room,
they are ambushed by a flock of owl-bat creatures. Three slaves and Rigatocus are struck down in the frenzy, but Mr Sporeglazer brings them all back,
as fungal husks of their former being. The party resolve to delve ever deeper, to find the special mushrooms Mr Sporeglazer will need to save Rigatocus.

📆 Date - 11th day of the First Month of the Imperial Year 325

🗺️ Location - Sanjikar

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Bat-Owls</td>
            <td>10</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>60</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">💀 Casualties</th>
              <th scope="col">Fate</th>
              <th scope="col">Cause</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Rigatocus</td>
            <td>Chewed off lips and tongue</td>
            <td>Feasted upon by a hungry owl-bat creature</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 14

{% assign session_number = 14 %}

Leaving the elderly orc to fester in the waste of his fellows, the party continue to delve Sanjikar. They find potions,
a forge containing an extremely hot stone and a pair of giant centipedes feasting on rotting vegetables.
After making quick work of the creatures, the party continue on to find a chain-gang of human slaves.
The party rest a while as Sven tries to identify the potions and gem-encrusted pickaxe from last session, to no avail.

📆 Date - 11th day of the First Month of the Imperial Year 325

🗺️ Location - Sanjikar

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value (gp)</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Lime green potions</td>
            <td>2</td>
            <td>?</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>?</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Giant Centipede</td>
            <td>2</td>
            <td>12</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>12</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 13

{% assign session_number = 13 %}

After making camp by the fallen down tree where they found the map, the party hatch a plan for the heist of Sanjikar.
Verso and Questoni (the rizzlers) enter the Orc den with promises of gifts for the Orc leader Guurgen, while the rest of the party (sigma squad) wait for an opening.
The rizzlers emerge some time later with a horde of 35 Orcs, having convinced Guurgen that he must fight the great demon wolf to truly become king of the humans.
Sigma squad slip in behind them and begin exploring Sanjikar, slaying an elderly Orc and taking a gem encrusted pickaxe as their prize.

📆 Date - 11th day of the First Month of the Imperial Year 325

🗺️ Location - Sanjikar

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value (gp)</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Pickaxe coated in white gold and encrusted with jewels</td>
            <td>1</td>
            <td>250</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>350</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 12

{% assign session_number = 12 %}

After being unable to communicate with the captured creature, the party set off on The Old Dwarven Way for Sanjikar.
The tunnel takes them out onto a wide causeway in a deep, verdant valley.
Emnooli makes charcoal of a small group of skeletons and the party make camp.
Their sleep is interrupted by a foul demon-wolf promising to eat them and their bloodlines eternal, lest they bring him the Sanjikar Orcs' overlord to feast on.
With that, the party continue the trek to Sanjikar, probing a shimmering cave filled with foul water behind a waterfall.

📆 Date - 9th and 10th day of the First Month of the Imperial Year 325

🗺️ Location - Old Dwarven Way, Sanjikar

![Depiction of the demon-wolf attack at camp](/assets/barghest_at_camp.jpg)

![Map found scrawled in the dirt by some potato skins](/assets/map_in_dirt.png)

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Skeleton</td>
            <td>14</td>
            <td>182</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>182</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 11

{% assign session_number = 11 %}

After gathering more intel from the villagers of Whispering Chasm and collecting some new members, the party make tracks for Sanjikar on the Old Dwarven Way,
following the trail of the Orc raiders.

Coming across an abandoned Orc camp in a cave at the entry to an old Dwarven tunnel, they opt to camp themselves for the night.
The party are awoken by foul, grey-skinned, pale-eyed creatures emerging from the ground seeking to devour their flesh.
With the aid of Binabus' firebreathing cacodemon, [Emnooli, the dream that devours](https://tinyurl.com/4b5ne623),
and the rage of Kalf's henchman, Rigatocus, the party win a Pyyrhic victory, capturing one of the creatures for questioning.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q6TbyFTH03g?si=ZLzBrXICBgtWZDr-" title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

📆 Date - 7th and 8th day of the First Month of the Imperial Year 325 (Yes this is before the time skip)

🗺️ Location - Whispering Chasm, Old Dwarven Way

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Grey-skinned warrior</td>
            <td>14</td>
            <td>140</td>
        </tr>
        <tr>
            <td>Grey-skinned champion</td>
            <td>2</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Grey-skinned sub-chieftan</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>190</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">💀 Casualties</th>
              <th scope="col">Fate</th>
              <th scope="col">Cause</th>
          </tr>
      </thead>
      <tbody>
      <tr>
            <td>Centurion Draxtor</td>
            <td>Unharmed aside from the spear protruding from his gut</td>
            <td>Skewered by the sub-chieftan of the grey-skinned creatures</td>
        </tr>
        <tr>
            <td>Gustav</td>
            <td>Skull split open, brain fluid leaked out (-2 to magic research and proficiency rolls, -10% XP earned)</td>
            <td>Cleaved in the back of a head by an axe-wielding, grey-skinned warrior</td>
        </tr>
        <tr>
            <td>Kalf Varsson</td>
            <td>Aristocratic scar accross the forehead (Notable scarring)</td>
            <td>Glancing blow from axe-wielding, grey-skinned warrior</td>
        </tr>
        <tr>
            <td>Johnus Joe</td>
            <td>K.I.A.</td>
            <td>Decapitated, head flying through the cave in a bloody arc</td>
        </tr>
        <tr>
            <td>Jornus</td>
            <td>K.I.A.</td>
            <td>Impaled on the spear of a grey-skinned warrior</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 10

{% assign session_number = 10 %}

The party takes an old pilgrimage route into the mountains West of Althier in search of Lux Dynamicus, and the dwarven vault _Sanjikar_.
They camp at the base of the mountains and, awoken in the middle of the night by fire and screams from the peaks, opt to go back to sleep.
The next day, they climb the mountains and reach the pilgrimage destination of Whispering Chasm, only to find the aftermath of an overnight Orc raid...

<iframe width="560" height="315" src="https://www.youtube.com/embed/NeJsCaFPVAE?si=3fXXBwlP_SqBOGWu" title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

📆 Date - 6th and 7th day of the First Month of the Imperial Year 325 (Yes this is before the time skip)

🗺️ Location - Althier, Whispering Chasm

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

---

## Session 9

{% assign session_number = 9 %}

The party receive a bloody message informing them that they owe the Ursiry Guild a blood debt. They are to meet at the Bear's Head to discuss terms.
After spending an inordinate amount of time shopping for military oil, they bluff their way past the gate guards and convene at the Inn.

A three pronged attack is carried out by: The Rizzlers, The Getaway Drivers and the Firebombers.
Unwilling to accept the guild's draconian terms, the party slaughters many a man and leaves the survivors trapped inside the burning inferno...

📆 Date - 18th day of the First Month of the Imperial Year 325

🗺️ Location - Althier, Geminos District

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Ursiry Guild Leader</td>
            <td>1</td>
            <td>70</td>
        </tr>
        <tr>
            <td>Bear's Head Innkeeper</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Ursiry Guild Grunts</td>
            <td>7</td>
            <td>70</td>
        </tr>
        <tr>
            <td>Elven Nightblade</td>
            <td>2</td>
            <td>40</td>
        </tr>
        <tr>
            <td>Ursirists Unknown</td>
            <td>?</td>
            <td>180</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>380</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">💀 Casualties</th>
              <th scope="col">Fate</th>
              <th scope="col">Cause</th>
          </tr>
      </thead>
      <tbody>
      <tr>
            <td>Alberron</td>
            <td>Punctured lung (Must rest 2 of every 6 turns, wilderness move speed reduced by 1/3, cannot force march, CON reduced by 1/3)</td>
            <td>A dagger between the helmet and pauldron went deep, thrust by an opportunistic Ursiry Guild Grunt</td>
        </tr>
        <tr>
            <td>Bodash</td>
            <td>Deep wound that eternally aches (-1 initiative)</td>
            <td>Brought low once again by a well aimed arrow</td>
        </tr>
        <tr>
            <td>Balien</td>
            <td>K.I.A</td>
            <td>Collapsed over the edge of Conversos' cart after an arrow struck his chest. Cast out of the cart by Aleksei and left for dead</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

### 📖 Rule Clarifications

#### Picking up/Dragging other characters

As a movement action, a creature can grab a helpless creature. If picking up the creature entirely, their weight and encumbrance is added to the picker-upper's.
If intending to just drag the creature, half of their weight and encumbrance is added to the picker-upper's.

---

## ⏱️ Time skip

The party skips 2 weeks of game time to allow mortally wounded members to heal.
Kalf hires an initiate of Lux Dynamicus as henchman.
Conversos investigates the markets in Althier and Valligia.
Binabus learns that herbs aren't so easy to find.
Aleksei hears rumours of increasing beastman activity on the roads and in the mountains to the northeast of Althier.

📆 4th --> 18th day of the First Month of the Imperial Year 325

---

## Session 8

{% assign session_number = 8 %}

The party is confronted by a local militiaman and asked to stay put for questioning. They decide to ditch town and return to Althier to heal their wounded.
Having a vendetta now for the Bear's Head Inn in the slum part of town, they opt to stay for 2 weeks at The Smiling Man Inn.

📆 Date - 4th day of the First Month of the Imperial Year 325

🗺️ Location - Hommus and Althier

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🔼 Experience Awarded To</th>
              <th scope="col">Quantity</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Binabus</td>
            <td>107</td>
        </tr>
        <tr>
            <td>Tiche</td>
            <td>103</td>
        </tr>
        <tr>
            <td>Alberron</td>
            <td>102</td>
        </tr>
        <tr>
            <td>Conversos Crypt</td>
            <td>102</td>
        </tr>
        <tr>
            <td>Kalf Varsson</td>
            <td>77</td>
        </tr>
        <tr>
            <td>Tetiana Buntovnic</td>
            <td>76</td>
        </tr>
        <tr>
            <td>Jozaferin</td>
            <td>63</td>
        </tr>
        <tr>
            <td>Zhaafique bar Khan</td>
            <td>49</td>
        </tr>
        <tr>
            <td>Aleksei</td>
            <td>47</td>
        </tr>
        <tr>
            <td>Bodash bar Eshmunazar</td>
            <td>41</td>
        </tr>
        <tr>
            <td>Rat Girl</td>
            <td>39</td>
        </tr>
        <tr>
            <td>Balien</td>
            <td>21</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure Awarded To</th>
              <th scope="col">Treasure</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Conversos Crypt</td>
            <td>Pearlescent magical sword, Magical wooden stag shield, 138gp</td>
        </tr>
        <tr>
            <td>Alberron</td>
            <td>41gp</td>
        </tr>
        <tr>
            <td>Binabus</td>
            <td>41gp</td>
        </tr>
        <tr>
            <td>Tiche</td>
            <td>41gp</td>
        </tr>
        <tr>
            <td>Aleksei</td>
            <td>36gp</td>
        </tr>
        <tr>
            <td>Jozaferin</td>
            <td>36gp</td>
        </tr>
        <tr>
            <td>Kalf Varsson</td>
            <td>36gp</td>
        </tr>
        <tr>
            <td>Tetiana</td>
            <td>36gp</td>
        </tr>
        <tr>
            <td>Zhaafique bar Khan</td>
            <td>36gp</td>
        </tr>
        <tr>
            <td>Bodash bar Eshmunazar</td>
            <td>5gp</td>
        </tr>
        <tr>
            <td>Rat Girl</td>
            <td>5gp</td>
        </tr>
        <tr>
            <td>Balien</td>
            <td>3gp</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

### 📖 Rule Clarifications

#### Training Proficiencies, Learning Languages

All adventurers have four extra proficiency slots that they can fill exclusively by spending their time training these proficiencies.
The first slot takes 2 months of training to fill, the second takes 8 months, the third 18 months and the final slot takes 32 months.

If a character wants to learn a new language, they would spend the requisite time training and take the language proficiency, which allows 3 more languages.

---

## Session 7

{% assign session_number = 7 %}

The party batter a sleeping giant lizard to death and steal its treasure.
Returning to Hommus, they encounter a group of robbers on the main road.
Bodash explodes three before falling to an arrow.
Alberron's horse is downed and he is run through with a pearlescent sword.
Victory is still won through surrender and rout.

!['Bonk', depicting the crusader Alberron smashing a giant lizard over the head with his two-handed mace.](/assets/pete_lizard_bonk.jpg)

![AI interpretation. Foreground: Muleson, mule of Conversos Crypt. Background: Bodash bar Eshmunazaar casting Earth's Excrescence on robbers in the streets of Hommus.](/assets/bodash_earth_excrescence.png)

📆 Date - 3rd and 4th days of the First Month of the Imperial Year 325

🗺️ Location - The Old Fortress and Hommus

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Giant Lizard</td>
            <td>1</td>
            <td>65</td>
        </tr>
        <tr>
            <td>Ugly Human</td>
            <td>7</td>
            <td>70</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>135</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value (gp)</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Short sword with a pearlescent glow</td>
            <td>1</td>
            <td>?</td>
        </tr>
        <tr>
            <td>Beautifully carved wooden heater shield</td>
            <td>1</td>
            <td>?</td>
        </tr>
        <tr>
            <td>Silver Rod</td>
            <td>1</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>30</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">💀 Casualties</th>
              <th scope="col">Fate</th>
              <th scope="col">Cause</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Alberron</td>
            <td>Puckered abdominal scar (minor scarring)</td>
            <td>Run through with a pearlescent sword</td>
        </tr>
        <tr>
            <td>Bodash bar Eshmunazaar</td>
            <td>A long scar down the chest (-2 to impersonate others)</td>
            <td>Gouged by a falling arrow, targeted well at the party's earth exploder</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

### 📖 Rule Clarifications

**Familiars:** Familiars provide their master with one proficiency related to their nature and +1 to all throws while in range
There is no assumed ability to communicate with your familiar.
Also, rats have superior olfaction, meaning they would serve well as a scent based lookout.

**Vehicular Combat:** If the vehicle does not charge (moving normally is ok), the vehicle driver and any passengers can make an attack, but the transporter cannot.
If the vehicle does charge, the driver is too busy to make an attack, but the passengers and transporter can.

Taking the example of Conversos and his mule driven cart: Conversos was the driver, the cart was the vehicle and the mule was the transporter.
There were no conscious passengers. Conversos could have opted to move the mule and cart to the enemy, and perform an attack himself.
His other option would have been to charge with the mule and cart, removing his own opportunity to attack, but allowing the mule to attack.
The mule could perform a regular attack upon reaching the enemy, or perform an overrun or force back maneuver.
The former would allow Conversos and his mule and cart to charge through and past the enemy.

---

## Session 6

{% assign session_number = 6 %}

The party disagree over whether to kill or free the captured leader of Zhaafique's ex-compatriots, but freedom wins out.
They meet Rat Girl and her lovely family, before getting into a terrible tussle with a pair of Green Slimes.

![Humorous graphic of two well loved characters. Below, the text 'Disabled Brothers' is scrawled in flame](/assets/disabledBrothers.webp)

📆 Date - 3rd day of the First Month of the Imperial Year 325

🗺️ Location - The Old Fortress

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Green Slime</td>
            <td>2</td>
            <td>112</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>112</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">💀 Casualties</th>
              <th scope="col">Fate</th>
              <th scope="col">Cause</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Tetiana</td>
            <td>Melted Face: gruesome scarring (+1 to intimidate, -2 to other reaction rolls, Cannot impersonate others)</td>
            <td>Found self inside a flaming green slime</td>
        </tr>
        <tr>
            <td>Tiche</td>
            <td>
                Ears burnt off, melted face: -2 to Listening rolls, -2 to Surprise rolls, gruesome scarring (+1 to intimidate, -2 to other reaction rolls,
                Cannot impersonate others)
            </td>
            <td>Did not wear armour inside a green slime</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 5

{% assign session_number = 5 %}

Zhaafique Bar Khan, venturer, was found bound by the spider's web. The party delved deeper into the old fortress, interrupting the escape of his treacherous ex-compatriots.

📆 Date - 3rd day of the First Month of the Imperial Year 325

🗺️ Location - The Old Fortress

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Man</td>
            <td>9</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>100</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value (gp)</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Golden Neck-chain</td>
            <td>1</td>
            <td>200</td>
        </tr>
        <tr>
            <td>Lapis Lazuli</td>
            <td>1</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Bloodstone</td>
            <td>1</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Platinum Pieces</td>
            <td>11</td>
            <td>22</td>
        </tr>
        <tr>
            <td>Silver Pieces</td>
            <td>30</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>325</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

### 📖 Rule Clarifications

#### Harvesting Monsters

Monsters can generally be harvested for three things:

1. Mundane components for sale/crafting (antlers, skins etc).
2. Magical components for spell research/magic item creation (dragon scales etc).
3. Venom for poisoning weapons/other creatures.

The requirements to identify and harvest each of these differ.

**Mundane Components:** Generally require an appropriate tool such as an axe for hacking off antlers or a knife for skinning.
Does not require any proficiency to harvest, though some proficiency may be required to process the item before it can be sold/used.

**Magical Components:** External components (antlers, fangs, toes etc) can usually be harvested in the same way as their mundane equivalent.
Internal organs such as a dragon's fire producing gland may require particular proficiencies.
Magical components, unlike mundane components, do require a successful proficiency roll to even identify that a component is magical.
Alchemy, Collegiate Wizardry, Magical Engineering, Naturalism and Loremastery can all be used for this identify roll, and can be stacked.
Spells/abilities like detect magic can also help. Magical components must be stored in Metamphora to retain their magical attributes.

**Venom:** Can be harvested from venomous **animals** with an Animal Husbandry roll of 18+.
Can be harvested from **other creature types** using Animal Husbandry at a -4 penalty.
Each level of Animal Husbandry gives a +4 bonus to the roll.
Note that this means an Animal Husbandry proficiency of at least level 2 is required to harvest venom from **other creature types**.
Note that venom must be harvested directly from the creature. You can't cut off fangs to harvest venom from later.

---

## Session 4

{% assign session_number = 4 %}

The party traveled to Hommus, meeting the local priest of Lux Dynamicus. He pointed them to the old fortress, where the beastmen were said to be lairing.
The site was found, and a lurking spider was slain.

![Drawing of spider emerging from fortress tower. Tiche holds the door open](/assets/crab-spider.webp)

📆 Date - 2nd and 3rd days of the First Month of the Imperial Year 325

🗺️ Location - Althier, Hommus and The Old Fortress

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Giant Crab Spider</td>
            <td>1</td>
            <td>38</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>38</td>
        </tr>  
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value (gp)</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Large ivory box</td>
            <td>1</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Silver Pieces</td>
            <td>38</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>54</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

---

## Session 3

{% assign session_number = 3 %}

The party traveled to Althier, interring Conversos in the local Hospital while they shopped and gathered job opportunities.
The local mercenary guild had a posting for clearing beastmen from the village of Hommus. 'Malaceb', the cacodemon was summoned by Binabus.

![Malaceb the cacodemon](/assets/malaceb.webp)

📆 Date - 1st Day of the First Month of the Imperial Year 325

🗺️ Location - Althier

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🔼 Experience Awarded To</th>
              <th scope="col">Quantity</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Conversos Crypt</td>
            <td>180</td>
        </tr>
        <tr>
            <td>Aleksei</td>
            <td>172</td>
        </tr>
        <tr>
            <td>Tiche</td>
            <td>150</td>
        </tr>
        <tr>
            <td>Bodash bar Eshmunazar</td>
            <td>143</td>
        </tr>
        <tr>
            <td>Balien</td>
            <td>68</td>
        </tr>
        <tr>
            <td>Tetiana Buntovnic</td>
            <td>22</td>
        </tr>
        <tr>
            <td>Jozaferin</td>
            <td>21</td>
        </tr>
        <tr>
            <td>Theonus Eirwen</td>
            <td>21</td>
        </tr>
        <tr>
            <td>Alberron</td>
            <td>20</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure Awarded To</th>
              <th scope="col">Treasure</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Bodash bar Eshmunazar</td>
            <td>Scroll in Opplandic script</td>
        </tr>
        <tr>
            <td>Conversos Crypt</td>
            <td>111 gp, 10 cp</td>
        </tr>
        <tr>
            <td>Jozaferin</td>
            <td>Chunk of obsidian</td>
        </tr>
        <tr>
            <td>Tiche</td>
            <td>111 gp, 10 cp</td>
        </tr>
        <tr>
            <td>Aleksei</td>
            <td>101 gp</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

### 📖 Rule Clarifications

**Casting the same spell multiple times:** If spellcasters (arcane or divine) are of high enough level to be able to cast multiple spells per day,
they may cast the same spell multiple times in a day.

**Cost of healing services:** Being healed at a temple/hospital is not free, costing 1gp per day. (Looking at you Conversos).

---

## Session 2

{% assign session_number = 2 %}

The party interrogated the captive with impunity, learning that multiple score of Orc dwell within the Vaults of Volokarnos.
A disastrous battle was had with the Orcs and the party was forced to flee, sacrificing Conversos' guts and henchmen.

**Note:** This video covers both sessions 2 and 3.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CobOVkiY4hI?si=wYmR-v4iveQugmOu" title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

📆 Date - 1st Day of the First Month of the Imperial Year 325

🗺️ Location - Vaults of Volokarnos

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Giant Crab Spider</td>
            <td>2</td>
            <td>76</td>
        </tr>
        <tr>
            <td>Beastman, Orc</td>
            <td>1</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Wolf</td>
            <td>1</td>
            <td>35</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>121</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">💀 Casualties</th>
              <th scope="col">Fate</th>
              <th scope="col">Cause</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Conversos Crypt</td>
            <td>
                Destroyed intestines: -1/3 CON, -4 to Poison saves, -4 Reaction rolls due to indigestion and flatulence.
                Must rest every 2 of 6 turns instead of the usual 1, or become fatigued
            </td>
            <td>Giant Crab Spider bite to the back of the neck. Venom melted the intestines</td>
        </tr>
        <tr>
            <td>Kriva</td>
            <td>M.I.A.</td>
            <td>
                Abandoned by party as he tried to drag his unconscious brother from the Vaults.
                Last seen by Alberron who uttered 'May the goddess be with you', before fleeing. Presumed killed by gang of 8 Orcs
            </td>
        </tr>
        <tr>
            <td>Karvos</td>
            <td>M.I.A.</td>
            <td>Chunk of leg torn off by hungry wolf pack. Last seen unconscious as brother tried to drag him from the Vaults. Presumed killed by gang of 8 Orcs</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

### 📖 Rule Clarifications

**Armour Removal:** It takes 1 full round action (movement and attack action) to doff 1 AC worth of armour.
E.g. It takes 6 rounds of doing nothing but removing armour to fully remove a suit of plate armour.

**Opening Doors in Combat:** Opening a door is a movement action. I.e. you can do it instead of moving OR instead of attacking.

**Lockpicking in Darkness:** A thief can lockpick in complete darkness due to their **shadowy senses** ability.

**Shadowy senses when in Light:** Shadowy senses functions as long as a thief is in darkness or dim light.
If a thief is in bright light, they cannot use their shadowy senses.

---

## Session 1

{% assign session_number = 1 %}

The party began exploring the Vaults of Volokarnos. They ambushed a group of alleged bandits, killing all but one poor soul and snatching the loot!

<iframe width="560" height="315" src="https://www.youtube.com/embed/orEZQ6zpy3k?si=7Kbrq61_4y2CnxIe" title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

📆 Date - 1st of the First Month of the Imperial Year 325

🗺️ Location - Vaults of Volokarnos

<responsive-table class="character-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧑‍🦽 Character</th>
                <th scope="col">Class</th>
                <th scope="col">Level</th>
                <th scope="col">Session XP Bonus</th>
            </tr>
        </thead>
        <tbody>
            {% for character in site.data.characters %}
                {% assign session = character.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ character.name }}</td>
                        <td>{{ character.class }}</td>
                        <td>{{ character.level }}</td>
                        <td>{{ session.xp_bonus }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table class="henchman-table">
    <table class="table-striped">
        <thead>
            <tr>
                <th scope="col">🧎 Henchman</th>
                <th scope="col">Occupation</th>
                <th scope="col">Level</th>
                <th scope="col">Employer</th>
            </tr>
        </thead>
        <tbody>
            {% for henchman in site.data.henchmen %}
                {% assign session = henchman.sessions | where: "session_number", session_number | first %}
                {% if session %}
                    <tr>
                        <td>{{ henchman.name }}</td>
                        <td>{{ henchman.occupation }}</td>
                        <td>{{ henchman.level }}</td>
                        <td>{{ henchman.employer }}</td>
                    </tr>
                {% endif %}
            {% endfor %}
        </tbody>
    </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🐉 Monster</th>
              <th scope="col">Number</th>
              <th scope="col">XP</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Giant Crab Spider</td>
            <td>1</td>
            <td>38</td>
        </tr>
        <tr>
            <td>Alleged Bandits</td>
            <td>8</td>
            <td>90</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>128</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

<responsive-table>
  <table class="table-striped">
      <thead>
          <tr>
              <th scope="col">🪙 Treasure</th>
              <th scope="col">Quantity</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>Shiny bronze shield engraved with legionnaires</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Long wooden box tied to leather string</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Lump of lustrous dark stone</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Brass armband depicting serpentine creature with runic carvings</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Ivory comb full of dark, coarse fur</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Gold Pieces</td>
            <td>322</td>
        </tr>
        <tr>
            <td>Silver Pieces</td>
            <td>25</td>
        </tr>
      </tbody>
  </table>
</responsive-table>

### 📖 Rule Clarifications

**Spell Declaration** You must declare you are casting a spell before initiative is rolled. You must specify which spell.

**Flanking:** Flanking an enemy gives you a +2 to hit.

**Attacking from Rear:** Attacking an enemy from the rear gives you a +2 to hit like flanking.
If your character can ambush or backstab, you may also trigger those abilities.

**Firing into Melee:** Firing through engaged allies to hit an unengaged opponent is at -2.
Firing at opponents engaged with allies is not allowed at all (unless you have the Precise Shooting proficiency, which is at -4).

**Retreating from Melee:** You must declare your retreat before initiative is rolled.
On your initiative, you turn away from engaged enemies and move up to your running speed. You have -2 AC until your next turn.
Opponents **do not** get a free attack a la 'opportunity attack'.

**Ammunition Retrieval:** Spent ammunition cannot be retrieved.

<script defer src="{{ site.baseurl }}/scripts/responsive-table.js"></script>

<script src='https://app.fantasy-calendar.com/js/embed.js'></script>
<script defer>
FantasyCalendar({
    hash: '8dbad326a6d87a56ed73508fb49d1b8d',
    selector: 'div.calendar',
});
</script>
