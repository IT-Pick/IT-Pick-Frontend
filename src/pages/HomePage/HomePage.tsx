import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import IntegratedRanking from "./component/IntegratedRanking";
import LiveDiscussion from "./component/LiveDiscussion";
import Advertise from "./component/Advertise";
import RankingByCommunity from "./component/RankingByCommunity";

const HomePage=()=>{
  return (
    <>
      <div className="bg-white min-h-screen"> {/*background color: white && applied to minimum height */}
      <Header/>
      <SearchBar/>
      <IntegratedRanking/>
      <LiveDiscussion/>
      <Advertise/>
      <RankingByCommunity/>
      </div>
    </>
  );
}

export default HomePage;
