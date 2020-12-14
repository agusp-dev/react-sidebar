import React from 'react'

const Page = ({ toggle }) => {

	const getPagePadding = () => {
		return toggle 
    ? '156px'
    : '0'
	}

  return (
		<div className='page-container' style={{ paddingLeft: `${ getPagePadding() }` }}>
			<h1>This is a Page</h1>
		</div>
	)
}

export { Page }