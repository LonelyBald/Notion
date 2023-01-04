import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {AddTodoPage} from './AddTodoPage';
import {useNavigation} from '@react-navigation/native';
import {AddPlusCircleSVG} from '../../assets/svgs/AddPlusCircleSVG';
import {useDispatch, useSelector} from 'react-redux';
import {Swipeable} from 'react-native-gesture-handler';
import {removeTodo, setToggleCheckBox} from '../redux';

export const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const addNewTodo = () => {
    navigation.navigate('AddTodoPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AzaliaNow</Text>
      <View style={styles.addTodo}>
        <ScrollView>
          {todos.map(({todo, id, toggleCheckBox}, index) => {
            return (
              <Swipeable
                key={index}
                renderLeftActions={(progress, dragX) => {
                  const scale = dragX.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  });
                  return (
                    <TouchableOpacity
                      onPress={() => dispatch(removeTodo({id}))}
                      style={styles.deleteBox}>
                      <Animated.Text
                        style={{
                          transform: [{scale: scale}],
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        Delete
                      </Animated.Text>
                    </TouchableOpacity>
                  );
                }}>
                <View style={styles.todosContainer}>
                  <CheckBox
                    disabled={false}
                    boxType="square"
                    onFillColor="grey"
                    onCheckColor="white"
                    onTintColor="grey"
                    value={toggleCheckBox}
                    onValueChange={newValue =>
                      dispatch(setToggleCheckBox(newValue))
                    }
                  />
                  <Text style={styles.todosText}>{todo}</Text>
                </View>
              </Swipeable>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.circle} onPress={() => addNewTodo()}>
        <AddPlusCircleSVG />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 30,
    color: 'red',
    marginTop: '25%',
    marginBottom: '5%',
    marginLeft: '10%',
  },
  circle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    backgroundColor: '#0a2033',
    borderRadius: 50,
  },
  addTodo: {
    width: '100%',
    height: '82%',
  },
  todosContainer: {
    width: '90%',
    height: 50,
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#706e6e',
    padding: '2%',
    fontSize: 20,
    marginLeft: '5%',
    marginBottom: '4%',
  },
  todosText: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 4,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 50,
    borderRadius: 8,
  },
});
