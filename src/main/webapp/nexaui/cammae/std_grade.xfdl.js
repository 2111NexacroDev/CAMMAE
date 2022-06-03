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
            obj = new Dataset("ds_stdGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"lectureNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"gradeYear\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSession\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSubject\" type=\"STRING\" size=\"256\"/><Column id=\"gradeComplete\" type=\"STRING\" size=\"256\"/><Column id=\"lectureGrade\" type=\"STRING\" size=\"256\"/><Column id=\"gradeScore\" type=\"STRING\" size=\"256\"/><Column id=\"gradeAvg\" type=\"STRING\" size=\"256\"/><Column id=\"gradeFeedback\" type=\"STRING\" size=\"256\"/><Column id=\"gradeObjection\" type=\"STRING\" size=\"256\"/><Column id=\"gradeChange\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdGradeSarch", this);
            obj._setContents("<ColumnInfo><Column id=\"gradeYear\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSeason\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdObjection", this);
            obj._setContents("<ColumnInfo><Column id=\"lectureNo\" type=\"STRING\" size=\"256\"/><Column id=\"objectionContent\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div04","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","160","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_stdGrade");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이의신청\"/><Cell col=\"1\" text=\"학년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"교과목명\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"평점\"/><Cell col=\"7\" text=\"재수강여부\"/></Band><Band id=\"body\"><Cell text=\"신청\" displaytype=\"expr:gradeObjection==&apos;N&apos;?&apos;buttoncontrol&apos;:&apos;none&apos;\" textAlign=\"center\" controlautosizingtype=\"height\"/><Cell col=\"1\" text=\"bind:gradeYear\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:gradeSession\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:gradeSubject\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:lectureGrade\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:gradeScore\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:gradeAvg\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:gradeChange\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","388","87","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2022</Col><Col id=\"datacolumn\">2022</Col></Row><Row><Col id=\"codecolumn\">2023</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2024</Col><Col id=\"datacolumn\">2024</Col></Row><Row><Col id=\"codecolumn\">2025</Col><Col id=\"datacolumn\">2025</Col></Row><Row><Col id=\"codecolumn\">2026</Col><Col id=\"datacolumn\">2026</Col></Row><Row><Col id=\"codecolumn\">2027</Col><Col id=\"datacolumn\">2027</Col></Row><Row><Col id=\"codecolumn\">2028</Col><Col id=\"datacolumn\">2028</Col></Row><Row><Col id=\"codecolumn\">2029</Col><Col id=\"datacolumn\">2029</Col></Row><Row><Col id=\"codecolumn\">2030</Col><Col id=\"datacolumn\">2030</Col></Row><Row><Col id=\"codecolumn\">2022</Col><Col id=\"datacolumn\">2022</Col></Row><Row><Col id=\"codecolumn\">2023</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2024</Col><Col id=\"datacolumn\">2024</Col></Row><Row><Col id=\"codecolumn\">2025</Col><Col id=\"datacolumn\">2025</Col></Row><Row><Col id=\"codecolumn\">2026</Col><Col id=\"datacolumn\">2026</Col></Row><Row><Col id=\"codecolumn\">2027</Col><Col id=\"datacolumn\">2027</Col></Row><Row><Col id=\"codecolumn\">2028</Col><Col id=\"datacolumn\">2028</Col></Row><Row><Col id=\"codecolumn\">2029</Col><Col id=\"datacolumn\">2029</Col></Row><Row><Col id=\"codecolumn\">2030</Col><Col id=\"datacolumn\">2030</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("2022");
            obj.set_value("2022");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","570","87","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("1학기");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","840","30","300","229",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("positionstep").set("0");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK","99","169","100","30",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("OK");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00","84","21","130","27",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("이의신청");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new TextArea("gradeObjection","24","56","250","94",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","350","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("년도");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("성적 조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","530","85","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("학기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("std_grade.xfdl", function() {
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

        	if(id == "std_objection")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		} else {
        			this.fn_std_grade();
        		}
        	}


        }

        //학생 성적 조회
        this.fn_std_grade = function ()
        {
        	year = this.Combo00.text;
        	session = this.Combo01.text;
        	this.ds_stdGradeSarch.setColumn(0, 0, year);
        	this.ds_stdGradeSarch.setColumn(0, 1, session);
        	this.transaction(
        		"std_grade"// 1.ID
        		,"CmURL::grade/stdGrade.kh"// 2.URL
        		,"In_stdSearch=ds_stdGradeSarch" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_stdGrade=out_stdGrade" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.frm_emp_onload = function(obj,e)
        {
        	this.fn_std_grade();
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.fn_std_grade();
        };

        // 이의 신청 버튼
        var lectureNo = "";
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(obj.getCellPropertyValue(e.row, e.cell, "displaytype") == "buttoncontrol") {
        		this.lelectureNo = this.ds_stdGrade.getColumn(e.row, "lectureNo");
        		// 데이터셋에 lectureNo 값 넣어주기
        		this.ds_stdObjection.setColumn(0, 0, this.lelectureNo);
        		this.PopupDiv00.trackPopupByComponent(this.Grid00, 150, 100);
        	}
        };

        this.PopupDiv00_btn_OK_onclick = function(obj,e)
        {
        	// 데이터셋에 objectionContent 값 넣어주기
        	this.ds_stdObjection.setColumn(0, 1, this.PopupDiv00.form.gradeObjection.value);
        	// 이의 신청 등록
        	this.transaction(
        		"std_objection"// 1.ID
        		,"CmURL::grade/std_objection.kh"// 2.URL
        		,"in_obj=ds_stdObjection:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,""// 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        	this.PopupDiv00.closePopup();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_emp_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.PopupDiv00.form.btn_OK.addEventHandler("onclick",this.PopupDiv00_btn_OK_onclick,this);
        };
        this.loadIncludeScript("std_grade.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
