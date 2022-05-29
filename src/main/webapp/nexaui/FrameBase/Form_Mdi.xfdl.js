(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Mdi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_mdi","8","4","762","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_mdi);
            obj.set_text("Tabpage2");
            this.tab_mdi.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Mdi.xfdl", function() {

        this.Form_Mdi_onload = function(obj,e)
        {
        	this.tab_mdi.removeTabpage(0);
        };

        //오픈한 화면의 탭페이지를 생성
        this.fn_addTab = function(oParam)
        {
        	this.tab_mdi.insertTabpage(oParam.MENU_ID, -1, "", oParam.MENU_NAME);
        }
        this.tab_mdi_onchanged = function(obj,e)
        {
        	var sTabId = obj.tabpages[e.postindex].name;

        	var objApp = nexacro.getApplication();
        	objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.WorkFrame[sTabId].setFocus();

        };

        this.tab_mdi_onextrabuttonclick = function(obj,e)
        {
        //	e.index
        // 탭페이지 삭제 removeTabpage
        // 화면 종료 메소드 close()
        // gds_openForm key값으로 findRow, deleteRow

        	var sTabId = obj.tabpages[e.index].name;
        	var objApp = nexacro.getApplication();
        	objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.WorkFrame[sTabId].form.close();
        	obj.removeTabpage(e.index);

        	var nRow = objApp.gds_openForm.findRow("MENU_ID", sTabId);
        	objApp.gds_openForm.deleteRow(nRow);

        };




        this.btn_closeAll_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var sWorkFramePath = objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.WorkFrame;
        	var arrObj = sWorkFramePath.all;

        	for(var i=arrObj.length-1; i>=0; i--)
        	{
        		arrObj[i].form.close();
        		this.tab_mdi.removeTabpage(i);
        	}
        	objApp.gds_openForm.clearData();
        };

        this.btn_cacade_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var sWorkFramePath = objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.WorkFrame;
        	sWorkFramePath.arrange("cascade");

        	var arrObj = sWorkFramePath.all;
        	for(var i=0; i<arrObj.length; i++)
        	{
         		sWorkFramePath.frames[i].set_border("2px solid gray");
        	}
        };

        this.btn_max_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var sWorkFramePath = objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.WorkFrame;
        	var arrObj = sWorkFramePath.all;

        	for(var i=0; i<arrObj.length; i++)
        	{
        		sWorkFramePath.frames[i].set_openstatus("maximize");
         		sWorkFramePath.frames[i].set_border("0px none");
        	}
        };

        this.fn_tabControl = function(pKey)
        {
        	var nCnt = this.tab_mdi.getTabpageCount();

        	for(var i=0; i<nCnt; i++)
        	{
        		var sTabId = this.tab_mdi.tabpages[i].name;
        		if(sTabId == pKey){
        			this.tab_mdi.set_tabindex(i);
        		}
        	}
        }

        this.btn_home_onclick = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        };

        this.tab_mdi_onlbuttondown = function(obj,e)
        {
        	if(obj.getTabpageCount() > 0){
        		nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Mdi_onload,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
            this.tab_mdi.addEventHandler("onlbuttondown",this.tab_mdi_onlbuttondown,this);
        };
        this.loadIncludeScript("Form_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
