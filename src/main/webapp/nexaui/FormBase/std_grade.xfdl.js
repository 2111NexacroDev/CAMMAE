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
            obj._setContents("<ColumnInfo><Column id=\"lectureNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"gradeYear\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSession\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSubject\" type=\"STRING\" size=\"256\"/><Column id=\"gradeComplete\" type=\"STRING\" size=\"256\"/><Column id=\"lectureGrade\" type=\"STRING\" size=\"256\"/><Column id=\"gradeScore\" type=\"STRING\" size=\"256\"/><Column id=\"gradeAvg\" type=\"STRING\" size=\"256\"/><Column id=\"gradeFeedback\" type=\"STRING\" size=\"256\"/><Column id=\"gradeObjection\" type=\"STRING\" size=\"256\"/><Column id=\"gradeChange\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdGradeSarch", this);
            obj._setContents("<ColumnInfo><Column id=\"gradeYear\" type=\"STRING\" size=\"256\"/><Column id=\"gradeSession\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdObjection", this);
            obj._setContents("<ColumnInfo><Column id=\"lectureNo\" type=\"STRING\" size=\"256\"/><Column id=\"objectionContent\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","60","95","616","455",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_stdGrade");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이의신청\"/><Cell col=\"1\" text=\"학년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"교과목명\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"평점\"/><Cell col=\"7\" text=\"재수강여부\"/></Band><Band id=\"body\"><Cell text=\"이의신청\" displaytype=\"expr:gradeObjection==&apos;N&apos;?&apos;buttoncontrol&apos;:&apos;none&apos;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:gradeYear\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:gradeSession\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:gradeSubject\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:lectureGrade\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:gradeScore\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:gradeAvg\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:gradeChange\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","67","24","87","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("년도");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","145","34","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","310","27","80","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학기");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","387","31","163","37",null,null,null,null,null,null,this);
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

            obj = new Button("Button00","563","31","87","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","705","4","325","229",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("positionstep").set("0");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK","105","176","104","33",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("OK");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00","35","16","130","27",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("이의신청");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new TextArea("gradeObjection","33","59","250","94",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            this.PopupDiv00.addChild(obj.name, obj);
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
        			this.alert("코드 조회 실패 : " + sErrorMsg);
        			return;
        		} else {
        			this.fn_std_grade();
        		}
        	}


        }

        //학생 성적 조회
        this.fn_std_grade = function ()
        {
        	this.transaction(
        		"std_grade"// 1.ID
        		,"CmURL::grade/stdGrade.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
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
