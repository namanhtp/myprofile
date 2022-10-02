
window.addEventListener("load", function () {
    const menuLink = document.querySelectorAll(".header_menu--link");
    const line = document.createElement("div");
    const menu = document.querySelector(".header_list--menu");
    const profileColor = document.querySelector('.profile_color')
    const colorClose = document.querySelector('.profile_color-close')
    const colorOpen = document.querySelector('.profile_color-edit')
    const colorOption = document.querySelectorAll('.profile_color-link')


colorOption.forEach(function (item) {
    item.addEventListener("click", function (e) {
        const listElement = document.getElementsByClassName('profile_color-link')
        if (listElement && listElement.length) {
            for(let  i = 0; i < listElement.length; i++) {
                let item = listElement[i];
                item.classList.remove('active_color');
            }
            item.classList.add('active_color');
            console.log(item.style)
            let colorChange = window.getComputedStyle(item).backgroundColor
            document.documentElement.style.setProperty('--primary-Color', colorChange);
        }
})
})

    colorOpen.addEventListener("click", function (e) {
        profileColor.classList.toggle('right_0')
    })

    colorClose.addEventListener("click", function (e) {
        profileColor.classList.toggle('right_0')
    })

    line.className = "line-effect";
    document.body.appendChild(line);

    Array.from(menuLink).forEach((item) =>
        item.addEventListener("mouseenter", handleHoverLink)
    );

    
    function handleHoverLink(e) {
        const court = e.target.getBoundingClientRect();
        const { left, top, width, height } = court;
        const gap = 14.2;

      // Công thức tính toán vị trí của line
        line.style.left = `${left}px`;
        line.style.width = `${width}px`;
        line.style.top = `${top + height + gap}px`;
    }
    menu.addEventListener("mouseleave", handleMouseLeave);
    function handleMouseLeave() {
        line.style.width = null;
    }
});
