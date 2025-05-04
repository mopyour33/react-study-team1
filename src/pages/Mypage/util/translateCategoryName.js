import React from 'react'

const translateCategoryName = (word, from, to) => {

  let returnWord = '';
      //wordlist
  const wordList = [
    {key:'top',value:'주요 뉴스'},
    {key:'world',value:'세계 뉴스'},
    {key:'nation',value:'국가/국내 뉴스'},
    {key:'business',value:'경제/비즈니스'},
    {key:'technology',value:'기술/IT'},
    {key:'entertainment',value:'연예/문화'},
    {key:'sports',value:'스포츠'},
    {key:'science',value:'과학'},
    {key:'health',value:'건강/의료'},
    {key:'ID',value:'아이디'},
    {key:'Password',value:'비밀번호'},
    {key:'Email',value:'이메일주소'},
    {key:'Name',value:'이름'},
    {key:'Birth',value:'생년월일'},
    {key:'Address',value:'주소'},
    {key:'ZipCode',value:'우편번호'},
    {key:'AddressDetail',value:'상세 주소'},    
    {key:'PhoneNumber',value:'전화번호'},
  ];

  if(from==='english' && to === 'korean'){
    returnWord = wordList.find(item => item.key === word);    
    return returnWord.value;

  } else if(from==='korean' && to === 'english'){
    returnWord = wordList.find(item => item.value === word);
    return returnWord.key;
  };
}

export default translateCategoryName
