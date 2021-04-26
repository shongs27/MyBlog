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

4. excerpt 하는 법?

## 진행순서

- [x] 우선 프론트엔드 디자인 / 4월 14일
- [x] 백엔드 구현, 글 등록하기 / 4월 15일


## 해야할 것 것
- 태그 만들기, 태그를 통해 검색할 수 있기
리액트 불변성 유지?

1. detail 완성?
   personalDetailPage를 위주로 수정중
   <OrderBar>를 전면적으로 고쳐야 할듯
2. <LikeDislike 만들기>
   like의 모델 = { 
      postId, category
      (userId)
      +commentId
      }
  
   1. 불특정 다수의 정보 저장 
   -랜딩페이지
   다른 사람이 랜딩 접속하면 -> localStorage에 token을 생성해서 넣는다(IP주소를 받아와서 jwt와 결합하여 token, tokenExp를 만든다)
   - LikeAction 변화 만들기
   - Likes 받아오는거 만들기