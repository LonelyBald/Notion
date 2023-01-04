import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../redux';
import {
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {LeftArrowSVG} from '../../assets/svgs/LeftArrowSVG';
import {useNavigation} from '@react-navigation/native';
export const AddTodoPage = () => {
  const [todoInputValue, setTodoInputValue] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const saveTodo = () => {
    if (todoInputValue) {
      dispatch(
        addTodo({
          todo: todoInputValue,
          id: Date.now().toString(),
          toggleCheckBox: false,
        }),
      );
    } else {
      alert('Pls fill data!');
    }
    setTodoInputValue('');
  };

  const goBack = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <TouchableOpacity onPress={() => goBack()} style={styles.goBack}>
        <LeftArrowSVG />
        <Text style={styles.gobackText}>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <TextInput
          style={styles.textInput}
          placeholder="Add todo..."
          value={todoInputValue}
          onChangeText={data => setTodoInputValue(data)}
        />
        <TouchableOpacity onPress={saveTodo} style={styles.todoButton}>
          <Text style={styles.todoText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoButton: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#0a2033',
    width: '90%',
    height: 50,
    alignItems: 'center',
  },
  todoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  textInput: {
    width: '90%',
    height: 50,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#706e6e',
    padding: '2%',
    fontSize: 20,
    marginBottom: '4%',
  },
  goBack: {
    flexDirection: 'row',
    marginTop: '15%',
    marginLeft: '5%',
  },
  gobackText: {
    fontSize: 30,
    marginLeft: '20%',
    marginBottom: '90%',
    color: '#706e6e',
  },
});
