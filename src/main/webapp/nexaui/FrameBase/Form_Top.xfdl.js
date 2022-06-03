(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","65","0","130","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대일대학교");
            obj.set_font("18pt/normal \"bold\"");
            obj.set_color("#004a26");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","8","10","57","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_image("url(\'theme::CAMMAE/images/logo1.png\')");
            obj.set_imagealign("center middle");
            obj.set_visible("true");
            obj.set_tooltiptype("default");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,50,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Top");

                p.Static00.set_taborder("0");
                p.Static00.set_text("대일대학교");
                p.Static00.set_font("18pt/normal \"bold\"");
                p.Static00.set_color("#004a26");
                p.Static00.move("65","0","130","60",null,null);

                p.ImageViewer00.set_taborder("1");
                p.ImageViewer00.set_text("");
                p.ImageViewer00.set_image("url(\'theme::CAMMAE/images/logo1.png\')");
                p.ImageViewer00.set_imagealign("center middle");
                p.ImageViewer00.set_visible("true");
                p.ImageViewer00.set_tooltiptype("default");
                p.ImageViewer00.set_border("0px none");
                p.ImageViewer00.set_maxheight("");
                p.ImageViewer00.set_minwidth("");
                p.ImageViewer00.move("8","10","57","50",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,50,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        // 최상의 메뉴를 가지고 있을 데이터셋 ds_menu 생성(화면에)
        // gds_menu 있는 최상위 메뉴 데이터를 ds_menu에 카피 --> filter, copyData
        // Menu컴포너트 바인딩을 ds_menu 변경
        // 어떤 이벤트? 화면이 로드가 다 되면...



        this.Form_Top_onload = function(obj,e)
        {
        	//var objApp = nexacro.getApplication();
        	//objApp.gds_menu.filter("MENU_LEVEL == '0'");
        	//this.ds_menu.copyData(objApp.gds_menu, true);
        };

        this.Menu00_onmenuclick = function(obj,e)
        {
        	//var objApp = nexacro.getApplication();
        	//objApp.gds_menu.filter("MENU_ID.substring(0,2) == '" + e.id + "'");
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
