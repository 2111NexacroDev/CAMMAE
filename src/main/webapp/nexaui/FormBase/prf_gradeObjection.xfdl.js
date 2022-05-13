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
            obj = new Dataset("ds_stdGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"lectureNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"gradeYear\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSession\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSubject\" type=\"STRING\" size=\"256\"/><Column id=\"gradeComplete\" type=\"STRING\" size=\"256\"/><Column id=\"lectureGrade\" type=\"STRING\" size=\"256\"/><Column id=\"gradeScore\" type=\"STRING\" size=\"256\"/><Column id=\"gradeAvg\" type=\"STRING\" size=\"256\"/><Column id=\"gradeFeedback\" type=\"STRING\" size=\"256\"/><Column id=\"gradeObjection\" type=\"STRING\" size=\"256\"/><Column id=\"gradeChange\" type=\"STRING\" size=\"256\"/><Column id=\"objectionContent\" type=\"STRING\" size=\"256\"/><Column id=\"feedbackContent\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdGradeSarch", this);
            obj._setContents("<ColumnInfo><Column id=\"gradeYear\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSession\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","60","95","616","455",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_stdGrade");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"lectureNo\"/><Cell col=\"1\" text=\"studentNo\"/><Cell col=\"2\" text=\"gradeYear\"/><Cell col=\"3\" text=\"gradeSession\"/><Cell col=\"4\" text=\"gradeSubject\"/><Cell col=\"5\" text=\"gradeComplete\"/><Cell col=\"6\" text=\"lectureGrade\"/><Cell col=\"7\" text=\"gradeScore\"/><Cell col=\"8\" text=\"gradeAvg\"/><Cell col=\"9\" text=\"gradeFeedback\"/><Cell col=\"10\" text=\"gradeObjection\"/><Cell col=\"11\" text=\"gradeChange\"/><Cell col=\"12\" text=\"objectionContent\"/><Cell col=\"13\" text=\"feedbackContent\"/></Band><Band id=\"body\"><Cell text=\"bind:lectureNo\"/><Cell col=\"1\" text=\"bind:studentNo\"/><Cell col=\"2\" text=\"bind:gradeYear\"/><Cell col=\"3\" text=\"bind:gradeSession\"/><Cell col=\"4\" text=\"bind:gradeSubject\"/><Cell col=\"5\" text=\"bind:gradeComplete\"/><Cell col=\"6\" text=\"bind:lectureGrade\"/><Cell col=\"7\" text=\"bind:gradeScore\"/><Cell col=\"8\" text=\"bind:gradeAvg\"/><Cell col=\"9\" text=\"bind:gradeFeedback\"/><Cell col=\"10\" text=\"bind:gradeObjection\"/><Cell col=\"11\" text=\"bind:gradeChange\"/><Cell col=\"12\" text=\"bind:objectionContent\"/><Cell col=\"13\" text=\"bind:feedbackContent\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","22","87","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("년도");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","79","35","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","230","27","80","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학기");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","280","35","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("1학기");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","433","38","87","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","582","45","91","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
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
        			this.alert("코드 조회 실패 : " + sErrorMsg);
        			return;
        		}
        	}


        }

        this.frm_emp_onload = function(obj,e)
        {
        	//교수의 이의 신청 조회
        	this.transaction(
        		"std_grade"// 1.ID
        		,"CmURL::grade/prfObjection.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_stdGrade=out_stdGrade" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };
        this.Button00_onclick = function(obj,e)
        {
        	//학생 성적 조회
        	this.transaction(
        		"std_grade"// 1.ID
        		,"CmURL::grade/stdGrade.kh"// 2.URL
        		,"In_stdSearch=ds_stdGradeSearch" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_stdGrade=out_stdGrade" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_emp_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("prf_gradeObjection.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
