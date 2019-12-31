const form = document.querySelector('#dhishna-form');
const status = document.querySelector('#myopt');
var uploader = documetn.querySelector('#uploader');
var fileButton = document.querySelector('#filebtn');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    db.collection('info').add({
        name: form.name.value,
        caption: form.caption.value,
        description: form.description.value,
        c_name: form.c_name.value,
        c_phone: form.c_phone.value,
        status: status.value
    })
})
/*
fileButton.addEventListener('change', function(e)=>{
    var file = e.target.files[0];
    
    var storageRef = firebase.storage().ref('photos/' + file.name);

    var task = storageRef.put(file);

    task.on('state_changed',
    
    );
});*/