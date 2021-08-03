import React, { useEffect, useState, memo } from "react";

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
};

function Twitter(props) {
  const { loading } = props;
  const [tweet, setTweet] = useState("title");

  //componentDidMount
  useEffect(() => {
    const { posts, loading } = props;
    console.log("componentDidMount", posts);
    console.log("componentDidMount: loading", loading);
  }, [props]);

  //componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate");
  }, [loading]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  const handleTweet = () => {
    setTweet("tweet atualizado");
  };

  console.log('atualizado', tweet);
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      teste
    </div>
  );
}

export default memo(Twitter, areEqual);
