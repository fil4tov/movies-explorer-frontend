import { Container } from 'components/UI/index'
import { type HTMLAttributes } from 'react'
import { cn } from 'utils/helpers'
import './Section.scss'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  paddingY?: 's' | 'm'
  paddingX?: 's' | 'm'
  containerClassName?: string
}

export const Section = ({
  children,
  id,
  className,
  paddingY = 'm',
  paddingX = 'm',
  containerClassName,
  ...rest
}: SectionProps) => {
  return (
    <section
      className={cn(['section', className], {
        [`section_paddingY_${paddingY}`]: Boolean(paddingY),
        [`section_paddingX_${paddingX}`]: Boolean(paddingX)
      })}
      id={id}
      {...rest}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
