import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const info = [
    {
      image: "https://placeholder.com/300",
      para: "this is the first ",
    },
    {
      image: "https://placeholder.com/400",
      para: "this is the second ",
    },
    {
      image: "https://placeholder.com/500",
      para: "this is the third ",
    },
    {
      image: "https://placeholder.com/200",
      para: "this is the fourth ",
    },
  ];

  return (
        
 info.map((item, index) => {
 
  return (  <ProfileCard key={index} pic={item.image} line={item.para} />)
 
 })
     
     
     
    
  );
}

export default App;
