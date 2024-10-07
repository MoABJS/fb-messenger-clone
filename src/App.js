import { useEffect, useState } from "react";
import { FormControl, Input } from "@mui/material";
import "./App.css";
import Message from "./components/Message";
import { db } from "./config/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import FlipMove from "react-flip-move";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUsername, setCurrentUsername] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "messages"), {
      username: currentUsername,
      message: input,
      timestamp: serverTimestamp(),
    });
    // setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  useEffect(() => {
    const getRealTimeData = () => {
      const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
      onSnapshot(q, (querySnapshot) => {
        const collectionData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(collectionData);
      });
    };
    getRealTimeData();
  }, []);

  useEffect(() => {
    setCurrentUsername(prompt("Please enter your name"));
  }, []);

  return (
    <div className="App">
      <img src="/assets/images.jpeg" alt="" width="100" height="100" />
      {/* <h1>Hello Clever Programmers 🚀</h1> */}
      <h1>Welcome {currentUsername}</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="form__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="form__inputButton"
            type="submit"
            color="primary"
            variant="contained"
            onClick={sendMessage}
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            currentUsername={currentUsername}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default App;
