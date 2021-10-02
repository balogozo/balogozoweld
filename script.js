const $openNav = document.querySelector(".icone1")
const $menu = document.querySelector(".menu");

$openNav.onclick = (e) => {
    if ($menu.style.display === "block") {
        $menu.style.display = "none";
        $openNav.innerHTML = "<i class='bx bx-menu'></i>";


    } else {
        $menu.style.display = "block";
        $openNav.innerHTML = "<i class='bx bx-x'></i>";
    }
}

// const FermerNav = document.querySelector(".fermer")
// const Menu = document.querySelector(".menu")

// const PositionMenu = Menu.getBoundingClientRect().left;

// OpenNav.addEventListener("click",()=>{
//     if(PositionMenu <0){
//         Menu.classList.add("monter")

//     }
// })

// FermerNav.addEventListener("click",()=>{
//     if(PositionMenu <0){
//         Menu.classList.remove("monter")

//     }

// })

// console.log("coucou js");