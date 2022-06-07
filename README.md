# CAMPUS MANAGER

## 팀 소개
##### 새내기
:새내기란 대학이나 직장 등에 새로갓 들어온 사람을 뜻하는 말로, 
'개발자에 첫 발을 내딛는다'라는 의미로 '새내기'라고 이름을 짓게 되었습니다. 
##### 팀원 : 김서윤, 배성영, 안준영, 오혜성, 이수연, 장승훈

## 프로젝트 기간
2022년 03월 28일 ~ 2022년 06월 03일

## 목차  
1. [개요](#1-개요)
2. [설계의 주안점](#2-설계의-주안점)
3. [사용기술 및 개발환경](#3-사용기술-및-개발환경)
4. [프로젝트 기능 구현](#4-프로젝트-기능-구현)
5. [주요기능](#5-주요기능)
6. [Document](#6-document)


## 1. 개요
- 학사행정 시스템을 이용하여 학교생활의 필수 정보에 접근성과 편의성을 높여 
  교수와 학생 및 교직원의 원할한 커뮤니케이션 제공


## 2. 설계의 주안점
- 메인페이지에서 빠른 정보 접근을 위한 퀵메뉴
- 학과게시판, 질의응답게시판, 중고거래게시판 등 다양한 소통 채널
- 편리한 수강신청을 위한 장바구니(찜하기) 기능
- 학생들의 취업준비를 위한 포트폴리오 관리, 취업상담 기능
- 학생들의 취업을 위한 채용공고 및 지원 기능


## 3. 사용기술 및 개발환경

<table>
   <tr>
    <th colspan="3">사용기술 및 개발환경</th>
  </tr>
  
  <tr>
    <td rowspan="2">개발 언어</td>
    <td>FRONT</td>
    <td>html5, css3, javascript, nexacro</td>
  </tr>
  <tr>
    <td>BACK</td>
    <td> java, Spring/jsp</td>
  </tr>
  <tr>
    <td>IDE</td>
    <td colspan="2">eclipse, visual studio code, sqldeveloper</td>
  </tr>
  <tr>
    <td>SERVER</td>
    <td colspan="2">Apache Tomcat 8.5</td>
  </tr>
  <tr>
    <td>DB</td>
    <td colspan="2">oracle 11g </td>
  </tr>
  <tr>
    <td>협업</td>
    <td colspan="2">GitHub</td>
  </tr>
</table>



## 4. 프로젝트 기능 구현

  - 김서윤
    - **질의응답게시판**
      - 게시글 조회, 등록, 수정, 삭제
      - 게시글 검색
      - 댓글 조회, 등록, 수정, 삭제
    - **중고거래게시판**
      - 게시글 조회, 등록, 수정, 삭제
      - 게시글 검색
      - 댓글 조회, 등록, 수정, 삭제
    - **중고거래게시판 채팅**
      - 채팅방 입장
      - 실시간 채팅 
  
  
  - 배성영
    - **수강개설**
    - **예비수강신청**
    - **수강신청**
  
  
  - 안준영
    - **취업지원 상담관리**
        - 게시글 조회, 등록, 삭제
        - 댓글 조회, 등록
    - **취업지원 포트폴리오관리**
       - 게시글 조회, 등록, 수정, 삭제
       - 파일 첨부, 파일 다운로드
    - **캠퍼스매니저 장학금관리**
       - 게시글 조회, 등록, 수정
  
  - 오혜성
    - **취업지원 공지사항**
      - 게시글 CRUD
      - 파일첨부 다운로드
    - **취업지원 채용공고**
      - 게시글 CRUD
      - 주소, 지도 API
      - 이력서 지원(파일첨부) 
    - **취업지원 지원현황**
      - 지원현황 조회
      - 지원현황 취소
      - 파일다운로드 
    - **캠퍼스매니저 등록금관리**
      - 학과별 선택 등록금 고지서 등록, 수정
      - 학과별 선택 등록금 납부확인서 등록, 수정
      - 등록금 고지서 조회
      - 등록금 납부확인서 조회 
  
  
  - 이수연
    - **학과게시판**
    - **캠퍼스매니저 출석관리**
    - **캠퍼스매니저 졸업관리**


  - 장승훈
    - **로그인**
      - 학생, 교수, 관리자 로그인
      - 로그인 권한 요청 공통 처리
      - 학생, 교수, 관리자 비밀번호 찾기
      - 임시 비밀번호 이메일 전송
    - **캠퍼스매니저 학사정보관리**
      - 학생 교수 정보 조회, 수정
      - 학생, 교수, 관리자 비밀번호 변경
      - 관리자의 학생, 교수, 관리자 정보 리스트 조회, 등록, 수정, 삭제
    - **캠퍼스매니저 성적관리**
      - 학생, 교수 성적 조회
      - 학생 이의 신청 등록
      - 학생, 교수 이의 신청 조회
      - 교수 피드백 등록, 수정
      - 학생, 교수 피드백 조회


 
## 5. 주요 기능
#### 1. 메인 페이지
<img src="https://user-images.githubusercontent.com/98931301/172272754-5c347ca5-d14b-4c6b-b413-5fd7eaa641bb.png" width="50%">

#### 2. 로그인
<img src="https://user-images.githubusercontent.com/98931301/172272813-0ee01434-ae39-495e-8ce1-34e73a206ca0.png" width="50%">

#### 3. 캠퍼스 매니저
##### -학사정보
<img src="https://user-images.githubusercontent.com/98931301/172273021-da667a95-312c-4d75-a0e5-cdae9ae40e70.png" width="50%">

##### -성적관리
<img src="https://user-images.githubusercontent.com/98931301/172273031-cd4f2176-69e6-454d-8455-de140e32c590.png" width="50%">

##### -졸업관리
<img src="https://user-images.githubusercontent.com/98931301/172273043-3e0ae6ae-eccd-4ed3-ab35-96a867adf281.png" width="50%">

##### -출석관리
<img src="https://user-images.githubusercontent.com/98931301/172273055-b447d4a8-36ab-4f0b-8dcc-8d79301a3474.png" width="50%">

##### -장학관리  
<img src="https://user-images.githubusercontent.com/98931301/172273069-bb2398bd-f7d1-42fc-a62d-97860ba79455.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172273076-51b2c01d-8821-4477-bb4c-c7091eb5e39a.png" width="50%">

##### -등록금관리
<img src="https://user-images.githubusercontent.com/98931301/172273083-9f0beeac-3411-4f21-851c-49e95cd214ee.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172273093-9f8ebe0f-a330-456a-a4ad-ca2028d699f4.png" width="50%">

#### 4. 게시판
##### -학과게시판
<img src="https://user-images.githubusercontent.com/98931301/172272821-823cf203-4646-4203-973e-53d833ef1a9f.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172272833-56828f96-f501-4944-88a4-2e6d93d1b1eb.png" width="50%">

##### -질의응답게시판
<img src="https://user-images.githubusercontent.com/98931301/172272844-cf2447e9-994a-48a4-8c2b-1b9869cef485.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172272853-f188fa2d-4cf8-484c-91f4-e321bcbbb22d.png" width="50%">

##### -중고거래게시판  
<img src="https://user-images.githubusercontent.com/98931301/172272860-d43c068a-4638-41e7-8420-e1969e39f8ab.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172272870-c7ed3b86-4cd7-4a14-8971-65e080f78419.png" width="50%">

#### 5. 수강신청
##### -수강개설
<img src="https://user-images.githubusercontent.com/98931301/172272881-a5dc6536-45e2-45c4-b154-2e8f621bcbb9.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172272886-592df062-5cd5-4c00-b187-237551085cb1.png" width="50%">

##### -예비수강신청
<img src="https://user-images.githubusercontent.com/98931301/172272892-2b88ce92-505b-45b0-8a21-c73e71b81c30.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172272900-783a1468-0832-493e-b1b4-d81afc443284.png" width="50%">

##### -수강신청  
<img src="https://user-images.githubusercontent.com/98931301/172272907-faba9652-4ba7-4b4a-940e-8369079c9693.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172272913-2025ef78-1881-464f-b80a-9dac72a3f21f.png" width="50%">

#### 6. 취업지원센터
##### -공지사항
<img src="https://user-images.githubusercontent.com/98931301/172272930-46fee4cd-86aa-4f1a-ba75-b7591a5f1b2f.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172272938-53a3f2e9-03c4-4b66-b514-fcc42080df6a.png" width="50%">

##### -채용공고
<img src="https://user-images.githubusercontent.com/98931301/172272946-0403ab96-aa4e-4542-bc23-b102d026d344.png" width="50%"><img src="https://user-images.githubusercontent.com/98931301/172272962-634b671a-ecf4-4fdf-8562-8ce06c56cc5e.png" width="50%">

##### -지원현황
<img src="https://user-images.githubusercontent.com/98931301/172272970-2ac8bdbd-1f17-4e5a-9ef0-574cea28990b.png" width="50%">

##### -상담관리
<img src="https://user-images.githubusercontent.com/98931301/172272987-76e8c136-cef9-4ab9-bd31-dbec3875612c.png" width="50%">

##### -포트폴리오  
<img src="https://user-images.githubusercontent.com/98931301/172273006-510626c8-25d9-489f-b1ca-d3e653e8a293.png" width="50%">


## 6. Document
### Use Case Diagram
[CAMPUSMANAGER_UseCase.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843402/CAMPUSMANAGER_UseCase.pdf)


### Flowchart
[CAMPUSMANAGER_FlowChart.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843386/CAMPUSMANAGER_FlowChart.pdf)


### WireFrame
[CAMPUSMANAGER_WireFrame.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843349/CAMPUSMANAGER_WireFrame.pdf)


### ERD
[CAMPUSMANAGR_ERD.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843328/CAMPUSMANAGR_ERD.pdf)


### Class Diagram
[CAMPUSMANAGER_ClassDiagram.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843336/CAMPUSMANAGER_ClassDiagram.pdf)


### Squence Diagram
[CAMPUSMANAGER_SquenceDiagram.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843341/CAMPUSMANAGER_SquenceDiagram.pdf)

