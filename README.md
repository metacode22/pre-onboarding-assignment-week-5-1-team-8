# - Assginment #7

## ๐ ํ๋ก์ ํธ ๋ชฉํ

#### ๊ฒ์์ฐฝ ๊ตฌํ + ๊ฒ์์ด ์ถ์ฒ ๊ธฐ๋ฅ ๊ตฌํ

<br/>

## ๐จโ๐ฉโ๐งโ๐ง ํ์

<table>
<thead>
<tr>
<th>ํ์ฅ ์ด์ง์ฐ</th>
<th>๊น์ฌ๋ฏผ</th>
<th>์ฅํ์ฑ</th>
<th>์ต์ฌํ</th>
<th>๊น๊ธฐ๋ฒ</th>
<th>๋ฐฐ๋ฒ์</th>
<th>์ ์น์ค</th>
</tr>
</thead>
</table>

</br>
</br>

## โ ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ

```
// ํด๋ผ์ด์ธํธ
> npm install
> npm run start
```

```
// ์๋ฒ
> npm install
> npm start
```

</br>

## โจ ํ๋ก์ ํธ ์ค๋ช

</br>

### ๐ Best Practice

- ### ์๋ ฅ๋ง๋ค API ํธ์ถ์ด ๋๋ ๊ฒ์ ๋ฐฉ์งํ๊ธฐ ์ํด Debouncing ํ์ฉ(0.3s)
  - ์ต์ด ์๋ ฅ ์ setTimeout์ ํตํด ์๋์ ์ผ๋ก ๊ฒ์์ ์ง์ฐ.
  - ์ดํ debounce time ๋ด์ ํค๋ณด๋ ์๋ ฅ ์, ์ฆ ๊ฒ์ ์ ๊ธฐ์กด timer๋ฅผ clearํ์ฌ API ํธ์ถ ๋ฐฉ์ง.
  - ๋ค์ setTimeout์ ์ค์ ํ์ฌ ๋ง์ง๋ง์ผ๋ก ์ผ์ด๋ ํค๋ณด๋ ์ด๋ฒคํธ ์ ์๋ ฅ๋ ๊ฒ์์ด๋ฅผ ๋ฐํ์ผ๋ก API ํธ์ถ.

</br>

- ### ์ฌ์ฉ์๊ฐ ์๋ ฅํ ํ์คํธ์ ์ถ์ฒ ๊ฒ์์ด์์ ์ผ์นํ๋ ๋ถ๋ถ์ ์ ๊ท์์ ํ์ฉํ์ฌ Bold ์ฒ๋ฆฌ
  - ๋ฐฉํฅํค๋ฅผ ๋๋ฅผ ๋๋ง๋ค index state ๊ฐ ๋ณ๊ฒฝ
  - index state๊ฐ ๋ณ๊ฒฝ๋ ๋๋ง๋ค ์ถ์ฒ ๊ฒ์์ด์ ํด๋น index์ ๊ฐ์ ์์์ ์๋ ๋ฐ์ดํฐ๋ฅผ ํฌ์ปค์ฑ
  - index state์ ์์ index๋ -1์ด๊ณ  ์ ๋ฐฉํฅํค๋ฅผ ๋๋ฅผ ๋๋ง๋ค index -1 ์๋ ๋ฐฉํฅํค๋ฅผ ๋๋ฅผ ๋๋ง๋ค index + 1
  - index๊ฐ -1์ผ๋ ์ ๋ฐฉํฅํค๋ฅผ ๋๋ฅด๋ฉด index์ ๊ฐ์ด ์ถ์ฒ ๊ฒ์์ด ๊ฐ์ฅ ๋ง์ง๋ง ์ธ๋ฑ์ค๋ก ๋ณ๊ฒฝ๋๊ณ , index๊ฐ ์ถ์ฒ ๊ฒ์์ด ๊ฐ์ฅ ๋ง์ง๋ง ์ธ๋ฑ์ค์ผ ๋ ์๋ ๋ฐฉํฅํค๋ฅผ ๋๋ฅด๋ฉด index๊ฐ 0์ผ๋ก ๋ณ๊ฒฝ๋๋ค.

</br>

- ### ๋์ผํ ํ์คํธ๋ก ๊ฒ์ ์ ๋ฌด์๋ฏธํ API ํธ์ถ์ ๋ฐฉ์งํ๊ธฐ ์ํด Caching ํ์ฉ.
  - O(1)๋ก key์ ํด๋นํ๋ value๋ฅผ ๊ฐ์ ธ์ค๊ธฐ ์ํด cache๋ Map ์๋ฃ ๊ตฌ์กฐ ์ด์ฉ.
  - ๊ฒ์์ด๊ฐ cache์ ์ ์ฅ๋์ด ์๋์ง ์ฐ์  ํ์ธ ํ ๋ฐ์ดํฐ๊ฐ ์กด์ฌํ  ์ API ํธ์ถ ๋์  cache์ ์ ์ฅ๋ ๋ฐ์ดํฐ ํ์ฉ.
  - cache์ ๊ฒ์์ด๊ฐ key๋ก ์กด์ฌํ์ง ์์ผ๋ฉด API ํธ์ถ ํ ์ด๋ฅผ ๋ ๋๋ง ๋ฐ cache์ ์ ์ฅ.
    - ์ดํ ํด๋น key๋ฅผ ๋ค์ ๊ฒ์ ์ cache์ ์ ์ฅ๋์ด ์์ผ๋ API ํธ์ถ ๋์  cache์ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ฅผ ํ์ฉ.

</br>
</br>

1. ๊ฒ์ ์ ์ผ์ ํ ์๊ฐ ๋ค์ ์ถ์ฒ ๊ฒ์์ด๋ฅผ ๋ถ๋ฌ์ค๋ API ํธ์ถ (Debounce)

<img src="">

2. ์ด์ ์ ์๋ ฅํ ํ์คํธ๋ก ๊ฒ์ ์ ์บ์ฑ๋ ๋ฐ์ดํฐ๋ฅผ ํ์ฉ

<img src="">

</br>
</br>

## โจ ์ฌ์ฉ ์คํ

- React
- TypeScript
- Axios
- Styled-Components

</br>
</br>

## โจ ํ๋ก์ ํธ ๊ตฌ์กฐ

```
src
 โฃ components
 โ โฃ Account
 โ โ โฃ AccountContent.jsx
 โ โ โฃ AccountTable.jsx
 โ โ โ index.js
 โ โฃ AccountDetail
 โ โ โฃ AccountDetailContent.jsx
 โ โ โ index.js
 โ โฃ Login
 โ โ โฃ LoginForm.jsx
 โ โ โ index.js
 โ โฃ User
 โ โ โฃ UserContent.jsx
 โ โ โฃ UserTable.jsx
 โ โ โ index.js
 โ โฃ UserDetail
 โ โ โฃ UserDetailContent.jsx
 โ โ โ index.js
 โ โฃ common
 โ โ โฃ PageLayout.jsx
 โ โ โ index.js
 โ โ index.js
 โฃ hooks
 โ โฃ queries
 โ โ โฃ index.js
 โ โ โฃ useAccountDetailQuery.js
 โ โ โฃ useAccountQuery.js
 โ โ โฃ useErrorApi.js
 โ โ โฃ useLoginQuery.js
 โ โ โฃ useUserDetailQuery.js
 โ โ โฃ useUserQuery.js
 โ โ โ useUserSettingQuery.js
 โ โฃ index.js
 โ โ useCustomRouter.js
 โฃ lib
 โ โฃ api
 โ โ โฃ account.js
 โ โ โฃ base.js
 โ โ โฃ index.js
 โ โ โฃ login.js
 โ โ โ user.js
 โ โฃ consts
 โ โ โฃ api.js
 โ โ โฃ index.js
 โ โ โฃ pagePath.js
 โ โ โฃ queryKey.js
 โ โ โ storageKey.js
 โ โฃ db
 โ โ โฃ accountStatus.json
 โ โ โฃ brokerFormat.json
 โ โ โฃ brokers.json
 โ โ โ sider.json
 โ โฃ util
 โ โ โฃ index.js
 โ โ โฃ storage.js
 โ โ โ util.js
 โ โ index.js
 โฃ pages
 โ โฃ Account.jsx
 โ โฃ AccountDetail.jsx
 โ โฃ Home.jsx
 โ โฃ Login.jsx
 โ โฃ User.jsx
 โ โฃ UserDetail.jsx
 โ โ index.js
 โฃ styles
 โ โฃ GlobalStyle.jsx
 โ โฃ color.js
 โ โ reset.js
 โฃ App.js
 โ index.js
```

</br>

## ๐ 8ํ ์ปจ๋ฒค์

- [Convention](https://www.notion.so/6a7522b6be6348d3b9e8e522c0c76053)
