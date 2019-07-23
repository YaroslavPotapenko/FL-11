document.addEventListener('DOMContentLoaded',function() {

  const MAX_ITEMS = 10;
  let input = document.querySelector('#action');
  let button = document.querySelector('#addAction');
  let output = document.querySelector('#todo-body');
  let ul = document.createElement('ul');

  input.focus();
  button.addEventListener('click', addItem);

  function newItem() {
    let actionItem = document.createElement('li');
    let actionValue = document.createElement('div');

    actionItem.setAttribute('class','list');
    actionItem.setAttribute('draggable','true');
    output.appendChild(ul);
    ul.appendChild(actionItem);
    actionItem.appendChild(actionValue);
    actionValue.innerHTML = input.value;
    input.value = '';
    input.focus();

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id','check');
    actionValue.prepend(checkbox);

    let deleteSymbol = document.createElement('i');
    deleteSymbol.setAttribute('class','material-icons delete');
    deleteSymbol.innerHTML='delete';
    deleteSymbol.addEventListener('click', delEl);
    actionItem.appendChild(deleteSymbol);

    let edit = document.createElement('i');
    edit.setAttribute('class', 'material-icons edit');
    edit.innerHTML = 'edit';
    actionValue.appendChild(edit);
  }

  function addItem() {
    if (ul.children.length === MAX_ITEMS) {
      button.setAttribute('disabled', '');
      input.setAttribute('disabled','');
      let alert = document.querySelector('#alert');
      alert.innerHTML = 'Maximum item per list are created';
    } else if (input.value !== '') {
      newItem();
    } else {
      input.value = '';
    }
  }

  function checked(event) {
    let target = event.target;
    if (target.getAttribute('type') === 'checkbox') {
      target.setAttribute('disabled','')
    }
  }
  ul.addEventListener('click', checked);

  function edit(event) {
    let target = event.target;

    if (target.innerHTML === 'edit') {
      let contentSpan = target.previousSibling;
      let input = document.createElement('input');
      let temp = '';

      target.parentNode.removeChild(contentSpan);
      input.value = temp;
      target.parentNode.insertBefore(input, target);
      target.innerHTML = 'save';
      return;
    }
    if (target.innerHTML === 'save') {
      let contentInput = target.previousSibling, temp = contentInput.value;
      target.parentNode.removeChild(contentInput);
      let span = document.createElement('span');
      span.setAttribute('class','content');
      span.innerHTML = temp;
      target.parentNode.insertBefore(span, target);
      target.innerHTML = 'edit';
    }
  }
  ul.addEventListener('click', edit);

  function delEl(event) {
    let target = event.target;
    if (target.innerHTML === 'delete') {
      if(ul.children.length === MAX_ITEMS) {
        button.toggleAttribute('disabled');
        input.toggleAttribute('disabled');
        let alert = document.querySelector('#alert');
        alert.innerHTML = '';
      }
      target.parentNode.remove();
    }
  }

  let dragItem = null;
  function allowDrop(event) {
    event.preventDefault()
  }
  function dragStart(event) {
    let target = event.target;
    while (target.tagName !== 'LI') {
      target = target.parentNode;
    }
    dragItem = target;
    event.dataTransfer.setData('text/html', dragItem);
  }
  function drop(event) {
    let target = event.target;
    while (target.tagName !== 'LI') {
      target = target.parentNode;
    }
    if(target.parentNode.tagName === 'UL') {
      target.parentNode.insertBefore(dragItem, target.nextSibling);
    }
  }
  ul.addEventListener('dragover', allowDrop);
  ul.addEventListener('dragstart', dragStart);
  ul.addEventListener('drop', drop);

});