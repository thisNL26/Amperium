const doGet = () => {
	return HtmlService.createTemplateFromFile("Frontend/index.html")
		.evaluate()
		.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
		.setSandboxMode(HtmlService.SandboxMode.IFRAME)
		.addMetaTag("viewport", 'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"')
		.setTitle("Amperimum")
		.setFaviconUrl("https://cdn-icons-png.flaticon.com/512/4036/4036788.png");
}
const include = (ruta) =>
	HtmlService.createHtmlOutputFromFile(ruta).getContent();