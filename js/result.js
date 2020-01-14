function fill() {

    //Personal information
    var classCv = document.querySelectorAll(".cv");
    for (let x = 0; x < classCv.length; x++) {
        var idCv = classCv[x].id;
        $("#" + idCv).text(sessionStorage.getItem(idCv));
    };


    $("#name2").text($("#name").text());
    if ($("#jobObj").text() === "") {
        $("#jo").hide()
    };

    //Image
    var cvImage = document.querySelector('#cvImage');
    cvImage.src = sessionStorage.getItem("image");




    //$("#dateB").datepicker("option", "dateFormat", "dd-mm-yy");


    //function to get dublicated Sections
    function getDbl(dblClass, idAppendTo, htmlArray) {
        var dblLength = sessionStorage.getItem(dblClass[0].name);
        for (let y = 0; y < dblLength; y++) {
            var htmlToAppend = htmlArray[0];
            for (let z = 0; z < dblClass.length; z++) {
                dblClass[z].value = sessionStorage.getItem(dblClass[z].name + y);
                htmlToAppend += dblClass[z].value + htmlArray[z + 1];
            };
            $("#" + idAppendTo).append(htmlToAppend);
        }
    }
    //End of function get dublicated Sections


    //get Education information
    var certification = { value: "", name: "certification" };
    var department = { value: "", name: "department" };
    var grade = { value: "", name: "grade" };
    var univeristy = { value: "", name: "univeristy" };
    var yGrauation = { value: "", name: "yGrauation" };

    var eduDblClass = [certification, department, univeristy, grade, yGrauation];
    var edu = [" <li class=\" liEdu\"> <h3 class=\"  certi\">",
        " </h3> <h5><span class=\"  depart\"> ", ", </span><span class=\" univ\">",
        "</span></h5><ul > <li class=\" liGrd\"><span class=\"font-weight-bold grd\">Grade: </span>",
        " </li><li class=\" liGrDate\"><span  class=\"font-weight-bold grDate\">Graduation Date: </span>",
        "  </li> </ul > </li>"
    ];

    getDbl(eduDblClass, "certification", edu);
    removeEmpty("certi", "liEdu", "");
    removeEmpty("depart", "depart", ",");
    removeEmpty("univ", "univ", ",");
    removeEmpty("liGrd", "liGrd", "Grade:");
    removeEmpty("liGrDate", "liGrDate", "Graduation Date:");




    //get Experience information

    var comName = { value: "", name: "comName" };
    var jobTitle = { value: "", name: "jobTitle" };
    var dtFrom = { value: "", name: "dtFrom" };
    var dtTo = { value: "", name: "dtTo" };
    var jobDscrp = { value: "", name: "jobDscrp" };

    var exp = ["<li class=\"liExp\"><h3 class=\"jobTitle\">",
        "</h3>  <h5 class=\"comName\">",
        "</span></h5><h6 class=\"frTo\"><span class=\"dtFrom\"><span class=\"font-weight-bold\">from: </span>",
        "</span><span class=\"dtTo\"><span class=\"font-weight-bold\"> to: </span>",
        "</span></h6><ul class=\"ulJobDscrp\"><li><p class=\"jobDscrp\">", "</p></li></ul></li>"
    ];
    var expDblClass = [jobTitle, comName, dtFrom, dtTo, jobDscrp];

    getDbl(expDblClass, "experience", exp);
    removeEmpty("jobTitle", "liExp", "");
    removeEmpty("comName", "comName", "");
    removeEmpty("dtFrom", "dtFrom", "from:");
    removeEmpty("dtTo", "dtTo", "to:");
    removeEmpty("frTo", "frTo", "from:to:");
    removeEmpty("jobDscrp", "ulJobDscrp", "");

    //get Languadge information

    var lang = { value: "", name: "lang" };
    var level = { value: "", name: "level" };

    var langHtml = ["<li class=\"liLang\"><span class=\" font-weight-bold lang\">", ", </span><span class=\"level\">", "</span>.</li>"]
    var langDblClass = [lang, level];
    getDbl(langDblClass, "languages", langHtml);
    removeEmpty("lang", "liLang", ",");


    //get skill information

    var skill = { value: "", name: "skill" };
    var skillDscrp = { value: "", name: "skillDscrp" };

    var skillHtml = ["<li class = \"liSkill\"><h5 class=\"skill\"> ",
        "</h5><p class = \"skillDscrp\">",
        "</p> </li>"
    ];
    var skillDblClass = [skill, skillDscrp];
    getDbl(skillDblClass, "skills", skillHtml);
    removeEmpty("skill", "liSkill", "");


}





$(document).ready(fill())



$("#btnPrint").click(function() {
    $("#btnPrint").hide();
    window.print();
    $("#btnPrint").show();

})


function removeEmpty(chkClass, removeClass, chkValue) {
    for (let x = 0; x < $("." + chkClass).length; x++) {
        if ($.trim($("." + chkClass).eq(x).text()) === chkValue) {
            $("." + removeClass).eq(x).hide();
        }
    }
}
/*
function goBack() {
    window.history.back();
} */