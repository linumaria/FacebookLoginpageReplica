$(document).ready(function()
{
    $("#signupform").validate({
   rules: {
fname:{
    required:true,
    minlength:4,

      },
      sname:{
        required:true,
        minlength:4
      },
        email:{
            required:true,
            email:true
        },
        password:{
            required:true,
            minlength:6,
       
        },
        day:{
            required:true
        },
        gender:{
            required:true

        }
        },
        messages:{
            fname:{
           required:"Enter first name",
           minlength:"Enter atleast 4 characters"

            },
            sname:{
                required:"Enter surname",
                minlength:"Enter atleast 4 characters"
            },
            email:{
                required:"Enter Email",
                email:"invalid id"
            },
            password:{
                required:"Enter password",
                minlength:"Enter atleast 4 characters"

        }
    }
        
    })
    
})