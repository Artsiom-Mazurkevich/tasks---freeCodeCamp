// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    var re = /\W+|_+/g;
    return str.replace(re, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');