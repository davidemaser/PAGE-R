/**
 * Created by david-maser on 16/10/15.
 */
define(["jquery"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
var base = 'body',
    pre = 'compiler_',
    comp = [] || null,
    log = false,
    dataRoot = 'assets/data/',
    dataSource = 'structure',
    dataFormat = 'json',
    persist = false;

$(function () {
    $.ajax({
        type:'GET',
        url:dataRoot+dataSource+'.'+dataFormat,
        success:function(data) {
            console.log(data);
        },
        error:function(){

        },
        complete:function(){

        }
    })
});
});