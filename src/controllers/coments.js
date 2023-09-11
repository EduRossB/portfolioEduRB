import axios from "axios";
import Swal from "sweetalert2";


const sendComent = async (name, coment)=>{try {
    const response = await axios.post('https://porfoliobackendedurb-edubarba.b4a.run/api/contact', {
      name: name,
      coment: coment
    })
    console.log('Respuesta del servidor', response.data)
    Swal.fire({
      title: 'Recommendation sent',
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }  
}

export default sendComent
