import { StyleSheet} from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        padding: metrics.padding,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
});

export default styles;