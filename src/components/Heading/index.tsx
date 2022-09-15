/********** Module Imports **********/

// 3rd-party
import { Text, View, ViewProps } from 'react-native';

// styles and assets
import { styles } from './styles';

/********** Interfaces **********/
interface HeadingProps extends ViewProps {
    title: string;
    subtitle: string;
}

/**
 * Component: Heading
 * 
 * A textual component containing a title and subtitle.
 */
export function Heading({ title, subtitle, ...rest }: HeadingProps) {
  
    /********** TSX Code **********/
  
  return (
    <View style={styles.container} {...rest}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
