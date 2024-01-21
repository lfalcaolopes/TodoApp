import React, { ReactNode} from 'react';
import * as Toast from '@radix-ui/react-toast';
import styled from 'styled-components';

interface toastContextProps {
  addToast: (toast: toastProps) => void;
}

interface toastProps {
  type: "success" | "error" | "warning";
  title?: string;
  message?: string;
  duration?: number;
}

export const ToastContext = React.createContext<toastContextProps>({} as toastContextProps);

const ToastProvider = ({ children }: { children: ReactNode}) => {
  const [openToast, setOpenToast] = React.useState(false);
  const [toastData, setToastData] = React.useState<toastProps>({} as toastProps);


  function addToast ({type, title, message, duration} : toastProps) { 
    setToastData({type, title, message, duration});
    setOpenToast(true);
  }

  return (
  <ToastContext.Provider value={{addToast}}>
    {children}

    <Toast.Provider swipeDirection="right">
      <StyledToastRoot open={openToast} onOpenChange={setOpenToast} $toastType={toastData.type} duration={toastData.duration || 3000}>
        <Toast.Title className="toastTitle">{toastData.title}</Toast.Title>
        <Toast.Description className='toastDescription'>{toastData.message}</Toast.Description>
      </StyledToastRoot>

      <StyledToastViewport />
    </Toast.Provider>
  </ToastContext.Provider>
  );
};

const StyledToastRoot = styled(Toast.Root)<{$toastType: "success" | "error" | "warning"}>`

  ${( props ) => props.$toastType === "error" && `
    background-color: ${props.theme.functionalColors.errorBackground.toString()};
    border: 2px solid ${props.theme.functionalColors.error.toString()};
  `}

  ${( props ) => props.$toastType === "success" && `
    background-color: ${props.theme.functionalColors.successBackground.toString()};
    border: 2px solid ${props.theme.functionalColors.success.toString()};
  `}

  ${( props ) => props.$toastType === "warning" && `
    background-color: ${props.theme.functionalColors.warningBackground.toString()};
    border: 2px solid ${props.theme.functionalColors.warning.toString()};
  `}

  border-radius: 0.5rem;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;

  .toastTitle {
    font-size: 1rem;

  ${( props ) => props.$toastType === "error" && `
    color: ${props.theme.functionalColors.error.toString()};
  `}

  ${( props ) => props.$toastType === "success" && `
    color: ${props.theme.functionalColors.success.toString()};
  `}

  ${( props ) => props.$toastType === "warning" && `
    color: ${props.theme.functionalColors.warning.toString()};
  `}
  }

  .toastDescription {
    font-size: 1.1rem;

  ${( props ) => props.$toastType === "error" && `
    color: ${props.theme.functionalColors.errorDark.toString()};
  `}

  ${( props ) => props.$toastType === "success" && `
    color: ${props.theme.functionalColors.successDark.toString()};
  `}

  ${( props ) => props.$toastType === "warning" && `
    color: ${props.theme.functionalColors.warningDark.toString()};
  `}
  }
`;

const StyledToastViewport = styled(Toast.Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`;

export default ToastProvider;
