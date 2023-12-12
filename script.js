$(document).ready(function () {
    var currentIndex = 0;
    var totalCards = $(".portfolio-card").length;

    function showCard(index) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        $(".portfolio-card").removeClass("show-card slide-from-bottom slide-from-right slide-from-top slide-from-left");

        if (index < currentIndex) {
            $(".portfolio-card:eq(" + index + ")").addClass("slide-from-left show-card");
        } else if (index > currentIndex) {
            $(".portfolio-card:eq(" + index + ")").addClass("slide-from-right show-card");
        } else {
            $(".portfolio-card:eq(" + index + ")").addClass("show-card");
        }

        currentIndex = index;
=======
        $(".portfolio-card").hide();
        $(".portfolio-card:eq(" + index + ")").show();
>>>>>>> parent of 97736ed (Update script.js)
=======
        $(".portfolio-card").hide();
        $(".portfolio-card:eq(" + index + ")").show();
>>>>>>> parent of 97736ed (Update script.js)
=======
        $(".portfolio-card").hide();
        $(".portfolio-card:eq(" + index + ")").show();
>>>>>>> parent of 97736ed (Update script.js)
    }

    $(document).keydown(function (e) {
        if (e.which === 37) {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            showCard(currentIndex);
        }
    });

    $(document).keydown(function (e) {
        if (e.which === 39) {
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }
    });

    $(document).on("wheel", function (e) {
        if (e.originalEvent.deltaY > 0) {
            currentIndex = (currentIndex + 1) % totalCards;
        } else {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        }
        showCard(currentIndex);
    });

    showCard(currentIndex);
});
