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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">학사정보</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">학생정보</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::std_info.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">성적관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">성적조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::std_grade.xfdl</Col></Row><Row><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NAME\">이의신청 조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::std_gradeObjection.xfdl</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">졸업관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NAME\">졸업신청</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::Graduation.xfdl</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">출석관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">출석조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::att_list.xfdl</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">등록금관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">5010</Col><Col id=\"MENU_NAME\">등록금고지서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitionselectStudent.xfdl</Col></Row><Row><Col id=\"MENU_ID\">5020</Col><Col id=\"MENU_NAME\">등록금 납부 확인서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitionnnabbupayStudent.xfdl</Col></Row><Row><Col id=\"MENU_ID\">60</Col><Col id=\"MENU_NAME\">장학관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">6010</Col><Col id=\"MENU_NAME\">성적장학금 신청</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::scholarship_reg.xfdl</Col></Row><Row><Col id=\"MENU_ID\">6020</Col><Col id=\"MENU_NAME\">성적장학금 신청결과 조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::scholarship_resultInfo.xfdl</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">학사정보</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">학생정보관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::mag_sInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">교수정보관리</Col><Col id=\"FORM_URL\">cammae::mag_pInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">1030</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">관리자정보관리</Col><Col id=\"FORM_URL\">cammae::mag_mInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">졸업관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">졸업신청조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::Graduation_admin.xfdl</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">장학금관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NAME\">장학금신청조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::scholarship_info.xfdl</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">등록금관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">등록금 조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitionselect.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_NAME\">등록금 고지서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitioninsert.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4030</Col><Col id=\"MENU_NAME\">등록금 납부확인</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">cammae::tuitionnabbupay.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1000","650",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("MidLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("*,0,0");
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame1.set_separatesize("200,*");
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);

            var frame2 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame1);
            frame2.set_showstatusbar("false");
            frame2.set_showtitlebar("false");
            frame1.addChild(frame2.name, frame2);
            frame2.set_formurl("FrameBase::Form_Left.xfdl");


            var frame3 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,frame1);
            frame3.set_separatesize("30,0,*");
            frame3.set_showtitlebar("false");
            frame1.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("MdiFrame",null,null,null,null,null,null,"FrameBase::Form_Mdi.xfdl",frame3);
            frame4.set_showtitlebar("false");
            frame3.addChild(frame4.name, frame4);
            frame4.set_formurl("FrameBase::Form_Mdi.xfdl");


            var frame5 = new FrameSet("WorkFrame",null,null,null,null,null,null,frame3);
            frame5.set_showtitlebar("false");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("MainFrame",null,null,null,null,null,null,"FrameBase::Form_Main.xfdl",frame3);
            frame6.set_showtitlebar("false");
            frame3.addChild(frame6.name, frame6);
            frame6.set_formurl("FrameBase::Form_Main.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {


        this.av_MdiFrame = "";
        this.av_WorkFrame = "";


        this.Application_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	this.av_MdiFrame = objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.MdiFrame;
        	this.av_WorkFrame = objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.WorkFrame;
        };

        });
        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
