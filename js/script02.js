// Local Storage
/****************************************************************** */

// Check if local storage has the color-option or empty
let maincolor = window.localStorage.getItem("color-option");
if(maincolor !== null){
    // take the color from localStorage if found
    document.documentElement.style.setProperty('--main-color',window.localStorage.getItem("color-option"));
    document.querySelectorAll('.colors-list li').forEach((element)=>{
        element.classList.remove('active');
        if(element.dataset.color === maincolor){
            element.classList.add('active')
        }
    })
    
}
// Switch colors
let colorList = document.querySelectorAll('.colors-list li');
colorList.forEach(function(li){
    li.addEventListener('click',(e)=>{
        // function to handel active calss
        HandelActiveClass(e)
        document.documentElement.style.setProperty('--main-color',`${e.target.dataset.color}`);
        // set the target color to localStorage
        window.localStorage.setItem('color-option',e.target.dataset.color);
    });
});
// End switch colors


// the second html page car menu
const menu =[
    {
        id:1,
        img:"imgs/timeline02.jpg",
        title:'Ferrari',
        category:'ferrari',
        price:50.05,
        rate:'5.0'
    },
    {
        id:2,
        img:"imgs/gallary05.jpg",
        title:'Ferrari',
        category:'ferrari',
        price:50.05,
        rate:'5.0'
    },
    {
        id:3,
        img:"imgs/ourProgress.webp",
        title:'Lamborghini',
        category:'lamborghini',
        price:40.05,
        rate:'4.5'
    },
    {
        id:4,
        img:"imgs/gallary03.jpg",
        title:'Lamborghini',
        category:'lamborghini',
        price:40.05,
        rate:'4.5'
    },
    {
        id:4,
        img:"imgs/footer02.jpg",
        title:'Lamborghini',
        category:'lamborghini',
        price:40.05,
        rate:'4.5'
    },
    {
        id:6,
        img:"imgs/gallary04.jpeg",
        title:'Audi',
        category:'audi',
        price:24.05,
        rate:'4.8'
    },
    {
        id:7,
        img:"imgs/footer01.webp",
        title:'Audi',
        category:'audi',
        price:24.05,
        rate:'4.8'
    },
    {
        id:8,
        img:"imgs/gallary07.jpg",
        title:'Bmw',
        category:'bmw',
        price:30.05,
        rate:'4.0'
    },
    {
        id:9,
        img:"imgs/lan2.jpg",
        title:'Bmw',
        category:'bmw',
        price:24.05,
        rate:'4.3'
    },
    {
        id:10,
        img:"imgs/gallary01.jpg",
        title:'Bmw',
        category:'bmw',
        price:24.05,
        rate:'4.3'
    },
    {
        id:11,
        img:"imgs/land5.jpg",
        title:'Marcedec',
        category:'marcedec',
        price:35.05,
        rate:'4.6'
    },
    {
        id:12,
        img:"imgs/timeline06.jpg",
        title:'Marcedec',
        category:'marcedec',
        price:35.05,
        rate:'4.6'
    }
];
let sectionCenter = document.querySelector('.section-center');
let filterBtn = document.querySelectorAll('.btn-container .filter-btn');

// function for display items
function displayItems(disItems){
    let displayelements = disItems.map(function(item){
        return `
    <article class="item">
                    <img src="${item.img}" alt="">
                    <div class="text-parent">
                        <h3>${item.title}</h3>
                        <p>four-seater car</p>
                        <section>
                            <p class="price">$${item.price} <span>/Days</span></p>
                            <span class="rate"><i class="fa-solid fa-star"></i>${item.rate}</span>
                        </section>
                    </div>
                </article>
    `;
    });
    displayelements = displayelements.join('');
    sectionCenter.innerHTML = displayelements;
    
};

// the window
window.addEventListener('DOMContentLoaded',function(){
    displayItems(menu);
    const categories = menu.reduce(
        function(values , item){
        if(!values.includes(item.category)){
            values.push(item.category)
        };
        return values;
    },
    ['all']
    );
});

// filter Btn
filterBtn.forEach((btn) =>{
    btn.addEventListener('click',function(e){
        filterBtn.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active')
        });
        const Category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === Category){
                return menuItem;
            };
        });
        if(Category === 'all'){
            displayItems(menu)
        }else{
            displayItems(menuCategory);
        }
    })
});