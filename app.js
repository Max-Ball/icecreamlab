//#region const arrays
const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1.38
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1.23
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2.25
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://images.unsplash.com/photo-1513329634746-37399553de66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  price: 2.74
}, {
  name: 'Waffle Bowl',
  image: 'https://www.ellaclaireinspired.com/wp-content/uploads/2015/06/ec-waffle-cone-bowls-682x1024.jpg',
  price: 4.34
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1.83
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2.63
}]
//#endregion

let orders = []

//#region Draw items to menu
function drawIceCream(){
  let template = ' '
  iceCream.forEach(ic =>
  template += `
  <div class="col-md-4 ice-cream-item px-1 mb-2" onclick="getIceCream('${ic.name}')">
    <img class="img-fluid rounded" src="${ic.image}" alt="">
    <div class="name p-2 fs-1">${ic.name}</div>
    <div class="price p-2 fs-4">$${ic.price}</div>
  </div>
  ` )
  
  let iceCreamElem = document.getElementById('ice-cream')
  iceCreamElem.innerHTML = template
}

drawIceCream()

function drawVessels(){
  let template = ' '
  vessels.forEach (vessel => template += `
  <div id='${vessel.name}' class="col-md-6 vessels-item px-1 mb-2" onclick="getVessels('${vessel.name}')">
    <img class="img-fluid rounded" src="${vessel.image}" alt="">
    <div class="name p-2 fs-1">${vessel.name}</div>
    <div class="price p-2 fs-4">$${vessel.price}</div>
  </div>
  `)

  let vesselsElem = document.getElementById("vessels")
  vesselsElem.innerHTML = template
}

drawVessels()

function drawToppings(){
  let template = ' '
  toppings.forEach(topping => template += `
  <div class="col-md-6 ice-cream-item px-1 mb-2" onclick="getToppings('${topping.name}')">
    <img class="img-fluid rounded" src="${topping.image}" alt="">
    <div class="name p-2 fs-1">${topping.name}</div>
    <div class="price p-2 fs-4">$${topping.price}</div>
  </div>
  `)

  let toppingsElem = document.getElementById("toppings")
  toppingsElem.innerHTML = template
}

drawToppings()
//#endregion

function drawOrders(){
  let template = ' '
  orders.forEach((order, i) => template += `
  <div class="col-md-8 bg-dark text-light d-flex flex-wrap justify-content-between my-1 py-1">
    <h4>
      <b>${order.name}</b>
    </h4>
    <h5>$${order.price}</h5>
  </div>
  <div class="col-md-4 bg-dark text-light d-flex justify-content-end my-1 py-1">
    <button class="btn btn-danger align-self-end" onclick="removeItem('${i}')">Remove</button>
  </div>
  `)

  let ordersElem = document.getElementById("orders")
  ordersElem.innerHTML = template
  drawTotal()
}

function drawTotal(){
  let total = 0
  orders.forEach(order => total += order.price)
  let totalElem = document.getElementById("total")
  totalElem.innerText = total.toFixed(2)

}
// #region Get Items = grabs items from menu and puts them into order array
function getIceCream(selectedIceCream){
  let getIceCream = iceCream.find(ic => ic.name == selectedIceCream)
  orders.push(getIceCream)
  drawOrders()
}

function getVessels(selectedVessel){
  let getVessel = vessels.find(vessel => vessel.name == selectedVessel)
  if(getVessel.name == 'Waffle Cone'){
    document.getElementById("Waffle Bowl").classList.add("d-none")
  }  if(getVessel.name == 'Waffle Bowl'){
    document.getElementById("Waffle Cone").classList.add("d-none")
  }
  orders.push(getVessel)
  drawOrders()
  
}

function getToppings(selectedTopping){
  let getTopping = toppings.find(topping => topping.name == selectedTopping)
  orders.push(getTopping)
  drawOrders()
}
// #endregion

//#region Clear Order and Remove Item
function clearEntireOrder(){
  orders = []
  drawOrders()
}

function buyEntireOrder(){
  orders = []
  drawOrders()
}


function removeItem(index){
  orders.splice(index, 1)
  drawOrders()
}
// #endregion



