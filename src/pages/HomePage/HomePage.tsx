import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import IntegratedRanking from "./component/IntegratedRanking";
import LiveDiscussion from "./component/LiveDiscussion";
import Advertise from "./component/Advertise";
import RankingByCommunity from "./component/RankingByCommunity";


const HomePage=()=>{
  return (
    <>
      <Header/>
      <SearchBar/>
      <IntegratedRanking/>
      <LiveDiscussion/>
      <Advertise/>
      <RankingByCommunity/>
    </>
  );
}

export default HomePage;
