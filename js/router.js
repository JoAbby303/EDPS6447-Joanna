function router(value){
    hideallview();
    switch(value){
        case "grid":
                console.log("Show grid view");
                grid.classList.remove("d-none");
                //$("#grid").show();
            break;
            
        case "view_resume":
                console.log("Show view resume");
                view_resume.classList.remove("d-none");
            break;
        default:
            console.log("Show view design");
            view_design.classList.remove("d-none");
    }
}

function hideallview(){
    grid.classList.add("d-none");
    //$("#grid").hide();
    view_resume.classList.add("d-none");
    view_design.classList.add("d-none");
}