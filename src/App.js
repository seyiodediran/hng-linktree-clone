import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {

  const links = [ 
    {uniqueKey:1, id:'twitter__link', name: 'Twitter Link', link: 'https://twitter.com/odediran_'},
    {uniqueKey:2, id:'btn__zuri', name: 'Zuri Team', link: 'https://training.zuri.team/'},
    {uniqueKey:3, id:'books', name: 'Zuri Books', link: 'http://books.zuri.team/'},
    {uniqueKey:4, id:'book_python', name: 'Python Books', link: 'https://books.zuri.team/'},
    {uniqueKey:5, id:'pitch', name: 'Background Check For Coders', link: 'https://background.zuri.team/'},
    {uniqueKey:6, id:'book__design', name: 'Design Books', link: 'https://books.zuri.team/design-rules'},
  ]
  return (
    <div className="App">
      <Profile />
      <Links links={links}/>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
