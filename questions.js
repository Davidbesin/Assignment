//----------------------------
// Question Banks
//----------------------------
// Rules:
// - Template 1: exactly 3 options, one answer letter (A, B or C)
// - Template 2: no options, answers are lowercase (list every accepted form)
// - Template 3: exactly 4 options, answer letters in any order (A to D)

// TEMPLATE 1: Multiple Choice
let template1Questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus"],
        answer: ["B"]
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury"],
        answer: ["C"]
    },
    {
        question: "How many planets are in our Solar System?",
        options: ["7", "8", "9"],
        answer: ["B"]
    },
    {
        question: "Which is the largest planet in our Solar System?",
        options: ["Saturn", "Jupiter", "Neptune"],
        answer: ["B"]
    },
    {
        question: "Which is the smallest planet in our Solar System?",
        options: ["Mercury", "Mars", "Venus"],
        answer: ["A"]
    },
    {
        question: "Which planet is the hottest?",
        options: ["Mercury", "Venus", "Mars"],
        answer: ["B"]
    },
    {
        question: "What is the Sun?",
        options: ["A planet", "A star", "A moon"],
        answer: ["B"]
    },
    {
        question: "Which planet is famous for its rings?",
        options: ["Saturn", "Mars", "Mercury"],
        answer: ["A"]
    },
    {
        question: "Which planet is farthest from the Sun?",
        options: ["Uranus", "Neptune", "Saturn"],
        answer: ["B"]
    },
    {
        question: "What is Earth's natural satellite?",
        options: ["The Moon", "Phobos", "Europa"],
        answer: ["A"]
    },
    {
        question: "Which planet spins on its side?",
        options: ["Neptune", "Uranus", "Jupiter"],
        answer: ["B"]
    },
    {
        question: "Which planet has the Great Red Spot?",
        options: ["Jupiter", "Saturn", "Mars"],
        answer: ["A"]
    },
    {
        question: "Which is the largest moon in our Solar System?",
        options: ["Titan", "Ganymede", "Callisto"],
        answer: ["B"]
    },
    {
        question: "Olympus Mons, the tallest volcano in the Solar System, is on which planet?",
        options: ["Mars", "Venus", "Earth"],
        answer: ["A"]
    },
    {
        question: "Which planet is third from the Sun?",
        options: ["Venus", "Earth", "Mars"],
        answer: ["B"]
    },
    {
        question: "Which planet is often called the Morning Star or Evening Star?",
        options: ["Venus", "Mercury", "Mars"],
        answer: ["A"]
    },
    {
        question: "Where is the main asteroid belt?",
        options: ["Between Earth and Mars", "Between Mars and Jupiter", "Between Saturn and Uranus"],
        answer: ["B"]
    },
    {
        question: "About how long does sunlight take to reach Earth?",
        options: ["8 seconds", "8 minutes", "8 hours"],
        answer: ["B"]
    },
    {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "The Milky Way", "Triangulum"],
        answer: ["B"]
    },
    {
        question: "Which planet has the shortest day?",
        options: ["Earth", "Jupiter", "Mercury"],
        answer: ["B"]
    }
];

// TEMPLATE 2: Fill in the Gap
let template2Questions = [
    {
        question: "The largest planet in our Solar System is ______.",
        options: [],
        answer: ["jupiter"]
    },
    {
        question: "The planet famous for its prominent rings is ______.",
        options: [],
        answer: ["saturn"]
    },
    {
        question: "Earth takes approximately ______ to orbit the Sun once.",
        options: [],
        answer: ["365 days", "365", "one year", "a year", "1 year"]
    },
    {
        question: "The planet closest to the Sun is ______.",
        options: [],
        answer: ["mercury"]
    },
    {
        question: "The Red Planet is ______.",
        options: [],
        answer: ["mars"]
    },
    {
        question: "Our galaxy is called the ______.",
        options: [],
        answer: ["milky way", "the milky way"]
    },
    {
        question: "At the center of our Solar System is the ______.",
        options: [],
        answer: ["sun", "the sun"]
    },
    {
        question: "Earth's only natural satellite is the ______.",
        options: [],
        answer: ["moon", "the moon"]
    },
    {
        question: "The planet farthest from the Sun is ______.",
        options: [],
        answer: ["neptune"]
    },
    {
        question: "The largest moon of Jupiter is ______.",
        options: [],
        answer: ["ganymede"]
    },
    {
        question: "The hottest planet in our Solar System is ______.",
        options: [],
        answer: ["venus"]
    },
    {
        question: "Mars has two moons: Phobos and ______.",
        options: [],
        answer: ["deimos"]
    },
    {
        question: "The Sun produces energy through nuclear ______.",
        options: [],
        answer: ["fusion"]
    },
    {
        question: "Pluto is classified as a ______ planet.",
        options: [],
        answer: ["dwarf"]
    },
    {
        question: "The seventh planet from the Sun is ______.",
        options: [],
        answer: ["uranus"]
    },
    {
        question: "The force that keeps the planets in orbit around the Sun is ______.",
        options: [],
        answer: ["gravity"]
    },
    {
        question: "Earth rotates once on its axis about every ______ hours.",
        options: [],
        answer: ["24", "24 hours", "twenty four", "twenty-four"]
    },
    {
        question: "The planet with the most famous storm, the Great Red Spot, is ______.",
        options: [],
        answer: ["jupiter"]
    }
];

// TEMPLATE 3: Multiple Answers
let template3Questions = [
    {
        question: "Which of these are planets in our Solar System?",
        options: ["Mars", "Pluto", "Jupiter", "Venus"],
        answer: ["A", "C", "D"]
    },
    {
        question: "Which of these are natural satellites?",
        options: ["The Moon", "Phobos", "The Sun", "Europa"],
        answer: ["A", "B", "D"]
    },
    {
        question: "Which of these planets are gas giants?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: ["B", "C"]
    },
    {
        question: "Which of these are inner planets?",
        options: ["Mercury", "Venus", "Jupiter", "Earth"],
        answer: ["A", "B", "D"]
    },
    {
        question: "Which of these planets have rings?",
        options: ["Saturn", "Mars", "Uranus", "Neptune"],
        answer: ["A", "C", "D"]
    },
    {
        question: "Which of these are moons of Jupiter?",
        options: ["Io", "Titan", "Europa", "Triton"],
        answer: ["A", "C"]
    },
    {
        question: "Which of these are rocky (terrestrial) planets?",
        options: ["Mercury", "Saturn", "Mars", "Neptune"],
        answer: ["A", "C"]
    },
    {
        question: "Which of these are stars?",
        options: ["The Sun", "Sirius", "Earth", "Polaris"],
        answer: ["A", "B", "D"]
    },
    {
        question: "Which of these planets have no moons?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: ["A", "B"]
    },
    {
        question: "Which of these are ice giants?",
        options: ["Uranus", "Jupiter", "Neptune", "Saturn"],
        answer: ["A", "C"]
    },
    {
        question: "Which of these planets are smaller than Earth?",
        options: ["Mercury", "Mars", "Jupiter", "Venus"],
        answer: ["A", "B", "D"]
    },
    {
        question: "Which of these are dwarf planets?",
        options: ["Pluto", "Ceres", "Mars", "Eris"],
        answer: ["A", "B", "D"]
    },
    {
        question: "Which of these are moons of Saturn?",
        options: ["Titan", "Enceladus", "Europa", "Ganymede"],
        answer: ["A", "B"]
    },
    {
        question: "Which of these planets can be seen with the naked eye?",
        options: ["Venus", "Mars", "Neptune", "Jupiter"],
        answer: ["A", "B", "D"]
    },
    {
        question: "Which of these planets are farther from the Sun than Saturn?",
        options: ["Uranus", "Neptune", "Jupiter", "Mars"],
        answer: ["A", "B"]
    }
];
