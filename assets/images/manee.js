//sidebar
const menuItems=document.querySelectorAll('.menu-item');
//messages
const messagesNotification=document.querySelectorAll('.messages-notification');
const messages=document.querySelectorAll('.messages');
const message=messages.querySelectorAll('.messages');
const messageSearch=document.querySelectorAll('.message-search');
//theme
const theme=document.querySelectorAll('#theme');
const themeModal=document.querySelectorAll('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size span');
var root=document.querySelectorAll(':root');
const colorPalette=document.querySelectorAll('.choose-size span');
const bg1=document.querySelectorAll('.bg-1');
const bg2=document.querySelectorAll('.bg-2');
const bg3=document.querySelectorAll('.bg-3');
//***********************sidebar****************//



//remove active class from all menu item
const changeActiveItem=()=>{
	menuItems.forEach(item=>{
		item.classList.remove('active');
	})

}
menuItems.forEach(item =>{
	item.addEventListener('click',()=>{
		changeActiveItem();
		item.classList.add('active');
		if(item.id !="notifications"){
			document.querySelector('.notification-popup').style.display='none';
		}else{
			document.querySelector(".notification-popup").style.display='block';
			document.querySelector('.notifications .notification-count').style.display='none';
			
		}
		
		
	})
})

//*********messgaes*******//
//search out
const searchMessage=()=>{
 const val messageSearch.value.toLowerCase();
 message.forEach(chat=>{
  let name=chat.querySelectorAll('h5').textContent.toLocaleLowerCase();
  if(name.indexOf(val)!=-1){
     chat.style.display='flex';
  }else{
     chat.style.display='none';


  }
 })
}
//highlight messages card when menu item is clicked

messagesNotification.addEventListener('click',()=>{
   messages.style.boxShadow='0 0 1rem var(--color-primary)';
   messagesNotification.querySelector('.notification-count').style.display='none';
   setTimeout(()=>{
   
   messages.style.boxShadow='none';
   },2000);
})


//theme/display customization
//opens modal 
constopenThemeMOdal=()=>{
   themeModal.style.display='grid');
}
//closes modal
const closeThemeModal=()=>{
   if(e.target.classList.contains('customize-theme')){
      themeModal.style.display='none';

  }
}
//close modal
themeModal.addEveniListener('click',closeThemeModal);
theme.addEventListener('click',openThemeModal);



//************************fonts**************//
//remove active class from spans or font size selctors
const removeSizeSelctor=()=>{
  fontSizes.forEach(size=>{
   size.classList.remove('active');
  })
 }


fontSizes.forEach(size=>{
   size.addEventSelector('click'()=>{
   
     removeSizeSelector();
   let fontSize;
   size.classList.toggle('active');
  
   
   if(size.classList.contains('font-size-1')){
     fontSize='10px';
	 root.style.setProperty('--sticky-top-left','5.4rem');
	 root.style.setProperty('--sticky-top-right','5.4rem');
	}else if(size.classList.contains('font-size)){
	   fontSize='13px';
	    root.style.setProperty('--sticky-top-left','5.4rem');
	 root.style.setProperty('--sticky-top-right','-7rem');
	}else if(size.classList.contains('font-size)){
	   fontSize='16px';
	    root.style.setProperty('--sticky-top-left','-2rem');
	 root.style.setProperty('--sticky-top-right','-17rem');
	}else if(size.classList.contains('font-size)){
	   fontSize='19px';
	    root.style.setProperty('--sticky-top-left','-5rem');
	 root.style.setProperty('--sticky-top-right','-25rem');
	}else if(size.classList.contains('font-size)){
	   fontSize='22px';
	    root.style.setProperty('--sticky-top-left','-10rem');
	 root.style.setProperty('--sticky-top-right','-35rem');
	}
	//change font size of the root html element 
	document.querySelector('html').style.fontSize=fontSize;
})
})


const changeActiveColorClass=()=>{
   colorPalette.forEach(colorPicker=>{
     coloPicker.classList.remove('active');
})
}

//change primary colors



colorPalette.forEach(color=>{
   color.addEventListener('click',()=>{
       let primary;
	   changeAvtiveColorClass();
	   //remove actie class formcolors//
       if(color.classList.contains('color-1')){
	      primaryHue=252;
		  
	   }else if{color.slassList.contains('color-2')){
	      primaryHue=52;
	   }else if{color.slassList.contains('color-3')){
	      primaryHue=352;
	   }else if{color.slassList.contains('color-4')){
	      primaryHue=152;
	   }else if{color.slassList.contains('color-5')){
	      primaryHue=202;
	   }
	   
	   root.style.setProperty('--primary-color-hue',primaryHue);
   
   })
})







//theme background values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//changes background color
const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
	 root.style.setProperty('--white-color-lightness',whiteColorLightness);
	  root.style.setProperty('--dark-color-lightness',darkColorLightness);
	
}

bg2.addEventListener('click',()=>{
  darkColorLightness='95%';
   whiteolorLightness='20%';
    lightColorLightness='15%';
	
	//add active class
	bg2.classList.add('active');
	//remove active class from others
	bg1.classList.remove('active');
	bg3.classList.remove('active');

   changeBG();
});



bg3.addEventListener('click',()=>{
  darkColorLightness='95%';
   whiteolorLightness='10%';
    lightColorLightness='0%';
	
	//add active class
	bg2.classList.add('active');
	//remove active class from others
	bg1.classList.remove('active');
	bg3.classList.remove('active');

   changeBG();
});
//end