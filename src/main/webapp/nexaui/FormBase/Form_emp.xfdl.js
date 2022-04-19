(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_emp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_stdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentGrade\" type=\"STRING\" size=\"256\"/><Column id=\"studentBirth\" type=\"STRING\" size=\"256\"/><Column id=\"studentAddress\" type=\"STRING\" size=\"256\"/><Column id=\"studentPhonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"studentEmail\" type=\"STRING\" size=\"256\"/><Column id=\"studentState\" type=\"STRING\" size=\"256\"/><Column id=\"professorName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_delete","495","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","600","3","75","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","60","95","616","455",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_stdInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"departmentName\"/><Cell col=\"1\" text=\"studentNo\"/><Cell col=\"2\" text=\"studentName\"/><Cell col=\"3\" text=\"studentGrade\"/><Cell col=\"4\" text=\"studentBirth\"/><Cell col=\"5\" text=\"studentAddress\"/><Cell col=\"6\" text=\"studentPhonenumber\"/><Cell col=\"7\" text=\"studentEmail\"/><Cell col=\"8\" text=\"studentState\"/><Cell col=\"9\" text=\"professorName\"/></Band><Band id=\"body\"><Cell text=\"bind:departmentName\"/><Cell col=\"1\" text=\"bind:studentNo\"/><Cell col=\"2\" text=\"bind:studentName\"/><Cell col=\"3\" text=\"bind:studentGrade\"/><Cell col=\"4\" text=\"bind:studentBirth\"/><Cell col=\"5\" text=\"bind:studentAddress\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:studentPhonenumber\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:studentEmail\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:studentState\"/><Cell col=\"9\" text=\"bind:professorName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_emp.xfdl", function() {
        /********************************************************************
            created:	  2022/02/18
            filename: 	C:\KH_edu17.1\Work\frm_emp.xfdl
            file path:	C:\KH_edu17.1\Work
            file base: 	frm_emp
            file ext:	  xfdl
            author:

            purpose:
        *********************************************************************/

        this.fn_callback = function(id, sRtn)
        {

        }

        this.out_var ="";
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {

        	if(id == "std_info")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("코드 조회 실패 : " + sErrorMsg);
        			return;
        		}
        	}


        }

        this.frm_emp_onload = function(obj,e)
        {
        	this.transaction(
        		"std_info"// 1.ID
        		,"CmURL::student/stdInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_stdInfo=out_stdInfo" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	this.transaction(
        		"std_update"// 1.ID
        		,"CmURL::student/stdUpdate.kh"// 2.URL
        		,"in_std=ds_stdInfo:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,""// 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_emp_onload,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("Form_emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
