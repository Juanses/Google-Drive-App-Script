var Driveclass = function(id){
  this.id = id;
  
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
  
  this.filestoName = function(){
    var solution = [];
    while (this.files.hasNext()) {
      var archivo = this.files.next();
      solution.push(archivo.getName());
    }
    return solution;
  }
  
  this.filestoId = function(){
    var solution = [];
    while (this.files.hasNext()) {
      var archivo = this.files.next();
      solution.push(archivo.getId());
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
}