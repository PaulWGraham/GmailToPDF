# Gmail To PDF #
by Paul Graham 
graham.paul+github@gmail.com


## What Does It Do? ##

It allows you to create a PDF from selected Gmail messages. It's kinda rough and doesn't always work as expected. **Gmail To PDF** is not suitable for backup purposes or any use where reliability and/or accuracy is important. **Gmail To PDF** can optionally include images (both inline and located on the web) from the selected messages in the generated PDF. 

## What Is It? ##

**Gmail To PDF** is a utility script written in the *Google Apps Script* scripting language. When the user runs the script in their account it searches the user's Gmail account for starred messages and then uses any starred messages it finds to generate a PDF. The generated PDF is stored in the user's *Google Drive*. **Gmail To PDF** uses an HTML interface to allow the user to specify options and to provide feedback to the user.

## Installation ##

 1. [Download][zip] the file repository.
 2. Open the folder containing the repository files.
 3. Open the file *Code.g*s in a text editor.
 4. Sign-In to the Google account into which the **Gmail To PDF** is to be installed.
 5. Go to [https://script.google.com/][scripting] to open the Google scripting site.
 6. Select the *Script as Web App* option from the dialog that appears.
 7. Replace the contents of the *Code.gs* file on the Google scripting site with the contents of the *Code.gs* file open in the text editor.
 8. Open *GmailUtils.gs* file in a text editor. 
 9. Choose the *File->New->Script* File menu option from the menu in the Google scripting site.
 10. Name the new script file *GmailUtils*.
 11. Replace the contents of the new *GmailUtils.gs* file on the Google scripting site with the contents of the *GmailUtils.gs* file open in the text editor.
 12. Choose the *File->New->Html* File menu option from the menu in the Google scripting site.
 13. Name the new script file *index*.
 14. Replace the contents of the new GmailUtils.gs file on the Google scripting site with the contents of the *GmailUtils.gs* file open in the text editor.
 15. Name the project on the Google scripting site *GmailToPDF*.
 16. Using [instructions][publish] provided by Google publish the project as a web app in such a way as to ensure that no one else but the intended user can access it. 

## Copyright ##
Copyright (c) 2015 Paul Graham 

See LICENSE for details.

[zip]: https://github.com/PaulWGraham/GmailToPDF/archive/master.zip
[scripting]: https://script.google.com/
[publish]: https://developers.google.com/apps-script/guides/web#deploying_a_script_as_a_web_app
