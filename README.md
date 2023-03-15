# 우리의 도서관

책을 통해 소통하는 작은 커뮤니티입니다.

## Deployment

[우리의 도서관](http://ourlibrary.s3-website.ap-northeast-2.amazonaws.com/)

## Function

- 회원가입 및 로그인(JWT)
- 회원정보 수정 기능
- 등록된 책 리스트 및 상세페이지
- 책 등록 및 수정, 삭제
- 책 찜하기
- 댓글추가 및 수정, 삭제
- 권한에 따른 접근성
- 책 검색기능(수정중)

## Requirment

For building and running the app you need:

- Node.js 18.12.1
- Yarn 1.22.19

## Script

```
$ yarn install
$ yarn start
```

## Stack

- react & react-dom 18.2.0
- react-router & react-router-dom 6.8.2
- styled-components 5.3.8

## Folder Structure

```
src
├── index.js
├── App.js
├── apis
│   ├── comment.js
│   ├── favorite.js
│   ├── library.js
│   └── user.js
├── components
│   ├── common
│   ├── library
│   └── mypage
├── containers
│   ├── common
│   ├── library
│   ├── main
│   ├── mypage
│   └── sign
├── contexts
├── libs
└── routers
```
