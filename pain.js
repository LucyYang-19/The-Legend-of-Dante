
var linebreak = '\n';
var legendoDon = {
    opener: {
        text: "It is a Friday afternoon when you just get home from school and start getting yourself settled down. On such an eventful day, your own birthday, your dad wasn't even here and your mother, well only her remnants are left now. Knowing it’s your birthday and you’re alone like usual, you put on your shoes, grab your wallet, and head out across the street to the closest convenience store. When you walk out, you have a drink i one hand and a box with a small vanilla cake with strawberry custard in another.You make your way across the street and start walking home.When you get home you grab the small brown coffee table and place it down in front of you while you unwrap the cake box. Feeling a bit lonely, you walk to the restroom to get yourself situated and then head up to the attic to grab a picture of your mother. As you're exploring the attic you see a \n shiny object in your peripheral vision and decide to check it out.After moving the boxes on top of it out of the way, you see a box with a key hole and a key tied on top of it along with a picture of your grandfather.You decide to bring it down with you and set it at the corner of the table.Putting a candle on top of the cake, you light it and make a wish, as you feel tears rolling down, you start to feel ridiculous crying since this wasn’t the first time this has happened.As you cut the cake and eat a slice, your eyes start to wander back to the box you took down and you decide to open it.Upon opening the box, you put your hand in and you grab what seems to be a locket of your grandmother.A moment later, you start to feel weird, for some odd reason, you seem to be disappearing.As you look at the cake and then back at your hands, you simply smile and accept what’s about to happen.A few hours later you feel your eyes start to open, but you ask yourself how you were watching yourself disappear. A couple minutes later a small creature with wings appears next to you. Mysteriously, she approaches you and starts to communicate with you.",
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
        options:[['a4', 'Eh, minus well, what bad could possibly come outta it'], ['a5', 'Can’t I just stay at the academy instead, i really don\'t want to go']],
    }, 
     a3: {
        text:'The fairy asks you whether or not you want to reconsider. After declining once more, you leave after asking the fairy how you can increase your stats. The fairy explains that by slaying creatures, depending on their class, they give you exp along with drops. You are then guided to the town board where the quests are located . As you reach for a quest, a guy, a little bigger than you, grabs the same quest. As you stare at each other, you stare back at the paper and see that you should be in a party of at least two people. After reading the contents you ask him to go with you. For this quest, you guys are requested to slay 560 udashes. Your window appears saying: Creature: Udashes About: These are wolf-like creatures who are territorial and only attack if threatened.' ,
        options: [['a6', 'I meeean, do i really have a choice anyway?'],['a7', 'He’s got this, he doesn’t need me right? I’d be okay just training myself in the forest anyway.']],
    },

    // a4-a7 leads to same path (1st common point) (cp refers to the common point we'll name them cp1 and so on)
    a4: { 
        text:' On the quest with Darcy, you guys set out at dawn and rented out a motel along the way for the night. After recovering, you guys set on your way to find and deliver the missing elixir. From what you guys were told, this quest would take around two years because you guys first needed to be of a certain level to enter the forcefield where the Wizard you are delivering the elixir to resides. Four months into setting out, you guys started to camp in the forest and hunt monsters that lurked around you guys. You can already tell they were nothing like what you guys faced at the academy, feeling a bit overwhelmed, you and Darcy took 15 minutes to take down one creature together. As time went on, you guys gradually got used to dealing with them and eventually you found your mana pool expanding. On one of your stops, Darcy was poisoned after mistakenly eating a mushroom and so you ended up nursing her back to care while also training in your own magic. After Darcy recovered, you guys set back out for the Wizard’s hideout. *Timeskip* Two years later, upon returning, you and Darcy appear back at the academy. After having reported back to your mentor, you and Darcy joke around a bit and then Cade enters the door. When he walks in he gives both of you virtual books (imported into your window system) containing information on elixirs and basically another version of a pokedex, at least that’s how he recalled it to you. After leaving the academy, you decide to climb up a hill you spotted when you were returning from your quest and decide to train up there. As you are training a distorted portal is formed',
        options:[['cp1', 'Continue...']],
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
        options:[['a8', 'Fight with the others to defeat the Ahgif '], ['a9' , '“Over here!” As you guys run away, you guys enter a small cave that would only shelter you for so long. Eventually you will meet the Ahgif again']],
    }, 

   
    
     a8: {
        text:' As the three of you prepare to fight the raging Aghif, Darcy realizes that the Ahgif is randomly shooting. Darcy: “HEY! Give me a moment, I have an idea!” Joel: “Make it quick, I’m at my witts end” After throwing a rock at it, Darcy runs the opposite direction, enraging it, thus figuring out that it cannot see, it relies on echolocation Joel: “Hey nutshells! Mask your mana, if it can’t see there’s only one explanation, your mana and my sword aura!” USER: Dante. Mana Masked.   Status: depleting mana forcefully   After trying to cancel the mana depletion, the window gives a system error thus forcing your mana to completely shut down.' ,
        options: [['cp2', 'Continue...']],
    },
  
    a9: { 
        text:'Joel: “GUYS! I think we better think of something and quick, it\'s getting closer to us” Darcy: “HEY! Above Don! It’s shooting!”  While the Ahgif seemed to be calming down, it had shot one of its beams destroying the cover of the cave you guys resided in. Suddenly an alert appeared: ALERT! Running is not allowed! You will be brought back! Good Luck',
        options:[['cp2', 'Continue...']],
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
        options:[['a14', ' I won’t know what it does until I try it…'], ['a15', 'Mmh, it seems Joel and Darcy needs it more than I do, let’s see if it wakes them up first']],
    }, 
    
    a12: { 
        text:'After using a torch to ward off the udashes, you expended too much of your mana and had to rely on the little that’s left.WARNING  USER: DANTE Mana error: Insufficient mana Mana Pool: Inaccessible As  your mana quickly depleted, you closed your eyes for what was coming next when suddenly, the necklace your mother gave you as a child started to glow. You realize that your status window opened.  Avatar: Dante  Status: Healed  Strength: 500/800 Level: 34 Mana: Depleted Pressure Points: Recovering After it tells you that your pressure points have been unlocked, not questioning it, you summon a fire ring both burning and wearing the udashes off . As you scroll through your window of spells, you try to find an awakening spell.  Welcome! How can I help you: Dante  Spell book  Avatar Status Creatures Other After finding a spell with the condition that the users are in a crystal lake, you cast it on them and they awaken two days later.',
        options:[['cp3', 'Continue...'] ],
    }, 

    a13: { 
        text:'After using your teleportation scroll, you find yourselves in another part of the dungeon. Don: “Where are we? I mean at least we’re safe-ish" As another two day passes, you find that your pressure points are starting to loosen and before exhausting yourself again, you search for an awakening spell. Hello Dante! Awakening spell (4) Other 3 unavailable, opening 1. . .Requirements: mana stone, summoning circle, and barrier As you cast the spell along with a barrier, you find them awakening after eight hours. Warning! Dante Critical Condition!Mana depleted! Life flashing!Get back to safe zone When they awoke, they found you in critical condition due to mana depletion, Darcy immediately transferred some of her mana into you hoping to release your pressure points. When you awoke, you found your pressure points had been unsealed, but the backlash had left you asleep for two days. Avatar: Dante  Status: Healed  Strength: 500/800 Level: 34 Mana: Depleted  Pressure Points: Recovering ',
        options:[['cp3', 'Continue...'] ],
    }, 

    a14: { 
        text:'Avatar: Dante Status: Healed Strength: 500/800 Level: 34  Mana: Depleted Pressure Points: Recovering Don: “Now how will the others wake up…”',
        options:[['a16', 'While I wait, minus well look for a cure'],['a17', 'Maybe my powers will work??'] ],
    }, 

    a15: { 
        text:'you have given the elixir to Darcy and Joel, they have awoken successfully and after seeing your act of selflessness, the fairy appeared warning you about your powers.  Welcome! Dante Message: “Hello adventurer, I see you’re doing fine, seeing as you were using too much mana, you were stripped of your powers.  Powers: Recovering now . . .  Because of what you did I shall return to you these. Last warning: beware of ṯ̵͍͈̟̃h̵͎͒ȅ̵̞̮̳̈́̒ ̶̹̜̃̈́w̴̧̛̹̩̫̄̊͒͆̃̕̚͜͝͝ḯ̸̛̫̏̈́̏͒͝ḋ̴̩-o̵̺̹͆̒͗̔̚̕w̸͖̳͚̩̞̮̜͙̉͂̿̌͛̚͝ͅ,̴̢̡̳͈̗̣̼̝̋̑͘ ̶̡̨̞̤̣̤̝̱̽̕̕h̴̩̥̖̪͊͑̇̅̉͒ͅe̷̺̠̺̠̟̺͎̭̞͗̍͑̐̐̾̿̑͗͂  Is not on your side!” After completing your goal, you three reach the boss room. ',
        options:[['cp3', 'Continue...'] ],
    }, 

    a16: { 
        text:'After waiting for two days, they showed no sign of improvement and so you grabbed some of your rewards from the last dungeon. As you pulled out the virtual book Cade gave you, you started searching for an elixir that would awaken them. Using the Ahgif’s foot, some of the crystal powder, and some of your infused mana, Potion Successfully made! Shortly after drinking it, they awoke and you filled them in on where they’re currently at and what happened over the past week they were asleep.',
        options:[['cp3', 'Continue...']],
    },

    a17: { 
        text:'Using them as test subjects, you tried to see if using flames would help awaken them. After failing the first time, you’ve tried again once more and found this attempt rewarding. When they awoke, you filled them in on what they missed and got ready to move up in the dungeon.',
        options:[['cp3', 'Continue...']],
    },

    // division cp3
    cp3: { 
        text:'After awakening the other two, you guys prepare to fight the boss. After another day of exploring the cave, you guys gathered more rewards like mana crystals, a herbal remedy, more mana scrolls, experience points, an enchanted metal plated chestplate that you guys gave to Joel, and some weird tree bark that glowed like the crystals.  After finishing the dungeon exploration, you guys came across a red door which, as you guys know, was the boss room. Upon entering, you guys are blinded by the darkness, after using your flames to light up the area, you guys stare at the farthest left corner to see a tree-like creature moving towards you. It was then that your window appeared: “Creature: Hollow About: Hollows are creatures who guard the crystals of this lake dungeon and when burned, they become more resistant, and when its crystals are touched, it becomes more enraged. If encountered:[[[f̶̛̞̟̼̉̋͌̌̏͑͝O̴̢͎͓͐͛͐ͅr̵͔͓̭̄ᘿᖇᖇᓍᖇ ͔B̷̧̟̊͋̈̏̽̈́̃͆̕ị̵̬̑̔̓̔̐̈́͑͋̇d̸̨͎̯̱̫͇͇̠͈̉̈͌̈͋͛̊͛͝s̸̘̏̆̾̇̒̔̂̉̍͝p̶̪̣͍̯̩̰̲͠E̸̗̼͈̲̘̔̀͑͘ͅḷ̷̨̩̒̈́l̸̹̼̥͎̲̣̏͋̂̃̾͒͛̓̅]] How will you deal with him?',
        options:[['a18', ' Ah I have an idea: I’ll continuously burn him and while I serve as bait, Darcy and Jeol can damage his outer shell for the 2 minutes it’s burned before it hardens with the enchanted sword Joel got earlier as a dungeon reward. '] ,['a19', 'Hmm, Darcy can trap him within a mud wall while we burn him and continuously repeat the cycle. While he’s occupied with healing his wounds and trying to escape the wall, Darcy can root him into place while Joel and I attack from the front lines']],
    }, 

    a18: { 
        text:'After continuously attacking the hollow while its defenses are dropped, you finally slay him: Your window appears:The Hollow whispers to you:“When  you start to fear, and the shadows come to sense, the monsters will tear, the wall of your fence.” After seeing the other two hadn’t received this message, you kind of prodded it off. Additionally you, Darcy, and Joel were awarded a headpiece, mana crystals, and an unknown cube that can be opened under specific conditions.Joel: “Hey, can I have the headpiece?” Darcy: “Yeah, Uh, Don what did you want?”  Donn: “MH i’ll take the mana crystals, Darcy, you can take the cube?”Darcy: “Sure, whatever works with you?” It was decided that the cube goes to Darcy, I get the mana crystals, and Joel gets the headpiece. Items added to inventory! Dante: +130 exp points',
        options:[['cp4', 'Continue...']],
    },

    a19: { 
        text:'After slaying the Hollow, you have gained the rune of the mist, Although you cannot harness water mana, you can certainly learn or you can give it away.  As for the other rewards like a tree spirit, rengi crystals,  enchantment book, a casters wang, upgraded swords, and daggers, they were offered to Jeol and Darcy. When Darcy made the contract with the mud spirit, she had whispered to you: “When  you start to fear, and the shadows come to sense, the monsters will tear, the wall of your fence.”  Don: “Odd, hey Darcy. Are you pulling my leg?” Darcy:”No, why would I?”  Don: “Not literally, I mean did you hear that?” Darcy: “Are you okay? Do you want to get your head checked” Don: “Naw, we’re good let’s get out of here”',
        options:[['cp4', 'Continue...']],
    },
    // DIVISION CP4 
    cp4: { 
        text:'Don: “Hey? Meet up again in 2 months? I kinda wanna explore more dungeons ya feel” Joel: “Sure, just call me, you know my address”  Darcy: “Definitely! This was fun” Don: “Alright! Take care, cya in a couple months” On the second week of the month, you enter the river of Eden to start training on your own. When you search your inventory, you see that your egg has hatching properties, if properly nurtured, it’ll hatch into a creature depending on the user. After heading back to town to buy an incubator, you went back to the river plains where you slayed wurheds for experience. You learned that the experience you earned had gone to the egg, not knowing that the kind of experience you earned would affect the kind of creature you hatched. After a month and three weeks, a week before meeting Darcy and Joel again, you finally hatched your egg. The window appeared: “Congratulations! You have successfully hatched a fire breathing sea hybrid.  Attributes: flame bullet Water barrier Water ferry   Healing mist  Flame mist Health: 250/280 hp Armor: 2/50 Excited to meet Darcy and Joel once again to introduce them to your new pet, Silica, you end up arriving earlier than the other two.',
        options:[['a20', 'Hey, let’s go to the tree of time!'] ,['a21', 'Let\'s build something, we might find something!']],
    }, 

    a20: { 
        text:'You guys start walking to the tree of time, in front of the tree is a small door, by entering it, you and the people with you are taken into a small wormhole. After being taken in you guys are able to recall everything you guys have gone through. One by one you guys go through the memories. First stop was inside the first dungeon when you accidentally burned Darcy’s hair trying to dry it and Joel tried to put it out but ended up cutting it shorter. She was mad for an hour before her stomach gave into the hunger. As you guys laughed about it, you guys entered the second memory. This one was after you had gotten out of the first dungeon and dumped some of your mana crystals out, being new, you didn’t expect to be robbed in broad daylight and ended up having to call Darcy and Joel to come get you out of the mess. For the next week you hung out with them and every morning you guys would stop by the local coffee shop for an iced coffee. This memory was in the second dungeon where out of boredom, you ended up playing with Darcy’s hair while she remained unconscious and Joel’s swords which you wrote in small inscription: “I’m the better buddy :)”. The fourth memory was while you were slaying the Hollow, you had accidentally ran into Darcy’s stone wall and needed Joel to princess carry you out of the way since you hadn’t ran for around half a year now. (Man was slacking on his work out y’know). The fifth and final memorable memory was after leaving, you hatched Silica, you had taken her to familiarize herself with her new world and she had accidentally burnt your head while sneezing. The next instance was when she drowned you in her waterfall when she cried because she had accidentally hit her fin against a rock underwater. When you three awoke, you guys found yourselves laughing under the tree lying down. Ah such fond memories you guys have',
        options:[ ['cp5', 'Continue...']],
    }, 
    a21: { 
        text:'After suggesting to build something, Joel decides he wants to build a stone monument so that if you guys were to ever lose contact with one another, this stone would serve as a memo of what you three were. Darcy created a stone platform, while Joel did the carving, while those two did that, I did the melting of the rock and inscription of the details. As Darcy was summoning the mudrocks, I had accidentally melted it and it exploded, cough, into Joel’s face, cough. After seeing that you both ran down the hill as Joel came chasing you. When he caught you, you guys all fell down and laughed it off. While I was scripting some of our comments onto the base platform, I accidentally butchered Darcy by spelling Deary and we ended up leaving it there. By the end of the day we came close to calling it quits, but once we stepped back, we saw a masterpiece. As it glistened in the glimmering sun set, we saw a stone figure of three adventurers who set out together to discover the world for the first time. It was truly an amazing sight. After putting on the finishing touches, we each put one of our personal belongings in a box and buried it under the statue.',
        options:[['cp5', 'Continue...'] ],
    }, 
    // Division cp5
    cp5: { 
        text:'Two days after your fun adventure, you guys met back up and agreed to start preparing for the new dungeon quest rumored to appear in three days. When the three days finally come, you guys prepare to enter the dungeon of Geos, you guys find yourselves in an ocean biome with a huge rock in the middle. From the looks of it the rock had shiny crystal shards incorporated inside of it. For this quest you guys will have to travel underwater. Before doing anything quest related, how will you go about the underwater issue?',
        options:[['a22', 'Take Silica and head under.'], ['a23', 'Earlier Darcy had talked to the villagers trying to find the shaved ice place…and instead learned of a secret tunnel that opens every night on the Full moon. We can find that instead, it might lead to Atlantis.']],
    }, 

    a22: { 
        text:'Don: “Hey hop on, I couldn’t introduce her but look at my new companion. Kinda sick right” Joel: “Yoo, where did you get a pet like that??” Darcy: “That’s really cool, can’t believe i get to ride on her”  Don: “Right!? It’s time to get going, I’ll introduce her officially later” On top of Silica, you guys went down under and unfortunately, you guys found nothing. As you guys approach the ocean floor, you see a small hole with light seeping through. Finding that there was nothing there, you guys return back up for air. Upon your return to the surface, Joel starts pointing out that the clouds look like a chicken riding an ostrich. He then notices a weirdly shaped rock with a gleaming light from it. As you guys approach it, you see that it contains crystals (geode crystals). Your window appeared: Legend has it that if you eat a sea shard you will awaken in Atlantis. The villagers offer food and send out candles into the water to ease the wrath of Poseidon. Will you take the shard or go back under to find a different path?',
        options:[['a24', ' Eh rather than risking my life…I think I’m better off finding a different path, a safer path.'], ['a25', 'Well, I mean I have no better Ideas so minus well, on three?']],
    }, 
    a23: { 
        text:'Having no idea where to start looking, you guys spread out across the island and start searching every corner. After a day of searching on land, you guys had given up and decided to find a nice place to watch the sunset. Once you guys settle down on top of a low cliff hovering over the ocean, you guys find a pile of large rocks hovering over what seems to be a summoning circle on the floor. Moving the pile of rocks by breaking them, you guys have found that at the top of a low cliff hanging over the ever forgiving sea, was the portal to Atlantis. Once the sun started to set, you guys had set off the summoning gram and noticed that a whirlpool started to form right below you guys. The portal has opened, now you have to choose whether or not you jump, will you?',
        options:[['a26', 'Only one way to find out if this whirlpool is a door, right?Only one way to find out if this whirlpool is a door, right?'], ['a27', ' Oh nah bro, I’m going the other way, not trying drown before I turn 30, don’t even have white hairs yet']],
    },

    a24: { 
        text:'Having decided to go back under along with the other two, Darcy stares off into the distant ocean and figures out that around the time of sunset, the plate tectonics under the ocean starts to shift and an opening in the floor is created. You guys decide to go under and you end up between two huge pillars. After some exploring, Joel was testing out his trumpet skills with a horned shell he found lying in the center of the pillars and accidentally summoned the gate of the twin stars (guardians of the gate to Atlantis). Will you ask to be let through?',
        options:[['a28', 'Darcy politely goes up to the Twin Stars and asks to be let through, kindly.'], ['a29', ' I mean, we can wait till they fall asleep…']],
    }, 

    a25: { 
        text:'On the count of three…1…2…3! You guys shut your eyes in preparation for death or suffocation at the most, to your surprise, the answer was right in front of you guys. Your window appeared:Third Dungeon has begun! Congrats on making it to Atlantis! Your goal: Find Poseidon’s three artifacts and return them to his Castle. First, find  your way into the actual city!  You are at the border! After you close the window, you guys wander around when you realize that in the center of the border are two large crumbled buildings that seemed to have a stairway underneath. When you guys go down the stairs, you see inscriptions with instructions to find an opening in the border. Will you follow those instructions? ',
        options:[['a30', 'Find the opening that the inscription told you about.'], ['a31', 'Just play around with the items in the room you found the inscriptions in']],
    }, 

    a26: { 
        text:'On the count of three…1…2…3! You guys shut your eyes in preparation for death or suffocation at the most, to your surprise, the answer was right in front of you guys. Your window appeared:Third Dungeon has begun! Congrats on making it to Atlantis! Your goal: Find Poseidon’s three artifacts and return them to his Castle. First, find  your way into the actual city! You are at the border!After you close the window, you guys wander around when you realize that in the center of the border are two large crumbled buildings that seemed to have a stairway underneath. When you guys go down the stairs, you see inscriptions with instructions to find an opening in the border. ',
        options:[['a32', 'Find the opening that the inscription told you about.'] ,['a33', 'Just play around with the items in the room you found the inscriptions in']],
    }, 

    a27: { 
        text:'After deciding not to risk your life, you guys decide to call it a day and sleep. The next morning, Joel  decides to take a swim and while he’s out swimming around the coral reef, a sharp glass object cuts him. He found it weird because instead of bleeding, he seemed to be drawn to it. When he brings a handful of pieces back, Darcy and you  start to analyze it and  realize that inside is what seems to be a pearl? Darcy realizes that if used correctly, these geode shards can actually be used as a medium to Atlantis.After taking the shards, you guys find yourselves in the city of Atlantis. Your window appeared:Third Dungeon has begun! Congrats on making it to Atlantis!Your goal: Find Poseidon’s three artifacts and return them to his Castle. First, find  your way into the actual city! You are at the border! After you close the window, you guys wander around when you realize that in the center of the border are two large crumbled buildings that seemed to have a stairway underneath. When you guys go down the stairs, you see inscriptions with instructions to find an opening in the border. Will you listen?',
        options:[['a30', 'Find the opening that the inscription told you about.'], ['a31', 'Just play around with the items in the room you found the inscriptions in']],
    }, 

    a28: { 
        text:'After having tried to reason with the Twin Stars, they eventually gave up on bickering with you and let you through. After going through the portal, you guys ended up entering the City of Atlantis.',
        options:[['cp6', 'Continue...']],
    }, 

    a29: { 
        text:'One hour passed after the next. As you watched time slip away, they finally fell unguarded. After you saw that, Darcy, Joel, and yourself hopped onto Silica and dashed through the portal. Thus, making it to the City of Atlantis.',
        options:[['cp6', 'Continue...']],
    }, 

    a30: { 
        text:'As you guys went back up the stairs, you guys hopped onto Silica and traveled South for another 2 miles or so before reaching an empty area with three pillars. Between was a shell with the inscription to blow it. Joel, being courageous, blew into it and rather than anything happening you guys were knocked out. When you awoke, you found yourself in the City of Atlantis where you saw numerous merpeople.',
        options:[['cp6', 'Continue...']],
    }, 

    a31: { 
        text:'As you guys kept searching the underground room, Darcy picked up a red and a white pearl and combined them. After combining them, a small mirror appeared, when Darcy started looking at herself, she saw that she could go through it. After all of you guys walked through, you guys found yourselves in the City of Atlantis surrounded by merpeople.',
        options:[['cp6', 'Continue...'] ],
    }, 

    a32: { 
        text:'As you guys went back up the stairs, you guys hopped onto Silica and traveled South for another 2 miles or so before reaching an empty area with three pillars. Between was a shell with the inscription to blow it. Joel, being courageous, blew into it and rather than anything happening you guys were knocked out. When you awoke, you found yourself in the City of Atlantis where you saw numerous merpeople.',
        options:[['cp6', 'Continue...']],
    }, 

    a33: { 
        text:'As you guys kept searching the underground room, Darcy picked up a red and a white pearl and combined them. After combining them, a small mirror appeared, when Darcy started looking at herself, she saw that she could go through it. After all of you guys walked through, you guys found yourselves in the City of Atlantis surrounded by merpeople.',
        options:[ ['cp6', 'Continue...']],
    }, 
    // DIVISION cp6
    cp6: { 
        text:'Your window appeared: Congrats! You have made it to the City of Atlantis. Welcome to the home of the merfolks, head over to the castle and you will get your quest there. After finding the castle, you guys enter and you have Silica wait outside. As you guys enter the castle, you guys glance around at the blue empty halls of this huge castle. The shell decorations along with the sound of the ocean, its vast space that never seems to end, then finally the main room. As you guys entered, you were greeted with a hologram of Poseidon. “Welcome adventurers, along the lines of my old age, I lost three of some of my most trusted artifacts, a siren’s tear, my Trident, and my moon ring, that I have had my whole life. If you can find them and restore them to their rightful place beside my throne, I shall grant you a wish” After hearing the hologram, Darcy, Joel, and you agree that you will each spread out to find each artifact since there are three.You were in charge of the siren’s tear, Darcy was in charge of the moon ring, and Joel with the trident. As you guys divide and conquer, you think to yourself: What will you do first?',
        options:[['a34', 'Maybe the villagers will know more about Sirens??'], ['a35', 'They say the best way to attract a siren is mmmmmh. I didn’t do drama for nothing, guess it’s finally coming into clutch huh, guess I’ll become a sailor? Nothing can go wrong']],
    }, 

    a34: { 
        text:'While resurfacing, you split with the others and  end up walking by the rice fields where you see an elderly lady struggling to carry the rice bags. You approach her out of good will and end up helping her until you reach her house. In thanks, she offers you dinner and then you remember Sirens, that was your quest. You asked her about them and she replied:“Child, I don’t know why you’re looking for them, but if you do, please do it of good will. They’ve gone through a lot, back in my days I remember our village chiefs hunting them down for their scales and pearls. I used to be friends with one, good days have passed now. No use reminiscing anyway. They blend in with people and are usually hard to see unless they show themselves to you.If you want their tears, make them happy. I have faith that you can do the right thing, only pearls come from their unhappiness” After leaving her house, you went out and by then the night had fallen. Tonight was special though, tonight was the night of the festival. On this night every villager would come out and celebrate the water lotus festival. Instead of staying in town, you go up to the cliff  hanging over the ocean. When you went up, you saw someone on the hill. Someone dancing, so beautiful, yet so sad and helpless. The look in her eyes had no light, she seemed so empty. Because of this, you approached her and then you saw a trail of pearls…Thinking back, the elder had said sirens cry tears of pearls when sad, it was then you knew what you had to do. As you approached she backed off in fear now that she knew a human knew her secret. As you approached her with good will, she slowly came around to trusting you. What will you do to get the siren’s tears?',
        options:[['a36', ' I should be honest and try to cheer her up in the meantime'], ['a37', 'They say the best way to win a woman\'s heart is with food. I know a really good restaurant on land and it is a festive night tonight, why not.']],
    }, 

    a35: { 
        text:'You resurface and head to a restaurant withDarcy and Joel, as you guys discuss your quests, you guys decide to just sleep it off for tonight. In the morning you head out first and then you head to a clothing store. You buy yourself some protective gear like ropes, lighter, oil lamps, paper, pens, and a bag. After changing you head out to the dock where you attempted to rent a boat. Instead of renting a boat because of the price, you chose to instead build your own. As you started entering the bamboo forest, you cut some down and wield them into a boat. When you started to head out into the sea, you waited for a whole day before anything. While you slept and waited, you found one day that a raid of thieves was coming at you and fast. They set fire to your boat and before you knew it, you were thrown into the unforgiving sea. Almost drowning, you find yourself grabbing onto a piece of your bamboo boat and in the distance you start hearing someone sing in the distance. Almost as if you were entranced, you all started moving towards her. It was at that moment that you realized a siren had appeared. Once she stopped, the raiders had backed off and sailed away before they were enchanted. Unconsciously, you started going towards her regardless, there was a look in her eye that was screaming out for help. She seemed sad, yet no tears were falling. Your window appeared: Welcome Dante, to get a siren’s tear, they must cry of happiness, sadness results in pearls, good luck! What will you do?',
        options:[['a36', ' I should be honest and try to cheer her up in the meantime'], ['a37', 'They say the best way to win a woman\'s heart is with food. I know a really good restaurant on land and it is a festive night tonight, why not.']],
    }, 

    a36: { 
        text:'After taking the time to talk with her, you learned that her name is Sofia. She is Posiedon’s daughter, but what he wants is her to come home. She had run away because she felt restricted at home and from what she said, her parents wanted her to pursue a path that they chose. After hearing her story, regardless of your quest right now, you sing her a song that your mother used to sing you. The song you found in the attic behind a picture frame. The same song your mother was supposed to sing to you before she passed in an accident. After seeing she had slept, you took her to a room and tucked her in. In the morning you consoled her and took her out to explore the village and the aquarium before she and you had to part, allowing her to live some of her life freely. The next morning before leaving she gave you her tears as you wanted. Before she left, you had left her with a bracelet, it symbolized her freedom and her will to do whatever. She wasn\'t chained down and you showed her that. She was truly thankful. After parting, you slept and the next day prepared to start  meeting with the other two. ',
        options:[['cp7', 'Continue...']],
    }, 

    a37: { 
        text:'After Sophia  saved you, it felt that it was your turn to save her. You learned that she had been looking for a younger sibling, not an actual sibling, who had been taken. In an attempt to cheer her up, you ended up bringing her to the water festival where you took her down to the sea and bought two lanterns. On them, you would write your worries on a piece of paper and let it float away just like one\'s worries should. The night was spent dancing and feasting, as you saw her smile grow brighter, the day grew dimmer. She seemed so full of life now, she seemed truly happy. When she fell asleep you took this chance to locate her sister using a tracking spell mentioned in the book your mentor gave you earlier on, and before she woke up, you returned along with her sister. Knowing you didn\'t get what you came for, you were satisfied that at least you could see her smile before she once more disappeared into the sea. When she awoke, she was reunited with Lili, suddenly tears burst out, tears of joy, she had been so happy. A bright smile broke out and suddenly everything seemed to be right again.  Before she had left, she gave you a bottle of her tears, she had been able to forget about her worries, and not only that, you were reunited with Lili, who she cared for a lot. After you guys parted you spent the next day sleeping and preparing to meet up with the other two.',
        options:[['cp7', 'Continue...']],
    }, 
    // DIVISION cp7
    cp7: { 
        text:'Three days later, you guys had decided to meet up at the cliff once more. When you arrived, Darcy was already there and Joel was left. As you guys got ready to go back under, you realized you had forgotten about Silica… While away, you left her at the elder’s house. After summoning her, you guys got ready to go back under to meet Poseidon. Upon reaching the Castle of Shells, you guys entered the throne room and met Posiedon. Upon entering, he didn’t seem to be there and so you guys ended up walking up to the throne and beside the main chair, there were three podiums. On the podium above the throne, you put Sophie’s tears in after  Darcy put in the Trident to the left  and to the right Joel put in the moon ring on the right. Upon entering Sophie’s tears, you found yourself disintegrating. An error appears.Poseidon had appeared. “Welcome fellow humans! I see you guys have successfully returned the artifacts, and most importantly, I’m glad you were able to make my daughter happy. *Cough* You know she’s single *Cough*.  Thank you, everyone in the past who tried to do this quest had failed, for not letting your selfishness get the better of you, thank you. Because of your kindness and bravery, I shall grant you each a wish. “Joel wished for a sword  Dante: Wow Joel, you wished for that quick!Joel: Yea it’s always been on my mind to become the strongest knight out there, and with this, I think I can. Darcy: What should we wish for? Anything in mind Dante? Dante: Wihs the first thing that comes to mind, I know for sure what I’ll be wishing for. Darcy: Ok I think I know myself- *Before Darcy was able to finish her sentence, a sudden voice caught all of our attention. It wasn’t necessarily loud, but then we realized it was coming from our Window interface. *WELCOME! AHAHAHAH ADVENTURERS!  Ah what a wonderful sight, after countless attempts to kill you, I figured why not just use you! Always useless kids getting in my way! Without you Dante, my NPCs wouldn’t have ever felt, they wouldn’t ever disobey me. YOU CAUSE THIS UPON YOURSELF! My manifestation is upon us!BEWARE FOR I AM COMING WORLD!System Admin Required: @winEX admin.pin./code-get /account_admin.promptadmin.control_sequence=halt password code=*****Access Allowed!System Alert: Avatar creating. . .After the avatar is made and I get rid of that bug, Dante, I shall be the ruler of this world! Oh how long I’ve waited… Ah get ready, I\'ll give you only one shot to beat me! Try your best AHAHHAH!',
        options:[['a38', '*You think to yourself* Ah I coded before...I can beat this guy?...Right..'], ['a39', 'BRUH WHAT IS THAT...Nah I\m out'] ],
    }, 

    a38: { 
        text:'After accepting the request, you are transported into another room with Window. A while later, a magical keyboard appears infront of you. You realzie it is an IMSAI 8080. the same exact computer that appeared in War Games, and the computer that is at the end of the novel, "Ready Player One." Without further thought, you were told to prepare: you are starting the match soon. A minute while later an animated image of a paper, rock, and scissor appear. Best out of 2, you get once chance. Begin! Which one will you shoot?',
        options:[['a40', 'Rock'], ['a41', 'Paper'], ['a42', 'Scissor']],
    }, 
    
    a39: { 
        text:'Sigh, truly unfortunate: Because you ran, it is your fate to die alongside this world! Game Over! You have died.',
        options:[['opener', 'Start Over...']] ,
    }, 

    a40: { 
        text:'Congrats! You chose the right option, having chosen scissors, Window has lost!',
        options:[['a43', 'Continue...']] ,
    }, 


    a41: { 
        text:'Sigh, truly unfortunate: Your luck isn\'t so bright today, it is your fate to die alongside this world! Game Over! You have died.',
        options:[['opener', 'Start Over...']] ,
    }, 


    a42: { 
        text:'Sigh, truly unfortunate: Because you chose the wrong option, it is your fate to die alongside this world! Game Over! You have died.',
        options:[['opener', 'Start Over...']] ,
    }, 

    a43: { 
        text:'After having defeated Window and returning to the dungeon, he couldn\'t handle his defeat and tried to delete your avatar from this world. Poseidon, having experienced all that window has done, he chose to expel window as a system. He not only put his daughter at risk, but he tried to delete the world they all cherished. He refused to accept defeat and so he shall be forced to comply. Now that he\'s dealt with, what do you want granted adventurer.',
        options:[['end1', 'I wish for nothing.'], ['end2' ,'By chance, can I speak to my mother one last time, when I was born, she had already passed. '], ['end3', 'You wish to [[[f̶̛̞̟̼̉̋͌̌̏͑͝O̴̢͎͓͐͛͐ͅr̵͔͓̭̄ᘿᖇᖇᓍ ͔B̷̧̟̊͋̈̏̽̈́̃͆̕ị̵̬̑̔̓̔̐̈́͑͋̇d̸̨͎̯̱̫͇͇̠͈̉̈͌̈͋͛̊͛͝s̸̘̏̆̾̇̒̔̂̉̍͝p̶̪̣͍̯̩̰̲͠E̸̗̼͈̲̘̔̀͑͘ͅḷ̷̨̩̒̈́l̸̹̼̥͎̲̣̏͋̂̃̾͒͛̓̅]] ']] ,
    }, 

    
    end1: { 
        text:'Having chosen to wish for nothing, you were granted everything. People who have nothing are scary because they have everything, there is nothing there for them to lose, their ambitions are scary. Poseidon has granted you the ability to move between worlds and therefore allows you to coexist between the two worlds. After granting your wish, Poseidon sheds his skin and then you find out, the perosn "Poseidon" was all just an alias. He was the creator all along, he had been tracking your every move watching you grow along with the NPCs he didn\'t think could learn to feel. As a thanks, he allowed you to coexist in both worlds. After being sent back, you are reunited with Darcy, Sophie, and Joel whom you are all exhausted. Before your parting, you guys all agree to stay in contact, you promise to come back to visit sometime. After logging out for the first time since you entered, you saw your dad in the hospital. As you look around you saw that you had been taken to the hospital with the box in your hand. That cube represents all of your memories with the others, you will forever have them by your side and whether or not you return is all up to you. Your future journeys and whom you fall in love with, it isn\'t up to fate, it\'s up to you. When your dad awakens, he looks worried, as a tear rolls down one eye, you simply smile and respond with: "I\'m home, Dad".',
        options:[['opener', 'The End']] ,
    }, 

    
    end2: { 
        text:'After telling the Poseidon your wish, you were teleported into another realm. Blinded by the light in the distance, you open your eyes to see a figure. It took a moment but you start to realize who it is and slowly one tear trickles down. You who have never met your mother, who just met her for the first time today, you already felt so close with her. After spending some time with her, you tell her of your journeys and your new friends you made in this world. And slowly as you recount all of your life events you cry because she wasn\'t there to sit through it all and finally, she was able to see her baby all grown up. She tells you: It\'s okay to grow up fast, but honey, don\'t forget to enjoy your life. You\'ve still got a long way to go, take your time for the end hasn\'t arrived yet. As she sees you off, you return to the overworld with Darcy and Joel. After meeting up with the other two, you find that maybe life isn\'t so bad, you start seeing the good in things and finally, you are able to put your story to rest knowing there\'s something waiting for you on the other side. Upon returning, you find yourself being comforted by the others. After another week of being in this world, you decide it\'s finally time to leave, you say your goodbyes in hopes it isn\'t the last one. Upond returning, you find yourself awake in your living room with a cube in your hands. When inspeceting it closer, you see on the walls of the cube are the adventures you all went through. As a tear rolls down, you hear the door open and the jiggle of someone\'s keys. You look up and find your dad had came home after all. Unexpectedly, only six days had passed since you entered the world. How ironic you thought to yourself, you had been gone for six days, and no one had known, maybe it was a good thing on your part. Smiling, you wipe your tears and sets the cube dowon on your dresser. As you greet your dad, you give him a hug and simply tell him: "Welcome home, dad".',
        options:[['opener', 'The End!']] ,
    }, 

    
    end3: { 
        text:'A_A_A_AA_AAAA-ffeERTERRRR telling your wish, Poseidon .  .  .  . your wish, Poseidon p̷̥͖͇̮̗̋O̷̱͑͑s̷̡̯̆͋̀̇͐̀͠Ê̵̛͚͖͈͇͐̇̽͆͗̑̈́i̷̼͘͝ͅD̶̢̞̣̦̺̤͕̭̲̅̓́̀̎̐̿͜͝o̵͈͓͖͙͒̊̈́̋͌̃̉͜n̶̹̟̘̮̮̑͛̃̇̐̃̕̚ͅ p̷̨̝̫̗̤̭͍̗̃o̵̼̫͉̜͔͓͕̞̠̅̍̆̋͊̒̇͝s̸̘͖͙͎̻̳̞̺̉̊̀̑́͝E̵̢̡͔̲̥͉̺̱̎̀̏̅͌͘i̵̧̤̗̼͑͂̓͋́̍Ḏ̶̤̖̟͚͇̈̀̐̍̌͝ő̸̮̦̲n̷͇̹͓͆̓̓ . . .  Wᵢₛₕ gᵣₐₙₜₑd. Upon having this wish granted, Window was permanantly rid of. After having confirmed that every one was safe, you said your goodbyes. As you awaken back into your world, you see the box in your hand along with inscriptions of all your adventures with it. After a while, you hear the door open and the jiggle of someone\'s keys. You look up and find your dad had came home after all. Unexpectedly, only six days had passed since you entered the world. How ironic you thought to yourself, you had been gone for six days, and no one had known, maybe it was a good thing on your part. Smiling, you wipe your tears and sets the cube down on your dresser. As you greet your dad, you give him a hug and simply tell him: "Welcome home, dad".',
        options:[['opener', 'The End!']] ,
    }, 

    // start of branch 2
    b1: { 
        text:' As you freak out because a weird creature is speaking to you, you end up wasting time talking to her all day. By the time she leaves, you find that it’s night has fallen and now monsters will lurk. As you start to panic and look around you, you see monsters start to lunge at you and escapin with a scratch, you start running as fast as you can. Two minutes later you end up bumping into someone. As you turn around thinking that it’s the end, you see the person in front of you spew out some words and suddenly the monsters are gone. In amazement you  stare at him and prepare to tell him something. What will you tell him?',
        options:[['b2', 'Heyyyyyyyy, can you teach me how you did that superhero thing with your hands??'], ['b3', 'I apreciate it bro, you saved me big time']],
    },
      // options for freak storyline
    b2: { 
        text:' He first introduced himself to you as Cade, after telling him what happened, he agreed to take you in. At first when you guys start training, he makes you run, after a week of running, you start to get a bit irritated because you did nothing except run. After explaining why it was important to run, you had to suck it up and just go with it. After two years of traveling and slaying monsters with Cade, he tells you that he’s taught you everything you need to know. He in turn tells you that he has a mission for you. Before disclosing it to you, you must accept it. Do you accept the quest?',
        options:[['b4', '“Can I go with someone. I’m not scared, what if I get lost?”'], ['b5', '“Do you have someone else who can do this? I want to do something else…. Uh respectfully”']],
    },
    b3: {
        text: 'You tell yourself that you’ve been through enough for one day. As the night continues to fall, wolves and other creatures in the night start to come out. Will you seek shelter from the mysterious guy?',
        options: [['b6', ' “Sorry to ask you…… uh but can I stay here for the night, it’s kinda cold out there and uh new guy round here ya know”'], ['b7','“Eh, I’ve asked plenty already, think it’s time that I start tryna do things for myself…”']],
    },
    b4: {
        text: 'Cade looks at you oddly. Wanna go? Cade: “Sure I guess, won’t need it but you do you bud, here I’ll hit up Darcy, she’ll be home tomorrow at dawn. Get along well kiddos” Dante: “Sure? There any peeves I need to be ware of” Cade: “Nah, she’s cool, she grew up in the forest so she knows her way round. Anyways you guys set off in two days, I need you to go grab some ingredients. If I have extra, I’ll make you a flame elixir for your mana”  Once you guys set out, you found yourselves traveling for quite a while. After three hours on the road, you guys called it a night and continued up the mountains at dawn. You both lay under the stars. As you guys gaze, Darcy asks: Darcy: “Hey, what’s your name? Dante: “Bro you ask now????  It’s Dante” Dacry: “Alright, we set off tomorrow, good with you?” Dant : "Yeah, sounds good, where are we starting off first?” Darcy: “No clue, the list he gave us is in my inventory, we should be okay after making it up to the mountains” After talking for a bit longer, you guys sleep and get up early the next morning. After another month of traveling passes, you guys end up finishing and returning to Cade. Upon giving the contents of the quest to him, you and Darcy leave after. Darcy: “Hey Don, up for a quest?” Wanna go?',
        options: [['b8', '“Definitely, what are we doin?”'], [' b9','“Maybe later? I’mma go back to Cade I needed to grab something”']],
    },

    b5: {
        text: 'Cade: *Sigh* kids these days don’t get anything done eh, fine it’s good instead you can go into the forest. Here, I’ll give ya a map, take it and go explore, there’s plenty to learn from there. Don’t come back till it’s clear. Will you listen to the second request? Dante: “Thanks….sorry again Cade” Cade: “It’s fine, can’t force a kid to go ya know” Will you listen to the second request?',
       
        options: [['b10', '“I said no to the first one, minus well go on this one”, but can I go with ppl?'], ['b11','“I’m not going through adolescence I swear, but like can I just explore on my own?”']],
    },

    b6: {
        text: 'After introducing himself as Cade, he allows you to stay the night and that’s when you ask him: “Uh. . . I know I’m asking a lot, but can you take me in, new around here and clueless about everything. It’s fine if you don’t that’s cool too” Cade:”Sure kid, no parents or anything?” Dante: “Nah, they’re, away you can say.” After Cade agrees to take you in and you start training under his wing. Before anything, he tells you about the status window which will appear at new quests or creatures. After two years of traveling and slaying monsters with Cade, he tells you that he’s taught you everything you need to know. He in turn tells you that he has a mission for you. Before disclosing it to you, you must accept it. well? Do you accept the quest?',
        options: [['b12', 'Definitely, what is my assignment?'], ['b13','Can I do something else']],
    },

    b7: {
        text: 'As you cluelessly wander around, you stumble upon a misted forest where you hear the cries of what sounds like a person? As you go further into the forest confused, you see an ogre with a log chasing a girl? But what was a girl doing this deep in the forest anyway. Your window appears: “Welcome!I am Window! I am here to help you along your adventures. As you encounter new creatures and quests, you will see me a lot! Creature ahead: Urlog  Descriptions: Attacks indiscriminately when someone touches their items or enters their plot of land” As you go to see how you can help, you end up throwing a log, after the ogre flinches away, you grab the girl and flee. Once you guys get into a safe vicinity,you ask her for her name. Girl: “Hey, thanks, you saved me back there, for thy, I am thankful. My names Darcy, and you?”  Dante: “np, I just got myself saved too lmao, name’s Dante”  After talking for a bit, she casts and throws her palms onto the floor, in confusion you look at the floor then you see a chiseled map on the floor. In amazement, you ask her about it. After answering what ',
        options: [['b14', '“There’s a cabin back in the forest, did you wanna go there?'], ['b15','“Let’s explore the forest?”']],
    },

    b8: {
        text: 'As you walk back into the Cabin, you look around for Cade. Dante: “HEY! Cadeee. You here?” Cade: “Yeah, what’s up kiddo what d\'ya want?” Dante: “Tell me about Dungeons???I’m weak, tryna buff up ya feel?”  Cade: “Sure kid, gimme a min want some Coffee?” Dante: “Sure” After talking with Cade a bit you find out that dungeons are random portals that spawn around the world. By going through them, it’s basically suicide if you can’t beat the boss. Without defeating the dungeon, you can’t beat the boss.',
        options: [['bcp1', 'Continue...']],
    },
    
    b9: {
        text: 'Darcy: “I heard that there’s a bunch of flowers blooming on the windland hills, did you want to go” Dante: “Sure, where to first captain” As you guys start heading up for the Windland hills, you start to feel a bit cold. The wind starts to blow harder and you lose your footing. Darcy: “HEY DON,  ARE YOU OKAYYYY!” Dante: “Yeah, I’m good, did you want to find your way down? There’s another guy down here, he just walked through what looks like a black hole?”',
        options: [['bcp1', 'Continue...']],
    },

    b10: {
        text: 'Cade: “Sure, 6 am sharp, meet up with Joel and Darcy, don’t be late” After meeting up with Darcy and Joel, you guys introduce yourselves and end up heading out for the highLands where the swamps are dominant. Upon setting out, you guys stumble upon a key and a chest. Joel: “Hey so who wants to open it?” Darcy:”I’m just tagging along, I didn’t want to come..” Dante:”...” Joel:”So?” Dante:”I’ll do it…” After you insert the key into the chest, a portal opens in its place.',
        options: [['bcp1', 'Continue...']],
    },
    b11 : {
        text: 'Cade: *Sigh* go ahead kid” As you set off, you start heading for the Highlands where you accidentally stumbled through a hole in the ground. After falling a couple feet below the ground, you find yourself in a hole with two other people. Dante: “I don’t know where I am, you” Joel: “No clue”  Darcy: “Nope, i was practicing creating mud soldiers when i was brought here by them” Dante: “Names, Dante” Joel: “Cool, I’m Joel” Darcy: “Names Darcy, I’m from the elven kingdom, pleasure to meet you”  Dante; “So what do we do?” After discussing it for a bit, a random portal appears.',
        options: [['bcp1', 'Continue...']],
    },

    b12: {
        text: 'Cade: “I need you to enter a dungeon, any dungeon, you should be able to get me a shard of any dungeon cave”',
        options: [['bcp1', 'Continue...']],
    },

    b13: {
        text: 'Cade: “Nope, need this done, thanks kid”Cade: “You’re going to enter a dungeon along with two other people, I’ll tell you more about it later. Trust me, the rewards will prove rewarding ”',
        options: [['bcp1', 'Continue...']],
    },

    b14: {
        text: 'Before reaching the cabin, a group of Urlongs chases you out and so before you can do anything, Darcy and Yourselves end up running. While running, you guys encounter another guy and start running with you guys. As the Urlogs got closer, a portal formed and you all jumped through without a second thought. ',
        options: [['bcp1', 'Continue...']],
    },

    b15: {
        text: 'As you guys enter the forest, you guys run into another guy. After helping him you guys end up exploring the forest together. After a day of exploring, Joel accidentally trips over a lever hidden under some leaves and triggers a trap door. Hesitant to enter, you have Joel enter first then yourself. After entering, you guys are met with a portal.',
        options: [['bcp1', 'Continue...']],
    },

        // DIVISION BCP1
    bcp1: {
        text: 'Upon having a dungeon form before your eyes, Dary, Joel, and yourself have entered. When you guys enter, you guys are blinded. Complete darkness surrounds you, as you light up the room with a small flame, you guys see barely enough to light up the outer wall. As Darcy goes closer, you both hear Joel Slash his sword at something. Quickly looking at him, you see that he has uncovered some inscriptions on the wall. After following the trail of the inscriptions you guys are trapped inside a room. How will you get out?',
        options: [['b16', 'Maybe there’s loose papers lying around? We should check those'], ['b17','Alright guys, get back, btta blast our way out']],
    },

    b16: {
        text: 'As you guys continue inspecting the room for clues on how to get out, Joel finds an encrypted piece of paper. While trying to decipher it, Darcy speaks up. Darcy: “Hey, guys, I think it’s in Elven, this seems to be my language. It’s really old since I don’t know it but from what I can tell, it seems to be a potion recipe” Joel: “Well? Can you decipher it or not?”   Don: “HM, do you think the Window knows?” You try pulling up window  Welcome Dante! What do you want to do? Spell book  Avatar Status Creatures Other After trying to use the window to decipher the recipe, you guys get as far as to know you need to create three potions with the given ingredients. It is missing one ingredient hence the options on the podium, each one of the people in the room will make one. Welcome to your first quest: You will create a potion, each of you, with the given ingredients: A rabbit’s foot, a toad’s tongue, or snake venom. You are trying to make an elixir of light, this potion will come to use later. Which kind of potion will you make?',
        options: [['b18', 'I want to use the snake’s venom'], ['b19','“Mmh a toad’s tongue? The princess and the frog? Maybe there’s some correlation lmfao”'], ['b20', '“They say a rabbit’s foot is lucky, well only one way to find out”']],
    },

    b17: {
        text: 'Before casting your explosion you hear a yell. Darcy: “WHAT are you doing!”  Joel:”At least take some precautions?!?”  Darcy: “Give me a warning ahead of time, let me put up a shield before you kill us you nugget” Don: “Sorry… but y\’know I was gonna cast one simultaneously” Joel: “Can you even do that in your state? I heard it takes a lot of mana” Don: “...” Darcy: “You really were going to kill us huh” Don:”Mb, i\'ll watch it next time lel”  Your recklessness may have nearly killed you guys, however nothing ever comes easy anyways. After exploding your way out of the room, you ended up entering the central chamber. When you guys walk closer you see two paths.  Joel: “So which path do we take?” Darcy: “I don’t know, none of my mud buds are active under here so i can’t send them” Don: “Take your best guess guys, we may end here” As you guys approach it, you see two paths and an inscription on the wall: Welcome explorer, depending on which path you take, you will be led to your death, or you will be given treasures. Which path will you take?',
        options: [['b21', 'Heyyy, let’s go right eh?”'], ['b22','We cannot go wrong with left”']],
    },

    b18: {
        text: 'Hello, Dante! You have successfully created a potion.Attributes: ??? Contents: Snake Venom This potion will be used for a later room, remember your life is in its hand. I do not recommend losing it! Despite not knowing whether or not the elixir you guys made is the right one, a door on the right has opened. Upon walking inside, you are led through a dark tunnel with only your flame as a light source. When you guys entered the other side, you found ourselves in an underground tunnel-like place. When you guys go up to the podium, you guys are given instructions. Welcome! This is the labor-a-tri. Of the three elixirs that you guys have made, you will all take a sip of one. Hint: they say the more you rub it the luckier you get :) Which kind of potion will you guys take? ',
        options: [['b23', 'All or nothing..we should take poison. I mean if we were gonna die anyways, minus well '], ['b24','Let’s take the toad’s tongue one…maybe it’ll work like a prince’s kiss”'] , ['b25','I’m confident! Let’s take the rabbit’s foot”']],
    },

    b19: {
        text: 'Hello, Dante! You have successfully created a potion.Attributes: ??? Contents: Toad’s tongue This potion will be used for a later room! Despite not knowing whether or not the elixir you guys made is the right one, a door on the right has opened. Upon walking inside, you are led through a dark tunnel with only your flame as a light source.When you guys entered the other side, you found ourselves in an underground tunnel-like place. When you guys go up to the podium, you guys are given instructions.  Welcome! This is the labor-a-tri. Of the three elixirs that you guys have made, you will all take a sip of one. Hint: they say the more you rub it the luckier you get :) Which kind of potion will you guys take? ',
        options: [['b23', 'All or nothing..we should take poison. I mean if we were gonna die anyways, minus well '], ['b24','Let’s take the toad’s tongue one…maybe it’ll work like a prince’s kiss”'] , ['b25','I’m confident! Let’s take the rabbit’s foot”']],
    },

    b20: {
        text: 'Hello, Dante! You have successfully created a potion.Attributes: ??? Contents: Rabbits foot This potion will be used for a later room, remember your life is in its hand. I do not recommend losing it!Despite not knowing whether or not the elixir you guys made is the right one, a door on the right has opened. Upon walking inside, you are led through a dark tunnel with only your flame as a light source. When you guys entered the other side, you found ourselves in an underground tunnel-like place. When you guys go up to the podium, you guys are given instructions. Welcome! This is the labor-a-tri. Of the three elixirs that you guys have made, you will all take a sip of one. Hint: they say the more you rub it the luckier you get :) Which kind of potion will you guys take? ',
        options: [['b23', 'All or nothing..we should take poison. I mean if we were gonna die anyways, minus well '], ['b24','Let’s take the toad’s tongue one…maybe it’ll work like a prince’s kiss”'] , ['b25','I’m confident! Let’s take the rabbit’s foot”']],
    },

    b21: {
        text: 'Darcy: “If i don’t live through this… I\'ll see you guys on the other side” Joel:”Right behind you” Don: “HM.. it’s okay I am mentally prepared-ish” The right door has opened, before going through, you see from a distance two lights. Sorry! Wrong choice, because we are all giving, we have given you a second chance at this. Ahead of you is a puzzle, only the three of you guys can complete it. After this warning appears, you guys walk forward where in front of you, you guys see a stone chamber with three stone openings. In the instructions, you are to put your hand into the stone chamber and correctly put the stone shards in the stone chamber. If you guys fail to correctly place the stone tablets, snake venom will be injected into your veins. Each one of the stone tables have an inscription on the-... Error: Incomplete sayying, time running low. Please chose your order! Which order will you enter the stone tablets? ',
        options: [['b26', '“Obviously in a linear order right?”'], ['b27','Nah let’s place them rectangularly'] , ['b28','“Or don’t place it at all and see what happens”']],
    },

    b22: {
        text: 'Congratulations! You have entered through the right path. You will now be led to a room with treasures. If you choose to take something, it will collapse as soon as one thing is misplaced, quickly get your desired items and get out. Will you take something out? ',
        options: [['b29', 'let\'s look around!']],
    },

    b23: {
        text: 'Congratulations! User(s): Dante, Darcy, and Joel. You have drunk a potion of light! Thankfully nothing happened to you and you will now move onto the next and final quest with the others! See you on the other side! Now that you have successfully lived through that first experience, a door opened to the left. Upon entering, you guys found yourselves in the boss room.',
        options: [['bcp2', 'Continue...']],
    },

    b24: {
        text: 'How Unfortunate! Sorry user(s): Dante, Darcy, and Joel. You have chosen the wrong potion. It looks like the gods weren’t on your side today! Once you have died, you will be sent back to the overworld without your memories! I hope you have a happier time there.-Window ',
        options: [['opener', 'Back to the start we go...']],
    },

    b25: {
        text: 'What a shame! Sorry user(s): Dante, Darcy, and Joel. You have chosen the wrong potion. It looks like your luck has rubbed off! Once you pass away, you will be sent to the overworld without your memories! Have fun in your next life.-Window ',
        options: [['opener', 'Back to the start we go...']],
    },

    b26: {
        text: 'Congratulations! You have been thrown into the boss room! At least it wasn’t death!',
        options: [['bcp2', 'Continue...']],
    },

    b27: {
        text: 'Congratulations! You have been thrown into the boss room! At least it wasn’t death!',
        options: [['bcp2', 'Continue...']],
    },

    b28: {
        text: 'How Unfortunate! Sorry user(s): Dante, Darcy, and Joel. You have chosen the wrong choice and as a consequence, you have been bestowed death by the ǧ̸̡̣͎̖̗̲̇o̷̡̩̗͙̻̤͓̠̍̏̓̅̋͗̊̕d̵̺͙̮̎̾̊̽̃̍͑ś̵̟͕̠̏͜ . Good Luck next time-Window',
        options: [['opener', 'Good Luck next time! Back tot start you go.']],
    },

    b29: {
        text: 'Joel: “HEY GUYS, I see an armor chestplate over here I’m going to take it!” Darcy:”Sure, I found some mana scrolls, I’m also taking something, what about you Don?” Don: “Yeah, on it, I’m taking this  windbook spell” Darcy: “HEY, while you’re there can you grab some crystal shards?” Don: “Yeah that’s right Cade wanted some. I got it dw” After grabbing your desired object(s) the ceiling started to collapse and so you guys ran out of the door you came through. Instead of finding yourselves in the trap room again, you guys are now inside the boss room.',
        options: [['bcp2', 'Continue...']],
    },

        // DIVISION cp 2
    bcp2: {
        text: 'Fellow adventurers, you have been forced into the dungeon. After the platform rose, you guys found yourselves in the middle of a summoning circle. Surrounded by four stones in a diamond formation, Sapphire, Ruby, Moonstone, and Emerald, you guys stared around in confusion. Without being able to think properly, something started to happen, after running out of the circle, you guys see a creature summoned.“Welcome to the Boss Room. Your goal is to beat the Finnoe and successfully reclaim the stones. After beating this boss, you can reclaim the four stones, use it to level up or for future dungeons. Sapphire Attributes: used for creating red powder (extremely deadly) and for creating t̶̮͈͙͚͔͎͎̙̲̄̂h̵͇̠̯̾̇e̸̙̗̥̯̓̀̑̏̄̅͌̚ ̶̳̺͖̾͒͝a̸̢̯̲͆͌l̵̯̱̞̼̬̖̮͍̭͕͂͑̓́̋͊̈́ḷ̴́̉͛͋͝͠  Emerald Attributes: used for bribery or enchanting  MoonStone Attributes: can be used for  P̶͉͎͚̱̖͐o̷͙̺̺͎̾͆̀s̵̻͉̞̤̋̃ě̷͓̞͚̠̺͕̺̳̰̿́̃̊̓̑̆̑͠î̴̞̫͔̰̯̗n–n̴̼͓̄̌͌̃ş̵͉̪́͗͗̈́̑̈̈́̇ẗ̷̼̟̹͌̏̑̈́́  ERROR: SYSTEM SHUTTING DOWN! No further Information! Check back later. In confusion, you, Darcy, and Joel look in front of you where a Finnoe is spawned. Not getting any information about the Finnoe, you guys start to test your limits. After poking around a bit, Darcy realizes that the Finnoe is enchanted by shiny things, but it also has mana. Once agitated enough, it will start to summon destructive mana hulls. How will you go about defeating the Finnoe?',
        options: [['b30', 'If darcy can hold off the beast for a bit, i can summon a barrier spell, encasing the Finnoe in a fire cage'], ['b31','If Joel can keep a close distance, i can support his blind sides while Darcy can ensure that the Finnoe encounters obstacles while it\'s flying or running']],
    },

    b30: {
        text: 'After agreeing, you guys get into position. Don: “Darcy! Can you guys hold him off?” Jeol:” Yeah! GET ON IT! He isn’t focused for long” Darcy: “QQuickly kid, get your head out of the clouds, my mana is depleting, and quickly” As you quicken your pace, you dig around in your bag and window. Window! How can i h31p you: Us3r Dante!Potion option unavailable: Potion in inventory (1) Opening now... After trying to cancel the window action, it says error and opening now. Frustrated, you let it open to see what it does. *BOOOOOOM* Upon awakening, you find Darcy and Joel hovering above you, without your knowledge, you assumed that Finnoe had died but you hadn’t a clue.Darcy: “Hey kid, what’d you do? I saw an explosion in your direction and suddenly we were gone?” Joel: “HEY THIS ISN\'T TIME TO CHIT CHAT! LOOK OVER THERE! THE FINNOE MULTIPLIED” It occurred to you that the potion had clearly done something, just not in your favor Welcome Adventurers! We have helped you! By multiplying the Finnoe, you will now be able to d̷͎̱̑̅̏͛́͒́͜-i̸̥̳͝e̸̗̫̼̪̯̦̦̘͆͊̏̎̐̎̅ Error: Shutting down! Oddly enough, the window didn’t seem to be functioning inside this dungeon. After poking around more, Darcy, Joel, and yourself had finally made it. After depleting your mana and stamina, you guys finally saw a sapphire. It seemed to be embedded in the wall and quickly crushed it. Recalling what the window said earlier, you guys threw it into its eyes from all sides. After a minute the finnoes slowly fell one by one. After sighing in relief, you guys claim your hard fought rewards and leave. ',
        options: [['bcp3', 'Continue...']],
    },

    b31: {
        text: 'As Joel tried to close in his distance with the finnoe, it would simply send out a hurl that kept him away. Joel: “HEY! I can’t go near him?” Don: “GIMME A MIN! I can cast a barrier spell around ya” Darcy: “QUICKLY! IT\'S COMING” After the casting, you guys continue your method and find yourselves rather exhausted and depleted. Putting some mana into Joel’s enchanted sword and Darcy using a mud pillar to launch him, Joel dash at the Finnoe. He took a deep breath and with all his might + the powers you casted on him, he sliced through the Finnoe killing it. After it dropped, its body despawned dropping the four stones. After taking the four stones, you guys leave.',
        options: [['bcp3', 'Continue...']],
    },

    // DIVISION bcp3 
    bcp3: {
        text: 'CONGRATS! You have passed the dungeon of shards. Pardon my connection within the dungeons as it isn’t always well. USER(S): Darcy, Joel, and Dante have now been entered into the database.You are now watched. After trying to figure out how to avoid being watched the window kicked you out and teleported you onto a hill. After getting out of the dungeon, you guys talk a little more. Darcy: “That was definitely a dungeon alright” Don: “Fsfs, I hated that, but bro these rewards are helping me big time. I’m going to make my way back to Cade: I have his cave shards, did you wanna raid gain later?” Joel: “I don’t know about Darcy, but I’m down, my sword feels so light after infusing it with that emerald” Don : “Alright, Cya later! Meet back in 38?” Darcy: “Yeah sure”  After making your way out, you head back to Cade where you give him the shards. After telling him a bit about your first raid, you go home and sleep for the night. Tired, you relax for the next three days, and then make your way up to the hill to meet the other two. ',
        options: [['bcp4', 'Continue...']],
    },

    // DIVISION branching off into default branch here

    bcp4: {
        text: 'After having agreed upon meeting up after three days, you find yourself being the second to arrive next to Darcy. As you guys wait for Joel to make his way up you guys start filling one another in on how your break was. Once Joel makes his way up, you guys start planning where you guys wish to head next. Upon taking out a map and then heading to town, you guys hear rumors about the Dungeon of Nyden. Having caught your attention, you three start to search for it, after a week of looking you guys meet up near a swamp where you guys finally found it. After entering the dungeon, you guys are attacked by bat like creatures using echo location to find their way around the caves. Upon frying it, quite literally with your fire prowess, you guys continue heading south. After heading south for what seemed like ages,  you guys collected useful items along the way, and called it an night there. Upon awakening, as you guys continued roaming through the dark halls, you heard the echoes of voices coming from the other side of a red door you guys stumbled upon. Your instincts are screaming at you to stay away, but you along with the other let your curiosity get in the way and ends up entering regardless. When you enter, you see a raging Ahgif. *a window appears* Creature: Ahgif About: These creatures are extremely impulsive and irritable, negotiations will fail. If encountered, aim for their young or find another way to defeat Good Luck Adventurer! So, will you fight it or will you run?',
        options:[['a8', 'Fight with the others to defeat the Ahgif '], ['a9' , '“Over here!” As you guys run away, you guys enter a small cave that would only shelter you for so long. Eventually you will meet the Ahgif again']],
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
    options:[['c4', 'Actually no, the cabin seems like a better option'], ['c5', 'I’m strong, I got this.']]

},
c4: {
    text: 'You enter the cabin and see that it\'s been well kept. Someone still lives here. You continue to roam the house and find thick ancient text books and wooden staff lying around. A book that seems scarred by flames piques your interest. Do you read it?',
    options:[['c6', 'Books? YAAA'], ['c7', 'Reading is for nerds, I\'m good.']]

},
c5: { 
    text:`You decide to wander the forest, and continue to question why you are even here. After walking for several hours you're exhausted. In the midst of your thinking you're caught off guard by what seems to be a light in the distance. You run to the light in desperation that the light is a sign of human settlements. As you continue to approach the light, a foul stench clouds your nose. You slowly approach the light and see it moving. The light seems to be alive. As you continue to stare, you start to notice it has features of what seems to be a dog. <br><br> "Welcome! I am Window!" <br><br> "I am here to help you along your adventures. As you encounter new creatures and quests, you will see me a lot!" <br><br> "Creature: Udashes" <br><br> "About: These are wolf-like creatures who are territorial and only attack if threatened." <br><br> "Stats: 120/120 hp" <br><br> There's multiple spirit looking dogs feasting on what seems to be an elk. Will you wait for the creatures to finish their feast or run away?`,
    options:[['c8', 'Quitely stay low from where you\'re standing without making a noise'], ['c9', 'Go about the encounter slowly and try to escape']],

},
c6: { 
    text:`You open the book, and by surprise youre able to understand it. You find yourself lost in your reading and lose track of time. <br><br> “Welcome! I am Window!" <br><br> "I am here to help you along your adventures." <br><br> "As you encounter new creatures and quests, you will see me a lot!" <br><br> "Skill: Flame Magic Acquired!" <br><br> "Descriptions: Close-mid-range attack" <br><br> A sudden door slam slaps you out of your trance. You look in the direction of the sound and see a silouhette of someone with a stupid looking hat. "Who goes there?" says the mysterious figure. His stoic voice echoed across the room. What do you do?`,
    options:[['c10', 'You respond with, "Your mom."'] ,['c11', 'You explain how you\'re lost']],
  
    
},
c7: { 
    text:'As you continue to explore the house, a sudden door slam startles you. You look in the direction of the sound and see a silouhette of someone with a stupid looking hat. "Who goes there?" says the mysterious figure. His stoic voice echoed across the room. What do you do?',
    options:[['c10', 'You respond with, "Your mom."'] ,['c11', 'You explain how you\'re lost']],
}, 
c8: { 
    text:'The monsters notice your scent, you\'ve been sweating profusely and out of breath. They chase after you. Your immediate instinct is to run away from the unknown threat. The dogs keep up with you easily and scratch at you while you run away. You lose your footing and hit the ground hard. The dogs are basically right on top of you and your life flashes before your eyes. Right when you\'re about to accept your fate you hear someone shout. "Hells Flame!" You open your eyes to see a powerful beam of flames disintegrating the dogs. You look in the direction of the sound and see a silouhette of someone with a stupid looking hat. "Are you okay?" says the mysterious figure. His stoic but comforting voice directs you.',
    options:[['c12', '"Yeah thanks, what did you just do?"'] ,['c13', '“No, ghost dogs chase me through a forest and I almost just died"']],
}, 
c9: { 
    text:'As you try to quietly navigate around the monsters, you step on a comedically loud branch. The monsters notice and begin to chase after you. Your immediate instinct is to run away from the unknown threat. The dogs keep up with you easily and scratch at you while you run away. You lose your footing and hit the ground hard. The dogs are basically right on top of you and your life flashes before your eyes. Right when you\'re about to accept your fate you hear someone shout. "Hells Flame!" You open your eyes to see a powerful beam of flames disintegrating the dogs. You look in the direction of the sound and see a silouhette of someone with a stupid looking hat. "Are you okay?" says the mysterious figure. His stoic but comforting voice directs you.',
    options:[['c12', '"Yeah thanks, what did you just do?"'] ,['c13', '“No, ghost dogs chase me through a forest and I almost just died"']],
}, 
c10: { 
    text:'You caught the man by surprise. In response, he unleashes Hell\'s Flames upon you. Game over, you passed away at the young age of 18.',
    options:['start', 'Game Over'],
}, 
c11: { 
    text:`<br><br>Dante: “Yoyoyo chill, I don’t mean no harm, I got lost”
    <br><br> Man: “Chill? Is that some type of spell? Who are you and where are you from? A thief!?”
    <br><br> Dante: “Nonono I was lost in the woods and the cabin door was already opened. My name is Dante and I’m from Osaka.”
    <br><br> Man: “Osaka? I’ve never heard of that region. And you said the door was open? Darn that Darcy.”
    <br><br> Dante: “Osaka Japan, never heard of it?”
    <br><br> Man: "No, what part of the world are you from? You are currently in Chesternet that resides in Glegora Kingdom.”
    <br><br> Dante: “I… don’t think I'm from this world.”
     <br><br> You continue to tell the man of your otherworldly experiences and he seems very understanding. You tell the man all of what has happened to you. He seems very wise and asks you if you want to be his apprentice.`,
    options:[['c14', 'Decline and be on your merry way'] ,['c15', 'Accept his offer graciously']],
   
    
}, 
c12: { 
    text:'No problem, I used a spell to save you. What\'s your name, young traveler? You reveal your name as Dante and he asks if you would like to follow him to his cabin.',
    options:[['c16', '"No I\'m fine thank you very much.'] ,['c16', 'Yes please get me out of this crazy forest.']],
}, 
c13: { 
    text:'I\'m glad to see you\'re still alive. I see that you\'re injured, hungry, lost, and confused. Do you want to go back to my cabin?',
    options:[['c16', '"No I\'m fine thank you very much.'], ['c16', 'Yes please get me out of this crazy forest.']],
},
c14: { 
    text:'Cade respects your decisions and takes you to the nearest town. You seem ready to start this new life. You bid your farewells with Cade. You walk through the town so you get used to the environment. As you\'re walking you get pulled into an alleyway. Three thug looking boys have their knives out and corners you into the alleyway. In immediate instant, you scream for help and no one responds. What do you do?',
    options:[['c17', 'Take on the Villains yourself. You got this'], ['c18', 'You try to negotiate with the villains.']],
}, 
c15: { 
    text:'The man reveals his identity as a mage named Cade. Cade is a very experienced mage that specializes in fire magic. He takes you under his wing and y\'all talk more. While talking with your mentor, a sudden door slam catches both of your attention. The man did not look worried, he looked as if he was expecting someone to come in. Walking through the door, a female figure emerges. It\'s that weird girl you saw earlier in the forest. Darcy! Exclaims the mage. It seems that Darcy is also an apprentice of Cade. Darcy notices you almost immediately and asks why there is a stranger in their home. You formally introduce yourself and she doesn\'t seem pleased. Before you can get to know her she runs up to her room. Cade apologizes and talks about how it\'s getting late. You get ready for bed and wonder what awaits you in the morning. When you wake up, Cade senses mana in you. He realized you read one of his grimoires. A grimoire is a very expensive book that empowers a mage. Cade immediately starts training you in the art of fire. You go into town after a few months of training and encounter thugs. You\'re able to beat them up as a powerful mage instantly. They call for help and a knight appears. He assumes you\'ve been assaulting civilians and challenges you to a duel. You both duke it out and he finally starts asking you questions. You explain to him how this is a misunderstanding and you both laugh it off. He asks about you and tells him about you. The knight\'s name is Joel and he is a son of nobles that studied knighthood. You become the best of buds and recommend you to attend the academy. At the academy Joel is your only friend. You are tasked with a final exam that allows you to graduate from the academy with joel. A group of three must accomplish the final quest to graduate. The third person in your party is a mage named Darcy. This girl was always the quiet but studious one in the class. You worry about communication but hope it just works out. It is a month long exam where you all must gain enough experience of killing 200 udashes. How will you collaborate with the new member in your party?',
    options:[['c19', 'Girls are disgusting, No.'] ,['c20', 'Attempt to associate with Darcy']],
}, 
c16: { 
    text:`You continue to walk away, but before you can take a step, you notice yourself falling. Your eyes are now closed and before your conscience fades away, you hear the old man asking if you're okay. You awake to the smell of something delicious. You check your surroundings to notice that you're on a couch near a fireplace. The walls are wooden and you feel cozy. When you try standing up, you collapse almost immediately. Someone rushes to your assistance and when you look up you see the old man that saved you earlier. 
    <br><br> Man: "You shouldn't get up, traveler, you've reached your limit." 
    <br><br> There was no hostility in the man's voice so you gave him your trust. He helps you back on the couch and leaves you. He comes back with what seems to be tea and bread. You instinctively start snarfing down the food that was given and the old man sits next to you. The man then asks you to talk about yourself.  You tell the man all of what has happened to you. He seems very wise and understanding and offers you to be his apprentice.`,
    options:[['c21', 'No I can handle myself'], ['c15', 'Yes teach me the secrets of this world']],
}, 
c17: { 
    text:'You get your butt beat and before they could deal the final blow you hear someone yell stop. Too scared to look up you keep your head on the floor. You hear metal trinkets running towards you and when you look up you see what seems to be a knight. The knight was very skillful and managed to disarm the thugs. He single handedly tied the three thugs up.',
    options:[['c22', 'You thank the knight graciously'] ,['c23', 'Pfft I didn\'t need help anyway']],
}, 
c18: { 
    text:'You ask them if you can join their ranks. Their expression eases and they agree to take you in. You start your life as a thug and live on the run for a few months. You are slain by a knight when attempting to steal from an old lady. loser.',
    //Dante : Hey guys hahaha what if we just calm down a bit.
//Thief 1: “Where you from? Your clothes aren’t from around here.”
//Thief 2: “Maybe we can sell it for a lot of ka ching!”
//Thief 3: “Yea yea yea!”
//Dante: “Wait a second, I come from a long lineage of assassins and they sent me here for training. Please teach me your ways in thievery!..”
//Thieves: …. The more the merrier >:D”
    options:['start', 'Game Over'],
}, 
c19: { 
    text:'The girl plays the support mage through the entire quest. You gain a lot of experience and graduate from the academy. After you graduate from the academy the girl asks to form a party with you and Joel. Before you could respond, Joel said yes. Now, you are all partied together and take on multiple quests together. Over time, you were able to learn more about Darcy. After a few months traveling to as a party, Joel has received a summon back to his manor. You and Darcy bid farewell to him and wish him good luck on his travels. It\'s been officially a year since you all have started traveling together and you are as close as ever with Darcy. A new dungeon quest pops up, will you take it or continue traveling for another year?',
    //“Congratulations! User: Dante 
//For Graduating at the Academy
//Applications are closed at this time, try again 
//Next year!”

    options:[['c24', 'A dungeon? Maybe I can gain experience faster.'], ['c25', 'I like traveling, onward!']],
}, 

c20: { 
    text:'The girl ignores you and plays the support mage through the entire quest. You gain a lot of experience and graduate from the academy. After you graduate from the academy the girl asks to form a party with you and Joel. Before you could respond, Joel said yes. Now, you are all partied together and take on multiple quests together. Over time, you were able to learn more about Darcy. After a few months traveling to as a party, Joel has received a summon back to his manor. You and Darcy bid farewell to him and wish him good luck on his travels. It\'s been officially a year since you all have started traveling together and you are as close as ever with Darcy. A new dungeon quest pops up, will you take it or continue traveling for another year?',
    options:[['c24', 'A dungeon? Maybe I can gain experience faster.'], ['c25', 'I like traveling, onward!']],
}, 
c21: { 
    text:'Cade respects your decisions and takes you to the nearest town. You seem ready to start this new life. You bid your farewells with Cade. You walk through the town so you get used to the environment. As you\'re walking you get pulled into an alleyway. Three thug looking boys have their knives out and corners you into the alleyway. In immediate instant, you scream for help and no one responds. What do you do?',
    options:[['c17', 'Take on the Villains yourself. You got this'], ['c18', 'You try to negotiate with the villains.']],
},
c22: { 
    text:'The knight enjoys your praise and takes you under his wing. He asks about you. \n Knight: What city are you from? \n Dante: I’m from Osaka Japan, where am I? \n Knight: “Osaka Japan? Never heard of that region. You currently reside in Chesternet, in the Glegora Kingdom.” \n Dante: …. I don’t think I’m from this world… \n You continue to tell him everything that has happened up to this point. He introduces himself as Joel. He is very intrigued with you and decides to give you shelter, so he takes you home and introduces you to his parents. His parents are nobles and accept you warmly. From there on, you begin to train to become a knight yourself. You become skilled enough that the knight decides to enroll you in the academy he\'s attending. From there, you enroll as a knight and start your first day of the academy. You introduce yourself to everyone and begin training in the arts and understanding of knighthood and this world. At the academy Joel is your only friend. You are tasked with a final exam that allows you to graduate from the academy with joel. A group of three must accomplish the final quest to graduate. The third person in your party is a mage named Darcy. She was assigned to your group since she was the only other person that was not in one. This girl was always quiet, but studious in the class. You worry about communication but hope it just works out. It is a month-long exam where you all must gain the equivalent experience of killing 200 udashes.',
    

    options:[['c19', 'Girls are disgusting, No.'], ['c20', 'Attempt to associate with Darcy']],
}, 
c23: { 
    text:'The knight is glad to see that you\'re doing fine. You guys talk some more and he asks about you. You tell him everything. He is very intrigued with you and decides to give you shelter, so he takes you home and introduces you to his parents. His parents are nobles and accept you warmly. From there on, you begin to train to become a knight yourself. You become skilled enough that the knight decides to enroll you in the academy he\'s attending. From there, you enroll as a knight and start your first day of the academy. You introduce yourself to everyone and begin training in the arts and understanding of knighthood and this world. At the academy Joel is your only friend. You are tasked with a final exam that allows you to graduate from the academy with joel. A group of three must accomplish the final quest to graduate. The third person in your party is a mage named Darcy. She was assigned to your group since she was the only other person that was not in one. This girl was always quiet, but studious in the class. You worry about communication but hope it just works out. It is a month-long exam where you all must gain the equivalent experience of killing 200 udashes.',
    options:[['c19', 'Girls are disgusting, No.'] ,['c20', 'Attempt to associate with Darcy']],
}, 
c24: { 
    text:'You take the quest and explore the dungeon of truth. After an excruciating and difficult 12 hours. You both reach the vault. In excitement Darcy grabs the vault door and opens it. You were able to detect a curse on the door but it was too late to warn Darcy. The curse activated once she opened the door. She was cursed with a liars baron. Liars Baron curses its target by forcing the victim to tell the truth. Curses cannot be released until a certain condition has been met. Darcy is confused and asks you if everything is alright. You explain to her and she exclaims how she\'s not worried about the curse since she has nothing to hide. Alas! You two have finally reached the dungeons treasury. Darcy randomly starts spouting how much she likes you. She looked shocked. Her mouth couldn\'t stop rambling as she confessed her feelings for you. The more she tried explaining, the more the curse overwrote her lies. There is a mage in town that can help her with the curse. The mage says the only way to break the curse is the ironic method of a kiss from the person that she has kept romantic feelings from. You have consciously developed feelings for Darcy and did not mind this. This quest that was done to gain experience, has also rewarded you with a new relationship.After some time,  you meet up with Joel after one more year of traveling and update him. He congratulates you both and talks about challenging the world\'s dungeons. The world dungeons are the three hardest dungeons that no one has successfully completed. Legend says that once all three dungeons have been conquered, a miracle happens. God\'s wish is granted upon the dungeon conqueror.',
    // “Welcome to the Dungeon of Truth!
//Explore the depths of this dungeon to your heart's content, however where treasure awaits, surely you will awake. Baron's truth will start  one’s youth!

    options:[['c26', 'Heck yea let\'s go!'] ,['c26', 'Nah I\'m ok']],
}, 
c25: { 
    text:'After years of traveling alone and monster fighting in life threatening situations, you and Darcy become a thing, congrats! You meet up with Joel after traveling and update him. He congratulates you both and talks about challenging the world\'s dungeons. The world dungeons are the three hardest dungeons that no one has successfully completed. Legend says that once all three dungeons have been conquered, a miracle happens. God\'s wish is granted upon the dungeon conqueror.',
    options:[['c26', 'Heck yea let\'s go!'], ['c226', 'Nah I\'m ok']],
},
c26: { 
    text:'The fairy appears. The fairy caught you by surprise. But before you could question it, the fairy shoots a beam at you. You\'re immediately knocked out. A rapid stream of data was traveling straight into your brain. You wake up almost a second later with Darcy and Joel surrounding you. You\'ve gained information about your mom, and now you come to the conclusion that you need to conquer the world\'s dungeons.',
    options:[['ccp1', 'Continue...']],

    //Hello, Dante! You are continuing the g̴̖̊͛̍a̶͉͖͕̟̝̭͊͋́͛͐̌m̴͇̱͍̊̀̃̚̕e̶̢͍̳̻̓̒̋̒̆̂̍̀͌͝ͅ.
    //Goodluck! You are just like 🅂🅄🄺🄸!  ☺̵̞̋̃͑̾̚
},

ccp1: {
    text: 'After learning of your new goal, you three decide to meet up once more, Upon meeting up you guys start seaching for a newly opened dungeon. After finding and  entering the dungeon, you guys are attacked by bat like creatures using echo location to find their way around the caves. Upon frying it, quite literally with your fire prowess, you guys continue heading south. After heading south for what seemed like ages,  you guys collected useful items along the way, and called it an night there. Upon awakening, as you guys continued roaming through the dark halls, you heard the echoes of voices coming from the other side of a red door you guys stumbled upon. Your instincts are screaming at you to stay away, but you along with the other let your curiosity get in the way and ends up entering regardless. When you enter, you see a raging Ahgif. *a window appears* Creature: Ahgif About: These creatures are extremely impulsive and irritable, negotiations will fail. If encountered, aim for their young or find another way to defeat Good Luck Adventurer! So, will you fight it or will you run?',
    options:[['a8', 'Fight with the others to defeat the Ahgif '], ['a9' , '“Over here!” As you guys run away, you guys enter a small cave that would only shelter you for so long. Eventually you will meet the Ahgif again']],
},

};

var linebreak = '\n';

var playerChoices = ["opener"];//array containing variables
var x = document.getElementById("btn");//start button 
var restart = document.getElementById("restart");//restart button
var playArea = document.getElementById("playArea");//refers to play area
var buttonArea = document.getElementById("buttonArea");//refers to buttons


function createButton(btnText, choice) {
  var button = document.createElement("button"); //creates the button
  button.innerHTML = btnText;//changes button text according to "options" in array
  buttonArea.appendChild(button);//adds button that has changed name

  button.addEventListener("click", function(){//when button that is generated is clicked, add choice to playerChoices and run createStory
    playerChoices.push(choice);
    createlegendoDon();
     window.scrollTo({ top: 0, behavior: 'smooth' }); //scrolling up 
  });
}

function addlegendoDon(text){//changes playArea text to choice
  playArea.innerHTML = text;
}

function createlegendoDon(text){
  let pageNow = playerChoices[playerChoices.length - 1];
  playArea.innerHTML = "";//empties play area
  buttonArea.innerHTML = "";//empties button area
  
  for(let idea of playerChoices){//creates variable idea and uses with array playerChoices
    addlegendoDon(legendoDon[idea].text)
//based on button clicked, run addStory with text
  }
  for (let idea of legendoDon[pageNow].options){//creates variable idea and used with story.options
    createButton(idea[1],idea[0]);//creates buttons using options text
  }

}

restart.addEventListener("click", function(){
  location.reload();//reloads page on click, resetting game
});

restart.style.display = 'none';//hides restart button

x.addEventListener("click", function(){// start button click
  createlegendoDon(legendoDon.opener.text);//run createStory
  restart.style.display = '';//shows restart button

});


// testing to see if I can get each of the opitions into an individual class

document.getElementById("legendoDon").classList.add('a1');

// https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
// use this to change background, we'll need to get the element with innerHTML and then use the id or class to then change it inside css