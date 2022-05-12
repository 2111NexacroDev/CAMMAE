(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_check","70","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Check");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",720,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.btn_check_onclick = function(obj,e)
        {
        	this.transaction(
        		"check_request"// 1.ID
        		,"http://127.0.0.1:9999/checkRequest.nexa"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };


        this.fn_callback = function(id, errCd, errMsg)
        {
        	trace(id);
        	trace(errCd);
        	trace(errMsg);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_check.addEventHandler("onclick",this.btn_check_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
