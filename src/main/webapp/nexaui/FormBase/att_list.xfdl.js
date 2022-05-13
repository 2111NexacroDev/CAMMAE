(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("att_list");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("myatt", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">1주차</Col></Row><Row><Col id=\"DATE\">2주차</Col></Row><Row><Col id=\"DATE\">3주차</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("sub", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","510","76","134","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","402","76","108","46",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("과목선택");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","32","134","618","346",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요일\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"이의신청\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" edittype=\"button\" displaytype=\"expr:attObjection==&apos;N&apos;?&apos;buttoncontrol&apos;:&apos;none&apos;\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"4\"/><Cell row=\"4\" col=\"1\"/><Cell row=\"4\" col=\"2\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","750","37","268","133",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_border("2px solid darkgreen");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","50","84","163","32",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00","820","62","154","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신청이 완료되었습니다");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("att_list.xfdl", function() {

        this.Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("att_list.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
