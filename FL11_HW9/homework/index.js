document.addEventListener('DOMContentLoaded',function() {
    
    let result;

    function getNumbers(stringToSplit) {
        result = [];
        for (let i = 0; i < stringToSplit.length; i++) {
            if (!isNaN(stringToSplit[i])) {
                result.push(+stringToSplit[i]);
            }
        }
        return result;
    }
    getNumbers('n1um3ber95');

    function findTypes () {
        result = {};
        let val;
        for(let i = 0; i < arguments.length; i++) {
            val = '"' + typeof arguments[i] + '"';
            if (result.hasOwnProperty(val)) {
                result[val] += 1;
            } else {
                result[val] = 1;
            }
        }
        return result;
    }
    findTypes(null,5,'hello',4);

    function executeforEach(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            func(arr[i]);
        }
        return arr;
    }
    executeforEach([1,2,3], function(el) {
        console.log(el);
    });

    function mapArray(arr, func) {
        let array =[];
        executeforEach(arr,function(el) {
            array.push(func(el));
        });
        return array;
    }
    mapArray([2, 5, 8], function(el) {
        return el + 3
    });

    function filterArray(arr, func) {
        let filteredArr = [];
        executeforEach(arr, function(el) {
            if (func(el)) {
                filteredArr.push(el);
            }
        });
        return filteredArr;
    }
    filterArray([2, 5, 8], function(el) {
        return el > 3
    });

    function showFormattedDate(date) {
        let formattedDate = date.toLocaleDateString('en-us', {
            day : '2-digit',
            month : 'short'
        })
        result = `Date: ${formattedDate} ${date.getFullYear()}`
        return result;
    }
    showFormattedDate(new Date('2019-01-27T01:10:00'));


    function canConvertToDate(date) {
        let isCorrectDate = new Date(date);
        return !isNaN(isCorrectDate);
    }
    canConvertToDate();

    function daysBetween(firstDate, secondDate) {
        const ms = 1000;
        const secAndMin = 60;
        const hrs = 24;
        let difference = secondDate.getTime() - firstDate.getTime();
        result = Math.ceil(difference / (ms * secAndMin * secAndMin * hrs));
        return result;
    }
    daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

    const data = [
        {
            '_id': '5b5e3168c6bf40f2c1235cd6',
            'index': 0,
            'birthday': '2016-03-18T00:00:00',
            'eyeColor': 'green',
            'name': 'Stein',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e3168e328c0d72e4f27d8',
            'index': 1,
            'birthday': '1991-02-11T00:00:00',
            'eyeColor': 'blue',
            'name': 'Cortez',
            'favoriteFruit': 'strawberry'
        },
        {
            '_id': '5b5e3168cc79132b631c666a',
            'index': 2,
            'birthday': '1984-04-17T00:00:00',
            'eyeColor': 'blue',
            'name': 'Suzette',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e31682093adcc6cd0dde5',
            'index': 3,
            'birthday': '1994-04-17T00:00:00',
            'eyeColor': 'green',
            'name': 'George',
            'favoriteFruit': 'banana'
        }
    ];

    function getAmountOfAdultPeople(data) {
        let days = 365;
        let years = 18;
        let adult = years * days;
        return filterArray(data, function(data) {
            return daysBetween( new Date(data.birthday), new Date() ) > adult;
        }).length;
    }
    getAmountOfAdultPeople(data);
    
    function keys(obj){
        result = [];
        let i = 0;
        for (let keys in obj) {
            if (obj.hasOwnProperty(keys)) {
                result[i] = keys;
                i++;
            }
        }
        return result;
    }
    keys();

    function values(obj){
        result = [];
        let i = 0;
        for (let values in obj) {
            if (obj.hasOwnProperty(values)) {
                result[i] = obj[values];
                i++;
            }
        }
        return result;
    }
    values();
    
});