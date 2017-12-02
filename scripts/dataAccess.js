function search () {
    url = "https://v3v10.vitechinc.com/solr/v_participant/select?indent=on&wt=json&q=state:Alaska&rows=1";
    // $.getJSON(url, function(data) {
    //     console.log(data.response.docs[0]['state']);
    // });
    getJsn(); // Confirm the variable was saved
};

function getJsn () {
    var stateArray = [];
    var idArray = [];
    url = "https://v3v10.vitechinc.com/solr/v_participant/select?indent=on&wt=json&q=*:*&rows=10";    
    $.getJSON(url, function(data){
        var qresult = data.response.docs;
        for (var x = 0; x < qresult.length; x ++){
            console.log(qresult[x])
             stateArray += qresult[x]['state'] + ", ";
             idArray += qresult[x]['id'] + ", ";
        }
        console.log(stateArray.toString());
        console.log(idArray.toString());
    });

    //     $.ajax({
//        url : url,
//        method: "GET",
//        datatype: 'json',
//        success: function (data) {
           
//         //    console.log(data["Response"]);
//         //    for (var x = 0; x < data.length; x ++){
//         //        stateArray += data[x].state;
//         //        idArray += data[x].id;
//         //    }
//         //    alert(stateArray.toString());
//         //    alert(idArray.toString());
//        }
//    });
} 