# 블로그 만들기

## 구동
react port 8000번
back port 8888번

## 기능적 요구 사항

 1. 글쓰기

(1) 좋아요

(2) 태그

2. 검색

3. 댓글

disque말고 utterances와 직접구현 둘다 해보기

SSR을 위해서 next.js를 사용해야한다 ?

4. excerpt로 뽑기

## 진행순서

- [x] 우선 프론트엔드 디자인 / 4월 14일
- [x] 백엔드 구현, 글 등록하기 / 4월 15일


## 해야할 것
 
 ~~1. <LikeDislike> 불특정 다수의 좋아요~~완료
 - [ ] (1) 입장권 만들기
 * 랜딩페이지
 다른 사람이 첫 화면 (랜딩페이지)에 접속하면 **입장권** 나눠준다
  -> cookie에 고유의 token&tokenExp을 생성해서 넣는다
 * 좋아요 페이지
 입장권을 받은 사람이 좋아요를 누르면 **whoIs**변수 데이터 베이스에 전송
 const whoIs = {
    passcheck : **입장권**
    postId :       // postId와 commentId 둘 중 하나 입력됨 
    commentId :
 }
 
 - [x] (2) localStorage / 데이터 베이스 **이 방법으로 결정**  
* 포스트의 경우 - LocalStorage : Like는 postId/ Dislike는 post-Dislike로 저장
* 코멘트의 경우 - mongoose : CommentId를 저장
  
~~2. <Comment> 불특정 다수의 코멘트~~완료

1. 태그만들기 - 검색
2. [Fix] < 1 2 3 > 화살표 끝까지 갔을 경우 알림창 '더이상 포스트가 없습니다'
3. <OrderBar> 확인 수정