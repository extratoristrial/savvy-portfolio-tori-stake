var name = prompt('Hey! What\'s your name?');

var checkName = function() {
    if (name === '') {
        name = prompt('What is your name, really?');

        checkName(); 
    }
}

// will repeat until there is a name 

checkName() ;

alert('Hello there, ' + name + '!');

console.log(name + ' is exploring the page.');

console.log('See anything you like, ' + name + '?');

console.log('Hello Dave.... ');

alert('Are you feeling it now, Mr. Crabs?');