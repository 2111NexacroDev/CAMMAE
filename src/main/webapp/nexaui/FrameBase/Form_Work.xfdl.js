(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","7","11","500","19",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","7","38",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,570,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Work");

                p.st_title.set_taborder("0");
                p.st_title.set_text("Static00");
                p.st_title.set_font("bold 14px/normal \"Malgun Gothic\"");
                p.st_title.move("7","11","500","19",null,null);

                p.div_work.set_taborder("1");
                p.div_work.set_text("Div00");
                p.div_work.move("7","38",null,null,"10","10");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,718,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("screen00","screen00",1000,650,this,
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
        this.registerScript("Form_Work.xfdl", function() {

        this.fv_key = "";

        this.Form_Work_onload = function(obj,e)
        {
        	var objOwnerFrame = this.getOwnerFrame();

        	var sMenuId  = objOwnerFrame.openParam.MENU_ID;
        	var sMenuNM  = objOwnerFrame.openParam.MENU_NAME;
        	var sFormUrl = objOwnerFrame.openParam.FORM_URL;
        	var sMenuPath = objOwnerFrame.openParam.MENU_PATH;

        	this.div_work.set_url(sFormUrl);
        	this.st_title.set_text(sMenuPath);

        	this.fv_key = sMenuId;

        	var objApp = nexacro.getApplication();
        	var nRow = objApp.gds_myMenu.findRow("MENU_ID", this.fv_key);

        	if(nRow  > -1){
        		this.btn_bookmark.set_text("★");
        		this.fv_myMenu = "D";
        	}

        };

        this.Form_Work_onactivate = function(obj,e)
        {
        // 	var objApp = nexacro.getApplication();
        // 	objApp.av_MdiFrame.form.fn_tabControl(this.fv_key);

        	nexacro.getApplication().av_MdiFrame.form.fn_tabControl(this.fv_key);


        	//objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.MdiFrame.form.fn_tabControl(this.fv_key);
        };


        this.fv_myMenu = "I";	//등록(I), 삭제(D)
        this.btn_bookmark_onclick = function(obj,e)
        {
        	if(this.fv_myMenu == "I"){
        		// 즐겨착기 등록
        		var objApp = nexacro.getApplication();
        		var nFindRow = objApp.gds_menu.findRow("MENU_ID", this.fv_key);
        		var nNewRow = objApp.gds_myMenu.addRow();
        		objApp.gds_myMenu.copyRow(nNewRow, objApp.gds_menu, nFindRow);
        		obj.set_text("★");
        		this.fv_myMenu = "D";
        	}
        	else if(this.fv_myMenu == "D"){
        		//즐겨찾기 삭제
        		var objApp = nexacro.getApplication();
        		var nRow = objApp.gds_myMenu.findRow("MENU_ID", this.fv_key);
        		objApp.gds_myMenu.deleteRow(nRow);
        		obj.set_text("☆");
        		this.fv_myMenu = "I";
        	}
        	nexacro.setPrivateProfile("myMenuData", objApp.gds_myMenu.saveXML());
        };

        this.Button00_onclick = function(obj,e)
        {
        	var sValue = nexacro.getPrivateProfile("myMenuData");
        	trace(sValue);


        };









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onactivate",this.Form_Work_onactivate,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
