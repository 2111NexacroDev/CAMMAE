(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">학사정보</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">학생정보</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::std_info.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">성적관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">성적조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::std_grade.xfdl</Col></Row><Row><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NAME\">이의신청 조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::std_gradeObjection.xfdl</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">졸업관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NAME\">졸업신청</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::Graduation.xfdl</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">출석관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">출결조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::att_list.xfdl</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">등록금관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">5010</Col><Col id=\"MENU_NAME\">등록금고지서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitionselectStudent.xfdl</Col></Row><Row><Col id=\"MENU_ID\">5020</Col><Col id=\"MENU_NAME\">등록금 납부 확인서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitionnnabbupayStudent.xfdl</Col></Row><Row><Col id=\"MENU_ID\">60</Col><Col id=\"MENU_NAME\">장학관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">6010</Col><Col id=\"MENU_NAME\">성적장학금 신청</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::scholarship_reg.xfdl</Col></Row><Row><Col id=\"MENU_ID\">6020</Col><Col id=\"MENU_NAME\">성적장학금 신청결과 조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::scholarship_resultInfo.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_myMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu_prf", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">학사정보</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">교수정보</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::prf_info.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">성적관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">성적조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::prf_grade.xfdl</Col></Row><Row><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NAME\">이의신청 조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::prf_gradeObjection.xfdl</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">출석관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NAME\">출석조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::attissuechange_prf.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3030</Col><Col id=\"MENU_NAME\">출석등록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::attinsert_prf.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu_mag", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">학사정보</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">학생정보관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::mag_sInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">교수정보관리</Col><Col id=\"FORM_URL\">cammae::mag_pInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">1030</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">관리자정보관리</Col><Col id=\"FORM_URL\">cammae::mag_mInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">졸업관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">졸업승인</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::Graduation_admin.xfdl</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">장학금관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NAME\">장학금승인</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::scholarship_info.xfdl</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">등록금관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">등록금 조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitionselect.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_NAME\">등록금 고지서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitioninsert.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4030</Col><Col id=\"MENU_NAME\">등록금 납부확인</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitionnabbupay.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Phone");
            this.set_screenid("Phone_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","480","768",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("TopFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler

		this.checkLicense("");
        
        this.loadPreloadList();

    };
}
)();
