var Driveclass = function(){
  
  this.getfolder = function (id){
    this.folder = DriveApp.getFolderById(id);
  }
  
  //GOOGLE_APPS_SCRIPT / GOOGLE_DRAWINGS / GOOGLE_DOCS / GOOGLE_FORMS	/ GOOGLE_SHEETS	/ GOOGLE_SLIDES
  this.getfilesbytype = function (mimeType){
    this.files = this.folder.getFilesByType(mimeType);
  }
  
  this.getfilesbytype = function(mimetype){
    this.files = this.folder.getFilesByType(mimetype);
  }
  
  this.filedata = function(){
    var solution = [];
    var local = this.files;
    while (local.hasNext()) {
      var archivo = local.next();
      solution.push([archivo.getId(),archivo.getName()]);
    }
    return solution;
  }
   
  this.makesFilesEditableLink = function(idmatrix){
    //https://developers.google.com/apps-script/reference/drive/access
    //https://developers.google.com/apps-script/reference/drive/permission
    var solution = [];
    for (var i = 0; i < idmatrix.length; i++) {
      var file = DriveApp.getFileById(idmatrix[i]);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
      solution.push(file.getUrl());
    }
    return solution;
  }
  
  this.moveFile = function(fileid,destinationfolderid){
  var destinationid = destinationfolderid;
  var file = DriveApp.getFileById(fileid);
  var parents = file.getParents();
  while (parents.hasNext()) {
    var parent = parents.next();
    //Logger.log(parent.getName());
    parent.removeFile(file);
  }
  DriveApp.getFolderById(destinationid).addFile(file); 
}
  
}
