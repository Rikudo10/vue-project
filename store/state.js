export default function state() {
    return {
        search: "",
        products: [
            { id: 1,
              name: 'სუხიშვილები',
              url: 'https://www.youtube.com/watch?v=9sBCkTC-Y40&list=RD9sBCkTC-Y40&start_radio=1',
              description: 'GNB Sukhishvili - Juta',
              cover: 'https://madloba.info/media/images/Concert-of-Georgian-National-Ballet-Sukhishvil.width-800.jpg'  },
            { id: 2,
              name: 'ერისიონი',
              url: 'https://www.youtube.com/watch?v=cX5ZulcMunk&list=RDMM8qVVavw9C7U&index=2',
              description: 'ყაზბეგური”',
              cover: 'https://cdn.imedi.ge/new/V/2105/30/38/39/VURVEX1QQka5SCrp9gCxYQ/sample-20210517_230324-flv_snapshot_17-32_-2021-05-17_23-23-31.jpg'   },
            { id: 3,
              name: 'ნართები',
              url: 'https://www.youtube.com/watch?v=t2vST0nt_ns',
              description: 'ყაზბეგური”',
              cover: "https://i.ytimg.com/vi/t2vST0nt_ns/maxresdefault.jpg" },
            { id: 4, 
              name: 'სუხიშვილები',
              url: 'https://www.youtube.com/watch?v=2qNnJHNCYwY',
              description: 'ცდო',
              cover: "https://i.ytimg.com/vi/ANwmys5SaQY/maxresdefault.jpg" },
        ],
        cart: []
    }
}