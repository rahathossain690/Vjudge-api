const axios = require('axios')

// const data = async () => {
//     let got = await axios.get('https://vjudge.net/status/data/?draw=1&start=40&length=20&un=&num=-&res=0&language=&inContest=true&contestId=381785');
//     console.log(got.data)
// }

// data();

class Vjudge{
    constructor(){}

    static async remote_ojs(){
        try{
            let response = await axios.get('https://vjudge.net/util/remoteOJs');
            return response.data;
        } catch(err){
            throw Error(err);
        }
    }

    static async solve_count({un}){
        try{
            let response = await axios.get('https://vjudge.net/user/solveDetail/' + un);
            // console.log(response.data);
            return response.data;
        } catch(err){
            throw Error(err);
        }
    }

    static async run_info({run_id}){
        try{
            let response = await axios.get('https://vjudge.net/solution/data/' + run_id);
            // console.log(response.data);
            return response.data;
        } catch(err){
            throw Error(err);
        }
    }

    static async problem({start, length, sortDir, sortCol, OJId, probNum, title, source, category}){
        try{
            let response = await axios.get('https://vjudge.net/problem/data?draw=1&start=' + start + '&length=' + length + '&sortDir= '+ sortDir +'&sortCol=' + sortCol + '&OJId=' + OJId + '&probNum='+probNum+'&title='+title+'&source='+source+'&category=' + category);
            // console.log(response.data);
            console.log('https://vjudge.net/problem/data?draw=1&start=' + start + '&length=' + length + '&sortDir= '+ sortDir +'&sortCol=' + sortCol + '&OJId=' + OJId + '&probNum='+probNum+'&title='+title+'&source='+source+'&category=' + category);
            return response.data;
        } catch(err){
            throw Error(err);
        }
    }
    static async contest_status({start, length, un, num, res, language, inContest, contestId}){
        try{
            // console.log('https://vjudge.net/status/data/?draw=1&start='+start+'&length='+length+'&un='+un+'&num='+num+'&res='+res+'&language='+language+'&inContest='+inContest+'&contestId='+contestId);
            let response = await axios.get('https://vjudge.net/status/data/?draw=1&start='+start+'&length='+length+'&un='+un+'&num='+num+'&res='+res+'&language='+language+'&inContest='+inContest+'&contestId='+contestId);
            // console.log(response.data);
            return response.data;
        } catch(err){
            throw Error(err);
        }
    }
    static async status({start, length, un, num, res, language, inContest, OJId, probNum}){
        try{
            // https://vjudge.net/status/data/?draw=1&start=0&length=20&un=serotonin&num=-&res=0&language=&inContest=false&OJId=All&probNum=EXGCD
            //console.log('https://vjudge.net/status/data/?draw=1&start='+start+'&length='+length+'&un='+un+'&num='+num+'&res='+res+'&language='+language+'&inContest='+inContest+'&OJId='+OJId+'&probNum='+probNum)
            let response = await axios.get('https://vjudge.net/status/data/?draw=1&start='+start+'&length='+length+'&un='+un+'&num='+num+'&res='+res+'&language='+language+'&inContest='+inContest+'&OJId='+OJId+'&probNum='+probNum);
            // console.log(response.data);
            return response.data;
        } catch(err){
            throw Error(err);
        }
    }

    static validate_solve_count({un}){
        if(un && un.length >= 0) return {un};
        throw Error('un not specified');
        return false;
    }
}

// https://vjudge.net/user/solveDetail/serotonin detail of user done 
// https://vjudge.net/solution/data/27812108 done
// https://vjudge.net/status/data/?draw=1&start=40&length=20&un=&num=-&res=0&language=&inContest=true&contestId=381785 in contest
// https://vjudge.net/util/remoteOJs any oj done

// https://vjudge.net/status/data/?draw=1&start=0&length=20&un=serotonin&num=-&res=0&language=&inContest=false&OJId=All&probNum=EXGCD for any

// https://vjudge.net/problem/data?draw=1&start=0&length=100&sortDir=desc&sortCol=5&OJId=CodeForces&probNum=1342&title=&source=&category=all for problem Done

// Vjudge.problem({
//     start: 0,
//     length: 20,
//     sortDir: 'desc',
//     sortCol: 5,
//     OJId: 'All',
//     probNum: '',
//     title: '',
//     source: '',
//     category: 'all'
// }).then(info => {
//     console.log(info);
// }).catch(err => console.error)

// Vjudge.contest_status({
//     start: 0,
//     length: 20,
//     un: '',
//     num: '-',
//     res: 0,
//     language: '',
//     inContest: true,
//     contestId: 381785
// }).then(res => console.log(res))
// .catch(err => console.error)

Vjudge.status({
    start: 0,
    length: 20,
    un: "serotonin",
    num: "-",
    res: "0",
    language: "", 
    inContest: false,
    OJId: "All",
    probNum: ""
}).then(res => console.log(res))
.catch(err => console.err(err))