const swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5,
});



//-----window scroll.....
window.addEventListener('scroll',()=>{
    document.querySelector('.profile-popup').style.display='none'
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
    document.querySelector('.notification-box').style.display='none'

})

//---start profile popup-----

    


document.querySelectorAll('#my-profile-picture').forEach(Allprofile => {
    Allprofile.addEventListener('click', ()=>{
        document.querySelector('.profile-popup').style.display='flex'
    })
});

document.querySelectorAll('.close').forEach(AllClose=>{
    AllClose.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='none'
        document.querySelector('.add-post-popup').style.display='none'
        document.querySelector('.theme-customize').style.display='none'
    });
});

//-----start aside
let menuItem = document.querySelectorAll('.menu-items');
menuItem.forEach(item=>{
    item.addEventListener('click', ()=>{
        removeActive();
        item.classList.add('active');
        document.querySelector('.notification-box').style.display='none'
    })
})

const removeActive = ()=>{
    menuItem.forEach(item=>{
        item.classList.remove('active');
    })
}


//---notification
document.querySelector('#Notify-box').addEventListener('click', ()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#ntCounter1').style.display='none'
})

//---messages

document.querySelector('#messageMenu').addEventListener('click',()=>{
    document.querySelector('#notifyCounter2').style.display='none'
    document.querySelector('.messages').classList.toggle('boxshadow1');
    setTimeout(() => {
        document.querySelector('.messages').classList.remove('boxshadow1')
    }, 3000);
})

//--friend request-----

let Accept = document.querySelectorAll('#Accept')
let Delete = document.querySelectorAll('#Delete')


Accept.forEach(accept=>{
accept.addEventListener('click',()=>{
    accept.parentElement.style.display='none'
    accept.parentElement.parentElement.querySelector('.alert').style.display='block'
})
});

Delete.forEach(deletee=>{
    deletee.addEventListener('click',()=>{
        deletee.parentElement.parentElement.style.display='none'
    })
})




document.querySelector('#profile-upload').addEventListener('change', ()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})
//----add post popup-----
document.querySelector('#create-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
})

document.querySelector('#feed-pic-upload').addEventListener('change', ()=>{
    document.querySelector('#postimg').src = URL.createObjectURL(document.querySelector
        ('#feed-pic-upload').files[0])
})

//----add story---
document.querySelector('#add-story').addEventListener('change', ()=>{
    document.querySelector('.story img').src = URL.createObjectURL(document.querySelector
        ('#add-story').files[0]);
        document.querySelector('.add-story').style.display='none'
})

//---mini button input
document.querySelector('.mini-button').addEventListener('click', ()=>{
    document.querySelector('.input-post').classList.add('boxshadow1')
    setTimeout(() => {
        document.querySelector('.input-post').classList.remove('boxshadow1')
    }, 3000);
})

document.querySelector('.mini-button').addEventListener('dblclick', ()=>{
    document.querySelector('.add-post-popup').style.display='flex'
})
//---liked button---

document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click', () =>{
        liked.classList.toggle('liked');
    })
    
})

//---theme customize---
document.querySelector('#theme').addEventListener('click',()=>{
    document.querySelector('.theme-customize').style.display='flex'
})

//----font size---
let fontSize = document.querySelectorAll('.choose-size span');

const removeSelectorActive =()=>{
    fontSize.forEach(size=>{
        size.classList.remove('active')
    })
}

fontSize.forEach(size=>{    
    size.addEventListener('click',()=>{
        let fontSize;
        removeSelectorActive();
        size.classList.toggle('active');
        


        if(size.classList.contains('font-size-1')){
            fontSize='10px'
        }else if(size.classList.contains('font-size-2')){
            fontSize= '13px'
        }else if(size.classList.contains('font-size-3')){
            fontSize='16px'
        }else if(size.classList.contains('font-size-4')){
            fontSize='19px'
        }else if(size.classList.contains('font-size-5')){
            fontSize='22px'
        }
        document.querySelector('html').style.fontSize = fontSize;        
    })

})

//primary   color----
let colorPallete = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');

const removeSelectorColor =()=>{
    colorPallete.forEach(color=>{
        color.classList.remove('active')
    })
}


colorPallete.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        removeSelectorColor();
        color.classList.add('active');
        
        if(color.classList.contains('color-1')){
            Hue = 252;
        }else if(color.classList.contains('color-2')){
            Hue = 52;
        }else if(color.classList.contains('color-3')){
            Hue = 352;
        }else if(color.classList.contains('color-4')){
            Hue = 152;
        }else if(color.classList.contains('color-5')){
            Hue = 202;
        }
        root.style.setProperty('--primary-color-hue', Hue);
    })
})

//background color-----
let bg1 = document.querySelector('.bg1');
let bg2 = document.querySelector('.bg2');

//---background color value
let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;

const changeBg = ()=>{
    root.style.setProperty('--color-dark-light-theme', darkColorLightTheme);
    root.style.setProperty('--color-light-light-theme', lightColorLightTheme);
    root.style.setProperty('--color-white-light-theme', whiteColorLightTheme);
}


bg2.addEventListener('click',()=>{
    darkColorLightTheme = '95%';
    lightColorLightTheme = '5%';
    whiteColorLightTheme = '10%';
    

    //----add active class
bg2.classList.add('active');
bg1.classList.remove('active');
    bgIcon();
    changeBg();

});

bg1.addEventListener('click',()=>{
    //----add active class
bg1.classList.add('active');
bg2.classList.remove('active');

window.location.reload();

});
//dark theme aside icon 
let menuItemImg = document.querySelectorAll('.menu-items span img');

const bgIcon = ()=>{
    menuItemImg.forEach(icon=>{
        icon.classList.add('icon-bg');
    })
}




// document.querySelectorAll('.close').forEach(AllClose=>{
//     AllClose.addEventListener('click',()=>{
//         document.querySelector('.add-post-popup').style.display='none'
//     });
// });

// document.querySelectorAll('.add-post').forEach(Allpost => {
//     Allpost.addEventListener('click', ()=>{
//         document.querySelector('.add-post-popup').style.display='flex'
//     })
// });
