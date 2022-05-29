(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"LOGIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("pink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_login","Static00:-220","Static00:-220","440","460",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","70","121","300","60",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("아이디를 입력하세요");
            obj.set_letterSpacing("5px");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_pw","70","190","300","60",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("비밀번호를 입력하세요");
            obj.set_password("true");
            obj.set_letterSpacing("5px");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login","70","339","300","60",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_font("36px/normal \"Malgun Gothic\"");
            this.div_login.addChild(obj.name, obj);

            obj = new CheckBox("chk_idSave","75","312","150","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_text("아이디 저장");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static00","140","30","160","60",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_font("48px/normal \"Malgun Gothic\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("st_msg","74","260","298","39",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_color("red");
            this.div_login.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_login.form.edt_id","value","ds_login","LOGIN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_login.form.edt_pw","value","ds_login","LOGIN_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {

        this.Form_Login_onsize = function(obj,e)
        {
        // 	var objApp = nexacro.getApplication();
        //
        // 	var nLeft = (objApp.mainframe.width / 2) - (this.div_login.form.getOffsetWidth() / 2);
        // 	var nTop  = (objApp.mainframe.height / 2) - (this.div_login.form.getOffsetHeight() / 2);
        //
        // 	this.div_login.setOffsetLeft(nLeft);
        // 	this.div_login.setOffsetTop(nTop);
        };

        this.Form_Login_onload = function(obj,e)
        {
        //	this.Form_Login_onsize();

        	var sGetId = nexacro.getPrivateProfile("userId");

        	if(sGetId != null){
        		this.div_login.form.edt_id.set_value(sGetId);
        		this.div_login.form.chk_idSave.set_value(true);
        	}
        };

        this.div_login_btn_login_onclick = function(obj,e)
        {
        	var sId = this.div_login.form.edt_id.value;
        	var sPw = this.div_login.form.edt_pw.value;

        	if(sId == null){
        		//this.alert("아이디를 입력하세요");
        		this.div_login.form.st_msg.set_text("아이디를 입력하세요");
        		this.div_login.form.edt_id.setFocus();
        		return;
        	}
        	if(sPw == null || sPw.length == 0){
        		//this.alert("비밀번호를 입력하세요");
        		this.div_login.form.st_msg.set_text("비밀번호를 입력하세요");
        		this.div_login.form.edt_pw.setFocus();
        		return;
        	}

        	this.fn_login(sId, sPw);
        };

        this.Edit_oninput = function(obj,e)
        {
        	this.div_login.form.st_msg.set_text("");
        };

        this.fn_login = function(sId, sPw)
        {
        	if(this.div_login.form.chk_idSave.value == "1"){
        		nexacro.setPrivateProfile("userId", sId);
        	}


        /*
        	this.transaction("svcLogin"
        	               , "KhURL::login.jsp"
        				   , "in_ds=ds_login"
        				   , "gds_menu=out_menu"
        				   , "paramId=" + sId + " paramPw=" + sPw
        				   , "fn_callback");
        */
        	this.fn_callback("svcLogin", 0, "");
        }

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(errCd < 0){
        		this.alert("로그인 에러" + errMsg);
        		retrun;
        	}
        	if(svcId == "svcLogin"){
        		var objApp = nexacro.getApplication();
        		var sMyMenuData = nexacro.getPrivateProfile("myMenuData");
        		objApp.gds_myMenu.loadXML(sMyMenuData);
        		objApp.mainframe.VFrameSet00.set_separatesize("0,50,*");
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.Form_Login_onsize,this);
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.div_login.form.edt_id.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_login.form.edt_pw.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
