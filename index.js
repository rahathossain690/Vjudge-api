const axios = require('axios')

class Vjudge{
    constructor(){
    }

    static verdicts(){
        return {
            "All": 0,
            "Accepted": 1,
            "Presentation Error": 2,
            "Wrong Answer": 3,
            "Time Limit Exceed": 4,
            "Memory Limit Exceed": 5,
            "Output Limit Exceed": 6,
            "Runtime Error": 7,
            "Compile Error": 8,
            "Unknown Error": 9,
            "Submit Error": 10,
            "Queuing && Judging": 11
        }
    }

    static async remote_ojs(){ 
        try{
            let response = await axios.get('https://vjudge.net/util/remoteOJs');
            return response.data;
        } catch(err){
            throw new Error(err);
        }
    }

    static async solve_count(data){ 
        try{
            data = this.validate_solve_count(data);
            let response = await axios.get('https://vjudge.net/user/solveDetail/' + data.un);
            return response.data;
        } catch(err){
            throw new Error(err);
        }
    }

    static async run_info(data){
        try{
            data = this.validate_run_info(data);
            let response = await axios.get('https://vjudge.net/solution/data/' + data.runId);
            return response.data;
        } catch(err){
            throw new Error(err);
        }
    }

    static async problems(data){
        try{ 
            data = this.validate_problems(data);
            let response = await axios.get('https://vjudge.net/problem/data?draw=1&start=' + data.start + '&length=' + data.length + '&sortDir= '+ data.sortDir +'&sortCol=' + data.sortCol + '&OJId=' + data.OJId + '&probNum='+data.probNum+'&title='+data.title+'&source='+data.source+'&category=' + data.category);
            return response.data;
        } catch(err){
            throw new Error(err);
        }
    }
    static async contest_status(data){
        try{
            data = this.validate_contest_status(data); 
            let response = await axios.get('https://vjudge.net/status/data?draw=1&start='+data.start+'&length='+data.length+'&un='+data.un+'&num='+data.num+'&res='+data.res+'&language='+data.language+'&inContest='+data.inContest+'&contestId='+data.contestId);
            return response.data;
        } catch(err){
            throw new Error(err);
        }
    }
    static async status(data){
        try{
            data = this.validate_status(data); 
            let response = await axios.get('https://vjudge.net/status/data/?draw=1&start='+data.start+'&length='+data.length+'&un='+data.un+'&OJId='+data.OJId+'&probNum='+data.probNum+'&res='+data.res+'&language='+data.language+'&onlyFollowee='+data.onlyFolowee);
            return response.data;
        } catch(err){
            throw new Error(err);
        }
    }

    static validate_solve_count(data){
        try{
            if(data == null) data = {};
            if(typeof(data.un) == 'string' && data.un.length >= 0) return data;
            else throw new Error();
        } catch(err){
            throw new Error('un is required and should be a non-empty string');
        }
    }

    static validate_run_info(data){
        try{
            if(data == null) data = {};
            if(typeof(data.runId) == 'number') return data;
            else throw new Error();
        } catch(err){
            throw new Error('runId is required and should be a number');
        }
    }

    static validate_problems(data){
        try{
            if(data == null) data = {};

            let {start, length, sortDir, sortCol, OJId, probNum, title, source, category} = data, new_data = {};
            
            if(typeof(start) == 'number' && start >= 0 && Number.isInteger(start)) new_data.start = start;
            else if(start == null) new_data.start = 0;
            else throw new Error('start should be a positive number');

            if(typeof(length) == 'number' && length <= 100 && length >= 0 && Number.isInteger(length)) new_data.length = length;
            else if(length == null) new_data.length = 20;
            else throw new Error('length should be an integer between 1 and 100');

            if(sortDir == 'desc' || sortDir == 'asc') new_data.sortDir = sortDir;
            else if(sortDir == null) new_data.sortDir = 'desc';
            else throw new Error('sortDir should be either desc or asc')

            if(typeof(sortCol) == 'number') new_data.sortCol = sortCol;
            else new_data.sortCol = 5;

            if(typeof(OJId) == 'string') new_data.OJId = OJId;
            else if(OJId == null) new_data.OJId = 'All';
            else throw new Error('OJId should be string');

            if(typeof(probNum) == 'string') new_data.probNum = probNum;
            else if(probNum == null) new_data.probNum = '';
            else throw new Error('probNum should be string')

            if(typeof(title) == 'string') new_data.title = title;
            else if(title == null) new_data.title = '';
            else throw new Error('title should be string');

            if(typeof(source) == 'string') new_data.source = source;
            else if(source == null) new_data.source = '';
            else throw new Error('source should be string');
            
            if(typeof(category) == 'string') new_data.source = source;
            else if(category == null) new_data.source = '';
            else throw new Error('category should be string');

            return new_data;

        }catch(err){
            throw new Error(err);
        }
    }

    static validate_contest_status(data){
        try{
            if(data == null) data = {};
            let {start, length, un, num, res, language, inContest, contestId} = data, new_data = {};

            if(typeof(start) == 'number' && start >= 0 && Number.isInteger(start)) new_data.start = start;
            else if(start == null) new_data.start = 0;
            else throw new Error('start should be a positive integer');

            if(typeof(length) == 'number' && length <= 20 && length >= 0 && Number.isInteger(length)) new_data.length = length;
            else if(length == null) new_data.length = 20;
            else throw new Error('length should be an integer between 1 and 20');

            if(typeof(un) == 'string') new_data.un = un;
            else if(un == null) new_data.un = '';
            else throw new Error('un should be string');

            if(typeof(num) == 'string') new_data.num = num;
            else if(num == null) new_data.num = '-';
            else throw new Error('num should be string');

            if(typeof(res) == 'number' && res >= 0 && Number.isInteger(res) && res <= 11) new_data.res = res;
            else if(res == null) new_data.res = 0;
            else throw new Error('res should be a positive integer between 0 and 11');

            if(typeof(language) == 'string') new_data.language = language;
            else if(language == null) new_data.language = 'All';
            else throw new Error('language should be string');

            if(typeof(inContest) == 'boolean') new_data.inContest = inContest;
            else if(inContest == null) new_data.inContest = true;
            else throw new Error('inContest should be boolean');

            if(typeof(contestId) == 'number') new_data.contestId = contestId;
            else throw new Error('contestId is required and should be string')

            return new_data;

        } catch(err){
            throw new Error(err);
        }
    }

    static validate_status(data){
        try{
            if(data == null) data = {};
            let {start, length, un, res, language, OJId, probNum, onlyFolowee} = data, new_data = {};
            
            if(typeof(start) == 'number' && start >= 0 && Number.isInteger(start)) new_data.start = start;
            else if(start == null) new_data.start = 0;
            else throw new Error('start should be a positive integer');

            if(typeof(length) == 'number' && length <= 20 && length >= 0 && Number.isInteger(length)) new_data.length = length;
            else if(length == null) new_data.length = 20;
            else throw new Error('length should be an integer between 1 and 20');

            if(typeof(un) == 'string') new_data.un = un;
            else if(un == null) new_data.un = '';
            else throw new Error('un should be string');

            if(typeof(res) == 'number' && res >= 0 && Number.isInteger(res) && res <= 11) new_data.res = res;
            else if(res == null) new_data.res = 0;
            else throw new Error('res should be a positive integer between 0 and 11');

            if(typeof(language) == 'string') new_data.language = language;
            else if(language == null) new_data.language = '';
            else throw new Error('language should be string');

            if(typeof(OJId) == 'string') new_data.OJId = OJId;
            else if(OJId == null) new_data.OJId = 'All';
            else throw new Error('OJId should be string');

            if(typeof(probNum) == 'string') new_data.probNum = probNum;
            else if(probNum == null) new_data.probNum = '';
            else throw new Error('probNum should be string');

            if(typeof(onlyFolowee) == 'boolean') new_data.onlyFolowee = onlyFolowee;
            else if(onlyFolowee == null) new_data.onlyFolowee = false;
            else throw new Error('onlyFolowee should be boolean');
            
            return new_data;

        }catch(err){
            throw new Error(err)
        }
    }
}

module.exports = Vjudge;
