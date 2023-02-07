export default function state() {
    return {
        products: [
            { id: 1, name: 'GNB Sukhishvili - Juta',
              url: 'https://www.youtube.com/watch?v=9sBCkTC-Y40&list=RD9sBCkTC-Y40&start_radio=1',
              description: 'სუხიშვილები',
              cover: 'https://madloba.info/media/images/Concert-of-Georgian-National-Ballet-Sukhishvil.width-800.jpg'  },
            { id: 2, name: 'product 2', price: 200 },
            { id: 3, name: 'product 3', price: 300 },
            { id: 4, name: 'product 4', price: 400 },
        ],
        cart: []
    }
}