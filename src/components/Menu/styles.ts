import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;

`

interface MenuContentProps {
  smallMenu: boolean;
}

export const MenuContent = styled.div<MenuContentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  animation: 0.3s ease 0s 1 normal both running jKeqlt;
  padding: ${props => props.smallMenu === true ? '5px 30px' : '20px 30px'};
  background: ${props => props.smallMenu === true ? '#0f0f0f' : 'none'} ;

  img {
    width: ${props => props.smallMenu === true ? '50px' : '200px'};
    height: ${props => props.smallMenu === true ? '50px' : '89px'};
  }

  button {
    background: none;
    border: none;
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`