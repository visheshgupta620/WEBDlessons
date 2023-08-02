const list = $('#task-list');
const btn = $('#btn');
const inp = $('#inp');
console.log(inp);
btn.on('click', (e) => {
    const eval = inp.val();
    console.log(eval);
    const str = `<div class="section-A">
    <input class="checkbox" type="checkbox">
    <p class="text">${eval}</p>
</div>
<div class="section-B">
    <span class="up-arrow">⬆️</span>
    <span class="bin">🗑️</span>
    <span class="down-arrow">⬇️</span>
</div>`;
     const newItem = $('<div>');
     newItem.html(str);
     console.log(newItem);
     newItem.addClass('task');
     list.append(newItem);
     inp.val('');  // input blank krne ke liye
})