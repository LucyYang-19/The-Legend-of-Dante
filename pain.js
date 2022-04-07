var legendoDon = {
    opener: {
        text: "It is a Friday afternoon when you just get home from school and start getting yourself settled down. On such an eventful day, your own birthday, your dad wasn't even here and your mother, well only her remnants are left now. Knowing it’s your birthday and you’re alone like usual, you put on your shoes, grab your wallet, and head out across the street to the closest convenience store. When you walk out, you have a drink i one hand and a box with a small vanilla cake with strawberry custard in another.You make your way across the street and start walking home.When you get home you grab the small brown coffee table and place it down in front of you while you unwrap the cake box.Feeling a bit lonely, you walk to the restroom to get yourself situated and then head up to the attic to grab a picture of your mother.As you're exploring the attic you see a shiny object in your peripheral vision and decide to check it out.After moving the boxes on top of it out of the way, you see a box with a key hole and a key tied on top of it along with a picture of your grandfather.You decide to bring it down with you and set it at the corner of the table.Putting a candle on top of the cake, you light it and make a wish, as you feel tears rolling down, you start to feel ridiculous crying since this wasn’t the first time this has happened.As you cut the cake and eat a slice, your eyes start to wander back to the box you took down and you decide to open it.Upon opening the box, you put your hand in and you grab what seems to be a locket of your grandmother.A moment later, you start to feel weird, for some odd reason, you seem to be disappearing.As you look at the cake and then back at your hands, you simply smile and accept what’s about to happen.A few hours later you feel your eyes start to open, but you ask yourself how you were watching yourself disappear. A couple minutes later a small creature with wings appears next to you. Mysteriously, she approaches you and starts to communicate with you.",
        options: [["town", 'Sure, yeah I\'ll follow, but ya know, where are we going first??'], ["freak", 'Are you talking to me!?!, bro what even are you?? How can you talk?'], ["lost", 'Eh, it has no significance whatsoever, just ignore him and move along']]
    },
    // start of branch 1
    town: {
        text:'As you follow the fairy to town, the fairy introduces himself and informs you of the status window. This status window displays your status, strength, health, and helps identify unknown organisms along with objects. You, as well as each avatar, are given a status window that is only seen by yourself. After following the fairy for a while, you guys end up arriving at what seems to be an academy where you are introduced to your mother\'s mentor,Cade. Welcome! User Dante! I am Window, I will help you on your journey to beat [[f̶̛̞̟̼̉̋͌̌̏͑͝O̴̢͎͓͐͛͐ͅr̵͔͓̭̄ᘿᖇᖇᓍᖇ ͔B̷̧̟̊͋̈̏̽̈́̃͆̕ị̵̬̑̔̓̔̐̈́͑͋̇d̸̨͎̯̱̫͇͇̠͈̉̈͌̈͋͛̊͛͝s̸̘̏̆̾̇̒̔̂̉̍͝p̶̪̣͍̯̩̰̲͠E̸̗̼͈̲̘̔̀͑͘ͅḷ̷̨̩̒̈́l̸̹̼̥͎̲̣̏͋̂̃̾͒͛̓̅]] . A little while later, Cade, the mentor, asks you whether or not you wish to be admitted into the academy under his instructions?"',
        options: [['yes', 'Sure why not, but can I be taught fire magic?'],['no', 'Nah, appreciate it but i’m good, Bye!']],
    },  
     // options for town story line
    yes: { 
        text:' Seeing as how you’ve accepted his request, you are led into the academy and for the next few years, you are left under Cade’s instructions. *Timeskip* Having been at the academy for around two years now, Cade is ready to send you off onto your first quest mission. It will take around two years and by the time you return, you will be able to graduate and venture off on your own. For this quest, you will be heading out with your fellow classmate Darcy. ',
        option:[['guide', 'Eh, minus well, what bad could possibly come outta it'], ['resist', 'Can’t I just stay at the academy instead, i really don\'t want to go']],
    }, 
     no: {
        text:'The fairy asks you whether or not you want to reconsider. After declining once more, you leave after asking the fairy how you can increase your stats. The fairy explains that by slaying creatures, depending on their class, they give you exp along with drops. You are then guided to the town board where the quests are located . As you reach for a quest, a guy, a little bigger than you, grabs the same quest. As you stare at each other, you stare back at the paper and see that you should be in a party of at least two people. After reading the contents you ask him to go with you. For this quest, you guys are requested to slay 560 udashes. Your window appears saying: Creature: Udashes About: These are wolf-like creatures who are territorial and only attack if threatened.' ,
        options: [['noChoice', 'I meeean, do i really have a choice anyway?'],['goAlone', 'He’s got this, he doesn’t need me right? I’d be okay just training myself in the forest anyway.']],
    },
    // yes path options
    guide: { 
        text:' Seeing as how you’ve accepted his request, you are led into the academy and for the next few years, you are left under Cade’s instructions. *Timeskip* Having been at the academy for around two years now, Cade is ready to send you off onto your first quest mission. It will take around two years and by the time you return, you will be able to graduate and venture off on your own. For this quest, you will be heading out with your fellow classmate Darcy. ',
        option:[['guide', 'Eh, minus well, what bad could possibly come outta it'], ['resist', 'Can’t I just stay at the academy instead, i really don\'t want to go']],
    }, 
     resist: {
        text:'The fairy asks you whether or not you want to reconsider. After declining once more, you leave after asking the fairy how you can increase your stats. The fairy explains that by slaying creatures, depending on their class, they give you exp along with drops. You are then guided to the town board where the quests are located . As you reach for a quest, a guy, a little bigger than you, grabs the same quest. As you stare at each other, you stare back at the paper and see that you should be in a party of at least two people. After reading the contents you ask him to go with you. For this quest, you guys are requested to slay 560 udashes. Your window appears saying: Creature: Udashes About: These are wolf-like creatures who are territorial and only attack if threatened.' ,
        options: [['noChoice', 'I meeean, do i really have a choice anyway?'],['goAlone', 'He’s got this, he doesn’t need me right? I’d be okay just training myself in the forest anyway.']],
    },
    // no path options
    noChoice: { 
        text:' Seeing as how you’ve accepted his request, you are led into the academy and for the next few years, you are left under Cade’s instructions. *Timeskip* Having been at the academy for around two years now, Cade is ready to send you off onto your first quest mission. It will take around two years and by the time you return, you will be able to graduate and venture off on your own. For this quest, you will be heading out with your fellow classmate Darcy. ',
        option:[['guide', 'Eh, minus well, what bad could possibly come outta it'], ['resist', 'Can’t I just stay at the academy instead, i really don\'t want to go']],
    }, 
     goAlone: {
        text:'The fairy asks you whether or not you want to reconsider. After declining once more, you leave after asking the fairy how you can increase your stats. The fairy explains that by slaying creatures, depending on their class, they give you exp along with drops. You are then guided to the town board where the quests are located . As you reach for a quest, a guy, a little bigger than you, grabs the same quest. As you stare at each other, you stare back at the paper and see that you should be in a party of at least two people. After reading the contents you ask him to go with you. For this quest, you guys are requested to slay 560 udashes. Your window appears saying: Creature: Udashes About: These are wolf-like creatures who are territorial and only attack if threatened.' ,
        options: [['noChoice', 'I meeean, do i really have a choice anyway?'],['goAlone', 'He’s got this, he doesn’t need me right? I’d be okay just training myself in the forest anyway.']],
    },
    // start of branch 2
    freak: { 
        text:' As you freak out because a weird creature is speaking to you, you end up wasting time talking to her all day. By the time she leaves, you find that it’s night has fallen and now monsters will lurk. As you start to panic and look around you, you see monsters start to lunge at you and escapin with a scratch, you start running as fast as you can. Two minutes later you end up bumping into someone. As you turn around thinking that it’s the end, you see the person in front of you spew out some words and suddenly the monsters are gone. In amazement you  stare at him and prepare to tell him something. What will you tell him?',
        option:[['teach', 'Heyyyyyyyy, can you teach me how you did that superhero thing with your hands??'], ['leave', 'I preciate it bro, you saved me big time']],
    },
      // options for freak storyline
    teach: { 
        text:' Seeing as how you’ve accepted his request, you are led into the academy and for the next few years, you are left under Cade’s instructions. *Timeskip* Having been at the academy for around two years now, Cade is ready to send you off onto your first quest mission. It will take around two years and by the time you return, you will be able to graduate and venture off on your own. For this quest, you will be heading out with your fellow classmate Darcy. ',
        option:[['', 'Heyyyyyyyy, can you teach me how you did that superhero thing with your hands??'], ['leave', 'I preciate it bro, you saved me big time']],
    },
    // start of branch 3
    lost: {
        text:'You ended up ignoring the fairy thinking she wouldn\'t make a difference anyway and ended up exploring your surroundings. As you start wandering, you enter the mist-ridden forest where you get lost and you hear the voice of what seems to be another human? As you follow the voice, you find them standing in front of a tree and you introduce yourself. Now that you’ve met her, what will you do?',
        options: [['guide', 'The girl looks at you as if she’s irritated. She says, “No” in a very conceited manner. You find her weird and move along through the forest'],['wierd', 'You find her weird and move along through the forest.']],
    },
 
  
  
};
   
