function asTabs(node) {

    const tabsArray = Array.from(node.children);

    const tabs= tabsArray.map(child => {

        const button = document.createElement("button");
        button.textContent = child.getAttribute("data-tabname");

        button.addEventListener("click", () => selectTab(child, button));
        return { node: child, button };
    });

    const tabList = document.createElement("div");
    tabs.forEach(({ button }) => tabList.appendChild(button));

    node.insertBefore(tabList, node.firstChild);

    function selectTab(selectedNode, selectedButton) {

        tabs.forEach(({ node, button }) => {
            const isSelected = node === selectedNode;
            node.style.display = isSelected ? "" : "none";
            button.style.color = isSelected ? "red" : "";
        });
    }

    // select the first tab by default
    selectTab(tabs[0].node, tabs[0].button);
}

asTabs(document.querySelector("tab-panel"));
