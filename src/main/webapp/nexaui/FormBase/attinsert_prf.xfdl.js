(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("attinsert_prf");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Combo("Combo00","440","34","110","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("과목선택");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","570","34","110","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("날짜");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","62","104","618","346",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"요일\"/><Cell col=\"3\" text=\"상태\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"4\"/><Cell row=\"4\" col=\"1\"/><Cell row=\"4\" col=\"2\"/><Cell row=\"4\" col=\"3\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","554","132","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01_00","554","180","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","554","158","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Combo02");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","556","208","100","16",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Combo03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("attinsert_prf.xfdl", function() {

        this.Combo01_onitemchanged = function(obj,e)
        {

        };

        this.Combo00_onitemchanged = function(obj,e)
        {

        };

        this.Combo00_00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Combo00_00.addEventHandler("onitemchanged",this.Combo00_00_onitemchanged,this);
            this.Combo01.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.Combo01_00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
        };
        this.loadIncludeScript("attinsert_prf.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
