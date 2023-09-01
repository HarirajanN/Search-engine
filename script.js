let searchbar = document.getElementById('search')
let searchbtn = document.getElementById('searchbtn')

function Search(){
    let url ='https://www.google.com/search?q='+searchbar.value;
    window.open(url,'_self');
}