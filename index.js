var app = new Vue({
  el: '#app',
  data: {
    link: "https://www.youtube.com/watch?v=FTB7YJ_X0fA",
    embed: "https://www.youtube.com/embed/FTB7YJ_X0fA",
    // 'date' is now a computed property based on the schedule (bishop requested we display a schedule with the group that should attend)
    // schedule[0] should be for the current upcoming Sunday
    schedule: [
      { date: 'January 17th', group: 'A-K' },
      { date: 'January 24th', group: 'L-Z' },
      { date: 'January 31st', group: 'A-K' },
      { date: 'February 7th', group: 'L-Z' },
    ],
    // Note is optional. If there is no note,  remove the note property/value.
    meetings: [
        { 
          name: 'Gospel Doctrine @ 10:15',
          link: 'https://us05web.zoom.us/j/88275242047?pwd=azNybzNONVZPM0Qwb3NMQTdFWVdaUT09',
          type: 'zoom',
          note: {
            title: 'Gospel Doctrine', 
            text: 'Meeting ID: "882 7524 2047" Passcode: "V91VjE".'
          }
        },
      { 
        name: 'Youth Sunday School 11-13 @ 11:00', 
        link: 'https://us05web.zoom.us/j/87051849426?pwd=bXJrdlpyZHJvbDJmUkZqbGt5R0lLZz09',
        type: 'zoom', 
        note: {
          title: 'Youth Sunday School 11-13', 
          text: 'Meeting ID: "870 5184 9426" Passcode: "QUGF2c".' 
        }
      },
      { 
        name: 'Youth Sunday School 14-17 @ 11:00', 
        link: 'https://us05web.zoom.us/j/84831164387?pwd=azhiSWd4K0ZkUG1aSG5PdUxudmlRUT09',
        type: 'zoom', 
        note: {
          title: 'Youth Sunday School 14-17', 
          text: 'Meeting ID: "848 3116 4387" Passcode: "X1MxMA".' 
        }
      },
//       { 
//          name: 'Elders Quorum Meeting @ 11:00 am', 
//          link: 'https://us02web.zoom.us/j/4989505755?pwd=VS9MT1RIR2ZFblJmNnZrOUp4eVJBQT09',
//          type: 'zoom', 
//          note: {
//            title: 'Elders Quorum Meeting', 
//            text: 'If the one click link does not let you in, the meeting ID is: "498 950 5755" and the passcode is: "125945".' 
//          }
//        },
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
