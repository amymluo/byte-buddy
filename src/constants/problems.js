export var PROBLEMS = [
    {
        id: 1,
        name: "Time Conversion",
        problemStatement: "Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.",
        inputFormat: "A single string containing a time in 12-hour clock format (ie: hh:mm:ssAM or hh:mm:ssPM), where 01 <= hh <= 12 and 01 <= mm, ss<= 59.",
        outputFormat: "Convert and print the given time in 24-hour format, where 00 <= hh <= 23",
        sampleInput : "07:05:24PM",
        sampleOutput: "19:05:45",
        starterCode:""
    },
    {
        id: 2,
        name: "Reverse Integer",
        problemStatement: "Given a 32-bit signed integer, reverse digits of an integer.",
        inputFormat: "A 32-bit signed integer",
        outputFormat: "Reverse digits of given integer",
        sampleInput : "123",
        sampleOutput: "321",
        starterCode:""
    },
    {
        id: 3,
        name: "Forming a Magic Square",
        problemStatement: "A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum. Given an grid of integers, how many 3 x 3 'magic square' subgrids are there?  (Each subgrid is contiguous).",
        inputFormat: "a Grid: List[List[int]]",
        outputFormat: "int: number of magic squares in grid",
        sampleInput : "[[4,3,8,4], \n [9,5,1,9], \n [2,7,6,2]]",
        sampleOutput: "1",
        starterCode:""
    },
    {
        id: 4,
        name: "Simple Array Sum",
        problemStatement: "Given an array of N integers, can you find the sum of its elements",
        inputFormat: "The first line contains an integer, N, denoting the size of the array. The second line contains N space-separated integers representing the array’s elements.",
        outputFormat: "sum of array",
        sampleInput : "6 \n 1 2 3 4 10 11",
        sampleOutput: "31",
        starterCode:""
    },
    {
        id: 5,
        name: "Reverse Integer",
        problemStatement: "Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.",
        inputFormat: "",
        outputFormat: "",
        sampleInput : "",
        sampleOutput: "",
        starterCode:""
    },


]

export var PROBLEM_INFO = [
        {id: 1, name: "Time Conversion", difficulty: "Easy", points: 5, isSolved: false, isShown: true},
        {id: 2, name: "Reverse Integer", difficulty: "Medium", points: 5, isSolved: true, isShown: true},
        {id: 3, name: "Forming a Magic Square", difficulty: "Easy", points: 7, isSolved: false, isShown: true},
        {id: 4, name: "Simple Array Sum", difficulty: "Hard", points: 10, isSolved: true, isShown: true}
]

export var HINTS = [
    {
        id: 1,
        hints: ["Try looking at string formatting"]
    },
    {
        id: 2,
        hints: ["We can build up the reverse integer one digit at a time", 'To "pop" and "push" digits without the help of some auxiliary stack/array, we can use math.']
    },
    {
        id: 3,
        hints: ["Check every 3x3 grid individually."]
    },
    {
        id: 4,
        hints: ["Try keeping track of the answer so far as you build up to the answer."]
    },
]

export var SOLUTIONS = [
    {
        id: 1,
        solutions: [""]
    }
]

export var DISCUSSION = [
    {
        id: 1,
        discussions: []
    }
]