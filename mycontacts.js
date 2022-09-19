//get filterinputs
const filterInput = document.querySelector('#filterInput');
//add eventlistener to inputs
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  //get input value
  const filterValue = document.querySelector('#filterInput').value.toUpperCase();
//get ul and li's
  let ul = document.getElementById('names');
  let li = ul.querySelectorAll('li.list-item');

  for (let i = 0;i < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        li[i].style.display = '';
    } else{
        li[i].style.display = 'none';
    }
  }  
};