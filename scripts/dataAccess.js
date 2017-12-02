function search () {
    url = "https://v3v10.vitechinc.com/solr/v_participant/select?indent=on&wt=json&q=state:Alaska&rows=1";
    var jsn = getJson();
};

function getJson() {
   $.ajax({
       url : url,
       method: "GET",
       success: function(response) {
        //    console.log(response);
           alert(response);
           return response; // Return json data
       }
   });
}