$(document).ready(function() {
    var $element = $('#name');
    var phrases = [
        'Лох какой-то',
        'Nekit_PRO'
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 150,
            callback: function() {
                setTimeout(loopAnimation, 3000);
            },
        });
    })();
});
