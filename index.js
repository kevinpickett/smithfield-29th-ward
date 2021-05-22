/**
 * Property and Functionality Notes
 * 
 * At this point, because the zoom meetings are all using standard repeating links,
 * all we should need to modify weekly moving forward is the schedule array.
 * Delete the first element and then add the next element to the end.
 * I try and keep at least four weeks in there. The v-for in index.html will splice
 * the schedule and display a max of 4 upcoming weeks.
 * 
 * ---Date---
 * 'date' is now a computed property based on the schedule (bishop requested we display a schedule with the group that should attend)   
 *
 * ---Meetings---
 * Now a computed property determined from schedule[0] meetingType
 * meetingType refers to second hour and is used in the meetings computed property 
 * "school" == sunday school, "grouping" == elder/relief, fifthSunday is rare third case
 *
 * ---Sacrament Link & Embed---
 * Converted link and embed to computed properties sacramentLink and sacramentEmbed 
 * They rely on the schedule[0].linkHash. Full URL is built in the computed properties.
 *
 * ---Primary Singing Time---
 * Singing time falls on same weeks as sunday school, moved singingTime into classes/meetings data
 *
 * ---CRITICAL---
 * schedule[0] should always be for the current upcoming Sunday
 */

var app = new Vue({
  el: '#app',
  data: {
    schedule: [
      {
        date: 'May 23rd',
        meetingType: "none",
        linkHash: "FBPmQoD1yWc"
      },
      {
        date: 'May 30th',
        meetingType: "none",
        linkHash: ""
      },
      {
        date: 'June 6th',
        meetingType: "none",
        linkHash: ""
      },
      {
        date: 'June 13th',
        meetingType: "none",
        linkHash: ""
      },
    ],
    announcements: [
      'Everyone is invited to attend sacrament meeting weekly in person at the church. The alternating schedule is no longer in place.',
      'The blessing and passing of the sacrament will be returning to the beginning of sacrament meeting.',
      'All second hour classes are now in person at the church weekly from 10:00 to 10:45 A.M.',
      'Primary will once again include both singing time and sharing time. Junior Primary (Sunbeams - CTR 6) will start in the primary room and Senior Primary (CTR 7 - Valiant 10) will start in their classrooms.',
      'Nursery is not yet back in place. If you have nursery aged children, you are invited to bring them with you to your adult classes.',
      'Wearing masks is optional moving forward.'
    ],
    sundaySchoolMeetings: [
      {
        name: 'Gospel Doctrine @ 10:45',
        link: 'https://zoom.us/j/98479458051?pwd=a2l5d1lnSHZKSWtJYlNUc0lraWlVUT09',
        type: 'zoom',
        note: {
          title: 'Gospel Doctrine',
          text: 'Meeting ID: "984 7945 8051" Passcode: "068265".'
        }
      },
    ],
    groupingMeetings: [
      {
        name: 'Elders Quorum @ 10:45 am',
        link: 'https://zoom.us/j/96205487511?pwd=L3B1VTFQVVhEdU5Vd2hubzhEcVZMdz09',
        type: 'zoom',
        note: {
          title: 'Elders Quorum Meeting',
          text: 'Meeting ID: "962 0548 7511" Passcode: "478813"'
        }
      },
      {
        name: 'Relief Society @ 10:45 am',
        link: 'https://zoom.us/j/97569151520?pwd=WTlPRy9GV2ZxS1dKUWdiYzFodmxUZz09',
        type: 'zoom',
        note: {
          title: 'Relief Society',
          text: 'Meeting ID: "975 6915 1520" Passcode: "021383"'
        }
      },
    ],
    fifthSundayMeetings: [
      {
        name: '5th Sunday Lesson @ 10:45 am',
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
      return "Sunday, " + this.schedule[0].date
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
        case 'none':
          meetings = []
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
