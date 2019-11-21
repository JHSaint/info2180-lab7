window.onload = () =>{
    
    const sField = document.getElementById('country');
    const sButton = document.getElementById('lookup');
    const result = document.getElementById('result');
    let httpRequest = new XMLHttpRequest();
    let url = "http://localhost:8080/world.php";
    
    sButton.addEventListener('click', findCountry);
    


    function findCountry(){
        let data = sField.value;
        let ext = '?country='+data;
        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url+ext, true);
        httpRequest.send();
    }
    
    function doSomething(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                let response = httpRequest.responseText;
                result.innerHTML = response;
            }
            else{
                alert('There is a problem with the request');
            }
        }
    }
}