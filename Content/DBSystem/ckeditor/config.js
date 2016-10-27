/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';
    var ckfinderPath = "/Content/DBSystem/"; //ckfinder路径
    config.filebrowserImageBrowseUrl =ckfinderPath+ 'ckfinder/ckfinder.html?Type=Images';
    config.filebrowserFlashBrowseUrl = ckfinderPath+'ckfinder/ckfinder.html?Type=Flash';
    config.filebrowserUploadUrl =ckfinderPath+ 'ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = ckfinderPath+'ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = ckfinderPath+'ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
    config.filebrowserWindowWidth = '800';  //“浏览服务器”弹出框的size设置
    config.filebrowserWindowHeight = '500';
};
