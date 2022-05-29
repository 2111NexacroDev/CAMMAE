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
            obj._setContents("<ColumnInfo><Column id=\"lectureNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"gradeYear\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSession\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSubject\" type=\"STRING\" size=\"256\"/><Column id=\"gradeComplete\" type=\"STRING\" size=\"256\"/><Column id=\"lectureGrade\" type=\"STRING\" size=\"256\"/><Column id=\"gradeScore\" type=\"STRING\" size=\"256\"/><Column id=\"gradeAvg\" type=\"STRING\" size=\"256\"/><Column id=\"gradeFeedback\" type=\"STRING\" size=\"256\"/><Column id=\"gradeObjection\" type=\"STRING\" size=\"256\"/><Column id=\"gradeChange\" type=\"STRING\" size=\"256\"/><Column id=\"objectionContent\" type=\"STRING\" size=\"256\"/><Column id=\"feedbackContent\" type=\"STRING\" size=\"256\"/><Column id=\"studentName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdGradeSarch", this);
            obj._setContents("<ColumnInfo><Column id=\"gradeYear\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSeason\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSubject\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subject", this);
            obj._setContents("<ColumnInfo><Column id=\"gradeSubject\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div04","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","160","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_stdGrade");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"학년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"교과목\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"평점\"/><Cell col=\"7\" text=\"이의신청내용\"/><Cell col=\"8\" text=\"피드백\"/></Band><Band id=\"body\"><Cell text=\"bind:studentName\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:gradeYear\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:gradeSession\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:gradeSubject\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:lectureGrade\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:gradeScore\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:gradeAvg\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:objectionContent\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:feedbackContent\" edittype=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","92","87","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2022</Col><Col id=\"datacolumn\">2022</Col></Row><Row><Col id=\"codecolumn\">2023</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2024</Col><Col id=\"datacolumn\">2024</Col></Row><Row><Col id=\"codecolumn\">2025</Col><Col id=\"datacolumn\">2025</Col></Row><Row><Col id=\"codecolumn\">2026</Col><Col id=\"datacolumn\">2026</Col></Row><Row><Col id=\"codecolumn\">2027</Col><Col id=\"datacolumn\">2027</Col></Row><Row><Col id=\"codecolumn\">2028</Col><Col id=\"datacolumn\">2028</Col></Row><Row><Col id=\"codecolumn\">2029</Col><Col id=\"datacolumn\">2029</Col></Row><Row><Col id=\"codecolumn\">2030</Col><Col id=\"datacolumn\">2030</Col></Row><Row><Col id=\"codecolumn\">2022</Col><Col id=\"datacolumn\">2022</Col></Row><Row><Col id=\"codecolumn\">2023</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2024</Col><Col id=\"datacolumn\">2024</Col></Row><Row><Col id=\"codecolumn\">2025</Col><Col id=\"datacolumn\">2025</Col></Row><Row><Col id=\"codecolumn\">2026</Col><Col id=\"datacolumn\">2026</Col></Row><Row><Col id=\"codecolumn\">2027</Col><Col id=\"datacolumn\">2027</Col></Row><Row><Col id=\"codecolumn\">2028</Col><Col id=\"datacolumn\">2028</Col></Row><Row><Col id=\"codecolumn\">2029</Col><Col id=\"datacolumn\">2029</Col></Row><Row><Col id=\"codecolumn\">2030</Col><Col id=\"datacolumn\">2030</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("2022");
            obj.set_value("2022");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","254","87","163","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","638","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","466","87","163","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_subject");
            obj.set_codecolumn("gradeSubject");
            obj.set_datacolumn("gradeSubject");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("성적 이의 신청 조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","60","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("년도");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","220","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("학기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","430","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("과목");
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
        this.registerScript("prf_gradeObjection.xfdl", function() {
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


        }

        // 교수의 이의신청 조회
        this.fn_std_grade = function () {
        	year = this.Combo00.text;
        	session = this.Combo01.text;
        	subject = this.Combo02.text;
        	this.ds_stdGradeSarch.setColumn(0, 0, year);
        	this.ds_stdGradeSarch.setColumn(0, 1, session);
        	this.ds_stdGradeSarch.setColumn(0, 2, subject);

        	this.transaction(
        		"std_grade"// 1.ID
        		,"CmURL::grade/prfObjection.kh"// 2.URL
        		,"In_stdSearch=ds_stdGradeSarch" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_stdGrade=out_stdGrade" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        }

        this.frm_emp_onload = function(obj,e)
        {
        	this.fn_subject();
        };
        this.Button00_onclick = function(obj,e)
        {
        	this.fn_std_grade();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	// 이의 신청 등록 수정 삭제
        	this.transaction(
        		"fd_update"// 1.ID
        		,"CmURL::grade/fdupdate.kh"// 2.URL
        		,"in_fdG=ds_stdGrade:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,""// 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };


        // 교수의 과목 리스트 가져오기
        this.fn_subject = function () {
        	year = this.Combo00.text;
        	session = this.Combo01.text;
        	this.ds_stdGradeSarch.setColumn(0, 0, year);
        	this.ds_stdGradeSarch.setColumn(0, 1, session);
        	this.transaction(
        		"std_subject"// 1.ID
        		,"CmURL::grade/subject.kh"// 2.URL
        		,"In_stdSearch=ds_stdGradeSarch" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_subject=out_sList" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        }
        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.fn_subject();
        };

        this.Combo01_onitemchanged = function(obj,e)
        {
        	this.fn_subject();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_emp_onload,this);
            this.Button01.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Combo01.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("prf_gradeObjection.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
