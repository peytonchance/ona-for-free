new Vue({
  el: '#app',
  data: {
    //Store variables here
    booths: [],
    selectedItems: [],
    selectedItem: 'Notebooks',
    selectedDates: [],
    selectedDate: 'Thursday, October 5'
  },
  methods: {
    // Functions written with guidance of Kate Boyd (GitHub: kwboyd)
    fetch() {
           axios.get('../data/data.json')
               .then((response) => {
                   // this assigns it to the places variable
                   this.booths = response.data;
                   console.log(this.booths);
                   console.log('I got here.');
               })
               .catch((error) => {
                   // this is in case you get an error
                   console.log(error);
               });
       },
       toggleItem(item) {
           // this toggles the item passed in
           let itemIndex = this.selectedItems.indexOf(item); // this checks for the item in the array
           if (itemIndex <= -1) {
               // if the item is not in the array
               this.selectedItems.push(item);
           } else {
               // if it is in the array
               this.selectedItems.splice(itemIndex, 1);
           }
       },
       selectItem(item) {
           // overwrite selected item with the item passed in
           this.selectedItem = item;
       },
       toggleDate(item) {
           // this toggles the item passed in
           let dateIndex = this.selectedDates.indexOf(date); // this checks for the item in the array
           if (dateIndex <= -1) {
               // if the item is not in the array
               this.selectedDates.push(date);
           } else {
               // if it is in the array
               this.selectedDates.splice(dateIndex, 1);
           }
       },
       selectDate(date) {
           // overwrite selected item with the item passed in
           this.selectedDate = date;
       },
   },
  computed: {
    singleFilter(){
      return this.booths.filter(booth => booth[this.selectedItem]);
    }
  },
  mounted () {
        // this runs when the app is loaded
        this.fetch(); // this calls the fetch() method
    }
});
