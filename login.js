class Login{
    constructor(form, fields){
        this.fields =  fields
        this.form = form
        this.submitOnValidation();
    }
    submitOnValidation(){
        let self = this

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            let error = 0
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`)
                //console.log(input.value)
                //this confirms if input keyed in on the fields is reflected on the console
                if(self.approveFields(input) == false){
                    error++;
                }
               
            })
            if(error == 0){
                //log-in api
                //console.log("success")
                this.form.submit();
            }
        })
    }
    approveFields(field){
        if(field.value.trim() == ''){
            this.setStatus(
                field,  
                `${field.previousElementSibling.innerText} not filled in! `, 
                "error"
            )
            return false;
        }
    }
    setStatus(field, message, status){
        const errorMessage = field.parentElement.querySelector(".error-message");
        if (status == "success"){
            if (errorMessage){
                errorMessage.innerText.remove("input-error")
            }
        }
        if (status == "error"){
            errorMessage.innerText = message;
            field.classList.add('input-error')
        }

    }

}

const form = document.querySelector(".loginForm")

if (form){
    const fields = ["username","password"]
    const validator = new Login(form, fields)

}




















