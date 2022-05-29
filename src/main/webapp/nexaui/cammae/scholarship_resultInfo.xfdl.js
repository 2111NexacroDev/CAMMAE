(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholarship_resultInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_scholarship", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_inno\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_name\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_student_no\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_college\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_phonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","110","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_scholarship");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"82\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"전화번호\"/><Cell col=\"4\" text=\"년도\"/><Cell col=\"5\" text=\"학기\"/><Cell col=\"6\" text=\"신청상태\"/></Band><Band id=\"body\"><Cell text=\"bind:scholarship_name\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:scholarship_student_no\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:scholarship_college\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:scholarship_phonenumber\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:scholarship_year\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:scholarship_term\" textAlign=\"center\"/><Cell col=\"6\" text=\"expr:scholarship_status == &apos;Y&apos;? &quot;승인&quot; : scholarship_status== &apos;N&apos;? &quot;미승인&quot; : scholarship_status == &apos;W&apos;? &quot;대기&quot; : &quot;&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div03_00","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("장학금 조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholarship_resultInfo.xfdl", function() {


        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "scholarship_resultinfo")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        	}
        	}

        }
        this.scholarship_resultInfo_onload = function(obj,e)
        {
        	this.transaction(
        		"scholarship_resultinfo"// 1.ID
        		,"CmURL::scholarship/scholarResult.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_scholarship=out_scholarshipResult" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scholarship_resultInfo_onload,this);
        };
        this.loadIncludeScript("scholarship_resultInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
