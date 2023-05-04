//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root  = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');




//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
 




const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

let heart = document.querySelector(' .action-button, .interaction-button ')
let activityContainer = document.querySelector('  .imgcontainer .photo ')

heart.addEventListener('click', () =>{
    activityContainer.classList.toggle('hide');
    changeicons(heart);
})

let likes = {};

function likePost(postId) {
  if (!likes[postId]) {
    likes[postId] = 0;
  }
  likes[postId]++;
  const likesCount = document.querySelector('#likes-count-' + postId);
  likesCount.textContent = likes[postId] + ' likes';
}


const addInteractionsToPost = (post) => {
    let likebtn = post.querySelector('.like-btn');
    let likeimg = post.querySelector('.like-icon');
likebtn.addEventListener('click', () => {
    if( likebtn.src.includes('nofill')){
        likeimg.classList.add('show');
        }
    
    setTimeout(()=>{
        likeimg.classList.remove('show');
    },2500);
    
}
)

}

let  posts = [...document.querySelectorAll('.feed')];
posts.map(post => addInteractionsToPost(post));

// get the timer element and reset button element
const timerEl = document.getElementById('timer');
const resetBtn = document.getElementById('reset-btn');

// get the start time from sessionStorage or set it to the current time
let startTime = sessionStorage.getItem('startTime') || Date.now();

// update the timer every second
setInterval(() => {
  // calculate the elapsed time
  const elapsed = Date.now() - startTime;

  // format the elapsed time into hours, minutes, and seconds
  const hours = Math.floor(elapsed / (1000 * 60 * 60));
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsed / 1000) % 60);

  // update the timer element with the formatted time
  timerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // save the start time in sessionStorage
  sessionStorage.setItem('startTime', startTime);
}, 1000);

// when the reset button is clicked, reset the start time to the current time and update the timer element
resetBtn.addEventListener('click', () => {
  startTime = Date.now();
  timerEl.textContent = '00:00:00';
});


//theme customization



const openthememodal = () => {
    themeModal.style.display = 'grid';
}

const closethememodal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closethememodal);
theme.addEventListener('click', openthememodal);


const remove_size = ()=>{
    fontSizes.forEach(sizes =>{
        sizes.classList.remove('active');
    })
    
};

fontSizes.forEach( sizes => {
   
    
    sizes.addEventListener('click', () => {
        remove_size();
        let fontSize;
        sizes.classList.toggle('active');

        if(sizes.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
             
        }else if(sizes.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        }else if(sizes.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-10rem');
        }else if(sizes.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left','-4rem');
            root.style.setProperty('----sticky-top-right','-15rem');
        }else if(sizes.classList.contains('font-size-5')){
            fontSize = '21px';
            root.style.setProperty('----sticky-top-left','-6rem');
            root.style.setProperty('----sticky-top-right','-20rem');}

            
    document.querySelector('html').style.fontSize = fontSize;
 
    })


   
})


colorPalette.forEach(color =>{
    color.addEventListener('click' , () =>{
        let primary;
       if(color.classList.contains('color-1')){
        primaryHue = 252;
       }else if(color.classList.contains('color-2')){
        primaryHue = 52;
       }else if(color.classList.contains('color-3')){
        primaryHue = 352;
       }else if(color.classList.contains('color-4')){
        primaryHue = 152;
       }else if(color.classList.contains('color-5')){
        primaryHue = 202;
       } 
       
       root.style.setProperty('--primary-color-hue', primaryHue);
    }
    )
})

let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;

const changebg = () =>{
    root.style.setProperty('--light-color-lightness' , lightcolorlightness);
    root.style.setProperty('--white-color-lightness' , whitecolorlightness);
    root.style.setProperty('--dark-color-lightness' , darkcolorlightness);

}
bg2.addEventListener('click', ()=> {

    darkcolorlightness = '90%';
    whitecolorlightness = '20%';
    lightcolorlightness ='15%';
    bg2.classList.add('active');
    bg1.classList.remove('active');

    bg3.classList.remove('active');
    changebg();
});

bg1.addEventListener('click', ()=> {

    darkcolorlightness = '90%';
    whitecolorlightness = '20%';
    lightcolorlightness ='0%';
    bg1.classList.add('active');
    bg3.classList.remove('active');

    bg2.classList.remove('active');
    window.location.reload();
});

bg3.addEventListener('click', ()=> {

    darkcolorlightness = '90%';
    whitecolorlightness = '20%';
    lightcolorlightness ='0%';
    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changebg();
});