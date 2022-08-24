
const error = {
    1:'Habilite GPS en el navegador.'
}

const searcherror = (key) => {
 return error[key]?error[key]:'Other error'
}



export default searcherror