ClassicEditor
  .create(document.querySelector('#text-input-qns'))
  .then(editor => {
    console.log(editor);
  })
  .catch(error => {
    console.error(error);
  });
