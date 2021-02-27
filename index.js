var app = new Vue({
  el: '#app',
  data: {
    // 'date' is now a computed property based on the schedule (bishop requested we display a schedule with the group that should attend)
    // meetings is now a computed property determined from schedule[0] meetingType
    // converted link and embed to computed properties that rely on the schedule[0] linkHash. Full URL is built in computed properties.
    // primary singing time falls on same weeks as sunday school, moved singingTime into classes/meetings data
    // schedule[0] should be for the current upcoming Sunday
    schedule: [
      {
        date: 'February 28th',
        group: 'A-K',
        meetingType: "grouping",
        linkHash: "OZlTH63N0ec"
      },
      {
        date: 'March 7th',
        group: 'L-Z',
        meetingType: "school",
        linkHash: "5cMpEcMbnSI"
      },
      {
        date: 'March 14th',
        group: 'A-K',
        meetingType: "grouping",
        linkHash: "0dLeX1fPOp8"
      },
      {
        date: 'March 21st',
        group: 'L-Z',
        meetingType: "school",
        linkHash: "8AnVBbI0eTo"
      },
      {
        date: 'March 28th',
        group: 'A-K',
        meetingType: "grouping",
        linkHash: "oJt3miShijA"
      },
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
      // { 
      //   name: 'Primary Singing Time', 
      //   link: 'https://youtu.be/vLUH8Q7VLsU',
      //   type: 'youtube', 
      // },
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
    date: function () {
      return "Sunday, " + this.schedule[0].date + " (" + this.schedule[0].group + ")"
    },
    hasNotes: function () {
      let count = this.meetings.filter(meeting => meeting.hasOwnProperty('note')).length
      return count > 0
    },
    haveZoomClass: function () {
      let count = this.meetings.filter(meeting => (meeting.hasOwnProperty('type') && meeting.type == 'zoom')).length
      return count > 0
    },
    sacramentLink: function () {
      let link = "https://youtu.be/" + this.schedule[0].linkHash
      return link
    },
    sacramentEmbed: function () {
      let embed = "https://www.youtube.com/embed/" + this.schedule[0].linkHash
      return embed
    },
    meetings: function () {
      let meetings
      switch(this.schedule[0].meetingType) {
        case 'school':
          meetings = this.sundaySchoolMeetings
          break
        case 'grouping':
          meetings = this.groupingMeetings
          break
        case 'fifthSunday':
          meetings = this.fifthSundayMeetings
          break
      }
      return meetings
    }
  },
  methods: {
    setModal(modalType) {
      switch (modalType) {
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
