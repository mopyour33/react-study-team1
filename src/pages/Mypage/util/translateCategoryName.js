import React from 'react'

const translateCategoryName = (word, from, to) => {

  let returnWord = '';
      //카테고리 체크박스
  const categoryCheckbox = [
    {key:'top',value:'주요 뉴스'},
    {key:'world',value:'세계 뉴스'},
    {key:'nation',value:'국가/국내 뉴스'},
    {key:'business',value:'경제/비즈니스'},
    {key:'technology',value:'기술/IT'},
    {key:'entertainment',value:'연예/문화'},
    {key:'sports',value:'스포츠'},
    {key:'science',value:'과학'},
    {key:'health',value:'건강/의료'}
  ];

  if(from==='english' && to === 'korean'){
    returnWord = categoryCheckbox.find(item => item.key === word);    
    return returnWord.value;

  } else if(from==='korean' && to === 'english'){
    returnWord = categoryCheckbox.find(item => item.value === word);
    return returnWord.key;
  };
}

export default translateCategoryName
