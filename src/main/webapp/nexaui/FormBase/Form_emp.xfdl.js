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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"departmentName\"/><Cell col=\"1\" text=\"studentNo\"/><Cell col=\"2\" text=\"studentName\"/><Cell col=\"3\" text=\"studentGrade\"/><Cell col=\"4\" text=\"studentBirth\"/><Cell col=\"5\" text=\"studentAddress\"/><Cell col=\"6\" text=\"studentPhonenumber\"/><Cell col=\"7\" text=\"studentEmail\"/><Cell col=\"8\" text=\"studentState\"/><Cell col=\"9\" text=\"professorName\"/></Band><Band id=\"body\"><Cell text=\"bind:departmentName\"/><Cell col=\"1\" text=\"bind:studentNo\"/><Cell col=\"2\" text=\"bind:studentName\"/><Cell col=\"3\" text=\"bind:studentGrade\"/><Cell col=\"4\" text=\"bind:studentBirth\"/><Cell col=\"5\" text=\"bind:studentAddress\"/><Cell col=\"6\" text=\"bind:studentPhonenumber\"/><Cell col=\"7\" text=\"bind:studentEmail\"/><Cell col=\"8\" text=\"bind:studentState\"/><Cell col=\"9\" text=\"bind:professorName\"/></Band></Format></Formats>");
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


        var dept_filter = "";
        var gender_filter = "";

        this.fn_gender = function(avg)
        {
        	if(avg == "M"){
        		return "남";
        	}else {
        		return "여";
        	}
        }
        this.Div00_btn_dept_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);

        	//  ChildFrame.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom [,strUrl]] )
        	var objChild = new ChildFrame("popDept", 0, 0, 300, 400);
            objChild.set_formurl("Work::PopupDeptSearch.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");
            objChild.showModal(this.getOwnerFrame()
                             , {} , this, "fn_callback");
        };

        this.fn_callback = function(id, sRtn)
        {
        	var sVal = sRtn.split("|"); //  04  Marketing

        	this.Div00.form.edt_dept_cd.set_value(sVal[0]);
        	this.Div00.form.edt_dept_nm.set_value(sVal[1]);

        //	this.ds_emp.filter("DEPT_CD=='"+sVal[0]+"'");

        	dept_filter = "DEPT_CD == '"+sVal[0]+"'";
        	/*this.ds_emp.filter(dept_filter);*/
        	this.filters();


        }

        this.Div00_btn_reset_onclick = function(obj,e)
        {
        	this.ds_emp.filter("");
        };

        this.Div00_rdo_gender_onitemchanged = function(obj,e)
        {
        // 	if(e.postvalue=="A")
        // 	{
        // 		this.ds_emp.filter("");
        // 	} else {
        // 		this.ds_emp.filter("GENDER=='"+e.postvalue+"'");
        // 	}
        	if(e.postvalue=="A") {
        		gender_filter = "";
        		this.filters();
        	} else {
        		gender_filter = "GENDER=='"+e.postvalue+"'";
        		this.filters();
        	}

        };

        // 필터
        this.filters = function() {
        	if(dept_filter != "" && gender_filter != "") {
        		this.ds_emp.filter(dept_filter +"&&" +gender_filter);
        	} else if(dept_filter != "" && gender_filter == "") {
        		this.ds_emp.filter(dept_filter);
        	} else if(dept_filter == "" && gender_filter != "") {
        		this.ds_emp.filter(gender_filter);
        	} else {
        		this.ds_emp.filter("");
        	}
        };


        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.transaction(
        		"tr_select"// 1.ID
        		,"KhURL2::emp/list.nexa"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_emp=out_emp" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.out_var ="";
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "tr_save")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("저장 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert(this.out_var + " >> 저장 성공");
        	}

        	if(id=="tr_select")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("조회 성공 : " + this.ds_emp.getRowCount() + "건");
        	}

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
        		,"CmURL::list/stdInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_stdInfo=out_stdInfo" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };



        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        	this.ds_emp.setColumn(this.ds_emp.rowposition,"HIRE_DATE","20220218");
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var name = "민 봉 식";
        	this.transaction(
        		"tr_save"// 1.ID
        		,"KhURL2::emp/changeInfo.nexa"// 2.URL
        		,"in_emp=ds_emp:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,"in_var1=" + nexacro.wrapQuote(name) // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };

        this.Div01_Edit00_onchanged = function(obj,e)
        {

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
