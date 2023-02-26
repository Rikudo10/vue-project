
import HomeIcon from '../../../vue-project/src/components/icons/HomeIcon.vue'
import ShortsIcon from '../../../vue-project/src/components/icons/ShortsIcon.vue'
import Subscribedicon from '../../../vue-project/src/components/icons/SubscribedIcon.vue'

const navigationModule = {
    namespaced: true,
    state(){
        return {
            leftmenu: [
                {
                  id: 1,
                  title: 'მთავარი',
                  icon: HomeIcon
                },
                {
                  id: 2,
                  title: 'Shorts',
                  icon: ShortsIcon
                },
                {
                  id: 2,
                  title: 'გამომწერები',
                  icon: Subscribedicon
                }
              ]
        }
    }
}
export default navigationModule