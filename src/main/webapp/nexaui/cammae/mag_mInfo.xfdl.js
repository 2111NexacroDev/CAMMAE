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
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_magInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"managerNo\" type=\"STRING\" size=\"256\"/><Column id=\"managerName\" type=\"STRING\" size=\"256\"/><Column id=\"managerBirth\" type=\"STRING\" size=\"256\"/><Column id=\"managerAddress\" type=\"STRING\" size=\"256\"/><Column id=\"managerPhonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"managerEmail\" type=\"STRING\" size=\"256\"/><Column id=\"managerTeam\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("team", this);
            obj._setContents("<ColumnInfo><Column id=\"teamCode\" type=\"STRING\" size=\"256\"/><Column id=\"teamName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"teamCode\">all</Col><Col id=\"teamName\">전체</Col></Row><Row><Col id=\"teamCode\">1</Col><Col id=\"teamName\">상담</Col></Row><Row><Col id=\"teamCode\">2</Col><Col id=\"teamName\">취업지원</Col></Row><Row><Col id=\"teamCode\">3</Col><Col id=\"teamName\">행정</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div04","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","160","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_magInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"이메일\"/><Cell col=\"7\" text=\"소속\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:managerNo\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:managerName\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:managerBirth\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:managerAddress\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:managerPhonenumber\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:managerEmail\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:managerTeam\" edittype=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","559","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","633","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pwUpdate","443","85","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1042","680","87","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("소속");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","223","87","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("team");
            obj.set_codecolumn("teamCode");
            obj.set_datacolumn("teamName");
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","367","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("관리자 정보");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","1080","196","325","169",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("positionstep").set("0");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK","110","120","104","33",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("OK");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00","53","20","219","27",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("현재 비밀번호를 입력해주세요");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("pwd","50","57","218","40",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_borderRadius("7px / 7px");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","1108","401","325","339",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("positionstep").set("0");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK2","105","280","104","33",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("0");
            obj.set_text("OK");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static00","53","17","209","27",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("1");
            obj.set_text("변경할 비밀번호를 입력해주세요");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("rePwd1","55","64","218","40",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_borderRadius("7px / 7px");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static00_00","34","130","247","27",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("3");
            obj.set_text("변경할 비밀번호를 한번더 입력해주세요");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("rePwd2","55","179","218","40",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("4");
            obj.set_password("true");
            obj.set_borderRadius("7px / 7px");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("pwdSame","34","233","260","27",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("5");
            obj.set_text("변경할 비밀번호가 서로 일치 하지 않습니다");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static00_00","180","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("소속");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
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
        this.registerScript("mag_mInfo.xfdl", function() {
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

        			return;
        		}
        	}

        	if(id == "pwd_same")
        	{
        		if(nErrorCode > 0) {
        			this.PopupDiv01.trackPopupByComponent(this.btn_pwUpdate, -50, 150);
        			return;
        		} else {
        			this.alert("비밀번호가 일치하지 않습니다");
        			return;
        		}
        	}

        	if(id == "pwd_change")
        	{
        		if(nErrorCode > 0) {
        			this.PopupDiv01.closePopup();
        			return;
        		} else {
        			this.alert("비밀번호 변경 실패");
        			return;
        		}
        	}
        }

        this.fn_magSelect = function() {
        	var teamCode = this.Combo00.text;
        	// 관리자 관리자 정보
        	this.transaction(
        		"mag_info"// 1.ID
        		,"CmURL::manager/magInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_magInfo=out_magAllInfo" // 4.OutDs : S->F jsp(SELECT)
        		,"in_var="+teamCode // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        }

        this.frm_emp_onload = function(obj,e)
        {
        	this.fn_magSelect();
        };

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
        	var arrDel = this.ds_magInfo.extractRows("chk == '1'");
        	this.ds_magInfo.deleteMultiRows(arrDel);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	this.transaction(
        		"mag_update"// 1.ID
        		,"CmURL::manager/magUpdate.kh"// 2.URL
        		,"in_mag=ds_magInfo:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,""// 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_magInfo.addRow();
        };
        this.btn_pwUpdate_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj, -50, 150);
        };

        this.PopupDiv00_btn_OK_onclick = function(obj,e)
        {
        	var pwd = this.PopupDiv00.form.pwd.text;
        	if(pwd != "") {
        		this.transaction(
        			"pwd_same"// 1.ID
        			,"CmURL::login/pwdSame.kh"// 2.URL
        			,"" // 3.InDs : F->S jsp(I,U,D)
        			,"" // 4.OutDs : S->F jsp(SELECT)
        			,"in_pwd="+pwd// 5.InVar : F->S(var)
        			,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        		);
        	} else {
        		this.alert("현재 비밀번호가 빈칸 입니다.");
        	}
        };

        this.PopupDiv01_btn_OK2_onclick = function(obj,e)
        {
        	var rePwd1 = this.PopupDiv01.form.rePwd1.text;
        	var rePwd2 = this.PopupDiv01.form.rePwd2.text;

        	// 변경할 비밀번호 일치 여부
        	if(rePwd1 != rePwd2) {
        		this.PopupDiv01.form.pwdSame.set_color("red");
        	} else {
        		this.PopupDiv01.form.pwdSame.set_color("white");
        		// 비밀번호 변경
        		this.transaction(
        			"pwd_change"// 1.ID
        			,"CmURL::login/pwdChange.kh"// 2.URL
        			,"" // 3.InDs : F->S jsp(I,U,D)
        			,"" // 4.OutDs : S->F jsp(SELECT)
        			,"in_pwd="+rePwd1// 5.InVar : F->S(var)
        			,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        		);
        	}
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	this.fn_allChk(obj, e);
        };

        this.btn_select_onclick = function(obj,e)
        {
        	this.fn_magSelect();
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
            this.btn_pwUpdate.addEventHandler("onclick",this.btn_pwUpdate_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.PopupDiv00.form.btn_OK.addEventHandler("onclick",this.PopupDiv00_btn_OK_onclick,this);
            this.PopupDiv01.form.btn_OK2.addEventHandler("onclick",this.PopupDiv01_btn_OK2_onclick,this);
            this.PopupDiv01.form.pwdSame.addEventHandler("onclick",this.PopupDiv01_pwdSame_onclick,this);
        };
        this.loadIncludeScript("mag_mInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
