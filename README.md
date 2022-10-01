# - Assginment #7

## 📕 프로젝트 목표

#### 검색창 구현 + 검색어 추천 기능 구현

<br/>

## 👨‍👩‍👧‍👧 팀원

<table>
<thead>
<tr>
<th>팀장 이지우</th>
<th>김재민</th>
<th>장현성</th>
<th>최재혁</th>
<th>김기범</th>
<th>배범수</th>
<th>신승준</th>
</tr>
</thead>
</table>

</br>
</br>

## ✋ 프로젝트 실행 방법

```
// 클라이언트
> npm install
> npm run start
```

```
// 서버
> npm install
> npm start
```

</br>

## ✨ 프로젝트 설명

</br>

### 📖 Best Practice

- ### 입력마다 API 호출이 되는 것을 방지하기 위해 Debouncing 활용(0.3s)
  - 최초 입력 시 setTimeout을 통해 의도적으로 검색을 지연.
  - 이후 debounce time 내에 키보드 입력 시, 즉 검색 시 기존 timer를 clear하여 API 호출 방지.
  - 다시 setTimeout을 설정하여 마지막으로 일어난 키보드 이벤트 시 입력된 검색어를 바탕으로 API 호출.

</br>

- ### 사용자가 입력한 텍스트와 추천 검색어에서 일치하는 부분은 정규식을 활용하여 Bold 처리
  - 방향키를 누를 때마다 index state 값 변경
  - index state가 변경될때마다 추천 검색어에 해당 index와 같은 순서에 있는 데이터를 포커싱
  - index state의 시작 index는 -1이고 위 방향키를 누를 때마다 index -1 아래 방향키를 누를 때마다 index + 1
  - index가 -1일때 위 방향키를 누르면 index의 값이 추천 검색어 가장 마지막 인덱스로 변경되고, index가 추천 검색어 가장 마지막 인덱스일 때 아래 방향키를 누르면 index가 0으로 변경된다.

</br>

- ### 동일한 텍스트로 검색 시 무의미한 API 호출을 방지하기 위해 Caching 활용.
  - O(1)로 key에 해당하는 value를 가져오기 위해 cache는 Map 자료 구조 이용.
  - 검색어가 cache에 저장되어 있는지 우선 확인 후 데이터가 존재할 시 API 호출 대신 cache에 저장된 데이터 활용.
  - cache에 검색어가 key로 존재하지 않으면 API 호출 후 이를 렌더링 및 cache에 저장.
    - 이후 해당 key를 다시 검색 시 cache에 저장되어 있으니 API 호출 대신 cache에 저장된 데이터를 활용.

</br>
</br>

1. 검색 시 일정한 시간 뒤에 추천 검색어를 불러오는 API 호출 (Debounce)

<img src="">

2. 이전에 입력한 텍스트로 검색 시 캐싱된 데이터를 활용

<img src="">

</br>
</br>

## ✨ 사용 스택

- React
- TypeScript
- Axios
- Styled-Components

</br>
</br>

## ✨ 프로젝트 구조

```
src
 ┣ components
 ┃ ┣ Account
 ┃ ┃ ┣ AccountContent.jsx
 ┃ ┃ ┣ AccountTable.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ AccountDetail
 ┃ ┃ ┣ AccountDetailContent.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ Login
 ┃ ┃ ┣ LoginForm.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ User
 ┃ ┃ ┣ UserContent.jsx
 ┃ ┃ ┣ UserTable.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ UserDetail
 ┃ ┃ ┣ UserDetailContent.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ common
 ┃ ┃ ┣ PageLayout.jsx
 ┃ ┃ ┗ index.js
 ┃ ┗ index.js
 ┣ hooks
 ┃ ┣ queries
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ useAccountDetailQuery.js
 ┃ ┃ ┣ useAccountQuery.js
 ┃ ┃ ┣ useErrorApi.js
 ┃ ┃ ┣ useLoginQuery.js
 ┃ ┃ ┣ useUserDetailQuery.js
 ┃ ┃ ┣ useUserQuery.js
 ┃ ┃ ┗ useUserSettingQuery.js
 ┃ ┣ index.js
 ┃ ┗ useCustomRouter.js
 ┣ lib
 ┃ ┣ api
 ┃ ┃ ┣ account.js
 ┃ ┃ ┣ base.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ login.js
 ┃ ┃ ┗ user.js
 ┃ ┣ consts
 ┃ ┃ ┣ api.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ pagePath.js
 ┃ ┃ ┣ queryKey.js
 ┃ ┃ ┗ storageKey.js
 ┃ ┣ db
 ┃ ┃ ┣ accountStatus.json
 ┃ ┃ ┣ brokerFormat.json
 ┃ ┃ ┣ brokers.json
 ┃ ┃ ┗ sider.json
 ┃ ┣ util
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ storage.js
 ┃ ┃ ┗ util.js
 ┃ ┗ index.js
 ┣ pages
 ┃ ┣ Account.jsx
 ┃ ┣ AccountDetail.jsx
 ┃ ┣ Home.jsx
 ┃ ┣ Login.jsx
 ┃ ┣ User.jsx
 ┃ ┣ UserDetail.jsx
 ┃ ┗ index.js
 ┣ styles
 ┃ ┣ GlobalStyle.jsx
 ┃ ┣ color.js
 ┃ ┗ reset.js
 ┣ App.js
 ┗ index.js
```

</br>

## 📖 8팀 컨벤션

- [Convention](https://www.notion.so/6a7522b6be6348d3b9e8e522c0c76053)
