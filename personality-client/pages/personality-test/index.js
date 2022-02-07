import React, {useState} from 'react';
import { useRouter } from 'next/router'
import { Progress } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';

const PersonalityTest = ({testBank}) => {
  const [questionId, setQuestionId] = useState(0);
  const [points, setPoints] = useState([]);
  const [value, setValue] = useState(-1)
  const router = useRouter()

  const question = testBank[questionId].question;
  const answers = testBank[questionId].answers;

  const handleNextClick = () => {
    setPoints([...points, answers[value]?.point]);
    setQuestionId(questionId + 1);
    setValue(-1);
  }

  const handleBackClick = () => {
    setPoints(points.slice(0,-1));
    setQuestionId(questionId-1)
  }

  const redirect = async () => {
    const pointsSum = points.reduce((a,b) => a+b);
    await router.push({
      pathname: '/result',
      query: { points: pointsSum }
    });
  }

  return (
    <div className="question">
      <Progress hasStripe colorScheme={'twitter'} value={((questionId+1)*100)/testBank.length} width={800} marginBottom={50}/>

      <div className={'backButton'}>
        <Button
          colorScheme='536371'
          variant='link'
          isDisabled={questionId===0}
          onClick={handleBackClick}
          className={"backButton"}
          leftIcon={<Icon as={ArrowBackIcon}
          aria-label={'back'}/>}>
          Back
        </Button>
      </div>
      <Text fontSize='1xl' color={'#536371'} fontWeight={800} textAlign={'center'}>Question #{questionId+1} / 5</Text>
      <Text fontSize='2xl' color={'#0f141a'} fontWeight={800} textAlign={'center'} width={600} maxHeight={200}>{question}</Text>

      <RadioGroup onChange={setValue} value={value} margin={30} height={150} width={450}>
        <Stack direction='column'>
          {answers.map(({answer, point}, index) =>
            <Radio value={index} key={`radio-${index}`} colorScheme='twitter'>{answer}</Radio>
            )}
        </Stack>
      </RadioGroup>

      <ButtonGroup>
        { questionId === testBank.length - 1 ?
            <Button colorScheme='twitter' isDisabled={value===-1} onClick={redirect}>Get a result</Button> :
            <Button colorScheme='twitter' isDisabled={value===-1} onClick={handleNextClick} aria-label={'next'}>Next</Button>
        }
      </ButtonGroup>

      <style jsx>{`
        .question {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .backButton {
          display: flex;
          width: 100%;
        }
        
        `}
      </style>
      </div>

  )
};

export default PersonalityTest;

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/test`);
  const data = await res.json();
  return {
    props: {
      testBank: data
    },
  }
}
