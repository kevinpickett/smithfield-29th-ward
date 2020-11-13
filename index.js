var app = new Vue({
  el: '#app',
  data: {
    date: "Sunday, November 15th",
    link: "https://www.youtube.com/embed/22IbsrQCkKU",
    meetings: [
      { name: 'Adult Sunday School @ 2:45', link: 'https://us05web.zoom.us/j/86917141620' },
      { name: 'Youth Sunday School @ 3:30', link: 'https://us05web.zoom.us/j/89979724476' }
    ]
  }
})

/*
    // Example Data
    data: {
        date: "November 15th",
        link: "https://www.youtube.com/embed/HSndhYOUyAY",
        meetings: [
            { name: 'Example', link: 'https://www.churchofjesuschrist.org/?lang=eng' }
        ]
    }
*/
