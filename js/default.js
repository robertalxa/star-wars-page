let navDrop = document.getElementById('drop-down');
let controleNav = false;

navDrop.addEventListener('click', controlaNavDrop);

function controlaNavDrop(){
    if(controleNav){
        let lisNav = document.getElementsByClassName('navLink');
        for(li of lisNav) {
            if(li.id !== '') continue;
            li.style.display = 'none';
            li.style.margin = '0 0 0'; //Rever essas margens
        }
        navDrop.style.transform = 'rotate(0deg)';
    }else{
        let lisNav = document.getElementsByClassName('navLink');
        for(li of lisNav) {
            li.style.display = 'inline';
            li.style.margin = '0 0 10px'; //Rever essas margens
        }
        navDrop.style.transform = 'rotate(-180deg)';
    }
    controleNav = !controleNav;
}