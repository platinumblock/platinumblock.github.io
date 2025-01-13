function view(project){
    if(project == "doorlist"){
        localStorage.setItem("height100", 11596);
    }
    if(project == "converse"){
        localStorage.setItem("height100", 3115);
    }
    window.location.href = project + ".html"
}