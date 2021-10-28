import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Cover from '../screens/cover';
import Questionnaire from '../screens/startQuestionnaire';

const screens = {
    Cover: {
        screen: Cover
            },
    Questionnaire: {
        screen: Questionnaire
            }
        
    }

    const CoverStack = createStackNavigator(screens);

    export default createAppContainer(CoverStack);
