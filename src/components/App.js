import React, { useState, useEffect, useRef } from 'react';
import '../styles/App.css';
import { IgnoreCaseToggle } from './IgnoreCaseToggle';
import { ParagraphInput } from './ParagraphInput';
import { WordInput } from './WordInput';
import { WordsCount } from './WordsCount';

const App = () => {
 
  //const [highlightedContent, setHighlightedContent] = useState("");
  const [paraInput,setParaInput] = useState("");
  const [wordInput,setWordInput] = useState("");
  const pararef = useRef(null);
  const [toggleCase, setToggleCase] = useState(false);
  const [count, setCount] = useState(0);

  function highlightText(){
    let words = 0;
    let regexp = new RegExp(wordInput, toggleCase ? "ig" : "g");
    let updatedContent = paraInput.replace(regexp, function  (matchedword){
      words++
      return `<span class=highlighted-txt>${matchedword}</span>`
    });
    setCount(words)
    //setHighlightedContent(updatedContent)
    pararef.current.innerHTML = updatedContent;
    console.log(pararef);
  }

  useEffect(() =>{
    if(wordInput){
      highlightText();
    }
  },[paraInput, wordInput, toggleCase])


  // prop in paragraph component - highlightedContent = {highlightedContent}
  return (
    <div id="main">
      
      <ParagraphInput ref={pararef} onParaUpdate={(inputPara) => setParaInput(inputPara)}/>
      <br/>
      <WordsCount count={count} />
      <WordInput wordInput={wordInput} onSearch={(inputWord) =>  setWordInput(inputWord)} />
      <br />
      <IgnoreCaseToggle onChecked={(isChecked)=>{
        setToggleCase(isChecked);
        }}/>
    </div>
  )
}


export default App;
