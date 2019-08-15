import React from 'react'
import Hello from './Hello'

function LanguagesNav ({selected, onUpdateLanguage}) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
      <ul className='flex-center'>
      {languages.map((language) =>(
       <li key={language}>
         <button 
         className='btn-clear nav-link'
         //style={language === this.state.selectedLanguage ? {color: 'rgb(187 ,46, 31)'} : null}
         style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
         onClick={() => onUpdateLanguage(language)}>
         {language}
         </button> 
       </li>
      ))}    
      </ul>
  )   
}

export default class Popular extends React.Component {
  constructor(props) {
   super(props)
   
   this.state = {
     selectedLanguage: 'All'
   }
console.log(this)
   this.updateLanguage = this.updateLanguage.bind(this)
  }  
  
  updateLanguage(selectedLanguage) {
   this.setState({
   selectedLanguage
   }) 
  }

  render() {
    const { selectedLanguage } = this.state
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        <Hello/>
        </React.Fragment>
        

        
    )
    
    }   
}