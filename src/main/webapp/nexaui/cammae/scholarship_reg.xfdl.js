(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholarship_reg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_year1", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_year\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"scholarship_year\">2022</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2023</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2024</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2025</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2026</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2027</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2028</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2029</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2030</Col><Col id=\"scholarship_term\">1</Col></Row><Row><Col id=\"scholarship_year\">2022</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2023</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2024</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2025</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2026</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2027</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2028</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2029</Col><Col id=\"scholarship_term\">2</Col></Row><Row><Col id=\"scholarship_year\">2030</Col><Col id=\"scholarship_term\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_term2", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_term\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_no\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"scholarship_term\">1학기</Col><Col id=\"scholarship_no\">1</Col></Row><Row><Col id=\"scholarship_term\">2학기</Col><Col id=\"scholarship_no\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_scholars", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_name\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_student_no\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_phonenumber\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div04","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","559","87","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_term2");
            obj.set_datacolumn("scholarship_term");
            obj.set_codecolumn("scholarship_no");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","365","87","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_year1");
            obj.set_datacolumn("scholarship_year");
            obj.set_codecolumn("scholarship_term");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","320","210","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("7px / 7px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","319","280","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_borderRadius("7px / 7px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","319","350","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_borderRadius("7px / 7px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","330","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("년도");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div03_00","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("장학금 신청");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","519","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("학기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","257","191","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("이름");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","257","261","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("학번");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","247","331","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("전화번호");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_scholars","scholarship_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit01","value","ds_scholars","scholarship_student_no");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit02","value","ds_scholars","scholarship_phonenumber");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholarship_reg.xfdl", function() {
        this.scholarship_reg_onload = function(obj,e)
        {
        	this.transaction(
        	 "tr_code"
        	 ,"CmURL::scholarship/stuInfo.kh"
        	 ,""
        	 ,"ds_scholars=out_scholarship"
        	 ,""
        	 ,"fn_callback_tran"
        	);

        };


        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_year1.addRow();
        	this.ds_term2.addRow();
        	this.transaction(
        	 "tr_code"
        	 ,"CmURL::scholarship/register.kh"
        	 ,"in_ds_year=ds_year1 in_ds_term = ds_term2"
        	 ,""
        	 ,""
        	 ,"fn_callback_tran"
        	);

        };
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "tr_code")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        	}
        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scholarship_reg_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("scholarship_reg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
