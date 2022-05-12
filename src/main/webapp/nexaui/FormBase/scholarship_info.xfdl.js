(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholarship_info");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_scholarship", this);
            obj.set_loadkeymode("keep");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_inno\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_avg_grade\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_status\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_amount\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_name\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_phonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_college\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_student_no\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_manager_no\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"scholarship_year\">2022</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2023</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2024</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2025</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2026</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2027</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2028</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2029</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2030</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2022</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2023</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2024</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2025</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2026</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2027</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2028</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2029</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2030</Col><Col id=\"scholarship_term\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTerm", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_no\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"scholarship_term\">1학기</Col><Col id=\"scholarship_no\">1</Col></Row><Row><Col id=\"scholarship_term\">2학기</Col><Col id=\"scholarship_no\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCollege", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_college\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_collegeName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"scholarship_college\">컴퓨터공학과</Col><Col id=\"scholarship_collegeName\">공학대학</Col></Row><Row><Col id=\"scholarship_college\">전자전기공학</Col><Col id=\"scholarship_collegeName\">공학대학</Col></Row><Row><Col id=\"scholarship_college\">산업디자인학과</Col><Col id=\"scholarship_collegeName\">공학대학</Col></Row><Row><Col id=\"scholarship_college\">중국어학과</Col><Col id=\"scholarship_collegeName\">인문사회학</Col></Row><Row><Col id=\"scholarship_college\">유비쿼터스학과</Col><Col id=\"scholarship_collegeName\">공학대학</Col></Row><Row><Col id=\"scholarship_college\">국어국문학과</Col><Col id=\"scholarship_collegeName\">인문사회학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_send", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_college\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCheck","484","159","84","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","94","107","113","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYear");
            obj.set_datacolumn("scholarship_year");
            obj.set_codecolumn("scholarship_term");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","100","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("년도");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","295","107","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTerm");
            obj.set_datacolumn("scholarship_term");
            obj.set_codecolumn("scholarship_no");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","230","106","69","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("학기");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","526","107","144","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_datacolumn("scholarship_college");
            obj.set_codecolumn("scholarship_collegeName");
            obj.set_innerdataset("dsCollege");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","466","113","62","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new Button("btn_accept","589","160","89","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("승인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_denined","698","159","70","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("미승인");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","204","730","192",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_scholarship");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"평균\"/><Cell col=\"3\" text=\"년도\"/><Cell col=\"4\" text=\"학기\"/><Cell col=\"5\" text=\"상태\"/><Cell col=\"6\" text=\"신청금액\"/><Cell col=\"7\" text=\"이름\"/><Cell col=\"8\" text=\"전화번호\"/><Cell col=\"9\" text=\"학과\"/><Cell col=\"10\" text=\"학번\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"expr:chk=='Y'?'1':'0'\"/><Cell col=\"1\" text=\"bind:scholarship_inno\"/><Cell col=\"2\" text=\"bind:scholarship_avg_grade\"/><Cell col=\"3\" text=\"bind:scholarship_year\"/><Cell col=\"4\" text=\"bind:scholarship_term\"/><Cell col=\"5\" text=\"expr:scholarship_status == 'Y'? &quot;승인&quot; : scholarship_status== 'N'? &quot;미승인&quot; : scholarship_status == 'W'? &quot;대기&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:scholarship_amount\"/><Cell col=\"7\" text=\"bind:scholarship_name\"/><Cell col=\"8\" text=\"bind:scholarship_phonenumber\"/><Cell col=\"9\" text=\"bind:scholarship_college\"/><Cell col=\"10\" text=\"bind:scholarship_student_no\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholarship_info.xfdl", function() {

         this.scholarship_info_onload = function(obj,e)
         {

        };



        this.ds_scholarship_oncolumnchanged = function(obj,e)
        {
        	 if(e.columnid == "chk") {
        		obj.enableevent = false;
        			if(e.newvalue == '1') {
        				obj.setColumn(e.row,"chk",'Y');
        	  } else if(e.newvalue == '0') {
        		obj.setColumn(e.row,"chk",'N');
        		}
        		obj.enableevent = true;
        	}


        };
        this.year = "";
        this.term  = "";
        this.departmentName = "";
        this.btnCheck_onclick = function(obj,e)
        {
        	year = this.Combo00.text;
        	term = this.Combo01.text;
        	departmentName= this.Combo02.text;
        	this.ds_send.setColumn(0, 0, this.Combo00.text);
        	this.ds_send.setColumn(0, 1, this.Combo01.text);
        	this.ds_send.setColumn(0, 2, this.Combo02.text);
        	this.resultInfo();
        };

        this.resultInfo = function(){
        	this.transaction(
         		"scholarship_resultinfo"// 1.ID
         		,"CmURL::scholarship/scholarInfo.kh"// 2.URL
         		,"in_scholar = ds_send" // 3.InDs : F->S jsp(I,U,D)
         		,"ds_scholarship=out_scholarship" // 4.OutDs : S->F jsp(SELECT)
         		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
         	);
        }


        this.btn_accept_onclick = function(obj,e)
        {

        		this.transaction(
         		"scholarship_acceptInfo"// 1.ID
         		,"CmURL::scholarship/scholarAccept.kh"// 2.URL
         		,"ins_scholarship=ds_scholarship:U" // 3.InDs : F->S jsp(I,U,D)
         		,"" // 4.OutDs : S->F jsp(SELECT)
         		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        		);
        };




        this.btn_denined_onclick = function(obj,e)
        {

        		this.transaction(
         		"scholarship_denineInfo"// 1.ID
         		,"CmURL::scholarship/scholarDenine.kh"// 2.URL
         		,"ins_scholarship=ds_scholarship:U" // 3.InDs : F->S jsp(I,U,D)
         		,"" // 4.OutDs : S->F jsp(SELECT)
         		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        		);
        };



        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "scholarship_resultinfo")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}else{

        		if(this.ds_send.getColumn(0,0) != ""&& this.ds_send.getColumn(0,1) != "" && this.ds_send.getColumn(0,2) != "") {
        			this.Combo00.set_text(year);
        			this.Combo01.set_text(term);
        			this.Combo02.set_text(departmentName);

        		}else{

        		}

        		return ;
        		}
        	}

        	else if(id == "scholarship_acceptInfo")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("업데이트 실패 : " + sErrorMsg);
        			return;
        		}else{
        		this.resultInfo();
        		return ;
        	}
        	}

        	else if(id == "scholarship_denineInfo")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("업데이트 실패1 : " + sErrorMsg);
        			return;
        		}else{
        		this.resultInfo();
        		return ;
        	}
        	}


        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scholarship_info_onload,this);
            this.btnCheck.addEventHandler("onclick",this.btnCheck_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btn_accept.addEventHandler("onclick",this.btn_accept_onclick,this);
            this.btn_denined.addEventHandler("onclick",this.btn_denined_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.ds_scholarship.addEventHandler("oncolumnchanged",this.ds_scholarship_oncolumnchanged,this);
        };

        this.loadIncludeScript("scholarship_info.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
