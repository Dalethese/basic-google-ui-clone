let menu_link = document.querySelectorAll('.menu__link')
console.log(menu_link)

for (let i = 0; i < menu_link.length; i++) {
  menu_link[i].onclick = () => {
    let j = 0
    while (j < menu_link.length) {
      menu_link[j++].className = 'menu__link'
    }
    menu_link[i].className = 'menu__link active'
  }
}