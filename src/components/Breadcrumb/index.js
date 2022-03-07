import React from 'react'

import {Breadcrumb, Link} from 'semantic-ui-react'

import './styles.scss'

const BreadcrumbCustom = ({data}) => {
  //Note: data sample: data = [{title: 'Home'}, {title: 'Log in'}]

  return (
    <Breadcrumb>
      {data.map((dt, index) => {
        const isLastItem = index === data.length - 1
        return (
          <>
            <Breadcrumb.Section
              key={dt.title}
              link={!isLastItem}
              active={isLastItem}
              as={Link}
              href={dt?.link}>
              {dt.title}
            </Breadcrumb.Section>
            <Breadcrumb.Divider
              icon={!isLastItem ? 'angle double right' : ''}
            />
          </>
        )
      })}
    </Breadcrumb>
  )
}
export default BreadcrumbCustom
