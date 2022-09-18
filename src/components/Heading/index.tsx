/********** Module Imports **********/

// 3rd-party
import { Text, View, ViewProps } from 'react-native';

// styles and assets
import { styles } from './styles';

/********** Interfaces **********/
interface HeadingProps extends ViewProps {
  title: string;    /** Title to be displayed. */
  subtitle: string; /** Subtitle to be displayed. */
}

/**
 * Component: Heading
 * 
 * A textual component containing a title and subtitle.
 */
export function Heading({ title, subtitle, ...remainingProps }: HeadingProps) {
  
  /********** TSX Code **********/
  
  return (
    <View style={styles.container} {...remainingProps}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
