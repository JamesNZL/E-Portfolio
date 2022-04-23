import React, {useEffect, useState} from 'react';
import './Styles/App.scss';
import Header from './Components/HomePage/Header';
import ProjectHighlights from './Components/HomePage/ProjectHighlights';
import AboutMe from './Components/HomePage/AboutMe';
import TechnicalSkills from "./Components/HomePage/TechnicalSkills";
import ContactMe from "./Components/HomePage/ContactMe";

type Theme = 'light' | 'dark';

function App() {

  const [theme, setTheme] = useState<Theme>(getDefaultTheme());

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.theme = theme;
  }, [theme])



  function getDefaultTheme(): Theme {
    let theme: Theme = 'dark';

    if (localStorage.theme)
      theme = localStorage.theme;
    return theme;
  }

  const updateTheme = (newTheme: Theme): void => {
    document.body.classList.remove(theme); // Remove old theme class
    setTheme(newTheme);
  }

  const toggleTheme = (): void => {
    if (theme === 'dark')
      updateTheme('light');
    else
      updateTheme('dark');
  }

  return (
    <div className="App">
      <header className="app-header">
        <Header
            toggleTheme={toggleTheme}
            sections={[['About Me', ''], ['Skills', 'technical-skills'], ['Projects', 'projects'], ['Contact Me', 'contact-me']]}
            currentTheme={theme}
        />
      </header>
      <div className="centred-body dark:text-gray-200 text-gray-800 pb-32">
        <AboutMe/>
        <TechnicalSkills/>
        <ProjectHighlights/>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
