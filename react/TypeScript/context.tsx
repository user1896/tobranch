import { createContext, useState } from "react";

type myStateType = {
	name: string
	age: number
}

export const indexContext = createContext<
  // we're inside the template function
	{ // so the type can be an object
		index: myStateType, // the first parameter is index
		setIndex: React.Dispatch<React.SetStateAction<myStateType>> // the second parameter is the setIndex function
		// we get the type of the set state function by hovering over it when we declare it bellow
	} | null // or the type can be "null"
>(null) // the initial value is "null"

export function IndexProvider({children}: {children: React.ReactNode} ){
	// hover oever "setIndex" here to get its type that we used above
	const [index, setIndex] = useState({} as myStateType)
	return (
		<indexContext.Provider value={{index, setIndex}} >
			{/* so the value is an object that has the parameter "index" of value "index" and the parameter "setIndex"
			of value "setIndex" */}
			{children}
		</indexContext.Provider>
	)
}