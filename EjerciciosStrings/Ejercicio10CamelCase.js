function camelize(params) {
    return params.split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word;
            } else if (index >= 1) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join('');
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
console.log(camelize("JavaScript Exercises david"));