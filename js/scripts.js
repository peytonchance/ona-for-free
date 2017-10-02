function init() {
  Tabletop.init( { key: '1cVczPbMPcsWx9pPTqYiibmtSC41nZa1uaz0IrrqD3Ok',
                   callback: function(data, tabletop) {
                       console.log(data)
                       console.log(data[0]['This is an item']);
                   },
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)
