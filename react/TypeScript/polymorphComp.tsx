/*
We call a component "polymorph" when it can renders in multiple shapes, for example a <Text> component
that can be an <h1> or a <p> or a <span>.
*/
type TextOwnProps<E extends React.ElementType> = {
	children: React.ReactNode
	as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & 
Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

// We assign 'div' as a default template
export default function Text<E extends React.ElementType = 'div'>(
	{children, as} : TextProps<E>
){
	const Component = as || 'div'
	return (
		<Component>{children}</Component>
	)
}
