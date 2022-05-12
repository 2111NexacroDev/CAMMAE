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
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_inno\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_avg_grade\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_status\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_amount\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_name\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_phonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_college\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_student_no\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"scholarship_year\">2022</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2023</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2024</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2025</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2026</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2027</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2028</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2029</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2030</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2022</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2023</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2024</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2025</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2026</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2027</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2028</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2029</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2030</Col><Col id=\"scholarship_term\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTerm", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_no\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"scholarship_term\">1학기</Col><Col id=\"scholarship_no\">1</Col></Row><Row><Col id=\"scholarship_term\">2학기</Col><Col id=\"scholarship_no\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCollege", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_college\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_collegename\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"scholarship_college\">1</Col><Col id=\"scholarship_collegename\">컴퓨터공학과</Col></Row><Row><Col id=\"scholarship_college\">2</Col><Col id=\"scholarship_collegename\">전자전기공학과</Col></Row><Row><Col id=\"scholarship_college\">3</Col><Col id=\"scholarship_collegename\">산업디자인학과</Col></Row><Row><Col id=\"scholarship_college\">4</Col><Col id=\"scholarship_collegename\">중국어학</Col></Row><Row><Col id=\"scholarship_college\">5</Col><Col id=\"scholarship_collegename\">유비쿼터스학과</Col></Row><Row><Col id=\"scholarship_college\">6</Col><Col id=\"scholarship_collegename\">국어국문학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCheck","476","259","84","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","36","300","804","325",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","14","730","192",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_scholarship");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"평균\"/><Cell col=\"3\" text=\"년도\"/><Cell col=\"4\" text=\"학기\"/><Cell col=\"5\" text=\"상태\"/><Cell col=\"6\" text=\"신청금액\"/><Cell col=\"7\" text=\"이름\"/><Cell col=\"8\" text=\"전화번호\"/><Cell col=\"9\" text=\"학과\"/><Cell col=\"10\" text=\"학번\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"expr:chk==&apos;Y&apos;?&apos;1&apos;:&apos;0&apos;\"/><Cell col=\"1\" text=\"bind:scholarship_inno\"/><Cell col=\"2\" text=\"bind:scholarship_avg_grade\"/><Cell col=\"3\" text=\"bind:scholarship_year\"/><Cell col=\"4\" text=\"bind:scholarship_term\"/><Cell col=\"5\" text=\"expr:scholarship_status == &apos;Y&apos;? &quot;승인&quot; : scholarship_status== &apos;N&apos;? &quot;미승인&quot; : scholarship_status == &apos;W&apos;? &quot;대기&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:scholarship_amount\"/><Cell col=\"7\" text=\"bind:scholarship_name\"/><Cell col=\"8\" text=\"bind:scholarship_phonenumber\"/><Cell col=\"9\" text=\"bind:scholarship_college\"/><Cell col=\"10\" text=\"bind:scholarship_student_no\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            obj.set_url("FormBase::scholarship_ins.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Combo("Combo00","94","107","113","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("scholarship_term");
            obj.set_datacolumn("scholarship_year");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","100","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("년도");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","295","107","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTerm");
            obj.set_codecolumn("scholarship_no");
            obj.set_datacolumn("scholarship_term");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","230","106","69","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학기");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","526","107","144","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCollege");
            obj.set_codecolumn("scholarship_college");
            obj.set_datacolumn("scholarship_collegename");
            obj.set_text("Combo02");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","466","113","62","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new Button("btn_accept","581","260","89","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("승인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_denined","690","259","70","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("미승인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Combo00","value","dsSend","scholarship_year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Combo02","value","dsSend","scholarship_college");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Combo02","text","dsSend","scholarship_college");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FormBase::scholarship_ins.xfdl");
        };
        
        // User Script
        this.registerScript("scholarship_info.xfdl", function() {

        // this.scholarship_info_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // 	this.transaction(
        // 		"scholarship_resultinfo"// 1.ID
        // 		,"CmURL::scholarship/scholarInfo.kh"// 2.URL
        // 		,"" // 3.InDs : F->S jsp(I,U,D)
        // 		,"ds_scholarship=out_scholarship" // 4.OutDs : S->F jsp(SELECT)
        // 		,"" // 5.InVar : F->S(var)
        // 		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        // 	);
        // };



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

        this.btnCheck_onclick = function(obj,e)
        {
        // 	let arr= this.ds_scholarship.extractRows("chk=='Y'");
        // 	if(arr.length == 0 || arr == -1) {
        // 		alert("선택한 항목이 없습니다.");
        // 		return;
        // 	}else{
        // 	/*	this.ds_scholarship.getSelectedDatasetRows();*/
        // 		scholar_studentName = this.ds_scholarship.getColumn(arr, "scholarship_student_name");
        // 		this.go("FormBase::scholarship_ins.xfdl");
        //
        // 	}

        // this.dsSend.clearData();
        //
        // for(var i= 0; i<this.ds_scholarship.rowcount; i++) {
        // 	if(this.ds_scholarship.getColumn(i, "chk")== 'Y') {
        // 		var row = this.dsSend.addRow();
        // 		this.dsSend.copyRow(row, this.ds_scholarship, i);
        //
        //
        // 	}
        // }
        // this.Tab00.set_tabindex(1);



        	this.transaction(
         		"scholarship_resultinfo"// 1.ID
         		,"CmURL::scholarship/scholarInfo.kh"// 2.URL
         		,"in_scholar = dsYear in_scholar1=dsTerm in_scholar2=dsCollege" // 3.InDs : F->S jsp(I,U,D)
         		,"ds_scholarship=out_scholarship" // 4.OutDs : S->F jsp(SELECT)
         		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
         	);
        };


        this.btn_accept_onclick = function(obj,e)
        {
        	if(this.ds_scholarship.getColumn("chk")== 'Y') {
        		this.transaction(
         		"scholarship_acceptInfo"// 1.ID
         		,"CmURL::scholarship/scholarAccept.kh"// 2.URL
         		,"ins_scholarship=ds_scholarship" // 3.InDs : F->S jsp(I,U,D)
         		,"" // 4.OutDs : S->F jsp(SELECT)
         		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        		);
        	}
        };




        this.btn_denined_onclick = function(obj,e)
        {
        	if(this.ds_scholarship.getColumn("chk")== 'Y') {
        		this.transaction(
         		"scholarship_denineInfo"// 1.ID
         		,"CmURL::scholarship/scholarDenine.kh"// 2.URL
         		,"ins_scholarship=ds_scholarship" // 3.InDs : F->S jsp(I,U,D)
         		,"" // 4.OutDs : S->F jsp(SELECT)
         		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        		);
        	}
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
        		this.alert("조회 성공 :"+ sSuccessMsg);
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
        		this.alert("업데이트 성공 :");
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
        		this.alert("업데이트 성공1 :");
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
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btn_accept.addEventHandler("onclick",this.btn_accept_onclick,this);
            this.btn_denined.addEventHandler("onclick",this.btn_denined_onclick,this);
            this.ds_scholarship.addEventHandler("oncolumnchanged",this.ds_scholarship_oncolumnchanged,this);
        };
        this.loadIncludeScript("scholarship_info.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
