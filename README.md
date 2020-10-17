# Vjudge-api
Unofficial [Vjudge](https://vjudge.net/) api library for nodejs.

## Install
`$ npm install vjudge-api`

## Usage
```
//ES5
var Vjudge = require('vjudge-api');
 
//ES2015
import Codeforces from 'vjudge-api';
```
## Api
Here's some api level functionalities with example.

### verdicts()
Returns all the verdict expressions used in Vjudge. 

```
console.log( Vjudge.verdicts() ); 

// result
//{
//    "All": 0,
//    "Accepted": 1,
//    "Presentation Error": 2,
//    "Wrong Answer": 3,
//    "Time Limit Exceed": 4,
//    "Memory Limit Exceed": 5,
//    "Output Limit Exceed": 6,
//    "Runtime Error": 7,
//    "Compile Error": 8,
//    "Unknown Error": 9,
//    "Submit Error": 10,
//    "Queuing && Judging": 11
//}
```
### remote_ojs()
Returns all the Online Judges supported by Vjudge system along with their language supports(in json format). It's an asyncronus function.

```
Vjudge.remote_ojs().then(result => console.log(result)).catch(err => console.error(err));

// result
//{
//  SGU: { name: 'SGU', languages: {} },
//  FZU: {
//    name: 'FZU',
//    languages: {
//      '0': 'GNU C++',
//      '1': 'GNU C',
//      '2': 'Pascal',
//      '3': 'Java',
//      '4': 'Visual C++',
//      '5': 'Visual C'
//    }
//  },
//  UVA: {
//    name: 'UVA',
//    languages: {
//      '1': 'ANSI C 5.3.0',
//      '2': 'JAVA 1.8.0',
//      '3': 'C++ 5.3.0',
//      '4': 'PASCAL 3.0.0',
//      '5': 'C++11 5.3.0',
//      '6': 'PYTH3 3.5.1'
//    }
//  },
// // Tons of other informations like this :3
//}
```
### solve_count(options)
Returns all the accepted and failed solution records for one user (problem-numbers along with online judges). It's an asyncronus function.

```
const options = {
    un: "rahathossain690"
}
Vjudge.solve_count(options).then(result => console.log(result)).catch(err => console.error(err));

// result
//{
//  acRecords: {
//    AtCoder: [ 'abc084_d', 'arc099_a', 'soundhound2018_summer_qual_b' ],
//    CodeChef: [ 'PRGIFT', 'DRAGNXOR' ],
//    CodeForces: [
//      '58A',  '21C',   '66B',   '66D',
//      '80A',  '47A',   '47B',   '68A',
//      '68B',  '11A',   '50B',   '131C',
//      '137A', '159A',  '200B',  '84B',
//      '289A', '315A',  '376A',  '379A',
//      '471A', '293A',  '147A',  '509A',
//      '575D', '805A',  '862A',  '926A',
//      '962C', '1006B', '1182B'
//    ],
//    // like this
//  },
//  failRecords: {
//    AtCoder: [ 'arc100_a' ],
//    CodeForces: [ '429D', '862B', '1187C' ],
//    // like this
//  }
//}
```
### problems(options)
Returns all informations about problems, Supports querying, Asynchronus function.

```
const options = {
    start: 0,           // Start position from the problem-list, positive integer, default: 0
    length: 1,          // Length of the output list, positive integer with maximum 100,  default: 20
    sortDir: 'desc',    // 'desc' or 'asc', default: 'desc'
    sortCol: 5,         // Basis column for sorting, default: 5
    OJId: 'LightOJ',    // Online judges, (List can be found from remote_ojs()), default: 'All'
    probNum: '1234',    // Problem number in an online judge, default: '' (no specific problem)
    title: '',          // Default: ''
    source: '',         // Default: ''
    category: ''        // Default: ''
}

Vjudge.problems(options).then(result => console.log(result)).catch(err => console.error(err));

// result
// {
//     data: [
//       {
//         originOJ: 'LightOJ',
//         originProb: '1234',
//         allowSubmit: true,
//         id: 26945,
//         source: '',
//         title: 'Harmonic Number',
//         triggerTime: 1602909550000,
//         isFav: 0,
//         status: 0
//       }
//     ],
//     recordsTotal: 9999999,
//     recordsFiltered: 9999999,
//     draw: 1
// }
```

### status(options)
Returns submission status informations, supports querying. Asynchronus function.

```
const options = {
    start: 0,               // Start position from the problem-list, positive integer, default: 0
    length: 1,              // Length of the output list, positive integer with maximum 20,  default: 20
    un: 'rahathossain690',  // Username of any user, default: '' (no specific user)
    OJId: 'All',            // Online judges, (List can be found from remote_ojs()), default: 'All'
    probNum: '',            // Problem number in an online judge, default: '' (no specific problem)
    res: 1,                 // Vjudge verdict expression, default: 0 (verdicts() function might help)
    language: '',           // Language of the submission, default: ''
    onlyFollowee: 'true'    // Default: true
}

Vjudge.status(options).then(result => console.log(result)).catch(err => console.error(error))

// {
//     data: [
//       {
//         memory: 2092,
//         access: 0,
//         statusType: 0,
//         runtime: 2,
//         language: 'C++',
//         statusCanonical: 'AC',
//         userName: 'rahathossain690',
//         userId: 227541,
//         languageCanonical: 'CPP',
//         contestId: 132789,
//         uDebugUrl: 'https://udebug.com/LOJ/1060',
//         contestNum: 'O',
//         processing: false,
//         runId: 25231746,
//         time: 1586506966000,
//         oj: 'LightOJ',
//         problemId: 26777,
//         sourceLength: 1096,
//         probNum: '1060',
//         status: 'Accepted'
//       }
//     ],
//     recordsTotal: 9999999,
//     recordsFiltered: 9999999,
//     draw: 1
// }
```

### contest_status(options)
Returns submission status informations in contests, supports querying. Asynchronus function.

```
const options = {
    start: 0,               // Start position from the problem-list, positive integer, default: 0
    length: 1,              // Length of the output list, positive integer with maximum 20,  default: 20
    un: 'rahathossain690',  // Username of any user, default: '' (no specific user)
    res: 1,                 // Vjudge verdict expression, default: 0 (verdicts() function might help)
    num: '-',               // Problem number in the contest (As A, B, C,...). Default: '-' (all problems)
    language: '',           // Language of the submission, default: ''
    inContest: true,        // Default: true
    contestId: 353950       // Contest-id can be found in contest links, required.
}

Vjudge.contest_status(options).then(result => console.log(result)).catch(err => console.error(error))

// result
// {
//     data: [
//       {
//         memory: 236,
//         access: 0,
//         statusType: 0,
//         runtime: 92,
//         language: 'GNU G++11 5.1.0',
//         statusCanonical: 'AC',
//         userName: 'rahathossain690',
//         userId: 227541,
//         languageCanonical: 'CPP',
//         contestId: 353950,
//         contestNum: 'G',
//         processing: false,
//         runId: 23858026,
//         time: 1580125710000,
//         problemId: 27808,
//         sourceLength: 969,
//         status: 'Accepted'
//       }
//     ],
//     recordsTotal: 9999999,
//     recordsFiltered: 9999999,
//     draw: 1
//   }
```

### run_info(options)
Returns run-time informations about a particular submission. Asynchronus function.

```
const options = {
    runId: 23858026     // Run-id can be found from status/contest-status, required.
}

Vjudge.run_info(options).then(result => console.log(result)).catch(err => console.error(error))

// result
// {
//     memory: 236,
//     statusType: 0,
//     author: 'rahathossain690',
//     length: 969,
//     runtime: 92,
//     language: 'GNU G++11 5.1.0',
//     statusCanonical: 'AC',
//     authorId: 227541,
//     languageCanonical: 'CPP',
//     codeAccessInfo: 'This code is not shared',
//     contestId: 353950,
//     submitTime: 1580125710000,
//     isOpen: 0,
//     contestNum: 'G',
//     processing: false,
//     runId: 23858026,
//     oj: 'CodeForces',
//     remoteRunId: '69611972',
//     probNum: '159A',
//     status: 'Accepted'
//   }
```

## Contributing
Any kind of Contribution is highly welcomed.

To contribute: Create an issue > Fork > Create own branch > Commit changes > Push the branch > Create pull request

## Todo
1. Contest time ranklist.

This project is inspired from [vlawer](https://github.com/hoenchioma/vlawyer). 
