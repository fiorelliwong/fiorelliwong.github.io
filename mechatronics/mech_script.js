const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector("ul");
const tabsButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tab__panels > div");

tabsButtons.forEach((tab, index) => {
    if (index== 0){

    } else {
        tabPanels[index].setAttribute("hidden", "");
    }
});