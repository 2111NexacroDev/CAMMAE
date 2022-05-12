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
            obj._setContents("<ColumnInfo><Column id=\"professorNo\" type=\"STRING\" size=\"256\"/><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/><Column id=\"professorName\" type=\"STRING\" size=\"256\"/><Column id=\"professorBirth\" type=\"STRING\" size=\"256\"/><Column id=\"professorAddress\" type=\"STRING\" size=\"256\"/><Column id=\"professorPhonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"professorEmail\" type=\"STRING\" size=\"256\"/><Column id=\"professorPassword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save","600","3","75","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","705","201","325","339",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("positionstep").set("0");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK2","103","269","104","33",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("0");
            obj.set_text("OK");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static00","45","16","180","27",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("1");
            obj.set_text("변경할 비밀번호를 입력해주세요");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("rePwd1","48","64","218","40",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("2");
            obj.set_password("true");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static00_00","48","115","221","27",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("3");
            obj.set_text("변경할 비밀번호를 한번더 입력해주세요");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("rePwd2","51","163","218","40",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("4");
            obj.set_password("true");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("pwdSame","51","230","244","27",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("5");
            obj.set_text("변경할 비밀번호가 서로 일치 하지 않습니다");
            obj.set_color("white");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","705","4","325","169",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("positionstep").set("0");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK","95","120","104","33",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("OK");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00","45","16","170","27",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("현재 비밀번호를 입력해주세요");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("pwd","48","64","218","40",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_password("true");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_pwUpdate","495","3","95","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","200","95","116","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","400","97","116","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","200","173","116","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","400","173","116","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","202","308","318","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00","210","246","276","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00","204","373","316","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","160","160","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("이름");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","330","160","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("생년월일");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","130","237","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("전화번호");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","142","297","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("주소");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","144","363","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("이메일");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","160","80","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학과");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","340","80","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("교번");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_prfInfo","departmentName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_00","value","ds_prfInfo","professorNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_00_00","value","ds_prfInfo","professorName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_00_00_00_00","value","ds_prfInfo","professorBirth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit00_00_00_00_00_00_00","value","ds_prfInfo","professorPhonenumber");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit00_00_00_00_00_00","value","ds_prfInfo","professorAddress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit00_00_00_00_00_00_00_00","value","ds_prfInfo","professorEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prf_info.xfdl", function() {
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

        	if(id == "pwd_same")
        	{
        		if(nErrorCode > 0) {
        			this.PopupDiv01.trackPopupByComponent(this.btn_pwUpdate, -300, 150);
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
        	this.transaction(
        		"prf_info"// 1.ID
        		,"CmURL::professor/prfInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_prfInfo=out_prfInfo" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
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
        // this.transaction(
        // 		"mag_info"// 1.ID
        // 		,"CmURL::manager/prfInfo.kh"// 2.URL
        // 		,"" // 3.InDs : F->S jsp(I,U,D)
        // 		,"ds_stdInfo=out_prfAllInfo" // 4.OutDs : S->F jsp(SELECT)
        // 		,"" // 5.InVar : F->S(var)
        // 		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        // 	);
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



        this.btn_delete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	this.transaction(
        		"prf_update"// 1.ID
        		,"CmURL::professor/prfUpdate.kh"// 2.URL
        		,"in_prf=ds_prfInfo:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,""// 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };

        this.btn_pwUpdate_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj, -300, 150);
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_emp_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.PopupDiv01.form.btn_OK2.addEventHandler("onclick",this.PopupDiv01_btn_OK2_onclick,this);
            this.PopupDiv00.form.btn_OK.addEventHandler("onclick",this.PopupDiv00_btn_OK_onclick,this);
            this.btn_pwUpdate.addEventHandler("onclick",this.btn_pwUpdate_onclick,this);
        };
        this.loadIncludeScript("prf_info.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
