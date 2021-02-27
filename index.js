var app = new Vue({
  el: '#app',
  data: {
    singingTime: "", // last = https://youtu.be/vLUH8Q7VLsU
    // 'date' is now a computed property based on the schedule (bishop requested we display a schedule with the group that should attend)
    // schedule[0] should be for the current upcoming Sunday
    schedule: [
      { date: 'February 28th', group: 'A-K', meetingType: "grouping", link: "OZlTH63N0ec" },
      { date: 'March 7th', group: 'L-Z', meetingType: "school", link: "5cMpEcMbnSI" },
      { date: 'March 14th', group: 'A-K', meetingType: "grouping", link: "0dLeX1fPOp8" },
      { date: 'March 21st', group: 'L-Z', meetingType: "school", link: "8AnVBbI0eTo" },
      { date: 'March 28th', group: 'A-K', meetingType: "grouping", link: "oJt3miShijA" },
    ],
    sundaySchoolMeetings: [
        { 
          name: 'Gospel Doctrine @ 10:15',
          link: 'https://zoom.us/j/98479458051?pwd=a2l5d1lnSHZKSWtJYlNUc0lraWlVUT09',
          type: 'zoom',
          note: {
            title: 'Gospel Doctrine', 
            text: 'Meeting ID: "984 7945 8051" Passcode: "068265".'
          }
        },
      { 
        name: 'Youth Sunday School 11-13 @ 11:00', 
        link: 'https://us05web.zoom.us/j/82813398554?pwd=cXBDenhUZklWZDlCK1VocklZbkhjQT09',
        type: 'zoom', 
        note: {
          title: 'Youth Sunday School 11-13', 
          text: 'Meeting ID: "828 1339 8554" Passcode: "QT8MCu".' 
        }
      },
      { 
        name: 'Youth Sunday School 14-17 @ 11:00', 
        link: 'https://us05web.zoom.us/j/86327485143?pwd=TURJb2NtYXhudTNwYWJFTkJOR3NzUT09',
        type: 'zoom', 
        note: {
          title: 'Youth Sunday School 14-17', 
          text: 'Meeting ID: "863 2748 5143" Passcode: "4b2ft6".' 
        }
      }
    ],
    groupingMeetings: [
      { 
         name: 'Elders Quorum @ 10:15 am', 
         link: 'https://zoom.us/j/96205487511?pwd=L3B1VTFQVVhEdU5Vd2hubzhEcVZMdz09',
         type: 'zoom', 
         note: {
           title: 'Elders Quorum Meeting', 
           text: 'Meeting ID: "962 0548 7511" Passcode: "478813"' 
         }
       },
      { 
         name: 'Relief Society @ 11:00 am', 
         link: 'https://zoom.us/j/97569151520?pwd=WTlPRy9GV2ZxS1dKUWdiYzFodmxUZz09',
         type: 'zoom', 
         note: {
           title: 'Relief Society', 
           text: 'Meeting ID: "975 6915 1520" Passcode: "021383"' 
         }
       },
//        { 
//          name: 'Primary Singing Time', 
//          link: 'https://youtu.be/vLUH8Q7VLsU',
//          type: 'youtube', 
//        },
    ],
    fifthSundayMeetings: [
      {
         name: '5th Sunday Lesson @ 10:15 am', 
         link: 'https://zoom.us/j/98479458051?pwd=a2l5d1lnSHZKSWtJYlNUc0lraWlVUT09',
         type: 'zoom', 
         note: {
           title: '5th Sunday Lesson', 
           text: 'Meeting ID: "984 7945 8051" Passcode: "068265"' 
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
    },
    sacramentLink: function() {
      let link = "https://youtu.be/" + this.schedule[0].link
      return link
    },
    sacramentEmbed: function() {
      let embed = "https://www.youtube.com/embed/" + this.schedule[0].link
      return embed
    },
    meetings: function() {
     if(this.schedule[0].meetingType == 'school') {
      return this.sundaySchoolMeetings
     } else if(this.schedule[0].meetingType == 'grouping') {
      return this.groupingMeetings
     } else if(this.schedule[0].meetingType == 'fifthSunday') {
      return this.fifthSundayMeetings      
     }
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
