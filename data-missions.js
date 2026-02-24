// Bulgaars Leren — data-missions.js
// Daily and weekly missions for Bulgarian learning app

var DAILY_MISSIONS = [
  {
    id: "learn_5_words",
    title: "5 nieuwe woorden leren",
    em: "📚",
    desc: "Leer 5 nieuwe Bulgaarse woorden",
    type: "words",
    target: 5,
    xpReward: 25
  },
  {
    id: "earn_50_xp",
    title: "50 XP verdienen",
    em: "⭐",
    desc: "Verzamel 50 XP door activiteiten",
    type: "xp",
    target: 50,
    xpReward: 50
  },
  {
    id: "memory_game",
    title: "Memory spel spelen",
    em: "🧠",
    desc: "Speel een memory spel met Bulgaarse woorden",
    type: "memory",
    target: 1,
    xpReward: 20
  },
  {
    id: "quiz_5",
    title: "Quiz afronden",
    em: "❓",
    desc: "Voltooi een Bulgaarse quiz met 5 vragen",
    type: "quiz",
    target: 1,
    xpReward: 30
  },
  {
    id: "speak_3",
    title: "3 keer spreken oefenen",
    em: "🎤",
    desc: "Oefen 3 keer je Bulgaarse uitspraak",
    type: "speaking",
    target: 3,
    xpReward: 40
  },
  {
    id: "complete_lesson",
    title: "Les voltooien",
    em: "📖",
    desc: "Voltooi een volledige Bulgaarse les",
    type: "lesson",
    target: 1,
    xpReward: 35
  },
  {
    id: "hangman_game",
    title: "Hangman spelen",
    em: "🎮",
    desc: "Speel een Hangman spel met Bulgaarse woorden",
    type: "hangman",
    target: 1,
    xpReward: 25
  },
  {
    id: "read_story",
    title: "Verhaal lezen",
    em: "📕",
    desc: "Lees een Bulgaars kinderverhaal",
    type: "stories",
    target: 1,
    xpReward: 30
  },
  {
    id: "flashcards_10",
    title: "10 Flashcards doen",
    em: "🃏",
    desc: "Oefen met 10 flashcards",
    type: "flashcards",
    target: 10,
    xpReward: 25
  },
  {
    id: "speed_round",
    title: "Speed round afronden",
    em: "⚡",
    desc: "Voltooi een snelle woordtraining",
    type: "speed",
    target: 1,
    xpReward: 35
  },
  {
    id: "grammar_lesson",
    title: "Grammatica oefenen",
    em: "✏️",
    desc: "Maak Bulgaarse grammatica oefeningen",
    type: "grammar",
    target: 1,
    xpReward: 30
  },
  {
    id: "wordsearch",
    title: "Woordzoeker oplossen",
    em: "🔍",
    desc: "Vind Bulgaarse woorden in woordzoeker",
    type: "wordsearch",
    target: 1,
    xpReward: 20
  },
  {
    id: "sentences_5",
    title: "5 zinnen maken",
    em: "💬",
    desc: "Maak 5 Bulgaarse zinnen",
    type: "sentences",
    target: 5,
    xpReward: 28
  },
  {
    id: "culture_read",
    title: "Cultuurpagina lezen",
    em: "🏛️",
    desc: "Lees over Bulgaarse cultuur en tradities",
    type: "culture",
    target: 1,
    xpReward: 25
  },
  {
    id: "earn_100_xp",
    title: "100 XP verzamelen",
    em: "🌟",
    desc: "Verdien 100 XP op één dag",
    type: "xp",
    target: 100,
    xpReward: 75
  },
  {
    id: "learn_10_words",
    title: "10 woorden leren",
    em: "📚📚",
    desc: "Leer 10 nieuwe Bulgaarse woorden",
    type: "words",
    target: 10,
    xpReward: 40
  },
  {
    id: "quiz_perfect",
    title: "Quiz perfectioneren",
    em: "💯",
    desc: "Haal 100% op een quiz",
    type: "quiz",
    target: 1,
    xpReward: 50
  },
  {
    id: "speak_5",
    title: "5 keer spreken",
    em: "🎤🎤",
    desc: "Oefen 5 keer je uitspraak",
    type: "speaking",
    target: 5,
    xpReward: 60
  },
  {
    id: "games_3",
    title: "3 spellen spelen",
    em: "🎲",
    desc: "Voltooi 3 verschillende spellen",
    type: "memory",
    target: 3,
    xpReward: 45
  },
  {
    id: "lesson_expert",
    title: "2 lessen voltooien",
    em: "📖📖",
    desc: "Voltooi 2 volledige lessen",
    type: "lesson",
    target: 2,
    xpReward: 55
  }
];

var WEEKLY_GOALS = [
  {
    id: "weekly_25_words",
    title: "25 woorden van de week",
    em: "📚",
    desc: "Leer deze week 25 nieuwe woorden",
    type: "words",
    target: 25,
    xpReward: 150
  },
  {
    id: "weekly_300_xp",
    title: "300 XP challenge",
    em: "⭐",
    desc: "Verzamel 300 XP deze week",
    type: "xp",
    target: 300,
    xpReward: 200
  },
  {
    id: "weekly_5_day_streak",
    title: "5 dagen streak",
    em: "🔥",
    desc: "Leer 5 dagen achter elkaar",
    type: "streak",
    target: 5,
    xpReward: 180
  },
  {
    id: "weekly_5_lessons",
    title: "5 lessen voltooien",
    em: "📖",
    desc: "Voltooi 5 volledige lessen deze week",
    type: "lessons",
    target: 5,
    xpReward: 175
  },
  {
    id: "weekly_10_games",
    title: "10 spellen spelen",
    em: "🎮",
    desc: "Speel 10 spellen (memory, hangman, etc.)",
    type: "games",
    target: 10,
    xpReward: 160
  },
  {
    id: "weekly_speak_5",
    title: "5 keer spreken oefenen",
    em: "🎤",
    desc: "Oefen je uitspraak 5 keer deze week",
    type: "speaking",
    target: 5,
    xpReward: 170
  },
  {
    id: "weekly_culture_3",
    title: "3 cultuurpagina's lezen",
    em: "🏛️",
    desc: "Verken Bulgaarse cultuur en tradities",
    type: "culture",
    target: 3,
    xpReward: 140
  },
  {
    id: "weekly_all_daily",
    title: "Alle dagmissies 5 dagen",
    em: "✅",
    desc: "Voltooi alle dagmissies voor 5 dagen",
    type: "dailyMissions",
    target: 5,
    xpReward: 250
  }
];

/**
 * Simple hash function to deterministically select missions for a date
 * @param {string} dateStr - Date in YYYY-MM-DD format
 * @returns {Array} Array of 3 daily missions
 */
function getMissionsForDay(dateStr) {
  // Convert date string to a numeric seed
  var seed = 0;
  for (var i = 0; i < dateStr.length; i++) {
    var charCode = dateStr.charCodeAt(i);
    seed = ((seed << 5) - seed) + charCode;
    seed = seed & seed; // Convert to 32-bit integer
  }

  // Use seed to generate 3 unique indices
  var missions = [];
  var used = {};

  for (var j = 0; j < 3; j++) {
    var pseudoRandom = Math.abs(seed + (j * 7919)) % DAILY_MISSIONS.length;

    // Ensure we don't pick the same mission twice
    var attempts = 0;
    while (used[pseudoRandom] && attempts < DAILY_MISSIONS.length) {
      pseudoRandom = (pseudoRandom + 1) % DAILY_MISSIONS.length;
      attempts++;
    }

    used[pseudoRandom] = true;
    missions.push(DAILY_MISSIONS[pseudoRandom]);
  }

  return missions;
}

/**
 * Deterministically select weekly goals for a given week
 * @param {number} weekNum - Week number (0-52)
 * @returns {Array} Array of 3 weekly goals
 */
function getWeeklyGoals(weekNum) {
  // Use week number as seed
  var seed = weekNum * 13337;

  var goals = [];
  var used = {};

  for (var i = 0; i < 3; i++) {
    var pseudoRandom = Math.abs(seed + (i * 11171)) % WEEKLY_GOALS.length;

    // Ensure we don't pick the same goal twice
    var attempts = 0;
    while (used[pseudoRandom] && attempts < WEEKLY_GOALS.length) {
      pseudoRandom = (pseudoRandom + 1) % WEEKLY_GOALS.length;
      attempts++;
    }

    used[pseudoRandom] = true;
    goals.push(WEEKLY_GOALS[pseudoRandom]);
  }

  return goals;
}
