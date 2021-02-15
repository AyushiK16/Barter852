import {createStackNavigator} from 'react-navigation-stack'
import DonateItem from '../screens/DonateScreen';
import DetailsScreen from '../screens/DetailsScreen';

export const StackNavigator = createStackNavigator({
    BookDonateList : {screen : DonateItem,
        navigationOptions : {headerShown : false}},
    
    RecieverDetails : {screen : DetailsScreen,
        navigationOptions : {headerShown : false}}
},

{intialRouteName : 'BookDonateList'}

)


