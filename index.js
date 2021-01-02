var app = new Vue({
  el: '#app',
  data: {
    link: "https://youtu.be/ldaL7s5murI",
    embed: "https://www.youtube.com/embed/ldaL7s5murI",
    // 'date' is now a computed property based on the schedule (bishop requested we display a schedule with the group that should attend)
    // schedule[0] should be for the current upcoming Sunday
    schedule: [
      { date: 'January 3rd', group: 'A-K' },
      { date: 'January 10th', group: 'L-Z' },
      { date: 'January 17th', group: 'A-K' },
      { date: 'January 24th', group: 'L-Z' },
    ],
    // Note is optional. If there is no note,  remove the note property/value.
    meetings: [
      { 
        name: 'Gospel Doctrine @ 10:15', 
        link: 'https://us05web.zoom.us/j/84406915914?pwd=ekZTWFEyU1p6c1pqTTMxUEJRTkVwUT09',
        type: 'zoom', 
        note: {
          title: 'Gospel Doctrine', 
          text: 'If the one click link does not let you in, the meeting ID is: "844 0691 5914" and the passcode is: "3Dc8Zq".' 
        }
      },
      { 
        name: 'Youth Sunday School 11-13 @ 11:00', 
        link: 'https://us05web.zoom.us/j/89036468401?pwd=VUlSMEc4MWYzYWxZckNrQlhTSXdDdz09',
        type: 'zoom', 
        note: {
          title: 'Youth Sunday School 11-13', 
          text: 'If the one click link does not let you in, the meeting ID is: "890 3646 8401" and the passcode is: "TP38jy".' 
        }
      },
      { 
        name: 'Youth Sunday School 14-17 @ 11:00', 
        link: 'https://us05web.zoom.us/j/89391216908?pwd=RjJnT0JLVXRiVkZ6clJXcUhGb1I2UT09',
        type: 'zoom', 
        note: {
          title: 'Youth Sunday School 14-17', 
          text: 'If the one click link does not let you in, the meeting ID is: "893 9121 6908" and the passcode is: "cEZpW8".' 
        }
      }
    ],
    modalState: false,
    modalType: ''
  },
  computed: {
    date: function() {
      return "Sunday, " + this.schedule[0].date + " (" + this.schedule[0].group + ")"
    },
    hasNotes: function() {
      let count = this.meetings.filter(meeting => meeting.hasOwnProperty('note')).length
      return count > 0
    },
    haveZoomClass: function() {
      let count = this.meetings.filter(meeting => (meeting.hasOwnProperty('type') && meeting.type == 'zoom')).length
      return count > 0
    }
  },
  methods: {
    setModal(modalType) {
      switch(modalType){
        case 'zoomWaitingScreen':
        case 'youtubeEmbedBroken':
          this.modalType = modalType
          this.modalState = true
          break;
        default:
          this.modalState = false
      }
        
    }
  }
})

/*
    // Example Data
    data: {
      link: "https://youtu.be/dOkfSVHtWIE",
      embed: "https://www.youtube.com/embed/dOkfSVHtWIE",
      // date is now a computed property based on the schedule
      schedule: [
        { date: 'December 6th', group: '(A-K)' },
        { date: 'December 13th', group: '(L-Z)' },
        { date: 'December 20th', group: '(A-K)' },
        { date: 'December 27th', group: '(L-Z)' },
      ],
      // Note is optional. If there is no note,  remove the no property/value
      // In below example data meeting[0] has a note and meeting[1] does not have a note. Both are valid
      meetings: [
        { 
          name: 'Adult Sunday School @ 2:45', 
          link: 'https://us05web.zoom.us/j/86917141620?pwd=OWdmV3FHZ1VmaVlkdW9lN0lMSlhoQT09',
          type: 'zoom', 
          note: {
            title: 'Adult Sunday School', 
            text: 'If the one click link does not let you in, the meeting ID is: "853 3505 1983" and the password is: "837xks".' 
          }
        },
        { 
          name: 'Youth Sunday School @ 3:30', 
          link: 'https://us05web.zoom.us/j/89979724476?pwd=bkJZeTZkM0ptRTJBaC9JR1RRSGVLQT09',
          type: 'zoom', 
        }
      ],
      modalState: false
    }
*/
