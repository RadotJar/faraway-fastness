---
title: Interpreting Reaction Rolls
tags: ttrpg
---

## Background

The reaction roll is a mainstay of old-school, OSR and classical adventure gaming.
Part of the all important [SRD](https://lukegearing.blot.im/srd) (surprise, reaction, distance) trio ,
it can turn a boring random encounter with 12 skeletons into something more nuanced and unique.
Typical guides for the interpretation of the reaction roll tend to leave me wanting, however.
It is a simple tool that should be left open to DM interpretation, true, but I think we can do more for the already burdened DM.
Following is my new paradigm for interpreting the reaction roll, I hope you find it of some use, dear reader.

## A Standard Explanation

*The party is exploring level 1 of a dungeon and the DM rolls a random encounter. He follows the standard procedure:*

1. Roll on the encounter by dungeon level table to determine the level of the encounter.
2. Roll on the encounter by encounter level to determine the monster type encountered.
3. Roll that monster's % in lair and number appearing.
4. Adjust number appearing by difference between encounter level and dungeon level.
5. Roll for encounter distance. (D in SRD)
6. Roll for surprise of monster and party. (S in SRD)
7. Roll for monster reaction, if it wasn't already obvious. (R in SRD)

*At step 7, the DM turns to his reaction roll chart which looks something like this:*

|   Roll    |  Reaction                     |
|-----------|-------------------------------|
|   2-      |   Hostile, attacks            |
|   3-5     |   Unfriendly, may attack      |
|   6-8     |   Neutral, uncertain          |
|   9-11    |   Indifferent, uninterested   |
|   12+     |   Friendly, helpful           |

*He rolls 2d6, applies any Charisma or situational modifiers and checks against the table to determine the monsters' reaction.*

Seems simple enough right? Well sure, for some DMs that is enough to go off to create an interesting encounter. It isn't enough for me.

At the extreme ends of 2- and 12+ I have no issue. The monsters immediately attack you or actively try to assist you. It is the areas between that are too murky.
What does may attack mean? What determines whether they do or not? How is that different to uncertain?
Uninterested has some implication of being ignored, but it isn't very clear!

Luckily, most systems will provide some sort of qualifying explanations to each result.
Adventurer Conquerer King Imperial Imprint (ACKS II) is my current system of choice, so I will draw from its explanations below.

Maintaining that the extreme results are straightforward to interpret, let's focus on the three in between. Here is what ACKS has to say:

**Unfriendly** means the monsters do not like the adventurers and will attack if it seems possible to win.

**Neutral** means the monsters are uncertain. If the adventurers are aggressive or appear dangerous, the monsters will act **unfriendly**.
If the adventurers seem peaceful and interested in parley, the monsters will act **indifferent**.

**Indifferent** means the monsters will ignore the adventurers if the adventurers ignore them, and parley if the adventurers act otherwise.

These are really just elaborations on what was said in one or two words in the table: *may attack, uncertain* and *uninterested*. I seek more clarity.

## The Element of Surprise

Interpreting reaction roll results becomes even more interesting when you consider the interaction with surprise.
If the monsters are surprised and the party are not, the monster reaction is rather inconsequential.
It will be the party that dictate the tone of the encounter in such a case.

## A New Paradigm

Let me try and set this up as a series of control flow statements, 
maybe I can create a flowchart to better explain the ideas or a software tool to do the work for you.
Following the same regular procedure, we roll for surprise and then consult the flow:

IF party surprised
    ROLL monster reaction.
ELSE IF monsters surprised
    ASK what party does,
ELSE (both or none surprised)
    ROLL initiative.
    IF monsters win
        ROLL monster reaction.
    ELSE
        ASK what party does.

That's our surprise flow. For any "ROLL monster reaction" result, continue to the reaction flow:

IF hostile
    ATTACK
ELSE IF unfriendly
    
