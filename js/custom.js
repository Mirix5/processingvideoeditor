$(document).ready(function() {
    //Page first loads to info
    $(".content").fadeOut("slow", function() {
        $(".content").load("info.html #info-content", function() {
            $(".content").fadeIn("slow");
        });
    });

    //on clicks for navbar
    $(".info").click(function() {
        $(".content").fadeOut("slow", function() {
            $(".content").load("info.html #info-content", function() {
                $(".content").fadeIn("slow");
            });
        });
    });

    $(".screenshots").click(function() {
        $(".content").fadeOut("slow", function() {
            $(".content").load("screenshots.html #screenshots-content", function() {
                $(".content").fadeIn("slow");
            });
        });
    });

    $(".download").click(function() {
        $(".content").fadeOut("slow", function() {
            $(".content").load("download.html #download-content", function() {
                $(".content").fadeIn("slow");
            });
        });
    });

    $(".contact-us").click(function() {
        $(".content").fadeOut("slow", function() {
            $(".content").load("contact.html #contact-content", function() {
                $(".content").fadeIn("slow");
            });
        });
    });
});
