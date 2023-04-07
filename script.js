function vegetarianmenu(dishes) {
    const menuNode=document.querySelector('#menu');
    const vegeteriandishes=dishes.filter(
        (option)=> option.vegetarian==true
    );
    vegeteriandishes.foreach((option) =>{
        let dish=document.createElement("li");
        dish.textContent=option.name;
        menuNode.appendChild(dish);
    });
}
const dishes=[
    {
        name:"Eggplant Parmesan",
        vegetarian:true
    },
    {
        name:"Spaghetti & meatballs",
        vegetarian:false
    },
    {
        name:"Paratha",
        vegetarian:true
    },
];
vegetarianmenu(dishes);