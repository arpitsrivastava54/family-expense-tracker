class HelperFunctions {
  successResponse(data:any){
    return {
      success:true,
      data:data,
      message:""
    }
  }

  errorResponse(error:any){
    return {
      success:false,
      message:error.message
    }
  }

  setLocalStorage(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }

  getLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key) || '');
  }
}

const helper = new HelperFunctions();
export default helper;