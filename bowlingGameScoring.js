/**
 * Created by 张洋 on 17-5-3.
 */
    /*
    * 保龄球计分规则构造函数
    * @param scoreStr 计分字符串
    * @constructor BowlingGameScoring
    * */
    let BowlingGameScoring = function (scoreStr) {};
    BowlingGameScoring.prototype = {
        /*
         * 获取最终的分数
         * @param scoreStr 输入的分值字符串
         * @return int 最终的分数
         * @method getFinalScore
         * */
        getFinalScore:function (scoreStr) {
            let illegalInput = this.judgeBowlingScoringStr(scoreStr);
            if(!illegalInput){
                return false;
            }
            let scoreObj = this.scoringStrToArray(scoreStr),
                commonScoreArr = scoreObj.commonScoreArr,
                addScoreArr = scoreObj.addScoreArr,
                scoreSum = 0,
                scoreArr = commonScoreArr.slice(0);
            scoreArr.push(addScoreArr);
            for(let i = 0 , j = commonScoreArr.length-1; i<j; i++){
                scoreSum += this.getDiffPosScore(i,scoreArr);
            }
            scoreSum += this.getAddScore(commonScoreArr,addScoreArr);
            return scoreSum;
        },
        /*
         * 将传入的计分字符串转化为数组；将‘||’符号前后的字符分别用数组表示
         * @param scoreStr 计分字符串
         * @return 一个包含正常规则的计分数组对象obj.commonScoreArr表示正常计分数组，
         * obj.addArr表示附加的计分数组，其中strike用10表示，其他用长度为2的数组intAddArr
         * 表示，intAddArr[0]表示第1次击倒的瓶数，intAddArr[1]表示第2次击倒的瓶数，若为spare
         * 则intAddArr[1]为10
         * */
        scoringStrToArray:function (scoreStr) {
            let strScoreArr = scoreStr.split('||'),
                strCommonScoreArr = strScoreArr[0].split('|'),
                intAddArr = [],
                intCommonScoreArr = [];
            for(let i = 0, j = strCommonScoreArr.length; i < j; i++){
                if(strCommonScoreArr[i].indexOf('X') > -1){
                    intCommonScoreArr[i] = 10;
                }else{
                    intCommonScoreArr[i] = [];
                    intCommonScoreArr[i][0] = this.getScoringNum(strCommonScoreArr[i][0]);
                    intCommonScoreArr[i][1] = this.getScoringNum(strCommonScoreArr[i][1]);
                }
            }
            if(strScoreArr[1]){
                intAddArr = strScoreArr[1].split('');
                for(let p=0; p<intAddArr.length; p++){
                    intAddArr[p] = this.getScoringNum(intAddArr[p]);
                }
            }
            return {
                commonScoreArr:intCommonScoreArr,
                addScoreArr:intAddArr
            }
        },
        /*
         * 判断输入的字符串是否合法
         * @param scoreStr 输入的分值字符串
         * @return Boolean
         * @method judgeBowlingScoringStr
         * */
        judgeBowlingScoringStr:function(scoreStr){
            if(!scoreStr || scoreStr.indexOf('||') < 0 || scoreStr.split('||').length > 2) {
                return false;
            }
            let splitWith2Line = scoreStr.split('||'),
                splitWith1Line = splitWith2Line[0].split('|'),
                flag = false;
                commonScoreLen = splitWith1Line.length;
            for(let i = 0; i<commonScoreLen ;i++){
                if(/^\d{2}$/.test(splitWith1Line[i])){
                    let str = splitWith1Line[i].split('');
                    flag = !(+str[0]+(+str[1]) > 9);
                }
                let s = splitWith1Line[i].endsWith('\\') ? splitWith1Line[i]+'\\' :splitWith1Line[i];
                if(!(/^[1-9-]\/$/.test(s) || /^X$/.test(s) || /^[1-9-]{2}$/.test(s))){
                    return false;
                }
            }
            if(splitWith1Line[commonScoreLen-1] == 'X'){
                flag =  /^[1-9-X]{2}$/.test(splitWith2Line[1]);
            }else if(splitWith1Line[commonScoreLen-1][1] == '/'){
                flag = /^[1-9-X]$/.test(splitWith2Line[1]);
            }else{
                flag = !splitWith2Line[1];
            }
            return flag;
        },
        /*
        * 获取不同标记对应的分数
        * @param c:标记字符，例如‘X’对应10
        * @return 不同标记对应的int型分数
        * */
        getScoringNum:function (c) {
            if(!c ||c.length > 1){
                return false;
            }
            if(!(/^[0-9-X\/]$/.test(c))){
                return false;
            }
            switch (c){
                case 'X':return 10;
                case '/':return 10;
                case '-':return 0;
                default:return +c;
            }

        },
        /*
        * 获取不同位置（格）的分值
        * @param index:第几格 从0开始
        * @param scoreArr:正常比赛对应的的分数数组及附加赛对应的分数数组，即commonScoreArr.push(addArr)后的commonScoreArr
        * @method getDiffPosScore
        * */
        getDiffPosScore:function (index,scoreArr) {
           if(index < 0 || index > scoreArr.length - 3){
               return false;
           }
           if(scoreArr[index] == 10){
               return this.getStrikeScore(index,scoreArr);
           }else if(scoreArr[index][1] == 10){
               return this.getSpareScore(index,scoreArr);
           }else{
               return this.getCommonScore(index,scoreArr);
           }

        },
        /*
        * 获取strike时的分数
        * @param index 第几格的索引
        * @param scoreArr 保存正常情况下分值的数组
        * @return 此strike格的分数
        * @method getStrikeScore
        * */
        getStrikeScore:function (index,scoreArr) {
            if(index < 0) {return false}
            if(scoreArr[index+1] == 10 && scoreArr[index+2] == 10){
                return 30;
            }else if(scoreArr[index+1] == 10 ){
                return 20 + scoreArr[index+2][0];
            }else if(scoreArr[index+1][1] == 10){
                return 20;
            }else if(scoreArr[index+1][1] != 10){
                return 10 + scoreArr[index+1][0] + scoreArr[index+1][1];
            }
        },
        /*
         * 获取spare时的分数
         * @param index 第几格的索引
         * @param scoreArr 保存正常情况下分值的数组
         * @return 此spare格的分数
         * @method getSpareScore
         * */
        getSpareScore:function (index,scoreArr) {
            if(index < 0) {return false}
            if(scoreArr[index+1] == 10){
                return 20;
            }else{
                return 10 + scoreArr[index+1][0];
            }

        },
        /*
         * 获取非strike非spare时的分数
         * @param index 第几格的索引
         * @param scoreArr 保存正常情况下分值的数组
         * @return 此格的分数
         * @method getCommonScore
         * */
        getCommonScore:function (index,scoreArr) {
            if(index < 0) {return false}
            return scoreArr[index][0] + scoreArr[index][1];
        },
        /*
         * 获取正常情况下最后一格的分数
         * @param commonScoreArr   保存正常情况下每格分数的数组
         * @param addScoreArr 保存附加格分值的数组
         * @return 最后正常情况下最后一格的分数
         * @method getAddScore
         * */
        getAddScore:function (commonScoreArr,addScoreArr) {
            let commonSALength = commonScoreArr.length,
                flag;
            if(commonScoreArr[commonSALength - 1] == 10){
                addScoreArr.length == 0||addScoreArr.length == 1 ? flag = false : flag = 10 + addScoreArr[0] + addScoreArr[1];
            }else if(commonScoreArr[commonSALength - 1][1] == 10){
                addScoreArr.length == 0||addScoreArr.length == 2 ? flag = false : flag = 10 + addScoreArr[0];
            }else{
                flag = commonScoreArr[commonSALength - 1][0] + commonScoreArr[commonSALength - 1][1];
            }
            return flag;
        }
    };

let scoreArr = [
         10,
            [ 7, 10 ],
            [ 9, 0 ],
            10,
            [ 0, 8 ],
            [ 8, 10 ],
            [ 0, 6 ],
            10,
            10,
            [2,10]],
    addArr = [1],
    bgs = new BowlingGameScoring('');
    let str = 'X|7/|9-|-8|81|5/||X';
    console.log(bgs.judgeBowlingScoringStr(str));
