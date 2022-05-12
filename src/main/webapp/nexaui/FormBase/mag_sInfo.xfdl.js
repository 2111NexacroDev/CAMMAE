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
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentGrade\" type=\"STRING\" size=\"256\"/><Column id=\"studentBirth\" type=\"STRING\" size=\"256\"/><Column id=\"studentAddress\" type=\"STRING\" size=\"256\"/><Column id=\"studentPhonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"studentEmail\" type=\"STRING\" size=\"256\"/><Column id=\"studentState\" type=\"STRING\" size=\"256\"/><Column id=\"professorName\" type=\"STRING\" size=\"256\"/><Column id=\"universityCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("department", this);
            obj._setContents("<ColumnInfo><Column id=\"universityCode\" type=\"STRING\" size=\"256\"/><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"universityCode\">1</Col><Col id=\"departmentName\">컴퓨터공학과</Col></Row><Row><Col id=\"universityCode\">2</Col><Col id=\"departmentName\">전자전기공학과</Col></Row><Row><Col id=\"universityCode\">3</Col><Col id=\"departmentName\">산업디자인학과</Col></Row><Row><Col id=\"universityCode\">4</Col><Col id=\"departmentName\">중국어학과</Col></Row><Row><Col id=\"universityCode\">5</Col><Col id=\"departmentName\">유비쿼터스학과</Col></Row><Row><Col id=\"universityCode\">6</Col><Col id=\"departmentName\">국어국문학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save","600","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","60","95","616","455",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_stdInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"71\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"학과코드\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"이메일\"/><Cell col=\"10\" text=\"재학여부\"/><Cell col=\"11\" text=\"담당교수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:departmentName\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:studentNo\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:universityCode\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:studentName\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:studentGrade\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:studentBirth\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:studentAddress\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:studentPhonenumber\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:studentEmail\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:studentState\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:professorName\" edittype=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","386","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","500","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","57","40","87","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","120","50","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("department");
            obj.set_codecolumn("universityCode");
            obj.set_datacolumn("departmentName");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","253","48","87","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
        			objDs.setColumn(i, "chk", nVal);
        		}
        	}
        }

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
        	var arrDel = this.ds_stdInfo.extractRows("chk == '1'");
        	this.ds_stdInfo.deleteMultiRows(arrDel);
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_stdInfo.addRow();
        };

        this.btn_select_onclick = function(obj,e)
        {
        	var uniCode = this.Combo00.value;
        	// 관리자 학생 정보
        	this.transaction(
        			"mag_info"// 1.ID
        			,"CmURL::manager/stdInfo.kh"// 2.URL
        			,"" // 3.InDs : F->S jsp(I,U,D)
        			,"ds_stdInfo=out_stdAllInfo" // 4.OutDs : S->F jsp(SELECT)
        			,"in_var="+uniCode // 5.InVar : F->S(var)
        			,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        		);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };
        this.loadIncludeScript("mag_sInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
