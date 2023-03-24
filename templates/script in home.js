let before = ""
    function togglePlay(xx,path){
        let au = document.getElementById("au")
        if(before == xx){
        au.innerHTML = ""
        document.getElementById(xx).style.border = ""
        before = ""
        return 0
        }
        au.innerHTML = "<audio loop src='"+path+"' id='au"+xx+"'></audio>"
        document.getElementById("au"+xx).play()
        if(before != ""){
            document.getElementById(before).style.border = "";
        }
        document.getElementById(xx).style.border = "solid 2px"

        before = xx
        
    }

function showResult(){
    const soundDataJson = /*soundDataJson*/;
    const result = /*result*/;
    const keyword = "/*keyword*/";
    const ct = document.getElementById("content");
    if(result.length===0 && keyword!=="\/*keyword*\/"){
        ct.innerHTML = "Not Found This Keyword : "+keyword
        return 0
    }
    else if(result.length===0){
        ct.innerHTML = "<h3 class='title is-3'>Not Found Any Sound</h3>"
        ct.innerHTML += '<center><a href="/add_sound" class="button is-link is-light">\
                            <span class="material-symbols-outlined">\
                                add\
                            </span>\
                            Add Sound\
                        </a></center>'
        return 0
    }
    let xx = 0;
    let before = 0;
    const ii = parseInt(result.length/4) == 0 ? 1 : parseInt(result.length/4);
    console.log(ii)
    for(let i=0;i<=ii ;i++){
    ct_in_ct = ""
    console.log(i)
        for(let x=0;x<4;x++){
            if(xx >= result.length){
                break
            }
            let s_name = soundDataJson[result[xx]]['name'];
            ct_in_ct += '<div class="column button" id="'+(result[xx])+'" onclick="togglePlay(\''+result[xx]+'\',\'/stream/sound/'+result[xx]+'\')" >'
            ct_in_ct += '<img width="110px" src="https://cdn-icons-png.flaticon.com/512/461/461238.png"/>'
            ct_in_ct += '<h3>'
            ct_in_ct += s_name
            ct_in_ct+='</h3><a href="info/'+result[xx]+'"><span class="material-symbols-outlined">info</span></a>\
                </div>'
            xx++
        }
        ct.innerHTML += "<div class='columns'>"+ct_in_ct+"</div>"
    }
}

function showResult2(){
    const soundDataJson = /*soundDataJson*/;
    const result = /*result*/;
    const keyword = "/*keyword*/";
    const ct = document.getElementById("content");
    if(result.length===0 && keyword!=="\/*keyword*\/"){
        ct.innerHTML = "Not Found This Keyword : "+keyword
        return 0
    }
    else if(result.length===0){
        ct.innerHTML = "<h3 class='title is-3'>Not Found Any Sound</h3>"
        ct.innerHTML += '<center><a href="/add_sound" class="button is-link is-light">\
                            <span class="material-symbols-outlined">\
                                add\
                            </span>\
                            Add Sound\
                        </a></center>'
        return 0
    }
    let xx = 0;
    let before = 0;
    const ii = parseInt(result.length/4) == 0 ? 1 : parseInt(result.length/4);
    console.log(ii)
    for(let i=0;i<=ii ;i++){
    ct_in_ct = ""
    console.log(i)
        for(let x=0;x<4;x++){
            if(xx >= result.length){
                break
            }
            let s_name = soundDataJson[result[xx]]['Sound Name'];
            ct_in_ct += '<div class="column button" id="'+(result[xx])+'" onclick="togglePlay(\''+result[xx]+'\',\''
            +'https://drive.google.com/uc?export=download&id='+
            soundDataJson[result[xx]]['Sound File'].split("?id=")[1]
            +'\')">\
                <img width="110px" src="https://cdn-icons-png.flaticon.com/512/461/461238.png"/>\
                <h3>'
            ct_in_ct+=s_name
            ct_in_ct+='</h3><a href="info/'+result[xx]+'"><span class="material-symbols-outlined">info</span></a>\
                </div>'
            xx++
        }
        ct.innerHTML += "<div class='columns'>"+ct_in_ct+"</div>"
    }
}

function showMessage(){
    const keyword = "/*keyword*/";
    const ct = document.getElementById("content");
    ct.innerHTML = keyword;
}
function showAdminBt(){
    document.getElementById("bt-ct").innerHTML += "<a class='button is-success is-light animate__animated animate__headShake ' href='/admin' >\
            <span class='material-symbols-outlined'>\
                admin_panel_settings\
            </span>\
            Admin\
        </a>";
}
