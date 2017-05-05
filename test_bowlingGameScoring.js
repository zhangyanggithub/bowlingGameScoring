/**
 * Created by 张洋 on 17-5-3.
 */
'use strict';
describe('test judgeBowlingScoringStr function in BowlingGameScoring',function () {
    let scoreStr1 = 'X|7/|9-|-6|81|5/||X',
        scoreStr2 = 'X||X2',
        scoreStr3 = '5/||-',
        scoreStr4 = 'X|7/|9-|-8|81|5/||XX',
        scoreStr5 = 'X|7/|9-|-8|81|5/||-X',
        scoreStr6 = '-X|7/|9-|-8|81|5/||X',
        scoreStr7 = 'X|7/|-9-|-8|81|5/||X',
        scoreStr8 = 'X|7/|9-|-8|81|X||X36',
        scoreStr9 = 'X|7/|9-|-8|81|5/||X2',
        scoreStr10 = '222|7/|9-|-8|81|5/||X',
        scoreStr11 = '2||XX',
        scoreStr12 = '5/||',
        scoreStr13 = 'X|7/|9-|-8|81|5/||3X',
        scoreStr14 = '5/||-2',
        scoreStr15 = '||-2',
        scoreStr16 = '||X',
        scoreStr17 = 'X|7/|99||X',
        scoreStr18 = 'X|7/|X||',
        scoreStr19 = 'X|7/|X',
        scoreStr20 = '||',
        scoreStr21 = 'X|7/||9-||X',
        scoreStr22 = 'X|7/||9-|||X',
        bgs = new BowlingGameScoring(''),
        baseStr = ' then new BowlingGameScoring().judgeBowlingScoringStr(scoreStr) return ',
        describingStr1 = `when scoreStr = ${scoreStr1} ${baseStr} true`,
        describingStr2 = `when scoreStr = ${scoreStr2} ${baseStr} true`,
        describingStr3 = `when scoreStr = ${scoreStr3} ${baseStr} true`,
        describingStr4 = `when scoreStr = ${scoreStr4} ${baseStr} false`,
        describingStr5 = `when scoreStr = ${scoreStr5} ${baseStr} false`,
        describingStr6 = `when scoreStr = ${scoreStr6} ${baseStr} false`,
        describingStr7 = `when scoreStr = ${scoreStr7} ${baseStr} false`,
        describingStr8 = `when scoreStr = ${scoreStr8} ${baseStr} false`,
        describingStr9 = `when scoreStr = ${scoreStr9} ${baseStr} false`,
        describingStr10 = `when scoreStr = ${scoreStr10} ${baseStr} false`,
        describingStr11 = `when scoreStr = ${scoreStr11} ${baseStr} false`,
        describingStr12 = `when scoreStr = ${scoreStr12} ${baseStr} false`,
        describingStr13 = `when scoreStr = ${scoreStr13} ${baseStr} false`,
        describingStr14 = `when scoreStr = ${scoreStr14} ${baseStr} false`,
        describingStr15 = `when scoreStr = ${scoreStr15} ${baseStr} false`,
        describingStr16 = `when scoreStr = ${scoreStr16} ${baseStr} false`,
        describingStr17 = `when scoreStr = ${scoreStr17} ${baseStr} false`,
        describingStr18 = `when scoreStr = ${scoreStr18} ${baseStr} false`,
        describingStr19 = `when scoreStr = ${scoreStr19} ${baseStr} false`,
        describingStr20 = `when scoreStr = ${scoreStr20} ${baseStr} false`,
        describingStr21 = `when scoreStr = ${scoreStr21} ${baseStr} false`,
        describingStr22 = `when scoreStr = ${scoreStr22} ${baseStr} false`;

    it(describingStr1, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr1)).toEqual(true);
    });
    it(describingStr2, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr2)).toEqual(true);
    });
    it(describingStr3, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr3)).toEqual(true);
    });
    it(describingStr4, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr4)).toEqual(false);
    });
    it(describingStr5, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr5)).toEqual(false);
    });
    it(describingStr6, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr6)).toEqual(false);
    });
    it(describingStr7, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr7)).toEqual(false);
    });
    it(describingStr8, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr8)).toEqual(false);
    });
    it(describingStr9, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr9)).toEqual(false);
    });
    it(describingStr10, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr10)).toEqual(false);
    });
    it(describingStr11, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr11)).toEqual(false);
    });
    it(describingStr12, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr12)).toEqual(false);
    });
    it(describingStr13, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr13)).toEqual(false);
    });
    it(describingStr14, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr14)).toEqual(false);
    });
    it(describingStr15, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr15)).toEqual(false);
    });
    it(describingStr16, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr16)).toEqual(false);
    });
    it(describingStr17, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr17)).toEqual(false);
    });
    it(describingStr18, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr18)).toEqual(false);
    });
    it(describingStr19, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr19)).toEqual(false);
    });
    it(describingStr20, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr20)).toEqual(false);
    });
    it(describingStr21, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr21)).toEqual(false);
    });
    it(describingStr22, function () {
        expect(bgs.judgeBowlingScoringStr(scoreStr22)).toEqual(false);
    });
});
describe('test getAddScore function in BowlingGameScoring',function () {
    let commonScoreArr1 = [ 10,[ 7, 10 ],[ 9, 0 ],10,[ 0, 8 ],[ 8, 10 ],[ 0, 6 ],10,10,10 ],
        addScoreArr11 = [1],
        addScoreArr12 = [1,2],
        addScoreArr13 = [10,2],
        addScoreArr14 = [10,10],
        addScoreArr15 = [],
        commonScoreArr2 = [ 10,[ 7, 10 ],[ 9, 0 ],10,[ 0, 8 ],[ 8, 10 ],[ 0, 6 ],10,10,[2,10] ],
        addScoreArr21 = [1],
        addScoreArr22 = [10],
        addScoreArr23 = [10,10],
        addScoreArr24 = [],
        commonScoreArr3 = [ 10,[ 7, 10 ],[ 9, 0 ],10,[ 0, 8 ],[ 8, 10 ],[ 0, 6 ],10,10,[2,0] ],
        addScoreArr31 = [1],
        addScoreArr32 = [1,9],
        addScoreArr33 = [],
        bgs = new BowlingGameScoring(''),
        describingStr11 = `when commonScoreArr = '${commonScoreArr1}',addScoreArr = ${addScoreArr12}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return false`,
        describingStr12 = `when commonScoreArr = '${commonScoreArr1}',addScoreArr = ${addScoreArr12}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return 13`,
        describingStr13 = `when commonScoreArr = '${commonScoreArr1}',addScoreArr = ${addScoreArr13}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return 22`,
        describingStr14 = `when commonScoreArr = '${commonScoreArr1}',addScoreArr = ${addScoreArr14}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return 30`,
        describingStr15 = `when commonScoreArr = '${commonScoreArr2}',addScoreArr = ${addScoreArr15}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return false`,
        describingStr21 = `when commonScoreArr = '${commonScoreArr2}',addScoreArr = ${addScoreArr21}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return 11`,
        describingStr22 = `when commonScoreArr = '${commonScoreArr2}',addScoreArr = ${addScoreArr22}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return 20`,
        describingStr23 = `when commonScoreArr = '${commonScoreArr3}',addScoreArr = ${addScoreArr23}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return false`,
        describingStr24 = `when commonScoreArr = '${commonScoreArr3}',addScoreArr = ${addScoreArr24}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return false`,
        describingStr31 = `when commonScoreArr = '${commonScoreArr3}',addScoreArr = ${addScoreArr31}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return 2`,
        describingStr32 = `when commonScoreArr = '${commonScoreArr3}',addScoreArr = ${addScoreArr32}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return 2`,
        describingStr33 = `when commonScoreArr = '${commonScoreArr3}',addScoreArr = ${addScoreArr33}then new BowlingGameScoring().getAddScore(commonScoreArr,addScoreArr) return 2`;
    it(describingStr11,function(){
        expect(bgs.getAddScore(commonScoreArr1,addScoreArr11)).toEqual(false);
    });
    it(describingStr12,function(){
        expect(bgs.getAddScore(commonScoreArr1,addScoreArr12)).toEqual(13);
    });
    it(describingStr13,function(){
        expect(bgs.getAddScore(commonScoreArr1,addScoreArr13)).toEqual(22);
    });
    it(describingStr14,function(){
        expect(bgs.getAddScore(commonScoreArr1,addScoreArr14)).toEqual(30);
    });
    it(describingStr15,function(){
        expect(bgs.getAddScore(commonScoreArr1,addScoreArr15)).toEqual(false);
    });
    it(describingStr21,function(){
        expect(bgs.getAddScore(commonScoreArr2,addScoreArr21)).toEqual(11);
    });
    it(describingStr22,function(){
        expect(bgs.getAddScore(commonScoreArr2,addScoreArr22)).toEqual(20);
    });
    it(describingStr23,function(){
        expect(bgs.getAddScore(commonScoreArr2,addScoreArr23)).toEqual(false);
    });
    it(describingStr24,function(){
        expect(bgs.getAddScore(commonScoreArr2,addScoreArr24)).toEqual(false);
    });
    it(describingStr31,function(){
        expect(bgs.getAddScore(commonScoreArr3,addScoreArr31)).toEqual(2);
    });
    it(describingStr32,function(){
        expect(bgs.getAddScore(commonScoreArr3,addScoreArr32)).toEqual(2);
    });
    it(describingStr33,function(){
        expect(bgs.getAddScore(commonScoreArr3,addScoreArr33)).toEqual(2);
    });

});
describe('test getScoringNum function in BowlingGameScoring',function () {
    let c1 = 'X',
        c2 = '|',
        c3 = '3',
        c4 = '-',
        c5 = '4-',
        c6 = '',
        bgs = new BowlingGameScoring(''),
        describingStr1 = `when c = '${c1}',then new BowlingGameScoring().getScoringNum(c) return 10`,
        describingStr2 = `when c = '${c2}',then new BowlingGameScoring().getScoringNum(c) return false`,
        describingStr3 = `when c = '${c3}',then new BowlingGameScoring().getScoringNum(c) return 3`,
        describingStr4=  `when c = '${c4}',then new BowlingGameScoring().getScoringNum(c) return 0`,
        describingStr5 = `when c = '${c5}',then new BowlingGameScoring().getScoringNum(c) return false`,
        describingStr6 = `when c = '${c6}',then new BowlingGameScoring().getScoringNum(c) return false`;
    it(describingStr1,function(){
        expect(bgs.getScoringNum(c1)).toEqual(10);
    });
    it(describingStr2,function(){
        expect(bgs.getScoringNum(c2)).toEqual(false);
    });
    it(describingStr3,function(){
        expect(bgs.getScoringNum(c3)).toEqual(3);
    });
    it(describingStr4,function(){
        expect(bgs.getScoringNum(c4)).toEqual(0);
    });
    it(describingStr5,function(){
        expect(bgs.getScoringNum(c5)).toEqual(false);
    });
    it(describingStr6,function(){
        expect(bgs.getScoringNum(c6)).toEqual(false);
    });
});
describe('test scoringStrToArray function in BowlingGameScoring',function () {
    let scoreStr1 = 'X|7/|9-|X|-8|8/|-6|X|X|X||81',
        scoreStr2 = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||',
        bgs1 = new BowlingGameScoring(scoreStr1),
        bgs2 = new BowlingGameScoring(scoreStr2),
        obj1 = { commonScoreArr:[ 10,[ 7, 10 ],[ 9, 0 ],10,[ 0, 8 ],[ 8, 10 ],[ 0, 6 ],10,10,10 ],
            addScoreArr: [ 8, 1 ]
        },
        obj2 = { commonScoreArr:[ [ 9, 0 ],[ 9, 0 ],[ 9, 0 ],[ 9, 0 ],[ 9, 0 ],[ 9, 0 ],[ 9, 0 ],[ 9, 0 ],[ 9, 0 ],[ 9, 0 ] ],
            addScoreArr: [] },
        describingStr1 = `when str = '${scoreStr1}',then new BowlingGameScoring(str).scoringStrToArray(str) return ${obj1}`,
        describingStr2 = `when str = '${scoreStr2}',then new BowlingGameScoring(str).scoringStrToArray(str) return ${obj2}`;
    it(describingStr1,function(){
        expect(bgs1.scoringStrToArray(scoreStr1)).toEqual(obj1);
    });
    it(describingStr2,function(){
        expect(bgs2.scoringStrToArray(scoreStr2)).toEqual(obj2);
    });
});
describe('test getCommonScore function in BowlingGameScoring',function () {
    let scoreArr = [
            [7, 10],
            [9, 0],
            10,
            [0, 8],
            [8, 10],
            10,
            [1, 6],
            10,
            10,
            10,
            [8, 1]],
        index1 = 1,
        index2 = 3,
        index3 = -3,
        bgs = new BowlingGameScoring(''),
        describingStr1 = `when index = '${index1}',scoreArr = ${scoreArr} then new BowlingGameScoring().getCommonScore(index,scoreArr) return 9`,
        describingStr2 = `when index = '${index2}',scoreArr = ${scoreArr} then new BowlingGameScoring().getCommonScore(index,scoreArr) return 8`,
        describingStr3 = `when index = '${index3}',scoreArr = ${scoreArr} then new BowlingGameScoring().getCommonScore(index,scoreArr) return false`;
    it(describingStr1, function () {
        expect(bgs.getCommonScore(index1, scoreArr)).toEqual(9);
    });
    it(describingStr2, function () {
        expect(bgs.getCommonScore(index2, scoreArr)).toEqual(8);
    });
    it(describingStr3, function () {
        expect(bgs.getCommonScore(index3, scoreArr)).toEqual(false);
    });
});
describe('test getSpareScore function in BowlingGameScoring',function () {
    let scoreArr = [
            [7, 10],
            [9, 0],
            10,
            [0, 8],
            [8, 10],
            10,
            [1, 6],
            10,
            10,
            10,
            [8, 1]],
        index1 = 0,
        index2 = 4,
        index3 = -3,
        bgs = new BowlingGameScoring(''),
        describingStr1 = `when index = '${index1}',scoreArr = ${scoreArr} then new BowlingGameScoring().getSpareScore(index,scoreArr) return 19`,
        describingStr2 = `when index = '${index2}',scoreArr = ${scoreArr} then new BowlingGameScoring().getSpareScore(index,scoreArr) return 20`,
        describingStr3 = `when index = '${index3}',scoreArr = ${scoreArr} then new BowlingGameScoring().getSpareScore(index,scoreArr) return false`;
    it(describingStr1, function () {
        expect(bgs.getSpareScore(index1, scoreArr)).toEqual(19);
    });
    it(describingStr2, function () {
        expect(bgs.getSpareScore(index2, scoreArr)).toEqual(20);
    });
    it(describingStr3, function () {
        expect(bgs.getSpareScore(index3, scoreArr)).toEqual(false);
    });
});
describe('test getStrikeScore function in BowlingGameScoring',function () {
    let scoreArr = [10,
            10,
            [7, 10],
            [9, 0],
            10,
            [0, 8],
            [8, 10],
            [0, 6],
            10,
            10,
            10,
            [8, 1]],
        index1 = 0,
        index2 = 1,
        index3 = 8,
        index4 = -3,
        bgs = new BowlingGameScoring(''),
        describingStr1 = `when index = '${index1}',scoreArr = ${scoreArr} then new BowlingGameScoring().getStrikeScore(index,scoreArr) return 27`,
        describingStr2 = `when index = '${index2}',scoreArr = ${scoreArr} then new BowlingGameScoring().getStrikeScore(index,scoreArr) return 20`,
        describingStr3 = `when index = '${index3}',scoreArr = ${scoreArr} then new BowlingGameScoring().getStrikeScore(index,scoreArr) return 30`,
        describingStr4 = `when index = '${index4}',scoreArr = ${scoreArr} then new BowlingGameScoring().getStrikeScore(index,scoreArr) return false`;
    it(describingStr1, function () {
        expect(bgs.getStrikeScore(index1, scoreArr)).toEqual(27);
    });
    it(describingStr2, function () {
        expect(bgs.getStrikeScore(index2, scoreArr)).toEqual(20);
    });
    it(describingStr3, function () {
        expect(bgs.getStrikeScore(index3, scoreArr)).toEqual(30);
    });
    it(describingStr4, function () {
        expect(bgs.getStrikeScore(index4, scoreArr)).toEqual(false);
    });
});
describe('test getDiffPosScore function in BowlingGameScoring',function () {
    let scoreArr = [ 10,
            [ 7, 10 ],
            [ 9, 0 ],
            10,
            [ 0, 8 ],
            [ 8, 10 ],
            [ 0, 6 ],
            10,
            10,
            10,[8,1] ],
        bgs = new BowlingGameScoring(''),
        describingStr0 = `when index = 0,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 20`,
        describingStr1 = `when index = 1,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 19`,
        describingStr2 = `when index = 2,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 9`,
        describingStr3 = `when index = 3,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 18`,
        describingStr4 = `when index = 4,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 8`,
        describingStr5 = `when index = 5,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 10`,
        describingStr6 = `when index = 6,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 6`,
        describingStr7 = `when index = 7,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 30`,
        describingStr8 = `when index = 8,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return 28`,
        describingStr9 = `when index = 9,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return false`,
        describingStr10 = `when index = -1,scoreArr = ${scoreArr} then new BowlingGameScoring().getDiffPosScore(index,scoreArr) return false`;
    it(describingStr0, function () {
        expect(bgs.getDiffPosScore(0, scoreArr)).toEqual(20);
    });
    it(describingStr1, function () {
        expect(bgs.getDiffPosScore(1, scoreArr)).toEqual(19);
    });
    it(describingStr2, function () {
        expect(bgs.getDiffPosScore(2, scoreArr)).toEqual(9);
    });
    it(describingStr3, function () {
        expect(bgs.getDiffPosScore(3, scoreArr)).toEqual(18);
    });
    it(describingStr4, function () {
        expect(bgs.getDiffPosScore(4, scoreArr)).toEqual(8);
    });
    it(describingStr5, function () {
        expect(bgs.getDiffPosScore(5, scoreArr)).toEqual(10);
    });
    it(describingStr6, function () {
        expect(bgs.getDiffPosScore(6, scoreArr)).toEqual(6);
    });
    it(describingStr7, function () {
        expect(bgs.getDiffPosScore(7, scoreArr)).toEqual(30);
    });
    it(describingStr8, function () {
        expect(bgs.getDiffPosScore(8, scoreArr)).toEqual(28);
    });
    it(describingStr9, function () {
        expect(bgs.getDiffPosScore(9, scoreArr)).toEqual(false);
    });
    it(describingStr10, function () {
        expect(bgs.getDiffPosScore(-1, scoreArr)).toEqual(false);
    });
});
describe('test getFinalScore function in BowlingGameScoring',function () {
    let scoreStr1 = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5',
        scoreStr2 = 'X|X|X|X|X|X|X|X|X|X||XX',
        scoreStr3 = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||',
        scoreStr4 = 'X|7/|9-|X|-8|8/|-6|X|X|X||81',
        scoreStr5 = 'X|7/|9-|-8|81|5/||-X',
        scoreStr6 = '-X|7/|9-|-8|81|5/||X',
        scoreStr7 = 'X|7/|-9-|-8|81|5/||X',
        scoreStr8 = 'X|7/|9-|-8|81|X||X36',
        scoreStr9 = 'X|7/|9-|-8|81|5/||X2',
        scoreStr10 = '222|7/|9-|-8|81|5/||X',
        scoreStr11 = '2||XX',
        scoreStr12 = '5/||',
        scoreStr13 = 'X|7/|9-|-8|81|5/||3X',
        scoreStr14 = '5/||-2',
        scoreStr15 = '||-2',
        scoreStr16 = '||X',
        scoreStr17 = 'X|7/|99||X',
        scoreStr18 = 'X|7/|X||',
        scoreStr19 = 'X|7/|X',
        scoreStr20 = '||',
        scoreStr21 = '',
        bgs = new BowlingGameScoring(''),
        baseStr = 'then new BowlingGameScoring().getFinalScore(scoreStr) return',
        describingStr1 = `when scoreStr = ${scoreStr1} ${baseStr} 150`,
        describingStr2 = `when scoreStr = ${scoreStr2} ${baseStr} 300`,
        describingStr3 = `when scoreStr = ${scoreStr3} ${baseStr} 90`,
        describingStr4 = `when scoreStr = ${scoreStr4} ${baseStr} false`,
        describingStr5 = `when scoreStr = ${scoreStr5} ${baseStr} false`,
        describingStr6 = `when scoreStr = ${scoreStr6} ${baseStr} false`,
        describingStr7 = `when scoreStr = ${scoreStr7} ${baseStr} false`,
        describingStr8 = `when scoreStr = ${scoreStr8} ${baseStr} false`,
        describingStr9 = `when scoreStr = ${scoreStr9} ${baseStr} false`,
        describingStr10 = `when scoreStr = ${scoreStr10} ${baseStr} false`,
        describingStr11 = `when scoreStr = ${scoreStr11} ${baseStr} false`,
        describingStr12 = `when scoreStr = ${scoreStr12} ${baseStr} false`,
        describingStr13 = `when scoreStr = ${scoreStr13} ${baseStr} false`,
        describingStr14 = `when scoreStr = ${scoreStr14} ${baseStr} false`,
        describingStr15 = `when scoreStr = ${scoreStr15} ${baseStr} false`,
        describingStr16 = `when scoreStr = ${scoreStr16} ${baseStr} false`,
        describingStr17 = `when scoreStr = ${scoreStr17} ${baseStr} false`,
        describingStr18 = `when scoreStr = ${scoreStr18} ${baseStr} false`,
        describingStr19 = `when scoreStr = ${scoreStr19} ${baseStr} false`,
        describingStr20 = `when scoreStr = ${scoreStr20} ${baseStr} false`,
        describingStr21 = `when scoreStr = ${scoreStr21} ${baseStr} false`;
    it(describingStr1, function () {
        expect(bgs.getFinalScore(scoreStr1)).toEqual(150);
    });
    it(describingStr2, function () {
        expect(bgs.getFinalScore(scoreStr2)).toEqual(300);
    });
    it(describingStr3, function () {
        expect(bgs.getFinalScore(scoreStr3)).toEqual(90);
    });
    it(describingStr4, function () {
        expect(bgs.getFinalScore(scoreStr4)).toEqual(167);
    });
    it(describingStr5, function () {
        expect(bgs.getFinalScore(scoreStr5)).toEqual(false);
    });
    it(describingStr6, function () {
        expect(bgs.getFinalScore(scoreStr6)).toEqual(false);
    });
    it(describingStr7, function () {
        expect(bgs.getFinalScore(scoreStr7)).toEqual(false);
    });
    it(describingStr8, function () {
        expect(bgs.getFinalScore(scoreStr8)).toEqual(false);
    });
    it(describingStr9, function () {
        expect(bgs.getFinalScore(scoreStr9)).toEqual(false);
    });
    it(describingStr10, function () {
        expect(bgs.getFinalScore(scoreStr10)).toEqual(false);
    });
    it(describingStr11, function () {
        expect(bgs.getFinalScore(scoreStr11)).toEqual(false);
    });
    it(describingStr12, function () {
        expect(bgs.getFinalScore(scoreStr12)).toEqual(false);
    });
    it(describingStr13, function () {
        expect(bgs.getFinalScore(scoreStr13)).toEqual(false);
    });
    it(describingStr14, function () {
        expect(bgs.getFinalScore(scoreStr14)).toEqual(false);
    });
    it(describingStr15, function () {
        expect(bgs.getFinalScore(scoreStr15)).toEqual(false);
    });
    it(describingStr16, function () {
        expect(bgs.getFinalScore(scoreStr16)).toEqual(false);
    });
    it(describingStr17, function () {
        expect(bgs.getFinalScore(scoreStr17)).toEqual(false);
    });
    it(describingStr18, function () {
        expect(bgs.getFinalScore(scoreStr18)).toEqual(false);
    });
    it(describingStr19, function () {
        expect(bgs.getFinalScore(scoreStr19)).toEqual(false);
    });
    it(describingStr20, function () {
        expect(bgs.getFinalScore(scoreStr20)).toEqual(false);
    });
    it(describingStr21, function () {
        expect(bgs.getFinalScore(scoreStr20)).toEqual(false);
    });
});
