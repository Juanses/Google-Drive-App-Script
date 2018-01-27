function myFunction() {
  var drive = new Driveclass();
  drive.getfolder("1D-l_v6cZ7OdxGE9-Ajhd0LNxjEl6DKql");
  //FileIterator with all the google docs
  var iterator = drive.getfilesbytype(MimeType.GOOGLE_DOCS);
  //Get the id and names of the files
  var fileinfo = drive.filedata(iterator);
  var ids = fileinfo.map(function(value,index) { return value[0]; });
  var links = drive.makesFilesEditableLink(ids);
  rowstart = 2;
  for (var i = 0; i < fileinfo.length; i++) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    sheet.getRange(rowstart+i,1).setValue(fileinfo[i][1]);
    sheet.getRange(rowstart+i,2).setFormula('=HYPERLINK("'+links[i]+'";"URL")');
  }
}
