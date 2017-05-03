
    /*
    * X 表示一个 strike
     / 表示一个 spare
     - 表示一个 miss
     | 表示一格的分界线
     || 之后的字符表示最后一格的额外机会

    */
    var score = function (str) {
        var allArr = getArr(str),
            sumArr = [],
            commonArr = allArr.commonArr,
            clen = commonArr.length,
            sum = 0,
            addArr = allArr.addArr;
            commonArr.push(addArr);
        for(var i = 0;i < clen; i++){
            if(typeof commonArr[i] === 'number'){
                if(i == clen -1){
                    sumArr[i] = 10+addArr[0] + addArr[1];
                }else if(typeof commonArr[i+1] === 'number'){
                    if(typeof commonArr[i+2] === 'number'){
                        sumArr[i] = 30;
                    }else{
                        sumArr[i] = 20 + commonArr[i+2][0];
                    }
                }else{
                    if(commonArr[i+1][1] == 10){
                        sumArr[i] = 20;
                    }else{
                        sumArr[i] = 10 + commonArr[i+1][0] + commonArr[i+1][1];
                    }
                }
            }else{
                if(i == clen -1){
                    if(commonArr[i+1].length == 1){
                       sumArr[i] = 10 + addArr[0];
                    }else{
                        sumArr[i] = commonArr[i][0] + commonArr[i][1];
                    }
                }else{
                    if(commonArr[i][1] == 10){
                        if(typeof commonArr[i+1] === 'number'){
                            sumArr[i] = 20;
                        }else{
                            sumArr[i] = 10+commonArr[i+1][0];
                        }
                    }else{
                        sumArr[i] = commonArr[i][0]+commonArr[i][1];
                    }
                }
            }
        }
        sum = sumArr.reduce(function (a,b) {
            return a+b;
        });

        console.log('------');
        console.log(getArr(str));
        console.log('concat ');
        console.log('sumArr '+sumArr);
        console.log('sum ----'+sum);
        return sum;
    };
    var getNum = function (c) {
        switch (c){
            case 'X':return 10;
            case '/':return 10;
            case '-':return 0;
            default:return +c;
        }
    };
    var getArr = function (str) {
        var arr = str.split('||'),
            everyArr = arr[0].split('|'),
            addArr = [],
            scoreArr = [];
        for(var i = 0, j = everyArr.length; i < j; i++){
            if(everyArr[i].indexOf('X') > -1){
                scoreArr[i] = 10;
            }else{
                scoreArr[i] = [];
                scoreArr[i][0] = getNum(everyArr[i][0]);
                scoreArr[i][1] = getNum(everyArr[i][1]);
            }
        }
        if(arr[1]){
            addArr = arr[1].split('');
            for(var p=0; p<addArr.length; p++){
                addArr[p] = getNum(addArr[p]);
            }
        }
        return {
            commonArr:scoreArr,
            addArr:addArr
        }
    }
    var str = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5';
    var str1 = 'X|X|X|X|X|X|X|X|X|X||XX';
    var str2 = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||';
    var str3 = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
    score(str);
    score(str1);
    score(str2);
    score(str3);

