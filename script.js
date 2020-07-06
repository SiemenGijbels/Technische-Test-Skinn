$(document).ready(function () {
    $(".page.white").prepend("" +
        "<div class=\"nav-clip\">\n" +
        "        <nav class=\"nav white\">\n" +
        "            <h1 class=\"hamburger\">☰</h1>\n" +
        "            <ul class=\"nav-ul\">\n" +
        "                <h1>Salt.</h1>\n" +
        "                <a href=\"https://www.siemengijbels.com/\">\n" +
        "                    <li>about</li>\n" +
        "                </a>\n" +
        "                <a href=\"https://www.siemengijbels.com/\">\n" +
        "                    <li>contact</li>\n" +
        "                </a>\n" +
        "                <a href=\"https://www.siemengijbels.com/\">\n" +
        "                    <li>sign up</li>\n" +
        "                </a>\n" +
        "            </ul>\n" +
        "        </nav>\n" +
        "    </div>" +
        "");
    $(".page.black").prepend("" +
        "<div class=\"nav-clip\">\n" +
        "        <nav class=\"nav black\">\n" +
        "            <h1 class=\"hamburger\">☰</h1>\n" +
        "            <ul class=\"nav-ul\">\n" +
        "                <h1>Salt.</h1>\n" +
        "                <a href=\"https://www.siemengijbels.com/\">\n" +
        "                    <li>about</li>\n" +
        "                </a>\n" +
        "                <a href=\"https://www.siemengijbels.com/\">\n" +
        "                    <li>contact</li>\n" +
        "                </a>\n" +
        "                <a href=\"https://www.siemengijbels.com/\">\n" +
        "                    <li>sign up</li>\n" +
        "                </a>\n" +
        "            </ul>\n" +
        "        </nav>\n" +
        "    </div>" +
        "");

    $(".hamburger").click(function() {
        console.log("yes");
        if ($('.nav-ul:hidden').length) {
            $('.nav-ul').show();
        } else {
            $('.nav-ul').hide();
        }
    });
});

