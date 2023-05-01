import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../../components/Tile";
import { useEffect } from "react";
import axios from "axios";
import { addDataByApi, addDataByApiByName, loadDataIntoSlice } from "../../redux/slices/products";
import NavBar from "../../components/NavBar";
import LastChats from "../../components/LastChats";
import Groups from "../../components/Groups";
import ChatScreen from "../../components/ChatScreen";

const Home = () => {
  

  const dispatch = useDispatch();

  useEffect(() => {


  }, []);

  return (
    <div className="flex flex-row   w-screen h-screen  relative">

      <NavBar/>
      
<div className="w-1/5 min-w-[180px] hidden md:flex bg-purple-900  h-screen flex-col pt-12">
<Groups/>

<LastChats/>

</div>


<div className="bg-white w-full   pt-12 ">
 <ChatScreen/>
</div>


    </div>
  );
};

export default Home;
