import { useState } from "react";
import PropTypes from 'prop-types';


export function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('');

    //TODO: Función para capturar el valor del input
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }


    //TODO: Función para capturar el submit, es decir, se envia el formulario
    const onSubmit = ( event ) => {
        event.preventDefault();
        //Validación para que no se envie un string vacio:
        if( inputValue.trim().length < 2 ) return; 
       
        //Limpiar el input y no tener que borrar el texto manual
        setInputValue('');
         //Enviar el valor del input al componente padre
         onNewCategory(inputValue.trim());
    }


    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder= 'Search'
                value= { inputValue }
                onChange= { onInputChange }
            />
        </form>
       
    );
}


//TODO: propsTypes de setCategories:
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};