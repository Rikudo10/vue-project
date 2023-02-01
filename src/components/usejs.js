import axios from "axios";
import {ref, onMounted} from 'vue'

export default function myProduct() {
    const Url = 'http://items.magischer.de/api/products'
    const limit = 5
    const range = [5,10,15,20]
    const lang ='en'
    const products = ref([])
    const Krig = ref(null)
    const product = ref(null)

    function getProducts(url = Url) {
        axios.get(url, {
            params: {
                limit: limit,
                lang: lang
            }
        }).then((res) => {
            Krig.value = res.data
            products.value = res.data.data
        })
    }

    function showProduct(id) {
        axios.get((Url+ '/' + id),).then((res) => {
            product.value = res.data.data
        })
    }

    function limitChange(e){
        this.limit = e.target.value
        this.getProducts()
      }

    onMounted(function() {
        getProducts(Url)
        
    })

    return {
        products, 
        getProducts, 
        Krig, 
        product, 
        showProduct,
        limitChange,
        range
    }
}