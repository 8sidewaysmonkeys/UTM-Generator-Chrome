$(function(){
    //get url 
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        var thisUrl = tabs[0].url;
        $('#thisUrl').html('Generating for<br><small>'+thisUrl+'</small>'); 

        $('#utmGen').submit(function(e){
            e.preventDefault();

            //check that either campaign name or id is filled in
            
            if($('#name').val() == '' && $('#id').val() == ''){
                $('#outputBox').html('<div class="bg-danger text-white p-2">Please fill in either Campaign Name or Campaign ID</div>');
            }else{

                var name = $('#name').val();
                var id = $('#id').val(); 
                var source = $('#source').val(); 
                var medium = $('#medium').val();
                var term = $('#term').val();
                var content = $('#content').val();


                var finalOutput = thisUrl;
                if(finalOutput.indexOf('?') > 0){
                    finalOutput += '&';
                }else{
                    finalOutput += '?';
                }

                finalOutput += 'utm_source='+encodeURIComponent(source).replace(/%20/g, "+");
                finalOutput += '&utm_medium='+encodeURIComponent(medium).replace(/%20/g, "+");
                if(name != ''){
                    finalOutput += '&utm_name='+encodeURIComponent(name).replace(/%20/g, "+");
                }
                if(id != ''){
                    finalOutput += '&utm_id='+encodeURIComponent(id).replace(/%20/g, "+");
                }
                if(term != ''){
                    finalOutput += '&utm_term='+encodeURIComponent(term).replace(/%20/g, "+");
                }
                if(content != ''){
                    finalOutput += '&utm_content='+encodeURIComponent(content).replace(/%20/g, "+");
                }
                $('#outputBox').html('<small>'+finalOutput.toLowerCase()+'</small>');
                $('#copyBox').html('<a href="#" id="copyToClip" class="btn btn-primary">Copy To Clipboard</a>');
                window.scrollTo(0,document.body.scrollHeight);
            }
        });
    });

    $('body').on('click', '#copyToClip', function(e){
        e.preventDefault();
        var copyText = $('#outputBox').text();
        var copyFrom = $('<textarea/>');
        copyFrom.css({
            position: "absolute",
            left: "-1000px",
            top: "-1000px",
        });
        copyFrom.text(copyText);
        $('body').append(copyFrom);
        copyFrom.select();
        document.execCommand('copy');
        alert('Copied URL '+copyText);
    });
});