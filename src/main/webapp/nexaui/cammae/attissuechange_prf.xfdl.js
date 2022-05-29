(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("attissuechange_prf");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_prfIssue", this);
            obj._setContents("<ColumnInfo><Column id=\"studentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"INT\" size=\"256\"/><Column id=\"lectureName\" type=\"STRING\" size=\"256\"/><Column id=\"attDate\" type=\"STRING\" size=\"256\"/><Column id=\"attStatus\" type=\"STRING\" size=\"256\"/><Column id=\"lectureNo\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"attStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"attStatus\">O</Col></Row><Row><Col id=\"attStatus\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div04","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","160","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_prfIssue");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"신청날짜\"/><Cell col=\"4\" text=\"출석여부\"/><Cell col=\"5\" text=\"과목번호\"/></Band><Band id=\"body\"><Cell text=\"bind:studentName\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:studentNo\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:lectureName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:attDate\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:attStatus\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_status\" combodatacol=\"attStatus\" combocodecol=\"attStatus\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:lectureNo\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_strore","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("출석 조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
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
        this.registerScript("attissuechange_prf.xfdl", function() {
        this.fn_attIssueChange = function(){
        	this.transaction(
        			"attr_send"// 1.ID
        			,"CmURL::attendance/prfIssue.kh"// 2.URL
        			,"in_profIssue=ds_prfIssue"// 3.InDs : F->S jsp(I,U,D)
        			,"ds_prfIssue=out_prfIssue" // 4.OutDs : S->F jsp(SELECT)
        			,"" // 5.InVar : F->S(var)
        			,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        		);
        	}


        this.attissuechange_prf_onload = function(obj,e)
        {
        	this.fn_attIssueChange();
        };

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "attr_send")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        		}
        	}
        	if(id == "attr_update")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		this.fn_attIssueChange();
        		return ;
        		}
        	};
        }



        this.btn_strore_onclick = function(obj,e)
        {
        	 this.transaction(
              "attr_update"// 1.ID
              ,"CmURL::attendance/prfIssueUpdate.kh"// 2.URL
              ,"in_profIssue=ds_prfIssue:U"// 3.InDs : F->S jsp(I,U,D)
              ,"" // 4.OutDs : S->F jsp(SELECT)
              ,"" // 5.InVar : F->S(var)
              ,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
           );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.attissuechange_prf_onload,this);
            this.btn_strore.addEventHandler("onclick",this.btn_strore_onclick,this);
        };
        this.loadIncludeScript("attissuechange_prf.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
