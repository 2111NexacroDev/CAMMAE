(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main_SDI");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","11","10","200","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("KH 정보교육원");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","221","32",null,"33","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("gds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","11","78","198",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"189\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","230","78",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Main_SDI.xfdl", function() {

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var sURL = objApp.gds_menu.getColumn(e.row, "FORM_URL");
        	//trace(sURL);
        	this.Div00.set_url(sURL);

        };

        this.Menu00_onmenuclick = function(obj,e)
        {
        	// gds_menu에서 FORM_URL 값을 찾아서 DIv에 연결
        	// e.id, findRow, getColumn 참고

        	var objApp = nexacro.getApplication();
        	var nRow = objApp.gds_menu.findRow("MENU_ID", e.id);
        	var sURL = objApp.gds_menu.getColumn(nRow, "FORM_URL");
        	this.Div00.set_url(sURL);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("Form_Main_SDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
