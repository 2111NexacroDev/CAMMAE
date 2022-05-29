(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Graduation");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_graduation", this);
            obj._setContents("<ColumnInfo><Column id=\"graduationStuName\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStuDep\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStuAvg\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentGrade\" type=\"STRING\" size=\"256\"/><Column id=\"studentBirth\" type=\"STRING\" size=\"256\"/><Column id=\"studentAddress\" type=\"STRING\" size=\"256\"/><Column id=\"studentPhonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"studentEmail\" type=\"STRING\" size=\"256\"/><Column id=\"studentState\" type=\"STRING\" size=\"256\"/><Column id=\"professorName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","725","25","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","114","78","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","114","108","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","114","138","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","354","78","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","354","108","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_borderRadius("15px / 15px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00","585","87","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_borderRadius("15px / 15px");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00","354","138","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_borderRadius("15px / 15px");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00","585","124","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_borderRadius("15px / 15px");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","70","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","6","50","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학과");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","24","36","50","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","24","66","50","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","240","70","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","6","50","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("학년");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","14","66","70","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","14","36","70","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("생년월일");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div04","480","70","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","17","50","20",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_00","25","53","50","20",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_text("이메일");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("졸업 신청");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00_00","value","ds_stdInfo","departmentName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_00_00","value","ds_stdInfo","studentNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_00_00_00","value","ds_stdInfo","studentName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_00_00_00_00","value","ds_stdInfo","studentGrade");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit00_00_00_00_00_00","value","ds_stdInfo","studentBirth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit00_00_00_00_00_00_00_00","value","ds_stdInfo","studentPhonenumber");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit00_00_00_00_00_00_00","value","ds_stdInfo","studentAddress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Edit00_00_00_00_00_00_00_00_00","value","ds_stdInfo","studentEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Graduation.xfdl", function() {

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "grad_info")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        		}
        	}
        	if(id == "grad_reg")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        		}
        	}



        }
        this.Graduation_onload = function(obj,e)
        {
        	this.transaction(
        		"grad_info"// 1.ID
        		,"CmURL::graduation/stuInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_graduation=out_graduation" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
         		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
         	);
        	//학생정보
        	this.transaction(
        		"std_info"// 1.ID
        		,"CmURL::student/stdInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_stdInfo=out_stdInfo" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };


        this.Button00_onclick = function(obj,e)
        {
        this.transaction(
        		"grad_reg"// 1.ID
        		,"CmURL::graduation/register.kh"// 2.URL
        		,"in_ds_grad=ds_graduation" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Graduation_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Edit00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.Edit00_00_00_00_00_00_00_00_00_onchanged,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Static00_00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Static00_00_00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div02.form.Static00_00_00.addEventHandler("onclick",this.Div02_Static00_00_00_onclick,this);
        };
        this.loadIncludeScript("Graduation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
