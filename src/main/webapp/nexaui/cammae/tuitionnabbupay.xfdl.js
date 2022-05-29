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
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("tuition01", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/><Column id=\"studentGrade\" type=\"STRING\" size=\"256\"/><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"studentName\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionNo\" type=\"STRING\" size=\"256\"/><Column id=\"tutionYear\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionTerm\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionScholarship\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionTotal\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"tuitionStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("universityCode", this);
            obj._setContents("<ColumnInfo><Column id=\"universityCode\" type=\"STRING\" size=\"256\"/><Column id=\"universityName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"universityCode\">0</Col><Col id=\"universityName\">전체</Col></Row><Row><Col id=\"universityCode\">1</Col><Col id=\"universityName\">컴퓨터공학과</Col></Row><Row><Col id=\"universityCode\">2</Col><Col id=\"universityName\">전자전기공학과</Col></Row><Row><Col id=\"universityCode\">3</Col><Col id=\"universityName\">산업디자인학과</Col></Row><Row><Col id=\"universityCode\">4</Col><Col id=\"universityName\">중국어학과</Col></Row><Row><Col id=\"universityCode\">5</Col><Col id=\"universityName\">유비쿼터스학과</Col></Row><Row><Col id=\"universityCode\">6</Col><Col id=\"universityName\">국어국문학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("grade", this);
            obj._setContents("<ColumnInfo><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">1학기</Col></Row><Row><Col id=\"Column1\">2학기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdGradeSarch", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"season\" type=\"STRING\" size=\"256\"/><Column id=\"uniCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","360","-2","60","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학과선택");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","570","14","60","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo02","420","17","125","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("universityCode");
            obj.set_codecolumn("universityCode");
            obj.set_datacolumn("universityName");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","160","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("tuition01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"81\"/><Column size=\"80\"/><Column size=\"63\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"학기\"/><Cell col=\"6\" text=\"등록금\"/><Cell col=\"7\" text=\"장학금\"/><Cell col=\"8\" text=\"합계\"/><Cell col=\"9\" text=\"납부여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:departmentName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:studentGrade\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:studentNo\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:studentName\" textAlign=\"center\"/><Cell col=\"5\" textAlign=\"center\" edittype=\"none\" text=\"bind:tuitionTerm\" expr=\"tuitionTerm\" displaytype=\"normal\" combodataset=\"grade\" combodatacol=\"Column1\" combocodecol=\"Column1\"/><Cell col=\"6\" text=\"bind:tuitionFee\" textAlign=\"center\" edittype=\"none\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:tuitionScholarship\" textAlign=\"center\" displaytype=\"number\" expr=\"tuitionScholarship==&apos;Y&apos;?2500000:0\"/><Cell col=\"8\" textAlign=\"center\" displaytype=\"number\" text=\"bind:tuitionTotal\" edittype=\"normal\" expr=\"tuitionFee!=0?tuitionFee-(tuitionScholarship==&apos;Y&apos;?2500000:0):0\"/><Cell col=\"9\" text=\"bind:tuitionStatus\" expr=\"tuitionStatus==&apos;Y&apos;?&quot;완납&quot;:&quot;미납&quot;\" textAlign=\"center\" cssclass=\"expr:tuitionStatus==&apos;Y&apos; ? &quot;blue_font&quot; : &quot;red_font&quot; \" font=\"normal bold 10pt/normal &quot;Malgun Gothic&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","13","77","40","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("년도");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","51","87","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2022</Col><Col id=\"datacolumn\">2022</Col></Row><Row><Col id=\"codecolumn\">2023</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2024</Col><Col id=\"datacolumn\">2024</Col></Row><Row><Col id=\"codecolumn\">2025</Col><Col id=\"datacolumn\">2025</Col></Row><Row><Col id=\"codecolumn\">2026</Col><Col id=\"datacolumn\">2026</Col></Row><Row><Col id=\"codecolumn\">2027</Col><Col id=\"datacolumn\">2027</Col></Row><Row><Col id=\"codecolumn\">2028</Col><Col id=\"datacolumn\">2028</Col></Row><Row><Col id=\"codecolumn\">2029</Col><Col id=\"datacolumn\">2029</Col></Row><Row><Col id=\"codecolumn\">2030</Col><Col id=\"datacolumn\">2030</Col></Row><Row><Col id=\"codecolumn\">2022</Col><Col id=\"datacolumn\">2022</Col></Row><Row><Col id=\"codecolumn\">2023</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2024</Col><Col id=\"datacolumn\">2024</Col></Row><Row><Col id=\"codecolumn\">2025</Col><Col id=\"datacolumn\">2025</Col></Row><Row><Col id=\"codecolumn\">2026</Col><Col id=\"datacolumn\">2026</Col></Row><Row><Col id=\"codecolumn\">2027</Col><Col id=\"datacolumn\">2027</Col></Row><Row><Col id=\"codecolumn\">2028</Col><Col id=\"datacolumn\">2028</Col></Row><Row><Col id=\"codecolumn\">2029</Col><Col id=\"datacolumn\">2029</Col></Row><Row><Col id=\"codecolumn\">2030</Col><Col id=\"datacolumn\">2030</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("2022");
            obj.set_value("2022");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","188","77","47","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","220","88","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("1학기");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","639","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("납부확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("등록금 납부 확인서");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
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
        this.registerScript("tuitionnabbupay.xfdl", function() {
        this.Div00_Button00_onclick = function(obj,e)
        {
        	var year = this.Combo00.value;
        	var season = this.Combo01.text;
        	var uniCode = this.Div00.form.Combo02.value;

        	this.ds_stdGradeSarch.setColumn(0, 0, year);
        	this.ds_stdGradeSarch.setColumn(0, 1, season);
        	this.ds_stdGradeSarch.setColumn(0, 2, uniCode);
        		this.transaction(
        		      "ti_allSelect" // 1. ID
        		      , "CmURL::tuition/allList.kh" // 2. URL
        		      , "searchAll=ds_stdGradeSarch" // 3. InDs : F->S jsp(I, U, D)
        		      , "tuition01=tuitionList" // 4. OutDs : S->F jsp(SELECT) - 스페이스는 구분자라서 = 옆에 스페이스 없이 써야 함
        		      , "" // 5. InVar : F->S(var)
        		      , "fn_callback_tran" // 6. callback function(transaction 완료 시 호출되는 함수)
        		   );
        };
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg){

        }

        // Head 선택시 전체 선택, 전체 해제 기능
        this.fn_allChk = function(obj, e) {
        	if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") {
        		// 1-> 0 -> 1
        		var nVal = obj.getCellText(-1, e.cell);
        		nVal = (nVal=="1"?"0":"1");

        		// Head
        		obj.setCellProperty("Head", e.cell, "text", nVal);

        		// Body
        		var objDs = obj.getBindDataset();
        		for(var i=0; i<objDs.rowcount; i++) {
        			objDs.setColumn(i, "chk", nVal);
        		}
        	}
        }


        this.Button01_onclick = function(obj,e)
        {

        	this.transaction(
        	      "ti_save" // 1. ID
        	      , "CmURL::tuition/saveUpdate.kh" // 2. URL
        	      , "in_tui=tuition01:U" // 3. InDs : F->S jsp(I, U, D)
        	      , "" // 4. OutDs : S->F jsp(SELECT) - 스페이스는 구분자라서 = 옆에 스페이스 없이 써야 함
        	      , "" // 5. InVar : F->S(var)
        	      , "fn_callback_tran" // 6. callback function(transaction 완료 시 호출되는 함수)
        	   );
        };



        this.Grid00_onheadclick = function(obj,e)
        {
        	this.fn_allChk(obj, e);
        };

        this.Button00_onclick = function(obj,e)
        {
        	var arrChange = this.tuition01.extractRows("chk == '1'");
        	for(var i = 0; i < arrChange.length; i++){
        		var tuitionStatus = this.tuition01.getColumn(arrChange[i],"tuitionStatus");
        			if(tuitionStatus == "N"){
        				this.tuition01.setColumn(arrChange[i], "tuitionStatus", "Y");
        			}else {
        				this.tuition01.setColumn(arrChange[i], "tuitionStatus", "N");
        			}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tuitioninsert_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.tuition01.addEventHandler("oncolumnchanged",this.tuition01_oncolumnchanged,this);
        };
        this.loadIncludeScript("tuitionnabbupay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
