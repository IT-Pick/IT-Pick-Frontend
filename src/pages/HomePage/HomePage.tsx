import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import IntegratedRanking from "./component/IntegratedRanking";
import LiveDiscussion from "./component/LiveDiscussion";
import RankingByCommunity from "./component/RankingByCommunity";

const HomePage=()=>{
  return (
    <>
      <div className="bg-white min-h-screen"> {/*background color: white && applied to minimum height */}
      <Header/>
      <SearchBar/>
      <IntegratedRanking/>
      <LiveDiscussion/>
      <RankingByCommunity/>
      </div>
    </>
  );
}

export default HomePage;
