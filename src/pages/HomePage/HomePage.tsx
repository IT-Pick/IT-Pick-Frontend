import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import IntegratedRanking from "./component/IntegratedRanking";
import LiveDiscussion from "./component/LiveDiscussion";
import CommunityRanking from "./component/CommunityRanking";

const HomePage=()=>{
  return (
    <>
      <div className="bg-white flex flex-col items-center w-screen"> {/*background color: white && applied to minimum height */}
      <Header/>
      <SearchBar/>
      <IntegratedRanking/>
      <LiveDiscussion/>
      <CommunityRanking/>
      </div>
    </>
  );
}

export default HomePage;
