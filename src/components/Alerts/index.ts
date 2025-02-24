import Swal, { SweetAlertIcon } from "sweetalert2";

export const showSuccessRegister = async () => {
    return Swal.fire({
        icon: 'success',
        title: '¡Registro Exitoso!',
        text: 'Tu cuenta ha sido creada correctamente',
        confirmButtonColor: '#3085d6',
        timer: 2000,
        timerProgressBar: true,
    });
};

export const showRegistrationError = (errorMessage: string) => {
    return Swal.fire({
        icon: 'error',
        title: 'Error de registro',
        text: errorMessage,
        confirmButtonColor: '#3085d6',
    });
};

export const showToast = (icon: SweetAlertIcon, title: string) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: icon,
        title: title
    });
}