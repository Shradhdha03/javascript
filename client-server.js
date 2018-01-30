\
if (window.XMLHttpRequest) {
    xmlHttpObj = new XMLHttpRequest();
    if (xmlHttpObj.overrideMimeType) {
        xmlHttpObj.overrideMimeType('application/xml');
    }
}

var xmlHttpObj;
if (window.XMLHttpRequest) {
    xmlReq = new XMLHttpRequest();
}
var url = "https://www.booknomads.com/api/v0/isbn/9789000035526";
xmlReq.open('GET', url, true);
xmlReq.onreadystatechange = getData;
xmlReq.send();

function getData() {
    if (xmlReq.readyState == 4 & xmlReq.status == 200) {
        try {
            //XML

            var result = xmlReq.responseXML.getElementsByTagName("resource");

            //JSON

            var result = JSON.parse(xmlReq.responseText);
            result.users.forEach(element => {
                console.log(element);
                
            });
        } catch (e) {
            console.error(e.message);
        }
    }
}

var whiteList = ["test", "test2"];
var obj = {
    "test": "value",
    "test1": "value1",
    "test2": "value2",
    "test": "value3"
}
var jsonObj = JSON.stringify(obj, whiteList, '\t');


// JSONP
// circumvent cross domain restriction
// Ajax same domain policy

function addScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascipt';
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

addScript("https://www.booknomads.com/api/v0/isbn/9789000035526?format=json&jsoncallback=testData")

function testData(obj) {
    console.log(obj);

}