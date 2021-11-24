var xmlHttp

    function Init()
    {   xmlHttp = new XMLHttpRequest;
    }

    function Requete()
    {   if (xmlHttp)
        {
            xmlHttp.open("GET", "TP4.php", true);
            xmlHttp.onreadystatechange = Reponse;
            xmlHttp.send(null);
        }

    }
    

    function Reponse()
    {   if(     (xmlHttp.readystate == 4) && (xmlHttp.status == 200)    )
        {   var xmlReponse = xmlHttp.responseXML;
            var nomArray = xmlResponse.getElementByTagName("nom")
            var nomArray = xmlResponse.getElementByTagName("prenom")

            var html = " ";
            for (var i=0; i < nomArray.lenght; i++)
            {   
                html += nomArray.item(i).firstChild.data + " " + prenomArray.item(i).firstChild.data + "<br />";    
            }
            myDiv = Document.getElementById("myDivElement");
            myDiv.innerHTML = "<p> le serveur a r&eacute;pondu : </p><b>" + html + "</b>";
        }

    }