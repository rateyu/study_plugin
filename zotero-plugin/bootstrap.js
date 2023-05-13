// 导入 Zotero 的模块
Components.utils.import("resource://zotero/Zotero.jsm");

var SampleZoteroPlugin = {
    init: function() {
        // 使用 Zotero 的 API
        Zotero.debug("Sample Zotero Plugin has been loaded");

        // 获取 Zotero 应用程序的版本
        var version = Zotero.Utilities.getVersion();
        Zotero.debug("Zotero version: " + version);
    }
}

// 当 Zotero 启动时，初始化插件
SampleZoteroPlugin.init();
