# 2saliving

+ 개요: 가구 구매 사이트
+ 참여인원 : 
	- 구단희: 상세페이지, 리뷰기능, 책갈피기능
    - 박성은: 상품리스트, 찜하기기능
    - 이혜진: 회원가입, 로그인/로그아웃
    - 정억화: 메인페이지, 푸터/네브바, 장바구니, 마이페이지
    
+ 제작 기간: 2022.07.18 ~ 2022.07.29
+ 협업 툴: Slack, Notion, Trello
+ 회의 방식: daily standup 미팅을 통해 각자 진행상황 공유와 업무 분담

### 사용기술 스택
+ Front-end: <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=Sass&logoColor=white">

### 소통에 사용한 툴(Notion)
#### daily 루틴 및 진행사항 등 Notion에 실시간으로 내용 공유하며 소통
#### Slack은 3일 이전 내용은 사라져서 Notion을 활용해서 좋았음
<img width="1045" alt="image" src="https://user-images.githubusercontent.com/99310802/181910552-0de5c892-4f8b-4151-b1b0-fa749d0f103a.png">



### 필수구현 기능
1. Nav
- ㅇ
</br>

2. Main-page
- 
- ㅇ
</br>

3. List-page
### 하트 기능
- 토큰이 있는지 없는지를 먼저 확인하고 로그인하여 하트의 정보를 가져온다
- 로그인후 하트를 누른 이력이 있으면 색이 채워진 정보를 받아오고 아닐 경우는 빈 하트의 정보를 가져 오도록 구현
### 페이지네이션 기능
- 타이을 값을 고정 배열로 두어서 받아오는 데이터의 id값고 비교하여 해당 상품의 타이틀과 데이터가 화면에 나오도록 구현
- 한페이지당 기본적으로 보이는 상품수를 4개로 제한하고 옵션에 따라 8개로 limit을 바꾸어 정보를 받아오도록 구현
- 다음페이지로 넘어갈 경우 offset이 바뀌어 다음 상품부터 설장한 상품 수 만큼 화면에 보이도록 구현
### 검색기능
- 검색창에 알파벳을 검색 했을때 알파벳이 브랜드 이름에 포함될 경우 페이지에 뜰 수 있도록 구현
</br>

![](https://velog.velcdn.com/images/koooky35_b/post/9b4938fb-34cd-4429-a759-e7ebd1c98465/image.gif)

4. Detail-page
#### 책갈피 기능
- useRef를 활용하여 상품상세정보, 리뷰&상품문의 클릭 시 해당내용 섹션으로 이동되는 기능
- useEffect를 활용하여 페이지 상단으로 이동되는 버튼 구현 
#### 수량변경 및 색상 변경 가능 tab
- 컴포넌트로하여 구매 tab을 생성
- 브랜드와 색상, 제품 명 등 통신으로 받아와 상세정보 변경
#### 제품리뷰달기
- 컴포넌트로하여 제품상세페이지 내에서 리뷰 작성이 가능하도록 구현
- form 태그 내 props 받아와 모달창이 떠 있을때에도 댓글이 페이지 내에 input 됨
- 모달창 버튼 클릭 시 'POST' 하여 댓글들이 창에 그대로 남아있도록 DB 저장
![](https://velog.velcdn.com/images/koooky35_b/post/430bf78a-485d-4c88-8034-ae6043c9cc7d/image.gif)
</br>
5. Cart
</br>
6. My-Info
</br>

![](https://velog.velcdn.com/images/koooky35_b/post/f44bac40-b91f-4900-86b0-76895b06c724/image.gif)

![](https://velog.velcdn.com/images/koooky35_b/post/6dd37e7b-2024-4490-8f23-c98a788a9985/image.gif)



### 프로젝트를 끝내고나서,
 단희 : </br>
 #### 잘했다고 느낀 점, </br>
 실력이 많이 부족함에도 손이 많이 가는 상세페이지를 해보고싶었다.
 그 이유는 많은 기능을 접해보고싶었기 때문! </br>
 페이지 내에서의 색상 select 기능과 수량 count up, 동시에 총액도 up 되는 기능들을 목표로 했고 결과는 성공!</br>
 추가로 modal내에서 상품리뷰를 작성하고 DB로 저장되게되는 기능까지 구현했다.👏 </br>
 #### 협업하며 힘들거나 아쉬웠던 점,</br> 
 코드를 시작하기 전 홈페이지를 자세하게 뜯어서 보지않은 것</br>
 내가 자주 보는 것들 외에도 페이지 내에는 정말 많은 기능들이 있는데 눈여겨 보지않고 시작한게 좀 아쉽다.</br>
 아 여기에는 이런 기능들이 있었네, 마우스를 올리면 카테고리가 이렇게 보여지는구나? 를 코드를 한참 치고난 이후에 알게되서 틀을 짜는데
 예상치 못한 걸림돌들이 많이 생겼었다.</br>
 미흡했던 리팩토링과 css 네스팅... 시간에 쫓겨 틀짜고 기능 구현을 하다보니 리팩토링을 하지 못 한 점이 많이 아쉽다.
 #### 느낀점 </br>
 일단 좋은 팀원들을 만나서 너무 감사했다. 서로 기능 구현을 할 수있게 다 같이 고민해주어서 감사했다.</br>
 나는 큰 틀을 짜놓고 그 안을 채워나가는 타입인데 큰 틀을 짤 때 시간을 많이 들였다. 그러다 보니 중요한 기능들을 구현하는거에 많이 집중을 못했다. 멘토님들이 스타일에 너무 오랜시간을 들이지 말라고하셨는데 나같은 경우였던 것 같음</br>
협업에서 가장 중요한 소통... 말로는 너무 잘하는 우리인데 글로 남기는 건 쉽지않았던 것 같다. 누군가에게 글로 이해시키는게 쉽지않다고 느꼈다.  멘토님들께서 다른 페이지는어떻게 구현되나요? 했을 때 팀원의 기능구현을 까먹고 아 맞다. 하게되는 경우가 많았던 것 같아서 다음 프로젝트에는 많이 노력해야겠다.
아, 그리고 어차피 통신할 때 로직이 많이 바뀌니까 하드코딩은 하지않기로.. </br>
한 기능에 너무 잡혀서 다음 기능을 포기하는 일이 없도록 하길... 1인분은 꼭 하길!!
