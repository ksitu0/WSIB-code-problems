function NotAConstructor(thisisastr1nglol){
    document.body.innerHTML+="<div id='thisisastr1nglol'></div>";
    document.getElementById("thisisastr1nglol").innerHTML = thisisastr1nglol;

    document.body.innerHTML+="<div class='hehehehe'></div>";
    for(var i=0; i<document.getElementById("thisisastr1nglol").innerHTML.length; i++){
        document.querySelector(".hehehehe").innerHTML += "<div class='hehehehehe'></div>"
        for ( var j = 0; j < Math.floor(Math.random()*1723); j++ ) {
            document.querySelector(".hehehehehe:last-child").innerHTML += 'lawkeirhaiwprhliiueyrp93q48rh234qon8rycno8rieuwrow8y'.charAt(Math.floor(Math.random() * 'lawkeirhaiwprhliiueyrp93q48rh234qon8rycno8rieuwrow8y'.length));
        }
    }
    document.body.innerHTML+="<div class='idksomething'></div>";
    for(var i=0; i<document.getElementById("thisisastr1nglol").innerHTML.length; i++){
        try {
            document.querySelector(".idksomething").innerHTML += "<div class='" + document.querySelectorAll(".hehehehehe")[i].innerHTML+`${i}` + "'>" + document.getElementById("thisisastr1nglol").innerHTML.substring(i, i+1) + "</div>";
        } catch(e) {
            document.querySelector(".idksomething").appendChild(document.createElement('div'));
            document.querySelector(".idksomething > div:last-child").classList.add(document.querySelectorAll(".hehehehehe")[i].innerHTML+`${i}`);
            document.querySelector(".idksomething > div:last-child").innerText = document.getElementById("thisisastr1nglol").innerHTML.substring(i)
        }
    }
    document.body.innerHTML+="<div class='thisisastrlnglol'></div>";
    console.log(parseInt(((((document.querySelectorAll(".hehehehehe").length-120391823 + 120391822)*5-50)*20+1014)/100).toString().substring(0, ((((document.querySelectorAll(".hehehehe > .hehehehehe").length-120391823 + 120391822)*5-50)*20+1014)/100).toString().indexOf("."))))
    for(var i=parseInt(((((document.querySelectorAll(".hehehehehe").length-120391823 + 120391822)*5-50)*20+1014)/100).toString().substring(0, ((((document.querySelectorAll(".hehehehe > .hehehehehe").length-120391823 + 120391822)*5-50)*20+1014)/100).toString().indexOf("."))); i>=0; i--){
        document.querySelector(".thisisastrlnglol").innerHTML += JSON.parse(`{"`+[...document.querySelectorAll(".idksomething > *")].map((qwert) => `${qwert.classList[0]}": "${qwert.innerHTML}`).join("\",\"") +"\"}")[document.querySelectorAll(".hehehehehe")[i].innerHTML+`${i}`];
    }
    document.querySelector(".thisisastrlnglol").innerHTML= document.querySelector(".thisisastrlnglol").innerHTML.split('').reduce(function(haveyouever, eatenanegg){return haveyouever.concat('', eatenanegg)});
    document.body.innerHTML+="<canvas id='idksomething'><canvas class='yo'></canvas></canvas>";
    for(var i=0; i<document.querySelector(".thisisastrlnglol").innerHTML.length; i++){
        if(document.querySelectorAll(".thisisastrlnglol")[0].innerHTML.substring(i) === document.getElementById("thisisastr1nglol").innerHTML.substring(i)){
            console.log();
        } else {
            console.log("wrong!")
            document.querySelector("#idksomething").innerHTML = document.querySelector("#idksomething").innerHTML.replace(/canvas/g, "iframe");
            break;
        }
    }
    document.querySelectorAll("div:last-child")[0].innerHTML+= "<button>" + (document.querySelector("#idksomething > *").tagName.toLowerCase() === "canvas")+"</button>";
    return !(document.querySelector("#idksomething > *").tagName.toLowerCase() === "iframe");
}