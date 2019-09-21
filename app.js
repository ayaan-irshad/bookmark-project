var tabButtons = document.querySelectorAll(".tabbed-btns");
var tabPanels = document.querySelectorAll(".features__tab");
const faq = document.querySelectorAll('.faq__ques');
const faqPara = document.querySelectorAll('.faq__ques--para');
const faqArrow = document.querySelectorAll('.faq-arrow');

function showPanel(PanelIndex) {
    tabButtons.forEach(function(cur) {
        cur.style.border = "";
        cur.style.color = "#d3d3d3";
    });

    tabPanels.forEach(function(cur) {
        cur.style.display = "none";
    });

    tabButtons[PanelIndex].style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    tabButtons[PanelIndex].style.color = "black";
    tabPanels[PanelIndex].style.display = 'flex';
}
    
showPanel(0);


for (let i = 0 ; i < faq.length ; i++ ) {
    faq[i].addEventListener('click', function() {
        faqPara[i].classList.toggle('faq__ques--open');
        faqArrow[i].classList.toggle('faq__arrow');
    })
}