import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Alert } from '../components/Alert';
import { Button, ButtonContainer } from '../components/Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safeArea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
});

function Quiz({ route }) {
  const TEMP_QUESTIONS = route.params.questions || [];
  const bgColor = route.params.color || '#fff';

  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(TEMP_QUESTIONS.length);
  const [activeQuesIndex, setActiveQuesIndex] = useState(0);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);

  const question = TEMP_QUESTIONS[activeQuesIndex];

  const Answer = (correct) => {
    setAnswered(true);

    if (correct) {
      setCorrectCount(correctCount + 1);
      setAnswerCorrect(true);
    } else {
      setAnswerCorrect(false);
    }
    setTimeout(() => nextQuestion(), 750); // move to next ques
  };

  const nextQuestion = () => {
    let nextIndex = activeQuesIndex + 1;
    if (nextIndex >= totalCount) nextIndex = 0;
    setAnswered(false);
    setActiveQuesIndex(nextIndex);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Text style={styles.text}>{question.question}</Text>
          <ButtonContainer>
            {question.answers.map((answer) => (
              <Button
                key={`${answer.id}`}
                text={answer.text}
                onPress={() => Answer(answer.correct)}
              />
            ))}
          </ButtonContainer>
        </View>
        <Text style={styles.text}>{`${correctCount} / ${totalCount}`}</Text>
      </SafeAreaView>

      <Alert correct={answerCorrect} visible={answered} />
    </View>
  );
}

export default Quiz;
