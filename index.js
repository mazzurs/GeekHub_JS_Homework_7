var guitar = $('[data-product]');

guitar.click(function (event) {

    event;


    var helperDiv = event.currentTarget.children[0];
    var cloneDiv = $(helperDiv).clone();
    var helperOffset = $(helperDiv).offset();

    cloneDiv.css({
        top: helperOffset.top,
        left: helperOffset.left
    });
    cloneDiv.appendTo(document.body);
    setTimeout(function () {
        cloneDiv.attr('style', '    transition: top 250ms, height 250ms, width 250ms, left 250ms;\n' +
            'top: 40vh;\n' +
            '    height: 60vh;\n' +
            '    background: antiquewhite;' +
            '    width: 100%;\n' +
            '    position: fixed;\n' +
            '    left: 0;');
    }, 0);

    var helperGuitar = event.currentTarget.children[1];
    var cloneGuitar = $(helperGuitar).clone();
    var guitarOffset = $(helperGuitar).offset();
    var guitarRect = helperGuitar.getBoundingClientRect();
    cloneGuitar.css({
        top: guitarRect.top,
        left: guitarRect.left + 50
    });
    cloneGuitar.appendTo(document.body);
    setTimeout(function () {
        cloneGuitar.attr('style',
            'top: 18vh;\n' +
            '    height: 71vh;\n' +
            '    width: 23vh;\n' +
            '    left: 80%;' +
            '    position: fixed;' +
            '    margin-bottom: 25vh;' +
            'transition-property: top, height, width, left;  \n' +
            '  transition-duration: 300ms;  \n' +
            '  transition-timing-function: cubic-bezier(0.13, 0.52, 0.28, 1.73);'
        );
    }, 0);

    $('[data-product]').css({
        display: 'none'
    });

    animation6();
    var promise1 = new Promise(function (success, error) {
        animation1();
        setTimeout(function () {
            console.log('done1');
            success();
        }, 100)
    });
    var promise2 = promise1.then(
        function () {
            return new Promise(function (success, error) {
                animation2();
                setTimeout(function () {
                    console.log('done2');
                    success();
                }, 100)
            })
        }
    );
    var promise3 = promise2.then(
        function () {
            return new Promise(function (success, error) {
                animation3();
                setTimeout(function () {
                    console.log('done3');
                    success();
                }, 100)
            })
        }
    );
    var promise4 = promise3.then(
        function () {
            return new Promise(function (success, error) {
                animation4();
                setTimeout(function () {
                    console.log('done4');
                    success();
                }, 100)
            })
        }
    );
    var promise5 = promise4.then(
        function () {
            return new Promise(function (success, error) {
                animation5();
                setTimeout(function () {
                    console.log('done5');
                    success();
                }, 100)
            })
        }
    );













    function animation1() {
        var titleHelper = event.currentTarget.children[2];
        var titleClone = $(titleHelper).clone();
        $(titleClone).css({
            top: 39 + 'vh',
            left: 10 + '%',
            opacity: 0
        });
        titleClone.appendTo(document.body);
        setTimeout(function () {
            $(titleClone).css({
                transition: 'top 300ms, opacity 300ms, left 300ms',
                top: 24 + 'vh',
                left: 10 + '%',
                opacity: 1,
                fontSize: '4.5em',
                zIndex: 1000,
            });
        }, 0);

        var x = $('div[class="x"]');
        x.click(function (event) {
            titleClone.remove();
        });
    }

    function animation2() {
        var h2Helper = event.currentTarget.children[3];
        var h2Clone = $(h2Helper).clone();
        $(h2Clone).css({
            top: 45 + 'vh',
            left: 10 + '%',
            opacity: 0
        });
        h2Clone.appendTo(document.body);
        setTimeout(function () {
            $(h2Clone).css({
                top: 28 + 'vh',
                left: 10 + '%',
                opacity: 1,
                zIndex: 1000,
                fontSize: '1.75em',
                transition: 'top 300ms, opacity 300ms, left 300ms'
            });
        });

        var x = $('div[class="x"]');
        x.click(function (event) {
            h2Clone.remove();
        });
    }

    function animation3() {
        var Helper = event.currentTarget.children[5];
        var Clone = $(Helper).clone();
        $(Clone).css({
            top: 64 + 'vh',
            left: 10 + '%',
            opacity: 0
        });
        Clone.appendTo(document.body);
        setTimeout(function () {
            $(Clone).css({
                top: 53 + 'vh',
                left: 10 + '%',
                opacity: 1,
                zIndex: 100,
                fontSize: '3em',
                fontWeight: 'bold',
                color: '#d35066',
                transition: 'top 300ms, opacity 300ms, left 300ms'
            });
        });

        var x = $('div[class="x"]');
        x.click(function (event) {
            Clone.remove();
        });
    }

    function animation4() {
        var Helper = event.currentTarget.children[4];
        var Clone = $(Helper).clone();
        $(Clone).css({
            top: 70 + 'vh',
            left: 10 + '%',
            opacity: 0
        });
        Clone.appendTo(document.body);
        setTimeout(function () {
            $(Clone).css({
                top: 63 + 'vh',
                lineHeight: '1.5',
                maxWidth: '50%',
                left: 10 + '%',
                opacity: 1,
                zIndex: 100,

                fontWeight: 'bold',

                transition: 'top 300ms, opacity 300ms, left 300ms'
            });
        });

        var x = $('div[class="x"]');
        x.click(function (event) {
            Clone.remove();
        });
    }

    function animation5() {
        var Helper = document.createElement('button');
        var Clone = $(Helper).clone();
        $(Clone).css({
            top: 91 + 'vh',
            left: 10 + '%',
            opacity: 0
        });
        Clone.addClass('details__addtocart');
        Clone[0].innerText = "Add to Card";
        Clone.appendTo(document.body);
        setTimeout(function () {
            $(Clone).css({
                top: 80 + 'vh',
                left: 10 + '%',
                opacity: 1,
                zIndex: 100,
                transition: 'top 300ms, opacity 300ms, left 300ms'
            });
        });

        var x = $('div[class="x"]');
        x.click(function (event) {
            Clone.remove();
        });
    }

    function animation6() {
        var Helper = document.createElement('div');
        var img = document.createElement('img');
        $(img).attr('src', './img/x.png');
        $(img).appendTo(Helper);
        var Clone = $(Helper).clone();
        $(Clone).css({
            top: 8 + 'vh',
            left: 90 + '%',
            opacity: 0,
            position: 'absolute'
        });
        Clone.addClass('x');
        Clone.appendTo(document.body);
        setTimeout(function () {
            $(Clone).css({
                top: 3 + 'vh',
                left: 90 + '%',
                opacity: 1,
                zIndex: 100,
                transition: 'top 300ms, opacity 300ms, left 300ms'
            });
        });

        var x = $('div[class="x"]');
        x.click(function (event) {
            Clone.remove();
        });
    }

    var x = $('div[class="x"]');
    x.click(function (event) {
        cloneGuitar.remove();
        cloneDiv.remove();
        $('[data-product]').css({
            display: 'block'
        });
    });

});

