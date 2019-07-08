// 设置徽章 badge
/*chrome.browserAction.setBadgeText({text: 'New'});
chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});*/

// 设置桌面通知
/*chrome.notifications.create(null, {
	type: 'image',
	iconUrl: 'images/notify256.png',
	title: '祝福',
	message: '骚年，祝你圣诞快乐！Merry christmas!',
	imageUrl: 'images/notify256.png'
});*/

//-------------------- 右键菜单演示 ------------------------//
/*chrome.contextMenus.create({
	title: "测试右键菜单",
	onclick: function(){
		chrome.notifications.create(null, {
			type: 'basic',
			iconUrl: 'images/icon48.png',
			title: '这是标题',
			message: '您刚才点击了自定义右键菜单！'
		});
	}
});
chrome.contextMenus.create({
	title: '使用度娘搜索：%s', // %s表示选中的文字
	contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
	onclick: function(params)
	{
		// 注意不能使用location.href，因为location是属于background的window对象
		chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
	}
});*/

// 创建自定义面板，同一个插件可以创建多个自定义面板
// 几个参数依次为：panel标题、图标（其实设置了也没地方显示）、要加载的页面、加载成功后的回调
/*chrome.devtools.panels.create('MyPanel', 'images/icon48.png', 'mypanel.html', function(panel)
{
	console.log('自定义面板创建成功！'); // 注意这个log一般看不到
});

// 创建自定义侧边栏
chrome.devtools.panels.elements.createSidebarPane("Images", function(sidebar)
{
	// sidebar.setPage('../sidebar.html'); // 指定加载某个页面
	sidebar.setExpression('document.querySelectorAll("img")', 'All Images'); // 通过表达式来指定
	//sidebar.setObject({aaa: 111, bbb: 'Hello World!'}); // 直接设置显示某个对象
});*/

/*
 * popup 操作
 *
 */
// 综合
$('#tapd').click(() => {
	chrome.tabs.create({url: 'https://www.tapd.cn/my_worktable/#&filter_close=true'});
});
$('#cnpm').click(() => {
	chrome.tabs.create({url: 'http://www.gicdev.com:7002/'});
});
$('#jenkins').click(() => {
	chrome.tabs.create({url: 'http://123.207.187.158:8888/jenkins/'});
});
// dev-gic-web
$('#dev-gic-web').click(() => {
	chrome.tabs.create({url: 'http://gicdev.demogic.com/gic-web/#/login'});
});
// dev-haoban-web
$('#dev-haoban-web').click(() => {
	chrome.tabs.create({url: 'https://www.gicdev.com/haoban-web/#/login'});
});
// dev-devops-web
$('#dev-devops-web').click(() => {
	chrome.tabs.create({url: 'https://www.gicdev.com/operation-platform/#/'});
});

// pro-gic-web
$('#pro-gic-web').click(() => {
	chrome.tabs.create({url: 'http://gicdev.demogic.com/gic-web/#/login'});
});
// pro-haoban-web
$('#pro-haoban-web').click(() => {
	chrome.tabs.create({url: 'https://www.gicdev.com/haoban-web/#/login'});
});
// pro-devops-web
$('#pro-devops-web').click(() => {
	chrome.tabs.create({url: 'https://www.gicdev.com/operation-platform/#/'});
});

$('#dev-devops-web_4').click(() => {
	chrome.tabs.create({url: 'https://four.gicdev.com/operation-platform/#/'});
});

