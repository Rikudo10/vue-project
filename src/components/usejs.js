import {ref,onMounted} from 'vue'
import axios from 'axios'

export default function myProducts() {
    const range = [5,10,15,20]
    const limit = 4
    const lang = 'ge'
    const apiUrl = "http://items.magischer.de/api/products"
    const products = ref([])
    const res = ref (null)
    const languages = ['ge', 'en']

    function getProducts(url = url){
        axios.get(url, {
            params: {
                limit: limit.valueOf,
                lang: lang.valueOf,
            }
        }).then((response) => {
            products.value = Response.data.data
            res.value = response.data
        })
    }
    onMounted(function() {
        getProducts()
    })
    
    return {
        myProducts,
        res,
        getProducts,
        products,

    }
}