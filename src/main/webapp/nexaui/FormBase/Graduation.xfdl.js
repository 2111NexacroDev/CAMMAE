(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Graduation");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_graduation", this);
            obj._setContents("<ColumnInfo><Column id=\"graduationStuName\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStuDep\" type=\"STRING\" size=\"256\"/><Column id=\"graduationStuAvg\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit02","336","56","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","490","56","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","530","60","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신청");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","16","50","142","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","173","46","124","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","MaskEdit02","value","ds_graduation","graduationStuAvg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Edit00","value","ds_graduation","graduationStuName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit01","value","ds_graduation","graduationStuDep");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Graduation.xfdl", function() {

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg, sSuccessMsg)
        {
        	if(id == "grad_info")
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
        	if(id == "grad_reg")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("등록 실패 : " + sErrorMsg);
        			return;
        		}else{
        		this.alert("등록 성공 :"+ sSuccessMsg);
        		return ;
        		}
        	}



        }
        this.Graduation_onload = function(obj,e)
        {
        	this.transaction(
        		"grad_info"// 1.ID
        		,"CmURL::graduation/stuInfo.kh"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_graduation=out_graduation" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.Button00_onclick = function(obj,e)
        {
        this.transaction(
        		"grad_reg"// 1.ID
        		,"CmURL::graduation/register.kh"// 2.URL
        		,"in_ds_grad=ds_graduation" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Graduation_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Graduation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
