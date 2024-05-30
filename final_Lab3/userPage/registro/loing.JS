let d = new Date();
const addForm=document.getElementById(form-validation);
addForm.addEventListener("submit",(e)=>{
    if(addForm.checkValidility()===false){
        e.preventDefault();
        e.stopPropagation();
        addForm.classList.add('was-validate');
        return false;
    }
})