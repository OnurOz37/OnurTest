

$("#getdata-3").click(function(){

    $.getJSON("jsonCICLIC.json",function (data){
            data.forEach(function(objet,index){


                if (objet.Clefs.indexOf("ORGANISER (rencontres / séances / ateliers ...)")>-1){
                    
                    let column=$("<tr>") 
                let cell1=$("<td>").text(index)
                let cell2=$("<td>").text(objet.Clefs)
                let cell3=$("<td>").text(objet.Name)
                let cell4=$("<td>").text(objet.Domaines)
                let cell5=$("<td>").text(objet.Cibles)
                let cell6=$("<td>").text(objet.Node)
                let cell7=$("<td>").text(objet.Pôles)

                column.append(cell1) 
                column.append(cell2) 
                column.append(cell3)
                column.append(cell4)
                column.append(cell5)
                column.append(cell6)
                column.append(cell7)

                $("#liste").append(column) 
                }
                

        })
    })
})

