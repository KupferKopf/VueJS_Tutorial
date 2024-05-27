let app = Vue.createApp({ // exporteted the js code into an external file to import it into other html/view files
    data() {
      return {
        showSidebar: false,
        inventory: [], // removing the static values to use the importat ones
        cart: {}
      }
    },
    computed: {
      totalQuantity() {
        return Object.values(this.cart).reduce((sum, current) => {
          return sum + current
        }, 0)
      }
    },
    methods: {
      addToCart(name, index) { // updated making it work with all data and also adding vars for things that haven't been added bevor
        if(!this.cart[name]) this.cart[name] = 0
        this.cart[name] += this.inventory[index].quantity 
        this.inventory[index].quantity = 0
      },
      toggleSidebar(){
        this.showSidebar = !this.showSidebar
      },
      removeItem(name){
        delete this.cart[name]
      }
    },
    async mounted(){ // loading the data from the food.json file and converting it from json to usefull data
      const res = await fetch('./food.json')
      const data = await res.json()
      this.inventory = data
    }
  })


  app.component('sidebar', { 
    props: ['toggle', 'cart', 'inventory', 'remove'], 
    methods: {
      getPrice(name){ // in order to acces the price of an item from the in inventory in the cart we need to fetch it first as we only have the data from the cart (the name and quantity)
        const product = this.inventory.find((p) => {
          return p.name === name
        })
        return product.price.USD
      },
      calcTotal(){ 
        const totalCost = Object.entries(this.cart).reduce((sum, current, index) => { // Object.values gives you an array of all the values out of object so all values in it will be listet as an array | reduce is a build in javascript function where we save an sum, so its calculating a sum every itaration throughout a loop, also allows the accessing of the current item (in our case it contains the key and the value of the item in the cart) that is looped through and the index of that item
        return sum + (current[1] * this.getPrice(current[0]))
      }, 0)
      return totalCost.toFixed(2)
    }
    },
    template: `
    <aside class="cart-container"> <!-- the cart/side-bar that pops up in products or past orders-->
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="toggle" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(quantity, key, i) in cart" :key="i">
              <td><i class="icofont-{{ key.icon }} icofont-3x"></i></td>
              <td>{{ key }}</td>
              <td>\${{ getPrice(key) }}</td>
              <td class="center">{{ quantity }}</td>
              <td>\${{ (quantity * getPrice(key)).toFixed(2) }}</td>
              <td class="center">
                <button @click="remove(key)" class="btn btn-light cart-remove">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center" v-if="!Object.keys(cart).length"><em>No items in cart</em></p>
        <div class="spread">
          <span><strong>Total:</strong> \${{ calcTotal() }}</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
    
    `
  })
  

  app.mount('#app')