
const prev =document.getElementById('btn-prev')
const next =document.getElementById('btn-next')
const slides = document.querySelectorAll('.slide')
const dots =document.querySelectorAll('.dot')

let index =0;

const prepareCurrentSlide=ind=>{
	activeSlide(ind);
	activeDot(ind);
}

const activeSlide=n=>{
	for (slide of slides) {
		 slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = n =>{
	for (dot of dots) {
		dot.classList.remove('active');
   }
   dots[n].classList.add('active');
}

const nextSlide = ()=>{
	if(index==slides.length-1){
		index=0;
		prepareCurrentSlide(index);
		
	}else{
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide =()=>{
	if(index==0){
		index=slides.length-1;
		prepareCurrentSlide(index);
	}else{
		index--;
		prepareCurrentSlide(index);
	}
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

///////////////////////////////////////////////
const menuBtn = document.querySelector('.menuBtn')
const menuList = document.querySelector('.menuList')

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('show')
})

const menuBtn2 = document.querySelector('.menuBtn2')
const menuList2 = document.querySelector('.menuList2')

menuBtn2.addEventListener('click', ()=>{
    menuList2.classList.toggle('show')
})

const menuBtn3 = document.querySelector('.menuBtn3')
const menuList3 = document.querySelector('.menuList3')

menuBtn3.addEventListener('click', ()=>{
    menuList3.classList.toggle('show')
})

/////////////////////////////////////////////////
const titles = document.querySelectorAll('.accordion-title')
const contents = document.querySelectorAll('.accrodion-content')

titles.forEach(item => item.addEventListener('click', ()=>{
	const activeContent = document.querySelector('#'+item.dataset.tab)
	if (activeContent.classList.contains('active')){
		activeContent.classList.remove('active')
		item.classList.remove('active')
		activeContent.style.maxHeight=0;
	}else{
		contents.forEach(element=>{
			element.classList.remove('active')
			element.style.maxHeight=0
		})

		titles.forEach(element=>element.classList.remove('active'))

		item.classList.add('active')
		activeContent.classList.add('active')
		activeContent.style.maxHeight=activeContent.scrollHeight='px'
	}
}))


///////////////////////////////////////////////////////
const tabButton = document.querySelectorAll('.tab_heder_button')
const tabs = document.querySelectorAll('.tab_body')

for(let x = 0; x < tabButton.length; x++){
    tabButton[x].addEventListener('click',()=>{
        for(let y = 0; y < tabs.length; y++){
            if (x == y){
                tabs[y].classList.add('tab_body_active')
                tabButton[y].classList.add('tab_button_active')
               
            }else{
                tabs[y].classList.remove('tab_body_active')
                tabButton[y].classList.remove('tab_button_active')
             
            }
        }

    })
}

