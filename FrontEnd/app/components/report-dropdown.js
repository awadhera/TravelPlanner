import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  loadTrips: function() {
    this.get('store').findAll('trip').then((allTrips) => {
      this.set('allTrips', allTrips);
    })
  }.on('init'),
  init() {
    this._super(...arguments);
    this.set('monthNames', ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]);
    var curDate = new Date();
    var curMonth = curDate.getMonth();
    var curYear = curDate.getFullYear();
    var nextYear = curYear + 1;
    var displayMonth = [];
    var displayYear = [];
    var displayCombined = [];
    displayCombined[0] = " ";
    for (var i = 0; i < 4; i++) {
      if ((curMonth + i) >= 12) {
        displayMonth[i] = (curMonth + i) % 12;
        displayYear[i] = nextYear;
      } else {
        displayMonth[i] = curMonth + i;
        displayYear[i] = curYear;
      }
      displayCombined[i + 1] = this.get('monthNames')[displayMonth[i]] + " " + displayYear[i];
    }
    this.set('dropdownValues', displayCombined);
  },
  actions: {
    selectMonth(param) {
      this.set('selectedInput', param);
      var values = this.get('selectedInput').split(" ");
      var selectedMonth = this.get('monthNames').indexOf(values[0]);
      var selectedYear = values[1];
      var storeArr = this.get('allTrips').toArray();
      var filteredArr = this.get('allTrips').toArray();
      storeArr.forEach(function(item) {
        var tDateStart = new Date(item.get('startdate'));
        var tDateEnd = new Date(item.get('enddate'));
        var tdsMonth = tDateStart.getMonth();
        var tdeMonth = tDateEnd.getMonth();
        var tdsYear = tDateStart.getFullYear();
        var tdeYear = tDateEnd.getFullYear();

        if (tdsYear == tdeYear) {
          if (!(selectedMonth >= tdsMonth && selectedMonth <= tdeMonth))
            filteredArr.removeObject(item);
        } else if (tdsYear < tdeYear && (selectedYear == tdsYear || selectedYear == tdeYear)) {
          if (selectedYear == tdsYear && selectedMonth < tdsMonth) {
            filteredArr.removeObject(item);
          } else if (selectedYear == tdeYear && selectedMonth > tdeMonth) {
            filteredArr.removeObject(item);
          }
        } else if (tdsYear < tdeYear && (selectedYear > tdeYear || selectedYear < tdsYear)) {
          filteredArr.removeObject(item);
        }
      });
      this.set('tripArr', filteredArr);
    }
  }
});
