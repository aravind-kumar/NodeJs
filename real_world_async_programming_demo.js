// In this program we sent 10 dummy request and add an expensive call known as getDataFromDB which is invoked in an asnc manner.
// Meaning that the call is not halted when getDataFromDB is called it continues and whenenver the expensive call operation is done the callback is invoked wherein we are printing Done with request. How does this help it helps because the server would be busy at all times to get the data and the DB also would be always be busy chrunching the data.
//Whereas in the othercase when the database is chrunching data the server wouldnt perform any action since its a blocking call.
//Hence this is faster


function getRequest(requestNum) {
    console.log("Received request for ",requestNum);
    console.log(Date.now());   
    var getDataFromDB = function(requestNum) {
       setTimeout(function() {
                    console.log("Done with request ",requestNum); 
                    console.log(Date.now());
                  },5000);
    }; 
    getDataFromDB(requestNum);

    console.log("Fetching another request");
};


for(i=0;i<10;++i)
{
  getRequest(i); 
}

