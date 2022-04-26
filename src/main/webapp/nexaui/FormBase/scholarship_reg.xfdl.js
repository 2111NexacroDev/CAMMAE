(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholarship_reg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_scholarship", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_amount\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit00","247","72","230","51",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","247","145","230","51",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","245","230","230","51",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","216","323","161","47",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","100","76","95","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("년도입력");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","110","150","95","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학기");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","111","230","105","55",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("장학금 금액");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_scholarship","scholarship_year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_00","value","ds_scholarship","scholarship_term");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_00_00","value","ds_scholarship","scholarship_amount");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholarship_reg.xfdl", function() {

        this.btn_add_onclick = function(obj,e)
        {
        this.alert(this.ds_scholarship.getConstColumn(0));
        	this.ds_scholarship.addRow();
        	this.transaction(
        	 "tr_code"
        	 ,"CmURL::scholarship/register.kh"
        	 ,"in_admin_scholar=ds_scholarship:U"
        	 ,""
        	 ,""
        	 ,"fn_callback_tran"
        	)

        };
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "tr_code")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("등록 실패 : " + sErrorMsg);
        			return;
        		}else{
        		this.alert("등록 성공 :"+ sSuccessMsg);
        		return ;
        	}
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };

        this.loadIncludeScript("scholarship_reg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
