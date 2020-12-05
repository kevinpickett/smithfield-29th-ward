var app = new Vue({
  el: '#app',
  data: {
    date: "December 6th",
    link: "https://youtu.be/dOkfSVHtWIE",
    embed: "https://www.youtube.com/embed/dOkfSVHtWIE",
    meetings: [
      { name: 'Adult Sunday School @ 2:45', link: 'https://us05web.zoom.us/j/86917141620?pwd=OWdmV3FHZ1VmaVlkdW9lN0lMSlhoQT09' },
      { name: 'Youth Sunday School @ 3:30', link: 'https://us05web.zoom.us/j/89979724476?pwd=bkJZeTZkM0ptRTJBaC9JR1RRSGVLQT09' }
    ],
    modalState: false
  }
})

/*
    // Example Data
    data: {
        date: "November 15th",
        link: "https://www.youtube.com/embed/HSndhYOUyAY",
        meetings: [
            { name: 'Adult Sunday School @ 2:45', link: 'https://us05web.zoom.us/j/86917141620?pwd=OWdmV3FHZ1VmaVlkdW9lN0lMSlhoQT09' },
            { name: 'Youth Sunday School @ 3:30', link: 'https://us05web.zoom.us/j/89979724476?pwd=bkJZeTZkM0ptRTJBaC9JR1RRSGVLQT09' }
        ]
    }
*/
