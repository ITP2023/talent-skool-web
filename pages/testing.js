import { Fragment, useEffect, useState } from "react";
import { getApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import SendbirdApp from "@sendbird/uikit-react/App";
import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import "@sendbird/uikit-react/dist/index.css";


const Testing = () => {
  return (
    <Fragment>
      <SendbirdProvider
        appId="3A78459A-8A9D-4956-8BB2-7382FEDE0A22"
        userId="sendbird_desk_agent_id_93a2d648-546c-4202-842a-c3ff563af993"
        accessToken="3d3477585d4dafcf13277872867069223e5f0782"
      >
        <SendbirdApp
        
        />
      </SendbirdProvider>
    </Fragment>
  )
}

export default Testing;