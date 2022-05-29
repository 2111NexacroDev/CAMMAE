(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("att_list");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("sub", this);
            obj._setContents("<ColumnInfo><Column id=\"studentNo\" type=\"INT\" size=\"256\"/><Column id=\"lectureNo\" type=\"INT\" size=\"256\"/><Column id=\"attDate\" type=\"STRING\" size=\"256\"/><Column id=\"attStatus\" type=\"STRING\" size=\"256\"/><Column id=\"attObjection\" type=\"STRING\" size=\"256\"/><Column id=\"lectureName\" type=\"STRING\" size=\"256\"/><Column id=\"attNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subject", this);
            obj._setContents("<ColumnInfo><Column id=\"lectureName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div04","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","562","87","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_subject");
            obj.set_datacolumn("lectureName");
            obj.set_codecolumn("lectureName");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","1030","140","268","133",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_border("2px solid darkgreen");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","51","74","163","32",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00","55","14","154","48",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("신청이 완료되었습니다");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","160","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요일\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"이의신청\"/></Band><Band id=\"body\"><Cell text=\"bind:attDate\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:attStatus\" textAlign=\"center\"/><Cell col=\"2\" text=\"신청\" displaytype=\"buttoncontrol\" edittype=\"button\" textAlign=\"center\" controlautosizingtype=\"height\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출석 조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","500","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("과목 선택");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("att_list.xfdl", function() {

        this.att_list_onload = function(obj,e)
        {
        	this.transaction(
        		"attr_subject"// 1.ID
        		,"CmURL::attendance/subInfo.kh"// 2.URL
        		,""// 3.InDs : F->S jsp(I,U,D)
        		,"ds_subject=out_subject" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "attr_subject")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        		}
        	}
        		if(id == "attr_stuInfo")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        		}
        	}
        }


        this.btn_search_onclick = function(obj,e)
        {
        	var searchValue = this.Combo00.value;
        	this.transaction(
        		"attr_stuInfo"// 1.ID
        		,"CmURL::attendance/stuInfo.kh"// 2.URL
        		,""// 3.InDs : F->S jsp(I,U,D)
        		,"sub=out_sub" // 4.OutDs : S->F jsp(SELECT)
        		,"lectureName="+searchValue // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        var studentNo = "";
        var lectureNo = "";
        var attStatus = "";




        this.Grid00_oncellclick = function(obj,e)
        {
        	if(obj.getCellPropertyValue(e.row, e.cell, "displaytype") == "buttoncontrol") {
        		var attNo = this.sub.getColumn(e.row, "attNo");
        		// 데이터셋에 lectureNo 값 넣어주기
        		this.transaction(
        		"attr_send"// 1.ID
        		,"CmURL::attendance/stu_prfIssue.kh"// 2.URL
        		,""// 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,"attNo="+attNo// 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        		this.PopupDiv00.trackPopupByComponent(this.Grid00, 150, 100);
        }
        };

        this.PopupDiv00_Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.att_list_onload,this);
            this.Combo00.addEventHandler("oneditclick",this.Combo00_oneditclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.PopupDiv00.form.Button00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
            this.PopupDiv00.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("att_list.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
