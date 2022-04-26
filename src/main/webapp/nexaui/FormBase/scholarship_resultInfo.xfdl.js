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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_scholarship", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_inno\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_avg_grade\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_status\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_amount\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_name\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_phonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_college\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","76","1250","209",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_scholarship");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"scholarship_inno\"/><Cell col=\"1\" text=\"scholarship_avg_grade\"/><Cell col=\"2\" text=\"scholarship_year\"/><Cell col=\"3\" text=\"scholarship_term\"/><Cell col=\"4\" text=\"scholarship_status\"/><Cell col=\"5\" text=\"scholarship_amount\"/><Cell col=\"6\" text=\"scholarship_name\"/><Cell col=\"7\" text=\"scholarship_phonenumber\"/><Cell col=\"8\" text=\"scholarship_college\"/></Band><Band id=\"body\"><Cell text=\"bind:scholarship_inno\"/><Cell col=\"1\" text=\"bind:scholarship_avg_grade\"/><Cell col=\"2\" text=\"bind:scholarship_year\"/><Cell col=\"3\" text=\"bind:scholarship_term\"/><Cell col=\"4\" text=\"bind:scholarship_status\"/><Cell col=\"5\" text=\"bind:scholarship_amount\"/><Cell col=\"6\" text=\"bind:scholarship_name\"/><Cell col=\"7\" text=\"bind:scholarship_phonenumber\"/><Cell col=\"8\" text=\"bind:scholarship_college\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholarship_resultInfo.xfdl", function() {
        this.frm_emp_onload = function(obj,e)
        {
        this.transaction(
        		"scholarship_resultinfo"// 1.ID
        		,"CmURL::scholarship/scholarInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_scholarship=out_scholarship" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "scholarship_resultinfo")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}else{
        		this.alert("조회 성공 :"+ sSuccessMsg);
        		return ;
        	}
        	}

        }
        this.scholarship_resultInfo_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_emp_onload,this);
        };

        this.loadIncludeScript("scholarship_resultInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
