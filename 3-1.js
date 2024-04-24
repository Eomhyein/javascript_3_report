var user = {
    name: "john",
    age: 20,
};

// 객체 만들어 프로퍼티 복사하기
var getAged = function (user, passedTime) {
    var result = {};
    for (var prop in user) {
        result[prop] = user[prop];
    }
    result.age += passedTime;
    
    console.log("result");
    return result;
};

var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (user1 !== user2) {
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
};

agedUserMustBeDifferentFromUser(user, agedUser);