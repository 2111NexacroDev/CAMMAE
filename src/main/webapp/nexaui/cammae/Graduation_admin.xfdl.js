(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Graduation_admin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_stuInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"studentNo\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStatus\" type=\"STRING\" size=\"256\"/><Column id=\"graduationFilename\" type=\"STRING\" size=\"256\"/><Column id=\"graduationFilerename\" type=\"STRING\" size=\"256\"/><Column id=\"graduationFilepath\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStuName\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStuDep\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStuAvg\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"year\">2022</Col></Row><Row><Col id=\"year\">2023</Col></Row><Row><Col id=\"year\">2024</Col></Row><Row><Col id=\"year\">2025</Col></Row><Row><Col id=\"year\">2026</Col></Row><Row><Col id=\"year\">2027</Col></Row><Row><Col id=\"year\">2028</Col></Row><Row><Col id=\"year\">2029</Col></Row><Row><Col id=\"year\">2030</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"departmentName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"departmentName\">컴퓨터공학과</Col></Row><Row><Col id=\"departmentName\">전자전기공학과</Col></Row><Row><Col id=\"departmentName\">산업디자인학과</Col></Row><Row><Col id=\"departmentName\">중국어학과</Col></Row><Row><Col id=\"departmentName\">유비쿼터스학과</Col></Row><Row><Col id=\"departmentName\">국어국문학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Info", this);
            obj._setContents("<ColumnInfo><Column id=\"graduationYear\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStuDep\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div04","0","70","800","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("rgb(231, 232, 226)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","160","800","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_stuInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:chk\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"졸업현황\"/><Cell col=\"3\" text=\"학생 이름\"/><Cell col=\"4\" text=\"졸업 학과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" expr=\"expr:chk==&apos;Y&apos;?&apos;1&apos;:&apos;0&apos;\" text=\"bind:chk\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:studentNo\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:graduationStatus\" expr=\"expr:graduationStatus ==&apos;Y&apos;? &quot;승인&quot;: &quot;대기&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:graduationStuName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:graduationStuDep\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","299","87","115","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("year");
            obj.set_datacolumn("year");
            obj.set_text("2022");
            obj.set_value("2022");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","470","87","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("departmentName");
            obj.set_datacolumn("departmentName");
            obj.set_text("컴퓨터공학과");
            obj.set_value("컴퓨터공학과");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","630","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn_accept","709","85","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("승인");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","15","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("졸업 승인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","18","18","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("rgb(0, 74, 38)");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","65","800","5",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("rgba(16, 65, 44, 0.2)");
            obj.set_border("0");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","250","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("학년도");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","430","83","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("학과");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
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

        };
        
        // User Script
        this.registerScript("Graduation_admin.xfdl", function() {
        this.year="";
        this.departmentName="";
        this.btn_search_onclick = function(obj,e)
        {
        	year = this.Combo00.text;
        	term = this.Combo02.text;
        	this.ds_Info.setColumn(0, 0, this.Combo00.text);
        	this.ds_Info.setColumn(0, 1, this.Combo02.text);
        	this.resultInfo();

        };


        this.resultInfo = function(){
        	this.transaction(
        		"grad_result"// 1.ID
        		,"CmURL::graduation/magInfo.kh"// 2.URL
        		,"in_info=ds_Info"// 3.InDs : F->S jsp(I,U,D)
        		,"ds_stuInfo=out_stu" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        }


        this.fn_callback_tran = function(id, nErrorCode, cErrorMsg, sSuccessMsg)
        {
        	if(id == "grad_result")
        	{
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        	}
        	}else if(id=="grad_update"){
        		if(nErrorCode < 0)
        		{

        			return;
        		}else{

        		return ;
        	}
        	}

        };
        this.btn_accept_onclick = function(obj,e)
        {
        	this.transaction(
        		"grad_update"// 1.ID
        		,"CmURL::graduation/magAccept.kh"// 2.URL
        		,"in_stuInfo=ds_stuInfo:U" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);


        };

        this.ds_stuInfo_oncolumnchanged = function(obj,e)
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Combo02.addEventHandler("onitemchanged",this.Combo02_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_accept.addEventHandler("onclick",this.btn_accept_onclick,this);
            this.ds_stuInfo.addEventHandler("oncolumnchanged",this.ds_stuInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("Graduation_admin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
