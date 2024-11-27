import React from "react";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import './index.css'
import { useParams } from "react-router-dom";
const RoomPage = ()=>{

const { RoomId } = useParams();
console.log(RoomId);
const  myMetting = async (element) =>{
    const appID = 589560659;
    const serverSecret = "3ab9152a3bcd885858f290421619077f";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, 
        serverSecret,
         RoomId,
          Date.now().toString(),
           "Enter Your Name ");
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
        container: element,
        sharedLinks: [{
            name: 'Personal link',
            url: `https://dispensaryms-1-1.onrender.com/Videoc/Room/${RoomId}`
             
          },
        ],
        scenario:{
            mode: ZegoUIKitPrebuilt.OneONoneCall
        },
        showScreenSharingButton: true,
    })
}
    return(
    <div className="room_div">

{/* <h1>Room Page  { RoomId }</h1> */}
<div id="videocall_container">
<div ref={myMetting}/>
</div>




    </div>
    )
  
}

export default RoomPage;