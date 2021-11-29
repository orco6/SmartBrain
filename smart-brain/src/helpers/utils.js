const getMessage = (status) =>{
  if(status===500){
    return 'Email is already exist';
  }else if(status===501){
    return 'Fields cannot be empty';
  }else if(status===502){
    return 'Wrong email or password';
  }
  else{
    return '';
  }
}

export default getMessage;