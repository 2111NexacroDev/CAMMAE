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
            obj._setContents("<ColumnInfo><Column id=\"colNo\" type=\"STRING\" size=\"256\"/><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentGrade\" type=\"STRING\" size=\"256\"/><Column id=\"studentBirth\" type=\"STRING\" size=\"256\"/><Column id=\"studentAddress\" type=\"STRING\" size=\"256\"/><Column id=\"studentPhonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"studentEmail\" type=\"STRING\" size=\"256\"/><Column id=\"studentState\" type=\"STRING\" size=\"256\"/><Column id=\"professorName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colNo\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_pwd","279","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","600","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","60","95","616","455",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_stdInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"departmentName\"/><Cell col=\"2\" text=\"studentNo\"/><Cell col=\"3\" text=\"studentName\"/><Cell col=\"4\" text=\"studentGrade\"/><Cell col=\"5\" text=\"studentBirth\"/><Cell col=\"6\" text=\"studentAddress\"/><Cell col=\"7\" text=\"studentPhonenumber\"/><Cell col=\"8\" text=\"studentEmail\"/><Cell col=\"9\" text=\"studentState\"/><Cell col=\"10\" text=\"professorName\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:colNo\" expr=\"colNo==&apos;0&apos;?&apos;1&apos;:&apos;0&apos;\"/><Cell col=\"1\" text=\"bind:departmentName\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:studentNo\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:studentName\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:studentGrade\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:studentBirth\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:studentAddress\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:studentPhonenumber\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:studentEmail\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:studentState\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:professorName\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","386","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","500","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
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
        this.registerScript("mag_sInfo.xfdl", function() {
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


        // Head 선택시 전체 선택, 전체 해제 기능
        this.fn_allChk = function(obj, e) {
        	if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") {
        		// 1-> 0 -> 1
        		var nVal = obj.getCellText(-1, e.cell);
        		nVal = (nVal=="1"?"0":"1");

        		// Head
        		obj.setCellProperty("Head", e.cell, "text", nVal);

        		// Body
        		var objDs = obj.getBindDataset();
        		for(var i=0; i<objDs.rowcount; i++) {
        			objDs.setColumn(i, "colNo", nVal);
        		}
        	}
        }

        this.frm_emp_onload = function(obj,e)
        {
        // 관리자 학생 정보
        this.transaction(
        		"mag_info"// 1.ID
        		,"CmURL::manager/stdInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_stdInfo=out_stdAllInfo" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.btn_save_onclick = function(obj,e)
        {
        // 관리자 학생 정보 등록, 수정, 삭제
        	this.transaction(
        		"std_update"// 1.ID
        		,"CmURL::manager/mStdUpdate.kh"// 2.URL
        		,"in_std=ds_stdInfo:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,""// 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	this.fn_allChk(obj, e);
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	// 삭제
        	// extractRows 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다.
        	var arrDel = this.ds_stdInfo.extractRows("colNo == '1'");
        	this.ds_stdInfo.deleteMultiRows(arrDel);
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_stdInfo.addRow();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_emp_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
        };
        this.loadIncludeScript("mag_sInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
