        function login(){
        var username = "amdah14";
        var password = "integrity";
        var userName = document.getElementById("username").value;
        var passWord = document.getElementById("password").value;
        let form = document.getElementById("form");
        if (username != userName && password != passWord){
            alert('Login gagal');
        }else if (username == userName && password == passWord){
            form.setAttribute('action','dashboard.html');
            alert('login success');
    }
}