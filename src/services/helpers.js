import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
}

export const isEmpty = str => {
  return (!str || 0 === str.length);
}

export const removeEmptyKey = obj => {
  Object.keys(obj).forEach(key => obj[key] == null && delete obj[key]);
};

export const fireErrorMessage = () => {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Su petición no ha podido ser procesada, por favor intente de nuevo más tarde.',
    width: "30rem",
    confirmButtonColor: '#8F8C8C',
    confirmButtonText: 'Cancelar',
    customClass:
    {
      cancelButton: 'custom-btn-padding',
      confirmButton: 'custom-btn-padding',
      title: 'font-size-small',
      content: 'font-size-small-content',
    },
  })
};

export const fireMessage = (title = '', text = '', icon='info', html=false) => {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    icon: icon,
    title: title,
    text: !html? text : null,
    html: html? text: null,
    width: "30rem",
    confirmButtonColor: '#00909E',
    confirmButtonText: 'Aceptar',
    customClass:
    {
      confirmButton: 'custom-btn-padding',
      title: 'font-size-small',
      content: 'font-size-small-content',
    },
  })
}

export const fireToast = (title = '', icon = 'success', properties = {}) => {
  const MySwal = withReactContent(Swal);

  const Toast = MySwal.mixin(updateObject(
    {
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    },
    properties
  ));
  
  Toast.fire({
    icon: icon,
    title: title
  })
}
