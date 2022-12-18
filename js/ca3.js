function changeSkill(chosen) {
    console.log(chosen);
    var skilldisplay = document.getElementById('skillsDisplay')
    var title = document.getElementById('skilltitle')
    if (chosen === "Personal Skills and Qualities"){
        let personalskills = `
        <div class="row" id="skillsrow">
          <div class="col-md-4 pb-1">
            <h5>Determination and Perserverance</h5>
          </div>
          <div class="col-md-4 pb-1">
            <h5>Teamwork</h5>
          </div>
          <div class="col-md-4 pb-1">
            <h5>Accountability</h5>
          </div>
        </div>
        <div class="row mb-1" id="skillsrow">
            <div class="col-md-4 pb-1">
                <h5>Communication</h5>
            </div>
            <div class="col-md-4 pb-1">
                <h5>Patience</h5>
            </div>
            <div class="col-md-4 pb-1">
                <h5>Problem Solving</h5>
            </div>
        </div>
        <div class="row" id="skillsrow">
            <div class="col-md-4 pb-1">
                <h5>Billingual</h5>
            </div>
            <div class="col-md-4 pb-1">
                <h5>Reliable</h5>
            </div>
            <div class="col-md-4 pb-1">
                <h5>Adept</h5>
            </div>
        </div>
        `
        skilldisplay.innerHTML = personalskills

    } else if (chosen ==="Technical Skills"){
        let technicalSkill = `
        <div class="row" id="skillsrow">
          <div class="col-md-4 pb-1">
            <h5>HTML + CSS + Bootstrap</h5>
            <div class="progress">
              <div class="progress-bar" style="width:95%"></div>
            </div>
          </div>
          <div class="col-md-4 pb-1">
            <h5>Python + Django</h5>
            <div class="progress">
              <div class="progress-bar" style="width:85%"></div>
            </div>
          </div>
          <div class="col-md-4 pb-1">
            <h5>SQL</h5>
            <div class="progress">
              <div class="progress-bar" style="width:85%"></div>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-md-4 pb-1">
                <h5>C# + Blazor</h5>
                <div class="progress">
            <div class="progress-bar" style="width:80%"></div>
             </div>
            </div>
          <div class="col-md-4 pb-1">
            <h5>C++</h5>
            <div class="progress">
              <div class="progress-bar" style="width:70%"></div>
            </div>
          </div>
          <div class="col-md-4 pb-1">
          <h5>Javascript</h5>
          <div class="progress">
            <div class="progress-bar" style="width:60%"></div>
          </div>
          
        </div>
        `
        skilldisplay.innerHTML = technicalSkill

    } else {
        skilldisplay.innerHTML = 
        '<div class="row" id="skillsrow">' +
          '<div class="col-md-6 pb-1">' +
            '<h5>English</h5>' +
            '<div class="progress">' +
              '<div class="progress-bar" style="width:95%"></div>' +
            '</div>' +
          '</div>'+
          '<div class="col-md-6 pb-1">'+
            '<h5>Polish</h5>'+
            '<div class="progress">'+
              '<div class="progress-bar" style="width:95%"></div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<div class="row">'+
          '<div class="col-md-6 pb-1">'+
            '<h5>Spanish</h5>'+
            '<div class="progress">'+
              '<div class="progress-bar" style="width:50%"></div>'+
            '</div>'+
          '</div>'+
          '<div class="col-md-6 pb-1">'+
            '<h5>French</h5>'+
            '<div class="progress">'+
              '<div class="progress-bar" style="width:10%"></div>'+
            '</div>'+
          '</div>'+
        '</div>'
    }
    title.innerHTML = chosen
  }

  function showgrades(clicked_id){
    var gradedisplay3 = document.getElementById("gradeyear3")
    var gradedisplay2 = document.getElementById("gradeyear2")
    var gradedisplay1 = document.getElementById("gradeyear1")
    console.log(clicked_id)
    if(clicked_id === "year3"){
      gradedisplay3.style.display = "block";
      gradedisplay2.style.display = "none";
      gradedisplay1.style.display = "none";
      

    } else if(clicked_id === "year2"){
      gradedisplay3.style.display = "none";
      gradedisplay2.style.display = "block";
      gradedisplay1.style.display = "none";

    } else if(clicked_id === "year1"){
      gradedisplay3.style.display = "none"
      gradedisplay2.style.display = "none";
      gradedisplay1.style.display = "block";
    }

  }

  