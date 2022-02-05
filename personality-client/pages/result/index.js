import React from 'react';
import { withRouter } from 'next/router'
import {Text} from "@chakra-ui/react";

const Result = ({router}) => {
  const {points} = router.query;
  return (
    <div className={"result"}>
      <Text fontSize='3xl' color={'#0f141a'} fontWeight={800} textAlign={'center'} marginBottom={10}> 🎉{" "}{
        points > 6 ? 'You are an Extrovert!' : 'You are an Introvert!'
      }</Text>
      <Text fontSize='xl' color={'#0f141a'} fontWeight={800} textAlign={'center'}>  {`You've got ${points} / 12!`}
      </Text>
      <style jsx>{`
        .result {
          height: 80%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}


export default withRouter(Result);