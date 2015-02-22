/*
The MIT License (MIT)

Copyright (c) 2015 Paul W. Graham.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


function generatePDF(fileNameForPDF, unstarMessages, embedWebImages, embedInlineImages, embedAttachments) {
  
  // Get all starred threads from Gmail.
  var starredThreads = GmailApp.getStarredThreads();
  
  var x;
  var y;
  var messages;
  var starredMessages = [];
  
  // Extract all starred messages from the starred threads.
  for(x = 0; x < starredThreads.length; x++) {
    messages = starredThreads[x].getMessages();
    for(y = 0; y < messages.length; y++) {
      if(messages[y].isStarred()) {
        starredMessages.push(messages[y]);
      }        
    }
  }
  
  
  try {
    var pdfFile;
    var pdfUrl;
    var opts = {
                includeHeader: true,
                includeAttachments: false,
                embedAttachments: embedAttachments,
                includeAttachments: embedAttachments,
                embedRemoteImages: embedWebImages,
                embedInlineImages: embedInlineImages,
                embedAvatar: false
              };
   
        if(starredMessages.length > 0) {
         pdfFile = DriveApp.createFile(messageToPdf(starredMessages, opts));    
         pdfFile.setName(fileNameForPDF);
         pdfUrl = pdfFile.getUrl();
    }
  
    if(unstarMessages) {
      for(x = 0; x < starredMessages.length; x++) {
           starredMessages[x].unstar();
      }
    }
  
    return {numberOfMessagesProcessed:starredMessages.length, driveURLforPDF: pdfUrl};
  } catch(err) {
    // return undefined to indicate error.
    return;
  }
}

