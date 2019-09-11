var tabButtons = document.querySelectorAll(".tabbed-btns");
var tabPanels = document.querySelectorAll(".features__tab");

function showPanel(PanelIndex) {
    tabButtons.forEach(function(cur) {
        cur.style.border = "";
    });

    tabPanels.forEach(function(cur) {
        cur.style.display = "none";
    });

    tabButtons[PanelIndex].style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    tabPanels[PanelIndex].style.display = 'flex';
}
    
showPanel(0);