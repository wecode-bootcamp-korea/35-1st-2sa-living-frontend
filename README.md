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


### 필수구현 기능
1. Nav
- ㅇ
</br>

2. Main-page
- ㅇ
- ㅇ
</br>

3. List-page
- ㅇ
- ㅇ
</br>

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
![](https://velog.velcdn.com/images/koooky35_b/post/9b4938fb-34cd-4429-a759-e7ebd1c98465/image.gif)
