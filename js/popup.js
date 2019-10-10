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

// 获取当前选项卡ID
function getCurrentTabId(callback)
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		if(callback) callback(tabs.length ? tabs[0].id: null);
	});
}

/*getCurrentTabId((tabId) => {
	var port = chrome.tabs.connect(tabId, {name: 'test-connect'});
	port.postMessage({question: '你是谁啊？'});
	port.onMessage.addListener(function(msg) {
		alert('收到消息：'+msg.answer);
		if(msg.answer && msg.answer.startsWith('我是'))
		{
			port.postMessage({question: '哦，原来是你啊！'});
		}
	});
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
$('#gitlab').click(() => {
	chrome.tabs.create({url: 'http://115.159.76.241/dashboard/groups'});
});
$('#yapi').click(() => {
	chrome.tabs.create({url: 'http://yapi.gicdev.com'});
});
$('#showdoc').click(() => {
	chrome.tabs.create({url: 'http://doc.demogic.com'});
});
$('#yuque').click(() => {
	chrome.tabs.create({url: 'https://www.yuque.com/kgrc1y'});
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
	chrome.tabs.create({url: 'http://gicdev.demogic.com/gic-operations/manage_list'});
});
// dev-devops-new
$('#dev-devops-new').click(() => {
	chrome.tabs.create({url: 'https://www.gicdev.com/operation-platform/#/'});
});

// pro-gic-web
$('#pro-gic-web').click(() => {
	chrome.tabs.create({url: 'http://hope.demogic.com/gic-web/#/login'});
});
// pro-haoban-web
$('#pro-haoban-web').click(() => {
	chrome.tabs.create({url: 'http://www.demosom.com/haoban-web/#/login'});
});
// pro-devops-web
$('#pro-devops-web').click(() => {
	chrome.tabs.create({url: 'https://hope.demogic.com/gic-operations/login'});
});
// pro-devops-new
$('#pro-devops-new').click(() => {
	chrome.tabs.create({url: 'https://hope.demogic.com/operation-platform/#/'});
});

// 4.0

$('#dev-devops-web_4').click(() => {
	chrome.tabs.create({url: 'https://four.gicdev.com/operation-platform/#/'});
});
$('#dev-gateway-web_4').click(() => {
	chrome.tabs.create({url: 'https://four.gicdev.com/gateway-web/#/'});
});
$('#dev-openPlatform-web_4').click(() => {
	chrome.tabs.create({url: 'https://four.gicdev.com/open-platform/#/index'});
});
$('#dev-appCenter-web_4').click(() => {
	chrome.tabs.create({url: 'https://four.gicdev.com/app-center/#/applyIndex'});
});
$('#dev-serverMarket-web_4').click(() => {
	chrome.tabs.create({url: 'https://four.gicdev.com/market/gic/#/index'});
});
$('#dev-damo-web_4').click(() => {
	chrome.tabs.create({url: 'https://four.gicdev.com/damo-system/login'});
});
$('#dev-devopsCenter-web_4').click(() => {
	chrome.tabs.create({url: 'https://four.gicdev.com/gic-app-center/'});
});