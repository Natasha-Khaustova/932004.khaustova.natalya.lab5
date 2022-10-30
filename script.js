 var FirstModal = document.getElementById("FirstModal");
        var FirstOpenButton = document.getElementById("FirstOpenButton");
        var SecondModal = document.getElementById("SecondModal");
        var SecondOpenButton = document.getElementById("SecondOpenButton");
        var ThirdModal = document.getElementById("ThirdModal");
        var ThirdOpenButton = document.getElementById("ThirdOpenButton");
        var FirstSpan = document.getElementsByClassName("ModalCont")[0];
        var SecondSpan = document.getElementsByClassName("ModalCont")[1];
        var ThirdSpan = document.getElementsByClassName("ModalCont")[2];

        FirstOpenButton.onclick = function() 
        {
            FirstModal.style.display ="inline";
        }
        SecondOpenButton.onclick = function() 
        {
            SecondModal.style.display ="inline";
        }
        ThirdOpenButton.onclick = function() {
            ThirdModal.style.display ="inline";
        }
        FirstSpan.onclick = function() 
        {
            FirstModal.style.display ="none";
        }
        SecondSpan.onclick = function() 
        {
            SecondModal.style.display ="none";
        }
        ThirdSpan.onclick = function() 
        {
            ThirdModal.style.display ="none";
        }
        