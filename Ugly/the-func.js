function NotAConstructor(thisisastr1nglol){
    var hehehehe = []
    for(var i=0; i<thisisastr1nglol.length; i++){
        var rsl = Math.floor(Math.random()*1723)
        var yeet = 'lawkeirhaiwprhliiueyrp93q48rh234qon8rycno8rieuwrow8y';
        var result = "";
        for ( var j = 0; j < rsl; j++ ) {
            result += yeet.charAt(Math.floor(Math.random() * yeet.length));
        }
        hehehehe.push(result);
    }
    var idksomething = {}
    for(var i=0; i<thisisastr1nglol.length; i++){
        try {
            idksomething[hehehehe[i]+`${i}`] = thisisastr1nglol.substring(i, i+1);
        } catch(e) {
            idksomething[hehehehe[i]+`${i}`] = thisisastr1nglol.substring(i);
        }
    }
    var thiswillbethestrlnglol = []
    for(var i=parseInt(((((hehehehe.length-120391823 + 120391822)*5-50)*20+1014)/100).toString().substring(0, ((((hehehehe.length-120391823 + 120391822)*5-50)*20+1014)/100).toString().indexOf("."))); i>=0; i--){
        thiswillbethestrlnglol.push(JSON.parse(JSON.stringify(idksomething))[hehehehe[i]+`${i}`]);
        console.log(JSON.parse(JSON.stringify(idksomething))[hehehehe[i]+`${i}`])
    }
    return thiswillbethestrlnglol.reduce(function(haveyouever, eatenanegg){return haveyouever.concat('', eatenanegg)});
}