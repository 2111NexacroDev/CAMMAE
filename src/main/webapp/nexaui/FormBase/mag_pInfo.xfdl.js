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
            obj = new Dataset("ds_prfInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"professorNo\" type=\"STRING\" size=\"256\"/><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/><Column id=\"professorName\" type=\"STRING\" size=\"256\"/><Column id=\"professorBirth\" type=\"STRING\" size=\"256\"/><Column id=\"professorAddress\" type=\"STRING\" size=\"256\"/><Column id=\"professorPhonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"professorEmail\" type=\"STRING\" size=\"256\"/><Column id=\"professorPassword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","64","93","616","455",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_prfInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"교수번호\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"생년월일\"/><Cell col=\"5\" text=\"주소\"/><Cell col=\"6\" text=\"연락처\"/><Cell col=\"7\" text=\"이메일\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:professorNo\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:departmentName\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:professorName\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:professorBirth\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:professorAddress\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:professorPhonenumber\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:professorEmail\" edittype=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","386","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","500","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","600","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","67","24","87","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("년도");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","145","34","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","310","27","80","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("학기");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","387","31","163","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("1학기");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","563","31","87","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("검색");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Combo00","innerdataset","ds_stdGradeSarch","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Combo00","codecolumn","ds_stdGrade","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Combo00","datacolumn","ds_stdGrade","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mag_pInfo.xfdl", function() {
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
        //학생정보
        // 	this.transaction(
        // 		"std_info"// 1.ID
        // 		,"CmURL::student/stdInfo.kh"// 2.URL
        // 		,"" // 3.InDs : F->S jsp(I,U,D)
        // 		,"ds_stdInfo=out_stdInfo" // 4.OutDs : S->F jsp(SELECT)
        // 		,"" // 5.InVar : F->S(var)
        // 		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        // 	);
        // 교수 정보
        // 	this.transaction(
        // 		"prf_info"// 1.ID
        // 		,"CmURL::professor/prfInfo.kh"// 2.URL
        // 		,"" // 3.InDs : F->S jsp(I,U,D)
        // 		,"ds_prfInfo=out_prfInfo" // 4.OutDs : S->F jsp(SELECT)
        // 		,"" // 5.InVar : F->S(var)
        // 		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        // 	);
        // 관리자 학생 정보
        // this.transaction(
        // 		"mag_info"// 1.ID
        // 		,"CmURL::manager/stdInfo.kh"// 2.URL
        // 		,"" // 3.InDs : F->S jsp(I,U,D)
        // 		,"ds_stdInfo=out_stdAllInfo" // 4.OutDs : S->F jsp(SELECT)
        // 		,"" // 5.InVar : F->S(var)
        // 		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        // 	);

        // 관리자 교수 정보
        this.transaction(
        		"mag_info"// 1.ID
        		,"CmURL::manager/prfInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_prfInfo=out_prfAllInfo" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        // 관리자 관리자 정보
        // this.transaction(
        // 		"mag_info"// 1.ID
        // 		,"CmURL::manager/magInfo.kh"// 2.URL
        // 		,"" // 3.InDs : F->S jsp(I,U,D)
        // 		,"ds_stdInfo=out_magAllInfo" // 4.OutDs : S->F jsp(SELECT)
        // 		,"" // 5.InVar : F->S(var)
        // 		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        // 	);
        };

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
        			objDs.setColumn(i, "chk", nVal);
        		}
        	}
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	// 삭제
        	// extractRows 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다.
        	var arrDel = this.ds_prfInfo.extractRows("chk == '1'");
        	this.ds_prfInfo.deleteMultiRows(arrDel);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	this.transaction(
        		"prf_update"// 1.ID
        		,"CmURL::manager/mPrfUpdate.kh"// 2.URL
        		,"in_prf=ds_prfInfo:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,""// 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_prfInfo.addRow();
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	this.fn_allChk(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_emp_onload,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("mag_pInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
