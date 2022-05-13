(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tuitioninsert");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("tuition01", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentGrade\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentName\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionNo\" type=\"STRING\" size=\"256\"/><Column id=\"tutionYear\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionTerm\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionScholarship\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionTotal\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("universityCode", this);
            obj._setContents("<ColumnInfo><Column id=\"universityCode\" type=\"STRING\" size=\"256\"/><Column id=\"universityName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"universityCode\">1</Col><Col id=\"universityName\">컴퓨터공학과</Col></Row><Row><Col id=\"universityCode\">2</Col><Col id=\"universityName\">전자전기공학과</Col></Row><Row><Col id=\"universityCode\">3</Col><Col id=\"universityName\">산업디자인학과</Col></Row><Row><Col id=\"universityCode\">4</Col><Col id=\"universityName\">중국어학과</Col></Row><Row><Col id=\"universityCode\">5</Col><Col id=\"universityName\">유비쿼터스학과</Col></Row><Row><Col id=\"universityCode\">6</Col><Col id=\"universityName\">국어국문학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","31","0","89","56",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등록금 고지서");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","60","700","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","430","-2","60","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학과선택");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","630","16","60","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","490","18","125","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("universityCode");
            obj.set_codecolumn("universityCode");
            obj.set_datacolumn("universityName");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","630","130","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","170","680","340",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("tuition01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"학기\"/><Cell col=\"5\" text=\"등록금\"/><Cell col=\"6\" text=\"장학금\"/><Cell col=\"7\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:departmentName\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:studentGrade\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:studentNo\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:studentName\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\" edittype=\"text\" text=\"bind:tuitionTerm\"/><Cell col=\"5\" text=\"bind:tuitionFee\" textAlign=\"center\" edittype=\"text\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:tuitionScholarship\" expr=\"tuitionScholarship==&apos;Y&apos;?2500000:0\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"7\" textAlign=\"center\" displaytype=\"number\" text=\"expr:tuitionFee!=0?tuitionFee-(tuitionScholarship==&apos;Y&apos;?2500000:0):0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","100","525","50","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("장학금");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","255","525","50","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대기");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","35","533","40","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("bisque");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","190","533","40","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("blue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("tuitioninsert.xfdl", function() {
        this.Div00_Button00_onclick = function(obj,e)
        {
        	var uniCode = this.Div00.form.Combo00.value;
        		this.transaction(
        		      "ti_insert" // 1. ID
        		      , "CmURL::tuition/list.kh" // 2. URL
        		      , "=" // 3. InDs : F->S jsp(I, U, D)
        		      , "tuition01=tuitionList" // 4. OutDs : S->F jsp(SELECT) - 스페이스는 구분자라서 = 옆에 스페이스 없이 써야 함
        		      , "uniCode1="+uniCode // 5. InVar : F->S(var)
        		      , "fn_callback_tran" // 6. callback function(transaction 완료 시 호출되는 함수)
        		   );
        };


        this.tuitioninsert_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tuitioninsert_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };
        this.loadIncludeScript("tuitioninsert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
