(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","-10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_image("url(\'theme::CAMMAE/images/logo.png\')");
            obj.set_border("0px none");
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
        this.registerScript("Form_Main.xfdl", function() {
        this.type ="";
        this.left = "";
        this.Form_Main_onload = function(obj,e)
        {
        	// left 폼 객체를 가져옴
        	var objApp = nexacro.getApplication();
        	left = objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame;

        	// 서버에서 사용자 구별 값인 type을 받아온다.
        	this.transaction(
        	      "tr_type" // 1. ID
        	      , "CmURL::login/nexaInfo.kh" // 2. URL
        	      , "" // 3. InDs : F->S jsp(I, U, D)
        	      , "" // 4. OutDs : S->F jsp(SELECT) - 스페이스는 구분자라서 = 옆에 스페이스 없이 써야 함
        	      , "" // 5. InVar : F->S(var)
        	      , "fn_callback_tran" // 6. callback function(transaction 완료 시 호출되는 함수)
        	   );

        };

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "tr_type")
        	{
        		// 회원 유형별로 매뉴바 설정 해주기
        		if(nErrorCode > 0) {
        			if(this.type == "std") {

        				left.set_formurl("FrameBase::Form_Left.xfdl");
        			} else if(this.type == "prf") {

        				left.set_formurl("FrameBase::Form_Left_prf.xfdl");
        			} else {

        				left.set_formurl("FrameBase::Form_Left_mag.xfdl");
        				}
        			return;
        		} else {
        			this.alert("비밀번호 변경 실패");
        			return;
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
