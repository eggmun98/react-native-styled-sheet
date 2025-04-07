import { ViewProps } from "react-native";

export interface SafeAreaViewProps extends ViewProps {
    children?: React.ReactNode;
    edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
    mode?: 'padding' | 'margin';
  }
  
  export type RNComponentProps = { style?: any; [key: string]: any };
  
  export type StyledComponent<P> = React.ForwardRefExoticComponent<P & React.RefAttributes<any>> & {
    attrs: <A extends Partial<P>>(attrs: A) => StyledComponent<Omit<P, keyof A> & A>;
  };