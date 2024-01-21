import styled from "styled-components";

const Container = styled.div<{$searchBarIsVisible: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  
  width: 100%;

  .mobile-header {
    display: none;
  }
  
  @media (max-width: 991px) {
    display: block;

    form{
      display: ${({$searchBarIsVisible}) => $searchBarIsVisible ? 'flex' : 'none'};
    } 
    
    .modal-triggers {
      button {
        display: none;
      }

      .mobile {
        display: flex;
      }
    }


    .mobile-header {
      width: 100%;
      height: 48px;

      display: ${({$searchBarIsVisible}) => $searchBarIsVisible ? 'none' : 'flex'};
      align-items: center;
      justify-content: space-between;

      .sidebar-icon {

      }
    }
  }
`;

const MobileButton = styled.button`
  background-color: ${({theme}) => theme.colors.accent.toString()};
  color: ${({theme}) => theme.colors.accentText.toString()};
  font-size: ${({theme}) => theme.fontSizes.large.toString()};
  line-height: 1;
  
  border: none;
  border-radius: 100%;
  padding: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: clamp(1rem, 5vw, 2rem);
  right: clamp(1rem, 3vw, 5rem);

  z-index: 100;
`;

export { Container, MobileButton }