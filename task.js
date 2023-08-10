function cubeNumber(number) {
    if(typeof number !== 'number') {
        return "Input is not a valid number.";
    }
    let answer = Math.pow(number, 3);
    return answer;
}

function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Both inputs should be strings.';
    }
    let search = string1.includes(string2);
    return search;
}

function sortMaker(arr) {
    if(arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }
    else if(arr[0] === arr[1]) {
        return 'equal';
    }
    else {
        let answer = arr.slice(0, 2);
        answer.sort((x, y) => y - x);
        return answer;
    }
}

function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    const array = [street, house, society]
    let values = array.join(',')
    return values;
}

function canPay(changeArray, totalDue) {
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++) {
        let element = changeArray[i];
        sum += element
    }

    if(changeArray.length === 0) {
        return 'The array is empty. Cannot make any payment.';
    }
    else if(sum < totalDue) {
        return false;
    }
    else {
        return true;
    }
}