const colors = {
    p: '#388e3c',
    div:'#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#65dd17',
    main: '#00acc1',
    footer: '#305ffe',
    form: '#9f6581',
    body: '#25n6da',
    padrao: '#616161',
    body: '#542186',
    get(tag){
        return this[tag] ? this[tag]: this.padrao
    }

}

document.querySelectorAll('.tag').forEach(box=>{
    const tagName = box.tagName.toLowerCase();
    box.style.borderColor = colors.get(tagName);

    if(!box.classList.contains('noLabes')){
        const label = document.createElement('label');
        label.style.backgroundColor= colors.get(tagName);
        label.innerHTML = tagName;
        box.insertBefore(label,box.childNodes[0])
    }
})