(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholarship_ins");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSend", this);
            obj._setContents("<ColumnInfo><Column id=\"scholarship_name\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_student_no\" type=\"INT\" size=\"256\"/><Column id=\"scholarship_college\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_phonenumber\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_status\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship_avg_grade\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit00","209","110","291","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","103","107","108","46",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","103","177","108","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학번");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","209","180","291","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","103","238","108","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","209","241","291","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_02","102","304","108","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","208","307","291","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_03","103","367","108","46",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("학점");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03","209","370","291","39",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Accept","142","453","161","38",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("승인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_denine","343","453","157","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("미승인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","MaskEdit00","value","ds_scholarship","scholarship_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","MaskEdit00_00","value","ds_scholarship","scholarship_student_no");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","MaskEdit00_01","value","ds_scholarship","scholarship_college");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","MaskEdit00_02","value","ds_scholarship","scholarship_phonenumber");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","MaskEdit00_03","value","ds_scholarship","scholarship_avg_grade");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholarship_ins.xfdl", function() {

        this.scholarship_ins_onload = function(obj,e)
        {

        this.datalist;
        this.datalist = this.getOwnerFrame().dsSend;

        };


        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "scholarship_ins")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}else{
        		this.alert("조회 성공 :");
        		return ;
        	}
        	}

        }
        this.btn_Accept_onclick = function(obj,e)
        {
        	 	this.transaction(
         		"scholarship_ins"// 1.ID
         		,"CmURL::scholarship/scholarIns.kh"// 2.URL
         		,"ds_scholarship_accept=out_scholarship" // 3.InDs : F->S jsp(I,U,D)
         		,"" // 4.OutDs : S->F jsp(SELECT)
         		,""// 5.InVar : F->S(var)
         		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
         	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scholarship_ins_onload,this);
            this.btn_Accept.addEventHandler("onclick",this.btn_Accept_onclick,this);
        };
        this.loadIncludeScript("scholarship_ins.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
