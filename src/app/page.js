
import HomePage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PossibleRoomates from "./components/PossibleRoomates";
import ForYou from "./components/ForYou";
import Shortlist from "./components/Shortlist";
import FastMatches from "./components/FastMatches";
import Houses from "./components/Houses"
export default async function Home() {
  return (
    <main className="main-container">
      <HomePage/>
      <LoginForm/>
      <RegisterForm/>
      <PossibleRoomates/>
      <ForYou/>
      <Shortlist/>
      <FastMatches/>
      <Houses/>
    </main>
  );
}
