$(document).ready(function () {
    var currentIndex = 0;
    var totalCards = $(".portfolio-card").length;

    function showCard(index) {
        $(".portfolio-card").removeClass("show-card");

        // Dodaj klasę animacji w zależności od indeksu
        if (index < currentIndex) {
            $(".portfolio-card:eq(" + index + ")").addClass("slide-from-left show-card");
        } else if (index > currentIndex) {
            $(".portfolio-card:eq(" + index + ")").addClass("slide-from-right show-card");
        } else {
            $(".portfolio-card:eq(" + index + ")").addClass("show-card");
        }

        currentIndex = index;
    }

    // Obsługa strzałki w lewo
    $(document).keydown(function (e) {
        if (e.which === 37) { // 37 to kod strzałki w lewo
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            showCard(currentIndex);
        }
    });

    // Obsługa strzałki w prawo
    $(document).keydown(function (e) {
        if (e.which === 39) { // 39 to kod strzałki w prawo
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }
    });

    // Obsługa kręcenia kółkiem myszki
    $(document).on("wheel", function (e) {
        if (e.originalEvent.deltaY > 0) {
            currentIndex = (currentIndex + 1) % totalCards;
        } else {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        }
        showCard(currentIndex);
    });

    // Pokaż pierwszą kartę na starcie
    showCard(currentIndex);
});
