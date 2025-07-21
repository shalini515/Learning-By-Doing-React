import ProfileCard from './ProfileCard';
import profile from './assets/profile.png';
import './App.css';

function App() {
  return (
      <ProfileCard 
        name="Shalini Venkatesan" 
        title="Aspiring FullStack Developer"
        quote='"You are the creator of your own destiny"'
        image={profile}
        github="https://github.com/shalini515"
        medium ="https://medium.com/@shalinivenkatesan"
        linkedin="https://linkedin.com/in/shalini-venkatesan"
      />
    );
}
export default App;