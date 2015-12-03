//映射内容
var sex = {1:'男', 2:'女'};
var degree = {1:'小学', 2:'初中', 3:'高中', 4:'中专', 5:'大学', 6:'硕士', 7:'博士', 8:'其他'};
//模拟数据（薪水在6000-12000之间，日期在1980-01-01 00::00:00到2014-10-01 00:00:00之间）
var datas = new Array();
for(var i=0; i<186; i++){
	var user = new Object();
	user.user_id = 'user_'+i;
	user.user_code = 'user_'+i;
	user.user_name = '模拟用户'+(Math.floor(Math.random()*1000)+10000)+'号';
	user.sex = (Math.floor(Math.random()*2)+1);
	user.salary = (Math.floor(Math.random()*6000)+6000);
	user.degree = (Math.floor(Math.random()*8)+1);
	user.time = new Date(Math.floor(Math.random()*1096588800000)+315504000000);
	user.time_stamp_s = Math.floor((Math.floor(Math.random()*1096588800000)+315504000000)/1000);
	user.time_stamp_ms = Math.floor(Math.random()*1096588800000)+315504000000;
	user.string_date = $.fn.DtGrid.tools.dateFormat(new Date(Math.floor(Math.random()*1096588800000)+315504000000), 'yyyy-MM-dd');
	user.string_time = $.fn.DtGrid.tools.dateFormat(new Date(Math.floor(Math.random()*1096588800000)+315504000000), 'yyyy-MM-dd hh:mm:ss');
	datas.push(user);
}
//定义表格
var dtGridColumns = [
	{id:'user_code', title:'用户编号', type:'string', columnClass:'text-center', fastQuery:true, fastQueryType:'eq'},
	{id:'user_name', title:'用户名称', type:'string', columnClass:'text-center', fastQuery:true, fastQueryType:'lk'},
	{id:'sex', title:'性别', type:'string', codeTable:sex, columnClass:'text-center', hideType:'xs', fastQuery:true, fastQueryType:'eq', resolution:function(record, value){
		var content = '';
		if(value==1){
			content += '<span style="background:#00a2ca;padding:2px 10px;color:white;">Male</span>';
		}else{
			content += '<span style="background:#c447ae;padding:2px 10px;color:white;">Female</span>';
		}
		return content;
	}},
	{id:'salary', title:'工资', type:'number', format:'#,###.00', columnClass:'text-center', hideType:'xs', fastQuery:true, fastQueryType:'range'},
	{id:'degree', title:'学历', type:'string', codeTable:degree, columnClass:'text-center', hideType:'sm|xs', fastQuery:true, fastQueryType:'eq' },
	{id:'time', title:'日期对象', type:'date', format:'yyyy-MM-dd hh:mm:ss', columnClass:'text-center', hideType:'md|sm|xs', fastQuery:true, fastQueryType:'range' },
	{id:'time_stamp_s', title:'秒级时间戳', type:'date', format:'yyyy-MM-dd hh:mm:ss', otype:'time_stamp_s', columnClass:'text-center', hideType:'lg|md|sm|xs', fastQuery:true, fastQueryType:'range' },
	{id:'time_stamp_ms', title:'毫秒级时间戳', type:'date', format:'yyyy-MM-dd hh:mm:ss', otype:'time_stamp_ms', columnClass:'text-center', hideType:'lg|md|sm|xs', fastQuery:true, fastQueryType:'range' },
	{id:'string_date', title:'日期格式字符串', type:'date', format:'yyyy-MM-dd', otype:'string', oformat:'yyyy-MM-dd', columnClass:'text-center', hideType:'lg|md|sm|xs', fastQuery:true, fastQueryType:'range' },
	{id:'string_time', title:'时间格式字符串', type:'date', format:'yyyy-MM-dd hh:mm:ss', otype:'string', oformat:'yyyy-MM-dd hh:mm:ss', columnClass:'text-center', hideType:'lg|md|sm|xs', fastQuery:true, fastQueryType:'range' }
];
var dtGridOption = {
	lang : 'zh-cn',
	ajaxLoad : false,
	exportFileName : '用户列表',
	datas : datas,
	columns : dtGridColumns,
    gridContainer : 'dtGridContainer',
    toolbarContainer : 'dtGridToolBarContainer',
    tools : '',
    pageSize : 10,
    pageSizeLimit : [10, 20, 50]
};
var grid = $.fn.DtGrid.init(dtGridOption);
$(function(){
	grid.load();
});