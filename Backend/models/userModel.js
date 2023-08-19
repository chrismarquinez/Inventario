const mongoose = require ("mongoose");

const userSchema = mongoose.Schema(
   { 
    Nombre: {
        type: String,
        required:[true,"Agregar Nombre"]
    },
    Correo:{
        type: String,
        required:[true,"Agregar Correo"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Por Favor Ingresa Un Correo Valido"
        ]
    },
    Password: {
        type: String,
        required:[true,"Por Favor Ingrsa Una Contraseña"],
        minLength:[6,"Por Favor Ingrsasa Minimo 6 Caracteres"],
        maxLength:[23,"Por Favor Ingresa Max Caracteres"],
    },
    
    Foto: {
        type: String,
        required:[true,"Agregar Foto"],
        Default:"https://alt72.com.ar/wp-content/uploads/2014/09/login.png"

    },
    Telefono: {
        type: String,
        Default:"+57"

    },

    Bio: {
        type: String,
        maxLength:[250,"Por Favor No ingrese mas de 250 caracteres"],
        Default:"bio"

    },
   

},

   {
    timestamps:true
   }

);

const User = mongoose.model("User",userSchema)
module.exports = User;