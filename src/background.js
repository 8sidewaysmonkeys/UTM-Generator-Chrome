chrome.runtime.onInstalled.addListener(() => {
    // default state goes here
    // this runs ONE TIME ONLY (unless the user reinstalls your extension)
    
    // eventual analytics integration?
    // var initialSettings = {
    //     "id": Date.now()       
    // }
    // chrome.storage.sync.set({"UTMChromeSettings": initialSettings}, function(){

    // });
});
