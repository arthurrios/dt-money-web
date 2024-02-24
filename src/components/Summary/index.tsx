import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { SummaryCard, SummaryContainer } from './styles'
import { useTheme } from 'styled-components'

export function Summary() {
  const theme = useTheme()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color={theme.green_300} />
        </header>

        <strong>$ 10.000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={32} color={theme.red_300} />
        </header>

        <strong>$ 10.000,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>$ 10.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
