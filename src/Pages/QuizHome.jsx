
import '../Components/Styles/QuizHome.css'
import { NAVBAR_CHAPCONTENTS } from './NavBar';

const Card = ({ imageSrc, title, description, path }) => (
  <div className="card">
    <img src={imageSrc} alt={title} className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a href={path} className="card-link">
        Click Here
      </a>
    </div>
  </div>
);
function App() {
  return (
    <>
      <div className="container">
        {/* <div className="topBar"><h1>Educate</h1></div> */}
        <NAVBAR_CHAPCONTENTS/>
        <div className="app">
          <Card
            imageSrc="https://img.freepik.com/free-photo/word-text-wooden-dices-brown-desk_23-2148101507.jpg?size=626&ext=jpg&ga=GA1.1.1873050670.1691914218&semt=ais"
            title="One Word Answers"
            description="Explore by clicking on the button below!"
            path="/class3/EVS/chapter1/Quiz/OneWord" 
          />
          <Card
            imageSrc="https://img.freepik.com/free-photo/arrows-pointing-randomly-with-copy-space_23-2148445498.jpg?size=626&ext=jpg&ga=GA1.1.1873050670.1691914218&semt=ais"
            title="Odd one out"
            description="Explore by clicking on the button below!"
            path="/class3/EVS/chapter1/Quiz/OddOneOut"
          />
          <Card
            imageSrc="https://img.freepik.com/free-vector/ethical-dilemma-illustration_23-2148746394.jpg?size=626&ext=jpg&ga=GA1.1.1873050670.1691914218&semt=ais"
            title="True or False"
            description="Explore by clicking on the button below!"
            path="/class3/EVS/chapter1/Quiz/TrueFalse" 
          />
        </div>
      </div>
    </>
  )
}

export default App
