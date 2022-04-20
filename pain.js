var legendoDon = {
    opener: {
        text: "It is a Friday afternoon when you just get home from school and start getting yourself settled down. On such an eventful day, your own birthday, your dad wasn't even here and your mother, well only her remnants are left now. Knowing it’s your birthday and you’re alone like usual, you put on your shoes, grab your wallet, and head out across the street to the closest convenience store. When you walk out, you have a drink i one hand and a box with a small vanilla cake with strawberry custard in another.You make your way across the street and start walking home.When you get home you grab the small brown coffee table and place it down in front of you while you unwrap the cake box.Feeling a bit lonely, you walk to the restroom to get yourself situated and then head up to the attic to grab a picture of your mother.As you're exploring the attic you see a shiny object in your peripheral vision and decide to check it out.After moving the boxes on top of it out of the way, you see a box with a key hole and a key tied on top of it along with a picture of your grandfather.You decide to bring it down with you and set it at the corner of the table.Putting a candle on top of the cake, you light it and make a wish, as you feel tears rolling down, you start to feel ridiculous crying since this wasn’t the first time this has happened.As you cut the cake and eat a slice, your eyes start to wander back to the box you took down and you decide to open it.Upon opening the box, you put your hand in and you grab what seems to be a locket of your grandmother.A moment later, you start to feel weird, for some odd reason, you seem to be disappearing.As you look at the cake and then back at your hands, you simply smile and accept what’s about to happen.A few hours later you feel your eyes start to open, but you ask yourself how you were watching yourself disappear. A couple minutes later a small creature with wings appears next to you. Mysteriously, she approaches you and starts to communicate with you.",
        options: [["a1", 'Sure, yeah I\'ll follow, but ya know, where are we going first??'], ["b1", 'Are you talking to me!?!, bro what even are you?? How can you talk?'], ["c1", 'Eh, it has no significance whatsoever, just ignore him and move along']]
    },
    // start of branch 1
    a1: {
        text:'As you follow the fairy to town, the fairy introduces himself and informs you of the status window. This status window displays your status, strength, health, and helps identify unknown organisms along with objects. You, as well as each avatar, are given a status window that is only seen by yourself. After following the fairy for a while, you guys end up arriving at what seems to be an academy where you are introduced to your mother\'s mentor,Cade. Welcome! User Dante! I am Window, I will help you on your journey to beat [[f̶̛̞̟̼̉̋͌̌̏͑͝O̴̢͎͓͐͛͐ͅr̵͔͓̭̄ᘿᖇᖇᓍᖇ ͔B̷̧̟̊͋̈̏̽̈́̃͆̕ị̵̬̑̔̓̔̐̈́͑͋̇d̸̨͎̯̱̫͇͇̠͈̉̈͌̈͋͛̊͛͝s̸̘̏̆̾̇̒̔̂̉̍͝p̶̪̣͍̯̩̰̲͠E̸̗̼͈̲̘̔̀͑͘ͅḷ̷̨̩̒̈́l̸̹̼̥͎̲̣̏͋̂̃̾͒͛̓̅]] . A little while later, Cade, the mentor, asks you whether or not you wish to be admitted into the academy under his instructions?"',
        options: [['a2', 'Sure why not, but can I be taught fire magic?'],['a3', 'Nah, appreciate it but i’m good, Bye!']],
    },  
     // options for town story line
    a2: { 
        text:' Seeing as how you’ve accepted his request, you are led into the academy and for the next few years, you are left under Cade’s instructions. *Timeskip* Having been at the academy for around two years now, Cade is ready to send you off onto your first quest mission. It will take around two years and by the time you return, you will be able to graduate and venture off on your own. For this quest, you will be heading out with your fellow classmate Darcy. ',
        option:[['a4', 'Eh, minus well, what bad could possibly come outta it'], ['a5', 'Can’t I just stay at the academy instead, i really don\'t want to go']],
    }, 
     a3: {
        text:'The fairy asks you whether or not you want to reconsider. After declining once more, you leave after asking the fairy how you can increase your stats. The fairy explains that by slaying creatures, depending on their class, they give you exp along with drops. You are then guided to the town board where the quests are located . As you reach for a quest, a guy, a little bigger than you, grabs the same quest. As you stare at each other, you stare back at the paper and see that you should be in a party of at least two people. After reading the contents you ask him to go with you. For this quest, you guys are requested to slay 560 udashes. Your window appears saying: Creature: Udashes About: These are wolf-like creatures who are territorial and only attack if threatened.' ,
        options: [['a6', 'I meeean, do i really have a choice anyway?'],['a7', 'He’s got this, he doesn’t need me right? I’d be okay just training myself in the forest anyway.']],
    },

    // a4-a7 leads to same path (1st common point) (cp refers to the common point we'll name them cp1 and so on)
    a4: { 
        text:' On the quest with Darcy, you guys set out at dawn and rented out a motel along the way for the night. After recovering, you guys set on your way to find and deliver the missing elixir. From what you guys were told, this quest would take around two years because you guys first needed to be of a certain level to enter the forcefield where the Wizard you are delivering the elixir to resides. Four months into setting out, you guys started to camp in the forest and hunt monsters that lurked around you guys. You can already tell they were nothing like what you guys faced at the academy, feeling a bit overwhelmed, you and Darcy took 15 minutes to take down one creature together. As time went on, you guys gradually got used to dealing with them and eventually you found your mana pool expanding. On one of your stops, Darcy was poisoned after mistakenly eating a mushroom and so you ended up nursing her back to care while also training in your own magic. After Darcy recovered, you guys set back out for the Wizard’s hideout. *Timeskip* Two years later, upon returning, you and Darcy appear back at the academy. After having reported back to your mentor, you and Darcy joke around a bit and then Cade enters the door. When he walks in he gives both of you virtual books (imported into your window system) containing information on elixirs and basically another version of a pokedex, at least that’s how he recalled it to you. After leaving the academy, you decide to climb up a hill you spotted when you were returning from your quest and decide to train up there. As you are training a distorted portal is formed',
        option:[['cp1', 'Continue...']],
    }, 
     a5: {
        text:' Declining to go on the journey, you spend the rest of your years at the academy training under Cade. When the time has come for graduation, you are entered into a hunting match, where the top 50 seniors who slay 100 dark forest creatures get to graduate. The morning of your quest, you find yourself disposing  a lot of your energy on 3 creatures. As you look at the scoreboard, you see that you are currently in 167th place, the pressure is on. After two hours, you are in 59th place, 9 more places and you can leave. When you first entered the academy, you thought everything was going to fly by, but clearly not. The window had other agendas for you and now you’re here suffering. Missing home, you take a small mental break for thirty minutes before starting to slay more. The scoreboard seems to be frozen as all the creatures have fled, thinking carefully and cautiously, you enter a cave. There’s bound to be more creatures in here right… Shortly after entering, you found yourself in a grave situation, either they kill you or you kill them. With everything you learn, you harness your fire mana and use the last of it to blast away the group bundled inside the cave. Not knowing how many you killed in that blast, you see your window pop up and wince in fear. “Congratulations! User: DanteFor Graduating at the Academy Applications are closed at this time, try again Next year!”  In a breath of relief, you sigh and just collapse because you made it through graduation.' ,
        options: [['cp1', 'Continue...']],
    },
  
    a6: { 
        text:' At first, when you entered the forest, you found yourself relying heavily on Joel for protection as you couldn’t fend for yourself. Unlike most books you have read, this is truly different.After thinking about something, you pull up your window where you see a small icon with a reed notification saying: “Starter Pack: Get started now! Do you wish to open?” After taking it, you find yourself with a pair of gloves and two books, choosing to take the book of flames, you start reading how to harness or access your mana pool. Eventually you start to get the hand of playing with mana and so you now feel like you aren’t a burden to Joel. As you explored the territory you were sent to, the Dark Forest, you and Joel seemed to have a growing brotherhood. On this journey, you guys ended up camping outside and hunting down the wolves one by one. In the first few months, you guys had no luck as they were too cautious, but after observing their behaviors, you guys seemed to have gotten used to their behavior which made them easier to slay. Upon returning to the mainland to collect your rewards, you and Joel were messing around in the lake and one of you guys seemed to have gotten sick. After nursing the other, you guys set out for the mainland when a portal, what they called dungeons, spawned under you both, thus dragging you in. ',
        option:[['cp1', 'Continue...']],
    }, 
     a7: {
        text:'Upon first entering the forest, you find it is nothing like in the books at home. As you hear a Udash storm at you, you try to fend yourself, but find yourself instead getting bit and trying to fend them off with the little knowledge you know. After randomly throwing out your hand and a cast, a small flame flare comes out, but you find that useless as it was stomped on. After running into a hole, you find yourself safe for now. Once your window appears, you start to learn about some things about this world and you even start off with a starter pack which includes a book for training your mana and some health potions. After roaming the mist-ridden forest for around five months now, you seem to have gotten used to harnessing more of the flame mana you discovered while nearly dying to a lurking wolf on the third night here. After sharpening your abilities for five months now, you decide it’s time to exit. While you make your way back to the mainland, you see birds and creatures start to head South and so you head North to see what caused it. When you arrived, you saw that it was because of a dungeon you had heard so much about.' ,
        options: [['cp1', 'Continue...']],
    },

    cp1: { 
        text:' From out of nowhere, the fairy appears and explains to you that it is a fairly common occurrence for dungeons to randomly spawn, if you enter, you should do so with caution as you cannot exit without either dying or defeating the boss room. When you enter the Dungeon of Nyden, you and the other people who may have entered with you, including Darcy and Joel, are inside and must now clear the quest together. As you guys continue fighting off ferocious beasts, your trust in one another grows. You end up, for the rest of the journey, sticking with Joel and Darcy. After defeating a mutated bat, you guys collected anything that seemed useful to you and headed South. As you guys kept roaming through the dark halls, you guys heard the echoes of voices coming from the other side of the red door. Your instincts are screaming at you to stay away, but you along with the other let your curiosity get in the way and ends up entering regardless. When you enter, you see a raging Ahgif, a window appears Creature: Ahgif About: These creatures are extremely impulsive and irritable, negotiations will fail. If encountered, aim for their young or find another way to defeat! Will you fight it or will you run?',
        option:[['a8', 'Fight with the others to defeat the Ahgif '], ['a9' , '“Over here!” As you guys run away, you guys enter a small cave that would only shelter you for so long. Eventually you will meet the Ahgif again']],
    }, 

   
    
     a8: {
        text:' As the three of you prepare to fight the raging Aghif, Darcy realizes that the Ahgif is randomly shooting. Darcy: “HEY! Give me a moment, I have an idea!” Joel: “Make it quick, I’m at my witts end” After throwing a rock at it, Darcy runs the opposite direction, enraging it, thus figuring out that it cannot see, it relies on echolocation Joel: “Hey nutshells! Mask your mana, if it can’t see there’s only one explanation, your mana and my sword aura!” USER: Dante. Mana Masked.   Status: depleting mana forcefully   After trying to cancel the mana depletion, the window gives a system error thus forcing your mana to completely shut down.' ,
        options: [['cp2', 'Continue...']],
    },
  
    a9: { 
        text:'Joel: “GUYS! I think we better think of something and quick, it\'s getting closer to us” Darcy: “HEY! Above Don! It’s shooting!”  While the Ahgif seemed to be calming down, it had shot one of its beams destroying the cover of the cave you guys resided in. Suddenly an alert appeared: ALERT! Running is not allowed! You will be brought back! Good Luck',
        option:[['cp2', 'Continue...']],
    }, 
    // next common point cp2
     cp2: {
        text:'While facing off against the Aghif, you and Darcy managed to mask your mana, but it came even more challenging to both mask it and cast with what little was left after what the window pulled. Don: “HEY! Let me bait, you guys attack, more efficient” In agreement, you start running around it while the others attack it. You have to put up a force field to deflect the beams, while Joel gets in close and starts slashing it with his throw daggers and long sword. In the meantime, Darcy creates a mud wall to prevent the Ahgif from going anywhere. After cornering and slaying the Aghif you find yourself fainting of exhaustion.   User: Dante Status: Mana depletion complete! Good luck Not being able to cast spells temporarily, you are forced to rely on Joel and Darcy for protection. After informing the other two on what happened, they also inform you that they have split the rewards evenly amongst you three. You have gotten: the ahgif’s foot, a tanned egg, and teleportation scrolls. Darcy had gotten: mana scrolls, energy orbs, and a scroll of mending. Joel had gotten: short daggers, healing potions, and defense scrolls. After exiting the dungeon you guys take a short break and return home to rest for the day.  After a week passed, a wild dungeon appeared and you three ended up entering it, seeking for a way to restore your mana. Upon entering a window pops up telling you: “Welcome to the Dungeon of Crystal Lake! Explore the depths of this cave to your heart\'s content, however I hope you were alone for only one of you guys will remain awake! Until you clear this dungeon or find a remedy,  the rest of you guys will be in an eternal sleep, good luck traveler!”  Once you finished reading, it was pretty obvious who went into a slumber. What will you do now?' ,
        options: [['a10', ' They’ll awaken naturally if I just wait right…'], ['a11', 'They’ll be fine… I’ll just leave them here for now']],
    },

   
    
    a10: {
        text:'As you wait for the other two to awaken, you realize that it won\'t be peaceful for long. Don: "Shit, they won’t be awakening anytime soon and I can hear the creatures crawling out already” Inside the dungeon of Crystal Lake are crystal-covered floors and when you look up, the constellations appear in the starry sky. Throughout the day it was pretty peaceful, but as nightfall continued, the sound of udashes (wolf creatures located in dungeons) started to come around.  A minute later, a status window appears Creature: Udashes   About: Fairly territorial, touching its items is not recommended and will hunt down their prey in groups. If encountered, use fire Stats: 120/120 hp Dont: “Dam my mana depletion, stupid window! UGH I told you not to deplete” How will you deal with this situation?' ,
        options: [['a12', 'Y’know… maybe they’re scared of fire, maybe a torch will wear them off'], ['a13', 'Ah man, I just got new teleportation scrolls too… I guess it’s time to use them ']],
    },
  
    a11: { 
        text:'Don:”I got this.. Y’know, I’ll just lay them in a cave and uh explore a bit\” As you wander around, you encounter Udashses who chased you up until the point you fell into a small hole in the cave.  Don: Darn, I think I hit my head a bit hard, eh I’ll just nap a bit...I’m a bit tired” When you awoke later, you went to explore the cave you fell into and found a mysterious vinyl with an unknown liquid inside. When you hear a noise behind you, you reflexively take the vinyl and dashed for the hole you fell through. After climbing and running for a while, you run back to the cave where you placed Darcy and Joel. After thinking carefully about the substance inside the vinyl, what do you wish to do? ',
        option:[['a14', ' I won’t know what it does until I try it…'], ['a15', 'Mmh, it seems Joel and Darcy needs it more than I do, let’s see if it wakes them up first']],
    }, 
    
    a12: { 
        text:'After using a torch to ward off the udashes, you expended too much of your mana and had to rely on the little that’s left.WARNING  USER: DANTE Mana error: Insufficient mana Mana Pool: Inaccessible As  your mana quickly depleted, you closed your eyes for what was coming next when suddenly, the necklace your mother gave you as a child started to glow. You realize that your status window opened.  Avatar: Dante  Status: Healed  Strength: 500/800 Level: 34 Mana: Depleted Pressure Points: Recovering After it tells you that your pressure points have been unlocked, not questioning it, you summon a fire ring both burning and wearing the udashes off . As you scroll through your window of spells, you try to find an awakening spell.  Welcome! How can I help you: Dante  Spell book  Avatar Status Creatures Other After finding a spell with the condition that the users are in a crystal lake, you cast it on them and they awaken two days later.',
        option:[['cp3', 'Continue...'] ],
    }, 

    a13: { 
        text:'After using your teleportation scroll, you find yourselves in another part of the dungeon. Don: “Where are we? I mean at least we’re safe-ish" As another two day passes, you find that your pressure points are starting to loosen and before exhausting yourself again, you search for an awakening spell. Hello Dante! Awakening spell (4) Other 3 unavailable, opening 1. . .Requirements: mana stone, summoning circle, and barrier As you cast the spell along with a barrier, you find them awakening after eight hours. Warning! Dante Critical Condition!Mana depleted! Life flashing!Get back to safe zone When they awoke, they found you in critical condition due to mana depletion, Darcy immediately transferred some of her mana into you hoping to release your pressure points. When you awoke, you found your pressure points had been unsealed, but the backlash had left you asleep for two days. Avatar: Dante  Status: Healed  Strength: 500/800 Level: 34 Mana: Depleted  Pressure Points: Recovering ',
        option:[['cp3', 'Continue...'] ],
    }, 

    a14: { 
        text:'Avatar: Dante Status: Healed Strength: 500/800 Level: 34  Mana: Depleted Pressure Points: Recovering Don: “Now how will the others wake up…”',
        option:[['a16', 'While I wait, minus well look for a cure'],['a17', 'Maybe my powers will work??'] ],
    }, 

    a15: { 
        text:'you have given the elixir to Darcy and Joel, they have awoken successfully and after seeing your act of selflessness, the fairy appeared warning you about your powers.  Welcome! Dante Message: “Hello adventurer, I see you’re doing fine, seeing as you were using too much mana, you were stripped of your powers.  Powers: Recovering now . . .  Because of what you did I shall return to you these. Last warning: beware of ṯ̵͍͈̟̃h̵͎͒ȅ̵̞̮̳̈́̒ ̶̹̜̃̈́w̴̧̛̹̩̫̄̊͒͆̃̕̚͜͝͝ḯ̸̛̫̏̈́̏͒͝ḋ̴̩-o̵̺̹͆̒͗̔̚̕w̸͖̳͚̩̞̮̜͙̉͂̿̌͛̚͝ͅ,̴̢̡̳͈̗̣̼̝̋̑͘ ̶̡̨̞̤̣̤̝̱̽̕̕h̴̩̥̖̪͊͑̇̅̉͒ͅe̷̺̠̺̠̟̺͎̭̞͗̍͑̐̐̾̿̑͗͂  Is not on your side!” After completing your goal, you three reach the boss room. ',
        option:[['cp3', 'Continue...'] ],
    }, 

    a16: { 
        text:'After waiting for two days, they showed no sign of improvement and so you grabbed some of your rewards from the last dungeon. As you pulled out the virtual book Cade gave you, you started searching for an elixir that would awaken them. Using the Ahgif’s foot, some of the crystal powder, and some of your infused mana, Potion Successfully made! Shortly after drinking it, they awoke and you filled them in on where they’re currently at and what happened over the past week they were asleep.',
        option:[['cp3', 'Continue...']],
    },

    a17: { 
        text:'Using them as test subjects, you tried to see if using flames would help awaken them. After failing the first time, you’ve tried again once more and found this attempt rewarding. When they awoke, you filled them in on what they missed and got ready to move up in the dungeon.',
        option:[['cp3', 'Continue...']],
    },

    // division cp3
    cp3: { 
        text:'After awakening the other two, you guys prepare to fight the boss. After another day of exploring the cave, you guys gathered more rewards like mana crystals, a herbal remedy, more mana scrolls, experience points, an enchanted metal plated chestplate that you guys gave to Joel, and some weird tree bark that glowed like the crystals.  After finishing the dungeon exploration, you guys came across a red door which, as you guys know, was the boss room. Upon entering, you guys are blinded by the darkness, after using your flames to light up the area, you guys stare at the farthest left corner to see a tree-like creature moving towards you. It was then that your window appeared: “Creature: Hollow About: Hollows are creatures who guard the crystals of this lake dungeon and when burned, they become more resistant, and when its crystals are touched, it becomes more enraged. If encountered:[[[f̶̛̞̟̼̉̋͌̌̏͑͝O̴̢͎͓͐͛͐ͅr̵͔͓̭̄ᘿᖇᖇᓍᖇ ͔B̷̧̟̊͋̈̏̽̈́̃͆̕ị̵̬̑̔̓̔̐̈́͑͋̇d̸̨͎̯̱̫͇͇̠͈̉̈͌̈͋͛̊͛͝s̸̘̏̆̾̇̒̔̂̉̍͝p̶̪̣͍̯̩̰̲͠E̸̗̼͈̲̘̔̀͑͘ͅḷ̷̨̩̒̈́l̸̹̼̥͎̲̣̏͋̂̃̾͒͛̓̅]] How will you deal with him?',
        option:[['a18', ' Ah I have an idea: I’ll continuously burn him and while I serve as bait, Darcy and Jeol can damage his outer shell for the 2 minutes it’s burned before it hardens with the enchanted sword Joel got earlier as a dungeon reward. '] ['a19', 'Hmm, Darcy can trap him within a mud wall while we burn him and continuously repeat the cycle. While he’s occupied with healing his wounds and trying to escape the wall, Darcy can root him into place while Joel and I attack from the front lines']],
    }, 

    a18: { 
        text:'After continuously attacking the hollow while its defenses are dropped, you finally slay him: Your window appears:The Hollow whispers to you:“When  you start to fear, and the shadows come to sense, the monsters will tear, the wall of your fence.” After seeing the other two hadn’t received this message, you kind of prodded it off. Additionally you, Darcy, and Joel were awarded a headpiece, mana crystals, and an unknown cube that can be opened under specific conditions.Joel: “Hey, can I have the headpiece?” Darcy: “Yeah, Uh, Don what did you want?”  Donn: “MH i’ll take the mana crystals, Darcy, you can take the cube?”Darcy: “Sure, whatever works with you?” It was decided that the cube goes to Darcy, I get the mana crystals, and Joel gets the headpiece. Items added to inventory! Dante: +130 exp points',
        option:[['cp4', 'Continue...']],
    },

    a19: { 
        text:'After slaying the Hollow, you have gained the rune of the mist, Although you cannot harness water mana, you can certainly learn or you can give it away.  As for the other rewards like a tree spirit, rengi crystals,  enchantment book, a casters wang, upgraded swords, and daggers, they were offered to Jeol and Darcy. When Darcy made the contract with the mud spirit, she had whispered to you: “When  you start to fear, and the shadows come to sense, the monsters will tear, the wall of your fence.”  Don: “Odd, hey Darcy. Are you pulling my leg?” Darcy:”No, why would I?”  Don: “Not literally, I mean did you hear that?” Darcy: “Are you okay? Do you want to get your head checked” Don: “Naw, we’re good let’s get out of here”',
        option:[['cp4', 'Continue...']],
    },
    // DIVISION CP4 
    cp4: { 
        text:'Don: “Hey? Meet up again in 2 months? I kinda wanna explore more dungeons ya feel” Joel: “Sure, just call me, you know my address”  Darcy: “Definitely! This was fun” Don: “Alright! Take care, cya in a couple months” On the second week of the month, you enter the river of Eden to start training on your own. When you search your inventory, you see that your egg has hatching properties, if properly nurtured, it’ll hatch into a creature depending on the user. After heading back to town to buy an incubator, you went back to the river plains where you slayed wurheds for experience. You learned that the experience you earned had gone to the egg, not knowing that the kind of experience you earned would affect the kind of creature you hatched. After a month and three weeks, a week before meeting Darcy and Joel again, you finally hatched your egg. The window appeared: “Congratulations! You have successfully hatched a fire breathing sea hybrid.  Attributes: flame bullet Water barrier Water ferry   Healing mist  Flame mist Health: 250/280 hp Armor: 2/50 Excited to meet Darcy and Joel once again to introduce them to your new pet, Silica, you end up arriving earlier than the other two.',
        option:[['a20', 'Hey, let’s go to the tree of time!'] ['a21', 'Let\'s build something, we might find something!']],
    }, 

    a20: { 
        text:'You guys start walking to the tree of time, in front of the tree is a small door, by entering it, you and the people with you are taken into a small wormhole. After being taken in you guys are able to recall everything you guys have gone through. One by one you guys go through the memories. First stop was inside the first dungeon when you accidentally burned Darcy’s hair trying to dry it and Joel tried to put it out but ended up cutting it shorter. She was mad for an hour before her stomach gave into the hunger. As you guys laughed about it, you guys entered the second memory. This one was after you had gotten out of the first dungeon and dumped some of your mana crystals out, being new, you didn’t expect to be robbed in broad daylight and ended up having to call Darcy and Joel to come get you out of the mess. For the next week you hung out with them and every morning you guys would stop by the local coffee shop for an iced coffee. This memory was in the second dungeon where out of boredom, you ended up playing with Darcy’s hair while she remained unconscious and Joel’s swords which you wrote in small inscription: “I’m the better buddy :)”. The fourth memory was while you were slaying the Hollow, you had accidentally ran into Darcy’s stone wall and needed Joel to princess carry you out of the way since you hadn’t ran for around half a year now. (Man was slacking on his work out y’know). The fifth and final memorable memory was after leaving, you hatched Silica, you had taken her to familiarize herself with her new world and she had accidentally burnt your head while sneezing. The next instance was when she drowned you in her waterfall when she cried because she had accidentally hit her fin against a rock underwater. When you three awoke, you guys found yourselves laughing under the tree lying down. Ah such fond memories you guys have',
        option:[ ['cp5', 'Continue...']],
    }, 
    a21: { 
        text:'After suggesting to build something, Joel decides he wants to build a stone monument so that if you guys were to ever lose contact with one another, this stone would serve as a memo of what you three were. Darcy created a stone platform, while Joel did the carving, while those two did that, I did the melting of the rock and inscription of the details. As Darcy was summoning the mudrocks, I had accidentally melted it and it exploded, cough, into Joel’s face, cough. After seeing that you both ran down the hill as Joel came chasing you. When he caught you, you guys all fell down and laughed it off. While I was scripting some of our comments onto the base platform, I accidentally butchered Darcy by spelling Deary and we ended up leaving it there. By the end of the day we came close to calling it quits, but once we stepped back, we saw a masterpiece. As it glistened in the glimmering sun set, we saw a stone figure of three adventurers who set out together to discover the world for the first time. It was truly an amazing sight. After putting on the finishing touches, we each put one of our personal belongings in a box and buried it under the statue.',
        option:[['cp5', 'Continue...'] ],
    }, 
    // Division cp5
    cp5: { 
        text:'Two days after your fun adventure, you guys met back up and agreed to start preparing for the new dungeon quest rumored to appear in three days. When the three days finally come, you guys prepare to enter the dungeon of Geos, you guys find yourselves in an ocean biome with a huge rock in the middle. From the looks of it the rock had shiny crystal shards incorporated inside of it. For this quest you guys will have to travel underwater. Before doing anything quest related, how will you go about the underwater issue?',
        option:[['a22', 'Take Silica and head under.'] ['a23', 'Earlier Darcy had talked to the villagers trying to find the shaved ice place…and instead learned of a secret tunnel that opens every night on the Full moon. We can find that instead, it might lead to Atlantis.']],
    }, 

    a22: { 
        text:'Don: “Hey hop on, I couldn’t introduce her but look at my new companion. Kinda sick right” Joel: “Yoo, where did you get a pet like that??” Darcy: “That’s really cool, can’t believe i get to ride on her”  Don: “Right!? It’s time to get going, I’ll introduce her officially later” On top of Silica, you guys went down under and unfortunately, you guys found nothing. As you guys approach the ocean floor, you see a small hole with light seeping through. Finding that there was nothing there, you guys return back up for air. Upon your return to the surface, Joel starts pointing out that the clouds look like a chicken riding an ostrich. He then notices a weirdly shaped rock with a gleaming light from it. As you guys approach it, you see that it contains crystals (geode crystals). Your window appeared: Legend has it that if you eat a sea shard you will awaken in Atlantis. The villagers offer food and send out candles into the water to ease the wrath of Poseidon. Will you take the shard or go back under to find a different path?',
        option:[['a24', ''] ['a25', '']],
    }, 
    a23: { 
        text:'Having no idea where to start looking, you guys spread out across the island and start searching every corner. After a day of searching on land, you guys had given up and decided to find a nice place to watch the sunset. Once you guys settle down on top of a low cliff hovering over the ocean, you guys find a pile of large rocks hovering over what seems to be a summoning circle on the floor. Moving the pile of rocks by breaking them, you guys have found that at the top of a low cliff hanging over the ever forgiving sea, was the portal to Atlantis. Once the sun started to set, you guys had set off the summoning gram and noticed that a whirlpool started to form right below you guys. The portal has opened, now you have to choose whether or not you jump, will you?',
        option:[['', ''] ['', '']],
    },
    // tmeplate
    a: { 
        text:'',
        option:[['', ''] ['', '']],
    }, 


    // start of branch 2
    b1: { 
        text:' As you freak out because a weird creature is speaking to you, you end up wasting time talking to her all day. By the time she leaves, you find that it’s night has fallen and now monsters will lurk. As you start to panic and look around you, you see monsters start to lunge at you and escapin with a scratch, you start running as fast as you can. Two minutes later you end up bumping into someone. As you turn around thinking that it’s the end, you see the person in front of you spew out some words and suddenly the monsters are gone. In amazement you  stare at him and prepare to tell him something. What will you tell him?',
        option:[['b2', 'Heyyyyyyyy, can you teach me how you did that superhero thing with your hands??'], ['leave', 'I preciate it bro, you saved me big time']],
    },
      // options for freak storyline
    b2: { 
        text:' Seeing as how you’ve accepted his request, you are led into the academy and for the next few years, you are left under Cade’s instructions. *Timeskip* Having been at the academy for around two years now, Cade is ready to send you off onto your first quest mission. It will take around two years and by the time you return, you will be able to graduate and venture off on your own. For this quest, you will be heading out with your fellow classmate Darcy. ',
        option:[['', 'Heyyyyyyyy, can you teach me how you did that superhero thing with your hands??'], ['leave', 'I preciate it bro, you saved me big time']],
    },
    // start of branch 3
    c1: {
        text:'You ended up ignoring the fairy thinking she wouldn\'t make a difference anyway and ended up exploring your surroundings. As you start wandering, you enter the mist-ridden forest where you get lost and you hear the voice of what seems to be another human? As you follow the voice, you find them standing in front of a tree and you introduce yourself. Now that you’ve met her, what will you do?',
        options: [['c2', '“I’m lost, can you help guide me?”'],['c3', 'Girls are weird, don’t associate yourself with them.']],
    },
 c2: {
     text: 'The girl looks at you as if she\’s irritated. She says, “No” in a very conceited manner. You find her weird and move along through the forest. After a few more hours of wandering you stumble across a cabin. The door is slightly open. It\'s getting dark out, maybe you should stay?',
     options: [['c3', 'Go on your merry way' ],['c4', 'Enter the cabin']]

 },
 c3: {
    text: 'As you continue to explore, a small window box appears in front of you. The window contains text that says, “It\'s getting dark out, monster activity grows.” in bold red letters. No matter where you look it has a fixed position in the center of your vision. It reminds you of a game interface. Worried about moving forward, you contemplate.',
    option:[['c4', 'Actually no, the cabin seems like a better option'] ['c5', 'I’m strong, I got this.']]

},
c4: {
    text: 'You enter the cabin and see that it\'s been well kept. Someone still lives here. You continue to roam the house and find thick ancient text books and wooden staff lying around. A book that seems scarred by flames piques your interest. Do you read it?',
    option:[['c6', 'Books? YAAA'] ['c7', 'Reading is for nerds, I\'m good.']]

},
c5: { 
    text:'You decide to wander the forest, and continue to question why you are even here. After walking for several hours you\'re exhausted. In the midst of your thinking you\'re caught off guard by what seems to be a light in the distance. You run to the light in desperation that the light is a sign of human settlements.  As you continue to approach the light, a foul stench clouds your nose. You slowly approach the light and see it moving. The light seems to be alive. As you continue to stare, you start to notice it has features of what seems to be a dog. There\'s multiple spirit looking dogs feasting on what seems to be an elk. Will you wait for the creatures to finish their feast or run away? ',
    option:[['c8', 'Quitely stay low from where you\'re standing without making a noise'] ['c9', 'Go about the encounter slowly and try to escape']],

   // “Welcome!
//I am Window! I am here to help you along your adventures.
//As you encounter new creatures and quests, you will see me a lot!

 //Creature: Udashes
//About: These are wolf-like creatures who are territorial and only attack if threatened.
//Stats: 120/120 hp//
},
c6: { 
    text:'You open the book, and by surprise you\'re able to understand it. You find yourself lost in your reading and lose track of time.  A sudden door slam slaps you out of your trance. You look in the direction of the sound and see a silouhette of someone with a stupid looking hat. "Who goes there?" says the mysterious figure. His stoic voice echoed across the room. What do you do?',
    option:[['c10', 'You respond with, "Your mom."'] ['c11', 'You explain how you\'re lost']],
    //“Welcome!
    //I am Window! I am here to help you along your adventures.
    //As you encounter new creatures and quests, you will see me a lot!
    //Skill: Flame Magic Acquired!
    //Descriptions: Close-mid-range attack
    
},
c7: { 
    text:'As you continue to explore the house, a sudden door slam startles you. You look in the direction of the sound and see a silouhette of someone with a stupid looking hat. "Who goes there?" says the mysterious figure. His stoic voice echoed across the room. What do you do?',
    option:[['c10', 'You respond with, "Your mom."'] ['c11', 'You explain how you\'re lost']],
}, 
c8: { 
    text:'The monsters notice your scent, you\'ve been sweating profusely and out of breath. They chase after you. Your immediate instinct is to run away from the unknown threat. The dogs keep up with you easily and scratch at you while you run away. You lose your footing and hit the ground hard. The dogs are basically right on top of you and your life flashes before your eyes. Right when you\'re about to accept your fate you hear someone shout. "Hells Flame!" You open your eyes to see a powerful beam of flames disintegrating the dogs. You look in the direction of the sound and see a silouhette of someone with a stupid looking hat. "Are you okay?" says the mysterious figure. His stoic but comforting voice directs you.',
    option:[['c12', '"Yeah thanks, what did you just do?"'] ['c13', '“No, ghost dogs chase me through a forest and I almost just died"']],
}, 
c9: { 
    text:'As you try to quietly navigate around the monsters, you step on a comedically loud branch. The monsters notice and begin to chase after you. Your immediate instinct is to run away from the unknown threat. The dogs keep up with you easily and scratch at you while you run away. You lose your footing and hit the ground hard. The dogs are basically right on top of you and your life flashes before your eyes. Right when you\'re about to accept your fate you hear someone shout. "Hells Flame!" You open your eyes to see a powerful beam of flames disintegrating the dogs. You look in the direction of the sound and see a silouhette of someone with a stupid looking hat. "Are you okay?" says the mysterious figure. His stoic but comforting voice directs you.',
    option:[['c12', '"Yeah thanks, what did you just do?"'] ['c13', '“No, ghost dogs chase me through a forest and I almost just died"']],
}, 
c10: { 
    text:'You caught the man by surprise. In response, he unleashes Hell\'s Flames upon you. Game over, you passed away at the young age of 18.',
    option:['start', 'Game Over'],
}, 
c11: { 
    text:'You continue to tell the man of your otherworldly experiences and he seems very understanding. You tell the man all of what has happened to you. He seems very wise and asks you if you want to be his apprentice.',
    option:[['c14', 'Decline and be on your merry way'] ['c15', 'Accept his offer graciously']],
    //Dante: “Yoyoyo chill, I don’t mean no harm”
   // “I got lost”
   //Man: “Chill? Is that some type of spell? Who are you and where are you from? A thief!?”
    //Dante: “Nonono I was lost in the woods and the cabin door was already opened. My name is Dante and I’m from Osaka .”
   // Man: “Osaka? I’ve never heard of that region. And you said the door was open? Darn that Darcy.”
    //Dante: “Osaka Japan, never heard of it?”
    //Man: No, what part of the world are you from? You are currently in Chesternet that resides in Glegora Kingdom.”
    //Dante: “I… don’t think I'm from this world.”
    
}, 
c12: { 
    text:'No problem, I used a spell to save you. What\'s your name, young traveler? You reveal your name as Dante and he asks if you would like to follow him to his cabin.',
    option:[['c16', '"No I\'m fine thank you very much.'] ['c16', 'Yes please get me out of this crazy forest.']],
}, 
c13: { 
    text:'I\'m glad to see you\'re still alive. I see that you\'re injured, hungry, lost, and confused. Do you want to go back to my cabin?',
    option:[['c16', '"No I\'m fine thank you very much.'] ['c16', 'Yes please get me out of this crazy forest.']],
},
c14: { 
    text:'Cade respects your decisions and takes you to the nearest town. You seem ready to start this new life. You bid your farewells with Cade. You walk through the town so you get used to the environment. As you\'re walking you get pulled into an alleyway. Three thug looking boys have their knives out and corners you into the alleyway. In immediate instant, you scream for help and no one responds. What do you do?',
    option:[['c17', 'Take on the Villains yourself. You got this'] ['c18', 'You try to negotiate with the villains.']],
}, 
c15: { 
    text:'The man reveals his identity as a mage named Cade. Cade is a very experienced mage that specializes in fire magic. He takes you under his wing and y\'all talk more. While talking with your mentor, a sudden door slam catches both of your attention. The man did not look worried, he looked as if he was expecting someone to come in. Walking through the door, a female figure emerges. It\'s that weird girl you saw earlier in the forest. Darcy! Exclaims the mage. It seems that Darcy is also an apprentice of Cade. Darcy notices you almost immediately and asks why there is a stranger in their home. You formally introduce yourself and she doesn\'t seem pleased. Before you can get to know her she runs up to her room. Cade apologizes and talks about how it\'s getting late. You get ready for bed and wonder what awaits you in the morning. When you wake up, Cade senses mana in you. He realized you read one of his grimoires. A grimoire is a very expensive book that empowers a mage. Cade immediately starts training you in the art of fire. You go into town after a few months of training and encounter thugs. You\'re able to beat them up as a powerful mage instantly. They call for help and a knight appears. He assumes you\'ve been assaulting civilians and challenges you to a duel. You both duke it out and he finally starts asking you questions. You explain to him how this is a misunderstanding and you both laugh it off. He asks about you and tells him about you. The knight\'s name is Joel and he is a son of nobles that studied knighthood. You become the best of buds and recommend you to attend the academy. At the academy Joel is your only friend. You are tasked with a final exam that allows you to graduate from the academy with joel. A group of three must accomplish the final quest to graduate. The third person in your party is a mage named Darcy. This girl was always the quiet but studious one in the class. You worry about communication but hope it just works out. It is a month long exam where you all must gain enough experience of killing 200 udashes. How will you collaborate with the new member in your party?',
    option:[['c19', 'Girls are disgusting, no.'] ['c20', 'Attempt to associate with Darcy']],
}, 
c16: { 
    text:'You continue to walk away, but before you can take a step, you notice yourself falling. Your eyes are now closed and before your conscience fades away, you hear the old man asking if you\'re okay. You awake to the smell of something delicious. You check your surroundings to notice that you\'re on a couch near a fireplace. The walls are wooden and you feel cozy. When you try standing up, you collapse almost immediately. Someone rushes to your assistance and when you look up you see the old man that saved you earlier. There was no hostility in the man\'s voice so you gave him your trust. He helps you back on the couch and leaves you. He comes back with what seems to be tea and bread. You instinctively start snarfing down the food that was given and the old man sits next to you. The man then asks you to talk about yourself.  You tell the man all of what has happened to you. He seems very wise and understanding and offers you to be his apprentice.',
    option:[['c21', 'No I can handle myself'] ['c22', 'Yes teach me the secrets of this world']],
    //Man: "You shouldn't get up, traveler, you've reached your limit." 
}, 
c17: { 
    text:'You get your butt beat and before they could deal the final blow you hear someone yell stop. Too scared to look up you keep your head on the floor. You hear metal trinkets running towards you and when you look up you see what seems to be a knight. The knight was very skillful and managed to disarm the thugs. He single handedly tied the three thugs up.',
    option:[['c23', 'You thank the knight graciously'] ['c24', 'Pfft I didn\'t need help anyway']],
}, 
c18: { 
    text:'You ask them if you can join their ranks. Their expression eases and they agree to take you in. You start your life as a thug and live on the run for a few months. You are slain by a knight when attempting to steal from an old lady. loser.',
    //Dante : Hey guys hahaha what if we just calm down a bit.
//Thief 1: “Where you from? Your clothes aren’t from around here.”
//Thief 2: “Maybe we can sell it for a lot of ka ching!”
//Thief 3: “Yea yea yea!”
//Dante: “Wait a second, I come from a long lineage of assassins and they sent me here for training. Please teach me your ways in thievery!..”
//Thieves: …. The more the merrier >:D”
    option:['start', 'Game Over'],
}, 
c19: { 
    text:'The girl plays the support mage through the entire quest. You gain a lot of experience and graduate from the academy. After you graduate from the academy the girl asks to form a party with you and Joel. Before you could respond, Joel said yes. Now, you are all partied together and take on multiple quests together. Over time, you were able to learn more about Darcy. After a few months traveling to as a party, Joel has received a summon back to his manor. You and Darcy bid farewell to him and wish him good luck on his travels. It\'s been officially a year since you all have started traveling together and you are as close as ever with Darcy. A new dungeon quest pops up, will you take it or continue traveling for another year?',
    //“Congratulations! User: Dante 
//For Graduating at the Academy
//Applications are closed at this time, try again 
//Next year!”

    option:[['c25', 'A dungeon? Maybe I can gain experience faster.'] ['c26', 'I like traveling, onward!']],
}, 
a: { 
    text:'',
    option:[['', ''] ['', '']],
}, 
};
   
