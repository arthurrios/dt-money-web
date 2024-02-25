import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionModal />
      </HeaderContent>
    </HeaderContainer>
  )
}
