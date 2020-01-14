/*
$(document).ready(function() {
        var xyz = sessionStorage.getItem("xyz");
        if (xyz === "done") {
            $("body").html(sessionStorage.getItem("innerChanged"));
        }

    })
    */
//function on submit
function sbmt() {
    // sessionStorage.setItem("xyz", "done");

    // sessionStorage.setItem("innerChanged", $("body").html());
    var y = document.querySelectorAll(".user");
    for (var x = 0; x < y.length; x++) {
        sessionStorage.setItem(y[x].id, y[x].value);
    }
    var gender = $("input[name='gender']:checked").val();
    sessionStorage.setItem("gender", gender);
    //image
    var cvImage = document.querySelector('#image')

    sessionStorage.setItem("image", cvImage.src);



    //Functions Set dublicated sections values
    function setDbl(dblClass) {
        for (let x = 0; x < dblClass.length; x++) {
            var inputs = document.querySelectorAll("." + dblClass[x]);
            sessionStorage.setItem(dblClass[x], inputs.length);
            for (let y = 0; y < inputs.length; y++) {
                sessionStorage.setItem(dblClass[x] + y, inputs[y].value);
            }
        }
    }
    //End of setDbl function

    //Set Education section
    var dblClassEdu = ["certification", "department", "grade", "univeristy", "yGrauation"];
    setDbl(dblClassEdu);

    //set Experience section
    var dblClassExp = ["jobTitle", "comName", "dtFrom", "dtTo", "jobDscrp"];
    setDbl(dblClassExp);

    //set language section
    var dblClassLang = ["lang", "level"];
    setDbl(dblClassLang);

    //set skill section
    var dblClassSkill = ["skill", "skillDscrp"];
    setDbl(dblClassSkill);




};

//function add new div
function addSection(idShort) {
    var dbl = $("#dbl" + idShort).html();
    //add section buttons
    $("#btn" + idShort).click(function(e) {
        e.preventDefault();

        $("#dbl" + idShort).append("<hr>" + dbl);

    });
};
addSection("Edu");
addSection("Lang");
addSection("Skill");
addSection("Exp");




$("#btn").click(sbmt);





//image


function previewFile() {
    const preview = document.querySelector('#image');
    const file = document.querySelector("#customFile").files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {
        // convert image file to base64 string
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}