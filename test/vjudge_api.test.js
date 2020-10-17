const vjudge_api = require('../index')


describe('solve_count', ()=>{
    test('with empty peramiter', () => { 
        expect( vjudge_api.solve_count() ).rejects.toThrow('un is required and should be a non-empty string');
    })

    test('with wrong peramiter', () => {
        expect( vjudge_api.solve_count({bad: "new bad"}) ).rejects.toThrow('un is required and should be a non-empty string');
    })

    test('with wrong username', () => {
        expect( vjudge_api.solve_count({un: "rahathon680"}) ).rejects.toThrow('Request failed with status code 500');
    })

    test('with correct username', () => {
        const oj_data_rahathossain690 = {
            "acRecords": {
              "AtCoder": [
                "abc084_d",
                "arc099_a",
                "soundhound2018_summer_qual_b"
              ],
              "CodeChef": [
                "PRGIFT",
                "DRAGNXOR"
              ],
              "CodeForces": [
                "58A",
                "21C",
                "66B",
                "66D",
                "80A",
                "47A",
                "47B",
                "68A",
                "68B",
                "11A",
                "50B",
                "131C",
                "137A",
                "159A",
                "200B",
                "84B",
                "289A",
                "315A",
                "376A",
                "379A",
                "471A",
                "293A",
                "147A",
                "509A",
                "575D",
                "805A",
                "862A",
                "926A",
                "962C",
                "1006B",
                "1182B"
              ],
              "EOlymp": [
                "1013"
              ],
              "Gym": [
                "100796F",
                "101291A",
                "101291F",
                "101291K",
                "101291M",
                "101350B",
                "101350H",
                "101853D",
                "101853F",
                "101853H",
                "101853I",
                "101853J",
                "102267B",
                "102419A",
                "102419C",
                "102419E",
                "102419L"
              ],
              "HackerRank": [
                "pangrams",
                "fair-cake-cutting"
              ],
              "Kattis": [
                "zamka",
                "abc",
                "quickestimate"
              ],
              "LightOJ": [
                "1003",
                "1008",
                "1010",
                "1012",
                "1018",
                "1020",
                "1021",
                "1022",
                "1026",
                "1032",
                "1037",
                "1040",
                "1042",
                "1307",
                "1173",
                "1049",
                "1045",
                "1052",
                "1057",
                "1059",
                "1060",
                "1062",
                "1063",
                "1065",
                "1068",
                "1070",
                "1072",
                "1076",
                "1077",
                "1083",
                "1085",
                "1088",
                "1089",
                "1094",
                "1096",
                "1100",
                "1107",
                "1109",
                "1111",
                "1116",
                "1122",
                "1125",
                "1129",
                "1134",
                "1135",
                "1136",
                "1141",
                "1146",
                "1164",
                "1166",
                "1170",
                "1174",
                "1190",
                "1201",
                "1202",
                "1203",
                "1210",
                "1211",
                "1214",
                "1216",
                "1239",
                "1248",
                "1257",
                "1258",
                "1276",
                "1285",
                "1291",
                "1292",
                "1298",
                "1300",
                "1301",
                "1305",
                "1311",
                "1319",
                "1322",
                "1328",
                "1331",
                "1333",
                "1382",
                "1389",
                "1414",
                "1417",
                "1425"
              ],
              "SPOJ": [
                "GERGOVIA",
                "GEOPROB",
                "FANCY",
                "GOALFR",
                "SNGINT",
                "AGPC01D",
                "AGPC01F",
                "VEXPROF"
              ],
              "URAL": [
                "1000",
                "1225",
                "2045"
              ],
              "UVA": [
                "11995",
                "11850",
                "10242",
                "839",
                "11121",
                "10791",
                "10589",
                "10026",
                "10954",
                "11401",
                "10079",
                "11876",
                "12060",
                "11727",
                "10432",
                "10324",
                "10286",
                "11244",
                "11246",
                "737",
                "12852",
                "12853",
                "1709",
                "1730"
              ],
              "UVALive": [
                "3473",
                "6918"
              ]
            },
            "failRecords": {
              "AtCoder": [
                "arc100_a"
              ],
              "CodeForces": [
                "429D",
                "862B",
                "1187C"
              ],
              "Gym": [
                "101291B",
                "101291G",
                "102367B"
              ],
              "HackerRank": [
                "aorb",
                "short-palindrome"
              ],
              "LightOJ": [
                "1058",
                "1071",
                "1079",
                "1149",
                "1185",
                "1233",
                "1256",
                "1357",
                "1379"
              ],
              "POJ": [
                "2689"
              ],
              "SPOJ": [
                "IPL1",
                "HG",
                "POWPOW2",
                "MSCHED",
                "ADAGCD"
              ],
              "URAL": [
                "1750",
                "1183"
              ],
              "UVA": [
                "573",
                "11345",
                "10819",
                "11436",
                "11247",
                "11055",
                "11264",
                "11491"
              ],
              "UVALive": [
                "4739"
              ]
            }
          } // data of 17 oct, 2020
        expect( vjudge_api.solve_count({un: "rahathossain690"}) ).resolves.toStrictEqual(oj_data_rahathossain690);
    })
})

describe('remote_ojs', ()=>{

    test('remote_ojs', ()=>{
        const last_oj_data = {
        "SGU": {
          "name": "SGU",
          "languages": {
            
          }
        },
        "FZU": {
          "name": "FZU",
          "languages": {
            "0": "GNU C++",
            "1": "GNU C",
            "2": "Pascal",
            "3": "Java",
            "4": "Visual C++",
            "5": "Visual C"
          }
        },
        "UVA": {
          "name": "UVA",
          "languages": {
            "1": "ANSI C 5.3.0",
            "2": "JAVA 1.8.0",
            "3": "C++ 5.3.0",
            "4": "PASCAL 3.0.0",
            "5": "C++11 5.3.0",
            "6": "PYTH3 3.5.1"
          }
        },
        "HRBUST": {
          "name": "HRBUST",
          "languages": {
            "1": "GCC",
            "2": "G++",
            "3": "JAVA",
            "4": "PHP",
            "5": "Python2",
            "7": "Haskell"
          }
        },
        "SCU": {
          "name": "SCU",
          "languages": {
            "C++": "C++",
            "C": "C",
            "Java": "Java",
            "Pascal": "Pascal"
          }
        },
        "51Nod": {
          "name": "51Nod",
          "languages": {
            "1": "C",
            "2": "C 11",
            "11": "C++",
            "12": "C++ 11",
            "21": "C#",
            "31": "Java",
            "41": "Python2",
            "42": "Python3",
            "45": "PyPy2",
            "46": "PyPy3",
            "51": "Ruby",
            "61": "Php",
            "71": "Haskell",
            "81": "Scala",
            "91": "Javascript",
            "101": "Go",
            "111": "Visual C++",
            "121": "Objective C",
            "131": "Pascal"
          }
        },
        "TopCoder": {
          "name": "TopCoder",
          "languages": {
            "1": "Java",
            "3": "C++",
            "4": "C#",
            "5": "VB",
            "6": "Python"
          }
        },
        "Z_trening": {
          "name": "Z_trening",
          "languages": {
            "1": "Pascal fpc 3.0.0",
            "2": "C gcc 6.3.1",
            "3": "C99 gcc 6.3.1",
            "4": "C++98 gcc 6.3.1",
            "5": "C++11 gcc 6.3.1",
            "6": "C++14 gcc 6.3.1",
            "7": "Java gcc-gcj 6.3.1"
          }
        },
        "HUST": {
          "name": "HUST",
          "languages": {
            "0": "C",
            "1": "C++",
            "2": "Pascal",
            "3": "Java"
          }
        },
        "EOlymp": {
          "name": "EOlymp",
          "languages": {
            "csharp": "C#",
            "gpp": "C++",
            "go": "Go",
            "haskell": "Haskell",
            "java": "Java",
            "js": "JavaScript",
            "kotlin": "Kotlin",
            "fpc": "Pascal",
            "php": "PHP",
            "python": "Python",
            "ruby": "Ruby",
            "rust": "Rust"
          }
        },
        "HackerRank": {
          "name": "HackerRank",
          "languages": {
            "c": "c",
            "cpp": "cpp",
            "java": "java",
            "csharp": "csharp",
            "php": "php",
            "ruby": "ruby",
            "python": "python",
            "perl": "perl",
            "haskell": "haskell",
            "clojure": "clojure",
            "scala": "scala",
            "lua": "lua",
            "go": "go",
            "javascript": "javascript",
            "erlang": "erlang",
            "d": "d",
            "ocaml": "ocaml",
            "pascal": "pascal",
            "python3": "python3",
            "groovy": "groovy",
            "objectivec": "objectivec",
            "fsharp": "fsharp",
            "visualbasic": "visualbasic",
            "lolcode": "lolcode",
            "smalltalk": "smalltalk",
            "tcl": "tcl",
            "whitespace": "whitespace",
            "sbcl": "sbcl",
            "java8": "java8",
            "octave": "octave",
            "racket": "racket",
            "rust": "rust",
            "bash": "bash",
            "r": "r",
            "swift": "swift",
            "fortran": "fortran",
            "cpp14": "cpp14",
            "coffeescript": "coffeescript",
            "ada": "ada",
            "pypy": "pypy",
            "pypy3": "pypy3",
            "julia": "julia",
            "elixir": "elixir"
          }
        },
        "LibreOJ": {
          "name": "LibreOJ",
          "languages": {
            "cpp": "C++ GCC 8.2.0",
            "cpp11": "C++ 11 GCC 8.2.0",
            "cpp17": "C++ 17 GCC 8.2.0",
            "cpp-noilinux": "C++ (NOI) GCC 4.8.4 (NOILinux 1.4.1)",
            "cpp11-noilinux": "C++ 11 (NOI) GCC 4.8.4 (NOILinux 1.4.1)",
            "cpp11-clang": "C++ 11 (Clang) Clang 7.0.1",
            "cpp17-clang": "C++ 17 (Clang) Clang 7.0.1",
            "c": "C Clang 7.0.1",
            "c-noilinux": "C (NOI) GCC 4.8.4 (NOILinux 1.4.1)",
            "csharp": "C# Mono 5.16.0.220",
            "java": "Java OpenJDK 10.0.2",
            "pascal": "Pascal Free Pascal 3.0.4",
            "python2": "Python 2 PyPy 6.0.0 (Python 2.7.13)",
            "python3": "Python 3 PyPy 6.0.0 (Python 3.5.3)",
            "nodejs": "Node.js 10.14.0",
            "ruby": "Ruby 2.5.1",
            "haskell": "Haskell GHC 8.6.2"
          }
        },
        "OpenJ_Bailian": {
          "name": "OpenJ_Bailian",
          "languages": {
            "G++": "G++(5.3)",
            "GCC": "GCC(5.3)",
            "Java": "Java(OpenJDK9)",
            "Pascal": "Pascal(FreePascal)",
            "Python2": "Python2(2.7)",
            "Python3": "Python3(3.5)",
            "C#": "C#(mono4.2)",
            "Racket": "Racket(6.5)"
          }
        },
        "HDU": {
          "name": "HDU",
          "languages": {
            "0": "G++",
            "1": "GCC",
            "2": "C++",
            "3": "C",
            "4": "Pascal",
            "5": "Java",
            "6": "C#"
          }
        },
        "UESTC_old": {
          "name": "UESTC_old",
          "languages": {
            
          }
        },
        "AtCoder": {
          "name": "AtCoder",
          "languages": {
            
          }
        },
        "HYSBZ": {
          "name": "HYSBZ",
          "languages": {
            "0": "C",
            "1": "C++",
            "2": "Pascal",
            "3": "Java",
            "6": "Python"
          }
        },
        "Gym": {
          "name": "Gym",
          "languages": {
            
          }
        },
        "Aizu": {
          "name": "Aizu",
          "languages": {
            "C": "C",
            "C++": "C++",
            "JAVA": "JAVA",
            "C++11": "C++11",
            "C++14": "C++14",
            "C#": "C#",
            "D": "D",
            "Ruby": "Ruby",
            "Python": "Python",
            "Python3": "Python3",
            "PHP": "PHP",
            "JavaScript": "JavaScript",
            "Scala": "Scala",
            "Haskell": "Haskell",
            "OCaml": "OCaml",
            "Rust": "Rust",
            "Go": "Go",
            "Kotlin": "Kotlin"
          }
        },
        "SPOJ": {
          "name": "SPOJ",
          "languages": {
            
          }
        },
        "CodeForces": {
          "name": "CodeForces",
          "languages": {
            
          }
        },
        "ACdream": {
          "name": "ACdream",
          "languages": {
            "1": "C",
            "2": "C++",
            "3": "Java"
          }
        },
        "CSU": {
          "name": "CSU",
          "languages": {
            "0": "C",
            "1": "C++",
            "3": "Java",
            "6": "Python"
          }
        },
        "CodeChef": {
          "name": "CodeChef",
          "languages": {
            
          }
        },
        "UVALive": {
          "name": "UVALive",
          "languages": {
            "1": "ANSI C 5.3.0",
            "2": "JAVA 1.8.0",
            "3": "C++ 5.3.0",
            "4": "PASCAL 3.0.0",
            "5": "C++11 5.3.0",
            "6": "PYTH3 3.5.1"
          }
        },
        "OpenJ_POJ": {
          "name": "OpenJ_POJ",
          "languages": {
            "G++": "G++(5.3)",
            "GCC": "GCC(5.3)",
            "Java": "Java(OpenJDK9)",
            "Pascal": "Pascal(FreePascal)"
          }
        },
        "Kattis": {
          "name": "Kattis",
          "languages": {
            "C": "C",
            "C#": "C#",
            "C++": "C++",
            "COBOL": "COBOL",
            "Common Lisp": "Common Lisp",
            "F#": "F#",
            "Go": "Go",
            "Haskell": "Haskell",
            "Java": "Java",
            "JavaScript (Node.js)": "JavaScript (Node.js)",
            "JavaScript (SpiderMonkey)": "JavaScript (SpiderMonkey)",
            "Kotlin": "Kotlin",
            "Objective-C": "Objective-C",
            "OCaml": "OCaml",
            "Pascal": "Pascal",
            "PHP": "PHP",
            "Prolog": "Prolog",
            "Python 2": "Python 2",
            "Python 3": "Python 3",
            "Ruby": "Ruby",
            "Rust": "Rust"
          }
        },
        "POJ": {
          "name": "POJ",
          "languages": {
            "0": "G++",
            "1": "GCC",
            "2": "Java",
            "3": "Pascal",
            "4": "C++",
            "5": "C",
            "6": "Fortran"
          }
        },
        "HihoCoder": {
          "name": "HihoCoder",
          "languages": {
            "GCC": "GCC",
            "G++": "G++",
            "C#": "C#",
            "Java": "Java",
            "Python2": "Python2"
          }
        },
        "URAL": {
          "name": "URAL",
          "languages": {
            
          }
        },
        "HIT": {
          "name": "HIT",
          "languages": {
            "C++": "C++",
            "C89": "C89",
            "Java": "Java",
            "Pascal": "Pascal"
          }
        },
        "LightOJ": {
          "name": "LightOJ",
          "languages": {
            "C": "C",
            "C++": "C++",
            "JAVA": "JAVA",
            "PASCAL": "PASCAL"
          }
        },
        "ZOJ": {
          "name": "ZOJ",
          "languages": {
            "GCC": "C (gcc 4.7.2)",
            "GXX": "C++ (g++ 6.4.0)",
            "JAVAC": "Java (java 1.8.0)",
            "PYTHON2": "Python (python 2.7.12)",
            "PYTHON3": "Python (python 3.6.5)"
          }
        },
        "Minieye": {
          "name": "Minieye",
          "languages": {
            "C": "GCC 5.4",
            "C++": "G++ 5.4",
            "Java": "OpenJDK 1.8",
            "Python3": "Python 3.5",
            "Golang": "Go 1.11"
          }
        },
        "NBUT": {
          "name": "NBUT",
          "languages": {
            "1": "GCC",
            "2": "G++",
            "4": "FPC"
          }
        },
        "EIJudge": {
          "name": "EIJudge",
          "languages": {
            "Free Pascal": "Free Pascal 1.8.2",
            "GNU C": "GNU C 3.3.3",
            "GNU C++": "GNU C++ 3.3.3",
            "Haskell": "Haskell GC 6.8.2",
            "Java": "java 1.5.0",
            "Kylix": "Kylix 14.5",
            "Lua": "Lua 5.1.3",
            "OCaml": "Objective Caml 3.10.2",
            "Perl": "Perl 5.8.5",
            "Python": "Python 2.1.3",
            "Ruby": "Ruby 1.8.6",
            "Scheme": "mzScheme 301 Swindle"
          }
        },
        "计蒜客": {
          "name": "计蒜客",
          "languages": {
            "c": "C",
            "c_noi": "C (NOI)",
            "c++": "C++11",
            "c++14": "C++14",
            "c++_noi": "C++ (NOI)",
            "java": "Java",
            "python": "Python 2.7",
            "python3": "Python 3.5",
            "ruby": "Ruby",
            "octave": "Octave",
            "pascal": "Pascal",
            "go": "Go"
          }
        },
        "UESTC": {
          "name": "UESTC",
          "languages": {
            "1": "C",
            "2": "C++",
            "3": "Java"
          }
        }
      }; // data of 17 oct, 2020
        expect(vjudge_api.remote_ojs()).resolves.toStrictEqual(last_oj_data);
    })

})

describe('run_info', ()=>{

    test('with empty peramiter', ()=>{
        expect(vjudge_api.run_info()).rejects.toThrow('runId is required and should be a number');
    })

    test('with wrong type', ()=>{
        expect(vjudge_api.run_info({runId: "hello"})).rejects.toThrow('runId is required and should be a number');
    })

    test('with wrong peramiter', ()=>{
        expect(vjudge_api.run_info({runId: "hello"})).rejects.toThrow('runId is required and should be a number');
    })

    test('with correct peramiter', ()=>{
        const data_for_27812108 = {
            "statusType": 1,
            "author": "Averenkov",
            "length": 4867,
            "language": "C++17(gcc 9.1)",
            "statusCanonical": "WA",
            "authorId": 365174,
            "languageCanonical": "CPP",
            "codeAccessInfo": "This code is not shared",
            "contestId": 388688,
            "submitTime": 1602881296000,
            "isOpen": 0,
            "contestNum": "D",
            "processing": false,
            "runId": 27812108,
            "oj": "CodeChef",
            "remoteRunId": "38969069",
            "probNum": "CLUNQUE",
            "status": "Wrong Answer"
          }
        expect(vjudge_api.run_info({runId: 27812108})).resolves.toStrictEqual(data_for_27812108);
    })

})


describe('problem', ()=>{
    
    test('no peramiter but valid', ()=>{
        expect( vjudge_api.problem() ).resolves;
    })

    test('different start type', ()=>{
        expect( vjudge_api.problem({start : "haha"}) ).rejects.toThrow('start should be a positive number');
    })

    test('start to be negetive', ()=>{
        expect( vjudge_api.problem({start : -10}) ).rejects.toThrow('start should be a positive number');
    })

    test('start to be floating point', ()=>{
        expect( vjudge_api.problem({start : 1.2}) ).rejects.toThrow('start should be a positive number');
    })

    test('different length type', ()=>{
        expect( vjudge_api.problem({length : "haha"}) ).rejects.toThrow('length should be an integer between 1 and 20');
    })

    test('length to be negetive', ()=>{
        expect( vjudge_api.problem({length : -10}) ).rejects.toThrow('length should be an integer between 1 and 20');
    })

    test('length to be floating point', ()=>{
        expect( vjudge_api.problem({length : 1.2}) ).rejects.toThrow('length should be an integer between 1 and 20');
    })

    test('length to be more than 20', ()=>{
        expect( vjudge_api.problem({length : 40}) ).rejects.toThrow('length should be an integer between 1 and 20');
    })

    test('sortDir to be other thing', () => {
        expect( vjudge_api.problem({sortDir: "bleh"}) ).rejects.toThrow('sortDir should be either desc or asc');
    })

    test('OJId to be other thing', () => {
        expect( vjudge_api.problem({OJId: 69}) ).rejects.toThrow('OJId should be string')
    })

    test('probNum to be other thing', () => {
        expect( vjudge_api.problem({probNum: 69}) ).rejects.toThrow('probNum should be string')
    })

    test('title to be other thing', () => {
        expect( vjudge_api.problem({title: 69}) ).rejects.toThrow('title should be string')
    })

    test('source to be other thing', () => {
        expect( vjudge_api.problem({source: 69}) ).rejects.toThrow('source should be string')
    })

    test('category to be other thing', () => {
        expect( vjudge_api.problem({category: 69}) ).rejects.toThrow('category should be string')
    })

})

describe('contest_status', ()=>{

    test('no peremiter', () => {
        expect( vjudge_api.contest_status() ).rejects.toThrow('contestId is required and should be string');
    })

    test('start with different value', ()=>{
        expect( vjudge_api.contest_status({start: "haha"}) ).rejects.toThrow("start should be a positive integer");
    });

    test('length with different value', () => {
        expect( vjudge_api.contest_status({length: "haha"}) ).rejects.toThrow("length should be an integer between 1 and 20");
    })

    test('length with value more than 20', () => {
        expect( vjudge_api.contest_status({length: 100}) ).rejects.toThrow("length should be an integer between 1 and 20");
    })

    test('un with different value', ()=>{
        expect( vjudge_api.contest_status({un: 100})).rejects.toThrow("un should be string");
    })

    test('num with different value', ()=>{
        expect( vjudge_api.contest_status({num: 100})).rejects.toThrow("num should be string");
    })

    test('res with different value', ()=>{
        expect( vjudge_api.contest_status({res: "haha"})).rejects.toThrow("res should be a positive integer between 0 and 11");
    })

    test('res with value more than 11', ()=>{
        expect( vjudge_api.contest_status({res: 20})).rejects.toThrow("res should be a positive integer between 0 and 11");
    })

    test('language with different value', ()=>{
        expect( vjudge_api.contest_status({language: 100})).rejects.toThrow("language should be string");
    })

    test('inContest with different value', ()=>{
        expect( vjudge_api.contest_status({inContest: 100})).rejects.toThrow("inContest should be boolean");
    })

    test('contestId with different value', ()=>{
        expect( vjudge_api.contest_status({contestId: "haha"})).rejects.toThrow("contestId is required and should be string");
    })

})

describe('status', ()=>{
    test('no peremiter', () => {
        expect( vjudge_api.status() ).resolves;
    })  

    test('start with different value', ()=>{
        expect( vjudge_api.status({start: "haha"}) ).rejects.toThrow("start should be a positive integer");
    });

    test('length with different value', () => {
        expect( vjudge_api.status({length: "haha"}) ).rejects.toThrow("length should be an integer between 1 and 20");
    })

    test('length with value more than 20', () => {
        expect( vjudge_api.status({length: 100}) ).rejects.toThrow("length should be an integer between 1 and 20");
    })

    test('un with different value', ()=>{
        expect( vjudge_api.status({un: 100})).rejects.toThrow("un should be string");
    })

    test('res with different value', ()=>{
        expect( vjudge_api.status({res: "haha"})).rejects.toThrow("res should be a positive integer between 0 and 11");
    })

    test('res with value more than 11', ()=>{
        expect( vjudge_api.status({res: 20})).rejects.toThrow("res should be a positive integer between 0 and 11");
    })

    test('language with different value', ()=>{
        expect( vjudge_api.status({language: 100})).rejects.toThrow("language should be string");
    })

    test('onlyFolowee with different value', ()=>{
        expect( vjudge_api.status({onlyFolowee: "haha"})).rejects.toThrow("onlyFolowee should be boolean");
    })
})

describe("verditcs", () => {
    expect( vjudge_api.verdicts() ).toStrictEqual({
        'All': 0,
        'Accepted': 1,
        'Presentation Error': 2,
        'Wrong Answer': 3,
        'Time Limit Exceed': 4,
        'Memory Limit Exceed': 5,
        'Output Limit Exceed': 6,
        'Runtime Error': 7,
        'Compile Error': 8,
        'Unknown Error': 9,
        'Submit Error': 10,
        'Queuing && Judging': 11
      });
})