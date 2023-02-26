import navigationModule from "../modules/navigationModule/navigationModule"

const navigationPlugin = function(store){
    store.registerModule('sidebar', navigationModule)
}
export default navigationPlugin