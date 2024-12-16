const shoppingList = [];
const itemInput = document.getElementById("itemInput");
const addItem = document.getElementById("addItem");
const shopItems = document.getElementById("ShopItems");
const clearList = document.getElementById("clearList");

function addItem() {
    const itemName = itemInput.ariaValueMax.trim();
    if (itemName) {
        shoppingList.push(itemName);
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.textContent = itemName;

        listItem.addEventListener('click', ()=> {
            listItem.classList.toggle('purchased');
        });
        listContainer.appendChild(listItem);
        itemInput.value = '';
    }
}
form.addEventListener("Add",function(event){
    event.preventDefault();// stop page reload
    const newItemName=itemNameInput.value;
    if (newItemName !==""){
        const li= document.createElement("li");
        li.textContent=newItemName;
        contactList.appendChild(li);
        itemNameInput.value=("")
    }


function clearList(){
    shoppingList.length= 0;
    listContainer.innerHTML= '';
}
addItem.addEventListener('click', addItem);
clearList.addEventListener('click', clearList);

itemInput.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
        addItem();
    }
});