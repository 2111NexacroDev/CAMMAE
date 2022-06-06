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
    <td colspan="2">eclipse, sqldeveloper, visual studio code</td>
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

![image](https://user-images.githubusercontent.com/56354642/171804188-6fc0be59-1126-41d3-b134-9cc229ecbfd5.png)



## 4. 프로젝트 기능 구현

  - 김서윤
    - **질의응답게시판**
      - 게시글 등록, 수정, 삭제
      - 게시글 검색
      - 댓글 등록, 수정, 삭제
    - **중고거래게시판**
      - 게시글 등록, 수정, 삭제
      - 게시글 검색
      - 댓글 등록, 수정, 삭제
    - **중고거래게시판 채팅**
      - 채팅방 입장
      - 실시간 채팅 
  
  
  - 배성영
    - **수강개설**
    - **예비수강신청**
    - **수강신청**
  
  
  - 안준영
    - **취업지원 상담관리**
    - **취업지원 포트폴리오관리**
    - **캠퍼스매니저 장학금관리**
  
  
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
    - **비밀번호찾기**
    - **캠퍼스매니저 학사정보관리**
    - **캠퍼스매니저 성적관리**


 
## 5. 주요 기능
#### 1. 메인 페이지

#### 2. 캠퍼스 매니저
##### 학사정보, 성적관리, 졸업관리, 출석관리, 등록금관리, 장학관리  

#### 3. 게시판
##### 학과게시판, 질의응답게시판, 중고거래게시판  

#### 4. 수강신청
##### 수강개설, 예비수강신청, 수강신청  

#### 5. 취업지원센터
##### 공지사항, 채용공고, 지원현황, 상담관리, 포트폴리오  



## 6. Document
### Use Case Diagram
[CAMPUSMANAGER_UseCase.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843402/CAMPUSMANAGER_UseCase.pdf)
![캠퍼스매니저_유즈케이스(최종수정)](https://user-images.githubusercontent.com/98931301/172117742-cda21af3-9109-4bc4-9045-2ee34a7d9420.jpg)


### Flowchart
[CAMPUSMANAGER_FlowChart.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843386/CAMPUSMANAGER_FlowChart.pdf)
##### -학생
![캠퍼스매니저 플로우차트-취합_학생](https://user-images.githubusercontent.com/98931301/172131890-8b779f5f-7615-4084-8e2c-a0778025e512.jpg)
##### -교수
![캠퍼스매니저 플로우차트-취합_교수](https://user-images.githubusercontent.com/98931301/172132285-49c8374d-af15-4988-b831-0e904640533b.jpg)
##### -관리자
![캠퍼스매니저 플로우차트-취합_관리자](https://user-images.githubusercontent.com/98931301/172132968-e3a93e84-9445-4797-8faa-38a8b1b42491.jpg)


### WireFrame
[CAMPUSMANAGER_WireFrame.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843349/CAMPUSMANAGER_WireFrame.pdf)


### ERD
[CAMPUSMANAGR_ERD.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843328/CAMPUSMANAGR_ERD.pdf)
![erd전체](https://user-images.githubusercontent.com/98931301/172133466-9c3833d3-805c-45b5-9b04-99bb0b599c5c.PNG)


### Class Diagram
[CAMPUSMANAGER_ClassDiagram.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843336/CAMPUSMANAGER_ClassDiagram.pdf)


### Squence Diagram
[CAMPUSMANAGER_SquenceDiagram.pdf](https://github.com/1129khNexapring/CAMMAE/files/8843341/CAMPUSMANAGER_SquenceDiagram.pdf)

