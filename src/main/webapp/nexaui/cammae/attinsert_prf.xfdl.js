(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("attinsert_prf");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_subject", this);
            obj._setContents("<ColumnInfo><Column id=\"lectureName\" type=\"STRING\" size=\"256\"/><Column id=\"lectureNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stuInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"studentName\" type=\"STRING\" size=\"256\"/><Column id=\"attStatus\" type=\"STRING\" size=\"256\"/><Column id=\"lectureNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"attStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"attStatus\">O</Col></Row><Row><Col id=\"attStatus\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div04","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","490","87","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_subject");
            obj.set_datacolumn("lectureName");
            obj.set_codecolumn("lectureName");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","160","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_stuInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"51\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"출석여부\"/></Band><Band id=\"body\"><Cell text=\"bind:studentNo\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:studentName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:attStatus\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_status\" combodatacol=\"attStatus\" combocodecol=\"attStatus\" textAlign=\"center\" controlautosizingtype=\"both\" combopopuptype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","633","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출석 등록");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","420","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
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
        this.registerScript("attinsert_prf.xfdl", function() {

        this.attinsert_prf_onload = function(obj,e)
        {
        	this.transaction(
        		"attr_subject"// 1.ID
        		,"CmURL::attendance/profInfo.kh"// 2.URL
        		,""// 3.InDs : F->S jsp(I,U,D)
        		,"ds_subject=out_subject" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.btn_search_onclick = function(obj,e)
        {

        	var searchValue = this.Combo00.value;
        	this.transaction(
        		"attr_profSearchStu"// 1.ID
        		,"CmURL::attendance/profSeachStuInfo.kh"// 2.URL
        		,"in_subject=ds_subject"// 3.InDs : F->S jsp(I,U,D)
        		,"ds_stuInfo=out_stuInfo" // 4.OutDs : S->F jsp(SELECT)
        		,"lectureName="+searchValue // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);



        };

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "attr_profSearchStu")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        		}
        	};
        }

        this.btn_insert_onclick = function(obj,e)
        {
        	var searchValue = this.Combo00.value;

        this.transaction(
        	"attr_profSearchStu"// 1.ID
        		,"CmURL::attendance/register.kh"// 2.URL
        		,"insInfo=ds_stuInfo"// 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,"lectureName="+searchValue// 5.InVar : F->S(var)
        	,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
         	);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.attinsert_prf_onload,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
        };
        this.loadIncludeScript("attinsert_prf.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
