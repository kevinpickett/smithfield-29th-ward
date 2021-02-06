var app = new Vue({
  el: '#app',
  data: {
    link: "https://www.youtube.com/watch?v=TlvE0P8Lvbs",
    embed: "https://www.youtube.com/embed/TlvE0P8Lvbs",
    // 'date' is now a computed property based on the schedule (bishop requested we display a schedule with the group that should attend)
    // schedule[0] should be for the current upcoming Sunday
    schedule: [
      
      { date: 'February 7th', group: 'L-Z' },
      { date: 'February 14th', group: 'A-K' },
      { date: 'February 21st', group: 'L-Z' },
      { date: 'February 28th', group: 'A-K' },
    ],
    // Note is optional. If there is no note,  remove the note property/value.
    meetings: [
//         { 
//           name: 'Gospel Doctrine @ 10:15',
//           link: 'https://us05web.zoom.us/j/88275242047?pwd=azNybzNONVZPM0Qwb3NMQTdFWVdaUT09',
//           type: 'zoom',
//           note: {
//             title: 'Gospel Doctrine', 
//             text: 'Meeting ID: "882 7524 2047" Passcode: "V91VjE".'
//           }
//         },
//       { 
//         name: 'Youth Sunday School 11-13 @ 11:00', 
//         link: 'https://us05web.zoom.us/j/87051849426?pwd=bXJrdlpyZHJvbDJmUkZqbGt5R0lLZz09',
//         type: 'zoom', 
//         note: {
//           title: 'Youth Sunday School 11-13', 
//           text: 'Meeting ID: "870 5184 9426" Passcode: "QUGF2c".' 
//         }
//       },
//       { 
//         name: 'Youth Sunday School 14-17 @ 11:00', 
//         link: 'https://us05web.zoom.us/j/84831164387?pwd=azhiSWd4K0ZkUG1aSG5PdUxudmlRUT09',
//         type: 'zoom', 
//         note: {
//           title: 'Youth Sunday School 14-17', 
//           text: 'Meeting ID: "848 3116 4387" Passcode: "X1MxMA".' 
//         }
//       },
//       { 
//          name: 'Elders Quorum @ 10:15 am', 
//          link: 'https://zoom.us/j/96205487511?pwd=L3B1VTFQVVhEdU5Vd2hubzhEcVZMdz09',
//          type: 'zoom', 
//          note: {
//            title: 'Elders Quorum Meeting', 
//            text: 'Meeting ID: "962 0548 7511" Passcode: "478813"' 
//          }
//        },
//       { 
//          name: 'Relief Society @ 11:00 am', 
//          link: 'https://us05web.zoom.us/j/82893173558?pwd=bnJ1dVM4USt2R1Bkb2JzaXhDdk9zZz09',
//          type: 'zoom', 
//          note: {
//            title: 'Relief Society', 
//            text: 'Meeting ID: "828 9317 3558" Passcode: "eha5C5"' 
//          }
//        },
      {
         name: '5th Sunday Lesson @ 10:15 am', 
         link: 'https://zoom.us/j/98479458051?pwd=a2l5d1lnSHZKSWtJYlNUc0lraWlVUT09',
         type: 'zoom', 
         note: {
           title: '5th Sunday Lesson', 
           text: 'Meeting ID: "984 7945 8051" Passcode: "068265"' 
         }
       },
      { 
         name: 'Teacher Zoom Training @ 11:00 am', 
         link: 'https://zoom.us/j/94731320831?pwd=Zmk4ajdici9FaXBieWgyVy9OSjhUdz09',
         type: 'zoom', 
         note: {
           title: 'Teacher Zoom Training', 
           text: 'Meeting ID: "947 3132 0831" Passcode: "918566"' 
         }
       },
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
