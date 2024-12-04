
function nextSlide() {
    document.getElementById("slide_one").style.animationName = 'none';
    document.getElementById("slide_one").style.animationDuration = 'none';
    document.getElementById("slide_two").style.animationName = 'none';
    document.getElementById("slide_two").style.animationDuration = 'none';
    setTimeout(function() { 
        document.getElementById("slide_one").style.animationName = 'slideinnext';
        document.getElementById("slide_one").style.animationDuration = '1s';
        document.getElementById("slide_two").style.animationName = 'slideinnext';
        document.getElementById("slide_two").style.animationDuration = '1s';
     }, 10);  
    if (document.getElementById("dot_one").classList.contains("dot_section_selected")) {
        document.getElementById("dot_one").className = 'dot_section';
        document.getElementById("dot_two").className = 'dot_section_selected';
    } else if (document.getElementById("dot_two").classList.contains("dot_section_selected")) {
        document.getElementById("dot_two").className = 'dot_section';
        document.getElementById("dot_three").className = 'dot_section_selected';
    } else if (document.getElementById("dot_three").classList.contains("dot_section_selected")) {
        document.getElementById("dot_three").className = 'dot_section';
        document.getElementById("dot_four").className = 'dot_section_selected';
    } else if (document.getElementById("dot_four").classList.contains("dot_section_selected")) {
        document.getElementById("dot_four").className = 'dot_section';
        document.getElementById("dot_one").className = 'dot_section_selected';
    }
    
}
    
    

function backSlide() {
    document.getElementById("slide_one").style.animationName = 'none';
    document.getElementById("slide_one").style.animationDuration = 'none';
    document.getElementById("slide_two").style.animationName = 'none';
    document.getElementById("slide_two").style.animationDuration = 'none';
    setTimeout(function() { 
        document.getElementById("slide_one").style.animationName = 'slideinback';
        document.getElementById("slide_one").style.animationDuration = '1s';
        document.getElementById("slide_two").style.animationName = 'slideinback';
        document.getElementById("slide_two").style.animationDuration = '1s';
     }, 10);
    if (document.getElementById("dot_one").classList.contains("dot_section_selected")) {
        document.getElementById("dot_one").className = 'dot_section';
        document.getElementById("dot_four").className = 'dot_section_selected';
    } else if (document.getElementById("dot_four").classList.contains("dot_section_selected")) {
        document.getElementById("dot_four").className = 'dot_section';
        document.getElementById("dot_three").className = 'dot_section_selected';
    } else if (document.getElementById("dot_three").classList.contains("dot_section_selected")) {
        document.getElementById("dot_three").className = 'dot_section';
        document.getElementById("dot_two").className = 'dot_section_selected';
    } else if (document.getElementById("dot_two").classList.contains("dot_section_selected")) {
        document.getElementById("dot_two").className = 'dot_section';
        document.getElementById("dot_one").className = 'dot_section_selected';
    }
}